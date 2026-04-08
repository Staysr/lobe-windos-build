import{j as t}from"../vendor/vendor-motion-DRC1LdIk.js";import{r as m}from"../vendor/vendor-emotion-D2wYcXAj.js";import{u as c}from"./store-DzsL-yA2.js";import{A as j}from"./assistants-Bnb1hBSy.js";import{k as d,cO as k,F as g,m as a,B as L,j as _,r as o,M as w}from"./index-BBAuCJqA.js";import{T as s}from"./Title-CXQ5iDeC.js";import{A as v}from"./index-D6pI4Zxx.js";import{M as y}from"./index-E6oYfGTn.js";import{L as h}from"./ListLoading-BhHWkg_j.js";import"../i18n/i18n-zh-CN-CErfCpws.js";import"../i18n/i18n-en-US-Dpq1-67h.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"../vendor/vendor-icons-C6hg4LnF.js";import"./providerConfig-DLbrlvJC.js";import"./const-lbjNOSiN.js";import"./Grid-2gpThKre.js";import"./AssistantEmpty-DPPoheiz.js";import"./Empty-BmpfRZff.js";import"./index-GNbd6Ibo.js";import"./index-C8CgY4-I.js";import"./index-D_NDLVtF.js";import"./base-AbuBx_QK.js";import"./PublishedTime-C7DA6p6K.js";import"./useQuery-DgQy_cD7.js";import"./navigation-D8lPNfc8.js";import"./format-BRCSVQG4.js";import"./index-BcZfsvVu.js";import"./index-C_IXsgL4.js";import"./Spotlight-BfNArZet.js";import"./Link-CSY-94RX.js";import"./index-BgqdOH23.js";import"./index-BY_9ea5Y.js";const r=_(({css:e})=>({banner:e`
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
