import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{G as v}from"./Grid-BUZ_uTMV.js";import{k as h,C as b,a9 as w,I as x,o as z,f as M,cM as T,n as k,F as s,L as I,a8 as m,ab as $,cg as C,T as N,j as P}from"./index-BmW5CTHd.js";import{r as l}from"../vendor/vendor-emotion-D2wYcXAj.js";import{E as S}from"./Empty-6bLhRDuU.js";import{bt as D,aM as E,bu as B,bv as L,y as F,bw as G,I as R,bx as W,ax as q,ab as A}from"../vendor/vendor-icons-Bjz-9Gdp.js";import{a as H}from"./index-BQgswPlq.js";import{P as J}from"./PublishedTime-C9DP0HS4.js";import{s as O}from"../vendor/vendor-es-toolkit-O0KSByiM.js";import{M as _}from"./index-Df8qgoA9.js";import{P as p}from"./index-Dnnpxx1y.js";const g=l.memo(({search:o,...t})=>{const{t:i}=h("discover");return e.jsx(b,{height:"100%",style:{minHeight:"50vh"},width:"100%",children:e.jsx(S,{description:i(o?"models.empty.search":"models.empty.description"),icon:D,title:o?void 0:i("models.empty.title"),type:o?"default":"page",descriptionProps:{fontSize:14},style:{maxWidth:400},...t})})});g.displayName="ModelEmpty";const K={chat:q,embedding:W,image:R,realtime:G,stt:F,text2music:L,tts:B,video:E},Q=l.memo(({type:o,size:t=20})=>e.jsx(w,{title:`${O(o)} Model`,children:e.jsx(x,{color:z.colorTextDescription,icon:K?.[o],size:t})})),r=P(({css:o,cssVar:t})=>({author:o`
      color: ${t.colorTextDescription};
    `,code:o`
      font-family: ${t.fontFamilyCode};
    `,desc:o`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:o`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,secondaryDesc:o`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,title:o`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `})),U=l.memo(({identifier:o,displayName:t,contextWindowTokens:i,releasedAt:c,type:j,abilities:u,providers:n})=>{const{t:f}=h(["models","discover"]),y=M(),d=T("/community/model",o);return e.jsxs(k,{clickable:!0,"data-testid":"model-item",height:"100%",variant:"outlined",width:"100%",style:{overflow:"hidden",position:"relative"},onClick:()=>{y(d)},children:[e.jsxs(s,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:[e.jsxs(s,{horizontal:!0,gap:12,title:o,style:{overflow:"hidden"},children:[e.jsx(_,{model:o,size:40,style:{flex:"none"},type:"avatar"}),e.jsxs(s,{flex:1,gap:2,style:{overflow:"hidden"},children:[e.jsx(s,{horizontal:!0,align:"center",flex:1,gap:8,style:{overflow:"hidden"},children:e.jsx(I,{style:{color:"inherit",overflow:"hidden"},to:d,children:e.jsx(m,{ellipsis:!0,as:"h2",className:r.title,children:t})})}),e.jsx("div",{className:r.author,children:o})]})]}),e.jsx(s,{horizontal:!0,align:"center",gap:4,children:e.jsx(Q,{type:j})})]}),e.jsxs(s,{flex:1,gap:12,paddingInline:16,children:[e.jsx(H,{directionReverse:!0,contextWindowTokens:i,...u}),e.jsx(m,{as:"p",className:r.desc,ellipsis:{rows:3},children:f(`${o}.description`)})]}),e.jsx(s,{horizontal:!0,align:"center",className:r.footer,justify:"space-between",padding:16,children:e.jsxs(s,{horizontal:!0,align:"center",className:r.secondaryDesc,justify:"space-between",children:[e.jsxs(s,{horizontal:!0,align:"center",gap:4,children:[e.jsx(x,{icon:A,size:14}),e.jsx(J,{className:r.secondaryDesc,date:c||$().toISOString()})]}),e.jsx(C,{content:e.jsx(s,{horizontal:!0,gap:6,wrap:"wrap",style:{maxWidth:175},children:n.map(a=>e.jsx(p,{provider:a,size:24},a))}),children:e.jsxs(s,{horizontal:!0,align:"center",gap:6,children:[n.slice(0,6).map(a=>e.jsx(p,{provider:a,size:14,type:"mono"},a)),n.length>6&&e.jsx(N,{size:"small",children:n.length})]})})]})})]})}),ne=l.memo(({data:o=[],rows:t=3})=>o.length===0?e.jsx(g,{}):e.jsx(v,{rows:t,width:"100%",children:o.map((i,c)=>e.jsx(U,{...i},c))}));export{ne as M,Q as a};
