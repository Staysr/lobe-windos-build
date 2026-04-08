import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{r as p}from"../vendor/vendor-emotion-D2wYcXAj.js";import{at as g,j as w,k as y,cO as P,F as i,m as v,o as z,T as m,a8 as d,bX as $,bp as j,i as b}from"./index-BBAuCJqA.js";import{G as x}from"./Grid-2gpThKre.js";import{f as S}from"./providerConfig-DLbrlvJC.js";import{A as L}from"./index-GNbd6Ibo.js";import{S as A}from"./index-BY_9ea5Y.js";import{I as C}from"./index-B-qurzAQ.js";import{P as D}from"./index-CM322h8S.js";import{P as E}from"./index-8y4Zx6ZG.js";import"../i18n/i18n-zh-CN-CErfCpws.js";import"../i18n/i18n-en-US-Dpq1-67h.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"../vendor/vendor-icons-C6hg4LnF.js";import"./index-C8CgY4-I.js";import"./index-D_NDLVtF.js";import"./providerConfig-ylQq18jD.js";import"./ProviderIcon-W36LlgD7.js";import"./index-C_IXsgL4.js";import"./useFillId-CJ7HYZYJ.js";import"./index-DG_b3fBL.js";import"./index-DTG3PkPq.js";import"./index-BBf4LK5Y.js";import"./index-BgqdOH23.js";import"./index-Bgfz0y84.js";function I(){return null}const F=({id:r,Component:t,enabled:n})=>{const[l]=g(a=>[a.toggleProviderEnabled]);return t?e.jsx(t,{enabled:n,id:r}):e.jsx(C,{enabled:n,size:"small",onChange:async a=>{await l(r,a)}})},c=w(({css:r,cssVar:t})=>({bannerDark:r`
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
  `})),B=r=>r.endsWith("codingplan"),h=p.memo(({id:r,description:t,name:n,enabled:l,source:a,logo:s,loading:u,onProviderSelect:o})=>{const{t:k}=y("providers"),f=P();return u?e.jsx(i,{className:v(f?c.containerDark:c.containerLight),gap:24,padding:16,children:e.jsx(A,{active:!0})}):r===S?e.jsx(I,{}):e.jsx(i,{className:v(f?c.containerDark:c.containerLight),gap:24,children:e.jsxs(i,{gap:12,padding:16,width:"100%",children:[e.jsx("div",{style:{cursor:"pointer"},onClick:()=>{o(r)},children:e.jsxs(i,{gap:12,width:"100%",children:[e.jsx(i,{horizontal:!0,align:"center",justify:"space-between",children:a==="builtin"?e.jsxs(i,{horizontal:!0,align:"center",gap:8,children:[e.jsx(D,{provider:r,size:24,style:{color:z.colorText},title:n}),B(r)&&e.jsx(m,{color:"geekblue",children:"Coding Plan"})]}):e.jsxs(i,{horizontal:!0,align:"center",gap:12,children:[s?e.jsx(L,{alt:n||r,avatar:s,size:28}):e.jsx(E,{provider:r,size:24,style:{borderRadius:6},type:"avatar"}),e.jsx(d,{style:{fontSize:16,fontWeight:"bold"},children:n||r})]})}),e.jsx(d,{className:c.desc,ellipsis:{rows:2},children:a==="custom"?t:k(`${r}.description`)})]})}),e.jsx($,{style:{margin:"4px 0"}}),e.jsxs(i,{horizontal:!0,justify:"space-between",children:[e.jsx("div",{}),e.jsx(F,{enabled:l,id:r})]})]})})}),T=Array.from({length:12}).fill("-").map((r,t)=>`${t}x${r}`),se=p.memo(r=>{const{onProviderSelect:t}=r,{t:n}=y("modelProvider"),l=g(j.enabledAiProviderList,b),a=g(j.disabledAiProviderList,b),s=g(j.disabledCustomAiProviderList,b),[u]=g(o=>[o.initAiProviderList]);return u?e.jsxs(e.Fragment,{children:[e.jsxs(i,{gap:24,children:[e.jsxs(i,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.enabled")}),e.jsx(m,{children:l.length})]}),e.jsx(x,{gap:16,rows:3,children:l.map(o=>p.createElement(h,{...o,key:o.id,onProviderSelect:t}))})]}),s.length>0&&e.jsxs(i,{gap:24,children:[e.jsxs(i,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.custom")}),e.jsx(m,{children:s.length})]}),e.jsx(x,{gap:16,rows:3,children:s.map(o=>p.createElement(h,{...o,key:o.id,onProviderSelect:t}))})]}),e.jsxs(i,{gap:24,children:[e.jsxs(i,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.disabled")}),e.jsx(m,{children:a.length})]}),e.jsx(x,{gap:16,rows:3,children:a.map(o=>p.createElement(h,{...o,key:o.id,onProviderSelect:t}))})]})]}):e.jsxs(i,{gap:24,paddingBlock:"0 16px",children:[e.jsx(i,{horizontal:!0,align:"center",gap:4,children:e.jsx(d,{strong:!0,style:{fontSize:16},children:n("list.title.enabled")})}),e.jsx(x,{gap:16,rows:3,children:T.map(o=>e.jsx(h,{loading:!0,enabled:!1,id:o,source:"builtin",onProviderSelect:t},o))})]})});export{se as default};
