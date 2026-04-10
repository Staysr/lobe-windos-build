import{j as t}from"../vendor/vendor-motion-siEo8VfX.js";import{r as m}from"../vendor/vendor-emotion-B6qZrIr4.js";import{u as c}from"./store-D5e9H-P4.js";import{A as j}from"./assistants-Bnb1hBSy.js";import{k as d,cP as k,F as g,m as a,B as L,j as _,r as o,M as w}from"./index-C275yc7e.js";import{T as s}from"./Title-hwjafeI9.js";import{A as v}from"./index-2Z1gv6Ev.js";import{M as y}from"./index-D6yv1ESw.js";import{L as h}from"./ListLoading-DOowlSUd.js";import"../i18n/i18n-zh-CN-CcVu2is6.js";import"../i18n/i18n-en-US-DqZ3IPP5.js";import"../vendor/vendor-es-toolkit-CFMjQStz.js";import"../vendor/vendor-icons-CwKawJ1k.js";import"./providerConfig-BNV0IvMA.js";import"./const-lbjNOSiN.js";import"./Grid-C06UCg1E.js";import"./AssistantEmpty-BMBGY4i6.js";import"./Empty-BmPp2xKS.js";import"./index-B1FRBCSR.js";import"./index-DvKkbDJI.js";import"./index-DOKgRZvR.js";import"./base-AbuBx_QK.js";import"./PublishedTime-DQkvB9Yf.js";import"./useQuery-CHrqOYEw.js";import"./navigation-Dvmkm_-9.js";import"./format-CzTD0Usd.js";import"./index-DBMwQ_S4.js";import"./index-BdXZwuHp.js";import"./Spotlight-OeUDDJY8.js";import"./Link-BOOoHXIy.js";import"./index-BQC4K4Xn.js";import"./index-DMKxTJGG.js";const r=_(({css:e})=>({banner:e`
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
