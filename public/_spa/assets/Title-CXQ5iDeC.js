import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{h as x,F as l,T as h,L as f,B as g,I as u,j as b,r as a}from"./index-BBAuCJqA.js";import{r as j}from"../vendor/vendor-emotion-D2wYcXAj.js";import{S as y}from"./const-lbjNOSiN.js";import{R}from"../vendor/vendor-icons-C6hg4LnF.js";const S="lobe-mobile-scroll-container",s=b(({css:t,cssVar:o})=>({more:t`
    display: flex;
    align-items: center;
    color: ${o.colorTextSecondary};
  `,tag:t`
    flex: none;

    padding-block: 0.1em;
    padding-inline: 0.3em;
    border-radius: ${o.borderRadius};

    font-size: 18px;
    font-weight: 500;
    color: ${o.colorTextSecondary};

    background: ${o.colorFillSecondary};
    ${a.sm} {
      font-size: 14px;
    }
  `,title:t`
    margin-block-start: 0.5em;
    font-size: 20px;
    font-weight: 600;
    ${a.sm} {
      font-size: 18px;
    }
  `})),N=j.memo(({tag:t,children:o,moreLink:r,more:c})=>{const{mobile:d}=x(),n=e.jsx("h2",{className:s.title,children:o}),m=()=>{if(!r)return;const p=d?S:y,i=document?.querySelector(`#${p}`);i&&i.scrollTo({behavior:"smooth",top:0})};return e.jsxs(l,{horizontal:!0,align:"center",gap:16,justify:"space-between",width:"100%",children:[t?e.jsxs(l,{horizontal:!0,align:"center",gap:8,children:[n,e.jsx(h,{className:s.tag,children:t})]}):n,r&&e.jsx(f,{target:r.startsWith("http")?"_blank":void 0,to:r,onClick:m,children:e.jsxs(g,{className:s.more,style:{paddingInline:6},type:"text",children:[e.jsx("span",{children:c}),e.jsx(u,{icon:R})]})})]})});export{N as T};
