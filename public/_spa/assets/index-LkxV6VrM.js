import{j as e}from"../vendor/vendor-motion-siEo8VfX.js";import{r as p}from"../vendor/vendor-emotion-B6qZrIr4.js";import{au as g,j as w,k as y,cP as P,F as i,m as v,o as z,T as m,a9 as d,bY as $,bq as j,i as b}from"./index-C275yc7e.js";import{G as x}from"./Grid-C06UCg1E.js";import{f as S}from"./providerConfig-BNV0IvMA.js";import{A as L}from"./index-B1FRBCSR.js";import{S as A}from"./index-DMKxTJGG.js";import{I as C}from"./index-BGQUSuUX.js";import{P as D}from"./index-BZrwVzrW.js";import{P as E}from"./index-CtZIRQpu.js";import"../i18n/i18n-zh-CN-CcVu2is6.js";import"../i18n/i18n-en-US-DqZ3IPP5.js";import"../vendor/vendor-es-toolkit-CFMjQStz.js";import"../vendor/vendor-icons-CwKawJ1k.js";import"./index-DvKkbDJI.js";import"./index-DOKgRZvR.js";import"./providerConfig-Bb-onMKG.js";import"./ProviderIcon-9EZaJHBV.js";import"./index-BdXZwuHp.js";import"./useFillId-DE6TCRlt.js";import"./index-Cv8AhhVl.js";import"./index-CSuluO9j.js";import"./index-BxOuX_e1.js";import"./index-BQC4K4Xn.js";import"./index-CaauNB8x.js";function I(){return null}const F=({id:r,Component:t,enabled:n})=>{const[l]=g(a=>[a.toggleProviderEnabled]);return t?e.jsx(t,{enabled:n,id:r}):e.jsx(C,{enabled:n,size:"small",onChange:async a=>{await l(r,a)}})},c=w(({css:r,cssVar:t})=>({bannerDark:r`
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
