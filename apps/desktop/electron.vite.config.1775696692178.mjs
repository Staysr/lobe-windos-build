// electron.vite.config.ts
import { readFileSync } from "node:fs";
import path2 from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "electron-vite";
import { loadEnv } from "vite";

// ../../plugins/vite/sharedRendererConfig.ts
import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tsconfigPaths from "vite-tsconfig-paths";

// ../../plugins/vite/emotionSpeedy.ts
function viteEmotionSpeedy() {
  return {
    name: "emotion-speedy",
    enforce: "pre",
    transform(code, id) {
      if (id.includes("antd-style") && code.includes("speedy: false")) {
        return {
          code: code.replaceAll("speedy: false", "speedy: true"),
          map: null
        };
      }
    }
  };
}

// ../../plugins/vite/markdownImport.ts
import { readFile } from "node:fs/promises";
var MARKDOWN_IMPORT_QUERY = "lobe-md-import";
function hasQuery(id) {
  return id.includes("?");
}
function isMarkdownFile(id) {
  return id.replace(/[?#].*$/, "").endsWith(".md");
}
function matchesMarkdownImportQuery(id) {
  const query = id.split("?")[1];
  if (!query) return false;
  const params = new URLSearchParams(query);
  return params.has(MARKDOWN_IMPORT_QUERY);
}
function withMarkdownImportQuery(id) {
  return `${id}${hasQuery(id) ? "&" : "?"}${MARKDOWN_IMPORT_QUERY}`;
}
function viteMarkdownImport() {
  return {
    enforce: "pre",
    async load(id) {
      if (!matchesMarkdownImportQuery(id)) return null;
      const filePath = id.replace(/[?#].*$/, "");
      const content = await readFile(filePath, "utf8");
      return `export default ${JSON.stringify(content)};`;
    },
    name: "vite-markdown-import",
    async resolveId(source, importer, options) {
      if (!importer || hasQuery(source) || !isMarkdownFile(source)) return null;
      const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });
      if (!resolved) return null;
      return {
        id: withMarkdownImportQuery(resolved.id),
        moduleSideEffects: false
      };
    }
  };
}

// ../../plugins/vite/nodeModuleStub.ts
function viteNodeModuleStub() {
  const stubbedModules = /* @__PURE__ */ new Set(["node:stream", "node-fetch"]);
  const VIRTUAL_PREFIX = "\0node-stub:";
  return {
    enforce: "pre",
    load(id) {
      if (id.startsWith(VIRTUAL_PREFIX)) return "export default {};";
      return null;
    },
    name: "vite-node-module-stub",
    resolveId(source) {
      if (stubbedModules.has(source)) {
        return { id: `${VIRTUAL_PREFIX}${source}`, moduleSideEffects: false };
      }
      return null;
    }
  };
}

// ../../plugins/vite/platformResolve.ts
import { access } from "node:fs/promises";
function vitePlatformResolve(platform) {
  const suffixes = [];
  if (platform) suffixes.push(`.${platform}`);
  suffixes.push(".vite");
  const EXT_RE = /\.(ts|tsx|js|jsx)$/;
  const PLATFORM_RE = /\.(?:vite|web|mobile|desktop)\.(?:ts|tsx|js|jsx)$/;
  return {
    enforce: "pre",
    name: "vite-platform-resolve",
    async resolveId(source, importer, options) {
      if (!importer || importer.includes("node_modules")) return null;
      const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });
      if (!resolved) return null;
      const id = resolved.id.split("?")[0];
      const extMatch = id.match(EXT_RE);
      if (!extMatch) return null;
      if (PLATFORM_RE.test(id)) return null;
      const basePath = id.slice(0, -extMatch[0].length);
      const ext = extMatch[0];
      for (const suffix of suffixes) {
        const candidate = `${basePath}${suffix}${ext}`;
        try {
          await access(candidate);
          return candidate;
        } catch {
        }
      }
      return null;
    }
  };
}

// ../../plugins/vite/sharedRendererConfig.ts
var HEAVY_NS = /* @__PURE__ */ new Set(["models", "modelProvider"]);
var ANTD_LOCALE = {
  ar_EG: "ar",
  bg_BG: "bg-BG",
  de_DE: "de-DE",
  en_US: "en-US",
  es_ES: "es-ES",
  fa_IR: "fa-IR",
  fr_FR: "fr-FR",
  it_IT: "it-IT",
  ja_JP: "ja-JP",
  ko_KR: "ko-KR",
  nl_NL: "nl-NL",
  pl_PL: "pl-PL",
  pt_BR: "pt-BR",
  ru_RU: "ru-RU",
  tr_TR: "tr-TR",
  vi_VN: "vi-VN",
  zh_CN: "zh-CN",
  zh_TW: "zh-TW"
};
var DAYJS_LOCALE = {
  "ar": "ar",
  "bg": "bg-BG",
  "de": "de-DE",
  "en": "en-US",
  "es": "es-ES",
  "fa": "fa-IR",
  "fr": "fr-FR",
  "it": "it-IT",
  "ja": "ja-JP",
  "ko": "ko-KR",
  "nl": "nl-NL",
  "pl": "pl-PL",
  "pt-br": "pt-BR",
  "ru": "ru-RU",
  "tr": "tr-TR",
  "vi": "vi-VN",
  "zh-cn": "zh-CN",
  "zh-tw": "zh-TW"
};
function sharedManualChunks(id) {
  const localeMatch = id.match(/\/locales\/([^/]+)\/([^/.]+)/);
  if (localeMatch) {
    const [, locale, ns] = localeMatch;
    if (locale === "default") return "i18n-default";
    if (HEAVY_NS.has(ns)) return `i18n-${locale}-${ns}`;
    return `i18n-${locale}`;
  }
  if (id.includes("model-bank")) return "providerConfig";
  if (!id.includes("node_modules")) return;
  const antdMatch = id.match(/antd\/es\/locale\/([^/.]+)\.js/);
  if (antdMatch) {
    const locale = ANTD_LOCALE[antdMatch[1]];
    if (locale) return `i18n-${locale}`;
  }
  const dayjsMatch = id.match(/dayjs\/locale\/([^/.]+)\.js/);
  if (dayjsMatch) {
    const locale = DAYJS_LOCALE[dayjsMatch[1]];
    if (locale) return `i18n-${locale}`;
  }
  if (id.includes("lucide-react")) return "vendor-icons";
  if (id.includes("es-toolkit")) return "vendor-es-toolkit";
  if (id.includes("@emotion/")) return "vendor-emotion";
  if (id.includes("/motion/") || id.includes("framer-motion")) return "vendor-motion";
}
var sharedRollupOutput = {
  chunkFileNames: (chunkInfo) => {
    const { name } = chunkInfo;
    if (name.startsWith("i18n-")) return "i18n/[name]-[hash].js";
    if (name.startsWith("vendor-")) return "vendor/[name]-[hash].js";
    return "assets/[name]-[hash].js";
  },
  manualChunks: sharedManualChunks
};
var isDev = process.env.NODE_ENV !== "production";
function sharedRendererPlugins(options) {
  const defaultTsconfigPaths = options.tsconfigPaths ?? true;
  return [
    viteEmotionSpeedy(),
    viteMarkdownImport(),
    nodePolyfills({ include: ["buffer"] }),
    viteNodeModuleStub(),
    vitePlatformResolve(options.platform),
    defaultTsconfigPaths && tsconfigPaths({ projects: ["."] }),
    isDev && codeInspectorPlugin({
      bundler: "vite",
      exclude: [/\.(css|json)$/],
      hotKeys: ["altKey", "ctrlKey"]
    }),
    react()
  ];
}
function sharedRendererDefine(options) {
  const nextPublicDefine = Object.fromEntries(
    Object.entries(process.env).filter(([key]) => key.toUpperCase().startsWith("NEXT_PUBLIC_")).map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)])
  );
  return {
    "__CI__": process.env.CI === "true" ? "true" : "false",
    "__DEV__": process.env.NODE_ENV !== "production" ? "true" : "false",
    "__ELECTRON__": JSON.stringify(options.isElectron),
    "__MOBILE__": JSON.stringify(options.isMobile),
    ...nextPublicDefine,
    // Keep a safe fallback so generic `process.env` access won't crash in browser runtime.
    "process.env": "{}"
  };
}
var sharedOptimizeDeps = {
  include: [
    "react",
    "react-dom",
    "react-dom/client",
    "react-router-dom",
    "antd",
    "@ant-design/icons",
    "@lobehub/ui",
    "@lobehub/ui > @emotion/react",
    "antd-style",
    "zustand",
    "zustand/middleware",
    "swr",
    "i18next",
    "react-i18next",
    "dayjs",
    "dayjs/esm/locale/ar",
    "dayjs/esm/locale/bg",
    "dayjs/esm/locale/de",
    "dayjs/esm/locale/en",
    "dayjs/esm/locale/es",
    "dayjs/esm/locale/fa",
    "dayjs/esm/locale/fr",
    "dayjs/esm/locale/it",
    "dayjs/esm/locale/ja",
    "dayjs/esm/locale/ko",
    "dayjs/esm/locale/nl",
    "dayjs/esm/locale/pl",
    "dayjs/esm/locale/pt-br",
    "dayjs/esm/locale/ru",
    "dayjs/esm/locale/tr",
    "dayjs/esm/locale/vi",
    "dayjs/esm/locale/zh-cn",
    "dayjs/esm/locale/zh-tw",
    "ahooks",
    "motion/react"
  ]
};

// native-deps.config.mjs
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
var __electron_vite_injected_import_meta_url = "file:///Users/luckin/Desktop/node/lobe-chat-canary/apps/desktop/native-deps.config.mjs";
var __dirname2 = path.dirname(fileURLToPath(__electron_vite_injected_import_meta_url));
function getTargetPlatform() {
  return process.env.npm_config_platform || os.platform();
}
var isDarwin = getTargetPlatform() === "darwin";
var nativeModules = [
  // macOS-only native modules
  ...isDarwin ? ["node-mac-permissions"] : [],
  "@napi-rs/canvas"
  // Add more native modules here as needed
];
function resolveDependencies(moduleName, visited = /* @__PURE__ */ new Set(), nodeModulesPath = path.join(__dirname2, "node_modules")) {
  if (visited.has(moduleName)) {
    return visited;
  }
  visited.add(moduleName);
  const packageJsonPath = path.join(nodeModulesPath, moduleName, "package.json");
  if (!fs.existsSync(packageJsonPath)) {
    return visited;
  }
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    const dependencies = packageJson.dependencies || {};
    const optionalDependencies = packageJson.optionalDependencies || {};
    for (const dep of Object.keys(dependencies)) {
      resolveDependencies(dep, visited, nodeModulesPath);
    }
    for (const dep of Object.keys(optionalDependencies)) {
      resolveDependencies(dep, visited, nodeModulesPath);
    }
  } catch {
  }
  return visited;
}
function getAllDependencies() {
  const allDeps = /* @__PURE__ */ new Set();
  for (const nativeModule of nativeModules) {
    const deps = resolveDependencies(nativeModule);
    for (const dep of deps) {
      allDeps.add(dep);
    }
  }
  return [...allDeps];
}
function getExternalDependencies() {
  return getAllDependencies();
}

// electron.vite.config.ts
var __electron_vite_injected_dirname = "/Users/luckin/Desktop/node/lobe-chat-canary/apps/desktop";
function electronDesktopHtmlPlugin() {
  return {
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === "/" || req.url === "/index.html") {
          req.url = "/apps/desktop/index.html";
        }
        next();
      });
    },
    name: "electron-desktop-html"
  };
}
dotenv.config();
var isDev2 = process.env.NODE_ENV === "development";
var ROOT_DIR = path2.resolve(__electron_vite_injected_dirname, "../..");
var mode = process.env.NODE_ENV === "production" ? "production" : "development";
Object.assign(process.env, loadEnv(mode, ROOT_DIR, ""));
var updateChannel = process.env.UPDATE_CHANNEL;
var desktopPackageJson = JSON.parse(
  readFileSync(path2.resolve(__electron_vite_injected_dirname, "package.json"), "utf8")
);
console.info(`[electron-vite.config.ts] Detected UPDATE_CHANNEL: ${updateChannel}`);
var electron_vite_config_default = defineConfig({
  main: {
    build: {
      minify: !isDev2,
      outDir: "dist/main",
      rollupOptions: {
        // Native modules must be externalized to work correctly.
        // bufferutil and utf-8-validate are optional peer deps of ws that may not be installed.
        external: [...getExternalDependencies(), "bufferutil", "utf-8-validate"],
        output: {
          // Prevent debug package from being bundled into index.js to avoid side-effect pollution
          manualChunks(id) {
            if (id.includes("node_modules/debug")) {
              return "vendor-debug";
            }
            const normalizedId = id.replaceAll("\\", "/").split("?")[0];
            const match = normalizedId.match(/\/locales\/[^/]+\/([^/]+)\.json$/);
            if (match?.[1]) return `locales-${match[1]}`;
          }
        }
      },
      sourcemap: isDev2 ? "inline" : false
    },
    define: {
      "process.env.UPDATE_CHANNEL": JSON.stringify(process.env.UPDATE_CHANNEL),
      "process.env.UPDATE_SERVER_URL": JSON.stringify(process.env.UPDATE_SERVER_URL)
    },
    resolve: {
      alias: {
        "@": path2.resolve(__electron_vite_injected_dirname, "src/main"),
        "~common": path2.resolve(__electron_vite_injected_dirname, "src/common")
      }
    }
  },
  preload: {
    build: {
      minify: !isDev2,
      outDir: "dist/preload",
      sourcemap: isDev2 ? "inline" : false
    },
    resolve: {
      alias: {
        "@": path2.resolve(__electron_vite_injected_dirname, "src/main"),
        "~common": path2.resolve(__electron_vite_injected_dirname, "src/common")
      }
    }
  },
  renderer: {
    root: ROOT_DIR,
    build: {
      outDir: path2.resolve(__electron_vite_injected_dirname, "dist/renderer"),
      rollupOptions: {
        input: path2.resolve(__electron_vite_injected_dirname, "index.html"),
        output: sharedRollupOutput
      }
    },
    define: {
      ...sharedRendererDefine({ isMobile: false, isElectron: true }),
      __MAIN_VERSION__: JSON.stringify(desktopPackageJson.version)
    },
    optimizeDeps: sharedOptimizeDeps,
    plugins: [
      electronDesktopHtmlPlugin(),
      ...sharedRendererPlugins({ platform: "desktop" })
    ],
    resolve: {
      dedupe: ["react", "react-dom"]
    }
  }
});
export {
  electron_vite_config_default as default
};
