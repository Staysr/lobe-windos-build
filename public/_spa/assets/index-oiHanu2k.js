import{j as t}from"../vendor/vendor-motion-DRC1LdIk.js";import{u as d,s as x,F as a,S,m as u,i as f,j as p,o as w}from"./index-BmW5CTHd.js";import{r}from"../vendor/vendor-emotion-D2wYcXAj.js";const E=p(({css:s})=>({container:s`
    flex-grow: 1;
    align-self: center;
    transition: width 0.25s ${w.motionEaseInOut};
  `})),y=r.memo(({children:s,className:i,onChange:n,wrapperStyle:o,onClick:c,minWidth:l,...m})=>{const e=d(x.wideScreen);return r.useEffect(()=>{n?.()},[e]),t.jsx(a,{style:o,width:"100%",onClick:c,children:t.jsx(a,{className:u(E.container,i),paddingInline:16,width:e?"100%":`min(${l||S}px, 100%)`,...m,children:s})})},f);export{y as W};
