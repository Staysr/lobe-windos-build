import{j as G,as as w,n as M,m as v,F as B,a8 as N}from"./index-BmW5CTHd.js";import{j as a}from"../vendor/vendor-motion-DRC1LdIk.js";import{bB as P,bc as I}from"../vendor/vendor-icons-Bjz-9Gdp.js";const y=G(({css:o,cssVar:r})=>({checked:o`
      border-color: ${r.colorPrimary};
      color: ${r.colorBgLayout};
      background-color: ${r.colorPrimary};
    `,disabled:o`
      cursor: not-allowed;

      border-color: ${r.colorFill};

      color: ${r.colorText};

      opacity: 0.25;
      background-color: ${r.colorFill};
    `,indeterminate:o`
      border-color: ${r.colorPrimary};
      color: ${r.colorBgLayout};
      background-color: ${r.colorPrimary};
    `,root:o`
      cursor: pointer;
      display: inline-flex;
    `})),g=({checked:o,defaultChecked:r,onChange:p,size:l=16,className:b,style:k,children:d,textProps:x,backgroundColor:n,classNames:t,styles:s,shape:i="square",disabled:c,indeterminate:e,...u})=>{const[h,q]=w(r||!1,{defaultValue:r,onChange:p,value:o}),$={borderRadius:i==="square"?`max(4px, ${Math.round(l/4)}px)`:"50%",...k,...s?.checkbox},C=F=>{c||(F?.preventDefault(),q(!h))},m=e,f=!m&&h,j=a.jsx(M,{align:"center",flex:"none",height:l,justify:"center",variant:"outlined",width:l,className:v(y.root,f&&y.checked,m&&y.indeterminate,c&&y.disabled,b,t?.checkbox),style:n&&(f||m)?{backgroundColor:n,borderColor:n,...$}:{...$},onClick:C,...u,children:m?a.jsx(P,{size:l,strokeWidth:3,style:{transform:`scale(${i==="square"?.75:.66})`}}):f?a.jsx(I,{size:l,strokeWidth:3,style:{transform:`scale(${i==="square"?.75:.66})`}}):null});return d?a.jsxs(B,{horizontal:!0,align:"center",className:t?.wrapper,gap:Math.floor(l/2),style:{cursor:c?"not-allowed":"pointer",userSelect:"none",...s?.wrapper},onClick:C,children:[j,a.jsx(N,{as:"span",className:v(t?.text),style:s?.text,...x,type:c?"secondary":x?.type,children:d})]}):j};g.displayName="Checkbox";const S=({defaultValue:o,disabled:r,onChange:p,options:l,textProps:b,value:k,shape:d,size:x,...n})=>{const[t,s]=w(o||[],{defaultValue:o,onChange:p,value:k}),i=(e,u)=>{s(u?[...t,e]:t.filter(h=>h!==e))},c=l.map(e=>typeof e=="string"?{disabled:!1,label:e,value:e}:e);return a.jsx(B,{horizontal:!0,align:"center",gap:16,wrap:"wrap",...n,children:c.map(e=>a.jsx(g,{checked:t.includes(e.value),disabled:r||e.disabled,shape:d,size:x,textProps:b,onChange:u=>i(e.value,u),children:e.label},String(e.value)))})};S.displayName="CheckboxGroup";const L=g;L.Group=S;export{L as C,S as a};
