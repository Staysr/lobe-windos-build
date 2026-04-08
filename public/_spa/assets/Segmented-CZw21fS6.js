import{cc as m,j as u,c8 as o,m as c}from"./index-BBAuCJqA.js";import{r as f}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as p}from"../vendor/vendor-motion-DRC1LdIk.js";import{S as g}from"./index-Dx5EGCFK.js";const e=u(({css:r,cssVar:a})=>({borderless:o.variantBorderlessWithoutHover,filled:r`
      border: 1px solid ${a.colorFillQuaternary};
      background: ${a.colorBgLayout};
    `,glass:o.blur,outlined:r`
      border: 1px solid ${a.colorBorderSecondary};
      background: transparent;
    `,root:r``,shadow:o.shadow})),S=m(e.root,{defaultVariants:{glass:!1,shadow:!1,variant:"filled"},variants:{variant:{filled:e.filled,outlined:e.outlined,borderless:e.borderless},glass:{false:null,true:e.glass},shadow:{false:null,true:e.shadow}}}),b=f.memo(({ref:r,padding:a,style:s,className:t,variant:l="filled",shadow:d,glass:i,...n})=>p.jsx(g,{className:c(S({glass:i,shadow:d,variant:l}),t),ref:r,style:{padding:a,...s},...n}));b.displayName="Segmented";export{b as S};
