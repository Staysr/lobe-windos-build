import{j as o}from"../vendor/vendor-motion-siEo8VfX.js";import{G as y}from"./Grid-C06UCg1E.js";import{k as f,C as b,f as k,cQ as d,n as w,F as n,L as p,cS as m,W as h,o as x,a9 as P,j as $}from"./index-C275yc7e.js";import{r as a}from"../vendor/vendor-emotion-B6qZrIr4.js";import{E as z}from"./Empty-BmPp2xKS.js";import{k as C,m as T}from"../vendor/vendor-icons-CwKawJ1k.js";import{M as E}from"./MaskShadow-B6av88LP.js";import{P as S}from"./index-BZrwVzrW.js";import{I as B}from"./index-BQC4K4Xn.js";import{M as D}from"./index-BoesHytK.js";const g=a.memo(({search:e,...r})=>{const{t}=f("discover");return o.jsx(b,{height:"100%",style:{minHeight:"50vh"},width:"100%",children:o.jsx(z,{description:t(e?"providers.empty.search":"providers.empty.description"),icon:C,title:e?void 0:t("providers.empty.title"),type:e?"default":"page",descriptionProps:{fontSize:14},style:{maxWidth:400},...r})})});g.displayName="ProviderEmpty";const l=$(({css:e,cssVar:r})=>({author:e`
      color: ${r.colorTextDescription};
    `,code:e`
      font-family: ${r.fontFamilyCode};
    `,desc:e`
      flex: none;
      margin: 0 !important;
      color: ${r.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${r.colorBorder};
      background: ${r.colorBgContainer};
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${r.colorTextDescription};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${r.colorLink};
      }
    `})),I=a.memo(({url:e,name:r,description:t,identifier:i,models:j})=>{const v=k(),c=d("/community/provider",i),{t:u}=f(["discover","providers"]);return o.jsxs(w,{clickable:!0,"data-testid":"provider-item",height:"100%",variant:"outlined",width:"100%",style:{overflow:"hidden",position:"relative"},onClick:()=>{v(c)},children:[o.jsxs(n,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:[o.jsxs(n,{title:i,style:{overflow:"hidden"},children:[o.jsx(p,{style:{color:"inherit",overflow:"hidden"},to:c,children:o.jsx(S,{provider:i,size:28,style:{flex:"none"}})}),o.jsxs("div",{className:l.author,children:["@",r]})]}),o.jsxs(n,{horizontal:!0,align:"center",children:[o.jsx("a",{href:e,rel:"noopener noreferrer",target:"_blank",onClick:m,children:o.jsx(h,{color:x.colorTextDescription,icon:T})}),o.jsx("a",{href:`https://github.com/lobehub/lobe-chat/blob/main/src/config/modelProviders/${i}.ts`,rel:"noopener noreferrer",target:"_blank",onClick:m,children:o.jsx(h,{fill:x.colorTextDescription,icon:B})})]})]}),o.jsx(n,{flex:1,gap:12,paddingInline:16,children:t&&o.jsx(P,{className:l.desc,ellipsis:{rows:3},children:u(`${i}.description`,{ns:"providers"})})}),o.jsx(n,{horizontal:!0,align:"center",className:l.footer,justify:"space-between",padding:16,children:o.jsx(E,{horizontal:!0,gap:6,position:"right",size:10,width:"100%",children:j.slice(0,6).filter(Boolean).map(s=>o.jsx(p,{to:d("/model",s),children:o.jsx(D,{model:s,style:{margin:0}})},s))})})]})}),Q=a.memo(({data:e=[],rows:r=3})=>e.length===0?o.jsx(g,{}):o.jsx(y,{rows:r,width:"100%",children:e.map((t,i)=>o.jsx(I,{...t},i))}));export{Q as P};
