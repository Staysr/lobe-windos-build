import{j as g,c5 as i,c9 as f,F as x,ch as m,ci as v,m as S}from"./index-BmW5CTHd.js";import{S as j}from"./Spotlight-B8XIfx08.js";import{j as a}from"../vendor/vendor-motion-DRC1LdIk.js";const t=g(({css:e,cssVar:r})=>({borderless:i.variantBorderlessWithoutHover,filled:i.variantFilledWithoutHover,hightlight:e`
      overflow: auto hidden;
      flex: 1;
      height: 100%;
      padding: 0;

      pre {
        display: flex;
        align-items: center;
        height: 100%;
      }
    `,outlined:i.variantOutlinedWithoutHover,root:e`
      position: relative;

      overflow: hidden;

      max-width: 100%;
      height: 38px;
      padding-block: 0;
      padding-inline: 12px 8px;
      border-radius: ${r.borderRadius};
    `,shadow:i.shadow})),w=f(t.root,{defaultVariants:{shadow:!1,variant:"filled"},variants:{variant:{filled:t.filled,outlined:t.outlined,borderless:t.borderless},shadow:{false:null,true:t.shadow}}}),y=({ref:e,prefix:r,language:s="tsx",children:o,copyable:d=!0,variant:n="filled",spotlight:h,shadow:p,className:c,...u})=>{const l=o.trim();return a.jsxs(x,{horizontal:!0,align:"center",className:S(w({shadow:p,variant:n}),c),"data-code-type":"highlighter",gap:8,ref:e,...u,children:[h&&a.jsx(j,{}),a.jsx(m,{className:t.hightlight,language:s,children:[r,l].filter(Boolean).join(" ")}),d&&a.jsx(v,{content:l,size:"small"})]})};y.displayName="Snippet";export{y as S};
