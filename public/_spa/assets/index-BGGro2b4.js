import{j as e}from"../vendor/vendor-motion-BIhyHZ0p.js";import{g as m,d as v,c as u,F as t,Z as y,j as b,f,bA as w,aw as k,v as C,B as S,C as B}from"./index-Rjxk4g_I.js";import{S as $}from"./Segmented-D6pf-TyY.js";import{r as d}from"../vendor/vendor-emotion-DdM-9MtU.js";import"./providerConfig-DjTKVWb5.js";import"../vendor/vendor-es-toolkit-DEdCfXFH.js";import{P as z}from"./index-C-MEpv0o.js";import{L,T as N}from"./LangButton-Bb0W2Xm6.js";import{D}from"./index-Bc5NIMk0.js";const h=f(({css:n,cssVar:o})=>({anchor:n`
    position: fixed;
    z-index: 10;
    inset-block-end: 24px;
    inset-inline-end: 24px;

    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
  `,anchorWithLabel:n`
    align-items: stretch;
  `,pill:n`
    display: flex;
    flex-flow: row wrap;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;

    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid color-mix(in srgb, ${o.colorBorderSecondary} 60%, transparent);
    border-radius: 999px;

    background: color-mix(in srgb, ${o.colorBgElevated} 75%, transparent);
    backdrop-filter: blur(16px) saturate(1.2);
    box-shadow: ${o.boxShadowSecondary};
  `})),M=d.memo(({actions:n,className:o,showLabel:a=!1,style:c})=>{const{t:i}=m("onboarding"),r=v(),g=u(),p=d.useMemo(()=>r.pathname.startsWith("/onboarding/agent")?"agent":"classic",[r.pathname]),x=d.useMemo(()=>[],[i]),s=x.length>0?e.jsx($,{options:x,size:"small",value:p,onChange:j=>{g(j==="agent"?"/onboarding/agent":"/onboarding/classic")}}):null;return!s&&!n?null:e.jsxs(t,{className:b(h.anchor,a&&h.anchorWithLabel,o),style:c,children:[a&&s&&e.jsx(y,{style:{paddingInline:4},type:"secondary",children:i("agent.modeSwitch.label")}),n?e.jsxs("div",{className:h.pill,children:[n,s]}):s]})});M.displayName="OnboardingModeSwitch";const l=f(({css:n,cssVar:o})=>({divider:n`
    height: 24px;
  `,innerContainerDark:n`
    position: relative;

    overflow: hidden auto;

    border: 1px solid ${o.colorBorderSecondary};
    border-radius: ${o.borderRadius};

    background: ${o.colorBgContainer};
  `,innerContainerLight:n`
    position: relative;

    overflow: hidden auto;

    border: 1px solid ${o.colorBorder};
    border-radius: ${o.borderRadius};

    background: ${o.colorBgContainer};
  `,outerContainer:n`
    position: relative;
  `})),A=({children:n})=>{const o=w(),a=k(),{t:c}=m("onboarding"),i=u(),r=C(p=>p.finishOnboarding),g=d.useCallback(()=>{r(),i("/")},[r,i]);return e.jsx(t,{className:l.outerContainer,height:"100%",padding:8,width:"100%",children:e.jsxs(t,{className:b(o?l.innerContainerDark:l.innerContainerLight),height:"100%",width:"100%",children:[e.jsxs(t,{horizontal:!0,align:"center",gap:8,justify:"space-between",padding:16,width:"100%",children:[e.jsx(z,{color:a.colorText,size:28,type:"text"}),e.jsxs(t,{horizontal:!0,align:"center",gap:16,children:[e.jsxs(t,{horizontal:!0,align:"center",children:[e.jsx(L,{placement:"bottomRight",size:18}),e.jsx(D,{className:l.divider,orientation:"vertical"}),e.jsx(N,{placement:"bottomRight",size:18})]}),e.jsx(S,{size:"small",type:"text",onClick:g,children:c("agent.skipOnboarding")})]})]}),e.jsx(B,{height:"100%",width:"100%",children:n})]})})};export{M,A as O};
