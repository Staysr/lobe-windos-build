import{j as e}from"../vendor/vendor-motion-BIhyHZ0p.js";import{r as p}from"../vendor/vendor-emotion-DdM-9MtU.js";import{f as w,g as y,bA as P,F as i,j as v,k as z,T as h,Z as d,i as j}from"./index-Rjxk4g_I.js";import{G as g}from"./Grid-DXkVY7wb.js";import{u as m}from"./store-B6h011Xk.js";import{f as $}from"./providerConfig-DjTKVWb5.js";import{A as S}from"./index-tpJikB3z.js";import{S as L}from"./index-B3WrDdDP.js";import{I as A}from"./index-oQnFv3bh.js";import{P as D}from"./index-DuNOUNdY.js";import{P as C}from"./index-BNjJ2njY.js";import{D as E}from"./index-Bc5NIMk0.js";import{a as f}from"./selectors-N4GY2Mrw.js";import"../i18n/i18n-zh-CN-CO_PhvK1.js";import"../i18n/i18n-en-US-B1hbRPog.js";import"../vendor/vendor-es-toolkit-DEdCfXFH.js";import"../vendor/vendor-icons-B5XxavR9.js";import"./index-BaQQByfT.js";import"./currency-iJxIWo9y.js";import"./object-CksihGcT.js";import"./index-D3AbbKb4.js";import"./index-C4DxYo5Y.js";import"./index-E-558r2I.js";import"./Block-Bz_9WVCI.js";import"./index-C5sBZOXs.js";import"./providerConfig-DIE6dcl3.js";import"./ProviderIcon-C2ga4ty0.js";import"./index-DDKIJJmB.js";import"./useFillId-Dc6zFnxP.js";import"./index-N3n2SlTj.js";import"./index-Dhw_JmpP.js";import"./index-Ct7Fzj8O.js";import"./index-Bydyg3ga.js";import"./index-C8wnA_Oz.js";function I(){return null}const F=({id:r,Component:t,enabled:n})=>{const[l]=m(a=>[a.toggleProviderEnabled]);return t?e.jsx(t,{enabled:n,id:r}):e.jsx(A,{enabled:n,size:"small",onChange:async a=>{await l(r,a)}})},c=w(({css:r,cssVar:t})=>({bannerDark:r`
    opacity: 0.9;
  `,bannerLight:r`
    opacity: 0.4;
  `,containerDark:r`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${t.colorBgContainer};
    box-shadow: 0 0 1px 1px ${t.colorFillQuaternary} inset;

    transition: box-shadow 0.2s ${t.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${t.colorFillSecondary} inset;
    }
  `,containerLight:r`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${t.colorBgContainer};
    box-shadow: 0 0 1px 1px ${t.colorFillSecondary} inset;

    transition: box-shadow 0.2s ${t.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${t.colorFill} inset;
    }
  `,desc:r`
    min-height: 44px;
    margin-block-end: 0 !important;
    color: ${t.colorTextDescription};
  `,tagBlue:r`
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,tagGreen:r`
    color: ${t.green};
    background: ${t.green1};
  `,time:r`
    color: ${t.colorTextDescription};
  `,title:r`
    zoom: 1.2;
    margin-block-end: 0 !important;
    font-size: 18px !important;
    font-weight: bold;
  `,token:r`
    font-family: ${t.fontFamilyCode};
  `})),B=r=>r.endsWith("codingplan"),x=p.memo(({id:r,description:t,name:n,enabled:l,source:a,logo:s,loading:u,onProviderSelect:o})=>{const{t:k}=y("providers"),b=P();return u?e.jsx(i,{className:v(b?c.containerDark:c.containerLight),gap:24,padding:16,children:e.jsx(L,{active:!0})}):r===$?e.jsx(I,{}):e.jsx(i,{className:v(b?c.containerDark:c.containerLight),gap:24,children:e.jsxs(i,{gap:12,padding:16,width:"100%",children:[e.jsx("div",{style:{cursor:"pointer"},onClick:()=>{o(r)},children:e.jsxs(i,{gap:12,width:"100%",children:[e.jsx(i,{horizontal:!0,align:"center",justify:"space-between",children:a==="builtin"?e.jsxs(i,{horizontal:!0,align:"center",gap:8,children:[e.jsx(D,{provider:r,size:24,style:{color:z.colorText},title:n}),B(r)&&e.jsx(h,{color:"geekblue",children:"Coding Plan"})]}):e.jsxs(i,{horizontal:!0,align:"center",gap:12,children:[s?e.jsx(S,{alt:n||r,avatar:s,size:28}):e.jsx(C,{provider:r,size:24,style:{borderRadius:6},type:"avatar"}),e.jsx(d,{style:{fontSize:16,fontWeight:"bold"},children:n||r})]})}),e.jsx(d,{className:c.desc,ellipsis:{rows:2},children:a==="custom"?t:k(`${r}.description`)})]})}),e.jsx(E,{style:{margin:"4px 0"}}),e.jsxs(i,{horizontal:!0,justify:"space-between",children:[e.jsx("div",{}),e.jsx(F,{enabled:l,id:r})]})]})})}),T=Array.from({length:12}).fill("-").map((r,t)=>`${t}x${r}`),je=p.memo(r=>{const{onProviderSelect:t}=r,{t:n}=y("modelProvider"),l=m(f.enabledAiProviderList,j),a=m(f.disabledAiProviderList,j),s=m(f.disabledCustomAiProviderList,j),[u]=m(o=>[o.initAiProviderList]);return u?e.jsxs(e.Fragment,{children:[e.jsxs(i,{gap:24,children:[e.jsxs(i,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.enabled")}),e.jsx(h,{children:l.length})]}),e.jsx(g,{gap:16,rows:3,children:l.map(o=>p.createElement(x,{...o,key:o.id,onProviderSelect:t}))})]}),s.length>0&&e.jsxs(i,{gap:24,children:[e.jsxs(i,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.custom")}),e.jsx(h,{children:s.length})]}),e.jsx(g,{gap:16,rows:3,children:s.map(o=>p.createElement(x,{...o,key:o.id,onProviderSelect:t}))})]}),e.jsxs(i,{gap:24,children:[e.jsxs(i,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.disabled")}),e.jsx(h,{children:a.length})]}),e.jsx(g,{gap:16,rows:3,children:a.map(o=>p.createElement(x,{...o,key:o.id,onProviderSelect:t}))})]})]}):e.jsxs(i,{gap:24,paddingBlock:"0 16px",children:[e.jsx(i,{horizontal:!0,align:"center",gap:4,children:e.jsx(d,{strong:!0,style:{fontSize:16},children:n("list.title.enabled")})}),e.jsx(g,{gap:16,rows:3,children:T.map(o=>e.jsx(x,{loading:!0,enabled:!1,id:o,source:"builtin",onProviderSelect:t},o))})]})});export{je as default};
