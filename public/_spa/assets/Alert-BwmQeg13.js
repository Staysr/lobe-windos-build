import{A as E,a as A}from"./AccordionItem-BFTyuvm7.js";import{cc as f,j as S,c8 as V,aS as H,I as z,o as B,W as F,m as G,F as x}from"./index-BBAuCJqA.js";import{r as R}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as n}from"../vendor/vendor-motion-DRC1LdIk.js";import{A as D}from"./index-Yf321Dwr.js";import{aD as w,aE as K,aF as L,aG as X,a0 as _}from"../vendor/vendor-icons-C6hg4LnF.js";import{e as I}from"../vendor/vendor-es-toolkit-O0KSByiM.js";const l="ant",o=S(({css:e,cssVar:a})=>({banner:e`
      border: none !important;
      border-radius: 0 !important;
    `,borderless:e`
      padding: 0 !important;
      border: none !important;
      background: transparent !important;
    `,borderlessExtraHeaderNoTitle:e`
      margin-block-start: 8px;
      padding-inline: 0;
    `,borderlessExtraHeaderWithTitle:e`
      margin-block-start: 16px;
      padding-inline: 0;
    `,colorfulText:e`
      .${l}-alert-message,.${l}-alert-description {
        color: inherit;
      }
    `,expandText:e`
      padding-inline-end: 12px;

      &:hover {
        cursor: pointer;
      }
    `,extra:e`
      position: relative;

      overflow: hidden;

      max-width: 100%;
      border: 1px solid;
      border-block-start: none;
      border-end-start-radius: ${a.borderRadiusLG};
      border-end-end-radius: ${a.borderRadiusLG};
    `,extraHeader:e`
      border-block-start: 1px dashed;
      border-radius: 0;
      background: transparent !important;
    `,filled:e``,glass:V.blur,hasExtra:e`
      border-block-end: none;
      border-end-start-radius: 0;
      border-end-end-radius: 0;
    `,outlined:e`
      background: transparent !important;
    `,rootBase:e`
      position: relative;

      display: flex;
      flex-direction: row;
      align-items: flex-start;

      max-width: 100%;

      .${l}-alert-icon {
        display: flex;
        align-items: center;
        height: 24px;
        margin: 0;
      }
      .${l}-alert-close-icon {
        display: flex;
        align-items: center;
        height: 24px;
        margin: 0;
      }
    `,rootNoTitleNoIconNoClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 12px;

      .${l}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleNoIconWithClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 12px 9px;

      .${l}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleWithIconNoClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 9px 12px;

      .${l}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleWithIconWithClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 9px;

      .${l}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootWithTitleNoIconNoClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 16px;

      .${l}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${l}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleNoIconWithClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 16px 12px;

      .${l}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${l}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleWithIconNoClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 12px 16px;

      .${l}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${l}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleWithIconWithClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 12px;

      .${l}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${l}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `})),q=f(o.extra,{defaultVariants:{variant:"filled"},variants:{variant:{filled:o.filled,outlined:o.outlined,borderless:o.borderless},banner:{false:null,true:o.banner}}}),J=f(o.rootBase,{compoundVariants:[{class:o.rootNoTitleNoIconNoClosable,closable:!1,hasTitle:!1,showIcon:!1},{class:o.rootNoTitleNoIconWithClosable,closable:!0,hasTitle:!1,showIcon:!1},{class:o.rootNoTitleWithIconNoClosable,closable:!1,hasTitle:!1,showIcon:!0},{class:o.rootNoTitleWithIconWithClosable,closable:!0,hasTitle:!1,showIcon:!0},{class:o.rootWithTitleNoIconNoClosable,closable:!1,hasTitle:!0,showIcon:!1},{class:o.rootWithTitleNoIconWithClosable,closable:!0,hasTitle:!0,showIcon:!1},{class:o.rootWithTitleWithIconNoClosable,closable:!1,hasTitle:!0,showIcon:!0},{class:o.rootWithTitleWithIconWithClosable,closable:!0,hasTitle:!0,showIcon:!0}],defaultVariants:{closable:!1,colorfulText:!0,glass:!1,hasTitle:!1,showIcon:!1,variant:"filled"},variants:{closable:{false:null,true:null},colorfulText:{false:null,true:o.colorfulText},glass:{false:null,true:o.glass},hasTitle:{false:null,true:null},showIcon:{false:null,true:null},variant:{borderless:o.borderless,filled:o.filled,outlined:o.outlined},hasExtra:{false:null,true:o.hasExtra}}}),M=f(o.extraHeader,{compoundVariants:[{class:o.borderlessExtraHeaderNoTitle,hasTitle:!1,variant:"borderless"},{class:o.borderlessExtraHeaderWithTitle,hasTitle:!0,variant:"borderless"}],defaultVariants:{hasTitle:!1,variant:"filled"},variants:{hasTitle:{false:null,true:null},variant:{borderless:null,filled:null,outlined:null}}}),O={error:X,info:L,secondary:w,success:K,warning:w},i=(e,a="info",...s)=>a==="secondary"?e[I(["color",...s].join("-"))]:e[I(["color",a,...s].join("-"))],P=R.memo(({closable:e=!1,description:a,showIcon:s=!0,type:r="info",glass:k,icon:N,colorfulText:u=!0,iconProps:W,style:C,extra:d,classNames:c,styles:h,text:$,extraDefaultExpand:v=!1,extraIsolate:g,banner:m,variant:p="filled",ref:y,...j})=>{const t=H(),T=!!a,b=n.jsx(D,{banner:m,description:a,ref:y,showIcon:s,type:r==="secondary"?"info":r,className:G(J({closable:!!e,colorfulText:u,glass:k,hasExtra:!!(!g&&d),hasTitle:T,showIcon:!!s,variant:p}),c?.alert),closable:typeof e=="boolean"?e:{closeIcon:n.jsx(F,{color:i(t,r),icon:_,size:"small"}),...e},icon:n.jsx(z,{color:r==="secondary"?B.colorTextSecondary:void 0,icon:N||O[r],size:a?24:18,...W}),style:{background:i(t,r,"fillTertiary"),borderColor:i(t,r,"fillSecondary"),color:u?i(t,r):void 0,...C,...h?.alert},...j});return d?g?n.jsxs(x,{className:c?.container,gap:8,children:[b,d]}):n.jsxs(x,{className:c?.container,style:h?.container,children:[b,n.jsx(x,{className:q({banner:m,variant:p}),style:{background:i(t,r,"fillTertiary"),borderColor:i(t,r,"fillSecondary"),color:i(t,r),fontSize:a?14:12},children:n.jsx(E,{defaultExpandedKeys:v?["extra"]:[],children:n.jsx(A,{itemKey:"extra",title:$?.detail||"Show Details",classNames:{content:c?.extraContent,header:M({hasTitle:T,variant:p})},styles:{content:{fontSize:12,...h?.extraContent},header:{borderColor:i(t,r,"fillSecondary")},indicator:{color:i(t,r)},title:{color:i(t,r),fontSize:12}},children:d})})})]}):b});P.displayName="Alert";export{P as A};
