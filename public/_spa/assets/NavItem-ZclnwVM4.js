import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{F as s,o as n,n as z,C as D,I,a8 as P,m as R,j as A}from"./index-BmW5CTHd.js";import{S as f}from"./index-B4WS8tzo.js";import{r as x}from"../vendor/vendor-emotion-D2wYcXAj.js";import{C as B}from"./ContextMenuTrigger-DJtrulER.js";import{N as E}from"./index-CxEmctft.js";import"./providerConfig-DdZ8yyMi.js";const _=x.memo(({padding:t=6,height:i=36,style:l,avatarSize:o=28,...a})=>e.jsxs(s,{horizontal:!0,align:"center",flex:1,gap:8,height:i,padding:t,style:l,...a,children:[e.jsx(f.Button,{size:"small",style:{borderRadius:n.borderRadius,height:o,maxHeight:o,maxWidth:o,minWidth:o}}),e.jsx(s,{flex:1,height:16,children:e.jsx(f.Button,{active:!0,block:!0,size:"small",style:{borderRadius:n.borderRadius,height:16,margin:0,maxHeight:16,opacity:.5,padding:0}})})]})),q=x.memo(({rows:t=3,...i})=>e.jsx(s,{gap:2,...i,children:Array.from({length:t}).map((l,o)=>e.jsx(_,{},o))})),L=t=>t.metaKey||t.ctrlKey,c="nav-item-actions",O=A(({css:t})=>({container:t`
    user-select: none;
    overflow: hidden;
    min-width: 32px;

    .${c} {
      width: 0;
      margin-inline-end: 2px;
      opacity: 0;
      transition: opacity 0.2s ${n.motionEaseOut};

      &:has([data-popup-open]) {
        width: unset;
        opacity: 1;
      }
    }

    &:hover {
      .${c} {
        width: unset;
        opacity: 1;
      }
    }
  `})),G=x.memo(({className:t,actions:i,contextMenuItems:l,active:o,href:a,icon:p,iconSize:d=18,title:g,onClick:j,disabled:h,loading:m,extra:y,slots:C,...k})=>{const w=o?n.colorText:n.colorTextDescription,N=o?n.colorText:n.colorTextSecondary,T=o?"filled":"borderless",{titlePrefix:b,iconPostfix:v}=C||{},S=a?{as:"a",href:a,style:{color:"inherit",textDecoration:"none"}}:{},u=e.jsxs(z,{horizontal:!0,align:"center",className:R(O.container,t),clickable:!h,gap:8,height:36,paddingInline:4,variant:T,onClick:r=>{a&&!L(r)&&r.preventDefault(),!(h||m)&&j?.(r)},...S,...k,children:[p&&e.jsx(D,{flex:"none",height:28,width:28,children:m?e.jsx(E,{size:d}):e.jsx(I,{color:w,icon:p,size:d})}),v,e.jsxs(s,{horizontal:!0,align:"center",flex:1,gap:8,style:{overflow:"hidden"},children:[b,e.jsx(P,{color:N,style:{flex:1},ellipsis:{tooltipWhenOverflow:!0},children:g}),e.jsxs(s,{horizontal:!0,align:"center",gap:2,justify:"flex-end",onClick:r=>{r.preventDefault(),r.stopPropagation()},children:[y,i&&e.jsx(s,{horizontal:!0,align:"center",className:c,gap:2,justify:"flex-end",onClick:r=>{r.preventDefault(),r.stopPropagation()},children:i})]})]})]});return l?e.jsx(B,{items:l,children:u}):u});export{G as N,q as S,_ as a,L as i};
