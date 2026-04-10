import{j as n}from"../vendor/vendor-motion-siEo8VfX.js";import{S as o}from"./ScrollShadow-jEogUgPT.js";import{cb as a,j as r}from"./index-C275yc7e.js";import{r as s}from"../vendor/vendor-emotion-B6qZrIr4.js";const x=({children:t,top:e=16})=>n.jsx(o,{hideScrollBar:!0,as:"aside",flex:"none",height:`calc(100vh - ${e*2+4}px)`,offset:16,size:4,style:{paddingBottom:16,position:"sticky",top:e},width:280,children:t}),i="ant",m=r(({css:t})=>({menu:t`
      padding: 0 !important;
      .${i}-menu-item {
        display: flex;
        gap: 4px;

        width: 100%;
        height: 36px;
        margin-inline: 0;
        padding-inline-start: 12px !important;

        font-size: 14px;

        .${i}-menu-title-content > a {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    `})),f=s.memo(({style:t,...e})=>n.jsx(a,{className:m.menu,"data-testid":"category-menu",mode:"inline",style:t,...e}));export{f as C,x as a};
