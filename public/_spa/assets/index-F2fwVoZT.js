const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TagCloudCanvas-Cxs9RkD8.js","vendor/vendor-motion-siEo8VfX.js","vendor/vendor-emotion-B6qZrIr4.js","assets/index-C275yc7e.js","i18n/i18n-zh-CN-CcVu2is6.js","i18n/i18n-en-US-DqZ3IPP5.js","vendor/vendor-es-toolkit-CFMjQStz.js","vendor/vendor-icons-CwKawJ1k.js","assets/providerConfig-BNV0IvMA.js","assets/index-yzzpVuwK.css","assets/UserAvatar-DywKHwKc.js","assets/index-B1FRBCSR.js","assets/index-DvKkbDJI.js","assets/index-DOKgRZvR.js","assets/store-DbnW5vB3.js","assets/system-BqfmOcTp.js","assets/sync-B0NYe9St.js"])))=>i.map(i=>d[i]);
import{j as e}from"../vendor/vendor-motion-siEo8VfX.js";import{j as c,b4 as a,F as p,m as d,a9 as h,n as f,W as g,X as y,bv as j,co as x}from"./index-C275yc7e.js";import{N as b}from"./index-D7TA4XOS.js";import{W as T}from"./index-B3-ppRXj.js";import{W as k}from"./WideScreenButton-Cwd4yJ8w.js";import{A as P,S as w,M as S,a as v}from"./useScrollParent-CE4IOsQ_.js";import{r as s}from"../vendor/vendor-emotion-B6qZrIr4.js";import"./index-BhUUyIs3.js";import{M as z}from"./Markdown-DhgCm8T7.js";import{d as _}from"./dynamic-LwXV6Rk2.js";import{c2 as A,c3 as F}from"../vendor/vendor-icons-CwKawJ1k.js";import"../i18n/i18n-zh-CN-CcVu2is6.js";import"../i18n/i18n-en-US-DqZ3IPP5.js";import"../vendor/vendor-es-toolkit-CFMjQStz.js";import"./providerConfig-BNV0IvMA.js";import"./ToggleLeftPanelButton-DyE8aQL1.js";import"./asyncTask-Deq5sCIJ.js";import"./index-DrRVr6oe.js";import"./customParseFormat-9sD1DkgC.js";import"./Alert-D4ALX8IV.js";import"./AccordionItem-D6EDXJOr.js";import"./index-D_lV0lZy.js";import"./progress-ByKxxd6Z.js";import"./Empty-BmPp2xKS.js";import"./Modal-DH7Lw-FF.js";import"./Drawer-DJnu92Sk.js";import"./imperative-Be0QMTA5.js";import"./devSingleton-LXnNH-iO.js";import"./plugins-CXcCoU7R.js";import"./ReferTopicNode-CIKene_l.js";import"./index-DykGnXB3.js";import"./Snippet-Bioy9Xhp.js";import"./Spotlight-OeUDDJY8.js";import"./useTranslation-DXQttwfC.js";import"./image-nnCaCTxV.js";import"./index-CK7d1PZF.js";import"./index-BHwegkc5.js";import"./index-DOKgRZvR.js";import"./index-ClojSa7h.js";import"./ScrollShadow-jEogUgPT.js";import"./index-CAiMwnpS.js";const E=c(({css:o,cssVar:t})=>({markdown:o`
    h2 {
      margin-block: 24px 12px;
      font-size: 16px;
      font-weight: 600;
    }

    h3 {
      margin-block: 16px 8px;
      font-size: 14px;
      font-weight: 500;
    }

    p {
      margin-block-end: 8px;
      font-size: 14px;
      line-height: 1.6;
      color: ${t.colorTextSecondary};
    }

    ul {
      margin-block: 8px;
      margin-inline: 0;
      padding-inline-start: 20px;

      li {
        margin-block-end: 4px;
        font-size: 14px;
        line-height: 1.6;
        color: ${t.colorTextSecondary};
      }
    }

    strong {
      font-weight: 500;
      color: ${t.colorText};
    }
  `})),L=s.memo(({children:o})=>e.jsx(z,{className:E.markdown,enableImageGallery:!1,enableLatex:!1,children:o})),N=c(({css:o,cssVar:t})=>({summary:o`
    position: relative;

    padding-block: 16px;
    padding-inline: 20px;
    border-radius: 8px;

    font-size: 15px;
    font-style: italic;
    line-height: 1.6;
    color: ${t.colorText};

    background: ${t.colorFillQuaternary};

    &::before {
      content: '"';

      position: absolute;
      inset-block-start: 8px;
      inset-inline-start: 12px;

      font-family: Georgia, serif;
      font-size: 28px;
      font-style: normal;
      line-height: 1;
      color: ${t.colorTextQuaternary};
    }
  `})),$=s.memo(({children:o})=>e.jsx("div",{className:N.summary,children:o})),I=s.memo(({className:o})=>{const t=a(r=>r.useFetchPersona),i=a(r=>r.persona),{isLoading:l}=t();return l||!i?null:e.jsxs(p,{className:d(o),gap:24,children:[i.summary&&e.jsx($,{children:i.summary}),e.jsx(L,{children:i.content})]})}),C=c(({css:o,cssVar:t})=>({title:o`
    font-size: 28px;
    font-weight: 700;
    line-height: 1.4;
    color: ${t.colorText};
  `})),M=s.memo(()=>e.jsx(h,{as:"h1",className:C.title,children:"Persona"})),B=_(()=>j(()=>import("./TagCloudCanvas-Cxs9RkD8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),{loading:()=>e.jsx(x,{debugId:"TagCloud"}),ssr:!1}),m=c(({css:o})=>({fullscreen:o`
    position: absolute;
    z-index: 10;
    inset: 0;

    width: 100%;
    height: 100%;
    border-radius: 0;
  `,fullscreenAnimation:o`
    opacity: 0;
  `,icon:o`
    position: absolute;
    z-index: 10;
    inset-block-start: 6px;
    inset-inline-end: 6px;
  `,root:o`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 400px;

    .fullscreen-icon {
      opacity: 0;
    }

    &:hover {
      .fullscreen-icon {
        opacity: 1;
      }
    }
  `})),R=s.memo(({tags:o})=>{const[t,i]=s.useState(!1),[l,r]=s.useState(!1);return s.useEffect(()=>{r(!0),setTimeout(()=>{r(!1)},500)},[t]),o.length?e.jsxs(f,{variant:t?"borderless":"outlined",className:d(m.root,t&&m.fullscreen,l&&m.fullscreenAnimation),children:[e.jsx(g,{className:d("fullscreen-icon",m.icon),icon:t?A:F,size:y,onClick:()=>{i(!t)}}),e.jsx(B,{tags:o})]}):null}),ze=()=>{const o=a(n=>n.useFetchTags),t=a(n=>n.useFetchPersona),i=a(n=>n.roles),l=a(n=>n.persona),{isLoading:r}=o(),{isLoading:u}=t();return r||u?e.jsx(x,{debugId:"Home"}):e.jsxs(p,{flex:1,height:"100%",children:[e.jsx(b,{right:e.jsx(P,{showAnalysis:!0,showPurge:!0,children:e.jsx(k,{})}),style:{zIndex:1}}),e.jsx(p,{height:"100%",id:w,style:{overflowY:"auto",paddingBottom:"16vh"},width:"100%",children:e.jsxs(T,{gap:32,paddingBlock:48,children:[i?.length>0&&e.jsx(R,{tags:i}),l?e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(I,{})]}):!i?.length&&e.jsx(S,{children:e.jsx(v,{})})]})})]})};export{ze as default};
