import{j as t}from"../vendor/vendor-motion-BIhyHZ0p.js";import{r as m}from"../vendor/vendor-emotion-DdM-9MtU.js";import{u as c}from"./store-DdXiDMW-.js";import{A as j}from"./assistants-Bnb1hBSy.js";import{M as k}from"./mcp-bmlNDBWs.js";import{T as s}from"./Title-kf1Orncj.js";import{A as L}from"./index-kYD2HLzU.js";import{M as _}from"./index-x-l95hxr.js";import{g as p,bA as w,F as g,j as n,B as v,f as y,r as i}from"./index-Rjxk4g_I.js";import{L as h}from"./ListLoading-Mjoa3HOD.js";import"./discover-JEfCVyFM.js";import"./general-Dic2MLYW.js";import"./object-CksihGcT.js";import"../vendor/vendor-es-toolkit-DEdCfXFH.js";import"./const-lbjNOSiN.js";import"../vendor/vendor-icons-B5XxavR9.js";import"./Grid-DXkVY7wb.js";import"./AssistantEmpty-C2KoRkAY.js";import"./Empty--CBOQBIK.js";import"./Block-Bz_9WVCI.js";import"./index-tpJikB3z.js";import"./index-D3AbbKb4.js";import"./index-C4DxYo5Y.js";import"./index-E-558r2I.js";import"./base-AbuBx_QK.js";import"./PublishedTime-C5XZiWH1.js";import"./useQuery-CKh99AmZ.js";import"./navigation-SWz-i-KS.js";import"./format-owXwBtD5.js";import"./currency-iJxIWo9y.js";import"./providerConfig-DjTKVWb5.js";import"./index-CcaBWHKa.js";import"./index-DDKIJJmB.js";import"./Spotlight-DiaKZatX.js";import"./Link-C0OwKZH-.js";import"./index-Bydyg3ga.js";import"../i18n/i18n-zh-CN-CO_PhvK1.js";import"../i18n/i18n-en-US-B1hbRPog.js";import"./index-B3WrDdDP.js";const r=y(({css:e})=>({banner:e`
    position: relative;

    width: 100%;
    padding-block: 24px;
    padding-inline: 32px;
    border-radius: 12px;

    ${i.sm} {
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

    ${i.sm} {
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

    ${i.sm} {
      display: none;
    }
  `,title:e`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;

    ${i.sm} {
      font-size: 18px;
    }
  `,title_dark:e`
    color: rgb(255 255 255 / 88%);
  `,title_light:e`
    color: rgb(0 0 0 / 88%);
  `})),u=m.memo(()=>{const{t:e}=p("discover"),o=w();return t.jsxs(g,{className:n(r.banner,o?r.banner_dark:r.banner_light),width:"100%",children:[t.jsxs(g,{gap:8,style:{position:"relative",zIndex:1},children:[t.jsx("h2",{className:n(r.title,o?r.title_dark:r.title_light),children:e("home.creatorReward.title")}),t.jsx("p",{className:n(r.subtitle,o?r.subtitle_dark:r.subtitle_light),children:e("home.creatorReward.subtitle")}),t.jsx("div",{style:{marginBlockStart:4},children:t.jsx("a",{href:"https://lobehub.com/creator?utm_source=lobehub",rel:"noopener noreferrer",target:"_blank",children:t.jsx(v,{type:"primary",children:e("home.creatorReward.action")})})})]}),t.jsx("div",{className:r.symbols})]})}),A=m.memo(()=>{const{t:e}=p("discover");return t.jsxs(t.Fragment,{children:[t.jsx(u,{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/agent",children:e("home.featuredAssistants")}),t.jsx(h,{length:8,rows:4}),t.jsx("div",{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/mcp",children:e("home.featuredTools")}),t.jsx(h,{length:8,rows:4})]})}),ct=m.memo(()=>{const{t:e}=p("discover"),o=c(a=>a.useAssistantList),x=c(a=>a.useFetchMcpList),{data:d,isLoading:b}=o({page:1,pageSize:12,sort:j.Recommended}),{data:l,isLoading:f}=x({page:1,pageSize:12,sort:k.Recommended});return b||f||!d||!l?t.jsx(A,{}):t.jsxs(t.Fragment,{children:[t.jsx(u,{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/agent",children:e("home.featuredAssistants")}),t.jsx(L,{data:d.items,rows:4}),t.jsx("div",{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/mcp",children:e("home.featuredTools")}),t.jsx(_,{data:l.items,rows:4})]})});export{ct as default};
