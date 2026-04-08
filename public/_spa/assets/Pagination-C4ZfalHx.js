import{j as u}from"../vendor/vendor-motion-DRC1LdIk.js";import{r as S}from"../vendor/vendor-emotion-D2wYcXAj.js";import{u as d}from"./useQuery-DgQy_cD7.js";import{S as f}from"./const-lbjNOSiN.js";import{f as h,g as b,h as $,j as y}from"./index-BBAuCJqA.js";import{P as C}from"./Pagination-CpmX6Kfs.js";const P="lobe-mobile-scroll-container",x="ant",R=y(({css:e,cssVar:o})=>({page:e`
      .${x}-pagination-item-active {
        border-color: ${o.colorFillSecondary};
        background: ${o.colorFillSecondary};

        &:hover {
          border-color: ${o.colorFill};
          background: ${o.colorFill};
        }
      }
    `})),I=S.memo(({tab:e,currentPage:o,total:n,pageSize:s})=>{const{page:t}=d(),i=h(),l=b(),{mobile:c}=$(),m=g=>{const r=new URLSearchParams(l.search);r.set("page",String(g)),i(`/community/${e}?${r.toString()}`);const p=c?P:f,a=document?.querySelector(`#${p}`);a&&a.scrollTo({behavior:"smooth",top:0})};return u.jsx(C,{className:R.page,current:t?Number(t):o,"data-testid":"pagination",pageSize:s,showSizeChanger:!1,total:n,style:{alignSelf:"flex-end"},onChange:m})});export{I as P};
