#!/bin/bash
set -e

echo "=== 步骤 1: 本地构建前端（macOS）==="
cd ~/Desktop/node/lobe-chat-canary

# 确保本地依赖已安装
if [ ! -d "node_modules" ]; then
  echo "安装本地依赖..."
  pnpm install
fi

# 本地构建前端（避免 Docker 内的 eval 问题）
echo "构建 SPA..."
pnpm run build:spa
echo "复制 SPA 资源..."
pnpm run build:spa:copy
echo "构建 Next.js..."
pnpm run build:next

echo "=== 步骤 2: Docker 打包 Windows 应用 ==="
docker run --rm -ti \
  --platform linux/amd64 \
  --env ELECTRON_CACHE="/root/.cache/electron" \
  --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
  -v $(pwd):/project \
  -v ~/.cache/electron:/root/.cache/electron \
  -v ~/.cache/electron-builder:/root/.cache/electron-builder \
  electronuserland/builder:wine \
  /bin/bash -c '
    set -e
    cd /project
    
    echo "安装 pnpm..."
    npm install -g pnpm@10.20.0
    
    echo "配置 pnpm..."
    pnpm config set store-dir /tmp/pnpm-store
    pnpm config set node-linker hoisted
    
    echo "安装 desktop 依赖..."
    cd apps/desktop
    pnpm install --no-frozen-lockfile
    
    echo "构建 Electron 主进程..."
    NODE_OPTIONS=--max-old-space-size=8192 npx electron-vite build
    
    echo "打包 Windows 应用..."
    npx electron-builder --win --x64 --config electron-builder.mjs --publish never
    
    echo "修复权限..."
    chown -R $(id -u):$(id -g) /project/apps/desktop/dist
  '

echo "=== 完成！ ==="
ls -lh ~/Desktop/node/lobe-chat-canary/apps/desktop/dist/*.exe
