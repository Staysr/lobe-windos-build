import{j as t}from"../vendor/vendor-motion-DRC1LdIk.js";import{m as u,I as a,L as x,F as o,j as y}from"./index-BBAuCJqA.js";import{r as R}from"../vendor/vendor-emotion-D2wYcXAj.js";import{R as c}from"../vendor/vendor-icons-C6hg4LnF.js";const l=y(({css:e,cssVar:i})=>({more:e`
    display: flex;
    align-items: center;
    color: ${i.colorTextSecondary};
  `,title:e`
    margin-block: 0.2em;
    font-weight: bold;
    line-height: 1.5;
  `,title2:e`
    font-size: 18px;
  `,title3:e`
    font-size: 16px;
  `})),w=R.memo(({id:e,tag:i,children:p,moreLink:s,more:n,level:f=2,icon:h,...j})=>{const m=t.jsx("h2",{className:u(l.title,l[`title${f}`]),id:e,children:p}),g=s?.startsWith("http")??!1,d=s?.startsWith("/community")??!1;let r=null;return s&&(g?r=t.jsxs("a",{className:l.more,href:s,rel:"noreferrer",target:"_blank",children:[t.jsx("span",{style:{marginRight:4},children:n}),t.jsx(a,{icon:c})]}):d?r=t.jsxs(x,{className:l.more,to:s,children:[t.jsx("span",{style:{marginRight:4},children:n}),t.jsx(a,{icon:c})]}):r=t.jsxs(x,{className:l.more,to:s,children:[t.jsx("span",{style:{marginRight:4},children:n}),t.jsx(a,{icon:c})]})),t.jsxs(o,{horizontal:!0,align:"center",gap:16,justify:"space-between",width:"100%",...j,children:[i||h?t.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[h,m,i&&t.jsx(o,{horizontal:!0,align:"center",gap:4,children:i})]}):m,r]})});export{w as T};
