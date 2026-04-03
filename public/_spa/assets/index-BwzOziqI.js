import{j as t}from"../vendor/vendor-motion-DRC1LdIk.js";import{r as m}from"../vendor/vendor-emotion-D2wYcXAj.js";import{u as c}from"./store-BT9tk0fI.js";import{A as j}from"./assistants-Bnb1hBSy.js";import{k as d,cL as k,F as g,m as a,B as L,j as _,r as o,M as w}from"./index-BmW5CTHd.js";import{T as s}from"./Title-G9JE4qHz.js";import{A as v}from"./index-AVjpct6Q.js";import{M as y}from"./index-BC_sl1YY.js";import{L as h}from"./ListLoading-BMiNgyIX.js";import"../i18n/i18n-zh-CN-CCQe7Zp1.js";import"../i18n/i18n-en-US-vCwQO2Oi.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"../vendor/vendor-icons-Bjz-9Gdp.js";import"./providerConfig-DdZ8yyMi.js";import"./const-lbjNOSiN.js";import"./Grid-BUZ_uTMV.js";import"./AssistantEmpty-BDMn2oHn.js";import"./Empty-6bLhRDuU.js";import"./index-CjltaXqJ.js";import"./index-CkimUepr.js";import"./index-BDQRU9sz.js";import"./base-AbuBx_QK.js";import"./PublishedTime-C9DP0HS4.js";import"./useQuery-BGSFnU1r.js";import"./navigation-wLFU8gCk.js";import"./format-CROJBBB8.js";import"./index-Dci20J5l.js";import"./index-iphjo6DU.js";import"./Spotlight-B8XIfx08.js";import"./Link-Cd3icMha.js";import"./index-DZDJdJ_c.js";import"./index-B4WS8tzo.js";const r=_(({css:e})=>({banner:e`
    position: relative;

    width: 100%;
    padding-block: 24px;
    padding-inline: 32px;
    border-radius: 12px;

    ${o.sm} {
      padding-block: 16px;
      padding-inline: 20px;
    }
  `,banner_dark:e`
    background: linear-gradient(135deg, #5c3d0e 0%, #7a4f10 50%, #6b3a08 100%);
  `,banner_light:e`
    background: linear-gradient(135deg, #fceabb 0%, #f8b500 50%, #e88a20 100%);
  `,subtitle:e`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    ${o.sm} {
      font-size: 12px;
    }
  `,subtitle_dark:e`
    color: rgb(255 255 255 / 65%);
  `,subtitle_light:e`
    color: rgb(0 0 0 / 65%);
  `,symbols:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;
    inset-inline-end: 0;

    overflow: hidden;

    width: 50%;
    border-radius: 0 12px 12px 0;

    background: url('/images/banner_creator.png') right center / auto 100% no-repeat;

    ${o.sm} {
      display: none;
    }
  `,title:e`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;

    ${o.sm} {
      font-size: 18px;
    }
  `,title_dark:e`
    color: rgb(255 255 255 / 88%);
  `,title_light:e`
    color: rgb(0 0 0 / 88%);
  `})),u=m.memo(()=>{const{t:e}=d("discover"),i=k();return t.jsxs(g,{className:a(r.banner,i?r.banner_dark:r.banner_light),width:"100%",children:[t.jsxs(g,{gap:8,style:{position:"relative",zIndex:1},children:[t.jsx("h2",{className:a(r.title,i?r.title_dark:r.title_light),children:e("home.creatorReward.title")}),t.jsx("p",{className:a(r.subtitle,i?r.subtitle_dark:r.subtitle_light),children:e("home.creatorReward.subtitle")}),t.jsx("div",{style:{marginBlockStart:4},children:t.jsx("a",{href:"https://lobehub.com/creator?utm_source=lobehub",rel:"noopener noreferrer",target:"_blank",children:t.jsx(L,{type:"primary",children:e("home.creatorReward.action")})})})]}),t.jsx("div",{className:r.symbols})]})}),A=m.memo(()=>{const{t:e}=d("discover");return t.jsxs(t.Fragment,{children:[t.jsx(u,{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/agent",children:e("home.featuredAssistants")}),t.jsx(h,{length:8,rows:4}),t.jsx("div",{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/mcp",children:e("home.featuredTools")}),t.jsx(h,{length:8,rows:4})]})}),st=m.memo(()=>{const{t:e}=d("discover"),i=c(n=>n.useAssistantList),x=c(n=>n.useFetchMcpList),{data:l,isLoading:b}=i({page:1,pageSize:12,sort:j.Recommended}),{data:p,isLoading:f}=x({page:1,pageSize:12,sort:w.Recommended});return b||f||!l||!p?t.jsx(A,{}):t.jsxs(t.Fragment,{children:[t.jsx(u,{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/agent",children:e("home.featuredAssistants")}),t.jsx(v,{data:l.items,rows:4}),t.jsx("div",{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/mcp",children:e("home.featuredTools")}),t.jsx(y,{data:p.items,rows:4})]})});export{st as default};
