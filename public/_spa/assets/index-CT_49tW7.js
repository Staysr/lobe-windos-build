const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TagCloudCanvas-CwKc4nxA.js","vendor/vendor-motion-DRC1LdIk.js","vendor/vendor-emotion-D2wYcXAj.js","assets/index-BmW5CTHd.js","i18n/i18n-zh-CN-CCQe7Zp1.js","i18n/i18n-en-US-vCwQO2Oi.js","vendor/vendor-es-toolkit-O0KSByiM.js","vendor/vendor-icons-Bjz-9Gdp.js","assets/providerConfig-DdZ8yyMi.js","assets/index-yzzpVuwK.css","assets/UserAvatar-Dipp6J8F.js","assets/index-CjltaXqJ.js","assets/index-CkimUepr.js","assets/index-BDQRU9sz.js","assets/store-CcJrED9P.js","assets/sync-D04MGNXw.js"])))=>i.map(i=>d[i]);
import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{j as c,b3 as a,F as p,m as d,a8 as h,n as f,W as g,X as y,bu as j,cl as x}from"./index-BmW5CTHd.js";import{N as b}from"./index-B8WzAnrV.js";import{W as T}from"./index-oiHanu2k.js";import{W as k}from"./WideScreenButton-Bp9w5DXQ.js";import{A as P,S as w,M as S,a as z}from"./useScrollParent-C4H4OiXQ.js";import{r as s}from"../vendor/vendor-emotion-D2wYcXAj.js";import"./index-CqKBrUST.js";import{M as _}from"./Markdown-X4PPeNQt.js";import{d as v}from"./dynamic-CZJOsxzt.js";import{c3 as A,c4 as F}from"../vendor/vendor-icons-Bjz-9Gdp.js";import"../i18n/i18n-zh-CN-CCQe7Zp1.js";import"../i18n/i18n-en-US-vCwQO2Oi.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"./providerConfig-DdZ8yyMi.js";import"./ToggleLeftPanelButton-n2P__uua.js";import"./asyncTask-Deq5sCIJ.js";import"./index-CkAlCAYH.js";import"./customParseFormat-tkY2bdQT.js";import"./Alert-kWnj0yg0.js";import"./AccordionItem-CEQe2Nmw.js";import"./index-Bg6jZEN_.js";import"./progress-BEDsdH5i.js";import"./Empty-6bLhRDuU.js";import"./Modal-BuUwDCT9.js";import"./Drawer-DADyiFum.js";import"./imperative-C_ueDA4v.js";import"./devSingleton-LXnNH-iO.js";import"./plugins-BXfArzQN.js";import"./ReferTopicNode-vdhG8Sn9.js";import"./index-BT3CRne0.js";import"./Snippet-CYdrOilV.js";import"./Spotlight-B8XIfx08.js";import"./useTranslation-ByWlna2-.js";import"./image-nnCaCTxV.js";import"./index-CuJQstT7.js";import"./index-BcdkYTCP.js";import"./index-BDQRU9sz.js";import"./index-BbuTwi74.js";import"./ScrollShadow-bnBh_g2B.js";import"./index-DPyfkdm-.js";const E=c(({css:o,cssVar:t})=>({markdown:o`
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
  `})),L=s.memo(({children:o})=>e.jsx(_,{className:E.markdown,enableImageGallery:!1,enableLatex:!1,children:o})),N=c(({css:o,cssVar:t})=>({summary:o`
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
  `})),M=s.memo(()=>e.jsx(h,{as:"h1",className:C.title,children:"Persona"})),B=v(()=>j(()=>import("./TagCloudCanvas-CwKc4nxA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),{loading:()=>e.jsx(x,{debugId:"TagCloud"}),ssr:!1}),m=c(({css:o})=>({fullscreen:o`
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
  `})),R=s.memo(({tags:o})=>{const[t,i]=s.useState(!1),[l,r]=s.useState(!1);return s.useEffect(()=>{r(!0),setTimeout(()=>{r(!1)},500)},[t]),o.length?e.jsxs(f,{variant:t?"borderless":"outlined",className:d(m.root,t&&m.fullscreen,l&&m.fullscreenAnimation),children:[e.jsx(g,{className:d("fullscreen-icon",m.icon),icon:t?A:F,size:y,onClick:()=>{i(!t)}}),e.jsx(B,{tags:o})]}):null}),_e=()=>{const o=a(n=>n.useFetchTags),t=a(n=>n.useFetchPersona),i=a(n=>n.roles),l=a(n=>n.persona),{isLoading:r}=o(),{isLoading:u}=t();return r||u?e.jsx(x,{debugId:"Home"}):e.jsxs(p,{flex:1,height:"100%",children:[e.jsx(b,{right:e.jsx(P,{showAnalysis:!0,showPurge:!0,children:e.jsx(k,{})}),style:{zIndex:1}}),e.jsx(p,{height:"100%",id:w,style:{overflowY:"auto",paddingBottom:"16vh"},width:"100%",children:e.jsxs(T,{gap:32,paddingBlock:48,children:[i?.length>0&&e.jsx(R,{tags:i}),l?e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(I,{})]}):!i?.length&&e.jsx(S,{children:e.jsx(z,{})})]})})]})};export{_e as default};
