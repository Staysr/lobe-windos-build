import{c9 as m,j as i,r as n,c5 as f,h as W,F as g,I as M,m as N,cc as H}from"./index-BmW5CTHd.js";import{r as R}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as l}from"../vendor/vendor-motion-DRC1LdIk.js";import{g as w}from"../vendor/vendor-es-toolkit-O0KSByiM.js";const o="ant",d=i(({css:e,cssVar:t})=>({borderless:e`
    gap: 48px;
    .${o}-collapse .${o}-collapse-header {
      padding-block-end: 16px;
      border-block-end: 1px solid ${t.colorBorderSecondary};
    }

    .${o}-collapse-body {
      padding-inline: 0 !important;
    }
  `,filled:e`
    .${o}-collapse-body {
      padding-block: 0 !important;
    }
  `,outlined:e`
    .${o}-collapse-body {
      padding-block: 0 !important;
    }
  `,root:e`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    .${o}-form-item {
      margin: 0 !important;
    }

    .${o}-form-item .${o}-form-item-label > label {
      height: unset;
    }

    .${o}-row {
      position: relative;
      flex-wrap: nowrap;
    }

    .${o}-form-item-label {
      position: relative;
      flex: 1;
      max-width: 100%;
    }

    .${o}-form-item-row {
      align-items: center;
    }

    .${o}-form-item-control {
      position: relative;
      flex: 0;
      min-width: unset !important;
    }

    .${o}-collapse-item {
      border-radius: ${t.borderRadius} !important;
    }

    ${n.sm} {
      gap: 0 !important;
    }
  `})),A=m(d.root,{defaultVariants:{variant:"borderless"},variants:{variant:{filled:d.filled,outlined:d.outlined,borderless:d.borderless}}}),s=i(({cx:e,css:t,cssVar:r})=>({borderless:e(f.variantBorderlessWithoutHover,t`
        padding-inline: 0;
      `),filled:e(f.variantFilledWithoutHover,t`
        background: ${r.colorFillQuaternary};
      `),mobile:t`
      padding-block: 0;
      padding-inline: 16px;
      border-radius: 0;
      background: ${r.colorBgContainer};
    `,outlined:f.variantOutlinedWithoutHover,root:t`
      padding-inline: 16px;
      border-radius: ${r.borderRadiusLG};
    `})),O=m(s.root,{defaultVariants:{variant:"borderless"},variants:{variant:{filled:s.filled,outlined:s.outlined,borderless:s.borderless}}});i(({css:e,cssVar:t})=>({root:e`
      ${n.sm} {
        padding: 16px;
        border-block-start: 1px solid ${t.colorBorderSecondary};
        background: ${t.colorBgContainer};
      }
    `}));const x=i(({css:e,cssVar:t})=>({mobileGroupBody:e`
      padding-block: 0;
      padding-inline: 16px;
      background: ${t.colorBgContainer};
    `,mobileGroupHeader:e`
      padding: 16px;
      background: ${t.colorBgLayout};
    `,title:e`
      align-items: center;
      font-size: 16px;
      font-weight: bold;
    `,titleBorderless:e`
      font-size: 18px;
      font-weight: bold;
    `,titleMobile:e`
      ${n.sm} {
        font-size: 14px;
        font-weight: 400;
        opacity: 0.5;
      }
    `})),L=m(x.title,{defaultVariants:{variant:"borderless"},variants:{variant:{filled:null,outlined:null,borderless:x.titleBorderless}}}),p=i(({css:e})=>({itemMinWidth:e`
    &.${o}-form-item .${o}-form-item-control {
      width: var(--form-item-min-width) !important;
    }
  `,itemNoDivider:e`
    &:not(:first-child) {
      padding-block-start: 0;
    }
  `,root:e`
    &.${o}-form-item {
      padding-block: 16px;
      padding-inline: 0;

      .${o}-form-item-label {
        text-align: start;
      }

      .${o}-row {
        gap: 12px;
        justify-content: space-between;

        > div {
          flex: unset;
          flex-grow: unset;
        }
      }

      .${o}-form-item-required::before {
        align-self: flex-start;
      }

      ${n.sm} {
        &.${o}-form-item-horizontal {
          .${o}-form-item-label {
            flex: 1 !important;
          }
          .${o}-form-item-control {
            flex: none !important;
          }
        }
      }
    }
  `,verticalLayout:e`
    &.${o}-form-item {
      .${o}-row {
        align-items: stretch;
      }
    }
  `})),Q=m(p.root,{defaultVariants:{divider:!1,itemMinWidth:!1,layout:"vertical"},variants:{itemMinWidth:{true:p.itemMinWidth,false:null},divider:{true:null,false:p.itemNoDivider},layout:{vertical:p.verticalLayout,horizontal:null}}}),T=i(({css:e,cssVar:t})=>({floatFooter:e`
    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    width: max-content;
    padding: 8px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 48px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowSecondary};
  `,footer:e`
    ${n.sm} {
      margin-block-start: calc(-1 * ${t.borderRadius});
      padding: 16px;
      border-block-start: 1px solid ${t.colorBorderSecondary};
      background: ${t.colorBgContainer};
    }
  `})),U=i(({css:e,cssVar:t})=>({content:e`
    position: relative;
    text-align: start;
  `,desc:e`
    display: block;

    line-height: 1.44;
    color: ${t.colorTextDescription};
    word-wrap: break-word;
    white-space: pre-wrap;
  `,title:e`
    font-weight: 500;
    line-height: 1;
  `})),D=R.memo(({className:e,icon:t,title:r,children:$,extra:h,variant:c="borderless",defaultActive:k=!0,collapsible:v,active:y,keyValue:u="group",onCollapse:B,desc:S,...j})=>{const{mobile:C}=W(),a=x,b=c==="borderless",F=w(v)?!b:v,G=l.jsxs(g,{horizontal:!0,className:N(L({variant:c}),a.titleMobile),gap:8,children:[t&&l.jsx(M,{icon:t}),r]});return C?l.jsxs(g,{className:e,children:[l.jsxs(g,{horizontal:!0,className:a.mobileGroupHeader,justify:"space-between",children:[G,h]}),l.jsx("div",{className:a.mobileGroupBody,children:$})]}):l.jsx(H,{activeKey:w(y)?void 0:y?[u]:[],className:e,collapsible:F,defaultActiveKey:k?[u]:void 0,variant:c,classNames:{header:b?a.titleBorderless:void 0,title:b?a.titleBorderless:void 0},items:[{children:$,desc:S,extra:h,icon:t,key:u,label:r}],onChange:z=>B?.(z.length>0),...j})});D.displayName="FormGroup";export{D as F,O as a,s as f,Q as i,T as s,U as t,A as v};
