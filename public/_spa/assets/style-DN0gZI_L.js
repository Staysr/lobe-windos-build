import{j as o}from"../vendor/vendor-motion-DRC1LdIk.js";import{C as c,m as l,j as f,o as j,F as i}from"./index-BBAuCJqA.js";import{A as g}from"./index-GNbd6Ibo.js";import{r as m}from"../vendor/vendor-emotion-D2wYcXAj.js";const n=f(({css:e,cssVar:r})=>({container:e`
    border: 1px solid ${r.colorSplit};
    border-radius: 8px;
    color: ${r.colorText};
    background: ${r.colorBgContainer};
  `,desc:e`
    color: ${r.colorTextTertiary};
    text-align: center;
  `,form:e`
    width: 100%;
    max-width: 360px;

    @media (width <= 768px) {
      max-width: 90%;
    }
  `})),y=m.memo(({children:e,className:r,gap:t=24,padding:a=24,...s})=>o.jsx(c,{className:l(n.container,r),gap:t,padding:a,...s,children:e}));m.memo(({children:e,background:r,title:t,description:a,avatar:s,animation:x,className:d,gap:p=16,...h})=>o.jsxs(c,{className:l(n.form,d),gap:p,...h,children:[o.jsx(g,{animation:x,avatar:s,background:r??j.colorFillContent,gap:12,shape:"square",size:80}),o.jsxs(i,{gap:8,width:"100%",children:[o.jsx(i,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:t}),o.jsx(i,{className:n.desc,children:a})]}),e]}));export{y as E};
