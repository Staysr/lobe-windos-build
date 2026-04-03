import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{k as m,g as u,f as b,F as i,a8 as k,m as f,j,cL as v,aS as w,U as C,bU as S,B,C as $}from"./index-BmW5CTHd.js";import{S as z}from"./Segmented-CTznw3IS.js";import{r as g}from"../vendor/vendor-emotion-D2wYcXAj.js";import"./providerConfig-DdZ8yyMi.js";import{P as L}from"./index-DijTe1i2.js";import{L as N,T as O}from"./LangButton-DXnmyyBx.js";const x=j(({css:n,cssVar:o})=>({anchor:n`
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
  `})),M=g.memo(({actions:n,className:o,showLabel:r=!1,style:p})=>{const{t:s}=m("onboarding"),a=u(),l=b(),h=g.useMemo(()=>a.pathname.startsWith("/onboarding/agent")?"agent":"classic",[a.pathname]),d=g.useMemo(()=>[],[s]),t=d.length>0?e.jsx(z,{options:d,size:"small",value:h,onChange:y=>{l(y==="agent"?"/onboarding/agent":"/onboarding/classic")}}):null;return!t&&!n?null:e.jsxs(i,{className:f(x.anchor,r&&x.anchorWithLabel,o),style:p,children:[r&&t&&e.jsx(k,{style:{paddingInline:4},type:"secondary",children:s("agent.modeSwitch.label")}),n?e.jsxs("div",{className:x.pill,children:[n,t]}):t]})});M.displayName="OnboardingModeSwitch";const c=j(({css:n,cssVar:o})=>({divider:n`
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
  `})),I=({children:n})=>{const o=v(),r=w(),{t:p}=m("onboarding"),{pathname:s}=u(),a=b(),l=C(t=>t.finishOnboarding),h=s.startsWith("/onboarding/agent"),d=g.useCallback(()=>{l(),a("/")},[l,a]);return e.jsx(i,{className:c.outerContainer,height:"100%",padding:8,width:"100%",children:e.jsxs(i,{className:f(o?c.innerContainerDark:c.innerContainerLight),height:"100%",width:"100%",children:[e.jsxs(i,{horizontal:!0,align:"center",gap:8,justify:"space-between",padding:16,width:"100%",children:[e.jsx(L,{color:r.colorText,size:28,type:"text"}),e.jsxs(i,{horizontal:!0,align:"center",gap:16,children:[e.jsxs(i,{horizontal:!0,align:"center",children:[e.jsx(N,{placement:"bottomRight",size:18}),e.jsx(S,{className:c.divider,orientation:"vertical"}),e.jsx(O,{placement:"bottomRight",size:18})]}),h?e.jsx(B,{size:"small",type:"text",onClick:d,children:p("agent.skipOnboarding")}):null]})]}),e.jsx($,{height:"100%",width:"100%",children:n})]})})};export{M,I as O};
