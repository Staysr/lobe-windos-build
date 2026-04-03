import{j as b,m as l,c5 as u,as as T,F as c,cx as $,I as f}from"./index-BmW5CTHd.js";import{r as A}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as o}from"../vendor/vendor-motion-DRC1LdIk.js";const t=b(({css:a,cssVar:r})=>({active:a`
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
      `)})),C=A.memo(({ref:a,className:r,style:m,value:p,defaultValue:s,onChange:g,options:v,width:i=144,height:n=86,styles:d,classNames:j,unoptimized:y,...h})=>{const[I,S]=T(s,{defaultValue:s,onChange:g,value:p});return o.jsx(c,{horizontal:!0,className:r,gap:16,ref:a,style:m,...h,children:v?.map(e=>{const x=e.value===I;return o.jsxs(c,{align:"center",className:l(t.container,x&&t.active),gap:4,onClick:()=>S(e.value),children:[o.jsx($,{alt:e.alt||e.value,className:l(t.img,x&&t.imgActive,j?.img),height:n,src:e.img,unoptimized:y,width:i,style:{...d?.img,height:n,width:i}}),o.jsxs(c,{horizontal:!0,align:"center",gap:4,children:[e.icon&&o.jsx(f,{icon:e.icon}),e.label]})]},e.value)})})});C.displayName="ImageSelect";export{C as I};
