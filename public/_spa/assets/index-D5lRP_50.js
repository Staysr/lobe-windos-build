import{L as F,c as z,d as B}from"./index-DykGnXB3.js";import{j as d,aT as M,o as g,F as u,I as f,m as i,n as A,cA as E,T as L}from"./index-C275yc7e.js";import{r as v}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as r}from"../vendor/vendor-motion-siEo8VfX.js";import{aD as W,cZ as O,aF as R,c_ as D,c$ as G}from"../vendor/vendor-icons-CwKawJ1k.js";import{G as _}from"./Grid-C06UCg1E.js";import{A as q}from"./index-BHwegkc5.js";import{T as H}from"./Tabs-BJEYda1H.js";const k=d(({css:e})=>({container:e`
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
    `})),w=({children:e,type:o="info",className:n,style:l,...t})=>{const a=M(),m=v.useMemo(()=>({error:{background:a.colorErrorFillTertiary,color:g.colorError,icon:G},important:{background:a.purpleFillTertiary,color:g.purple,icon:D},info:{background:a.colorInfoFillTertiary,color:g.colorInfo,icon:R},tip:{background:a.colorSuccessFillTertiary,color:g.colorSuccess,icon:O},warning:{background:a.colorWarningFillTertiary,color:g.colorWarning,icon:W}}),[a]),{icon:p,color:c,background:s}=m?.[o]||m.info;return r.jsxs(u,{horizontal:!0,align:"flex-start",className:i(k.container,n),style:{background:s,boxShadow:`0 0 0 1px ${s} inset`,color:c,...l},...t,children:[r.jsx(f,{icon:p,size:{size:"1.2em"},style:{marginBlock:"0.25em"}}),r.jsx("div",{className:i(k.content,o==="info"&&k.underlineAnchor),children:r.jsx("div",{children:e})})]})};w.displayName="MdxCallout";const K=d(({css:e})=>({container:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

      > div {
        margin: 0 !important;
      }
    `})),j=({children:e,className:o,maxItemWidth:n=250,rows:l=3,...t})=>r.jsx(_,{className:i(K.container,o),maxItemWidth:n,rows:l,...t,children:e});j.displayName="MdxCards";const x=d(({css:e,cssVar:o})=>({card:e`
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
    `})),T=({tag:e,tagColor:o="blue",icon:n,title:l,desc:t,href:a,iconProps:m,className:p,image:c,variant:s="filled",...h})=>r.jsx(q,{href:a,children:r.jsxs(A,{clickable:!0,align:"flex-start",className:i(x.card,p),variant:s,...h,children:[c&&r.jsx(E,{alt:l,height:100,src:c,style:{height:"auto",width:"100%"},width:250}),e&&r.jsx(u,{align:"flex-start",className:x.content,style:{paddingBottom:"0.2em",paddingTop:"1.8em"},children:r.jsx(L,{color:o,style:{borderRadius:"1em",fontSize:"0.8em",fontWeight:500,paddingBlock:"0.1em",paddingInline:"0.6em"},children:e})}),r.jsxs(u,{horizontal:!0,align:t?"flex-start":"center",className:x.content,gap:"0.75em",children:[!c&&n&&r.jsx(f,{className:i(x.icon,"mdx-card-icon"),icon:n,size:{size:"1.5em"},...m}),r.jsxs(u,{gap:"0.2em",children:[r.jsx("h3",{children:l}),t&&r.jsx("p",{children:t})]})]})]})});T.displayName="MdxCard";const Z=d(({css:e,cssVar:o})=>({container:e`
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
    `})),N=({children:e,className:o,...n})=>r.jsx("div",{className:i(Z.container,o),...n,children:e});N.displayName="MdxFileTree";const J=d(({css:e,cssVar:o})=>({container:e`
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
    `})),$=({children:e,className:o,...n})=>r.jsx("div",{className:i(J.container,o),...n,children:e});$.displayName="MdxSteps";const y=d(({css:e})=>({body:e`
      padding-inline: 1em;

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }
    `,container:e`
      /* Container styles */
    `,header:e`
      /* Header styles */
    `})),P=({defaultIndex:e="0",items:o,children:n,className:l,tabNavProps:t={},...a})=>{const{className:m,onChange:p,...c}=t,[s,h]=v.useState(String(e)),C=Number(s);return r.jsxs(u,{className:i(y.container,l),...a,children:[r.jsx(H,{compact:!0,activeKey:s,className:i(y.header,m),items:o.map((b,I)=>({key:String(I),label:b})),onChange:b=>{h(b),p?.(b)},...c}),n?.[C]||""]})},S=({children:e,className:o,...n})=>r.jsx("div",{className:i(y.body,o),...n,children:r.jsx("div",{children:e})});S.displayName="MdxTab";const ne={Callout:w,Card:T,Cards:j,FileTree:N,Image:B,Steps:$,Tab:S,Tabs:P,Video:z,a:F};export{ne as m};
