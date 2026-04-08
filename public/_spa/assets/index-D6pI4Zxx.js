import{j as o}from"../vendor/vendor-motion-DRC1LdIk.js";import{G as C}from"./Grid-2gpThKre.js";import{k as b,F as s,a9 as g,T as d,I as h,o as q,j as T,f as G,cP as L,cQ as Y,n as M,L as Q,a8 as y}from"./index-BBAuCJqA.js";import{r as p}from"../vendor/vendor-emotion-D2wYcXAj.js";import{A as R}from"./AssistantEmpty-DPPoheiz.js";import{A as U}from"./index-GNbd6Ibo.js";import{q as _}from"./base-AbuBx_QK.js";import{P as J}from"./PublishedTime-C7DA6p6K.js";import{u as K}from"./useQuery-DgQy_cD7.js";import{a as v}from"./format-BRCSVQG4.js";import{b8 as H,b9 as O,ba as W,ab as X}from"../vendor/vendor-icons-C6hg4LnF.js";import{I as Z}from"./index-BcZfsvVu.js";const k=T(({css:e,cssVar:t})=>({token:e`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `})),V=p.memo(({tokenUsage:e,pluginCount:t,knowledgeCount:r,forkCount:n,placement:i="right"})=>{const{t:a}=b("discover");return o.jsxs(s,{horizontal:!0,align:"center",gap:4,children:[o.jsx(g,{placement:i,styles:{root:{pointerEvents:"none"}},title:a("assistants.tokenUsage"),children:o.jsx(d,{className:k.token,icon:o.jsx(h,{icon:H}),children:v(e)})}),!!(n&&n>0)&&o.jsx(g,{placement:i,styles:{root:{pointerEvents:"none"}},title:a("fork.forksCount",{count:n}),children:o.jsx(d,{className:k.token,icon:o.jsx(h,{icon:O}),children:v(n)})}),!!(t&&t>0)&&o.jsx(g,{placement:i,styles:{root:{pointerEvents:"none"}},title:a("assistants.withPlugin"),children:o.jsx(d,{icon:o.jsx(h,{fill:q.colorTextSecondary,icon:Z}),children:t})}),!!(r&&r>0)&&o.jsx(g,{placement:i,styles:{root:{pointerEvents:"none"}},title:a("assistants.withKnowledge"),children:o.jsx(d,{icon:o.jsx(h,{icon:W}),children:r})})]})}),c=T(({css:e,cssVar:t})=>({author:e`
      cursor: pointer;
      color: ${t.colorTextDescription};

      &:hover {
        color: ${t.colorPrimary};
      }
    `,code:e`
      font-family: ${t.fontFamilyCode};
    `,desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `})),oo=p.memo(({createdAt:e,updatedAt:t,author:r,avatar:n,title:i,description:a,category:$,identifier:x,tokenUsage:w,pluginCount:z,knowledgeCount:A,forkCount:B,backgroundColor:E,userName:l,type:I})=>{const m=G(),{source:D}=K(),u=I==="agent-group",P=u?"/community/group_agent":"/community/agent",f=_.stringifyUrl({query:{source:D},url:L(P,x)},{skipNull:!0}),{t:j}=b("discover"),S=p.useCallback(N=>{N.stopPropagation(),l&&m(`/community/user/${l}`)},[l,m]),F=p.useCallback(()=>{Y.reportAgentEvent({event:"click",identifier:x,source:location.pathname}).catch(()=>{}),m(f)},[x,f,m]);return o.jsxs(M,{clickable:!0,"data-testid":"assistant-item",height:"100%",variant:"outlined",width:"100%",style:{overflow:"hidden",position:"relative"},onClick:F,children:[u&&o.jsx(d,{color:"info",style:{position:"absolute",right:12,top:12,zIndex:1},children:j("groupAgents.tag",{defaultValue:"群组"})}),o.jsx(s,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,style:{paddingRight:u?80:16},width:"100%",children:o.jsxs(s,{horizontal:!0,gap:12,title:x,style:{overflow:"hidden"},children:[o.jsx(U,{avatar:n,background:E||"transparent",shape:"square",size:40,style:{flex:"none"}}),o.jsxs(s,{flex:1,gap:2,style:{overflow:"hidden"},children:[o.jsx(s,{horizontal:!0,align:"center",flex:1,gap:8,style:{overflow:"hidden"},children:o.jsx(Q,{style:{color:"inherit",overflow:"hidden"},to:f,children:o.jsx(y,{ellipsis:!0,as:"h2",className:c.title,children:i})})}),r&&o.jsx("div",{className:l?c.author:void 0,style:l?void 0:{color:"inherit"},onClick:l?S:void 0,children:r})]})]})}),o.jsxs(s,{flex:1,gap:12,paddingInline:16,children:[o.jsx(y,{as:"p",className:c.desc,ellipsis:{rows:3},children:a}),o.jsx(V,{forkCount:B,knowledgeCount:A,pluginCount:z,tokenUsage:w})]}),o.jsx(s,{horizontal:!0,align:"center",className:c.footer,justify:"space-between",padding:16,children:o.jsxs(s,{horizontal:!0,align:"center",className:c.secondaryDesc,justify:"space-between",children:[o.jsxs(s,{horizontal:!0,align:"center",gap:4,children:[o.jsx(h,{icon:X,size:14}),o.jsx(J,{className:c.secondaryDesc,date:t||e,template:"MMM DD, YYYY"})]}),j(`category.assistant.${$}`)]})})]})}),mo=p.memo(({data:e=[],rows:t=3})=>e.length===0?o.jsx(R,{}):o.jsx(C,{rows:t,width:"100%",children:e.map((r,n)=>o.jsx(oo,{...r},n))}));export{mo as A,V as T};
