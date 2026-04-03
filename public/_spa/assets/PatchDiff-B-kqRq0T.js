import{j as lt,c5 as ze,m as Q,c9 as $n,nD as dt,nE as Bn,nF as Ze,bu as Ne,nG as ft,nH as ct,nI as be,F as Y,cb as jn}from"./index-BmW5CTHd.js";import{r as P}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as T}from"../vendor/vendor-motion-DRC1LdIk.js";import{B as cn}from"../vendor/vendor-es-toolkit-O0KSByiM.js";const un="lobe-code-diff",F=lt(({css:e,cssVar:n})=>({actions:e`
      position: absolute;
      z-index: 2;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      opacity: 0;
      transition: opacity 0.2s ${n.motionEaseInOut};
    `,additions:e`
      color: ${n.colorSuccess};
      font-family: ${n.fontFamilyCode};
      font-size: 12px;
    `,body:e`
      overflow: auto;

      width: 100%;

      font-family: ${n.fontFamilyCode};
      font-size: 13px;
      line-height: 1.6;

      /* Override @pierre/diffs shadow DOM CSS variables */
      --pdiff-font-family: ${n.fontFamilyCode};
      --pdiff-font-size: 13px;
      --pdiff-line-height: 1.6;
      --pdiff-bg-color: transparent;
      --pdiff-border-color: ${n.colorBorderSecondary};
      --pdiff-gutter-bg: ${n.colorFillQuaternary};
      --pdiff-gutter-color: ${n.colorTextQuaternary};
      --pdiff-added-bg: ${n.colorSuccessBgHover};
      --pdiff-added-highlight-bg: ${n.colorSuccessBg};
      --pdiff-removed-bg: ${n.colorErrorBgHover};
      --pdiff-removed-highlight-bg: ${n.colorErrorBg};
      --pdiff-info-bg: ${n.colorInfoBg};
    `,borderless:ze.variantBorderlessWithoutHover,deletions:e`
      color: ${n.colorError};
      font-family: ${n.fontFamilyCode};
      font-size: 12px;
    `,filled:Q(ze.variantFilledWithoutHover,e`
        background: ${n.colorFillQuaternary};
      `),header:e`
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: space-between;

      padding: 8px 12px;

      font-family: ${n.fontFamilyCode};
      font-size: 13px;
      color: ${n.colorTextSecondary};

      border-block-end: 1px solid ${n.colorBorderSecondary};
    `,headerBorderless:e`
      padding-inline: 0;
      border-block-end: none;
    `,headerFilled:e`
      background: transparent;
    `,headerOutlined:e`
      background: ${n.colorFillQuaternary};
    `,outlined:ze.variantOutlinedWithoutHover,root:Q(un,e`
        position: relative;

        overflow: hidden;

        width: 100%;
        border-radius: ${n.borderRadius};

        transition: background-color 100ms ${n.motionEaseOut};

        &:hover {
          .${un}-actions {
            opacity: 1;
          }
        }
      `),stats:e`
      display: flex;
      gap: 8px;
      align-items: center;
    `})),Wn=$n(F.root,{defaultVariants:{variant:"filled"},variants:{variant:{filled:F.filled,outlined:F.outlined,borderless:F.borderless}}}),Gn=$n(F.header,{defaultVariants:{variant:"filled"},variants:{variant:{filled:F.headerFilled,outlined:F.headerOutlined,borderless:F.headerBorderless}}}),ut={position:"absolute",top:0,bottom:0,textAlign:"center"},ht={display:"contents"};function hn(){return null}const ve="diffs-container",pt=/(?=^From [a-f0-9]+ .+$)/m,Ie=/(?=^diff --git)/gm,pn=/(?=^---\s+\S)/gm,mt=/(?=^@@ )/gm,gt=/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@(?: (.*))?/m,Fe=new RegExp("(?<=\\n)"),bt=/^(---|\+\+\+)\s+([^\t\r\n]+)/,vt=/^(---|\+\+\+)\s+[ab]\/([^\t\r\n]+)/,yt=/^diff --git (?:"a\/(.+?)"|a\/(.+?)) (?:"b\/(.+?)"|b\/(.+?))$/,xt=/^index ([0-9a-f]+)\.\.([0-9a-f]+)(?: (\d+))?$/i,sn="header-prefix",an="header-metadata",ln="header-custom",J={dark:"pierre-dark",light:"pierre-light"},qn="data-theme-css",Vn="data-unsafe-css",ce=1,kt={hunkLineCount:50,lineHeight:20,diffHeaderHeight:44,hunkSeparatorHeight:32,fileGap:8},St=Object.freeze({fromStart:0,fromEnd:0}),mn={startingLine:0,totalLines:1/0,bufferBefore:0,bufferAfter:0},Ct={startingLine:0,totalLines:0,bufferBefore:0,bufferAfter:0};function ye(e){return`annotation-${"side"in e?`${e.side}-`:""}${e.lineNumber}`}function Kn(e,n){return typeof window>"u"&&n!=null?T.jsxs(T.Fragment,{children:[T.jsx("template",{shadowrootmode:"open",dangerouslySetInnerHTML:{__html:n}}),e]}):T.jsx(T.Fragment,{children:e})}const wt=P.createContext(void 0);function Lt(){return P.useContext(wt)}const se=new Map,_e=new Map,en=new Map,nn=new Set;function gn(e,n){e=Array.isArray(e)?e:[e];for(let t of e){let i;if(typeof t=="string"){if(i=se.get(t),i==null)throw new Error(`loadResolvedThemes: ${t} is not resolved, you must resolve it before calling loadResolvedThemes`)}else i=t,t=t.name,se.has(t)||se.set(t,i);nn.has(t)||(nn.add(t),n.loadThemeSync(i))}}const xe=new Map,$e=new Map,Et=new Map,tn=new Set;function bn(e,n){e=Array.isArray(e)?e:[e];for(const t of e){if(tn.has(t.name))continue;let i=xe.get(t.name);i==null&&(i=t,xe.set(t.name,i)),tn.add(i.name),n.loadLanguageSync(i.data)}}function Xn(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}class dn extends Error{constructor(n){super(n),this.name="ShikiError"}}function Tt(){return 2147483648}function At(){return typeof performance<"u"?performance.now():Date.now()}const It=(e,n)=>e+(n-e%n)%n;async function Mt(e){let n,t;const i={};function r(u){t=u,i.HEAPU8=new Uint8Array(u),i.HEAPU32=new Uint32Array(u)}function o(u,p,v){i.HEAPU8.copyWithin(u,p,p+v)}function a(u){try{return n.grow(u-t.byteLength+65535>>>16),r(n.buffer),1}catch{}}function l(u){const p=i.HEAPU8.length;u=u>>>0;const v=Tt();if(u>v)return!1;for(let k=1;k<=4;k*=2){let S=p*(1+.2/k);S=Math.min(S,u+100663296);const m=Math.min(v,It(Math.max(u,S),65536));if(a(m))return!0}return!1}const s=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function d(u,p,v=1024){const k=p+v;let S=p;for(;u[S]&&!(S>=k);)++S;if(S-p>16&&u.buffer&&s)return s.decode(u.subarray(p,S));let m="";for(;p<S;){let b=u[p++];if(!(b&128)){m+=String.fromCharCode(b);continue}const y=u[p++]&63;if((b&224)===192){m+=String.fromCharCode((b&31)<<6|y);continue}const C=u[p++]&63;if((b&240)===224?b=(b&15)<<12|y<<6|C:b=(b&7)<<18|y<<12|C<<6|u[p++]&63,b<65536)m+=String.fromCharCode(b);else{const g=b-65536;m+=String.fromCharCode(55296|g>>10,56320|g&1023)}}return m}function f(u,p){return u?d(i.HEAPU8,u,p):""}const c={emscripten_get_now:At,emscripten_memcpy_big:o,emscripten_resize_heap:l,fd_write:()=>0};async function h(){const p=await e({env:c,wasi_snapshot_preview1:c});n=p.memory,r(n.buffer),Object.assign(i,p),i.UTF8ToString=f}return await h(),i}var Rt=Object.defineProperty,Pt=(e,n,t)=>n in e?Rt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,O=(e,n,t)=>Pt(e,typeof n!="symbol"?n+"":n,t);let z=null;function Ht(e){throw new dn(e.UTF8ToString(e.getLastOnigError()))}class Ue{constructor(n){O(this,"utf16Length"),O(this,"utf8Length"),O(this,"utf16Value"),O(this,"utf8Value"),O(this,"utf16OffsetToUtf8"),O(this,"utf8OffsetToUtf16");const t=n.length,i=Ue._utf8ByteLength(n),r=i!==t,o=r?new Uint32Array(t+1):null;r&&(o[t]=i);const a=r?new Uint32Array(i+1):null;r&&(a[i]=t);const l=new Uint8Array(i);let s=0;for(let d=0;d<t;d++){const f=n.charCodeAt(d);let c=f,h=!1;if(f>=55296&&f<=56319&&d+1<t){const u=n.charCodeAt(d+1);u>=56320&&u<=57343&&(c=(f-55296<<10)+65536|u-56320,h=!0)}r&&(o[d]=s,h&&(o[d+1]=s),c<=127?a[s+0]=d:c<=2047?(a[s+0]=d,a[s+1]=d):c<=65535?(a[s+0]=d,a[s+1]=d,a[s+2]=d):(a[s+0]=d,a[s+1]=d,a[s+2]=d,a[s+3]=d)),c<=127?l[s++]=c:c<=2047?(l[s++]=192|(c&1984)>>>6,l[s++]=128|(c&63)>>>0):c<=65535?(l[s++]=224|(c&61440)>>>12,l[s++]=128|(c&4032)>>>6,l[s++]=128|(c&63)>>>0):(l[s++]=240|(c&1835008)>>>18,l[s++]=128|(c&258048)>>>12,l[s++]=128|(c&4032)>>>6,l[s++]=128|(c&63)>>>0),h&&d++}this.utf16Length=t,this.utf8Length=i,this.utf16Value=n,this.utf8Value=l,this.utf16OffsetToUtf8=o,this.utf8OffsetToUtf16=a}static _utf8ByteLength(n){let t=0;for(let i=0,r=n.length;i<r;i++){const o=n.charCodeAt(i);let a=o,l=!1;if(o>=55296&&o<=56319&&i+1<r){const s=n.charCodeAt(i+1);s>=56320&&s<=57343&&(a=(o-55296<<10)+65536|s-56320,l=!0)}a<=127?t+=1:a<=2047?t+=2:a<=65535?t+=3:t+=4,l&&i++}return t}createString(n){const t=n.omalloc(this.utf8Length);return n.HEAPU8.set(this.utf8Value,t),t}}const Oe=class K{constructor(n){if(O(this,"id",++K.LAST_ID),O(this,"_onigBinding"),O(this,"content"),O(this,"utf16Length"),O(this,"utf8Length"),O(this,"utf16OffsetToUtf8"),O(this,"utf8OffsetToUtf16"),O(this,"ptr"),!z)throw new dn("Must invoke loadWasm first.");this._onigBinding=z,this.content=n;const t=new Ue(n);this.utf16Length=t.utf16Length,this.utf8Length=t.utf8Length,this.utf16OffsetToUtf8=t.utf16OffsetToUtf8,this.utf8OffsetToUtf16=t.utf8OffsetToUtf16,this.utf8Length<1e4&&!K._sharedPtrInUse?(K._sharedPtr||(K._sharedPtr=z.omalloc(1e4)),K._sharedPtrInUse=!0,z.HEAPU8.set(t.utf8Value,K._sharedPtr),this.ptr=K._sharedPtr):this.ptr=t.createString(z)}convertUtf8OffsetToUtf16(n){return this.utf8OffsetToUtf16?n<0?0:n>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[n]:n}convertUtf16OffsetToUtf8(n){return this.utf16OffsetToUtf8?n<0?0:n>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[n]:n}dispose(){this.ptr===K._sharedPtr?K._sharedPtrInUse=!1:this._onigBinding.ofree(this.ptr)}};O(Oe,"LAST_ID",0);O(Oe,"_sharedPtr",0);O(Oe,"_sharedPtrInUse",!1);let Yn=Oe;class Dt{constructor(n){if(O(this,"_onigBinding"),O(this,"_ptr"),!z)throw new dn("Must invoke loadWasm first.");const t=[],i=[];for(let l=0,s=n.length;l<s;l++){const d=new Ue(n[l]);t[l]=d.createString(z),i[l]=d.utf8Length}const r=z.omalloc(4*n.length);z.HEAPU32.set(t,r/4);const o=z.omalloc(4*n.length);z.HEAPU32.set(i,o/4);const a=z.createOnigScanner(r,o,n.length);for(let l=0,s=n.length;l<s;l++)z.ofree(t[l]);z.ofree(o),z.ofree(r),a===0&&Ht(z),this._onigBinding=z,this._ptr=a}dispose(){this._onigBinding.freeOnigScanner(this._ptr)}findNextMatchSync(n,t,i){let r=0;if(typeof i=="number"&&(r=i),typeof n=="string"){n=new Yn(n);const o=this._findNextMatchSync(n,t,!1,r);return n.dispose(),o}return this._findNextMatchSync(n,t,!1,r)}_findNextMatchSync(n,t,i,r){const o=this._onigBinding,a=o.findNextOnigScannerMatch(this._ptr,n.id,n.ptr,n.utf8Length,n.convertUtf16OffsetToUtf8(t),r);if(a===0)return null;const l=o.HEAPU32;let s=a/4;const d=l[s++],f=l[s++],c=[];for(let h=0;h<f;h++){const u=n.convertUtf8OffsetToUtf16(l[s++]),p=n.convertUtf8OffsetToUtf16(l[s++]);c[h]={start:u,end:p,length:p-u}}return{index:d,captureIndices:c}}}function Nt(e){return typeof e.instantiator=="function"}function Ut(e){return typeof e.default=="function"}function Ot(e){return typeof e.data<"u"}function zt(e){return typeof Response<"u"&&e instanceof Response}function Ft(e){return typeof ArrayBuffer<"u"&&(e instanceof ArrayBuffer||ArrayBuffer.isView(e))||typeof cn<"u"&&cn.isBuffer?.(e)||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||typeof Uint32Array<"u"&&e instanceof Uint32Array}let Se;function _t(e){if(Se)return Se;async function n(){z=await Mt(async t=>{let i=e;return i=await i,typeof i=="function"&&(i=await i(t)),typeof i=="function"&&(i=await i(t)),Nt(i)?i=await i.instantiator(t):Ut(i)?i=await i.default(t):(Ot(i)&&(i=i.data),zt(i)?typeof WebAssembly.instantiateStreaming=="function"?i=await $t(i)(t):i=await Bt(i)(t):Ft(i)?i=await Be(i)(t):i instanceof WebAssembly.Module?i=await Be(i)(t):"default"in i&&i.default instanceof WebAssembly.Module&&(i=await Be(i.default)(t))),"instance"in i&&(i=i.instance),"exports"in i&&(i=i.exports),i})}return Se=n(),Se}function Be(e){return n=>WebAssembly.instantiate(e,n)}function $t(e){return n=>WebAssembly.instantiateStreaming(e,n)}function Bt(e){return async n=>{const t=await e.arrayBuffer();return WebAssembly.instantiate(t,n)}}async function Qn(e){return e&&await _t(e),{createScanner(n){return new Dt(n.map(t=>typeof t=="string"?t:t.source))},createString(n){return new Yn(n)}}}const jt=dt({langs:Ze,themes:Bn,engine:()=>Qn(Ne(()=>import("./wasm-Ck_ssClF.js"),[]))});async function Wt(e){if(Xn())throw new Error(`resolveLanguage("${e}") cannot be called from a worker context. Languages must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);const n=$e.get(e);if(n!=null)return n;try{let t=Et.get(e);if(t==null&&Object.prototype.hasOwnProperty.call(Ze,e)&&(t=Ze[e]),t==null)throw new Error(`resolveLanguage: "${e}" not found in bundled or custom languages`);const i=t().then(({default:r})=>{const o={name:e,data:r};return xe.has(e)||xe.set(e,o),o});return $e.set(e,i),await i}finally{$e.delete(e)}}function Gt(e){return xe.get(e)??Wt(e)}async function qt(e){if(Xn())throw new Error(`resolveTheme("${e}") cannot be called from a worker context. Themes must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);const n=_e.get(e);if(n!=null)return n;try{const t=en.get(e)??Bn[e];if(t==null)throw new Error(`resolveTheme: No valid loader for ${e}`);const i=t().then(o=>Vt(e,"default"in o?o.default:o));_e.set(e,i);const r=await i;if(r.name!==e)throw new Error(`resolvedTheme: themeName: ${e} does not match theme.name: ${r.name}`);return se.set(r.name,r),r}finally{_e.delete(e)}}function Vt(e,n){const t=se.get(e);return t??(n=ft(n),se.set(e,n),n)}function Kt(e){return se.get(e)??qt(e)}function Jn(e,n){if(en.has(e)){console.error("SharedHighlight.registerCustomTheme: theme name already registered",e);return}en.set(e,n)}let X;async function Xt({themes:e,langs:n,preferredHighlighter:t="shiki-js"}){X??=jt({themes:[],langs:["text"],engine:t==="shiki-wasm"?Qn(Ne(()=>import("./wasm-Ck_ssClF.js"),[])):ct()});const i=Qt(X)?await X:X;X=i;const r=[];for(const a of n){if(a==="text"||a==="ansi")continue;const l=Gt(a);"then"in l?r.push(l):bn(l,i)}const o=[];for(const a of e){const l=Kt(a);"then"in l?o.push(l):gn(l,X)}return(r.length>0||o.length>0)&&await Promise.all([Promise.all(r).then(a=>{bn(a,i)}),Promise.all(o).then(a=>{gn(a,i)})]),i}function Yt(){if(X!=null&&!("then"in X))return X}function Qt(e=X){return e!=null&&"then"in e}Jn("pierre-dark",async()=>{const e=await Ne(()=>import("./pierre-dark-ClCaJvdG.js"),[]);return{...e.default??e,name:"pierre-dark"}});Jn("pierre-light",async()=>{const e=await Ne(()=>import("./pierre-light-zjGsWSiE.js"),[]);return{...e.default??e,name:"pierre-light"}});function Zn(e=J){const n=[];return typeof e=="string"?n.push(e):(n.push(e.dark),n.push(e.light)),n}function et(e,n){return e==null||n==null||typeof e=="string"||typeof n=="string"?e===n:e.dark===n.dark&&e.light===n.light}const de=new Map,ge={"1c":"1c",abap:"abap",as:"actionscript-3",ada:"ada",adb:"ada",ads:"ada",adoc:"asciidoc",asciidoc:"asciidoc","component.html":"angular-html","component.ts":"angular-ts",conf:"nginx",htaccess:"apache",cls:"tex",trigger:"apex",apl:"apl",applescript:"applescript",scpt:"applescript",ara:"ara",asm:"asm",s:"riscv",astro:"astro",awk:"awk",bal:"ballerina",sh:"zsh",bash:"zsh",bat:"cmd",cmd:"cmd",be:"berry",beancount:"beancount",bib:"bibtex",bicep:"bicep","blade.php":"blade",bsl:"bsl",c:"c",h:"objective-cpp",cs:"csharp",cpp:"cpp",hpp:"cpp",cc:"cpp",cxx:"cpp",hh:"cpp",cdc:"cdc",cairo:"cairo",clar:"clarity",clj:"clojure",cljs:"clojure",cljc:"clojure",soy:"soy",cmake:"cmake","CMakeLists.txt":"cmake",cob:"cobol",cbl:"cobol",cobol:"cobol",CODEOWNERS:"codeowners",ql:"ql",coffee:"coffeescript",lisp:"lisp",cl:"lisp",lsp:"lisp",log:"log",v:"verilog",cql:"cql",cr:"crystal",css:"css",csv:"csv",cue:"cue",cypher:"cypher",cyp:"cypher",d:"d",dart:"dart",dax:"dax",desktop:"desktop",diff:"diff",patch:"diff",Dockerfile:"dockerfile",dockerfile:"dockerfile",env:"dotenv",dm:"dream-maker",edge:"edge",el:"emacs-lisp",ex:"elixir",exs:"elixir",elm:"elm",erb:"erb",erl:"erlang",hrl:"erlang",f:"fortran-fixed-form",for:"fortran-fixed-form",fs:"fsharp",fsi:"fsharp",fsx:"fsharp",f03:"f03",f08:"f08",f18:"f18",f77:"f77",f90:"fortran-free-form",f95:"fortran-free-form",fnl:"fennel",fish:"fish",ftl:"ftl",tres:"gdresource",res:"gdresource",gd:"gdscript",gdshader:"gdshader",gs:"genie",feature:"gherkin",COMMIT_EDITMSG:"git-commit","git-rebase-todo":"git-rebase",gjs:"glimmer-js",gleam:"gleam",gts:"glimmer-ts",glsl:"glsl",vert:"glsl",frag:"glsl",shader:"shaderlab",gp:"gnuplot",plt:"gnuplot",gnuplot:"gnuplot",go:"go",graphql:"graphql",gql:"graphql",groovy:"groovy",gvy:"groovy",hack:"hack",haml:"haml",hbs:"handlebars",handlebars:"handlebars",hs:"haskell",lhs:"haskell",hx:"haxe",hcl:"hcl",hjson:"hjson",hlsl:"hlsl",fx:"hlsl",html:"html",htm:"html",http:"http",rest:"http",hxml:"hxml",hy:"hy",imba:"imba",ini:"ini",cfg:"ini",jade:"pug",pug:"pug",java:"java",js:"javascript",mjs:"javascript",cjs:"javascript",jinja:"jinja",jinja2:"jinja",j2:"jinja",jison:"jison",jl:"julia",json:"json",json5:"json5",jsonc:"jsonc",jsonl:"jsonl",jsonnet:"jsonnet",libsonnet:"jsonnet",jssm:"jssm",jsx:"jsx",kt:"kotlin",kts:"kts",kql:"kusto",tex:"tex",ltx:"tex",lean:"lean4",less:"less",liquid:"liquid",lit:"lit",ll:"llvm",logo:"logo",lua:"lua",luau:"luau",Makefile:"makefile",mk:"makefile",makefile:"makefile",md:"markdown",markdown:"markdown",marko:"marko",m:"wolfram",mat:"matlab",mdc:"mdc",mdx:"mdx",wiki:"wikitext",mediawiki:"wikitext",mmd:"mermaid",mermaid:"mermaid",mips:"mipsasm",mojo:"mojo","🔥":"mojo",move:"move",nar:"narrat",nf:"nextflow",nim:"nim",nims:"nim",nimble:"nim",nix:"nix",nu:"nushell",mm:"objective-cpp",ml:"ocaml",mli:"ocaml",mll:"ocaml",mly:"ocaml",pas:"pascal",p:"pascal",pl:"prolog",pm:"perl",t:"perl",raku:"raku",p6:"raku",pl6:"raku",php:"php",phtml:"php",pls:"plsql",sql:"sql",po:"po",polar:"polar",pcss:"postcss",pot:"pot",potx:"potx",pq:"powerquery",pqm:"powerquery",ps1:"powershell",psm1:"powershell",psd1:"powershell",prisma:"prisma",pro:"prolog",P:"prolog",properties:"properties",proto:"protobuf",pp:"puppet",purs:"purescript",py:"python",pyw:"python",pyi:"python",qml:"qml",qmldir:"qmldir",qss:"qss",r:"r",R:"r",rkt:"racket",rktl:"racket",razor:"razor",cshtml:"razor",rb:"ruby",rbw:"ruby",reg:"reg",regex:"regexp",rel:"rel",rs:"rust",rst:"rst",rake:"ruby",gemspec:"ruby",sas:"sas",sass:"sass",scala:"scala",sc:"scala",scm:"scheme",ss:"scheme",sld:"scheme",scss:"scss",sdbl:"sdbl",shadergraph:"shader",st:"smalltalk",sol:"solidity",sparql:"sparql",rq:"sparql",spl:"splunk",config:"ssh-config",do:"stata",ado:"stata",dta:"stata",styl:"stylus",stylus:"stylus",svelte:"svelte",swift:"swift",sv:"system-verilog",svh:"system-verilog",service:"systemd",socket:"systemd",device:"systemd",timer:"systemd",talon:"talonscript",tasl:"tasl",tcl:"tcl",templ:"templ",tf:"tf",tfvars:"tfvars",toml:"toml",ts:"typescript",tsp:"typespec",tsv:"tsv",tsx:"tsx",ttl:"turtle",twig:"twig",typ:"typst",vv:"v",vala:"vala",vapi:"vala",vb:"vb",vbs:"vb",bas:"vb",vh:"verilog",vhd:"vhdl",vhdl:"vhdl",vim:"vimscript",vue:"vue","vine.ts":"vue-vine",vy:"vyper",wasm:"wasm",wat:"wasm",wy:"文言",wgsl:"wgsl",wit:"wit",wl:"wolfram",nb:"wolfram",xml:"xml",xsl:"xsl",xslt:"xsl",yaml:"yaml",yml:"yml",zs:"zenscript",zig:"zig",zsh:"zsh",sty:"tex"};function ue(e){if(de.has(e))return de.get(e)??"text";if(ge[e]!=null)return ge[e];const n=e.match(/\.([^/\\]+\.[^/\\]+)$/);if(n!=null){if(de.has(n[1]))return de.get(n[1])??"text";if(ge[n[1]]!=null)return ge[n[1]]??"text"}const t=e.match(/\.([^.]+)$/)?.[1]??"";return de.has(t)?de.get(t)??"text":ge[t]??"text"}function he(e){return e.replace(/\n$|\r\n$/,"")}function te(e){return{type:"text",value:e}}function A({tagName:e,children:n=[],properties:t={}}){return{type:"element",tagName:e,properties:t,children:n}}function Pe({name:e,width:n=16,height:t=16,properties:i}){return A({tagName:"svg",properties:{width:n,height:t,viewBox:"0 0 16 16",...i},children:[A({tagName:"use",properties:{href:`#${e.replace(/^#/,"")}`}})]})}function Jt(e){let n=e.children[0];for(;n!=null;){if(n.type==="element"&&n.tagName==="code")return n;"children"in n?n=n.children[0]:n=null}}function Ce(e){return A({tagName:"div",properties:{"data-gutter":""},children:e})}function Zt(e,n,t,i={}){return A({tagName:"div",properties:{"data-line-type":e,"data-column-number":n,"data-line-index":t,...i},children:n!=null?[A({tagName:"span",properties:{"data-line-number-content":""},children:[te(`${n}`)]})]:void 0})}function G(e,n,t){return A({tagName:"div",properties:{"data-gutter-buffer":n,"data-buffer-size":t,"data-line-type":n==="annotation"?void 0:e,style:n==="annotation"?`grid-row: span ${t};`:`grid-row: span ${t};min-height:calc(${t} * 1lh);`}})}function ei(e,n,t){const i=typeof t.lineInfo=="function"?t.lineInfo(n):t.lineInfo[n-1];if(i==null){const r=`processLine: line ${n}, contains no state.lineInfo`;throw console.error(r,{node:e,line:n,state:t}),new Error(r)}return e.tagName="div",e.properties["data-line"]=i.lineNumber,e.properties["data-alt-line"]=i.altLineNumber,e.properties["data-line-type"]=i.type,e.properties["data-line-index"]=i.lineIndex,e.children.length===0&&e.children.push(te(`
`)),e}const we=Symbol("no-token"),je=Symbol("multiple-tokens");function nt(e){const n=ni(e);if(n!=null)return n;let t=we;const i=[];let r=[],o;const a=()=>{if(r.length===0||o==null){r=[],o=void 0;return}if(r.length===1){const s=r[0];if(s?.type==="element"){ti(s,o);for(const d of s.children)Me(d)}else Me(s);i.push(s),r=[],o=void 0;return}for(const s of r)Me(s);i.push(A({tagName:"span",properties:{"data-char":o},children:r})),r=[],o=void 0},l=s=>{if(s!==we){if(s===je){t=je;return}if(t===we){t=s;return}t!==s&&(t=je)}};for(const s of e.children){const d=s.type==="element"?nt(s):we;if(l(d),typeof d!="number"){a(),i.push(s);continue}o!=null&&o!==d&&a(),o??=d,r.push(s)}return a(),e.children=i,t}function ni(e){const n=e.properties["data-char"];if(typeof n=="number")return n}function Me(e){if(e.type==="element"){e.properties["data-char"]=void 0;for(const n of e.children)Me(n)}}function ti(e,n){e.properties["data-char"]=n}function ii(e={}){const{classPrefix:n="__shiki_",classSuffix:t="",classReplacer:i=l=>l}=e,r=new Map;function o(l){return Object.entries(l).map(([s,d])=>`${s}:${d}`).join(";")}function a(l){const s=typeof l=="string"?l:o(l);let d=n+ri(s)+t;return d=i(d),r.has(d)||r.set(d,typeof l=="string"?l:{...l}),d}return{name:"@shikijs/transformers:style-to-class",pre(l){if(!l.properties.style)return;const s=a(l.properties.style);delete l.properties.style,this.addClassToHast(l,s)},tokens(l){for(const s of l)for(const d of s){if(!d.htmlStyle)continue;const f=a(d.htmlStyle);d.htmlStyle={},d.htmlAttrs||={},d.htmlAttrs.class?d.htmlAttrs.class+=` ${f}`:d.htmlAttrs.class=f}},getClassRegistry(){return r},getCSS(){let l="";for(const[s,d]of r.entries())l+=`.${s}{${typeof d=="string"?d:o(d)}}`;return l},clearRegistry(){r.clear()}}}function ri(e,n=0){let t=3735928559^n,i=1103547991^n;for(let r=0,o;r<e.length;r++)o=e.charCodeAt(r),t=Math.imul(t^o,2654435761),i=Math.imul(i^o,1597334677);return t=Math.imul(t^t>>>16,2246822507),t^=Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507),i^=Math.imul(t^t>>>13,3266489909),(4294967296*(2097151&i)+(t>>>0)).toString(36).slice(0,6)}function oi(e=!1,n=!1){const t={lineInfo:[]},i=[{line(r){return delete r.properties.class,r},pre(r){const o=Jt(r),a=[];if(o!=null){let l=1;for(const s of o.children)s.type==="element"&&(e&&nt(s),a.push(ei(s,l,t)),l++);o.children=a}return r},...e?{tokens(r){for(const o of r){let a=0;for(const l of o){const s=l;s.__lineChar??=a,a+=l.content.length}}},preprocess(r,o){o.mergeWhitespaces="never"},span(r,o,a,l,s){if(s?.offset!=null&&s.content!=null){const d=s.__lineChar;return d!=null&&(r.properties["data-char"]=d),r}return r}}:null}];return n&&i.push(si,vn),{state:t,transformers:i,toClass:vn}}const vn=ii({classPrefix:"hl-"}),si={name:"token-style-normalizer",tokens(e){for(const n of e)for(const t of n){if(t.htmlStyle!=null)continue;const i={};t.color!=null&&(i.color=t.color),t.bgColor!=null&&(i["background-color"]=t.bgColor),t.fontStyle!=null&&t.fontStyle!==0&&((t.fontStyle&1)!==0&&(i["font-style"]="italic"),(t.fontStyle&2)!==0&&(i["font-weight"]="bold"),(t.fontStyle&4)!==0&&(i["text-decoration"]="underline")),Object.keys(i).length>0&&(t.htmlStyle=i)}}};function q(e){return`--${e==="token"?"diffs-token":"diffs"}-`}function ai({theme:e=J,highlighter:n,prefix:t}){let i="";if(typeof e=="string"){const r=n.getTheme(e);i+=`color:${r.fg};`,i+=`background-color:${r.bg};`,i+=`${q("global")}fg:${r.fg};`,i+=`${q("global")}bg:${r.bg};`,i+=We(r,t)}else{let r=n.getTheme(e.dark);i+=`${q("global")}dark:${r.fg};`,i+=`${q("global")}dark-bg:${r.bg};`,i+=We(r,"dark"),r=n.getTheme(e.light),i+=`${q("global")}light:${r.fg};`,i+=`${q("global")}light-bg:${r.bg};`,i+=We(r,"light")}return i}function We(e,n){n=n!=null?`${n}-`:"";let t="";const i=e.colors?.["gitDecoration.addedResourceForeground"]??e.colors?.["terminal.ansiGreen"];i!=null&&(t+=`${q("global")}${n}addition-color:${i};`);const r=e.colors?.["gitDecoration.deletedResourceForeground"]??e.colors?.["terminal.ansiRed"];r!=null&&(t+=`${q("global")}${n}deletion-color:${r};`);const o=e.colors?.["gitDecoration.modifiedResourceForeground"]??e.colors?.["terminal.ansiBlue"];return o!=null&&(t+=`${q("global")}${n}modified-color:${o};`),t}function yn(e){let n=e.children[0];for(;n!=null;){if(n.type==="element"&&n.tagName==="code")return n.children;"children"in n?n=n.children[0]:n=null}throw console.error(e),new Error("getLineNodes: Unable to find children")}function xn(e,n){return e?.cacheKey===n?.cacheKey&&e?.contents===n?.contents&&e?.name===n?.name&&e?.lang===n?.lang}function Ge(e,n){return et(e.theme,n.theme)&&e.useTokenTransformer===n.useTokenTransformer&&e.tokenizeMaxLineLength===n.tokenizeMaxLineLength&&e.lineDiffType===n.lineDiffType&&e.maxLineDiffLength===n.maxLineDiffLength}function li(e){const n=e.lang??ue(e.name),t=e.lang??(e.prevName!=null?ue(e.prevName):"text");return n==="text"&&t==="text"}function He({diff:e,diffStyle:n,startingLine:t=0,totalLines:i=1/0,expandedHunks:r,collapsedContextThreshold:o=ce,callback:a}){const l={finalHunk:e.hunks.at(-1),viewportStart:t,viewportEnd:t+i,isWindowedHighlight:t>0||i<1/0,splitCount:0,unifiedCount:0,shouldBreak(){if(!l.isWindowedHighlight)return!1;const s=l.unifiedCount>=t+i,d=l.splitCount>=t+i;return n==="unified"?s:(n==="split"||s)&&d},shouldSkip(s,d){if(!l.isWindowedHighlight)return!1;const f=l.unifiedCount+s<t,c=l.splitCount+d<t;return n==="unified"?f:(n==="split"||f)&&c},incrementCounts(s,d){(n==="unified"||n==="both")&&(l.unifiedCount+=s),(n==="split"||n==="both")&&(l.splitCount+=d)},isInWindow(s,d){if(!l.isWindowedHighlight)return!0;const f=l.isInUnifiedWindow(s),c=l.isInSplitWindow(d);return n==="unified"?f:n==="split"?c:f||c},isInUnifiedWindow(s){return!l.isWindowedHighlight||l.unifiedCount>=t-s&&l.unifiedCount<t+i},isInSplitWindow(s){return!l.isWindowedHighlight||l.splitCount>=t-s&&l.splitCount<t+i},emit(s,d=!1){return d||(n==="unified"?l.incrementCounts(1,0):n==="split"?l.incrementCounts(0,1):l.incrementCounts(1,1)),a(s)??!1}};e:for(const[s,d]of e.hunks.entries()){let u=function(g,x){return c==null||c.collapsedLines<=0||c.fromStart+c.fromEnd>0?0:n==="unified"?g===d.unifiedLineStart+d.unifiedLineCount-1?c.collapsedLines:0:x===d.splitLineStart+d.splitLineCount-1?c.collapsedLines:0},p=function(){if(f.collapsedLines===0)return 0;const g=f.collapsedLines;return f.collapsedLines=0,g};if(l.shouldBreak())break;const f=kn(e.isPartial,d.collapsedBefore,r,s,o),c=(()=>{if(d!==l.finalHunk||!di(e))return;const g=e.additionLines.length-(d.additionLineIndex+d.additionCount),x=e.deletionLines.length-(d.deletionLineIndex+d.deletionCount);if(g!==x)throw new Error(`iterateOverDiff: trailing context mismatch (additions=${g}, deletions=${x}) for ${e.name}`);const w=Math.min(g,x);return kn(e.isPartial,w,r,e.hunks.length,o)})(),h=f.fromStart+f.fromEnd;if(l.shouldSkip(h,h))l.incrementCounts(h,h),p();else{let g=d.unifiedLineStart-f.rangeSize,x=d.splitLineStart-f.rangeSize,w=d.deletionLineIndex-f.rangeSize,L=d.additionLineIndex-f.rangeSize,E=d.deletionStart-f.rangeSize,I=d.additionStart-f.rangeSize,M=0;for(;M<f.fromStart;){if(l.isInWindow(0,0)){if(l.emit({hunkIndex:s,hunk:d,collapsedBefore:0,collapsedAfter:0,type:"context-expanded",deletionLine:{lineNumber:E+M,lineIndex:w+M,noEOFCR:!1,unifiedLineIndex:g+M,splitLineIndex:x+M},additionLine:{unifiedLineIndex:g+M,splitLineIndex:x+M,lineIndex:L+M,lineNumber:I+M,noEOFCR:!1}}))break e}else l.incrementCounts(1,1);M++}for(g=d.unifiedLineStart-f.fromEnd,x=d.splitLineStart-f.fromEnd,w=d.deletionLineIndex-f.fromEnd,L=d.additionLineIndex-f.fromEnd,E=d.deletionStart-f.fromEnd,I=d.additionStart-f.fromEnd,M=0;M<f.fromEnd;){if(l.isInWindow(0,0)){if(l.emit({hunkIndex:s,hunk:d,collapsedBefore:p(),collapsedAfter:0,type:"context-expanded",deletionLine:{lineNumber:E+M,lineIndex:w+M,noEOFCR:!1,unifiedLineIndex:g+M,splitLineIndex:x+M},additionLine:{unifiedLineIndex:g+M,splitLineIndex:x+M,lineIndex:L+M,lineNumber:I+M,noEOFCR:!1}}))break e}else l.incrementCounts(1,1);M++}}let v=d.unifiedLineStart,k=d.splitLineStart,S=d.deletionLineIndex,m=d.additionLineIndex,b=d.deletionStart,y=d.additionStart;const C=d.hunkContent.at(-1);for(const g of d.hunkContent){if(l.shouldBreak())break e;const x=g===C;if(g.type==="context"){if(l.shouldSkip(g.lines,g.lines))l.incrementCounts(g.lines,g.lines),p();else{let w=0;for(;w<g.lines;){if(l.isInWindow(0,0)){const L=x&&w===g.lines-1,E=v+w,I=k+w;if(l.emit({hunkIndex:s,hunk:d,collapsedBefore:p(),collapsedAfter:u(E,I),type:"context",deletionLine:{lineNumber:b+w,lineIndex:S+w,noEOFCR:L&&d.noEOFCRDeletions,unifiedLineIndex:E,splitLineIndex:I},additionLine:{unifiedLineIndex:E,splitLineIndex:I,lineIndex:m+w,lineNumber:y+w,noEOFCR:L&&d.noEOFCRAdditions}}))break e}else l.incrementCounts(1,1);w++}}v+=g.lines,k+=g.lines,S+=g.lines,m+=g.lines,b+=g.lines,y+=g.lines}else{const w=Math.max(g.deletions,g.additions),L=g.deletions+g.additions;if(!l.shouldSkip(L,w)){const E=fi(l,g,n);for(const[I,M]of E)for(let R=I;R<M;R++){const _=u(v+R,n==="unified"?k+(R<g.deletions?R:R-g.deletions):k+R);if(l.emit(ci({hunkIndex:s,hunk:d,collapsedBefore:p(),collapsedAfter:_,diffStyle:n,index:R,unifiedLineIndex:v,splitLineIndex:k,additionLineIndex:m,deletionLineIndex:S,additionLineNumber:y,deletionLineNumber:b,content:g,isLastContent:x,unifiedCount:L,splitCount:w}),!0))break e}}p(),l.incrementCounts(L,w),v+=L,k+=w,S+=g.deletions,m+=g.additions,b+=g.deletions,y+=g.additions}}if(c!=null){const{collapsedLines:g,fromStart:x,fromEnd:w}=c,L=x+w;let E=0;for(;E<L;){if(l.shouldBreak())break e;if(l.isInWindow(0,0)){const I=E===L-1;if(l.emit({hunkIndex:e.hunks.length,hunk:void 0,collapsedBefore:0,collapsedAfter:I?g:0,type:"context-expanded",deletionLine:{lineNumber:b+E,lineIndex:S+E,noEOFCR:!1,unifiedLineIndex:v+E,splitLineIndex:k+E},additionLine:{unifiedLineIndex:v+E,splitLineIndex:k+E,lineIndex:m+E,lineNumber:y+E,noEOFCR:!1}}))break e}else l.incrementCounts(1,1);E++}}}}function kn(e,n,t,i,r){if(n=Math.max(n,0),n===0||e)return{fromStart:0,fromEnd:0,rangeSize:n,collapsedLines:Math.max(n,0)};if(t===!0||n<=r)return{fromStart:n,fromEnd:0,rangeSize:n,collapsedLines:0};const o=t?.get(i),a=Math.min(Math.max(o?.fromStart??0,0),n),l=Math.min(Math.max(o?.fromEnd??0,0),n),s=a+l,d=s>=n;return{fromStart:d?n:a,fromEnd:d?0:l,rangeSize:n,collapsedLines:Math.max(n-s,0)}}function di(e){const n=e.hunks.at(-1);return n==null||e.isPartial||e.additionLines.length===0||e.deletionLines.length===0?!1:n.additionLineIndex+n.additionCount<e.additionLines.length||n.deletionLineIndex+n.deletionCount<e.deletionLines.length}function fi(e,n,t){if(!e.isWindowedHighlight)return[[0,t==="unified"?n.deletions+n.additions:Math.max(n.deletions,n.additions)]];const i=t!=="split",r=t!=="unified",o=t==="unified"?"unified":"split",a=[];function l(c,h){if(c+h<=e.viewportStart||c>=e.viewportEnd)return;const u=Math.max(0,e.viewportStart-c),p=Math.min(h,e.viewportEnd-c);return p>u?[u,p]:void 0}function s(c,h){return o==="split"?c:h==="additions"?[c[0]+n.deletions,c[1]+n.deletions]:c}function d(c,h){if(c==null)return;const[u,p]=s(c,h);p>u&&a.push([u,p])}if(i&&(d(l(e.unifiedCount,n.deletions),"deletions"),d(l(e.unifiedCount+n.deletions,n.additions),"additions")),r&&(d(l(e.splitCount,n.deletions),"deletions"),d(l(e.splitCount,n.additions),"additions")),a.length===0)return a;a.sort((c,h)=>c[0]-h[0]);const f=[a[0]];for(const[c,h]of a.slice(1)){const u=f[f.length-1];c<=u[1]?u[1]=Math.max(u[1],h):f.push([c,h])}return f}function ci({hunkIndex:e,hunk:n,collapsedAfter:t,collapsedBefore:i,diffStyle:r,index:o,unifiedLineIndex:a,splitLineIndex:l,additionLineIndex:s,deletionLineIndex:d,additionLineNumber:f,deletionLineNumber:c,content:h,isLastContent:u,unifiedCount:p,splitCount:v}){const k=o<h.deletions?a+o:void 0,S=r==="unified"?o>=h.deletions?a+o:void 0:o<h.additions?a+h.deletions+o:void 0,m=r==="unified"?l+(o<h.deletions?o:o-h.deletions):l+o,b=o<h.deletions?d+o:void 0,y=o<h.deletions?c+o:void 0,C=r==="unified"?o>=h.deletions?s+(o-h.deletions):void 0:o<h.additions?s+o:void 0,g=r==="unified"?o>=h.deletions?f+(o-h.deletions):void 0:o<h.additions?f+o:void 0,x=r==="unified"?u&&o===h.deletions-1&&n.noEOFCRDeletions:u&&o===v-1&&n.noEOFCRDeletions,w=r==="unified"?u&&o===p-1&&n.noEOFCRAdditions:u&&o===v-1&&n.noEOFCRAdditions,L=b!=null&&y!=null&&k!=null?{lineNumber:y,lineIndex:b,noEOFCR:x,unifiedLineIndex:k,splitLineIndex:m}:void 0,E=C!=null&&g!=null&&S!=null?{unifiedLineIndex:S,splitLineIndex:m,lineIndex:C,lineNumber:g,noEOFCR:w}:void 0;if(L==null&&E!=null)return{type:"change",hunkIndex:e,hunk:n,collapsedAfter:t,collapsedBefore:i,deletionLine:void 0,additionLine:E};if(L!=null&&E==null)return{type:"change",hunkIndex:e,hunk:n,collapsedAfter:t,collapsedBefore:i,deletionLine:L,additionLine:void 0};if(L==null||E==null)throw new Error("iterateOverDiff: missing change line data");return{type:"change",hunkIndex:e,hunk:n,collapsedAfter:t,collapsedBefore:i,deletionLine:L,additionLine:E}}class fn{diff(n,t,i={}){let r;typeof i=="function"?(r=i,i={}):"callback"in i&&(r=i.callback);const o=this.castInput(n,i),a=this.castInput(t,i),l=this.removeEmpty(this.tokenize(o,i)),s=this.removeEmpty(this.tokenize(a,i));return this.diffWithOptionsObj(l,s,i,r)}diffWithOptionsObj(n,t,i,r){var o;const a=m=>{if(m=this.postProcess(m,i),r){setTimeout(function(){r(m)},0);return}else return m},l=t.length,s=n.length;let d=1,f=l+s;i.maxEditLength!=null&&(f=Math.min(f,i.maxEditLength));const c=(o=i.timeout)!==null&&o!==void 0?o:1/0,h=Date.now()+c,u=[{oldPos:-1,lastComponent:void 0}];let p=this.extractCommon(u[0],t,n,0,i);if(u[0].oldPos+1>=s&&p+1>=l)return a(this.buildValues(u[0].lastComponent,t,n));let v=-1/0,k=1/0;const S=()=>{for(let m=Math.max(v,-d);m<=Math.min(k,d);m+=2){let b;const y=u[m-1],C=u[m+1];y&&(u[m-1]=void 0);let g=!1;if(C){const w=C.oldPos-m;g=C&&0<=w&&w<l}const x=y&&y.oldPos+1<s;if(!g&&!x){u[m]=void 0;continue}if(!x||g&&y.oldPos<C.oldPos?b=this.addToPath(C,!0,!1,0,i):b=this.addToPath(y,!1,!0,1,i),p=this.extractCommon(b,t,n,m,i),b.oldPos+1>=s&&p+1>=l)return a(this.buildValues(b.lastComponent,t,n))||!0;u[m]=b,b.oldPos+1>=s&&(k=Math.min(k,m-1)),p+1>=l&&(v=Math.max(v,m+1))}d++};if(r)(function m(){setTimeout(function(){if(d>f||Date.now()>h)return r(void 0);S()||m()},0)})();else for(;d<=f&&Date.now()<=h;){const m=S();if(m)return m}}addToPath(n,t,i,r,o){const a=n.lastComponent;return a&&!o.oneChangePerToken&&a.added===t&&a.removed===i?{oldPos:n.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:i,previousComponent:a.previousComponent}}:{oldPos:n.oldPos+r,lastComponent:{count:1,added:t,removed:i,previousComponent:a}}}extractCommon(n,t,i,r,o){const a=t.length,l=i.length;let s=n.oldPos,d=s-r,f=0;for(;d+1<a&&s+1<l&&this.equals(i[s+1],t[d+1],o);)d++,s++,f++,o.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return f&&!o.oneChangePerToken&&(n.lastComponent={count:f,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=s,d}equals(n,t,i){return i.comparator?i.comparator(n,t):n===t||!!i.ignoreCase&&n.toLowerCase()===t.toLowerCase()}removeEmpty(n){const t=[];for(let i=0;i<n.length;i++)n[i]&&t.push(n[i]);return t}castInput(n,t){return n}tokenize(n,t){return Array.from(n)}join(n){return n.join("")}postProcess(n,t){return n}get useLongestToken(){return!1}buildValues(n,t,i){const r=[];let o;for(;n;)r.push(n),o=n.previousComponent,delete n.previousComponent,n=o;r.reverse();const a=r.length;let l=0,s=0,d=0;for(;l<a;l++){const f=r[l];if(f.removed)f.value=this.join(i.slice(d,d+f.count)),d+=f.count;else{if(!f.added&&this.useLongestToken){let c=t.slice(s,s+f.count);c=c.map(function(h,u){const p=i[d+u];return p.length>h.length?p:h}),f.value=this.join(c)}else f.value=this.join(t.slice(s,s+f.count));s+=f.count,f.added||(d+=f.count)}}return r}}class ui extends fn{}const hi=new ui;function pi(e,n,t){return hi.diff(e,n,t)}const Sn="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";class mi extends fn{tokenize(n){const t=new RegExp(`(\\r?\\n)|[${Sn}]+|[^\\S\\n\\r]+|[^${Sn}]`,"ug");return n.match(t)||[]}}const gi=new mi;function bi(e,n,t){return gi.diff(e,n,t)}class vi extends fn{constructor(){super(...arguments),this.tokenize=xi}equals(n,t,i){return i.ignoreWhitespace?((!i.newlineIsToken||!n.includes(`
`))&&(n=n.trim()),(!i.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):i.ignoreNewlineAtEof&&!i.newlineIsToken&&(n.endsWith(`
`)&&(n=n.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(n,t,i)}}const yi=new vi;function Cn(e,n,t){return yi.diff(e,n,t)}function xi(e,n){n.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const t=[],i=e.split(/(\n|\r\n)/);i[i.length-1]||i.pop();for(let r=0;r<i.length;r++){const o=i[r];r%2&&!n.newlineIsToken?t[t.length-1]+=o:t.push(o)}return t}const ki={includeIndex:!0,includeUnderline:!0,includeFileHeaders:!0};function wn(e,n,t,i,r,o,a){let l;a?typeof a=="function"?l={callback:a}:l=a:l={},typeof l.context>"u"&&(l.context=4);const s=l.context;if(l.newlineIsToken)throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");if(l.callback){const{callback:f}=l;Cn(t,i,Object.assign(Object.assign({},l),{callback:c=>{const h=d(c);f(h)}}))}else return d(Cn(t,i,l));function d(f){if(!f)return;f.push({value:"",lines:[]});function c(m){return m.map(function(b){return" "+b})}const h=[];let u=0,p=0,v=[],k=1,S=1;for(let m=0;m<f.length;m++){const b=f[m],y=b.lines||Ci(b.value);if(b.lines=y,b.added||b.removed){if(!u){const C=f[m-1];u=k,p=S,C&&(v=s>0?c(C.lines.slice(-s)):[],u-=v.length,p-=v.length)}for(const C of y)v.push((b.added?"+":"-")+C);b.added?S+=y.length:k+=y.length}else{if(u)if(y.length<=s*2&&m<f.length-2)for(const C of c(y))v.push(C);else{const C=Math.min(y.length,s);for(const x of c(y.slice(0,C)))v.push(x);const g={oldStart:u,oldLines:k-u+C,newStart:p,newLines:S-p+C,lines:v};h.push(g),u=0,p=0,v=[]}k+=y.length,S+=y.length}}for(const m of h)for(let b=0;b<m.lines.length;b++)m.lines[b].endsWith(`
`)?m.lines[b]=m.lines[b].slice(0,-1):(m.lines.splice(b+1,0,"\\ No newline at end of file"),b++);return{oldFileName:e,newFileName:n,oldHeader:r,newHeader:o,hunks:h}}}function rn(e,n){if(n||(n=ki),Array.isArray(e)){if(e.length>1&&!n.includeFileHeaders)throw new Error("Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)");return e.map(i=>rn(i,n)).join(`
`)}const t=[];n.includeIndex&&e.oldFileName==e.newFileName&&t.push("Index: "+e.oldFileName),n.includeUnderline&&t.push("==================================================================="),n.includeFileHeaders&&(t.push("--- "+e.oldFileName+(typeof e.oldHeader>"u"?"":"	"+e.oldHeader)),t.push("+++ "+e.newFileName+(typeof e.newHeader>"u"?"":"	"+e.newHeader)));for(let i=0;i<e.hunks.length;i++){const r=e.hunks[i];r.oldLines===0&&(r.oldStart-=1),r.newLines===0&&(r.newStart-=1),t.push("@@ -"+r.oldStart+","+r.oldLines+" +"+r.newStart+","+r.newLines+" @@");for(const o of r.lines)t.push(o)}return t.join(`
`)+`
`}function Si(e,n,t,i,r,o,a){if(typeof a=="function"&&(a={callback:a}),a?.callback){const{callback:l}=a;wn(e,n,t,i,r,o,Object.assign(Object.assign({},a),{callback:s=>{l(s?rn(s,a.headerOptions):void 0)}}))}else{const l=wn(e,n,t,i,r,o,a);return l?rn(l,a?.headerOptions):void 0}}function Ci(e){const n=e.endsWith(`
`),t=e.split(`
`).map(i=>i+`
`);return n?t.pop():t.push(t.pop().slice(0,-1)),t}function Ln({line:e,spanStart:n,spanLength:t}){return{start:{line:e,character:n},end:{line:e,character:n+t},properties:{"data-diff-span":""},alwaysWrap:!0}}function Le({item:e,arr:n,enableJoin:t,isNeutral:i=!1,isLastItem:r=!1}){const o=n[n.length-1];if(o==null||r||!t){n.push([i?0:1,e.value]);return}const a=o[0]===0;if(i===a||i&&e.value.length===1&&!a){o[1]+=e.value;return}n.push([i?0:1,e.value])}const wi={forcePlainText:!1};function Li(e,n,t,{forcePlainText:i,startingLine:r,totalLines:o,expandedHunks:a,collapsedContextThreshold:l=ce}=wi){i?(r??=0,o??=1/0):(r=0,o=1/0);const s=r>0||o<1/0,d=typeof t.theme=="string"?n.getTheme(t.theme).type:void 0,f=ai({theme:t.theme,highlighter:n}),c=i&&!s&&(e.unifiedLineCount>1e3||e.splitLineCount>1e3)?"none":t.lineDiffType,h={deletionLines:[],additionLines:[]},{maxLineDiffLength:u}=t,p=!i&&!e.isPartial,v=i?a:void 0,k=new Map;function S(b){const y=p?0:b,C=k.get(y)??Ti();return k.set(y,C),C}function m(b,y,C,g){if(s){let x=C.at(-1);(x==null||x.targetIndex+x.count!==y)&&(x={targetIndex:y,originalOffset:g.length,count:0},C.push(x)),x.count++}g.push(b)}He({diff:e,diffStyle:"both",startingLine:r,totalLines:o,expandedHunks:s?v:!0,collapsedContextThreshold:l,callback:({hunkIndex:b,additionLine:y,deletionLine:C,type:g})=>{const x=S(b),w=y!=null?y.splitLineIndex:C.splitLineIndex;g==="change"&&y!=null&&C!=null&&Ei({additionLine:e.additionLines[y.lineIndex],deletionLine:e.deletionLines[C.lineIndex],deletionLineIndex:x.deletionContent.length,additionLineIndex:x.additionContent.length,deletionDecorations:x.deletionDecorations,additionDecorations:x.additionDecorations,lineDiffType:c,maxLineDiffLength:u}),C!=null&&(m(e.deletionLines[C.lineIndex],C.lineIndex,x.deletionSegments,x.deletionContent),x.deletionInfo.push({type:g==="change"?"change-deletion":g,lineNumber:C.lineNumber,altLineNumber:g==="change"?void 0:y.lineNumber??void 0,lineIndex:`${C.unifiedLineIndex},${w}`})),y!=null&&(m(e.additionLines[y.lineIndex],y.lineIndex,x.additionSegments,x.additionContent),x.additionInfo.push({type:g==="change"?"change-addition":g,lineNumber:y.lineNumber,altLineNumber:g==="change"?void 0:C.lineNumber??void 0,lineIndex:`${y.unifiedLineIndex},${w}`}))}});for(const b of k.values()){if(b.deletionContent.length===0&&b.additionContent.length===0)continue;const y={name:e.prevName??e.name,contents:b.deletionContent.value},C={name:e.name,contents:b.additionContent.value},{deletionLines:g,additionLines:x}=Ai({deletionFile:y,deletionInfo:b.deletionInfo,deletionDecorations:b.deletionDecorations,additionFile:C,additionInfo:b.additionInfo,additionDecorations:b.additionDecorations,highlighter:n,options:t,languageOverride:i?"text":e.lang});if(p){h.deletionLines=g,h.additionLines=x;continue}if(b.deletionSegments.length>0)for(const w of b.deletionSegments)for(let L=0;L<w.count;L++)h.deletionLines[w.targetIndex+L]=g[w.originalOffset+L];else h.deletionLines.push(...g);if(b.additionSegments.length>0)for(const w of b.additionSegments)for(let L=0;L<w.count;L++)h.additionLines[w.targetIndex+L]=x[w.originalOffset+L];else h.additionLines.push(...x)}return{code:h,themeStyles:f,baseThemeType:d}}function Ei({deletionLine:e,additionLine:n,deletionLineIndex:t,additionLineIndex:i,deletionDecorations:r,additionDecorations:o,lineDiffType:a,maxLineDiffLength:l}){if(e==null||n==null||a==="none"||(e=he(e),n=he(n),e.length>l||n.length>l))return;const s=a==="char"?pi(e,n):bi(e,n),d=[],f=[],c=a==="word-alt",h=s.at(-1);for(const p of s){const v=p===h;!p.added&&!p.removed?(Le({item:p,arr:d,enableJoin:c,isNeutral:!0,isLastItem:v}),Le({item:p,arr:f,enableJoin:c,isNeutral:!0,isLastItem:v})):p.removed?Le({item:p,arr:d,enableJoin:c,isLastItem:v}):Le({item:p,arr:f,enableJoin:c,isLastItem:v})}let u=0;for(const p of d)p[0]===1&&r.push(Ln({line:t,spanStart:u,spanLength:p[1].length})),u+=p[1].length;u=0;for(const p of f)p[0]===1&&o.push(Ln({line:i,spanStart:u,spanLength:p[1].length})),u+=p[1].length}function Ti(){return{deletionContent:{push(e){this.value+=e,this.length++},value:"",length:0},additionContent:{push(e){this.value+=e,this.length++},value:"",length:0},deletionInfo:[],additionInfo:[],deletionDecorations:[],additionDecorations:[],deletionSegments:[],additionSegments:[]}}function Ai({deletionFile:e,additionFile:n,deletionInfo:t,additionInfo:i,highlighter:r,deletionDecorations:o,additionDecorations:a,languageOverride:l,options:{theme:s=J,...d}}){const f=l??ue(e.name),c=l??ue(n.name),{state:h,transformers:u}=oi(d.useTokenTransformer),p=typeof s=="string"?{...d,lang:"text",theme:s,transformers:u,decorations:void 0,defaultColor:!1,cssVariablePrefix:q("token")}:{...d,lang:"text",themes:s,transformers:u,decorations:void 0,defaultColor:!1,cssVariablePrefix:q("token")};return{deletionLines:e.contents===""?[]:(p.lang=f,h.lineInfo=t,p.decorations=o,yn(r.codeToHast(he(e.contents),p))),additionLines:n.contents===""?[]:(p.lang=c,p.decorations=a,h.lineInfo=i,yn(r.codeToHast(he(n.contents),p)))}}const Ii=P.createContext(void 0);function Mi(e){const n=P.useRef(e);return P.useInsertionEffect(()=>{n.current=e}),P.useCallback((...t)=>n.current(...t),[])}function Ri(e,n){return e.lineNumber===n.lineNumber&&e.side===n.side}function En(e,n){return e?.start===n?.start&&e?.end===n?.end&&e?.side===n?.side&&e?.endSide===n?.endSide}function Pi(){return A({tagName:"button",properties:{"data-utility-button":"",type:"button"},children:[Pe({name:"diffs-icon-plus",properties:{"data-icon":""}})]})}var Hi=class{hoveredLine;hoveredToken;pre;gutterUtilityContainer;gutterUtilityButton;gutterUtilitySlot;interactiveLinesAttr=!1;interactiveLineNumbersAttr=!1;hasPointerListeners=!1;hasDocumentPointerListeners=!1;selectedRange=null;renderedSelectionRange;selectionAnchor;queuedSelectionRender;pointerSession={mode:"idle"};constructor(e,n){this.mode=e,this.options=n}setOptions(e){this.options=e}cleanUp(){this.pre?.removeEventListener("click",this.handlePointerClick),this.pre?.removeEventListener("pointerdown",this.handlePointerDown),this.pre?.removeEventListener("pointermove",this.handlePointerMove),this.pre?.removeEventListener("pointerleave",this.handlePointerLeave),this.pre?.removeAttribute("data-interactive-lines"),this.pre?.removeAttribute("data-interactive-line-numbers"),this.pre=void 0,this.gutterUtilityContainer?.remove(),this.gutterUtilityContainer=void 0,this.gutterUtilityButton=void 0,this.gutterUtilitySlot=void 0,this.clearHoveredLine(),this.clearHoveredToken(),this.detachDocumentPointerListeners(),this.clearPointerSession(),this.queuedSelectionRender!=null&&(cancelAnimationFrame(this.queuedSelectionRender),this.queuedSelectionRender=void 0),this.interactiveLinesAttr=!1,this.interactiveLineNumbersAttr=!1,this.hasPointerListeners=!1}setup(e){this.setSelectionDirty();const{usesCustomGutterUtility:n=!1,enableGutterUtility:t=!1}=this.options;this.pre!==e&&(this.cleanUp(),this.pre=e),t?this.ensureGutterUtilityNode(n):this.gutterUtilityContainer!=null&&(this.gutterUtilityContainer.remove(),this.gutterUtilityContainer=void 0,this.gutterUtilityButton=void 0,this.gutterUtilitySlot=void 0,this.pointerSession.mode==="gutterSelecting"&&(this.clearPointerSession(),this.detachDocumentPointerListeners())),this.syncPointerListeners(e),this.updateInteractiveLineAttributes(),this.renderSelection()}setSelectionDirty(){this.renderedSelectionRange=void 0}isSelectionDirty(){return this.renderedSelectionRange===null}setSelection(e){const n=!(e===this.selectedRange||En(e??void 0,this.selectedRange??void 0));!this.isSelectionDirty()&&!n||(this.selectedRange=e,this.renderSelection(),n&&this.notifySelectionCommitted())}getSelection(){return this.selectedRange}getHoveredLine=()=>{if(this.hoveredLine!=null){if(this.mode==="diff"&&this.hoveredLine.type==="diff-line")return{lineNumber:this.hoveredLine.lineNumber,side:this.hoveredLine.annotationSide};if(this.mode==="file"&&this.hoveredLine.type==="line")return{lineNumber:this.hoveredLine.lineNumber}}};handlePointerClick=e=>{const{onHunkExpand:n,onLineClick:t,onLineNumberClick:i,onTokenClick:r,onMergeConflictActionClick:o}=this.options;n==null&&t==null&&i==null&&o==null&&r==null||this.options.onGutterUtilityClick!=null&&Rn(e.composedPath())||(ne(this.options.__debugPointerEvents,"click","FileDiff.DEBUG.handlePointerClick:",e),this.handlePointerEvent({eventType:"click",event:e}))};handlePointerMove=e=>{const{lineHoverHighlight:n="disabled",onLineEnter:t,onLineLeave:i,onTokenEnter:r,onTokenLeave:o,enableGutterUtility:a=!1}=this.options;n==="disabled"&&!a&&t==null&&i==null&&r==null&&o==null||(ne(this.options.__debugPointerEvents,"move","FileDiff.DEBUG.handlePointerMove:",e),this.handlePointerEvent({eventType:"move",event:e}))};handlePointerLeave=e=>{const{__debugPointerEvents:n}=this.options;if(ne(n,"move","FileDiff.DEBUG.handlePointerLeave: no event"),this.hoveredLine==null&&this.hoveredToken==null){ne(n,"move","FileDiff.DEBUG.handlePointerLeave: returned early, no hovered line or token");return}this.gutterUtilityContainer?.remove(),this.hoveredToken!=null&&(this.options.onTokenLeave?.(this.hoveredToken,e),this.clearHoveredToken()),this.hoveredLine!=null&&(this.options.onLineLeave?.({...this.hoveredLine,event:e}),this.clearHoveredLine())};handlePointerEvent({eventType:e,event:n}){const{__debugPointerEvents:t}=this.options,i=n.composedPath();ne(t,e,"FileDiff.DEBUG.handlePointerEvent:",{eventType:e,composedPath:i});const r=this.resolvePointerTarget(i);ne(t,e,"FileDiff.DEBUG.handlePointerEvent: resolvePointerTarget result:",r);const{onLineClick:o,onLineNumberClick:a,onLineEnter:l,onLineLeave:s,onTokenClick:d,onTokenEnter:f,onTokenLeave:c,onHunkExpand:h,onMergeConflictActionClick:u}=this.options;switch(e){case"move":{const p=qe(r)&&this.hoveredLine?.lineElement===r.lineElement;Re(r)&&this.hoveredToken?.tokenElement===r.tokenElement||(this.hoveredToken!=null&&(c?.(this.hoveredToken,n),this.clearHoveredToken()),Re(r)&&(this.setHoveredToken(this.toTokenEventBaseProps(r)),f?.(this.hoveredToken,n))),p||(this.hoveredLine!=null&&(this.gutterUtilityContainer?.remove(),s?.({...this.hoveredLine,event:n}),this.clearHoveredLine()),qe(r)&&(this.setHoveredLine(this.toEventBaseProps(r)),this.gutterUtilityContainer!=null&&r.numberElement.appendChild(this.gutterUtilityContainer),l?.({...this.hoveredLine,event:n})));break}case"click":{if(r==null)break;if(Ui(r)&&u!=null){u(r);break}if(Ni(r)&&h!=null){h(r.hunkIndex,n.shiftKey?"both":r.direction,n.shiftKey?Number.POSITIVE_INFINITY:void 0);break}if(!qe(r))break;Re(r)&&d!=null&&d(this.toTokenEventBaseProps(r),n);const p=this.toEventBaseProps(r);a!=null&&r.numberColumn?a({...p,event:n}):o?.({...p,event:n});break}}}syncPointerListeners(e){const{__debugPointerEvents:n,lineHoverHighlight:t="disabled",onLineClick:i,onLineNumberClick:r,onLineEnter:o,onLineLeave:a,onTokenClick:l,onTokenEnter:s,onTokenLeave:d,onHunkExpand:f,onMergeConflictActionClick:c,enableGutterUtility:h=!1,enableLineSelection:u=!1,onGutterUtilityClick:p}=this.options,v=p!=null,k=t!=="disabled"||i!=null||r!=null||o!=null||a!=null||l!=null||s!=null||d!=null||f!=null||c!=null||h||u||v;k&&!this.hasPointerListeners?(e.addEventListener("click",this.handlePointerClick),e.addEventListener("pointerdown",this.handlePointerDown),e.addEventListener("pointermove",this.handlePointerMove),e.addEventListener("pointerleave",this.handlePointerLeave),this.hasPointerListeners=!0,ne(n,"click","FileDiff.DEBUG.attachEventListeners: Attaching click events for:",(()=>{const b=[];return(n==="both"||n==="click")&&(i!=null&&b.push("onLineClick"),r!=null&&b.push("onLineNumberClick"),f!=null&&b.push("expandable hunk separators"),c!=null&&b.push("merge conflict actions")),b})()),ne(n,"move","FileDiff.DEBUG.attachEventListeners: Attaching pointer move event"),ne(n,"move","FileDiff.DEBUG.attachEventListeners: Attaching pointer leave event")):!k&&this.hasPointerListeners&&(e.removeEventListener("click",this.handlePointerClick),e.removeEventListener("pointerdown",this.handlePointerDown),e.removeEventListener("pointermove",this.handlePointerMove),e.removeEventListener("pointerleave",this.handlePointerLeave),this.hasPointerListeners=!1);const S=this.pointerSession.mode==="selecting"||this.pointerSession.mode==="pendingSingleLineUnselect",m=this.pointerSession.mode==="gutterSelecting";(!u&&S||!v&&m)&&(this.clearPointerSession(),this.detachDocumentPointerListeners(),this.selectionAnchor=void 0,this.clearPendingSingleLineState())}updateInteractiveLineAttributes(){if(this.pre==null)return;const{onLineClick:e,onLineNumberClick:n,enableLineSelection:t=!1}=this.options,i=e!=null,r=n!=null||t;i&&!this.interactiveLinesAttr?(this.pre.setAttribute("data-interactive-lines",""),this.interactiveLinesAttr=!0):!i&&this.interactiveLinesAttr&&(this.pre.removeAttribute("data-interactive-lines"),this.interactiveLinesAttr=!1),r&&!this.interactiveLineNumbersAttr?(this.pre.setAttribute("data-interactive-line-numbers",""),this.interactiveLineNumbersAttr=!0):!r&&this.interactiveLineNumbersAttr&&(this.pre.removeAttribute("data-interactive-line-numbers"),this.interactiveLineNumbersAttr=!1)}handlePointerDown=e=>{if(e.pointerType==="mouse"&&e.button!==0||this.pre==null||this.pointerSession.mode!=="idle")return;const n=e.composedPath();Rn(n)&&this.options.onGutterUtilityClick!=null?this.startGutterSelectionFromPointerDown(e,n):this.startLineSelectionFromPointerDown(e,n)};startLineSelectionFromPointerDown(e,n){const{enableLineSelection:t=!1}=this.options;if(!t)return;const i=this.getSelectionPointerInfo(n,!0);if(i==null)return;const{pre:r}=this;if(r==null)return;e.preventDefault();const{lineNumber:o,eventSide:a,lineIndex:l}=i;if(e.shiftKey&&this.selectedRange!=null){const s=this.getIndexesFromSelection(this.selectedRange,r.getAttribute("data-diff-type")==="split");if(s==null)return;const d=s.start<=s.end?l>=s.start:l<=s.end;this.selectionAnchor={lineNumber:d?this.selectedRange.start:this.selectedRange.end,side:d?this.selectedRange.side:this.selectedRange.endSide??this.selectedRange.side},this.updateSelection(o,a,!1),this.notifySelectionStart(this.selectedRange),this.pointerSession={mode:"selecting",pointerId:e.pointerId},this.attachDocumentPointerListeners();return}if(this.selectedRange?.start===o&&this.selectedRange?.end===o){const s={lineNumber:o,side:a};this.selectionAnchor=s,this.pointerSession={mode:"pendingSingleLineUnselect",pointerId:e.pointerId,anchor:s,pending:s},this.attachDocumentPointerListeners();return}this.selectedRange=null,this.selectionAnchor={lineNumber:o,side:a},this.updateSelection(o,a,!1),this.notifySelectionStart(this.selectedRange),this.pointerSession={mode:"selecting",pointerId:e.pointerId},this.attachDocumentPointerListeners()}startGutterSelectionFromPointerDown(e,n){const{enableLineSelection:t=!1,onGutterUtilityClick:i}=this.options;if(i==null)return;const r=this.getSelectionPointFromPath(n);r!=null&&(e.preventDefault(),e.stopPropagation(),this.pointerSession={mode:"gutterSelecting",pointerId:e.pointerId,anchor:r,current:r},t&&(this.selectionAnchor={lineNumber:r.lineNumber,side:r.side},this.updateSelection(r.lineNumber,r.side,!1),this.notifySelectionStart(this.selectedRange)),this.attachDocumentPointerListeners())}handleDocumentPointerMove=e=>{const{enableLineSelection:n=!1}=this.options;switch(this.pointerSession.mode){case"idle":return;case"gutterSelecting":{if(e.pointerId!==this.pointerSession.pointerId)return;const t=this.getSelectionPointFromPath(e.composedPath());if(t==null)return;this.pointerSession.current=t,n===!0&&this.updateSelection(t.lineNumber,t.side);return}case"selecting":{if(e.pointerId!==this.pointerSession.pointerId)return;const t=this.getSelectionPointerInfo(e.composedPath(),!1);if(t==null||this.selectionAnchor==null)return;this.updateSelection(t.lineNumber,t.eventSide);return}case"pendingSingleLineUnselect":{if(e.pointerId!==this.pointerSession.pointerId)return;const t=this.getSelectionPointerInfo(e.composedPath(),!1);if(t==null||this.selectionAnchor==null)return;const i={lineNumber:t.lineNumber,side:t.eventSide};if(Ri(this.pointerSession.pending,i))return;this.updateSelection(t.lineNumber,t.eventSide,!1),this.notifySelectionStart(this.selectedRange),this.notifySelectionChangeDelta(),this.pointerSession={mode:"selecting",pointerId:e.pointerId};return}}};handleDocumentPointerUp=e=>{const{enableLineSelection:n=!1,onGutterUtilityClick:t}=this.options;switch(this.pointerSession.mode){case"idle":return;case"gutterSelecting":{if(e.pointerId!==this.pointerSession.pointerId)return;const i=this.getSelectionPointFromPath(e.composedPath());i!=null&&(this.pointerSession.current=i,n&&this.updateSelection(i.lineNumber,i.side)),t?.(this.buildSelectedLineRange(this.pointerSession.anchor,this.pointerSession.current)),this.selectionAnchor=void 0,n&&(this.notifySelectionEnd(this.selectedRange),this.notifySelectionCommitted()),this.clearPointerSession(),this.detachDocumentPointerListeners();return}case"pendingSingleLineUnselect":if(e.pointerId!==this.pointerSession.pointerId)return;this.updateSelection(null,void 0,!1),this.selectionAnchor=void 0,this.clearPendingSingleLineState(),this.detachDocumentPointerListeners(),this.notifySelectionEnd(this.selectedRange),this.notifySelectionCommitted();return;case"selecting":if(e.pointerId!==this.pointerSession.pointerId)return;this.selectionAnchor=void 0,this.detachDocumentPointerListeners(),this.clearPointerSession(),this.notifySelectionEnd(this.selectedRange),this.notifySelectionCommitted()}};handleDocumentPointerCancel=e=>{switch(this.pointerSession.mode){case"idle":return;case"gutterSelecting":case"selecting":case"pendingSingleLineUnselect":if("pointerId"in this.pointerSession&&e.pointerId!==this.pointerSession.pointerId)return;this.selectionAnchor=void 0,this.clearPendingSingleLineState(),this.clearPointerSession(),this.detachDocumentPointerListeners()}};clearHoveredLine(){this.hoveredLine!=null&&(this.hoveredLine.lineElement.removeAttribute("data-hovered"),this.hoveredLine.numberElement.removeAttribute("data-hovered"),this.hoveredLine=void 0)}setHoveredLine(e){const{lineHoverHighlight:n="disabled"}=this.options;this.hoveredLine!=null&&this.clearHoveredLine(),this.hoveredLine=e,n!=="disabled"&&((n==="both"||n==="line")&&this.hoveredLine.lineElement.setAttribute("data-hovered",""),(n==="both"||n==="number")&&this.hoveredLine.numberElement.setAttribute("data-hovered",""))}clearHoveredToken(){this.hoveredToken!=null&&(this.hoveredToken=void 0)}setHoveredToken(e){this.hoveredToken!=null&&this.clearHoveredToken(),this.hoveredToken=e}ensureGutterUtilityNode(e){if(this.gutterUtilityContainer==null&&(this.gutterUtilityContainer=document.createElement("div"),this.gutterUtilityContainer.setAttribute("data-gutter-utility-slot","")),e)this.gutterUtilityButton!=null&&(this.gutterUtilityButton.remove(),this.gutterUtilityButton=void 0),this.gutterUtilitySlot==null&&(this.gutterUtilitySlot=document.createElement("slot"),this.gutterUtilitySlot.name="gutter-utility-slot"),this.gutterUtilitySlot.parentNode!==this.gutterUtilityContainer&&this.gutterUtilityContainer.replaceChildren(this.gutterUtilitySlot);else{if(this.gutterUtilitySlot?.remove(),this.gutterUtilitySlot=void 0,this.gutterUtilityButton==null){const n=document.createElement("div");n.innerHTML=be(Pi());const t=n.firstElementChild;if(!(t instanceof HTMLButtonElement))throw new Error("InteractionManager.ensureGutterUtilityNode: Node element should be a button");t.remove(),this.gutterUtilityButton=t}this.gutterUtilityButton.parentNode!==this.gutterUtilityContainer&&this.gutterUtilityContainer.replaceChildren(this.gutterUtilityButton)}}attachDocumentPointerListeners(){this.hasDocumentPointerListeners||(document.addEventListener("pointermove",this.handleDocumentPointerMove),document.addEventListener("pointerup",this.handleDocumentPointerUp),document.addEventListener("pointercancel",this.handleDocumentPointerCancel),this.hasDocumentPointerListeners=!0)}detachDocumentPointerListeners(){this.hasDocumentPointerListeners&&(document.removeEventListener("pointermove",this.handleDocumentPointerMove),document.removeEventListener("pointerup",this.handleDocumentPointerUp),document.removeEventListener("pointercancel",this.handleDocumentPointerCancel),this.hasDocumentPointerListeners=!1)}clearPointerSession(){this.pointerSession={mode:"idle"}}clearPendingSingleLineState(){this.pointerSession.mode==="pendingSingleLineUnselect"&&(this.pointerSession={mode:"idle"})}getSelectionPointerInfo(e,n){const t=this.resolvePointerTarget(e);if(on(t)&&!(n&&!t.numberColumn)&&t.splitLineIndex!=null)return{lineIndex:t.splitLineIndex,lineNumber:t.lineNumber,eventSide:this.mode==="diff"?t.side:void 0}}getSelectionPointFromPath(e){const n=this.resolvePointerTarget(e);if(on(n))return{lineNumber:n.lineNumber,side:this.mode==="diff"?n.side:void 0}}getLineIndex(e,n){const{getLineIndex:t}=this.options;return t!=null?t(e,n):[e-1,e-1]}updateSelection(e,n,t=!0){const{selectedRange:i}=this;let r;if(e==null)r=null;else{const o=this.selectionAnchor?.side??n,a=this.selectionAnchor?.lineNumber??e;r=this.buildSelectionRange(a,e,o,n)}En(i??void 0,r??void 0)||(this.selectedRange=r,t&&this.notifySelectionChangeDelta(),this.queuedSelectionRender??=requestAnimationFrame(this.renderSelection))}getIndexesFromSelection(e,n){if(this.pre==null)return;const t=this.getLineIndex(e.start,e.side),i=this.getLineIndex(e.end,e.endSide??e.side);return t!=null&&i!=null?{start:n?t[1]:t[0],end:n?i[1]:i[0]}:void 0}renderSelection=()=>{if(this.queuedSelectionRender!=null&&(cancelAnimationFrame(this.queuedSelectionRender),this.queuedSelectionRender=void 0),this.pre==null||this.renderedSelectionRange===this.selectedRange)return;const e=this.pre.querySelectorAll("[data-selected-line]");for(const l of e)l.removeAttribute("data-selected-line");if(this.renderedSelectionRange=this.selectedRange,this.selectedRange==null)return;const{children:n}=this.pre;if(n.length===0)return;if(n.length>2)throw console.error(n),new Error("InteractionManager.renderSelection: Somehow there are more than 2 code elements...");const t=this.pre.getAttribute("data-diff-type")==="split",i=this.getIndexesFromSelection(this.selectedRange,t);if(i==null)throw console.error({rowRange:i,selectedRange:this.selectedRange}),new Error("InteractionManager.renderSelection: No valid rowRange");const r=i.start===i.end,o=Math.min(i.start,i.end),a=Math.max(i.start,i.end);for(const l of n){const[s,d]=l.children,f=d.children.length;if(f!==s.children.length)throw new Error("InteractionManager.renderSelection: gutter and content children dont match, something is wrong");for(let c=0;c<f;c++){const h=d.children[c],u=s.children[c];if(!(h instanceof HTMLElement)||!(u instanceof HTMLElement))continue;const p=this.parseLineIndex(h,t);if((p??0)>a)break;if(p==null||p<o)continue;let v=r?"single":p===o?"first":p===a?"last":"";h.setAttribute("data-selected-line",v),u.setAttribute("data-selected-line",v),u.nextSibling instanceof HTMLElement&&h.nextSibling instanceof HTMLElement&&(h.nextSibling.hasAttribute("data-line-annotation")||h.nextSibling.hasAttribute("data-merge-conflict-actions"))&&(r?(v="last",h.setAttribute("data-selected-line","first")):p===o?v="":p===a&&h.setAttribute("data-selected-line",""),h.nextSibling.setAttribute("data-selected-line",v),u.nextSibling.setAttribute("data-selected-line",v))}}};notifySelectionCommitted(){this.options.onLineSelected?.(this.selectedRange??null)}notifySelectionChangeDelta(){this.options.onLineSelectionChange?.(this.selectedRange??null)}notifySelectionStart(e){this.options.onLineSelectionStart?.(e)}notifySelectionEnd(e){this.options.onLineSelectionEnd?.(e)}toEventBaseProps(e){return this.mode==="file"?{type:"line",lineElement:e.lineElement,lineNumber:e.lineNumber,numberColumn:e.numberColumn,numberElement:e.numberElement}:{type:"diff-line",annotationSide:e.side,lineType:e.lineType,lineElement:e.lineElement,numberElement:e.numberElement,lineNumber:e.lineNumber,numberColumn:e.numberColumn}}toTokenEventBaseProps({lineCharEnd:e,lineCharStart:n,lineNumber:t,side:i,tokenElement:r,tokenText:o}){return this.mode==="file"?{type:"token",lineCharEnd:e,lineCharStart:n,lineNumber:t,tokenElement:r,tokenText:o}:{type:"token",lineCharEnd:e,lineCharStart:n,lineNumber:t,side:i,tokenElement:r,tokenText:o}}buildSelectedLineRange(e,n){return this.buildSelectionRange(e.lineNumber,n.lineNumber,e.side,n.side)}buildSelectionRange(e,n,t,i){return{start:e,end:n,...t!=null?{side:t}:{},...t!==i&&i!=null?{endSide:i}:{}}}resolvePointerTarget(e){let n=!1,t,i,r,o,a,l,s,d,f,c;for(const u of e){if(!(u instanceof HTMLElement))continue;if(c==null&&u.hasAttribute("data-merge-conflict-action")){const S=u.getAttribute("data-merge-conflict-action")??void 0,m=u.getAttribute("data-merge-conflict-conflict-index")??void 0,b=m!=null?Number.parseInt(m,10):NaN;Oi(S)&&Number.isFinite(b)&&(c={kind:"merge-conflict-action",resolution:S,conflictIndex:b})}if(l==null&&u.hasAttribute("data-char")){l=u;const S=u.getAttribute("data-char");if(S!=null){const m=Number.parseInt(S,10);if(!Number.isNaN(m)){const b=u.textContent??"",y=m+b.length;(b.trim()!==""||this.options.enableTokenInteractionsOnWhitespace===!0)&&(s={tokenElement:l,lineCharStart:m,lineCharEnd:y,tokenText:b});continue}}}const p=a==null?u.getAttribute("data-column-number")??void 0:void 0;if(p!=null){a=u,f=Number.parseInt(p,10),n=!0,t=Mn(u),o=u.getAttribute("data-line-index")??void 0;continue}const v=r==null?u.getAttribute("data-line")??void 0:void 0;if(v!=null){r=u,f=Number.parseInt(v,10),t=Mn(u),o=u.getAttribute("data-line-index")??void 0;continue}if(d==null&&u.hasAttribute("data-expand-button")){d={hunkIndex:void 0,direction:u.hasAttribute("data-expand-up")?"up":u.hasAttribute("data-expand-down")?"down":"both"};continue}const k=d!=null?u.getAttribute("data-expand-index")??void 0:void 0;if(d!=null&&k!=null){const S=Number.parseInt(k,10);Number.isNaN(S)||(d.hunkIndex=S);continue}if(i==null&&u.hasAttribute("data-code")){i=u;break}}if(c!=null)return c;if(d?.hunkIndex!=null)return{type:"line-info",hunkIndex:d.hunkIndex,direction:d.direction};if(r??=o!=null?An(i,`[data-line][data-line-index="${o}"]`):void 0,a??=o!=null?An(i,`[data-column-number][data-line-index="${o}"]`):void 0,i==null||r==null||a==null||t==null||f==null||Number.isNaN(f))return;const h=this.parseLineIndex(r,this.isSplitDiff());return s!=null?this.mode==="file"?{kind:"token",lineType:t,lineElement:r,lineNumber:f,numberColumn:n,numberElement:a,side:void 0,splitLineIndex:h,...s}:{kind:"token",lineType:t,lineElement:r,lineNumber:f,numberColumn:n,numberElement:a,side:In(t,i),splitLineIndex:h,...s}:this.mode==="file"?{kind:"line",lineType:t,lineElement:r,lineNumber:f,numberColumn:n,numberElement:a,side:void 0,splitLineIndex:h}:{kind:"line",lineType:t,lineElement:r,lineNumber:f,numberColumn:n,numberElement:a,side:In(t,i),splitLineIndex:h}}isSplitDiff(){return this.pre?.getAttribute("data-diff-type")==="split"}parseLineIndex(e,n){const t=(e.getAttribute("data-line-index")??"").split(",").map(i=>Number.parseInt(i,10)).filter(i=>!Number.isNaN(i));if(n&&t.length===2)return t[1];if(!n)return t[0]}};function Tn({enableTokenInteractionsOnWhitespace:e,enableGutterUtility:n,enableHoverUtility:t,lineHoverHighlight:i,onGutterUtilityClick:r,onLineClick:o,onLineEnter:a,onLineLeave:l,onLineNumberClick:s,onTokenClick:d,onTokenEnter:f,onTokenLeave:c,renderGutterUtility:h,renderHoverUtility:u,__debugPointerEvents:p,enableLineSelection:v,onLineSelected:k,onLineSelectionStart:S,onLineSelectionChange:m,onLineSelectionEnd:b},y,C,g){return{enableTokenInteractionsOnWhitespace:e,enableGutterUtility:Di({enableGutterUtility:n,enableHoverUtility:t,renderGutterUtility:h,renderHoverUtility:u,onGutterUtilityClick:r}),usesCustomGutterUtility:h!=null||u!=null,lineHoverHighlight:i,onGutterUtilityClick:r,onHunkExpand:y,onMergeConflictActionClick:g,onLineClick:o,onLineEnter:a,onLineLeave:l,onLineNumberClick:s,onTokenClick:d,onTokenEnter:f,onTokenLeave:c,__debugPointerEvents:p,enableLineSelection:v,onLineSelected:k,onLineSelectionStart:S,onLineSelectionChange:m,onLineSelectionEnd:b,getLineIndex:C}}function Di({enableGutterUtility:e,enableHoverUtility:n,renderGutterUtility:t,renderHoverUtility:i,onGutterUtilityClick:r}){if(e!==void 0&&n!==void 0)throw new Error("Cannot use both 'enableGutterUtility' and deprecated 'enableHoverUtility'. Use only 'enableGutterUtility'.");if(t!=null&&i!=null)throw new Error("Cannot use both 'renderGutterUtility' and deprecated 'renderHoverUtility'. Use only 'renderGutterUtility'.");if(r!=null&&(t!=null||i!=null))throw new Error("Cannot use both 'onGutterUtilityClick' and render utility callbacks ('renderGutterUtility'/'renderHoverUtility'). Use only one gutter utility API.");return e??n??!1}function on(e){return e!=null&&"kind"in e&&e.kind==="line"}function Re(e){return e!=null&&"kind"in e&&e.kind==="token"}function qe(e){return on(e)||Re(e)}function Ni(e){return"type"in e&&e.type==="line-info"}function Ui(e){return"kind"in e&&e.kind==="merge-conflict-action"}function Oi(e){return e==="current"||e==="incoming"||e==="both"}function An(e,n){const t=e?.querySelector(n);return t instanceof HTMLElement?t:void 0}function In(e,n){switch(e){case"change-deletion":return"deletions";case"change-addition":return"additions";default:return n.hasAttribute("data-deletions")?"deletions":"additions"}}function Mn(e){const n=e.getAttribute("data-line-type");if(n!=null)switch(n){case"change-deletion":case"change-addition":case"context":case"context-expanded":return n;default:return}}function Rn(e){for(const n of e)if(n instanceof HTMLElement&&n.hasAttribute("data-utility-button"))return!0;return!1}function ne(e="none",n,...t){switch(e){case"none":return;case"both":break;case"click":if(n!=="click")return;break;case"move":if(n!=="move")return;break}console.log(...t)}var zi=class{observedNodes=new Map;queuedUpdates=new Map;cleanUp(){this.resizeObserver?.disconnect(),this.observedNodes.clear(),this.queuedUpdates.clear()}resizeObserver;setup(e,n){this.resizeObserver??=new ResizeObserver(this.handleResizeObserver);const t=e.querySelectorAll("code"),i=new Map(this.observedNodes);this.observedNodes.clear();for(const r of t){let o=i.get(r);if(o!=null&&o.type!=="code")throw new Error("ResizeManager.setup: somehow a code node is being used for an annotation, should be impossible");let a=r.firstElementChild;a instanceof HTMLElement||(a=null),o!=null?(this.observedNodes.set(r,o),i.delete(r),o.numberElement!==a?(o.numberElement!=null&&this.resizeObserver.unobserve(o.numberElement),a!=null&&(this.resizeObserver.observe(a),i.delete(a),this.observedNodes.set(a,o)),o.numberElement=a):o.numberElement!=null&&(i.delete(o.numberElement),this.observedNodes.set(o.numberElement,o))):(o={type:"code",codeElement:r,numberElement:a,codeWidth:"auto",numberWidth:0},this.observedNodes.set(r,o),this.resizeObserver.observe(r),a!=null&&(this.observedNodes.set(a,o),this.resizeObserver.observe(a)))}if(t.length>1&&!n){const r=e.querySelectorAll('[data-line-annotation*=","]'),o=new Map;for(const a of r){if(!(a instanceof HTMLElement))continue;const{lineAnnotation:l=""}=a.dataset;if(!/^\d+,\d+$/.test(l)){console.error("DiffFileRenderer.setupResizeObserver: Invalid element or annotation",{lineAnnotation:l,element:a});continue}let s=o.get(l);s==null&&(s=[],o.set(l,s)),s.push(a)}for(const[a,l]of o){if(l.length!==2){console.error("DiffFileRenderer.setupResizeObserver: Bad Pair",a,l);continue}const[s,d]=l,f=s.firstElementChild,c=d.firstElementChild;if(!(s instanceof HTMLElement)||!(d instanceof HTMLElement)||!(f instanceof HTMLElement)||!(c instanceof HTMLElement))continue;let h=i.get(f);if(h!=null){this.observedNodes.set(f,h),this.observedNodes.set(c,h),i.delete(f),i.delete(c);continue}h={type:"annotations",column1:{container:s,child:f,childHeight:f.getBoundingClientRect().height},column2:{container:d,child:c,childHeight:c.getBoundingClientRect().height},currentHeight:"auto"};const u=Math.max(h.column1.childHeight,h.column2.childHeight);this.applyNewHeight(h,u),this.observedNodes.set(f,h),this.observedNodes.set(c,h),this.resizeObserver.observe(f),this.resizeObserver.observe(c)}}for(const r of i.keys())r.isConnected&&(r.style.removeProperty("--diffs-column-content-width"),r.style.removeProperty("--diffs-column-number-width"),r.style.removeProperty("--diffs-column-width"),r.parentElement instanceof HTMLElement&&r.parentElement.style.removeProperty("--diffs-annotation-min-height")),this.resizeObserver.unobserve(r);i.clear()}handleResizeObserver=e=>{for(const n of e){const{target:t,borderBoxSize:i}=n;if(!(t instanceof HTMLElement)){console.error("FileDiff.handleResizeObserver: Invalid element for ResizeObserver",n);continue}const r=this.observedNodes.get(t);if(r==null){console.error("FileDiff.handleResizeObserver: Not a valid observed node",n);continue}const o=i[0];if(r.type==="annotations"){const a=(()=>{if(t===r.column1.child)return r.column1;if(t===r.column2.child)return r.column2})();if(a==null){console.error("FileDiff.handleResizeObserver: Couldn't find a column for",{item:r,target:t});continue}a.childHeight=o.blockSize;const l=Math.max(r.column1.childHeight,r.column2.childHeight);this.applyNewHeight(r,l)}else if(r.type==="code"){const a=[t,o.inlineSize],l=this.queuedUpdates.get(r)??[];l.push(a),this.queuedUpdates.set(r,l)}}this.handleColumnChange()};handleColumnChange=()=>{for(const[e,n]of this.queuedUpdates)for(const[t,i]of n)if(t===e.codeElement){const r=Math.max(Math.floor(i),0);if(r!==e.codeWidth){const o=Math.max(r-e.numberWidth,0);e.codeWidth=r===0?"auto":r,e.codeElement.style.setProperty("--diffs-column-content-width",`${o>0?`${o}px`:"auto"}`),e.codeElement.style.setProperty("--diffs-column-width",`${typeof e.codeWidth=="number"?`${e.codeWidth}px`:"auto"}`)}e.numberElement!=null&&typeof e.codeWidth=="number"&&e.numberWidth===0&&n.push([e.numberElement,e.numberElement.getBoundingClientRect().width])}else if(t===e.numberElement){const r=Math.max(Math.ceil(i),0);if(r!==e.numberWidth&&(e.numberWidth=r,e.codeElement.style.setProperty("--diffs-column-number-width",`${e.numberWidth===0?"auto":`${e.numberWidth}px`}`),e.codeWidth!=="auto")){const o=Math.max(e.codeWidth-e.numberWidth,0);e.codeElement.style.setProperty("--diffs-column-content-width",`${o===0?"auto":`${o}px`}`)}}this.queuedUpdates.clear()};applyNewHeight(e,n){n!==e.currentHeight&&(e.currentHeight=Math.max(n,0),e.column1.container.style.setProperty("--diffs-annotation-min-height",`${e.currentHeight}px`),e.column2.container.style.setProperty("--diffs-annotation-min-height",`${e.currentHeight}px`))}};function tt(e,n){return e==null||n==null?e===n:e.startingLine===n.startingLine&&e.totalLines===n.totalLines&&e.bufferBefore===n.bufferBefore&&e.bufferAfter===n.bufferAfter}function Pn(e){for(const n of Array.isArray(e)?e:[e])if(!tn.has(n))return!1;return!0}function Ve(e){for(const n of Zn(e))if(!nn.has(n))return!1;return!0}function Fi(e){return A({tagName:"div",children:[A({tagName:"div",children:e.annotations?.map(n=>A({tagName:"slot",properties:{name:n}})),properties:{"data-annotation-content":""}})],properties:{"data-line-annotation":`${e.hunkIndex},${e.lineIndex}`}})}function _i(e,n){return A({tagName:"div",children:e,properties:{"data-content":"",style:`grid-row: span ${n}`}})}function $i(e){switch(e){case"file":return"diffs-icon-file-code";case"change":return"diffs-icon-symbol-modified";case"new":return"diffs-icon-symbol-added";case"deleted":return"diffs-icon-symbol-deleted";case"rename-pure":case"rename-changed":return"diffs-icon-symbol-moved"}}function Bi({fileOrDiff:e,mode:n}){const t="type"in e?e:void 0,i={"data-diffs-header":n,"data-change-type":t?.type};return A({tagName:"div",children:[n==="custom"?A({tagName:"slot",properties:{name:ln}}):ji({name:e.name,prevName:"prevName"in e?e.prevName:void 0,iconType:t?.type??"file"}),...n==="custom"?[]:[Wi(t)]],properties:i})}function ji({name:e,prevName:n,iconType:t}){const i=[A({tagName:"slot",properties:{name:sn}}),Pe({name:$i(t),properties:{"data-change-icon":t}})];return n!=null&&(i.push(A({tagName:"div",children:[A({tagName:"bdi",children:[te(n)]})],properties:{"data-prev-name":""}})),i.push(Pe({name:"diffs-icon-arrow-right-short",properties:{"data-rename-icon":""}}))),i.push(A({tagName:"div",children:[A({tagName:"bdi",children:[te(e)]})],properties:{"data-title":""}})),A({tagName:"div",children:i,properties:{"data-header-content":""}})}function Wi(e){const n=[];if(e!=null){let t=0,i=0;for(const r of e.hunks)t+=r.additionLines,i+=r.deletionLines;(i>0||t===0)&&n.push(A({tagName:"span",children:[te(`-${i}`)],properties:{"data-deletions-count":""}})),(t>0||i===0)&&n.push(A({tagName:"span",children:[te(`+${t}`)],properties:{"data-additions-count":""}}))}return n.push(A({tagName:"slot",properties:{name:an}})),A({tagName:"div",children:n,properties:{"data-metadata":""}})}function Gi(e){return A({tagName:"pre",properties:qi(e)})}function qi({diffIndicators:e,disableBackground:n,disableLineNumbers:t,overflow:i,split:r,totalLines:o,type:a,customProperties:l}){return{...l,"data-diff":a==="diff"?"":void 0,"data-file":a==="file"?"":void 0,"data-diff-type":a==="diff"?r?"split":"single":void 0,"data-overflow":i,"data-disable-line-numbers":t?"":void 0,"data-background":n?void 0:"","data-indicators":e==="bars"||e==="classic"?e:void 0,tabIndex:0,style:`--diffs-min-number-column-width-default:${`${o}`.length}ch;`}}function Vi(e,{theme:n,preferredHighlighter:t="shiki-js"}){return{langs:[e??"text"],themes:Zn(n),preferredHighlighter:t}}function Ki(e){return e.useTokenTransformer===!0||e.onTokenClick!=null||e.onTokenEnter!=null||e.onTokenLeave!=null}const Xi=`<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-icon-arrow-right-short" viewBox="0 0 16 16">
    <path d="M8.47 4.22a.75.75 0 0 0 0 1.06l1.97 1.97H3.75a.75.75 0 0 0 0 1.5h6.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-brand-github" viewBox="0 0 16 16">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/>
  </symbol>
  <symbol id="diffs-icon-chevron" viewBox="0 0 16 16">
    <path d="M1.47 4.47a.75.75 0 0 1 1.06 0L8 9.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-chevrons-narrow" viewBox="0 0 10 16">
    <path d="M4.47 2.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-1.06 1.06L5 3.81 2.28 6.53a.75.75 0 0 1-1.06-1.06zM1.22 9.47a.75.75 0 0 1 1.06 0L5 12.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-diff-split" viewBox="0 0 16 16">
    <path d="M14 0H8.5v16H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1.5 6.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.5V0zm.5 7.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1" opacity=".3"/>
  </symbol>
  <symbol id="diffs-icon-diff-unified" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5h16zm-8-4a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1A.5.5 0 0 0 8 10" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v5.5H0V2a2 2 0 0 1 2-2zM6.5 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd" opacity=".4"/>
  </symbol>
  <symbol id="diffs-icon-expand" viewBox="0 0 16 16">
    <path d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-expand-all" viewBox="0 0 16 16">
    <path d="M11.47 9.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L8 12.94zM7.526 1.418a.75.75 0 0 1 1.004.052l4 4a.75.75 0 1 1-1.06 1.06L8 3.06 4.53 6.53a.75.75 0 1 1-1.06-1.06l4-4z"/>
  </symbol>
  <symbol id="diffs-icon-file-code" viewBox="0 0 16 16">
    <path d="M10.75 0c.199 0 .39.08.53.22l3.5 3.5c.14.14.22.331.22.53v9A2.75 2.75 0 0 1 12.25 16h-8.5A2.75 2.75 0 0 1 1 13.25V2.75A2.75 2.75 0 0 1 3.75 0zm-7 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V5h-1.25A2.25 2.25 0 0 1 10 2.75V1.5z"/><path d="M7.248 6.19a.75.75 0 0 1 .063 1.058L5.753 9l1.558 1.752a.75.75 0 0 1-1.122.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.06-.063M8.69 7.248a.75.75 0 1 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 1 1-1.12-.996L10.245 9z"/>
  </symbol>
  <symbol id="diffs-icon-plus" viewBox="0 0 16 16">
    <path d="M8 3a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 8 3"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added" viewBox="0 0 16 16">
    <path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted" viewBox="0 0 16 16">
    <path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m11.53-2.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.495 4.695a.75.75 0 0 0-.05 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.05 1.06l2.044 2.248-1.796 1.995a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ref" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706.286.286.71.54 1.41.73V1.86c-.7.19-1.124.444-1.41.73-.324.325-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8m4 6.397c.697.07 1.522.103 2.5.103 1.613 0 2.806-.088 3.704-.288.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5c-.978 0-1.803.033-2.5.103zM0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m7-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>
  </symbol>
</svg>`;function Yi(e,n){return e==null||n==null?e===n:Qi(e.customProperties,n.customProperties)&&e.type===n.type&&e.diffIndicators===n.diffIndicators&&e.disableBackground===n.disableBackground&&e.disableLineNumbers===n.disableLineNumbers&&e.overflow===n.overflow&&e.split===n.split&&e.totalLines===n.totalLines}const Hn={};function Qi(e=Hn,n=Hn){if(e===n)return!0;const t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(const r of t)if(e[r]!==n[r])return!1;return!0}function Ji(e){const n=document.createElement("div");return n.dataset.annotationSlot="",n.slot=e,n.style.whiteSpace="normal",n}function Zi(){const e=document.createElement("div");return e.slot="gutter-utility-slot",e.style.position="absolute",e.style.top="0",e.style.bottom="0",e.style.textAlign="center",e.style.whiteSpace="normal",e}function er(){const e=document.createElement("style");return e.setAttribute(Vn,""),e}var nr=`@layer base, theme, rendered, unsafe;

@layer base {
  :host {
    --diffs-font-fallback:
      'SF Mono', Monaco, Consolas, 'Ubuntu Mono', 'Liberation Mono',
      'Courier New', monospace;
    --diffs-header-font-fallback:
      system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
      'Noto Sans', 'Liberation Sans', Arial, sans-serif;

    --diffs-mixer: light-dark(black, white);
    --diffs-gap-fallback: 8px;

    --diffs-added-light: #0dbe4e;
    --diffs-added-dark: #5ecc71;
    --diffs-modified-light: #009fff;
    --diffs-modified-dark: #69b1ff;
    --diffs-deleted-light: #ff2e3f;
    --diffs-deleted-dark: #ff6762;

    /*
    // Available CSS Color Overrides
    --diffs-bg-buffer-override
    --diffs-bg-hover-override
    --diffs-bg-context-override
    --diffs-bg-separator-override

    --diffs-fg-number-override
    --diffs-fg-number-addition-override
    --diffs-fg-number-deletion-override
    --diffs-fg-conflict-marker-override

    --diffs-deletion-color-override
    --diffs-addition-color-override
    --diffs-modified-color-override

    --diffs-bg-deletion-override
    --diffs-bg-deletion-number-override
    --diffs-bg-deletion-hover-override
    --diffs-bg-deletion-emphasis-override

    --diffs-bg-addition-override
    --diffs-bg-addition-number-override
    --diffs-bg-addition-hover-override
    --diffs-bg-addition-emphasis-override

    // Line Selection Color Overrides (for enableLineSelection)
    --diffs-selection-color-override
    --diffs-bg-selection-override
    --diffs-bg-selection-number-override
    --diffs-bg-selection-background-override
    --diffs-bg-selection-number-background-override

    // Available CSS Layout Overrides
    --diffs-gap-inline
    --diffs-gap-block
    --diffs-gap-style
    --diffs-tab-size
  */

    color-scheme: light dark;
    display: block;
    font-family: var(
      --diffs-header-font-family,
      var(--diffs-header-font-fallback)
    );
    font-size: var(--diffs-font-size, 13px);
    line-height: var(--diffs-line-height, 20px);
    font-feature-settings: var(--diffs-font-features);

    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
     * and vscode use an older build of chrome that appears to have a bug with
     * color-mix and 'in oklch', so use 'in lab' instead */
    --diffs-bg: light-dark(
      var(--diffs-light-bg, #fff),
      var(--diffs-dark-bg, #000)
    );
    --diffs-bg-buffer: var(
      --diffs-bg-buffer-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer))
      )
    );
    --diffs-bg-hover: var(
      --diffs-bg-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 97%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-mixer))
      )
    );

    --diffs-bg-context: var(
      --diffs-bg-context-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 98.5%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 92.5%, var(--diffs-mixer))
      )
    );
    --diffs-bg-context-number: var(
      --diffs-bg-context-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg-context) 80%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-bg-context) 60%, var(--diffs-bg))
      )
    );
    --diffs-bg-conflict-marker: var(
      --diffs-bg-conflict-marker-override,
      light-dark(
        color-mix(
          in lab,
          var(--diffs-bg-context) 88%,
          var(--diffs-modified-base)
        ),
        color-mix(
          in lab,
          var(--diffs-bg-context) 80%,
          var(--diffs-modified-base)
        )
      )
    );
    --diffs-bg-conflict-current: var(
      --diffs-bg-conflict-current-override,
      light-dark(#e5f8ea, #274432)
    );
    --diffs-bg-conflict-base: var(
      --diffs-bg-conflict-base-override,
      light-dark(
        color-mix(
          in lab,
          var(--diffs-bg-context) 90%,
          var(--diffs-modified-base)
        ),
        color-mix(
          in lab,
          var(--diffs-bg-context) 82%,
          var(--diffs-modified-base)
        )
      )
    );
    --diffs-bg-conflict-incoming: var(
      --diffs-bg-conflict-incoming-override,
      light-dark(#e6f1ff, #253b5a)
    );
    --diffs-bg-conflict-marker-number: var(
      --diffs-bg-conflict-marker-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg-conflict-marker) 72%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-bg-conflict-marker) 54%, var(--diffs-bg))
      )
    );
    --diffs-bg-conflict-current-number: var(
      --diffs-bg-conflict-current-number-override,
      light-dark(#d7f1de, #30533d)
    );
    --diffs-bg-conflict-base-number: var(
      --diffs-bg-conflict-base-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg-conflict-base) 72%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-bg-conflict-base) 54%, var(--diffs-bg))
      )
    );
    --diffs-bg-conflict-incoming-number: var(
      --diffs-bg-conflict-incoming-number-override,
      light-dark(#d8e8ff, #2f4b73)
    );
    --conflict-bg-current: var(
      --conflict-bg-current-override,
      var(--diffs-bg-addition)
    );
    --conflict-bg-incoming: var(
      --conflict-bg-incoming-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-modified-base)),
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-modified-base))
      )
    );
    --conflict-bg-current-number: var(
      --conflict-bg-current-number-override,
      var(--diffs-bg-addition-number)
    );
    --conflict-bg-incoming-number: var(
      --conflict-bg-incoming-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-modified-base)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-modified-base))
      )
    );
    --conflict-bg-current-header: var(
      --conflict-bg-current-header-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 78%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 68%, var(--diffs-addition-base))
      )
    );
    --conflict-bg-incoming-header: var(
      --conflict-bg-incoming-header-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 78%, var(--diffs-modified-base)),
        color-mix(in lab, var(--diffs-bg) 68%, var(--diffs-modified-base))
      )
    );
    --conflict-bg-current-header-number: var(
      --conflict-bg-current-header-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 72%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 62%, var(--diffs-addition-base))
      )
    );
    --conflict-bg-incoming-header-number: var(
      --conflict-bg-incoming-header-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 72%, var(--diffs-modified-base)),
        color-mix(in lab, var(--diffs-bg) 62%, var(--diffs-modified-base))
      )
    );

    --diffs-bg-separator: var(
      --diffs-bg-separator-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 96%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-mixer))
      )
    );

    --diffs-fg: light-dark(var(--diffs-light, #000), var(--diffs-dark, #fff));
    --diffs-fg-number: var(
      --diffs-fg-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg))
      )
    );
    --diffs-fg-conflict-marker: var(
      --diffs-fg-conflict-marker-override,
      var(--diffs-fg-number)
    );

    --diffs-deletion-base: var(
      --diffs-deletion-color-override,
      light-dark(
        var(
          --diffs-light-deletion-color,
          var(--diffs-deletion-color, var(--diffs-deleted-light))
        ),
        var(
          --diffs-dark-deletion-color,
          var(--diffs-deletion-color, var(--diffs-deleted-dark))
        )
      )
    );
    --diffs-addition-base: var(
      --diffs-addition-color-override,
      light-dark(
        var(
          --diffs-light-addition-color,
          var(--diffs-addition-color, var(--diffs-added-light))
        ),
        var(
          --diffs-dark-addition-color,
          var(--diffs-addition-color, var(--diffs-added-dark))
        )
      )
    );
    --diffs-modified-base: var(
      --diffs-modified-color-override,
      light-dark(
        var(
          --diffs-light-modified-color,
          var(--diffs-modified-color, var(--diffs-modified-light))
        ),
        var(
          --diffs-dark-modified-color,
          var(--diffs-modified-color, var(--diffs-modified-dark))
        )
      )
    );

    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
   * and vscode use an older build of chrome that appears to have a bug with
   * color-mix and 'in oklch', so use 'in lab' instead */
    --diffs-bg-deletion: var(
      --diffs-bg-deletion-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-number: var(
      --diffs-bg-deletion-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-hover: var(
      --diffs-bg-deletion-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-emphasis: var(
      --diffs-bg-deletion-emphasis-override,
      light-dark(
        rgb(from var(--diffs-deletion-base) r g b / 0.15),
        rgb(from var(--diffs-deletion-base) r g b / 0.2)
      )
    );

    --diffs-bg-addition: var(
      --diffs-bg-addition-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-number: var(
      --diffs-bg-addition-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-hover: var(
      --diffs-bg-addition-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 70%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-emphasis: var(
      --diffs-bg-addition-emphasis-override,
      light-dark(
        rgb(from var(--diffs-addition-base) r g b / 0.15),
        rgb(from var(--diffs-addition-base) r g b / 0.2)
      )
    );

    --diffs-selection-base: var(--diffs-modified-base);
    --diffs-selection-number-fg: light-dark(
      color-mix(in lab, var(--diffs-selection-base) 65%, var(--diffs-mixer)),
      color-mix(in lab, var(--diffs-selection-base) 75%, var(--diffs-mixer))
    );
    --diffs-bg-selection: var(
      --diffs-bg-selection-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 82%, var(--diffs-selection-base)),
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-selection-base))
      )
    );
    --diffs-bg-selection-number: var(
      --diffs-bg-selection-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-selection-base)),
        color-mix(in lab, var(--diffs-bg) 60%, var(--diffs-selection-base))
      )
    );

    background-color: var(--diffs-bg);
    color: var(--diffs-fg);
  }

  /* NOTE(mdo): Some semantic HTML elements (e.g. \`pre\`, \`code\`) have default
 * user-agent styles. These must be overridden to use our custom styles. */
  pre,
  code,
  [data-error-wrapper] {
    isolation: isolate;
    margin: 0;
    padding: 0;
    display: block;
    outline: none;
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
  }

  pre,
  code {
    background-color: var(--diffs-bg);
  }

  code {
    contain: content;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  [data-icon-sprite] {
    display: none;
  }

  /* NOTE(mdo): Headers and separators are within pre/code, so we need to reset
   * their font-family explicitly. */
  [data-diffs-header],
  [data-separator] {
    font-family: var(
      --diffs-header-font-family,
      var(--diffs-header-font-fallback)
    );
  }

  [data-file-info] {
    padding: 10px;
    font-weight: 700;
    color: var(--fg);
    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
   * and vscode use an older build of chrome that appears to have a bug with
   * color-mix and 'in oklch', so use 'in lab' instead */
    background-color: color-mix(in lab, var(--bg) 98%, var(--fg));
    border-block: 1px solid color-mix(in lab, var(--bg) 95%, var(--fg));
  }

  [data-diff],
  [data-file] {
    /* This feels a bit crazy to me... so I need to think about it a bit more... */
    --diffs-grid-number-column-width: minmax(min-content, max-content);
    --diffs-code-grid: var(--diffs-grid-number-column-width) 1fr;

    &[data-dehydrated] {
      --diffs-code-grid: var(--diffs-grid-number-column-width) minmax(0, 1fr);
    }

    &:hover [data-code]::-webkit-scrollbar-thumb {
      background-color: var(--diffs-bg-context);
    }
  }

  [data-line] span {
    color: light-dark(
      var(--diffs-token-light, var(--diffs-light)),
      var(--diffs-token-dark, var(--diffs-dark))
    );
    background-color: light-dark(
      var(--diffs-token-light-bg, inherit),
      var(--diffs-token-dark-bg, inherit)
    );
    font-weight: light-dark(
      var(--diffs-token-light-font-weight, inherit),
      var(--diffs-token-dark-font-weight, inherit)
    );
    font-style: light-dark(
      var(--diffs-token-light-font-style, inherit),
      var(--diffs-token-dark-font-style, inherit)
    );
    -webkit-text-decoration: light-dark(
      var(--diffs-token-light-text-decoration, inherit),
      var(--diffs-token-dark-text-decoration, inherit)
    );
            text-decoration: light-dark(
      var(--diffs-token-light-text-decoration, inherit),
      var(--diffs-token-dark-text-decoration, inherit)
    );
  }

  [data-line],
  [data-gutter-buffer],
  [data-line-annotation],
  [data-no-newline] {
    color: var(--diffs-fg);
    background-color: var(--diffs-line-bg, var(--diffs-bg));
  }

  [data-no-newline] {
    -webkit-user-select: none;
            user-select: none;

    span {
      opacity: 0.6;
    }
  }

  [data-diff-type='split'][data-overflow='scroll'] {
    display: grid;
    grid-template-columns: 1fr 1fr;

    [data-additions] {
      border-left: 1px solid var(--diffs-bg);
    }

    [data-deletions] {
      border-right: 1px solid var(--diffs-bg);
    }
  }

  [data-code] {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: var(--diffs-code-grid);
    overflow: scroll clip;
    overscroll-behavior-x: none;
    tab-size: var(--diffs-tab-size, 2);
    align-self: flex-start;
    padding-top: var(--diffs-gap-block, var(--diffs-gap-fallback));
    padding-bottom: max(
      0px,
      calc(var(--diffs-gap-block, var(--diffs-gap-fallback)) - 6px)
    );
  }

  [data-container-size] {
    container-type: inline-size;
  }

  [data-code]::-webkit-scrollbar {
    width: 0;
    height: 6px;
  }

  [data-code]::-webkit-scrollbar-track {
    background: transparent;
  }

  [data-code]::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: 1px solid transparent;
    background-clip: content-box;
    border-radius: 3px;
  }

  [data-code]::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  /*
   * If we apply these rules globally it will mean that webkit will opt into the
   * standards compliant version of custom css scrollbars, which we do not want
   * because the custom stuff will look better
  */
  @supports (-moz-appearance: none) {
    [data-code] {
      scrollbar-width: thin;
      scrollbar-color: var(--diffs-bg-context) transparent;
      padding-bottom: var(--diffs-gap-block, var(--diffs-gap-fallback));
    }
  }

  [data-diffs-header] ~ [data-diff],
  [data-diffs-header] ~ [data-file] {
    [data-code],
    &[data-overflow='wrap'] {
      padding-top: 0;
    }
  }

  [data-gutter] {
    display: grid;
    grid-template-rows: subgrid;
    grid-template-columns: subgrid;
    grid-column: 1;
    z-index: 3;
    position: relative;
    background-color: var(--diffs-bg);

    [data-gutter-buffer],
    [data-column-number] {
      border-right: var(--diffs-gap-style, 2px solid var(--diffs-bg));
    }
  }

  [data-content] {
    display: grid;
    grid-template-rows: subgrid;
    grid-template-columns: subgrid;
    grid-column: 2;
    min-width: 0;
  }

  [data-diff-type='split'][data-overflow='wrap'] {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, var(--diffs-code-grid));
    padding-block: var(--diffs-gap-block, var(--diffs-gap-fallback));

    [data-deletions] {
      display: contents;

      [data-gutter] {
        grid-column: 1;
      }

      [data-content] {
        grid-column: 2;
        border-right: 1px solid var(--diffs-bg);
      }
    }

    [data-additions] {
      display: contents;

      [data-gutter] {
        grid-column: 3;
        border-left: 1px solid var(--diffs-bg);
      }

      [data-content] {
        grid-column: 4;
      }
    }
  }

  [data-overflow='scroll'] [data-gutter] {
    position: sticky;
    left: 0;
  }

  [data-line-annotation][data-selected-line] {
    background-color: unset;

    &::before {
      content: '';
      /* FIXME(amadeus): This needs to be audited ... */
      position: sticky;
      top: 0;
      left: 0;
      display: block;
      border-right: var(--diffs-gap-style, 1px solid var(--diffs-bg));
      background-color: var(--diffs-bg-selection-number);
    }

    [data-annotation-content] {
      background-color: var(--diffs-bg-selection);
    }
  }

  [data-interactive-lines] [data-line] {
    cursor: pointer;
  }

  [data-content-buffer],
  [data-gutter-buffer] {
    position: relative;
    -webkit-user-select: none;
            user-select: none;
    min-height: 1lh;
  }

  [data-gutter-buffer='annotation'] {
    min-height: 0;
  }

  [data-gutter-buffer='buffer'] {
    background-size: 8px 8px;
    background-position: 0 0;
    background-origin: border-box;
    background-color: var(--diffs-bg);
    /* This is incredibley expensive... */
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent calc(3px * 1.414),
      rgb(from var(--diffs-bg-buffer) r g b / 0.8) calc(3px * 1.414),
      rgb(from var(--diffs-bg-buffer) r g b / 0.8) calc(4px * 1.414)
    );
  }

  [data-content-buffer] {
    grid-column: 1;
    /* We multiply by 1.414 (√2) to better approximate the diagonal repeat distance */
    background-size: 8px 8px;
    background-position: 5px 0;
    background-origin: border-box;
    background-color: var(--diffs-bg);
    /* This is incredibley expensive... */
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent calc(3px * 1.414),
      var(--diffs-bg-buffer) calc(3px * 1.414),
      var(--diffs-bg-buffer) calc(4px * 1.414)
    );
  }

  [data-separator] {
    box-sizing: content-box;
    background-color: var(--diffs-bg);
  }

  [data-separator='simple'] {
    min-height: 4px;
  }

  [data-separator='line-info'],
  [data-separator='line-info-basic'],
  [data-separator='metadata'],
  [data-separator='simple'] {
    background-color: var(--diffs-bg-separator);
  }

  [data-separator='line-info'],
  [data-separator='line-info-basic'],
  [data-separator='metadata'] {
    height: 32px;
    position: relative;
  }

  [data-separator-wrapper] {
    -webkit-user-select: none;
            user-select: none;
    fill: currentColor;
    position: absolute;
    inset-inline: 0;
    display: flex;
    align-items: center;
    background-color: var(--diffs-bg);
    height: 100%;
  }

  [data-content] [data-separator-wrapper] {
    display: none;
  }

  [data-separator='metadata'] [data-separator-wrapper] {
    inset-inline: 100% auto;
    padding-inline: 1ch;
    height: 100%;
    background-color: var(--diffs-bg-separator);
    color: var(--diffs-fg-number);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: min-content;
  }

  [data-separator='line-info'] {
    margin-block: var(--diffs-gap-block, var(--diffs-gap-fallback));
  }

  [data-separator='line-info-basic'],
  [data-separator='metadata'] {
    margin-block: 0;
  }

  [data-separator='line-info'][data-separator-first] {
    margin-top: 0;
  }

  [data-separator='line-info'][data-separator-last] {
    margin-bottom: 0;
  }

  [data-expand-index] [data-separator-wrapper] {
    display: grid;
    grid-template-columns: 32px auto;
  }

  [data-expand-index] [data-separator-wrapper][data-separator-multi-button] {
    grid-template-columns: 32px 32px auto;
  }

  [data-expand-button],
  [data-separator-content] {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    background-color: var(--diffs-bg-separator);
  }

  [data-expand-button] {
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    min-width: 32px;
    align-self: stretch;
    color: var(--diffs-fg-number);
    border-right: 2px solid var(--diffs-bg);

    &:hover {
      color: var(--diffs-fg);
    }
  }

  [data-expand-down] [data-icon] {
    transform: scaleY(-1);
  }

  [data-separator-content] {
    flex: 1 1 auto;
    padding: 0 1ch;
    height: 100%;
    color: var(--diffs-fg-number);

    overflow: hidden;
    justify-content: flex-start;
  }

  [data-separator='line-info'],
  [data-separator='line-info-basic'] {
    [data-separator-content] {
      height: 100%;
      -webkit-user-select: none;
              user-select: none;
      overflow: clip;
    }
  }

  @supports (width: 1cqi) {
    [data-unified] {
      [data-separator='line-info'] [data-separator-wrapper] {
        padding-inline: var(--diffs-gap-inline, var(--diffs-gap-fallback));
        width: 100cqi;

        [data-separator-content] {
          border-radius: 6px;
        }
      }

      [data-separator='line-info'][data-expand-index]
        [data-separator-wrapper]
        [data-separator-content] {
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
      }
    }

    [data-gutter] {
      [data-separator='line-info'] [data-separator-wrapper] {
        padding-left: var(--diffs-gap-inline, var(--diffs-gap-fallback));
      }

      [data-separator='line-info'] [data-separator-content] {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      [data-separator='line-info'][data-expand-index] [data-separator-content] {
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
      }
    }

    [data-additions] {
      [data-content] [data-separator='line-info'] {
        background-color: var(--diffs-bg);

        [data-separator-wrapper] {
          display: none;
        }
      }

      [data-gutter] [data-separator='line-info'] [data-separator-wrapper] {
        display: block;
        height: 100%;
        background-color: var(--diffs-bg-separator);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        [data-separator-content],
        [data-expand-button] {
          display: none;
        }
      }
    }

    [data-overflow='scroll']
      [data-additions]
      [data-gutter]
      [data-separator='line-info']
      [data-separator-wrapper] {
      width: calc(100cqi - var(--diffs-gap-inline, var(--diffs-gap-fallback)));
    }

    [data-overflow='wrap']
      [data-additions]
      [data-content]
      [data-separator='line-info']
      [data-separator-wrapper] {
      background-color: var(--diffs-bg-separator);
      display: block;
      height: 100%;
      margin-right: var(--diffs-gap-inline, var(--diffs-gap-fallback));
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;

      [data-separator-content],
      [data-expand-button] {
        display: none;
      }
    }

    [data-separator='line-info'] [data-separator-wrapper] {
      [data-expand-both],
      [data-expand-down],
      [data-expand-up] {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
    }

    @media (pointer: fine) {
      [data-separator='line-info'] [data-separator-wrapper] {
        &[data-separator-multi-button] {
          [data-expand-up] {
            border-top-left-radius: 6px;
            border-bottom-left-radius: unset;
          }

          [data-expand-down] {
            border-bottom-left-radius: 6px;
            border-top-left-radius: unset;
          }
        }
      }
    }
  }

  @media (pointer: coarse) {
    [data-separator='line-info-basic']
      [data-separator-wrapper][data-separator-multi-button] {
      grid-template-columns: 34px 34px auto;

      [data-separator-content] {
        grid-column: unset;
        grid-row: unset;
      }
    }

    @supports (width: 1cqi) {
      [data-separator='line-info'] [data-separator-wrapper] {
        [data-expand-both],
        [data-expand-down],
        [data-expand-up] {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        &[data-separator-multi-button] {
          [data-expand-up] {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
          }

          [data-expand-down] {
            border-bottom-left-radius: unset;
            border-top-left-radius: unset;
          }
        }
      }
    }
  }

  @media (pointer: fine) {
    [data-separator-wrapper][data-separator-multi-button] {
      display: grid;
      grid-template-rows: 50% 50%;

      [data-separator-content] {
        grid-column: 2;
        grid-row: 1 / -1;
        min-width: min-content;
      }

      [data-expand-button] {
        grid-column: 1;
      }
    }

    [data-separator='line-info'] [data-separator-wrapper],
    [data-separator='line-info']
      [data-separator-wrapper][data-separator-multi-button] {
      grid-template-columns: 34px auto;
    }

    [data-separator='line-info-basic'][data-expand-index]
      [data-separator-wrapper] {
      grid-template-columns: 100% auto;
    }

    [data-separator='line-info'],
    [data-separator='line-info-basic'] {
      [data-separator-multi-button] {
        [data-expand-up] {
          border-bottom: 1px solid var(--diffs-bg);
          border-right: 2px solid var(--diffs-bg);
        }
        [data-expand-down] {
          border-top: 1px solid var(--diffs-bg);
          border-right: 2px solid var(--diffs-bg);
        }
      }
    }
  }

  [data-additions] [data-gutter] [data-separator-wrapper],
  [data-additions] [data-separator='line-info-basic'] [data-separator-wrapper],
  [data-content] [data-separator-wrapper] {
    display: none;
  }

  [data-line-annotation],
  [data-gutter-buffer='annotation'] {
    --diffs-line-bg: var(--diffs-bg-context);
  }

  [data-merge-conflict-actions],
  [data-gutter-buffer='merge-conflict-action'] {
    --diffs-line-bg: var(--diffs-bg-context);
  }

  [data-has-merge-conflict] [data-line-annotation],
  [data-has-merge-conflict] [data-gutter-buffer='annotation'] {
    --diffs-line-bg: var(--diffs-bg);
  }

  [data-has-merge-conflict] [data-gutter-buffer='merge-conflict-action'] {
    --diffs-line-bg: var(--diffs-bg);
  }

  [data-line-annotation] {
    min-height: var(--diffs-annotation-min-height, 0);
    z-index: 2;
  }

  [data-merge-conflict-actions] {
    z-index: 2;
  }

  [data-separator='custom'] {
    display: grid;
    grid-template-columns: subgrid;
  }

  [data-line],
  [data-column-number],
  [data-no-newline] {
    position: relative;
    padding-inline: 1ch;
  }

  [data-indicators='classic'] [data-line] {
    padding-inline-start: 2ch;
  }

  [data-indicators='classic'] {
    [data-line-type='change-addition'],
    [data-line-type='change-deletion'] {
      &[data-no-newline],
      &[data-line] {
        &::before {
          display: inline-block;
          width: 1ch;
          height: 1lh;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-user-select: none;
                  user-select: none;
        }
      }
    }

    [data-line-type='change-addition'] {
      &[data-line],
      &[data-no-newline] {
        &::before {
          content: '+';
          color: var(--diffs-addition-base);
        }
      }
    }

    [data-line-type='change-deletion'] {
      &[data-line],
      &[data-no-newline] {
        &::before {
          content: '-';
          color: var(--diffs-deletion-base);
        }
      }
    }
  }

  [data-indicators='bars'] {
    [data-line-type='change-deletion'],
    [data-line-type='change-addition'] {
      &[data-column-number] {
        &::before {
          content: '';
          display: block;
          width: 4px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          -webkit-user-select: none;
                  user-select: none;
          contain: strict;
        }
      }
    }

    [data-line-type='change-deletion'] {
      &[data-column-number] {
        &::before {
          background-image: linear-gradient(
            0deg,
            var(--diffs-bg-deletion) 50%,
            var(--diffs-deletion-base) 50%
          );
          background-repeat: repeat;
          background-size: 2px 2px;
          background-size: calc(1lh / round(1lh / 2px))
            calc(1lh / round(1lh / 2px));
        }
      }
    }

    [data-line-type='change-addition'] {
      &[data-column-number] {
        &::before {
          background-color: var(--diffs-addition-base);
        }
      }
    }
  }

  [data-overflow='wrap'] {
    [data-line],
    [data-annotation-content] {
      white-space: pre-wrap;
      word-break: break-word;
    }
  }

  [data-overflow='scroll'] [data-line] {
    white-space: pre;
    min-height: 1lh;
  }

  [data-column-number] {
    box-sizing: content-box;
    text-align: right;
    -webkit-user-select: none;
            user-select: none;
    background-color: var(--diffs-bg);
    color: var(--diffs-fg-number);
    padding-left: 2ch;
  }

  [data-line-number-content] {
    display: inline-block;
    min-width: var(
      --diffs-min-number-column-width,
      var(--diffs-min-number-column-width-default, 3ch)
    );
  }

  [data-disable-line-numbers] {
    [data-column-number] {
      min-width: 4px;
      padding: 0;
    }

    [data-line-number-content] {
      display: none;
    }

    [data-gutter-utility-slot] {
      right: unset;
      left: 0;
      justify-content: flex-start;
    }

    &[data-indicators='bars'] [data-gutter-utility-slot] {
      /* Using 5px here because theres a 1px separator after the bar */
      left: 5px;
    }
  }

  [data-file][data-disable-line-numbers] {
    [data-gutter-buffer],
    [data-column-number] {
      min-width: 0;
      border-right: 0;
    }
  }

  [data-interactive-line-numbers] [data-column-number] {
    cursor: pointer;
  }

  [data-diff-span] {
    border-radius: 3px;
    -webkit-box-decoration-break: clone;
            box-decoration-break: clone;
  }

  [data-line-type='change-addition'] {
    &[data-column-number] {
      color: var(
        --diffs-fg-number-addition-override,
        var(--diffs-addition-base)
      );
    }

    [data-diff-span] {
      background-color: var(--diffs-bg-addition-emphasis);
    }
  }

  [data-line-type='change-deletion'] {
    &[data-column-number] {
      color: var(
        --diffs-fg-number-deletion-override,
        var(--diffs-deletion-base)
      );
    }

    [data-diff-span] {
      background-color: var(--diffs-bg-deletion-emphasis);
    }
  }

  [data-background] [data-line-type='change-addition'] {
    --diffs-line-bg: var(--diffs-bg-addition);

    &[data-column-number] {
      background-color: var(--diffs-bg-addition-number);
    }
  }

  [data-background] [data-line-type='change-deletion'] {
    --diffs-line-bg: var(--diffs-bg-deletion);

    &[data-column-number] {
      background-color: var(--diffs-bg-deletion-number);
    }
  }

  [data-merge-conflict='marker-start'],
  [data-merge-conflict='marker-base'],
  [data-merge-conflict='marker-separator'],
  [data-merge-conflict='marker-end'] {
    padding-left: 1ch;
    color: var(--diffs-fg);
  }

  [data-merge-conflict='marker-start'],
  [data-merge-conflict='marker-end'] {
    display: flex;
    align-items: center;

    &::after {
      color: var(--diffs-fg-conflict-marker);
      font-style: normal;
      font-size: 0.75rem;
      line-height: 1.25rem;
      padding-left: 1ch;
      font-family: var(
        --diffs-header-font-family,
        var(--diffs-header-font-fallback)
      );
    }
  }

  [data-merge-conflict='marker-start']::after {
    content: '(Current Change)';
  }

  [data-merge-conflict='marker-end']::after {
    content: '(Incoming Change)';
  }

  [data-merge-conflict='marker-base'],
  [data-merge-conflict='marker-end'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--diffs-bg-conflict-marker);
    }

    &[data-column-number] {
      background-color: var(--diffs-bg-conflict-marker-number);
      color: var(--diffs-fg-conflict-marker);

      [data-line-number-content] {
        color: var(--diffs-fg-conflict-marker);
      }
    }
  }

  [data-merge-conflict='current'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--conflict-bg-current);
    }

    &[data-column-number] {
      background-color: var(--conflict-bg-current-number);
      color: var(--diffs-addition-base);
    }
  }

  [data-gutter-buffer='merge-conflict-marker-start'],
  [data-merge-conflict='marker-start'] {
    background-color: var(--conflict-bg-current-header);
  }

  [data-gutter-buffer='merge-conflict-marker-end'],
  [data-merge-conflict='marker-end'] {
    background-color: var(--conflict-bg-incoming-header);
  }

  [data-merge-conflict='marker-separator'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--diffs-bg);
    }

    &[data-column-number] {
      background-color: var(--diffs-bg);
    }
  }

  [data-merge-conflict='base'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--diffs-bg-conflict-base);
    }

    &[data-column-number] {
      background-color: var(--diffs-bg-conflict-base-number);
      color: var(--diffs-modified-base);
    }
  }

  [data-merge-conflict='incoming'] {
    &[data-line],
    &[data-no-newline] {
      background-color: var(--conflict-bg-incoming);
    }

    &[data-column-number] {
      background-color: var(--conflict-bg-incoming-number);
      color: var(--diffs-modified-base);
    }
  }

  @media (pointer: fine) {
    [data-column-number],
    [data-line] {
      &[data-hovered] {
        background-color: var(--diffs-bg-hover);
      }
    }

    [data-background] {
      [data-column-number],
      [data-line] {
        &[data-hovered] {
          &[data-line-type='change-deletion'] {
            background-color: var(--diffs-bg-deletion-hover);
          }

          &[data-line-type='change-addition'] {
            background-color: var(--diffs-bg-addition-hover);
          }
        }
      }
    }
  }

  [data-diffs-header='default'] {
    position: relative;
    background-color: var(--diffs-bg);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    min-height: calc(
      1lh + (var(--diffs-gap-block, var(--diffs-gap-fallback)) * 3)
    );
    padding-inline: 16px;
    top: 0;
    z-index: 2;
  }

  [data-header-content] {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    min-width: 0;
    white-space: nowrap;
  }

  [data-header-content] [data-prev-name],
  [data-header-content] [data-title] {
    direction: rtl;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    white-space: nowrap;
  }

  [data-prev-name] {
    opacity: 0.7;
  }

  [data-rename-icon] {
    fill: currentColor;
    flex-shrink: 0;
    flex-grow: 0;
  }

  [data-diffs-header='default'] [data-metadata] {
    display: flex;
    align-items: center;
    gap: 1ch;
    white-space: nowrap;
  }

  [data-diffs-header='default'] [data-additions-count] {
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    color: var(--diffs-addition-base);
  }

  [data-diffs-header='default'] [data-deletions-count] {
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    color: var(--diffs-deletion-base);
  }

  [data-annotation-content] {
    position: relative;
    display: flow-root;
    align-self: flex-start;
    z-index: 2;
    min-width: 0;
    isolation: isolate;
  }

  [data-merge-conflict-actions-content] {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding-inline: 0.5rem;
    min-height: 1.75rem;
    font-family: var(
      --diffs-header-font-family,
      var(--diffs-header-font-fallback)
    );
    font-size: 0.75rem;
    line-height: 1.2;
    color: var(--diffs-fg);
  }

  [data-merge-conflict-action] {
    appearance: none;
    border: 0;
    background: transparent;
    color: var(--diffs-fg-number);
    font: inherit;
    font-style: normal;
    cursor: pointer;
    padding: 0;
  }

  [data-merge-conflict-action]:hover {
    color: var(--diffs-fg);
  }

  [data-merge-conflict-action='current']:hover {
    color: var(--diffs-addition-base);
  }

  [data-merge-conflict-action='incoming']:hover {
    color: var(--diffs-modified-base);
  }

  [data-merge-conflict-action-separator] {
    color: var(--diffs-fg-number);
    opacity: 0.6;
    -webkit-user-select: none;
            user-select: none;
  }

  /* Sticky positioning has a composite costs, so we should _only_ pay it if we
   * need to */
  [data-overflow='scroll'] [data-annotation-content] {
    position: sticky;
    width: var(--diffs-column-content-width, auto);
    left: var(--diffs-column-number-width, 0);
  }

  [data-overflow='scroll'] [data-merge-conflict-actions-content] {
    position: sticky;
    width: var(--diffs-column-content-width, auto);
    left: var(--diffs-column-number-width, 0);
  }

  /* Undo some of the stuff that the 'pre' tag does */
  [data-annotation-slot] {
    text-wrap-mode: wrap;
    word-break: normal;
    white-space-collapse: collapse;
  }

  [data-change-icon] {
    fill: currentColor;
    flex-shrink: 0;
  }

  [data-change-icon='change'],
  [data-change-icon='rename-pure'],
  [data-change-icon='rename-changed'] {
    color: var(--diffs-modified-base);
  }

  [data-change-icon='new'] {
    color: var(--diffs-addition-base);
  }

  [data-change-icon='deleted'] {
    color: var(--diffs-deletion-base);
  }

  [data-change-icon='file'] {
    opacity: 0.6;
  }

  /* Line selection highlighting */
  [data-selected-line] {
    &[data-gutter-buffer='annotation'],
    &[data-column-number] {
      color: var(--diffs-selection-number-fg);
      background-color: var(--diffs-bg-selection-number);
    }

    &[data-line] {
      background-color: var(--diffs-bg-selection);
    }
  }

  [data-line-type='change-addition'],
  [data-line-type='change-deletion'] {
    &[data-selected-line] {
      &[data-line],
      &[data-line][data-hovered] {
        background-color: light-dark(
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 82%,
            var(--diffs-selection-base)
          ),
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 75%,
            var(--diffs-selection-base)
          )
        );
      }

      &[data-column-number],
      &[data-column-number][data-hovered] {
        color: var(--diffs-selection-number-fg);
        background-color: light-dark(
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 75%,
            var(--diffs-selection-base)
          ),
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 60%,
            var(--diffs-selection-base)
          )
        );
      }
    }
  }

  [data-gutter-utility-slot] {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
  }

  [data-unmodified-lines] {
    display: block;
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 0 1 auto;
  }

  [data-error-wrapper] {
    overflow: auto;
    padding: var(--diffs-gap-block, var(--diffs-gap-fallback))
      var(--diffs-gap-inline, var(--diffs-gap-fallback));
    max-height: 400px;
    scrollbar-width: none;

    [data-error-message] {
      font-weight: bold;
      font-size: 18px;
      color: var(--diffs-deletion-base);
    }

    [data-error-stack] {
      color: var(--diffs-fg-number);
    }
  }

  [data-placeholder] {
    contain: strict;
  }

  [data-utility-button] {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    appearance: none;
    width: 1lh;
    height: 1lh;
    margin-right: calc((1lh - 1ch) * -1);
    padding: 0;
    cursor: pointer;
    font-size: var(--diffs-font-size, 13px);
    line-height: var(--diffs-line-height, 20px);
    border-radius: 4px;
    background-color: var(--diffs-modified-base);
    color: var(--diffs-bg);
    fill: currentColor;
    position: relative;
    z-index: 4;
  }
}
`;const it="@layer base, theme, rendered, unsafe;";function tr(e){return`${it}
@layer unsafe {
  ${e}
}`}function ir(e,n="system"){return`${it}
@layer rendered {
  :host {${n==="system"?"":`
  color-scheme: ${n};`}
  ${e}
  }
}`}function Ke({code:e,pre:n,columnType:t,rowSpan:i,containerSize:r=!1}={}){return e==null&&(e=document.createElement("code"),e.setAttribute("data-code",""),t!=null&&e.setAttribute(`data-${t}`,""),n?.appendChild(e)),i!=null?e.style.setProperty("grid-row",`span ${i}`):e.style.removeProperty("grid-row"),r?e.setAttribute("data-container-size",""):e.removeAttribute("data-container-size"),e}function rr({shadowRoot:e,currentNode:n,themeCSS:t}){if(t.trim()===""){n?.remove();return}return n??=or(),n.textContent=t,n.parentNode!==e&&e.appendChild(n),n}function or(){const e=document.createElement("style");return e.setAttribute(qn,""),e}function sr(e,n){if(n==null)return;const t=e.shadowRoot??e.attachShadow({mode:"open"});t.innerHTML===""&&(t.innerHTML=n)}function ar(e,{type:n,diffIndicators:t,disableBackground:i,disableLineNumbers:r,overflow:o,split:a,totalLines:l,customProperties:s}){if(s!=null)for(const d in s){const f=s[d];f!=null&&e.setAttribute(d,`${f}`)}switch(n==="diff"?(e.setAttribute("data-diff",""),e.removeAttribute("data-file")):(e.setAttribute("data-file",""),e.removeAttribute("data-diff")),t){case"bars":case"classic":e.setAttribute("data-indicators",t);break;case"none":e.removeAttribute("data-indicators");break}return r?e.setAttribute("data-disable-line-numbers",""):e.removeAttribute("data-disable-line-numbers"),i?e.removeAttribute("data-background"):e.setAttribute("data-background",""),n==="diff"?e.setAttribute("data-diff-type",a?"split":"single"):e.removeAttribute("data-diff-type"),e.setAttribute("data-overflow",o),e.tabIndex=0,e.style.setProperty("--diffs-min-number-column-width-default",`${`${l}`.length}ch`),e}if(typeof HTMLElement<"u"&&customElements.get(ve)==null){let e;class n extends HTMLElement{constructor(){if(super(),this.shadowRoot!=null)return;const i=this.attachShadow({mode:"open"});e==null&&(e=new CSSStyleSheet,e.replaceSync(nr)),i.adoptedStyleSheets=[e]}}customElements.define(ve,n)}const lr=!0;function Dn(e,n,t){if(e===n||e==null||n==null)return e===n;const i=new Set(t),r=Object.keys(e),o=new Set(Object.keys(n));for(const a of r)if(o.delete(a),!i.has(a)&&(!(a in n)||e[a]!==n[a]))return!1;for(const a of Array.from(o))if(!i.has(a))return!1;return!0}function dr(e,n){const t=e?.theme??J,i=n?.theme??J,r=Nn(e),o=Nn(n);return et(t,i)&&Dn(e,n,["theme","parseDiffOptions"])&&Dn(r,o)}function Nn(e){if(e!=null&&"parseDiffOptions"in e)return e.parseDiffOptions}function fr({hunkIndex:e,lineIndex:n,conflictIndex:t}){return`merge-conflict-action-${e}-${n}-${t}`}function cr(e,n){const t=n.hunks[e.hunkIndex];if(t!=null)return{hunkIndex:e.hunkIndex,lineIndex:ur(t,e.startContentIndex)}}function ur(e,n){let t=e.unifiedLineStart;for(let i=0;i<n;i++){const r=e.hunkContent[i];t+=r.type==="context"?r.lines:r.deletions+r.additions}return t}function rt({fileDiff:e,actions:n,renderCustomHeader:t,renderHeaderPrefix:i,renderHeaderMetadata:r,renderAnnotation:o,renderGutterUtility:a,renderHoverUtility:l,renderMergeConflictUtility:s,lineAnnotations:d,getHoveredLine:f,getInstance:c}){const h=a??l,u=t?.(e),p=i?.(e),v=r?.(e);return T.jsxs(T.Fragment,{children:[u!=null?T.jsx("div",{slot:ln,children:u}):T.jsxs(T.Fragment,{children:[p!=null&&T.jsx("div",{slot:sn,children:p}),v!=null&&T.jsx("div",{slot:an,children:v})]}),o!=null&&d?.map((k,S)=>T.jsx("div",{slot:ye(k),children:o(k)},S)),n!=null&&s!=null&&c!=null&&n.map(k=>{if(k==null)return;const S=hr(k,e);return T.jsx("div",{slot:S,style:ht,children:s(k,c)},S)}),h!=null&&T.jsx("div",{slot:"gutter-utility-slot",style:ut,children:h(f)})]})}function hr(e,n){const t=cr(e,n);return t!=null?fr({hunkIndex:t.hunkIndex,lineIndex:t.lineIndex,conflictIndex:e.conflictIndex}):void 0}var pr=class{isDeletionsScrolling=!1;isAdditionsScrolling=!1;timeoutId=-1;codeDeletions;codeAdditions;enabled=!1;cleanUp(){this.enabled&&(this.codeDeletions?.removeEventListener("scroll",this.handleDeletionsScroll),this.codeAdditions?.removeEventListener("scroll",this.handleAdditionsScroll),clearTimeout(this.timeoutId),this.codeDeletions=void 0,this.codeAdditions=void 0,this.enabled=!1)}setup(e,n,t){if(n==null||t==null)for(const i of e.children??[])i instanceof HTMLElement&&("deletions"in i.dataset?n=i:"additions"in i.dataset&&(t=i));if(t==null||n==null){this.cleanUp();return}this.codeDeletions!==n&&(this.codeDeletions?.removeEventListener("scroll",this.handleDeletionsScroll),this.codeDeletions=n,n.addEventListener("scroll",this.handleDeletionsScroll,{passive:!0})),this.codeAdditions!==t&&(this.codeAdditions?.removeEventListener("scroll",this.handleAdditionsScroll),this.codeAdditions=t,t.addEventListener("scroll",this.handleAdditionsScroll,{passive:!0})),this.enabled=!0}handleDeletionsScroll=()=>{this.isAdditionsScrolling||(this.isDeletionsScrolling=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.isDeletionsScrolling=!1},300),this.codeAdditions?.scrollTo({left:this.codeDeletions?.scrollLeft}))};handleAdditionsScroll=()=>{this.isDeletionsScrolling||(this.isAdditionsScrolling=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.isAdditionsScrolling=!1},300),this.codeDeletions?.scrollTo({left:this.codeAdditions?.scrollLeft}))}};function Ee(e){return A({tagName:"div",properties:{"data-content-buffer":"","data-buffer-size":e,style:`grid-row: span ${e};min-height:calc(${e} * 1lh)`}})}function Te(e){return A({tagName:"div",children:[A({tagName:"span",children:[te("No newline at end of file")]})],properties:{"data-no-newline":"","data-line-type":e,"data-column-content":""}})}function Xe(e){return A({tagName:"div",children:[Pe({name:e==="both"?"diffs-icon-expand-all":"diffs-icon-expand",properties:{"data-icon":""}})],properties:{"data-expand-button":"","data-expand-both":e==="both"?"":void 0,"data-expand-up":e==="up"?"":void 0,"data-expand-down":e==="down"?"":void 0}})}function fe({type:e,content:n,expandIndex:t,chunked:i=!1,slotName:r,isFirstHunk:o,isLastHunk:a}){const l=[];if(e==="metadata"&&n!=null&&l.push(A({tagName:"div",children:[te(n)],properties:{"data-separator-wrapper":""}})),(e==="line-info"||e==="line-info-basic")&&n!=null){const s=[];t!=null&&(i?(o||s.push(Xe("up")),a||s.push(Xe("down"))):s.push(Xe(!o&&!a?"both":o?"down":"up"))),s.push(A({tagName:"div",children:[A({tagName:"span",children:[te(n)],properties:{"data-unmodified-lines":""}})],properties:{"data-separator-content":""}})),l.push(A({tagName:"div",children:s,properties:{"data-separator-wrapper":"","data-separator-multi-button":s.length>2?"":void 0}}))}return e==="custom"&&r!=null&&l.push(A({tagName:"slot",properties:{name:r}})),A({tagName:"div",children:l,properties:{"data-separator":l.length===0?"simple":e,"data-expand-index":t,"data-separator-first":o?"":void 0,"data-separator-last":a?"":void 0}})}function mr(e,n){return`hunk-separator-${e}-${n}`}function gr(e){const n=e.at(-1);return n==null?0:Math.max(n.additionStart+n.additionCount,n.deletionStart+n.deletionCount)}function br(e){return e.startingLine===0&&e.totalLines===1/0&&e.bufferBefore===0&&e.bufferAfter===0}let vr=-1;var yr=class{__id=`diff-hunks-renderer:${++vr}`;highlighter;diff;expandedHunks=new Map;deletionAnnotations={};additionAnnotations={};computedLang="text";renderCache;constructor(e={theme:J},n,t){this.options=e,this.onRenderUpdate=n,this.workerManager=t,t?.isWorkingPool()!==!0&&(this.highlighter=Ve(e.theme??J)?Yt():void 0)}cleanUp(){this.highlighter=void 0,this.diff=void 0,this.renderCache=void 0,this.workerManager?.cleanUpPendingTasks(this),this.workerManager=void 0,this.onRenderUpdate=void 0}recycle(){this.highlighter=void 0,this.diff=void 0,this.renderCache=void 0,this.workerManager?.cleanUpPendingTasks(this)}setOptions(e){this.options=e}mergeOptions(e){this.options={...this.options,...e}}expandHunk(e,n,t=this.getOptionsWithDefaults().expansionLineCount){const i={...this.expandedHunks.get(e)??{fromStart:0,fromEnd:0}};(n==="up"||n==="both")&&(i.fromStart+=t),(n==="down"||n==="both")&&(i.fromEnd+=t),this.renderCache?.highlighted!==!0&&(this.renderCache=void 0),this.expandedHunks.set(e,i)}getExpandedHunk(e){return this.expandedHunks.get(e)??St}getExpandedHunksMap(){return this.expandedHunks}setLineAnnotations(e){this.additionAnnotations={},this.deletionAnnotations={};for(const n of e){const t=(()=>{switch(n.side){case"deletions":return this.deletionAnnotations;case"additions":return this.additionAnnotations}})(),i=t[n.lineNumber]??[];t[n.lineNumber]=i,i.push(n)}}getUnifiedLineDecoration({lineType:e}){return{gutterLineType:e}}getSplitLineDecoration({side:e,type:n}){return n!=="change"?{gutterLineType:n}:{gutterLineType:e==="deletions"?"change-deletion":"change-addition"}}createAnnotationElement(e){return Fi(e)}getOptionsWithDefaults(){const{diffIndicators:e="bars",diffStyle:n="split",disableBackground:t=!1,disableFileHeader:i=!1,disableLineNumbers:r=!1,disableVirtualizationBuffers:o=!1,collapsed:a=!1,expandUnchanged:l=!1,collapsedContextThreshold:s=ce,expansionLineCount:d=100,hunkSeparators:f="line-info",lineDiffType:c="word-alt",maxLineDiffLength:h=1e3,overflow:u="scroll",theme:p=J,headerRenderMode:v="default",tokenizeMaxLineLength:k=1e3,useTokenTransformer:S=!1,useCSSClasses:m=!1}=this.options;return{diffIndicators:e,diffStyle:n,disableBackground:t,disableFileHeader:i,disableLineNumbers:r,disableVirtualizationBuffers:o,collapsed:a,expandUnchanged:l,collapsedContextThreshold:s,expansionLineCount:d,hunkSeparators:f,lineDiffType:c,maxLineDiffLength:h,overflow:u,theme:this.workerManager?.getDiffRenderOptions().theme??p,headerRenderMode:v,tokenizeMaxLineLength:k,useTokenTransformer:S,useCSSClasses:m}}async initializeHighlighter(){return this.highlighter=await Xt(Vi(this.computedLang,this.options)),this.highlighter}hydrate(e){if(e==null)return;this.diff=e;const{options:n}=this.getRenderOptions(e);let t=this.workerManager?.getDiffResultCache(e);t!=null&&!Ge(n,t.options)&&(t=void 0),this.renderCache??={diff:e,highlighted:!li(e),options:n,result:t?.result,renderRange:void 0},this.workerManager?.isWorkingPool()===!0&&this.renderCache.result==null&&this.workerManager.highlightDiffAST(this,this.diff)}getRenderOptions(e){const n=(()=>{if(this.workerManager?.isWorkingPool()===!0)return this.workerManager.getDiffRenderOptions();const{theme:i,tokenizeMaxLineLength:r,lineDiffType:o,maxLineDiffLength:a}=this.getOptionsWithDefaults();return{theme:i,useTokenTransformer:Ki(this.options),tokenizeMaxLineLength:r,lineDiffType:o,maxLineDiffLength:a}})();this.getOptionsWithDefaults();const{renderCache:t}=this;return t?.result==null?{options:n,forceRender:!0}:e!==t.diff||!Ge(n,t.options)?{options:n,forceRender:!0}:{options:n,forceRender:!1}}renderDiff(e=this.renderCache?.diff,n=mn){if(e==null)return;const{expandUnchanged:t=!1,collapsedContextThreshold:i}=this.getOptionsWithDefaults(),r=this.workerManager?.getDiffResultCache(e);r!=null&&this.renderCache==null&&(this.renderCache={diff:e,highlighted:!0,renderRange:void 0,...r});const{options:o,forceRender:a}=this.getRenderOptions(e);if(this.renderCache??={diff:e,highlighted:!1,options:o,result:void 0,renderRange:void 0},this.workerManager?.isWorkingPool()===!0)(this.renderCache.result==null||!this.renderCache.highlighted&&(e!==this.renderCache.diff||!tt(this.renderCache.renderRange,n)))&&(this.renderCache.diff=e,this.renderCache.result=this.workerManager.getPlainDiffAST(e,n.startingLine,n.totalLines,br(n)||t?!0:this.expandedHunks,i),this.renderCache.renderRange=n),n.totalLines>0&&(!this.renderCache.highlighted||a)&&this.workerManager.highlightDiffAST(this,e);else{this.computedLang=e.lang??ue(e.name);const l=this.highlighter!=null&&Ve(o.theme),s=this.highlighter!=null&&Pn(this.computedLang);if(this.highlighter!=null&&l&&(a||!this.renderCache.highlighted&&s||this.renderCache.result==null)){const{result:d,options:f}=this.renderDiffWithHighlighter(e,this.highlighter,!s);this.renderCache={diff:e,options:f,highlighted:s,result:d,renderRange:void 0}}(!l||!s)&&this.asyncHighlight(e).then(({result:d,options:f})=>{this.onHighlightSuccess(e,d,f)})}return this.renderCache.result!=null?this.processDiffResult(this.renderCache.diff,n,this.renderCache.result):void 0}async asyncRender(e,n=mn){const{result:t}=await this.asyncHighlight(e);return this.processDiffResult(e,n,t)}createPreElement(e,n,t){const{diffIndicators:i,disableBackground:r,disableLineNumbers:o,overflow:a}=this.getOptionsWithDefaults();return Gi({type:"diff",diffIndicators:i,disableBackground:r,disableLineNumbers:o,overflow:a,split:e,totalLines:n,customProperties:t})}async asyncHighlight(e){this.computedLang=e.lang??ue(e.name);const n=this.highlighter!=null&&Ve(this.options.theme??J),t=this.highlighter!=null&&Pn(this.computedLang);return(this.highlighter==null||!n||!t)&&(this.highlighter=await this.initializeHighlighter()),this.renderDiffWithHighlighter(e,this.highlighter)}renderDiffWithHighlighter(e,n,t=!1){const{options:i}=this.getRenderOptions(e),{collapsedContextThreshold:r}=this.getOptionsWithDefaults();return{result:Li(e,n,i,{forcePlainText:t,expandedHunks:t?!0:void 0,collapsedContextThreshold:r}),options:i}}onHighlightSuccess(e,n,t){if(this.renderCache==null)return;const i=!this.renderCache.highlighted||!Ge(this.renderCache.options,t)||this.renderCache.diff!==e;this.renderCache={diff:e,options:t,highlighted:!0,result:n,renderRange:void 0},i&&this.onRenderUpdate?.()}onHighlightError(e){console.error(e)}processDiffResult(e,n,{code:t,themeStyles:i,baseThemeType:r}){const{diffStyle:o,disableFileHeader:a,expandUnchanged:l,expansionLineCount:s,collapsedContextThreshold:d,hunkSeparators:f}=this.getOptionsWithDefaults();this.diff=e;const c=o==="unified";let h=[],u=[],p=[];const v=[],{additionLines:k,deletionLines:S}=t,m={rowCount:0,hunkSeparators:f,additionsContentAST:h,deletionsContentAST:u,unifiedContentAST:p,unifiedGutterAST:Ce(),deletionsGutterAST:Ce(),additionsGutterAST:Ce(),expansionLineCount:s,hunkData:v,incrementRowCount(R=1){m.rowCount+=R},pushToGutter(R,_){switch(R){case"unified":m.unifiedGutterAST.children.push(_);break;case"deletions":m.deletionsGutterAST.children.push(_);break;case"additions":m.additionsGutterAST.children.push(_);break}}},b=xr(e),y={size:0,side:void 0,increment(){this.size+=1},flush(){if(o!=="unified"){if(this.size<=0||this.side==null){this.side=void 0,this.size=0;return}this.side==="additions"?(m.pushToGutter("additions",G(void 0,"buffer",this.size)),h?.push(Ee(this.size))):(m.pushToGutter("deletions",G(void 0,"buffer",this.size)),u?.push(Ee(this.size))),this.size=0,this.side=void 0}}},C=(R,_,ae,ie,H)=>{m.pushToGutter(R,Zt(_,ae,ie,H))};function g(R){y.flush(),o==="unified"?Ye("unified",R,m):(Ye("deletions",R,m),Ye("additions",R,m))}He({diff:e,diffStyle:o,startingLine:n.startingLine,totalLines:n.totalLines,expandedHunks:l?!0:this.expandedHunks,collapsedContextThreshold:d,callback:({hunkIndex:R,hunk:_,collapsedBefore:ae,collapsedAfter:ie,additionLine:H,deletionLine:N,type:U})=>{const re=N!=null?N.splitLineIndex:H.splitLineIndex,le=H!=null?H.unifiedLineIndex:N.unifiedLineIndex;o==="split"&&U!=="change"&&y.flush(),ae>0&&g({hunkIndex:R,collapsedLines:ae,rangeSize:Math.max(_?.collapsedBefore??0,0),hunkSpecs:_?.hunkSpecs,isFirstHunk:R===0,isLastHunk:!1,isExpandable:!e.isPartial});const pe=o==="unified"?le:re,ke={type:U,hunkIndex:R,lineIndex:pe,unifiedLineIndex:le,splitLineIndex:re,deletionLine:N,additionLine:H};if(o==="unified"){const D=this.getUnifiedInjectedRowsForLine?.(ke);D?.before!=null&&On(D.before,m);let $=N!=null?S[N.lineIndex]:void 0,B=H!=null?k[H.lineIndex]:void 0;if($==null&&B==null){const j="DiffHunksRenderer.processDiffResult: deletionLine and additionLine are null, something is wrong";throw console.error(j,{file:e.name}),new Error(j)}const ee=U==="change"?H!=null?"change-addition":"change-deletion":U,W=this.getUnifiedLineDecoration({type:U,lineType:ee,additionLineIndex:H?.lineIndex,deletionLineIndex:N?.lineIndex});C("unified",W.gutterLineType,H!=null?H.lineNumber:N.lineNumber,`${le},${re}`,W.gutterProperties),B!=null?B=Ae(B,W.contentProperties):$!=null&&($=Ae($,W.contentProperties)),Fn({diffStyle:"unified",type:U,deletionLine:$,additionLine:B,unifiedSpan:this.getAnnotations("unified",N?.lineNumber,H?.lineNumber,R,pe),createAnnotationElement:j=>this.createAnnotationElement(j),context:m}),D?.after!=null&&On(D.after,m)}else{const D=this.getSplitInjectedRowsForLine?.(ke);D?.before!=null&&zn(D.before,m,y);let $=N!=null?S[N.lineIndex]:void 0,B=H!=null?k[H.lineIndex]:void 0;const ee=this.getSplitLineDecoration({side:"deletions",type:U,lineIndex:N?.lineIndex}),W=this.getSplitLineDecoration({side:"additions",type:U,lineIndex:H?.lineIndex});if($==null&&B==null){const V="DiffHunksRenderer.processDiffResult: deletionLine and additionLine are null, something is wrong";throw console.error(V,{file:e.name}),new Error(V)}const j=(()=>{if(U==="change"){if(B==null)return"additions";if($==null)return"deletions"}})();if(j!=null){if(y.side!=null&&y.side!==j)throw new Error("DiffHunksRenderer.processDiffResult: iterateOverDiff, invalid pending splits");y.side=j,y.increment()}const me=this.getAnnotations("split",N?.lineNumber,H?.lineNumber,R,pe);if(me!=null&&y.size>0&&y.flush(),N!=null){const V=Ae($,ee.contentProperties);C("deletions",ee.gutterLineType,N.lineNumber,`${N.unifiedLineIndex},${re}`,ee.gutterProperties),V!=null&&($=V)}if(H!=null){const V=Ae(B,W.contentProperties);C("additions",W.gutterLineType,H.lineNumber,`${H.unifiedLineIndex},${re}`,W.gutterProperties),V!=null&&(B=V)}Fn({diffStyle:"split",type:U,additionLine:B,deletionLine:$,...me,createAnnotationElement:V=>this.createAnnotationElement(V),context:m}),D?.after!=null&&zn(D.after,m,y)}const oe=N?.noEOFCR??!1,Z=H?.noEOFCR??!1;if(Z||oe){if(oe){const D=U==="context"||U==="context-expanded"?U:"change-deletion";o==="unified"?(m.unifiedContentAST.push(Te(D)),m.pushToGutter("unified",G(D,"metadata",1))):(m.deletionsContentAST.push(Te(D)),m.pushToGutter("deletions",G(D,"metadata",1)),Z||(m.pushToGutter("additions",G(void 0,"buffer",1)),m.additionsContentAST.push(Ee(1))))}if(Z){const D=U==="context"||U==="context-expanded"?U:"change-addition";o==="unified"?(m.unifiedContentAST.push(Te(D)),m.pushToGutter("unified",G(D,"metadata",1))):(m.additionsContentAST.push(Te(D)),m.pushToGutter("additions",G(D,"metadata",1)),oe||(m.pushToGutter("deletions",G(void 0,"buffer",1)),m.deletionsContentAST.push(Ee(1))))}m.incrementRowCount(1)}ie>0&&f!=="simple"&&g({hunkIndex:U==="context-expanded"?R:R+1,collapsedLines:ie,rangeSize:b,hunkSpecs:void 0,isFirstHunk:!1,isLastHunk:!0,isExpandable:!e.isPartial}),m.incrementRowCount(1)}}),o==="split"&&y.flush();const x=Math.max(gr(e.hunks),e.additionLines.length??0,e.deletionLines.length??0),w=n.bufferBefore>0||n.bufferAfter>0,L=!c&&e.type!=="deleted",E=!c&&e.type!=="new",I=m.rowCount>0||w;h=L&&I?h:void 0,u=E&&I?u:void 0,p=c&&I?p:void 0;const M=this.createPreElement(u!=null&&h!=null,x);return{unifiedGutterAST:c&&I?m.unifiedGutterAST.children:void 0,unifiedContentAST:p,deletionsGutterAST:E&&I?m.deletionsGutterAST.children:void 0,deletionsContentAST:u,additionsGutterAST:L&&I?m.additionsGutterAST.children:void 0,additionsContentAST:h,hunkData:v,preNode:M,themeStyles:i,baseThemeType:r,headerElement:a?void 0:this.renderHeader(this.diff),totalLines:x,rowCount:m.rowCount,bufferBefore:n.bufferBefore,bufferAfter:n.bufferAfter,css:""}}renderCodeAST(e,n){const t=e==="unified"?n.unifiedGutterAST:e==="deletions"?n.deletionsGutterAST:n.additionsGutterAST,i=e==="unified"?n.unifiedContentAST:e==="deletions"?n.deletionsContentAST:n.additionsContentAST;if(t==null||i==null)return;const r=Ce(t);return r.properties.style=`grid-row: span ${n.rowCount}`,[r,_i(i,n.rowCount)]}renderFullAST(e,n=[]){const t=this.getOptionsWithDefaults().hunkSeparators==="line-info",i=this.renderCodeAST("unified",e);if(i!=null)return n.push(A({tagName:"code",children:i,properties:{"data-code":"","data-container-size":t?"":void 0,"data-unified":""}})),{...e.preNode,children:n};const r=this.renderCodeAST("deletions",e);r!=null&&n.push(A({tagName:"code",children:r,properties:{"data-code":"","data-container-size":t?"":void 0,"data-deletions":""}}));const o=this.renderCodeAST("additions",e);return o!=null&&n.push(A({tagName:"code",children:o,properties:{"data-code":"","data-container-size":t?"":void 0,"data-additions":""}})),{...e.preNode,children:n}}renderFullHTML(e,n=[]){return be(this.renderFullAST(e,n))}renderPartialHTML(e,n){return n==null?be(e):be(A({tagName:"code",children:e,properties:{"data-code":"","data-container-size":this.getOptionsWithDefaults().hunkSeparators==="line-info"?"":void 0,[`data-${n}`]:""}}))}getAnnotations(e,n,t,i,r){const o={type:"annotation",hunkIndex:i,lineIndex:r,annotations:[]};if(n!=null)for(const l of this.deletionAnnotations[n]??[])o.annotations.push(ye(l));const a={type:"annotation",hunkIndex:i,lineIndex:r,annotations:[]};if(t!=null)for(const l of this.additionAnnotations[t]??[])(e==="unified"?o:a).annotations.push(ye(l));if(e==="unified")return o.annotations.length>0?o:void 0;if(!(a.annotations.length===0&&o.annotations.length===0))return{deletionSpan:o,additionSpan:a}}renderHeader(e){const{headerRenderMode:n}=this.getOptionsWithDefaults();return Bi({fileOrDiff:e,mode:n})}};function Un(e){return`${e} unmodified line${e>1?"s":""}`}function On(e,n){for(const t of e)n.unifiedContentAST.push(t.content),n.pushToGutter("unified",t.gutter),n.incrementRowCount(1)}function zn(e,n,t){for(const{deletion:i,addition:r}of e){if(i==null&&r==null)continue;const o=i!=null&&r!=null?void 0:i==null?"deletions":"additions";(o==null||t.side!==o)&&t.flush(),i!=null&&(n.deletionsContentAST.push(i.content),n.pushToGutter("deletions",i.gutter)),r!=null&&(n.additionsContentAST.push(r.content),n.pushToGutter("additions",r.gutter)),o!=null&&(t.side=o,t.increment()),n.incrementRowCount(1)}}function Fn({diffStyle:e,type:n,deletionLine:t,additionLine:i,unifiedSpan:r,deletionSpan:o,additionSpan:a,createAnnotationElement:l,context:s}){let d=!1;if(e==="unified"){if(i!=null?s.unifiedContentAST.push(i):t!=null&&s.unifiedContentAST.push(t),r!=null){const f=n==="change"?t!=null?"change-deletion":"change-addition":n;s.unifiedContentAST.push(l(r)),s.pushToGutter("unified",G(f,"annotation",1)),d=!0}}else if(e==="split"){if(t!=null&&s.deletionsContentAST.push(t),i!=null&&s.additionsContentAST.push(i),o!=null){const f=n==="change"?t!=null?"change-deletion":"context":n;s.deletionsContentAST.push(l(o)),s.pushToGutter("deletions",G(f,"annotation",1)),d=!0}if(a!=null){const f=n==="change"?i!=null?"change-addition":"context":n;s.additionsContentAST.push(l(a)),s.pushToGutter("additions",G(f,"annotation",1)),d=!0}}d&&s.incrementRowCount(1)}function Ye(e,{hunkIndex:n,collapsedLines:t,rangeSize:i,hunkSpecs:r,isFirstHunk:o,isLastHunk:a,isExpandable:l},s){if(t<=0)return;const d=e==="unified"?s.unifiedContentAST:e==="deletions"?s.deletionsContentAST:s.additionsContentAST;if(s.hunkSeparators==="metadata"){r!=null&&(s.pushToGutter(e,fe({type:"metadata",content:r,isFirstHunk:o,isLastHunk:a})),d.push(fe({type:"metadata",content:r,isFirstHunk:o,isLastHunk:a})),e!=="additions"&&s.incrementRowCount(1));return}if(s.hunkSeparators==="simple"){n>0&&(s.pushToGutter(e,fe({type:"simple",isFirstHunk:o,isLastHunk:!1})),d.push(fe({type:"simple",isFirstHunk:o,isLastHunk:!1})),e!=="additions"&&s.incrementRowCount(1));return}const f=mr(e,n),c=i>s.expansionLineCount,h=l?n:void 0;s.pushToGutter(e,fe({type:s.hunkSeparators,content:Un(t),expandIndex:h,chunked:c,slotName:f,isFirstHunk:o,isLastHunk:a})),d.push(fe({type:s.hunkSeparators,content:Un(t),expandIndex:h,chunked:c,slotName:f,isFirstHunk:o,isLastHunk:a})),e!=="additions"&&s.incrementRowCount(1),s.hunkData.push({slotName:f,hunkIndex:n,lines:t,type:e,expandable:l?{up:!o,down:!a,chunked:c}:void 0})}function Ae(e,n){return e==null||e.type!=="element"||n==null?e:{...e,properties:{...e.properties,...n}}}function xr(e){const n=e.hunks.at(-1);if(n==null||e.isPartial||e.additionLines.length===0||e.deletionLines.length===0)return 0;const t=e.additionLines.length-(n.additionLineIndex+n.additionCount),i=e.deletionLines.length-(n.deletionLineIndex+n.deletionCount);if(t!==i)throw new Error(`DiffHunksRenderer.processDiffResult: trailing context mismatch (additions=${t}, deletions=${i}) for ${e.name}`);return Math.min(t,i)}function kr(e,n){return e.lineNumber===n.lineNumber&&e.side===n.side&&e.metadata===n.metadata}function Sr(e,n){return e.slotName===n.slotName&&e.hunkIndex===n.hunkIndex&&e.lines===n.lines&&e.type===n.type&&e.expandable?.chunked===n.expandable?.chunked&&e.expandable?.up===n.expandable?.up&&e.expandable?.down===n.expandable?.down}function Cr(e){const n=e[0];if(n!=="+"&&n!=="-"&&n!==" "&&n!=="\\"){console.error(`parseLineType: Invalid firstChar: "${n}", full line: "${e}"`);return}const t=e.substring(1);return{line:t===""?`
`:t,type:n===" "?"context":n==="\\"?"metadata":n==="+"?"addition":"deletion"}}function wr(e,n,t=!1){const i=Ie.test(e),r=e.split(i?Ie:pn);let o;const a=[];for(const l of r){if(i&&!Ie.test(l)){if(o==null)o=l;else{if(t)throw Error("parsePatchContent: unknown file blob");console.error("parsePatchContent: unknown file blob:",l)}continue}else if(!i&&!pn.test(l)){if(o==null)o=l;else{if(t)throw Error("parsePatchContent: unknown file blob");console.error("parsePatchContent: unknown file blob:",l)}continue}const s=ot(l,{cacheKey:void 0,isGitDiff:i,throwOnError:t});s!=null&&a.push(s)}return{patchMetadata:o,files:a}}function ot(e,{cacheKey:n,isGitDiff:t=Ie.test(e),oldFile:i,newFile:r,throwOnError:o=!1}={}){let a=0;const l=e.split(mt);let s;const d=i==null||r==null;let f=0,c=0;for(const h of l){const u=h.split(Fe),p=u.shift();if(p==null){if(o)throw Error("parsePatchContent: invalid hunk");console.error("parsePatchContent: invalid hunk",h);continue}const v=p.match(gt);let k=0,S=0;if(v==null||s==null){if(s!=null){if(o)throw Error("parsePatchContent: Invalid hunk");console.error("parsePatchContent: Invalid hunk",h);continue}s={name:"",type:"change",hunks:[],splitLineCount:0,unifiedLineCount:0,isPartial:d,additionLines:!d&&i!=null&&r!=null?r.contents.split(Fe):[],deletionLines:!d&&i!=null&&r!=null?i.contents.split(Fe):[],cacheKey:n},s.additionLines.length===1&&r?.contents===""&&(s.additionLines.length=0),s.deletionLines.length===1&&i?.contents===""&&(s.deletionLines.length=0),u.unshift(p);for(const x of u){const w=x.match(t?vt:bt);if(x.startsWith("diff --git")){const[,,L,,E]=x.trim().match(yt)??[];s.name=E.trim(),L!==E&&(s.prevName=L.trim())}else if(w!=null){const[,L,E]=w;L==="---"&&E!=="/dev/null"?(s.prevName=E.trim(),s.name=E.trim()):L==="+++"&&E!=="/dev/null"&&(s.name=E.trim())}else if(t){if(x.startsWith("new mode ")&&(s.mode=x.replace("new mode","").trim()),x.startsWith("old mode ")&&(s.prevMode=x.replace("old mode","").trim()),x.startsWith("new file mode")&&(s.type="new",s.mode=x.replace("new file mode","").trim()),x.startsWith("deleted file mode")&&(s.type="deleted",s.mode=x.replace("deleted file mode","").trim()),x.startsWith("similarity index")&&(x.startsWith("similarity index 100%")?s.type="rename-pure":s.type="rename-changed"),x.startsWith("index ")){const[,L,E,I]=x.trim().match(xt)??[];L!=null&&(s.prevObjectId=L),E!=null&&(s.newObjectId=E),I!=null&&(s.mode=I)}x.startsWith("rename from ")&&(s.prevName=x.replace("rename from ","").trim()),x.startsWith("rename to ")&&(s.name=x.replace("rename to ","").trim())}}continue}let m,b;for(;u.length>0&&(u[u.length-1]===`
`||u[u.length-1]==="\r"||u[u.length-1]===`\r
`||u[u.length-1]==="");)u.pop();const y=parseInt(v[3]),C=parseInt(v[1]);f=d?f:C-1,c=d?c:y-1;const g={collapsedBefore:0,splitLineCount:0,splitLineStart:0,unifiedLineCount:0,unifiedLineStart:0,additionCount:parseInt(v[4]??"1"),additionStart:y,additionLines:k,deletionCount:parseInt(v[2]??"1"),deletionStart:C,deletionLines:S,deletionLineIndex:f,additionLineIndex:c,hunkContent:[],hunkContext:v[5],hunkSpecs:p,noEOFCRAdditions:!1,noEOFCRDeletions:!1};if(isNaN(g.additionCount)||isNaN(g.deletionCount)||isNaN(g.additionStart)||isNaN(g.deletionStart)){if(o)throw Error("parsePatchContent: invalid hunk metadata");console.error("parsePatchContent: invalid hunk metadata",g);continue}for(const x of u){const w=Cr(x);if(w==null){console.error("processFile: invalid rawLine:",x);continue}const{type:L,line:E}=w;if(L==="addition")(m==null||m.type!=="change")&&(m=Qe("change",f,c),g.hunkContent.push(m)),c++,d&&s.additionLines.push(E),m.additions++,k++,b="addition";else if(L==="deletion")(m==null||m.type!=="change")&&(m=Qe("change",f,c),g.hunkContent.push(m)),f++,d&&s.deletionLines.push(E),m.deletions++,S++,b="deletion";else if(L==="context")(m==null||m.type!=="context")&&(m=Qe("context",f,c),g.hunkContent.push(m)),c++,f++,d&&(s.deletionLines.push(E),s.additionLines.push(E)),m.lines++,b="context";else if(L==="metadata"&&m!=null){if(m.type==="context"?(g.noEOFCRAdditions=!0,g.noEOFCRDeletions=!0):b==="deletion"?g.noEOFCRDeletions=!0:b==="addition"&&(g.noEOFCRAdditions=!0),d&&(b==="addition"||b==="context")){const I=s.additionLines.length-1;I>=0&&(s.additionLines[I]=he(s.additionLines[I]))}if(d&&(b==="deletion"||b==="context")){const I=s.deletionLines.length-1;I>=0&&(s.deletionLines[I]=he(s.deletionLines[I]))}}}g.additionLines=k,g.deletionLines=S,g.collapsedBefore=Math.max(g.additionStart-1-a,0),s.hunks.push(g),a=g.additionStart+g.additionCount-1;for(const x of g.hunkContent)x.type==="context"?(g.splitLineCount+=x.lines,g.unifiedLineCount+=x.lines):(g.splitLineCount+=Math.max(x.additions,x.deletions),g.unifiedLineCount+=x.deletions+x.additions);g.splitLineStart=s.splitLineCount+g.collapsedBefore,g.unifiedLineStart=s.unifiedLineCount+g.collapsedBefore,s.splitLineCount+=g.collapsedBefore+g.splitLineCount,s.unifiedLineCount+=g.collapsedBefore+g.unifiedLineCount}if(s!=null){if(s.hunks.length>0&&!d&&s.additionLines.length>0&&s.deletionLines.length>0){const h=s.hunks[s.hunks.length-1],u=h.additionStart+h.additionCount-1,p=s.additionLines.length,v=Math.max(p-u,0);s.splitLineCount+=v,s.unifiedLineCount+=v}return t||(s.prevName!=null&&s.name!==s.prevName?s.hunks.length>0?s.type="rename-changed":s.type="rename-pure":r!=null&&r.contents===""?s.type="deleted":i!=null&&i.contents===""&&(s.type="new")),s.type!=="rename-pure"&&s.type!=="rename-changed"&&(s.prevName=void 0),s}}function Lr(e,n,t=!1){const i=[];for(const r of e.split(pt))try{i.push(wr(r,n!=null?`${n}-${i.length}`:void 0,t))}catch(o){if(t)throw o;console.error(o)}return i}function Qe(e,n,t){return e==="change"?{type:"change",additions:0,deletions:0,additionLineIndex:t,deletionLineIndex:n}:{type:"context",lines:0,additionLineIndex:t,deletionLineIndex:n}}function De(e,n,t,i=!1){const r=ot(Si(e.name,n.name,e.contents,n.contents,e.header,n.header,t),{cacheKey:(()=>{if(e.cacheKey!=null&&n.cacheKey!=null)return`${e.cacheKey}:${n.cacheKey}`})(),oldFile:e,newFile:n,throwOnError:i});if(r==null)throw new Error("parseDiffFrom: FileInvalid diff -- probably need to fix something -- if the files are the same maybe?");return n.lang!=null&&(r.lang=n.lang),r}let Er=-1;var st=class{static LoadedCustomComponent=lr;__id=`file-diff:${++Er}`;fileContainer;spriteSVG;pre;codeUnified;codeDeletions;codeAdditions;bufferBefore;bufferAfter;themeCSSStyle;appliedThemeCSS;unsafeCSSStyle;appliedUnsafeCSS;gutterUtilityContent;headerElement;headerPrefix;headerMetadata;headerCustom;separatorCache=new Map;errorWrapper;placeHolder;hunksRenderer;resizeManager;scrollSyncManager;interactionManager;annotationCache=new Map;lineAnnotations=[];deletionFile;additionFile;fileDiff;renderRange;appliedPreAttributes;lastRenderedHeaderHTML;lastRowCount;enabled=!0;constructor(e={theme:J},n,t=!1){this.options=e,this.workerManager=n,this.isContainerManaged=t,this.hunksRenderer=this.createHunksRenderer(e),this.resizeManager=new zi,this.scrollSyncManager=new pr,this.interactionManager=new Hi("diff",Tn(e,typeof e.hunkSeparators=="function"||(e.hunkSeparators??"line-info")==="line-info"||e.hunkSeparators==="line-info-basic"?this.handleExpandHunk:void 0,this.getLineIndex)),this.workerManager?.subscribeToThemeChanges(this),this.enabled=!0}handleHighlightRender=()=>{this.rerender()};getHunksRendererOptions(e){return{...e,headerRenderMode:e.renderCustomHeader!=null?"custom":"default",hunkSeparators:typeof e.hunkSeparators=="function"?"custom":e.hunkSeparators}}createHunksRenderer(e){return new yr(this.getHunksRendererOptions(e),this.handleHighlightRender,this.workerManager)}getLineIndex=(e,n="additions")=>{if(this.fileDiff==null)return;const t=this.fileDiff.hunks.at(-1);let i,r;e:for(const o of this.fileDiff.hunks){let a=n==="deletions"?o.deletionStart:o.additionStart;const l=n==="deletions"?o.deletionCount:o.additionCount;let s=o.splitLineStart,d=o.unifiedLineStart;if(e<a){const f=a-e;i=Math.max(d-f,0),r=Math.max(s-f,0);break e}if(e>=a+l){if(o===t){const f=e-(a+l);i=d+o.unifiedLineCount+f,r=s+o.splitLineCount+f;break e}continue}for(const f of o.hunkContent)if(f.type==="context")if(e<a+f.lines){const c=e-a;r=s+c,i=d+c;break e}else a+=f.lines,s+=f.lines,d+=f.lines;else{const c=n==="deletions"?f.deletions:f.additions;if(e<a+c){const h=e-a;i=d+(n==="additions"?f.deletions:0)+h,r=s+h;break e}else a+=c,s+=Math.max(f.deletions,f.additions),d+=f.deletions+f.additions}break e}if(!(i==null||r==null))return[i,r]};setOptions(e){e!=null&&(this.options=e,this.hunksRenderer.setOptions(this.getHunksRendererOptions(e)),this.interactionManager.setOptions(Tn(e,typeof e.hunkSeparators=="function"||(e.hunkSeparators??"line-info")==="line-info"||e.hunkSeparators==="line-info-basic"?this.handleExpandHunk:void 0,this.getLineIndex)))}mergeOptions(e){this.options={...this.options,...e}}setThemeType(e){(this.options.themeType??"system")!==e&&(this.mergeOptions({themeType:e}),!(typeof this.options.theme=="string"||this.fileContainer==null||this.appliedThemeCSS==null)&&this.applyThemeState(this.fileContainer,this.appliedThemeCSS.themeStyles,e,this.appliedThemeCSS.baseThemeType))}getHoveredLine=()=>this.interactionManager.getHoveredLine();setLineAnnotations(e){this.lineAnnotations=e}canPartiallyRender(e,n,t){return!(e||n||t||typeof this.options.hunkSeparators=="function")}setSelectedLines(e){this.interactionManager.setSelection(e)}cleanUp(e=!1){this.resizeManager.cleanUp(),this.interactionManager.cleanUp(),this.scrollSyncManager.cleanUp(),this.workerManager?.unsubscribeToThemeChanges(this),this.renderRange=void 0,this.isContainerManaged||this.fileContainer?.remove(),this.fileContainer?.shadowRoot!=null&&(this.fileContainer.shadowRoot.innerHTML=""),this.fileContainer=void 0,this.pre!=null&&(this.pre.innerHTML="",this.pre=void 0),this.codeUnified=void 0,this.codeDeletions=void 0,this.codeAdditions=void 0,this.bufferBefore=void 0,this.bufferAfter=void 0,this.appliedPreAttributes=void 0,this.headerElement=void 0,this.headerPrefix=void 0,this.headerMetadata=void 0,this.headerCustom=void 0,this.lastRenderedHeaderHTML=void 0,this.errorWrapper=void 0,this.spriteSVG=void 0,this.lastRowCount=void 0,this.themeCSSStyle=void 0,this.appliedThemeCSS=void 0,this.unsafeCSSStyle=void 0,this.appliedUnsafeCSS=void 0,e?this.hunksRenderer.recycle():(this.hunksRenderer.cleanUp(),this.workerManager=void 0,this.fileDiff=void 0,this.deletionFile=void 0,this.additionFile=void 0),this.enabled=!1}virtualizedSetup(){this.enabled=!0,this.workerManager?.subscribeToThemeChanges(this)}hydrate(e){const{fileContainer:n,prerenderedHTML:t,preventEmit:i=!1,lineAnnotations:r,oldFile:o,newFile:a,fileDiff:l}=e;this.hydrateElements(n,t),this.pre==null&&this.headerElement==null?this.render({...e,preventEmit:!0}):this.hydrationSetup({fileDiff:l,oldFile:o,newFile:a,lineAnnotations:r}),i||this.emitPostRender()}hydrateElements(e,n){sr(e,n);for(const t of e.shadowRoot?.children??[]){if(t instanceof SVGElement){this.spriteSVG=t;continue}if(t instanceof HTMLElement){if(t instanceof HTMLPreElement){this.pre=t;for(const i of t.children)!(i instanceof HTMLElement)||i.tagName.toLowerCase()!=="code"||("deletions"in i.dataset&&(this.codeDeletions=i),"additions"in i.dataset&&(this.codeAdditions=i),"unified"in i.dataset&&(this.codeUnified=i));continue}if("diffsHeader"in t.dataset){this.headerElement=t;continue}if(t instanceof HTMLStyleElement&&t.hasAttribute(qn)){this.themeCSSStyle=t;continue}if(t instanceof HTMLStyleElement&&t.hasAttribute(Vn)){this.unsafeCSSStyle=t,this.appliedUnsafeCSS=t.textContent;continue}}}this.pre!=null&&(this.syncCodeNodesFromPre(this.pre),this.pre.removeAttribute("data-dehydrated")),this.fileContainer=e}hydrationSetup({fileDiff:e,oldFile:n,newFile:t,lineAnnotations:i}){const{diffStyle:r="split",overflow:o="scroll"}=this.options;this.lineAnnotations=i??this.lineAnnotations,this.additionFile=t,this.deletionFile=n,this.fileDiff=e??(n!=null&&t!=null?De(n,t,this.options.parseDiffOptions):void 0),this.pre!=null&&(this.hunksRenderer.hydrate(this.fileDiff),this.renderAnnotations(),this.renderGutterUtility(),this.injectUnsafeCSS(),this.interactionManager.setup(this.pre),this.resizeManager.setup(this.pre,o==="wrap"),o==="scroll"&&r==="split"&&this.scrollSyncManager.setup(this.pre,this.codeDeletions,this.codeAdditions))}rerender(){!this.enabled||this.fileDiff==null&&this.additionFile==null&&this.deletionFile==null||this.render({forceRender:!0,renderRange:this.renderRange})}handleExpandHunk=(e,n,t)=>{this.expandHunk(e,n,t)};expandHunk=(e,n,t)=>{this.hunksRenderer.expandHunk(e,n,t),this.rerender()};render({oldFile:e,newFile:n,fileDiff:t,forceRender:i=!1,preventEmit:r=!1,lineAnnotations:o,fileContainer:a,containerWrapper:l,renderRange:s}){if(!this.enabled)throw new Error("FileDiff.render: attempting to call render after cleaned up");const{collapsed:d=!1}=this.options,f=d?void 0:s,c=e!=null&&n!=null&&(!xn(e,this.deletionFile)||!xn(n,this.additionFile));let h=t!=null&&t!==this.fileDiff;const u=o!=null&&(o.length>0||this.lineAnnotations.length>0)?o!==this.lineAnnotations:!1;if(!d&&tt(f,this.renderRange)&&!i&&!u&&(t!=null&&t===this.fileDiff||t==null&&!c))return!1;const{renderRange:p}=this;if(this.renderRange=f,this.deletionFile=e,this.additionFile=n,t!=null?this.fileDiff=t:e!=null&&n!=null&&c&&(h=!0,this.fileDiff=De(e,n,this.options.parseDiffOptions)),o!=null&&this.setLineAnnotations(o),this.fileDiff==null)return!1;this.hunksRenderer.setOptions(this.getHunksRendererOptions(this.options)),this.hunksRenderer.setLineAnnotations(this.lineAnnotations);const{diffStyle:v="split",disableErrorHandling:k=!1,disableFileHeader:S=!1,overflow:m="scroll",themeType:b="system"}=this.options;if(S&&(this.headerElement!=null&&(this.headerElement.remove(),this.headerElement=void 0,this.lastRenderedHeaderHTML=void 0),this.clearHeaderSlots()),a=this.getOrCreateFileContainer(a,l),d){this.removeRenderedCode(),this.clearAuxiliaryNodes();try{const y=this.hunksRenderer.renderDiff(this.fileDiff,Ct);y!=null&&this.applyThemeState(a,y.themeStyles,b,y.baseThemeType),y?.headerElement!=null&&this.applyHeaderToDOM(y.headerElement,a),this.renderSeparators([]),this.injectUnsafeCSS()}catch(y){if(k)throw y;console.error(y),y instanceof Error&&this.applyErrorToDOM(y,a)}return r||this.emitPostRender(),!0}try{const y=this.getOrCreatePreNode(a);if(!(this.canPartiallyRender(i,u,c||h)&&this.applyPartialRender({previousRenderRange:p,renderRange:f}))){const C=this.hunksRenderer.renderDiff(this.fileDiff,f);if(C==null)return this.workerManager?.isInitialized()===!1&&this.workerManager.initialize().then(()=>this.rerender()),!1;this.applyThemeState(a,C.themeStyles,b,C.baseThemeType),C.headerElement!=null&&this.applyHeaderToDOM(C.headerElement,a),C.additionsContentAST!=null||C.deletionsContentAST!=null||C.unifiedContentAST!=null?this.applyHunksToDOM(y,C):this.pre!=null&&(this.pre.remove(),this.pre=void 0),this.renderSeparators(C.hunkData)}this.applyBuffers(y,f),this.injectUnsafeCSS(),this.renderAnnotations(),this.renderGutterUtility(),this.interactionManager.setup(y),this.resizeManager.setup(y,m==="wrap"),m==="scroll"&&v==="split"?this.scrollSyncManager.setup(y,this.codeDeletions,this.codeAdditions):this.scrollSyncManager.cleanUp()}catch(y){if(k)throw y;console.error(y),y instanceof Error&&this.applyErrorToDOM(y,a)}return r||this.emitPostRender(),!0}emitPostRender(){this.fileContainer!=null&&this.options.onPostRender?.(this.fileContainer,this)}removeRenderedCode(){this.resizeManager.cleanUp(),this.scrollSyncManager.cleanUp(),this.interactionManager.cleanUp(),this.bufferBefore?.remove(),this.bufferBefore=void 0,this.bufferAfter?.remove(),this.bufferAfter=void 0,this.codeUnified?.remove(),this.codeUnified=void 0,this.codeDeletions?.remove(),this.codeDeletions=void 0,this.codeAdditions?.remove(),this.codeAdditions=void 0,this.pre?.remove(),this.pre=void 0,this.appliedPreAttributes=void 0,this.lastRowCount=void 0}clearAuxiliaryNodes(){for(const{element:e}of this.separatorCache.values())e.remove();this.separatorCache.clear();for(const{element:e}of this.annotationCache.values())e.remove();this.annotationCache.clear(),this.gutterUtilityContent?.remove(),this.gutterUtilityContent=void 0}renderPlaceholder(e){if(this.fileContainer==null)return!1;if(this.cleanChildNodes(),this.placeHolder==null){const n=this.fileContainer.shadowRoot??this.fileContainer.attachShadow({mode:"open"});this.placeHolder=document.createElement("div"),this.placeHolder.dataset.placeholder="",n.appendChild(this.placeHolder)}return this.placeHolder.style.setProperty("height",`${e}px`),!0}cleanChildNodes(){this.resizeManager.cleanUp(),this.scrollSyncManager.cleanUp(),this.interactionManager.cleanUp(),this.bufferAfter?.remove(),this.bufferBefore?.remove(),this.codeAdditions?.remove(),this.codeDeletions?.remove(),this.codeUnified?.remove(),this.errorWrapper?.remove(),this.headerElement?.remove(),this.gutterUtilityContent?.remove(),this.headerPrefix?.remove(),this.headerMetadata?.remove(),this.headerCustom?.remove(),this.pre?.remove(),this.spriteSVG?.remove(),this.themeCSSStyle?.remove(),this.unsafeCSSStyle?.remove(),this.bufferAfter=void 0,this.bufferBefore=void 0,this.codeAdditions=void 0,this.codeDeletions=void 0,this.codeUnified=void 0,this.errorWrapper=void 0,this.headerElement=void 0,this.gutterUtilityContent=void 0,this.headerPrefix=void 0,this.headerMetadata=void 0,this.headerCustom=void 0,this.pre=void 0,this.spriteSVG=void 0,this.themeCSSStyle=void 0,this.appliedThemeCSS=void 0,this.unsafeCSSStyle=void 0,this.appliedUnsafeCSS=void 0,this.lastRenderedHeaderHTML=void 0,this.lastRowCount=void 0}renderSeparators(e){const{hunkSeparators:n}=this.options;if(this.isContainerManaged||this.fileContainer==null||typeof n!="function"){for(const{element:i}of this.separatorCache.values())i.remove();this.separatorCache.clear();return}const t=new Map(this.separatorCache);for(const i of e){const r=i.slotName;let o=this.separatorCache.get(r);if(o==null||!Sr(i,o.hunkData)){o?.element.remove();const a=document.createElement("div");a.style.display="contents",a.slot=i.slotName;const l=n(i,this);l!=null&&a.appendChild(l),this.fileContainer.appendChild(a),o={element:a,hunkData:i},this.separatorCache.set(r,o)}t.delete(r)}for(const[i,{element:r}]of t.entries())this.separatorCache.delete(i),r.remove()}renderAnnotations(){if(this.isContainerManaged||this.fileContainer==null){for(const{element:t}of this.annotationCache.values())t.remove();this.annotationCache.clear();return}const e=new Map(this.annotationCache),{renderAnnotation:n}=this.options;if(n!=null&&this.lineAnnotations.length>0)for(const[t,i]of this.lineAnnotations.entries()){const r=`${t}-${ye(i)}`;let o=this.annotationCache.get(r);if(o==null||!kr(i,o.annotation)){o?.element.remove();const a=n(i);if(a==null)continue;o={element:Ji(ye(i)),annotation:i},o.element.appendChild(a),this.fileContainer.appendChild(o.element),this.annotationCache.set(r,o)}e.delete(r)}for(const[t,{element:i}]of e.entries())this.annotationCache.delete(t),i.remove()}renderGutterUtility(){const e=this.options.renderGutterUtility??this.options.renderHoverUtility;if(this.fileContainer==null||e==null){this.gutterUtilityContent?.remove(),this.gutterUtilityContent=void 0;return}const n=e(this.interactionManager.getHoveredLine);if(n!=null&&this.gutterUtilityContent!=null)return;if(n==null){this.gutterUtilityContent?.remove(),this.gutterUtilityContent=void 0;return}const t=Zi();t.appendChild(n),this.fileContainer.appendChild(t),this.gutterUtilityContent=t}getOrCreateFileContainer(e,n){const t=this.fileContainer;if(this.fileContainer=e??this.fileContainer??document.createElement(ve),t!=null&&t!==this.fileContainer&&(this.lastRenderedHeaderHTML=void 0,this.headerElement=void 0),n!=null&&this.fileContainer.parentNode!==n&&n.appendChild(this.fileContainer),this.spriteSVG==null){const i=document.createElement("div");i.innerHTML=Xi;const r=i.firstChild;r instanceof SVGElement&&(this.spriteSVG=r,this.fileContainer.shadowRoot?.appendChild(this.spriteSVG))}return this.fileContainer}getFileContainer(){return this.fileContainer}getOrCreatePreNode(e){const n=e.shadowRoot??e.attachShadow({mode:"open"});return this.pre==null?(this.pre=document.createElement("pre"),this.appliedPreAttributes=void 0,this.codeUnified=void 0,this.codeDeletions=void 0,this.codeAdditions=void 0,n.appendChild(this.pre)):this.pre.parentNode!==n&&(n.appendChild(this.pre),this.appliedPreAttributes=void 0),this.placeHolder?.remove(),this.placeHolder=void 0,this.pre}syncCodeNodesFromPre(e){this.codeUnified=void 0,this.codeDeletions=void 0,this.codeAdditions=void 0;for(const n of Array.from(e.children))n instanceof HTMLElement&&(n.hasAttribute("data-unified")?this.codeUnified=n:n.hasAttribute("data-deletions")?this.codeDeletions=n:n.hasAttribute("data-additions")&&(this.codeAdditions=n))}applyHeaderToDOM(e,n){this.cleanupErrorWrapper(),this.placeHolder?.remove(),this.placeHolder=void 0;const{fileDiff:t}=this,i=be(e);if(i!==this.lastRenderedHeaderHTML){const d=document.createElement("div");d.innerHTML=i;const f=d.firstElementChild;if(!(f instanceof HTMLElement))return;this.headerElement!=null?n.shadowRoot?.replaceChild(f,this.headerElement):n.shadowRoot?.prepend(f),this.headerElement=f,this.lastRenderedHeaderHTML=i}if(this.isContainerManaged||t==null)return;const{renderCustomHeader:r,renderHeaderPrefix:o,renderHeaderMetadata:a}=this.options;if(r!=null){const d=r(t)??void 0;this.headerCustom=this.upsertHeaderSlotElement(n,this.headerCustom,ln,d),this.headerPrefix?.remove(),this.headerMetadata?.remove(),this.headerPrefix=void 0,this.headerMetadata=void 0;return}const l=o?.(t)??void 0,s=a?.(t)??void 0;this.headerPrefix=this.upsertHeaderSlotElement(n,this.headerPrefix,sn,l),this.headerMetadata=this.upsertHeaderSlotElement(n,this.headerMetadata,an,s),this.headerCustom?.remove(),this.headerCustom=void 0}clearHeaderSlots(){this.headerPrefix?.remove(),this.headerMetadata?.remove(),this.headerCustom?.remove(),this.headerPrefix=void 0,this.headerMetadata=void 0,this.headerCustom=void 0}upsertHeaderSlotElement(e,n,t,i){if(i==null){n?.remove();return}const r=n??this.createHeaderSlotElement(t);return n==null&&e.appendChild(r),this.replaceHeaderSlotContent(r,i),r}replaceHeaderSlotContent(e,n){e.replaceChildren(),n instanceof Element?e.appendChild(n):e.innerText=`${n}`}createHeaderSlotElement(e){const n=document.createElement("div");return n.slot=e,n}injectUnsafeCSS(){const{unsafeCSS:e}=this.options,n=this.fileContainer?.shadowRoot;if(n!=null){if(e==null||e===""){this.unsafeCSSStyle!=null&&(this.unsafeCSSStyle.remove(),this.unsafeCSSStyle=void 0),this.appliedUnsafeCSS=void 0;return}this.unsafeCSSStyle?.parentNode===n&&this.appliedUnsafeCSS===e||(this.unsafeCSSStyle??=er(),this.unsafeCSSStyle.parentNode!==n&&n.appendChild(this.unsafeCSSStyle),this.unsafeCSSStyle.textContent=tr(e),this.appliedUnsafeCSS=e)}}applyThemeState(e,n,t,i){const r=e.shadowRoot??e.attachShadow({mode:"open"}),o=i??t;this.themeCSSStyle?.parentNode===r&&this.appliedThemeCSS?.themeStyles===n&&this.appliedThemeCSS.themeType===o||(this.themeCSSStyle=rr({shadowRoot:r,currentNode:this.themeCSSStyle,themeCSS:ir(n,o)}),this.appliedThemeCSS=this.themeCSSStyle!=null?{themeStyles:n,themeType:o,baseThemeType:i}:void 0)}applyHunksToDOM(e,n){const{overflow:t="scroll"}=this.options,i=(this.options.hunkSeparators??"line-info")==="line-info",r=t==="wrap"?n.rowCount:void 0;this.cleanupErrorWrapper(),this.applyPreNodeAttributes(e,n);let o=!1;const a=[],l=this.hunksRenderer.renderCodeAST("unified",n),s=this.hunksRenderer.renderCodeAST("deletions",n),d=this.hunksRenderer.renderCodeAST("additions",n);l!=null?(o=this.codeUnified==null||this.codeAdditions!=null||this.codeDeletions!=null,this.codeDeletions?.remove(),this.codeDeletions=void 0,this.codeAdditions?.remove(),this.codeAdditions=void 0,this.codeUnified=Ke({code:this.codeUnified,columnType:"unified",rowSpan:r,containerSize:i}),this.codeUnified.innerHTML=this.hunksRenderer.renderPartialHTML(l),a.push(this.codeUnified)):s!=null||d!=null?(s!=null?(o=this.codeDeletions==null||this.codeUnified!=null,this.codeUnified?.remove(),this.codeUnified=void 0,this.codeDeletions=Ke({code:this.codeDeletions,columnType:"deletions",rowSpan:r,containerSize:i}),this.codeDeletions.innerHTML=this.hunksRenderer.renderPartialHTML(s),a.push(this.codeDeletions)):(this.codeDeletions?.remove(),this.codeDeletions=void 0),d!=null?(o=o||this.codeAdditions==null||this.codeUnified!=null,this.codeUnified?.remove(),this.codeUnified=void 0,this.codeAdditions=Ke({code:this.codeAdditions,columnType:"additions",rowSpan:r,containerSize:i}),this.codeAdditions.innerHTML=this.hunksRenderer.renderPartialHTML(d),a.push(this.codeAdditions)):(this.codeAdditions?.remove(),this.codeAdditions=void 0)):(this.codeUnified?.remove(),this.codeUnified=void 0,this.codeDeletions?.remove(),this.codeDeletions=void 0,this.codeAdditions?.remove(),this.codeAdditions=void 0),a.length===0?e.textContent="":o&&e.replaceChildren(...a),this.lastRowCount=n.rowCount}applyPartialRender({previousRenderRange:e,renderRange:n}){const{pre:t,codeUnified:i,codeAdditions:r,codeDeletions:o,options:{diffStyle:a="split"}}=this;if(t==null||e==null||n==null||!Number.isFinite(e.totalLines)||!Number.isFinite(n.totalLines)||this.lastRowCount==null)return!1;const l=this.getCodeColumns(a,i,o,r);if(l==null)return!1;const s=e.startingLine,d=n.startingLine,f=s+e.totalLines,c=d+n.totalLines,h=Math.max(s,d),u=Math.min(f,c);if(u<=h)return!1;const p=Math.max(0,h-s),v=Math.max(0,f-u),k=this.trimColumns({columns:l,trimStart:p,trimEnd:v,previousStart:s,overlapStart:h,overlapEnd:u,diffStyle:a});if(k<0)throw new Error("applyPartialRender: failed to trim to overlap");if(this.lastRowCount<k)throw new Error("applyPartialRender: trimmed beyond DOM row count");let S=this.lastRowCount-k;const m=(g,x)=>{if(!(x<=0||this.fileDiff==null))return this.hunksRenderer.renderDiff(this.fileDiff,{startingLine:g,totalLines:x,bufferBefore:0,bufferAfter:0})},b=m(d,Math.max(h-d,0));if(b==null&&d<h)return!1;const y=m(u,Math.max(c-u,0));if(y==null&&c>u)return!1;const C=(g,x)=>{if(g!=null){if(a==="unified"&&!Array.isArray(l))this.insertPartialHTML(a,l,g,x);else if(a==="split"&&Array.isArray(l))this.insertPartialHTML(a,l,g,x);else throw new Error("FileDiff.applyPartialRender.applyChunk: invalid chunk application");S+=g.rowCount}};return this.cleanupErrorWrapper(),C(b,"afterbegin"),C(y,"beforeend"),this.lastRowCount!==S&&(this.applyRowSpan(a,l,S),this.lastRowCount=S),!0}insertPartialHTML(e,n,t,i){if(e==="unified"&&!Array.isArray(n)){const r=this.hunksRenderer.renderCodeAST("unified",t);this.renderPartialColumn(n,r,i)}else if(e==="split"&&Array.isArray(n)){const r=this.hunksRenderer.renderCodeAST("deletions",t),o=this.hunksRenderer.renderCodeAST("additions",t);this.renderPartialColumn(n[0],r,i),this.renderPartialColumn(n[1],o,i)}else throw new Error("FileDiff.insertPartialHTML: Invalid argument composition")}renderPartialColumn(e,n,t){if(e==null||n==null)return;const i=_n(n[0]),r=_n(n[1]);if(i==null||r==null)throw new Error("FileDiff.insertPartialHTML: Unexpected AST structure");const o=r.at(0);t==="beforeend"&&o?.type==="element"&&typeof o.properties["data-buffer-size"]=="number"&&this.mergeBuffersIfNecessary(o.properties["data-buffer-size"],e.content.children[e.content.children.length-1],e.gutter.children[e.gutter.children.length-1],i,r,!0);const a=r.at(-1);t==="afterbegin"&&a?.type==="element"&&typeof a.properties["data-buffer-size"]=="number"&&this.mergeBuffersIfNecessary(a.properties["data-buffer-size"],e.content.children[0],e.gutter.children[0],i,r,!1),e.gutter.insertAdjacentHTML(t,this.hunksRenderer.renderPartialHTML(i)),e.content.insertAdjacentHTML(t,this.hunksRenderer.renderPartialHTML(r))}mergeBuffersIfNecessary(e,n,t,i,r,o){if(!(n instanceof HTMLElement)||!(t instanceof HTMLElement))return;const a=this.getBufferSize(n.dataset);a!=null&&(o?(i.shift(),r.shift()):(i.pop(),r.pop()),this.updateBufferSize(n,a+e),this.updateBufferSize(t,a+e))}applyRowSpan(e,n,t){const i=r=>{r!=null&&(r.gutter.style.setProperty("grid-row",`span ${t}`),r.content.style.setProperty("grid-row",`span ${t}`))};if(e==="unified"&&!Array.isArray(n))i(n);else if(e==="split"&&Array.isArray(n))i(n[0]),i(n[1]);else throw new Error("dun fuuuuked up")}trimColumnRows(e,n,t){let i=0,r=0,o=0,a=!1;const l=t>=0;if(e==null)return 0;const s=Array.from(e.content.children),d=Array.from(e.gutter.children);if(s.length!==d.length)throw new Error("FileDiff.trimColumnRows: columns do not match");for(;o<s.length&&!(n<=0&&!l&&!a);){const f=d[o],c=s[o];if(o++,!(f instanceof HTMLElement)||!(c instanceof HTMLElement))throw console.error({gutterElement:f,contentElement:c}),new Error("FileDiff.trimColumnRows: invalid row elements");if(a&&(a=!1,f.dataset.gutterBuffer==="annotation"&&"lineAnnotation"in c.dataset||f.dataset.gutterBuffer==="metadata"&&"noNewline"in c.dataset)){f.remove(),c.remove(),r++;continue}if("lineIndex"in f.dataset&&"lineIndex"in c.dataset){(n>0||l&&i>=t)&&(f.remove(),c.remove(),n>0&&(n--,n===0&&(a=!0)),r++),i++;continue}if("separator"in f.dataset&&"separator"in c.dataset){(n>0||l&&i>=t)&&(f.remove(),c.remove(),r++);continue}if(f.dataset.gutterBuffer==="annotation"&&"lineAnnotation"in c.dataset){(n>0||l&&i>=t)&&(f.remove(),c.remove(),r++);continue}if(f.dataset.gutterBuffer==="metadata"&&"noNewline"in c.dataset){(n>0||l&&i>=t)&&(f.remove(),c.remove(),r++);continue}if(f.dataset.gutterBuffer==="buffer"&&"contentBuffer"in c.dataset){const h=this.getBufferSize(c.dataset);if(h==null)throw new Error("FileDiff.trimColumnRows: invalid element");if(n>0){const u=Math.min(n,h),p=h-u;p>0?(this.updateBufferSize(f,p),this.updateBufferSize(c,p),r+=u):(f.remove(),c.remove(),r+=h),n-=u}else if(l){const u=i,p=i+h-1;if(t<=u)f.remove(),c.remove(),r+=h;else if(t<=p){const v=p-t+1,k=h-v;this.updateBufferSize(f,k),this.updateBufferSize(c,k),r+=v}}i+=h;continue}throw console.error({gutterElement:f,contentElement:c}),new Error("FileDiff.trimColumnRows: unknown row elements")}return r}trimColumns({columns:e,diffStyle:n,overlapEnd:t,overlapStart:i,previousStart:r,trimEnd:o,trimStart:a}){const l=Math.max(0,i-r),s=t-r;if(s<0)throw new Error("FileDiff.trimColumns: overlap ends before previous");const d=a>0,f=o>0;if(!d&&!f)return 0;const c=d?l:0,h=f?s:-1;if(n==="unified"&&!Array.isArray(e))return this.trimColumnRows(e,c,h);if(n==="split"&&Array.isArray(e)){const u=this.trimColumnRows(e[0],c,h),p=this.trimColumnRows(e[1],c,h);if(e[0]!=null&&e[1]!=null&&u!==p)throw new Error("FileDiff.trimColumns: split columns out of sync");return e[0]!=null?u:p}else throw console.error({diffStyle:n,columns:e}),new Error("FileDiff.trimColumns: Invalid columns for diffType")}getBufferSize(e){const n=Number.parseInt(e?.bufferSize??"",10);return Number.isNaN(n)?void 0:n}updateBufferSize(e,n){e.dataset.bufferSize=`${n}`,e.style.setProperty("grid-row",`span ${n}`),e.style.setProperty("min-height",`calc(${n} * 1lh)`)}getCodeColumns(e,n,t,i){function r(o){if(o==null)return;const a=o.children[0],l=o.children[1];if(!(!(a instanceof HTMLElement)||!(l instanceof HTMLElement)||a.dataset.gutter==null||l.dataset.content==null))return{gutter:a,content:l}}if(e==="unified")return r(n);{const o=r(t),a=r(i);return o!=null||a!=null?[o,a]:void 0}}applyBuffers(e,n){const{disableVirtualizationBuffers:t=!1}=this.options;if(t||n==null){this.bufferBefore!=null&&(this.bufferBefore.remove(),this.bufferBefore=void 0),this.bufferAfter!=null&&(this.bufferAfter.remove(),this.bufferAfter=void 0);return}n.bufferBefore>0?(this.bufferBefore==null&&(this.bufferBefore=document.createElement("div"),this.bufferBefore.dataset.virtualizerBuffer="before",e.before(this.bufferBefore)),this.bufferBefore.style.setProperty("height",`${n.bufferBefore}px`),this.bufferBefore.style.setProperty("contain","strict")):this.bufferBefore!=null&&(this.bufferBefore.remove(),this.bufferBefore=void 0),n.bufferAfter>0?(this.bufferAfter==null&&(this.bufferAfter=document.createElement("div"),this.bufferAfter.dataset.virtualizerBuffer="after",e.after(this.bufferAfter)),this.bufferAfter.style.setProperty("height",`${n.bufferAfter}px`),this.bufferAfter.style.setProperty("contain","strict")):this.bufferAfter!=null&&(this.bufferAfter.remove(),this.bufferAfter=void 0)}applyPreNodeAttributes(e,{additionsContentAST:n,deletionsContentAST:t,totalLines:i},r){const{diffIndicators:o="bars",disableBackground:a=!1,disableLineNumbers:l=!1,overflow:s="scroll",diffStyle:d="split"}=this.options,f={type:"diff",diffIndicators:o,disableBackground:a,disableLineNumbers:l,overflow:s,split:d==="unified"?!1:n!=null&&t!=null,totalLines:i,customProperties:r};Yi(f,this.appliedPreAttributes)||(ar(e,f),this.appliedPreAttributes=f)}applyErrorToDOM(e,n){this.cleanupErrorWrapper();const t=this.getOrCreatePreNode(n);t.innerHTML="",t.remove(),this.pre=void 0,this.appliedPreAttributes=void 0;const i=n.shadowRoot??n.attachShadow({mode:"open"});this.errorWrapper??=document.createElement("div"),this.errorWrapper.dataset.errorWrapper="",this.errorWrapper.innerHTML="",i.appendChild(this.errorWrapper);const r=document.createElement("div");r.dataset.errorMessage="",r.innerText=e.message,this.errorWrapper.appendChild(r);const o=document.createElement("pre");o.dataset.errorStack="",o.innerText=e.stack??"No Error Stack",this.errorWrapper.appendChild(o)}cleanupErrorWrapper(){this.errorWrapper?.remove(),this.errorWrapper=void 0}};function _n(e){if(!(e==null||e.type!=="element"))return e.children??[]}function Tr(e,n){const t={...kt,...n};return t.hunkSeparatorHeight=Ar(e,n?.hunkSeparatorHeight),t}function Ar(e,n){if(n!=null)return n;switch(e){case"simple":return 4;case"metadata":case"line-info":case"line-info-basic":case"custom":return 32}}let Ir=-1;var Mr=class extends st{__id=`little-virtualized-file-diff:${++Ir}`;top;height=0;metrics;heightCache=new Map;isVisible=!1;virtualizer;constructor(e,n,t,i,r=!1){super(e,i,r);const{hunkSeparators:o="line-info"}=this.options;this.virtualizer=n,this.metrics=Tr(typeof o=="function"?"custom":o,t)}getLineHeight(e,n=!1){const t=this.heightCache.get(e);if(t!=null)return t;const i=n?2:1;return this.metrics.lineHeight*i}setOptions(e){if(e==null)return;const n=this.options.diffStyle,t=this.options.overflow,i=this.options.collapsed;super.setOptions(e),(n!==this.options.diffStyle||t!==this.options.overflow||i!==this.options.collapsed)&&(this.heightCache.clear(),this.computeApproximateSize(),this.renderRange=void 0),this.virtualizer.instanceChanged(this)}reconcileHeights(){const{overflow:e="scroll"}=this.options;if(this.fileContainer!=null&&(this.top=this.virtualizer.getOffsetInScrollContainer(this.fileContainer)),this.fileContainer==null||this.fileDiff==null){this.height=0;return}if(e==="scroll"&&this.lineAnnotations.length===0&&!this.virtualizer.config.resizeDebugging)return;const n=this.getDiffStyle();let t=!1;const i=n==="split"?[this.codeDeletions,this.codeAdditions]:[this.codeUnified];for(const r of i){if(r==null)continue;const o=r.children[1];if(o instanceof HTMLElement)for(const a of o.children){if(!(a instanceof HTMLElement))continue;const l=a.dataset.lineIndex;if(l==null)continue;const s=Pr(l,n);let d=a.getBoundingClientRect().height,f=!1;a.nextElementSibling instanceof HTMLElement&&("lineAnnotation"in a.nextElementSibling.dataset||"noNewline"in a.nextElementSibling.dataset)&&("noNewline"in a.nextElementSibling.dataset&&(f=!0),d+=a.nextElementSibling.getBoundingClientRect().height);const c=this.getLineHeight(s,f);d!==c&&(t=!0,d===this.metrics.lineHeight*(f?2:1)?this.heightCache.delete(s):this.heightCache.set(s,d))}}(t||this.virtualizer.config.resizeDebugging)&&this.computeApproximateSize()}onRender=e=>this.fileContainer==null?!1:(e&&(this.top=this.virtualizer.getOffsetInScrollContainer(this.fileContainer)),this.render());cleanUp(){this.fileContainer!=null&&this.virtualizer.disconnect(this.fileContainer),super.cleanUp()}expandHunk=(e,n,t)=>{this.hunksRenderer.expandHunk(e,n,t),this.computeApproximateSize(),this.renderRange=void 0,this.virtualizer.instanceChanged(this)};setVisibility(e){this.fileContainer!=null&&(this.renderRange=void 0,e&&!this.isVisible?(this.top=this.virtualizer.getOffsetInScrollContainer(this.fileContainer),this.isVisible=!0):!e&&this.isVisible&&(this.isVisible=!1,this.rerender()))}computeApproximateSize(){const e=this.height===0;if(this.height=0,this.fileDiff==null)return;const{disableFileHeader:n=!1,expandUnchanged:t=!1,collapsed:i=!1,collapsedContextThreshold:r=ce,hunkSeparators:o="line-info"}=this.options,{diffHeaderHeight:a,fileGap:l,hunkSeparatorHeight:s}=this.metrics,d=this.getDiffStyle(),f=o!=="simple"&&o!=="metadata"&&o!=="line-info-basic"?l:0;if(n?o!=="simple"&&o!=="metadata"&&(this.height+=l):this.height+=a,!i&&(He({diff:this.fileDiff,diffStyle:d,expandedHunks:t?!0:this.hunksRenderer.getExpandedHunksMap(),collapsedContextThreshold:r,callback:({hunkIndex:c,collapsedBefore:h,collapsedAfter:u,deletionLine:p,additionLine:v})=>{const k=v!=null?v.splitLineIndex:p.splitLineIndex,S=v!=null?v.unifiedLineIndex:p.unifiedLineIndex,m=(v?.noEOFCR??!1)||(p?.noEOFCR??!1);h>0&&(c>0&&(this.height+=f),this.height+=s+f),this.height+=this.getLineHeight(d==="split"?k:S,m),u>0&&o!=="simple"&&(this.height+=f+s)}}),this.fileDiff.hunks.length>0&&(this.height+=l),this.fileContainer!=null&&this.virtualizer.config.resizeDebugging&&!e)){const c=this.fileContainer.getBoundingClientRect();c.height!==this.height?console.log("VirtualizedFileDiff.computeApproximateSize: computed height doesnt match",{name:this.fileDiff.name,elementHeight:c.height,computedHeight:this.height}):console.log("VirtualizedFileDiff.computeApproximateSize: computed height IS CORRECT")}}render({fileContainer:e,oldFile:n,newFile:t,fileDiff:i,...r}={}){const o=this.fileContainer==null;if(this.fileDiff??=i??(n!=null&&t!=null?De(n,t,this.options.parseDiffOptions):void 0),e=this.getOrCreateFileContainer(e),this.fileDiff==null)return console.error("VirtualizedFileDiff.render: attempting to virtually render when we dont have the correct data"),!1;if(o?(this.computeApproximateSize(),this.virtualizer.connect(e,this),this.top??=this.virtualizer.getOffsetInScrollContainer(e),this.isVisible=this.virtualizer.isInstanceVisible(this.top,this.height)):this.top??=this.virtualizer.getOffsetInScrollContainer(e),!this.isVisible)return this.renderPlaceholder(this.height);const a=this.virtualizer.getWindowSpecs(),l=this.computeRenderRangeFromWindow(this.fileDiff,this.top,a);return super.render({fileDiff:this.fileDiff,fileContainer:e,renderRange:l,oldFile:n,newFile:t,...r})}getDiffStyle(){return this.options.diffStyle??"split"}getExpandedRegion(e,n,t){if(t<=0||e)return{fromStart:0,fromEnd:0,collapsedLines:Math.max(t,0),renderAll:!1};const{expandUnchanged:i=!1,collapsedContextThreshold:r=ce}=this.options;if(i||t<=r)return{fromStart:t,fromEnd:0,collapsedLines:0,renderAll:!0};const o=this.hunksRenderer.getExpandedHunk(n),a=Math.min(Math.max(o.fromStart,0),t),l=Math.min(Math.max(o.fromEnd,0),t),s=a+l,d=s>=t;return{fromStart:a,fromEnd:l,collapsedLines:Math.max(t-s,0),renderAll:d}}getExpandedLineCount(e,n){let t=0;if(e.isPartial){for(const r of e.hunks)t+=n==="split"?r.splitLineCount:r.unifiedLineCount;return t}for(const[r,o]of e.hunks.entries()){const a=n==="split"?o.splitLineCount:o.unifiedLineCount;t+=a;const l=Math.max(o.collapsedBefore,0),{fromStart:s,fromEnd:d,renderAll:f}=this.getExpandedRegion(e.isPartial,r,l);l>0&&(t+=f?l:s+d)}const i=e.hunks.at(-1);if(i!=null&&Rr(e)){const r=e.additionLines.length-(i.additionLineIndex+i.additionCount),o=e.deletionLines.length-(i.deletionLineIndex+i.deletionCount);if(i!=null&&r!==o)throw new Error(`VirtualizedFileDiff: trailing context mismatch (additions=${r}, deletions=${o}) for ${e.name}`);const a=Math.min(r,o);if(i!=null&&a>0){const{fromStart:l,renderAll:s}=this.getExpandedRegion(e.isPartial,e.hunks.length,a);t+=s?a:l}}return t}computeRenderRangeFromWindow(e,n,{top:t,bottom:i}){const{disableFileHeader:r=!1,expandUnchanged:o=!1,collapsedContextThreshold:a=ce,hunkSeparators:l="line-info"}=this.options,{diffHeaderHeight:s,fileGap:d,hunkLineCount:f,hunkSeparatorHeight:c,lineHeight:h}=this.metrics,u=this.getDiffStyle(),p=this.height,v=this.getExpandedLineCount(e,u),k=r?d:s;if(n<t-p||n>i)return{startingLine:0,totalLines:0,bufferBefore:0,bufferAfter:p-k-d};if(v<=f||e.hunks.length===0)return{startingLine:0,totalLines:f,bufferBefore:0,bufferAfter:0};const S=Math.ceil(Math.max(i-t,0)/h),m=Math.ceil(S/f)*f+f,b=m/f,y=b,C=[],g=(t+i)/2,x=l==="simple"||l==="metadata"||l==="line-info-basic"?0:d;let w=n+k,L=0,E,I,M;if(He({diff:e,diffStyle:u,expandedHunks:o?!0:this.hunksRenderer.getExpandedHunksMap(),collapsedContextThreshold:a,callback:({hunkIndex:le,collapsedBefore:pe,collapsedAfter:ke,deletionLine:oe,additionLine:Z})=>{const D=Z!=null?Z.splitLineIndex:oe.splitLineIndex,$=Z!=null?Z.unifiedLineIndex:oe.unifiedLineIndex,B=(Z?.noEOFCR??!1)||(oe?.noEOFCR??!1);let ee=pe>0?c+x+(le>0?x:0):0;le===0&&l==="simple"&&(ee=0),w+=ee;const W=L%f===0;if(W&&(C.push(w-(n+k+ee)),M!=null)){if(M<=0)return!0;M--}const j=this.getLineHeight(u==="split"?D:$,B),me=Math.floor(L/f);return w>t-j&&w<i&&(E??=me),I==null&&w+j>g&&(I=me),M==null&&w>=i&&W&&(M=y),L++,w+=j,ke>0&&l!=="simple"&&(w+=c+x),!1}}),E==null)return{startingLine:0,totalLines:0,bufferBefore:0,bufferAfter:p-k-d};const R=C.length;I??=E;const _=Math.round(I-b/2),ae=Math.max(0,R-b),ie=Math.max(0,Math.min(_,ae)),H=ie*f,N=_<0?m+_*f:m,U=C[ie]??0,re=ie+N/f;return{startingLine:H,totalLines:N,bufferBefore:U,bufferAfter:re<C.length?p-k-C[re]-d:p-(w-n)-d}}};function Rr(e){const n=e.hunks.at(-1);return n==null||e.isPartial||e.additionLines.length===0||e.deletionLines.length===0?!1:n.additionLineIndex+n.additionCount<e.additionLines.length||n.deletionLineIndex+n.deletionCount<e.deletionLines.length}function Pr(e,n){const[t,i]=e.split(",").map(Number);return n==="split"?i:t}const Hr=typeof window>"u"?P.useEffect:P.useLayoutEffect;function at({fileDiff:e,options:n,lineAnnotations:t,selectedLines:i,prerenderedHTML:r,metrics:o,hasGutterRenderUtility:a,hasCustomHeader:l,disableWorkerPool:s}){const d=Lt(),f=P.useContext(Ii),c=P.useRef(null),h=Mi(u=>{if(u!=null){if(c.current!=null)throw new Error("useFileDiffInstance: An instance should not already exist when a node is created");d!=null?c.current=new Mr(Je({hasCustomHeader:l,hasGutterRenderUtility:a,options:n}),d,o,s?void 0:f,!0):c.current=new st(Je({hasCustomHeader:l,hasGutterRenderUtility:a,options:n}),s?void 0:f,!0),c.current.hydrate({fileDiff:e,fileContainer:u,lineAnnotations:t,prerenderedHTML:r})}else{if(c.current==null)throw new Error("useFileDiffInstance: A FileDiff instance should exist when unmounting");c.current.cleanUp(),c.current=null}});return Hr(()=>{const{current:u}=c;if(u==null)return;const p=Je({hasCustomHeader:l,hasGutterRenderUtility:a,options:n}),v=!dr(u.options,p);u.setOptions(p),u.render({forceRender:v,fileDiff:e,lineAnnotations:t}),i!==void 0&&u.setSelectedLines(i)}),{ref:h,getHoveredLine:P.useCallback(()=>c.current?.getHoveredLine(),[])}}function Je({options:e,hasCustomHeader:n,hasGutterRenderUtility:t}){return t||n?{...e,renderCustomHeader:n?hn:void 0,renderGutterUtility:t?hn:void 0}:e}function Dr({oldFile:e,newFile:n,options:t,metrics:i,lineAnnotations:r,selectedLines:o,className:a,style:l,prerenderedHTML:s,renderAnnotation:d,renderCustomHeader:f,renderHeaderPrefix:c,renderHeaderMetadata:h,renderGutterUtility:u,renderHoverUtility:p,disableWorkerPool:v=!1}){const k=P.useMemo(()=>De(e,n,t?.parseDiffOptions),[e,n,t?.parseDiffOptions]),{ref:S,getHoveredLine:m}=at({fileDiff:k,options:t,metrics:i,lineAnnotations:r,selectedLines:o,prerenderedHTML:s,hasGutterRenderUtility:u!=null||p!=null,hasCustomHeader:f!=null,disableWorkerPool:v});return T.jsx(ve,{ref:S,className:a,style:l,children:Kn(rt({fileDiff:k,renderCustomHeader:f,renderHeaderPrefix:c,renderHeaderMetadata:h,renderAnnotation:d,lineAnnotations:r,renderGutterUtility:u,renderHoverUtility:p,getHoveredLine:m}),s)})}function Nr(e){const n=Lr(e);if(n.length!==1)throw console.error(n),new Error("PatchDiff: Provided patch must include only 1 patch, with 1 diff");const{files:t}=n[0];if(t.length!==1)throw console.error(t),new Error("FileDiff: Provided patch must contain exactly 1 file diff");return t[0]}function Ur({patch:e,options:n,metrics:t,lineAnnotations:i,selectedLines:r,className:o,style:a,prerenderedHTML:l,renderAnnotation:s,renderCustomHeader:d,renderHeaderPrefix:f,renderHeaderMetadata:c,renderGutterUtility:h,renderHoverUtility:u,disableWorkerPool:p=!1}){const v=Or(e),{ref:k,getHoveredLine:S}=at({fileDiff:v,options:n,metrics:t,lineAnnotations:i,selectedLines:r,prerenderedHTML:l,hasGutterRenderUtility:h!=null||u!=null,hasCustomHeader:d!=null,disableWorkerPool:p});return T.jsx(ve,{ref:k,className:o,style:a,children:Kn(rt({fileDiff:v,renderCustomHeader:d,renderHeaderPrefix:f,renderHeaderMetadata:c,renderAnnotation:s,lineAnnotations:i,renderGutterUtility:h,renderHoverUtility:u,getHoveredLine:S}),l)})}function Or(e){return P.useMemo(()=>Nr(e),[e])}const zr=(e,n)=>{const t=e.split(`
`),i=n.split(`
`),r=new Set(t),o=new Set(i);let a=0,l=0;for(const s of t)o.has(s)||a++;for(const s of i)r.has(s)||l++;return{additions:l,deletions:a}},Fr=P.memo(({oldContent:e,newContent:n,language:t,fileName:i,viewMode:r="split",showHeader:o=!0,variant:a="filled",className:l,classNames:s,styles:d,actionsRender:f,diffOptions:c,...h})=>{const u=P.useMemo(()=>i||t||"diff",[i,t]),{additions:p,deletions:v}=P.useMemo(()=>zr(e,n),[e,n]),k=P.useMemo(()=>f?f({newContent:n,oldContent:e,originalNode:null}):null,[f,e,n]),S=P.useMemo(()=>({contents:e,lang:t,name:i||"file"}),[e,t,i]),m=P.useMemo(()=>({contents:n,lang:t,name:i||"file"}),[n,t,i]),b=P.useMemo(()=>({diffStyle:r,disableFileHeader:!0,...c}),[r,c]);return T.jsxs(Y,{className:Q(Wn({variant:a}),l),"data-code-type":"code-diff",...h,children:[o&&T.jsxs("div",{className:Q(Gn({variant:a}),s?.header),style:d?.header,children:[T.jsxs(Y,{horizontal:!0,align:"center",gap:8,children:[T.jsx(jn,{filename:i||u,size:18,type:"file"}),T.jsx("span",{children:u})]}),T.jsxs(Y,{horizontal:!0,align:"center",gap:8,children:[(v>0||p>0)&&T.jsxs(Y,{horizontal:!0,className:F.stats,gap:8,children:[v>0&&T.jsxs("span",{className:F.deletions,children:["-",v]}),p>0&&T.jsxs("span",{className:F.additions,children:["+",p]})]}),k&&T.jsx(Y,{align:"center",className:Q("lobe-code-diff-actions",F.actions),gap:4,children:k})]})]}),T.jsx("div",{className:Q(F.body,s?.body),style:d?.body,children:T.jsx(Dr,{newFile:m,oldFile:S,options:b})})]})});Fr.displayName="CodeDiff";const _r=e=>{const n=e.split(`
`);let t=0,i=0;for(const r of n)r.startsWith("+")&&!r.startsWith("+++")?t++:r.startsWith("-")&&!r.startsWith("---")&&i++;return{additions:t,deletions:i}},$r=P.memo(({patch:e,language:n,fileName:t,viewMode:i="split",showHeader:r=!0,variant:o="filled",className:a,classNames:l,styles:s,actionsRender:d,diffOptions:f,...c})=>{const h=P.useMemo(()=>{if(t)return t;const S=e.match(/^(?:-{3}|\+{3})\s+(?:a\/|b\/)?(.+?)(?:\t|$)/m);return S?.[1]?S[1]:n||"patch"},[t,e,n]),{additions:u,deletions:p}=P.useMemo(()=>_r(e),[e]),v=P.useMemo(()=>d?d({originalNode:null,patch:e}):null,[d,e]),k=P.useMemo(()=>({diffStyle:i,disableFileHeader:!0,...f}),[i,f]);return T.jsxs(Y,{className:Q(Wn({variant:o}),a),"data-code-type":"patch-diff",...c,children:[r&&T.jsxs("div",{className:Q(Gn({variant:o}),l?.header),style:s?.header,children:[T.jsxs(Y,{horizontal:!0,align:"center",gap:8,children:[T.jsx(jn,{filename:t||h,size:18,type:"file"}),T.jsx("span",{children:h})]}),T.jsxs(Y,{horizontal:!0,align:"center",gap:8,children:[(p>0||u>0)&&T.jsxs(Y,{horizontal:!0,className:F.stats,gap:8,children:[p>0&&T.jsxs("span",{className:F.deletions,children:["-",p]}),u>0&&T.jsxs("span",{className:F.additions,children:["+",u]})]}),v&&T.jsx(Y,{align:"center",className:Q("lobe-code-diff-actions",F.actions),gap:4,children:v})]})]}),T.jsx("div",{className:Q(F.body,l?.body),style:s?.body,children:T.jsx(Ur,{options:k,patch:e})})]})});$r.displayName="PatchDiff";export{Fr as C,$r as P};
