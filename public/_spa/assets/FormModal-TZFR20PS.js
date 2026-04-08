import{j as O,h as Q,F as U,B as W,m as X}from"./index-BBAuCJqA.js";import{F as Y}from"./index-AFo-Bf7w.js";import{M as Z}from"./Modal-DupZSReQ.js";import{r as H}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as r}from"../vendor/vendor-motion-DRC1LdIk.js";const i="ant",c=O(({css:o,cssVar:t,responsive:s})=>({footer:o`
    position: absolute;
    z-index: 10;
    inset-block-end: 0;
    inset-inline: 0;

    width: 100%;
    margin: 0;
    padding: 16px;

    background: linear-gradient(
      to bottom,
      color-mix(in srgb, ${t.colorBgContainer} 0%, transparent) 0%,
      ${t.colorBgContainer} 10%
    );
  `,form:o`
    position: static;
    .${i}-form-group-title {
      font-size: 15px;
      font-weight: 500;
    }

    ${s.sm} {
      .${i}-form-group-title {
        font-size: 14px;
        font-weight: normal;
      }

      .${i}-form-group {
        width: calc(100% + 32px);
        margin-inline: -16px;
        background: transparent;
      }
    }
  `})),P=H.memo(({classNames:o={},className:t,style:s,closable:d,styles:e={},allowFullscreen:g,title:x,afterOpenChange:u,width:y,onCancel:b,centered:h,open:j,afterClose:F,destroyOnHidden:n,closeIcon:C,paddings:N,height:S,enableResponsive:k,zIndex:z,mask:B,getContainer:$,keyboard:w,focusTriggerAfterClose:M,forceRender:v,loading:E,footer:R,submitButtonProps:a,submitLoading:l,onFinish:T,submitText:D,variant:m="borderless",gap:f,onSubmit:_,children:q,ref:A,...G})=>{const{mobile:I}=Q(),{form:J,...K}=o,{form:L,...p}=typeof e=="function"?{form:void 0}:e;return r.jsx(Z,{afterClose:F,afterOpenChange:u,allowFullscreen:g,centered:h,className:t,classNames:K,closable:d,closeIcon:C,confirmLoading:l,destroyOnHidden:n,enableResponsive:k,focusTriggerAfterClose:M,footer:null,forceRender:v,getContainer:$,height:S,keyboard:w,loading:E,mask:B,open:j,paddings:N,style:s,title:x,width:y,zIndex:z,styles:typeof e=="function"?e:{...p,body:{paddingTop:I?0:void 0,...p?.body}},onCancel:b,children:r.jsx(Y,{className:X(c.form,J||""),clearOnDestroy:n,gap:f||(m==="borderless"?24:f),ref:A,variant:m,footer:r.jsx(U,{horizontal:!0,align:"center",className:c.footer,gap:8,children:R||r.jsx(W,{block:!0,htmlType:"submit",loading:l,type:"primary",onClick:_,...a,style:{flex:1,...a?.style},children:D||"Submit"})}),style:{paddingBottom:56,...L},styles:{title:{fontSize:14}},onFinish:T,...G,children:q})})});P.displayName="FormModal";export{P as F};
