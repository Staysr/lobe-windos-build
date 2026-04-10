import{j as b,m as l,c8 as u,at as T,F as c,cA as $,I as A}from"./index-C275yc7e.js";import{r as f}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as o}from"../vendor/vendor-motion-siEo8VfX.js";const t=b(({css:a,cssVar:r})=>({active:a`
      color: ${r.colorText};
    `,container:a`
      cursor: pointer;
      color: ${r.colorTextDescription};
    `,img:l(u.variantFilled,a`
        border-radius: ${r.borderRadius};

        &:hover {
          box-shadow: 0 0 0 2px ${r.colorText};
        }
      `),imgActive:l(u.active,a`
        box-shadow: 0 0 0 2px ${r.colorTextTertiary};
      `)})),C=f.memo(({ref:a,className:r,style:m,value:p,defaultValue:i,onChange:g,options:v,width:s=144,height:n=86,styles:d,classNames:j,unoptimized:y,...h})=>{const[I,S]=T(i,{defaultValue:i,onChange:g,value:p});return o.jsx(c,{horizontal:!0,className:r,gap:16,ref:a,style:m,...h,children:v?.map(e=>{const x=e.value===I;return o.jsxs(c,{align:"center",className:l(t.container,x&&t.active),gap:4,onClick:()=>S(e.value),children:[o.jsx($,{alt:e.alt||e.value,className:l(t.img,x&&t.imgActive,j?.img),height:n,src:e.img,unoptimized:y,width:s,style:{...d?.img,height:n,width:s}}),o.jsxs(c,{horizontal:!0,align:"center",gap:4,children:[e.icon&&o.jsx(A,{icon:e.icon}),e.label]})]},e.value)})})});C.displayName="ImageSelect";export{C as I};
