import{L as F,c as z,d as B}from"./index-BT3CRne0.js";import{j as d,aS as M,o as g,F as u,I as f,m as i,n as E,cx as A,T as W}from"./index-BmW5CTHd.js";import{r as v}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as r}from"../vendor/vendor-motion-DRC1LdIk.js";import{aD as L,cW as O,aF as R,cX as D,cY as G}from"../vendor/vendor-icons-Bjz-9Gdp.js";import{G as q}from"./Grid-BUZ_uTMV.js";import{A as H}from"./index-BcdkYTCP.js";import{T as K}from"./Tabs-eBZKq-z0.js";const k=d(({css:e})=>({container:e`
      --lobe-markdown-margin-multiple: 1;

      overflow: hidden;
      gap: 0.75em;

      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
    `,content:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * -1em);

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }

      p {
        color: inherit !important;
      }
    `,underlineAnchor:e`
      a {
        text-decoration: underline;
      }
    `})),w=({children:e,type:o="info",className:n,style:l,...t})=>{const a=M(),m=v.useMemo(()=>({error:{background:a.colorErrorFillTertiary,color:g.colorError,icon:G},important:{background:a.purpleFillTertiary,color:g.purple,icon:D},info:{background:a.colorInfoFillTertiary,color:g.colorInfo,icon:R},tip:{background:a.colorSuccessFillTertiary,color:g.colorSuccess,icon:O},warning:{background:a.colorWarningFillTertiary,color:g.colorWarning,icon:L}}),[a]),{icon:p,color:c,background:s}=m?.[o]||m.info;return r.jsxs(u,{horizontal:!0,align:"flex-start",className:i(k.container,n),style:{background:s,boxShadow:`0 0 0 1px ${s} inset`,color:c,...l},...t,children:[r.jsx(f,{icon:p,size:{size:"1.2em"},style:{marginBlock:"0.25em"}}),r.jsx("div",{className:i(k.content,o==="info"&&k.underlineAnchor),children:r.jsx("div",{children:e})})]})};w.displayName="MdxCallout";const X=d(({css:e})=>({container:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

      > div {
        margin: 0 !important;
      }
    `})),j=({children:e,className:o,maxItemWidth:n=250,rows:l=3,...t})=>r.jsx(q,{className:i(X.container,o),maxItemWidth:n,rows:l,...t,children:e});j.displayName="MdxCards";const x=d(({css:e,cssVar:o})=>({card:e`
      --lobe-markdown-header-multiple: 0.2;
      --lobe-markdown-margin-multiple: 1;

      overflow: hidden;
      height: 100%;
      color: ${o.colorText};

      h3,
      p {
        margin-block: 0 !important;
      }

      p {
        color: ${o.colorTextDescription};
        transition: color 0.2s ${o.motionEaseInOut};
      }

      &:hover {
        p {
          color: ${o.colorTextSecondary};
        }

        .mdx-card-icon {
          opacity: 1;
        }
      }
    `,content:e`
      width: 100%;
      padding: 1.4em;
    `,icon:e`
      margin-block: 0.1em;
      opacity: 0.5;
      transition: opacity 0.2s ${o.motionEaseInOut};
    `})),N=({tag:e,tagColor:o="blue",icon:n,title:l,desc:t,href:a,iconProps:m,className:p,image:c,variant:s="filled",...h})=>r.jsx(H,{href:a,children:r.jsxs(E,{clickable:!0,align:"flex-start",className:i(x.card,p),variant:s,...h,children:[c&&r.jsx(A,{alt:l,height:100,src:c,style:{height:"auto",width:"100%"},width:250}),e&&r.jsx(u,{align:"flex-start",className:x.content,style:{paddingBottom:"0.2em",paddingTop:"1.8em"},children:r.jsx(W,{color:o,style:{borderRadius:"1em",fontSize:"0.8em",fontWeight:500,paddingBlock:"0.1em",paddingInline:"0.6em"},children:e})}),r.jsxs(u,{horizontal:!0,align:t?"flex-start":"center",className:x.content,gap:"0.75em",children:[!c&&n&&r.jsx(f,{className:i(x.icon,"mdx-card-icon"),icon:n,size:{size:"1.5em"},...m}),r.jsxs(u,{gap:"0.2em",children:[r.jsx("h3",{children:l}),t&&r.jsx("p",{children:t})]})]})]})});N.displayName="MdxCard";const Y=d(({css:e,cssVar:o})=>({container:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-block: 0.75em;
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      color: ${o.colorTextSecondary};

      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    `,folder:e`
      cursor: pointer;

      &:hover {
        color: ${o.colorText};
      }
    `,folderChildren:e`
      padding-inline-start: 1em;
    `})),T=({children:e,className:o,...n})=>r.jsx("div",{className:i(Y.container,o),...n,children:e});T.displayName="MdxFileTree";const _=d(({css:e,cssVar:o})=>({container:e`
      --lobe-markdown-header-multiple: 0.5;
      --lobe-markdown-margin-multiple: 1;

      position: relative;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-inline-start: 2.5em;

      &::before {
        content: '';

        position: absolute;
        inset-block-start: 0.25em;
        inset-inline-start: 0.9em;

        display: block;

        width: 1px;
        height: calc(100% - 0.5em);

        background: ${o.colorBorderSecondary};
      }

      h3 {
        counter-increment: step;

        &::before {
          content: counter(step);

          position: absolute;
          z-index: 1;
          inset-inline-start: 0;

          display: inline-block;

          width: 1.8em;
          height: 1.8em;
          margin-block-start: -0.05em;
          border-radius: 9999px;

          font-size: 0.8em;
          font-weight: 500;
          line-height: 1.8em;
          color: ${o.colorTextSecondary};
          text-align: center;

          background: ${o.colorBgElevated};
          box-shadow: 0 0 0 2px ${o.colorBgLayout};
        }

        &:not(:first-child) {
          margin-block-start: 2em;
        }
      }
    `})),$=({children:e,className:o,...n})=>r.jsx("div",{className:i(_.container,o),...n,children:e});$.displayName="MdxSteps";const y=d(({css:e})=>({body:e`
      padding-inline: 1em;

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }
    `,container:e`
      /* Container styles */
    `,header:e`
      /* Header styles */
    `})),J=({defaultIndex:e="0",items:o,children:n,className:l,tabNavProps:t={},...a})=>{const{className:m,onChange:p,...c}=t,[s,h]=v.useState(String(e)),C=Number(s);return r.jsxs(u,{className:i(y.container,l),...a,children:[r.jsx(K,{compact:!0,activeKey:s,className:i(y.header,m),items:o.map((b,I)=>({key:String(I),label:b})),onChange:b=>{h(b),p?.(b)},...c}),n?.[C]||""]})},S=({children:e,className:o,...n})=>r.jsx("div",{className:i(y.body,o),...n,children:r.jsx("div",{children:e})});S.displayName="MdxTab";const ne={Callout:w,Card:N,Cards:j,FileTree:T,Image:B,Steps:$,Tab:S,Tabs:J,Video:z,a:F};export{ne as m};
