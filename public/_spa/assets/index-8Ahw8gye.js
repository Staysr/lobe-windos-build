import{j as be,F as k,m as d,at as me,W as de,cc as H,aR as M,az as _e,C as ue,I as De,j4 as Fe,i as Ce}from"./index-C275yc7e.js";import{r as n}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as x}from"../vendor/vendor-motion-siEo8VfX.js";import{dA as Ne,dB as Ie,dC as je,c7 as ge,br as ze,dD as We,dE as He}from"../vendor/vendor-icons-CwKawJ1k.js";import{a as Me,u as Oe}from"./index-Dt7nQ42s.js";import{a as Ue}from"./index-Dq_SzPY7.js";const A=be(({css:e,cssVar:t})=>({body:e`
      overflow: hidden auto;
      padding: 16px;
    `,container:e`
      position: relative;
      overflow: hidden;
    `,footer:e`
      padding-block: 8px;
      padding-inline: 16px;
      border-block-start: 1px solid ${t.colorBorderSecondary};
    `,handlerIcon:e`
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ${t.motionEaseOut};
    `,header:e`
      padding-block: 8px;
      padding-inline: 16px;
      border-block-end: 1px solid ${t.colorBorderSecondary};
      font-weight: 500;
    `})),ve=n.memo(({className:e,...t})=>x.jsx(k,{className:d(A.body,e),flex:1,...t}));ve.displayName="DraggablePanelBody";const xe=n.memo(({className:e,...t})=>x.jsx(k,{className:d(A.container,e),...t}));xe.displayName="DraggablePanelContainer";const Ee=n.memo(({className:e,...t})=>x.jsx(k,{horizontal:!0,align:"center",className:d(A.footer,e),flex:"none",gap:8,justify:"flex-start",...t}));Ee.displayName="DraggablePanelFooter";const we=n.memo(e=>{const{pin:t,setPin:o,className:i,setExpand:u,title:l,position:a="left",...c}=e,[g,s]=me(!1,{onChange:o,value:t}),b=x.jsx(de,{icon:Ne,size:"small",onClick:()=>u?.(!1)}),f=x.jsx(de,{active:t,icon:t?Ie:je,size:"small",onClick:()=>s(!g)});return x.jsxs(k,{horizontal:!0,align:"center",className:d(A.header,i),flex:"none",gap:8,justify:"space-between",...c,children:[a==="left"?b:f,l,a==="left"?f:b]})});we.displayName="DraggablePanelHeader";const h={offset:16,toggleLength:54,toggleShort:16},v="ant-draggable-panel",r=be(({css:e,cssVar:t})=>{const o={borderBottom:e`
      border-block-end: 1px solid ${t.colorBorderSecondary};
    `,borderBottomNone:e`
      border-block-end-width: 0;
    `,borderLeft:e`
      border-inline-start: 1px solid ${t.colorBorderSecondary};
    `,borderLeftNone:e`
      border-inline-start-width: 0;
    `,borderRight:e`
      border-inline-end: 1px solid ${t.colorBorderSecondary};
    `,borderRightNone:e`
      border-inline-end-width: 0;
    `,borderTop:e`
      border-block-start: 1px solid ${t.colorBorderSecondary};
    `,borderTopNone:e`
      border-block-start-width: 0;
    `},i=e`
    position: absolute;
    z-index: 200;
  `,u={bottomFloat:d(i,e`
        inset-block-end: 0;
        inset-inline: 0 0;
        width: 100%;
      `),leftFloat:d(i,e`
        inset-block: var(--draggable-panel-header-height, 0) 0;
        inset-inline-start: 0;
        height: calc(100% - var(--draggable-panel-header-height, 0px));
      `),rightFloat:d(i,e`
        inset-block: var(--draggable-panel-header-height, 0) 0;
        inset-inline-end: 0;
        height: calc(100% - var(--draggable-panel-header-height, 0px));
      `),topFloat:d(i,e`
        inset-block-start: var(--draggable-panel-header-height, 0);
        inset-inline: 0 0;
        width: 100%;
      `)},l=e`
    position: relative;

    &::before {
      content: '';
      position: absolute;
      transition: all 0.2s ${t.motionEaseOut};
    }
  `,a=e`
    &:hover {
      &::before {
        background: ${t.colorPrimaryBorder};
        box-shadow: 0 0 8px color-mix(in srgb, ${t.colorPrimary} 25%, transparent);
      }
    }

    &:active {
      &::before {
        background: ${t.colorPrimary} !important;
      }
    }
  `,c={handleBottom:d(`${v}-bottom-handle`,e`
        &::before {
          inset-block-end: 50%;
          width: 100%;
          height: 2px;
        }
      `),handleLeft:d(`${v}-left-handle`,e`
        &::before {
          inset-inline-start: 50%;
          width: 2px;
          height: 100%;
        }
      `),handleRight:d(`${v}-right-handle`,e`
        &::before {
          inset-inline-end: 50%;
          width: 2px;
          height: 100%;
        }
      `),handleRoot:l,handleTop:d(`${v}-top-handle`,e`
        &::before {
          inset-block-start: 50%;
          width: 100%;
          height: 2px;
        }
      `)},g=d(`${v}-toggle`,e`
      position: absolute;
      z-index: 50;
      opacity: 0;
      transition: all 0.2s ${t.motionEaseOut};

      &:hover,
      &:active {
        opacity: 1 !important;
      }

      > div {
        pointer-events: all;
        cursor: pointer;

        position: absolute;

        border: 1px solid ${t.colorBorder};

        color: ${t.colorTextTertiary};

        background: var(--draggable-panel-bg, ${t.colorBgLayout});
        backdrop-filter: blur(8px);

        transition: all 0.2s ${t.motionEaseOut};

        &:hover {
          color: ${t.colorTextSecondary};
        }

        &:active {
          color: ${t.colorText};
        }
      }
    `),s=e`
    pointer-events: all;
  `,b=e`
    pointer-events: none;
  `,f={toggleBottom:d(`${v}-toggle-bottom`,e`
        inset-block-end: -${h.offset}px;
        width: 100%;
        height: ${h.toggleShort}px;

        > div {
          inset-inline-start: 50%;

          width: ${h.toggleLength}px;
          height: ${h.toggleShort}px;
          margin-inline-start: -27px;
          border-block-start-width: 0;
          border-radius: 0 0 ${t.borderRadiusLG} ${t.borderRadiusLG};
        }
      `),toggleLeft:d(`${v}-toggle-left`,e`
        inset-inline-start: -${h.offset}px;
        width: ${h.toggleShort}px;
        height: 100%;

        > div {
          inset-block-start: 50%;

          width: ${h.toggleShort}px;
          height: ${h.toggleLength}px;
          margin-block-start: -27px;
          border-inline-end-width: 0;
          border-radius: ${t.borderRadiusLG} 0 0 ${t.borderRadiusLG};
        }
      `),toggleRight:d(`${v}-toggle-right`,e`
        inset-inline-end: -${h.offset}px;
        width: ${h.toggleShort}px;
        height: 100%;

        > div {
          inset-block-start: 50%;

          width: ${h.toggleShort}px;
          height: ${h.toggleLength}px;
          margin-block-start: -27px;
          border-inline-start-width: 0;
          border-radius: 0 ${t.borderRadiusLG} ${t.borderRadiusLG} 0;
        }
      `),toggleRoot:g,toggleRootWithWideArea:s,toggleRootWithoutWideArea:b,toggleTop:d(`${v}-toggle-top`,e`
        inset-block-start: -${h.offset}px;
        width: 100%;
        height: ${h.toggleShort}px;

        > div {
          inset-inline-start: 50%;

          width: ${h.toggleLength}px;
          height: ${h.toggleShort}px;
          margin-inline-start: -27px;
          border-block-end-width: 0;
          border-radius: ${t.borderRadiusLG} ${t.borderRadiusLG} 0 0;
        }
      `)},E={fixed:e`
      position: relative;
    `,fullscreen:e`
      position: absolute;
      inset-block: var(--draggable-panel-header-height, 0) 0;
      inset-inline: 0;

      width: 100%;
      height: calc(100% - var(--draggable-panel-header-height, 0px));

      background: ${t.colorBgContainer};
    `,handlerIcon:e`
      transition: all 0.2s ${t.motionEaseOut};
    `,panel:d(`${v}-fixed`,e`
        overflow: hidden;
        background: var(--draggable-panel-bg, ${t.colorBgLayout});
        transition: all 0.2s ${t.motionEaseOut};
      `),root:d(v,e`
        flex-shrink: 0;

        &:hover {
          > .${v}-toggle {
            opacity: 1;
          }
        }
      `)};return{...o,...u,...c,handleHighlight:a,...f,...E}}),ce=H(r.handleRoot,{variants:{placement:{bottom:r.handleBottom,left:r.handleLeft,right:r.handleRight,top:r.handleTop}}}),Ge=H(r.root,{compoundVariants:[{class:r.bottomFloat,mode:"float",placement:"bottom"},{class:r.topFloat,mode:"float",placement:"top"},{class:r.leftFloat,mode:"float",placement:"left"},{class:r.rightFloat,mode:"float",placement:"right"},{class:r.borderBottom,isExpand:!0,placement:"top",showBorder:!0},{class:r.borderBottomNone,isExpand:!0,placement:"top",showBorder:!1},{class:r.borderLeft,isExpand:!0,placement:"right",showBorder:!0},{class:r.borderLeftNone,isExpand:!0,placement:"right",showBorder:!1},{class:r.borderTop,isExpand:!0,placement:"bottom",showBorder:!0},{class:r.borderTopNone,isExpand:!0,placement:"bottom",showBorder:!1},{class:r.borderRight,isExpand:!0,placement:"left",showBorder:!0},{class:r.borderRightNone,isExpand:!0,placement:"left",showBorder:!1}],defaultVariants:{isExpand:!1,mode:"fixed",placement:"right",showBorder:!0},variants:{isExpand:{false:null,true:null},mode:{fixed:r.fixed,float:null},placement:{bottom:null,left:null,right:null,top:null},showBorder:{false:null,true:null}}}),he=H(r.toggleRoot,{compoundVariants:[{class:r.toggleRootWithWideArea,showHandleWideArea:!0},{class:r.toggleRootWithoutWideArea,showHandleWideArea:!1}],defaultVariants:{showHandleWideArea:!1},variants:{placement:{bottom:r.toggleTop,left:r.toggleRight,right:r.toggleLeft,top:r.toggleBottom},showHandleWideArea:{false:null,true:null}}}),W=e=>{switch(e){case"bottom":return"top";case"top":return"bottom";case"right":return"left";case"left":return"right"}};function fe(e,t){if(e===t)return!0;for(var o=0;o<e.length;o++)if(!Object.is(e[o],t[o]))return!1;return!0}var Ze=!!(typeof window<"u"&&window.document&&window.document.createElement);function Xe(e,t){var o=M(n.useState(e),2),i=o[0],u=o[1],l=n.useMemo(function(){var a=!e,c=function(){return u(function(f){return f===e?a:e})},g=function(f){return u(f)},s=function(){return u(e)},b=function(){return u(a)};return{toggle:c,set:g,setLeft:s,setRight:b}},[]);return[i,l]}function qe(e){var t=M(Xe(!1),2),o=t[0],i=t[1],u=i.toggle,l=i.set,a=n.useMemo(function(){var c=function(){return l(!0)},g=function(){return l(!1)};return{toggle:u,set:function(s){return l(!!s)},setTrue:c,setFalse:g}},[]);return[o,a]}function Re(e,t){if(Ze){if(!e)return t;var o;return Ue(e)?o=e():"current"in e?o=e.current:o=e,o}}var Ye=function(e){var t=function(o,i,u){var l=n.useRef(!1),a=n.useRef([]),c=n.useRef([]),g=n.useRef(void 0);e(function(){var s,b=Array.isArray(u)?u:[u],f=b.map(function(E){return Re(E)});if(!l.current){l.current=!0,a.current=f,c.current=i,g.current=o();return}(f.length!==a.current.length||!fe(a.current,f)||!fe(c.current,i))&&((s=g.current)===null||s===void 0||s.call(g),a.current=f,c.current=i,g.current=o())}),Me(function(){var s;(s=g.current)===null||s===void 0||s.call(g),l.current=!1})};return t},Je=Ye(n.useEffect);function pe(e,t,o){o===void 0&&(o={});var i=o.enable,u=i===void 0?!0:i,l=Oe(t);Je(function(){if(u){var a=Re(o.target,window);if(a?.addEventListener){var c=function(s){return l.current(s)},g=Array.isArray(e)?e:[e];return g.forEach(function(s){a.addEventListener(s,c,{capture:o.capture,once:o.once,passive:o.passive})}),function(){g.forEach(function(s){a.removeEventListener(s,c,{capture:o.capture})})}}}},[e,o.capture,o.once,o.passive,u],o.target)}const Ke=(function(e,t){var o={},i=o.onEnter,u=o.onLeave,l=o.onChange,a=M(qe(),2),c=a[0],g=a[1],s=g.setTrue,b=g.setFalse;return pe("mouseenter",function(){i?.(),s(),l?.(!0)},{target:e}),pe("mouseleave",function(){u?.(),b(),l?.(!1)},{target:e}),c}),Qe=180,Ve=280,et=0,tt=!0,ot="fixed",rt=!0,nt=!0,at=!0;function it(e,t){switch(t.type){case"START_RESIZE":return{...e,isResizing:!0,showExpand:!1};case"STOP_RESIZE":return{...e,isResizing:!1,showExpand:!0};case"SET_SHOW_EXPAND":return{...e,showExpand:t.payload};default:return e}}const ye=n.memo(({headerHeight:e=et,fullscreen:t,maxHeight:o,pin:i=tt,mode:u=ot,children:l,placement:a="right",resize:c,style:g,showBorder:s=!0,showHandleHighlight:b=!1,showHandleWideArea:f=at,backgroundColor:E,size:O,defaultSize:_,minWidth:$,minHeight:L,maxWidth:T,onSizeChange:U,onSizeDragging:G,expandable:D=rt,expand:$e,defaultExpand:Le=nt,onExpandChange:Te,className:Z,showHandleWhenCollapsed:X,destroyOnClose:Se,styles:q,classNames:S,dir:Y})=>{const J=n.useRef(null),F=Ke(J),B=a==="top"||a==="bottom",[K,C]=n.useTransition(),w=n.useRef(void 0),{direction:Be}=n.use(_e.ConfigContext),Q=Y??Be,p=n.useMemo(()=>Q==="rtl"&&["left","right"].includes(a)?a==="left"?"right":"left":a,[Q,a]),N=n.useMemo(()=>({"--draggable-panel-bg":E||"","--draggable-panel-header-height":`${e}px`}),[E,e]),[m,R]=me(Le,{onChange:Te,value:$e}),[I,V]=n.useReducer(it,{isResizing:!1,showExpand:!0});n.useEffect(()=>{i||(w.current&&clearTimeout(w.current),F&&!m?C(()=>{R(!0)}):!F&&m&&(w.current=setTimeout(()=>{C(()=>{R(!1)})},150)))},[i,F,m,R]),n.useEffect(()=>()=>{w.current&&clearTimeout(w.current)},[]);const j=c!==!1&&m,ee=n.useMemo(()=>({bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1,[W(p)]:!0,...c}),[p,c]),te=n.useMemo(()=>B?{height:Qe,width:"100%",..._}:{height:"100%",width:Ve,..._},[B,_]),oe=n.useMemo(()=>m?{defaultSize:te,maxHeight:typeof o=="number"?Math.max(o,0):o,maxWidth:typeof T=="number"?Math.max(T,0):T,minHeight:typeof L=="number"?Math.max(L,0):L,minWidth:typeof $=="number"?Math.max($,0):$,size:O}:B?{minHeight:0,size:{height:0}}:{minWidth:0,size:{width:0}},[m,B,te,o,T,L,$,O]),re=n.useMemo(()=>{switch(p){case"top":return He;case"bottom":return We;case"right":return ge;case"left":return ze;default:return ge}},[p]),ne=n.useCallback(()=>{D&&C(()=>{R(!m)})},[D,m,R]),ke=n.useMemo(()=>x.jsx(ue,{className:he({placement:p,showHandleWideArea:f}),style:{opacity:m?i?void 0:0:X?1:0},children:x.jsx(ue,{className:S?.handle,style:q?.handle,onClick:ne,children:x.jsx(De,{className:r.handlerIcon,icon:re,size:16,style:{marginBottom:p==="top"?4:0,marginLeft:p==="right"?4:0,marginRight:p==="left"?4:0,marginTop:p==="bottom"?4:0,transform:`rotate(${m?180:0}deg)`,transition:"transform 0.3s ease"}})})}),[he,p,m,i,X,S?.handle,ne,q?.handle,r.handlerIcon,re]),ae=n.useCallback((Ae,Pe,y,z)=>{G?.(z,{height:y.style.height,width:y.style.width})},[G]),ie=n.useCallback(()=>{V({type:"START_RESIZE"})},[]),le=n.useCallback((Ae,Pe,y,z)=>{V({type:"STOP_RESIZE"}),U?.(z,{height:y.style.height,width:y.style.width})},[U]),se=n.useMemo(()=>x.jsx(Fe,{...oe,className:d(r.panel,S?.content),enable:j?ee:void 0,handleClasses:j?{[W(p)]:d(ce({placement:W(p)}),b&&r.handleHighlight)}:{},style:{...N,opacity:K?.95:1,transition:I.isResizing?"unset":void 0,...g},onResize:ae,onResizeStart:ie,onResizeStop:le,children:l}),[oe,r.panel,S?.content,j,ee,p,ce,b,r.handleHighlight,ae,ie,le,I.isResizing,K,g,l,d]);return t?x.jsx("div",{className:d(r.fullscreen,Z),style:N,children:l}):x.jsxs("aside",{dir:Y,ref:J,style:N,className:d(Ge({isExpand:m,mode:u,placement:p,showBorder:s}),Z),children:[D&&I.showExpand&&ke,Se?m&&se:se]})},Ce);ye.displayName="DraggablePanel";const P=ye;P.Body=ve;P.Container=xe;P.Footer=Ee;P.Header=we;export{P as D,ve as a,xe as b,Ee as c,we as d,Ye as e,Je as f,Re as g,Ze as i,Ke as u};
