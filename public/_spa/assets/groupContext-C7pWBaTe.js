import{cj as Pe,f as Ce,dB as W,fF as Re,fG as Se,eE as Te,fH as Ee,ep as X,eC as oe,fI as we,fJ as Oe,E as ne,e4 as re,e9 as Ie,fK as ke,fL as Me,fM as G,fN as Fe,fO as Ae,fP as je,dI as Y,fQ as se,fR as Ne,fS as Be,fT as ue,b5 as He,dE as Le,fU as Ge,fV as De,fW as $e,dG as Ue,fX as Ke,fY as _e,dK as K,ex as ze,dC as J,fZ as Ye,es as We,f_ as Xe,e0 as qe,et as Ve,er as ae,f$ as Ze,g0 as Je,g1 as Qe,g2 as de,g3 as et,g4 as tt,dF as Z,g5 as fe,g6 as ge,g7 as ot,g8 as Q,g9 as nt,ga as rt,gb as st,gc as at,e2 as it,gd as ve,ge as lt,ei as pt,j as q,q as ct,gf as ut,co as dt,aq as ft,bE as gt}from"./index-Rjxk4g_I.js";import{j as l}from"../vendor/vendor-motion-BIhyHZ0p.js";import{r as o}from"../vendor/vendor-emotion-DdM-9MtU.js";import{u as vt,a as mt,b as ht,I as bt,c as yt,F as xt,C as Pt}from"./useOpenInteractionType-BhmIdhIt.js";import{u as Ct}from"./parseTrigger-DE6TiFSj.js";const Rt=l.jsxs("svg",{"aria-hidden":"true",height:"6",viewBox:"0 0 12 6",width:"12",children:[l.jsx("path",{d:"M0 6L6 0L12 6Z","data-role":"fill"}),l.jsx("path",{d:"M0 6L6 0L12 6","data-role":"stroke"})]}),St=e=>{const t=Pe();return typeof document>"u"?null:e??t??document.body},ee=Ce(({css:e,cssVar:t})=>({arrow:e`
    --lobe-popover-arrow-offset-block: 5px;
    --lobe-popover-arrow-offset-inline: 8px;

    pointer-events: none;

    position: absolute;
    transform-origin: center;

    display: flex;

    width: 12px;
    height: 6px;

    transition: inset-inline-start var(--lobe-popover-animation-duration)
      var(--lobe-popover-animation-ease-out);

    & > svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    & [data-role='fill'] {
      fill: ${t.colorBgElevated};
    }

    & [data-role='stroke'] {
      fill: none;
      stroke: ${t.colorBorder};
      stroke-width: 1px;
    }

    &[data-side='top'] {
      inset-block-end: calc(var(--lobe-popover-arrow-offset-block) * -1);
      transform: rotate(180deg);
    }

    &[data-side='left'] {
      inset-inline-end: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(90deg);
    }

    &[data-side='right'] {
      inset-inline-start: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(-90deg);
    }

    &[data-side='bottom'] {
      inset-block-start: calc(var(--lobe-popover-arrow-offset-block) * -1);
    }
  `,popup:e`
    position: relative;
    transform-origin: var(--transform-origin);

    min-width: 120px;
    max-width: var(--available-width);
    border-radius: ${t.borderRadius};

    color: ${t.colorText};

    background: ${t.colorBgElevated};
    outline: none;
    box-shadow:
      0 0 15px 0 #00000008,
      0 2px 30px 0 #00000014,
      0 0 0 1px ${t.colorBorder} inset;

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: opacity, transform;

    &[data-layout-animation] {
      transition-property: opacity, transform, width, height;
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translate3d(var(--lobe-popover-translate-x), var(--lobe-popover-translate-y), 0)
        scale(var(--lobe-popover-animation-scale));
      opacity: 0;
    }

    &[data-ending-style] {
      transition-timing-function: var(--lobe-popover-animation-ease-in);
      transition-duration: var(--lobe-popover-animation-duration-exit);
    }

    &[data-instant] {
      transition: none;
    }
  `,positioner:e`
    --lobe-popover-animation-duration: 150ms;
    --lobe-popover-animation-translate: 6px;
    --lobe-popover-animation-scale: 0.96;
    --lobe-popover-animation-ease-in: ease-in;
    --lobe-popover-animation-duration-exit: 75ms;
    --lobe-popover-animation-ease-out: ${t.motionEaseOut};
    --lobe-popover-translate-x: 0;
    --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);

    z-index: 1100;

    width: min(var(--positioner-width), var(--available-width));
    height: var(--positioner-height);

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: none;

    &[data-layout-animation] {
      transition-property:
        inset-block-start, inset-inline-start, inset-inline-end, inset-block-end, transform;
    }

    &[data-instant] {
      transition: none;
    }

    /* Fallback: never show a popover when the anchor is hidden or the positioner falls back to (0,0). */
    &[data-anchor-hidden],
    &[data-zero-origin='true'] {
      pointer-events: none;
      visibility: hidden;
    }

    &[data-placement='top'],
    &[data-placement='topLeft'],
    &[data-placement='topRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: var(--lobe-popover-animation-translate);
    }

    &[data-placement='bottom'],
    &[data-placement='bottomLeft'],
    &[data-placement='bottomRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);
    }

    &[data-placement='left'],
    &[data-placement='leftTop'],
    &[data-placement='leftBottom'] {
      --lobe-popover-translate-x: var(--lobe-popover-animation-translate);
      --lobe-popover-translate-y: 0;
    }

    &[data-placement='right'],
    &[data-placement='rightTop'],
    &[data-placement='rightBottom'] {
      --lobe-popover-translate-x: calc(var(--lobe-popover-animation-translate) * -1);
      --lobe-popover-translate-y: 0;
    }
  `,root:e`
    user-select: none;
    position: relative;
    filter: drop-shadow(0 2px 8px rgb(0 0 0 / 12%));
  `,viewport:e`
    --lobe-popover-viewport-inline-padding: 12px;

    position: relative;

    overflow: clip;

    max-width: var(--available-width);
    padding-block: 12px;
    padding-inline: var(--lobe-popover-viewport-inline-padding);

    [data-previous],
    [data-current] {
      transform: translateX(0);
      opacity: 1;
      transition:
        transform var(--lobe-popover-animation-duration) var(--lobe-popover-animation-ease-out),
        opacity calc(var(--lobe-popover-animation-duration) / 2)
          var(--lobe-popover-animation-ease-out);
    }

    [data-previous] {
      position: absolute;
      inset-block-start: 12px;
      inset-inline-start: var(--lobe-popover-viewport-inline-padding);
    }

    &[data-activation-direction~='right'] [data-previous][data-ending-style] {
      transform: translateX(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='right'] [data-current][data-starting-style] {
      transform: translateX(50%);
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-previous][data-ending-style] {
      transform: translateX(50%);
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-current][data-starting-style] {
      transform: translateX(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-previous][data-ending-style] {
      transform: translateY(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-current][data-starting-style] {
      transform: translateY(50%);
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-previous][data-ending-style] {
      transform: translateY(50%);
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-current][data-starting-style] {
      transform: translateY(-50%);
      opacity: 0;
    }
  `})),me=o.createContext(void 0);function $(e){const t=o.useContext(me);if(t===void 0&&!e)throw new Error(W(47));return t}function Tt(){return{...Me(),disabled:!1,modal:!1,instantType:void 0,openMethod:null,openChangeReason:null,titleElementId:void 0,descriptionElementId:void 0,stickIfOpen:!0,nested:!1,openOnHover:!1,closeDelay:0}}const Et={...Ee,disabled:G(e=>e.disabled),instantType:G(e=>e.instantType),openMethod:G(e=>e.openMethod),openChangeReason:G(e=>e.openChangeReason),modal:G(e=>e.modal),stickIfOpen:G(e=>e.stickIfOpen),titleElementId:G(e=>e.titleElementId),descriptionElementId:G(e=>e.descriptionElementId),openOnHover:G(e=>e.openOnHover),closeDelay:G(e=>e.closeDelay)};class te extends Re{constructor(t){const n={...Tt(),...t};n.open&&t?.mounted===void 0&&(n.mounted=!0),super(n,{popupRef:o.createRef(),backdropRef:o.createRef(),internalBackdropRef:o.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerFocusTargetRef:o.createRef(),beforeContentFocusGuardRef:o.createRef(),stickIfOpenTimeout:new Te,triggerElements:new Se},Et)}setOpen=(t,n)=>{const a=n.reason===X,v=n.reason===oe&&n.event.detail===0,i=!t&&(n.reason===we||n.reason==null);if(n.preventUnmountOnClose=()=>{this.set("preventUnmountingOnClose",!0)},this.context.onOpenChange?.(t,n),n.isCanceled)return;const u={open:t,nativeEvent:n.event,reason:n.reason,nested:this.state.nested,triggerElement:n.trigger};this.state.floatingRootContext.context.events?.emit("openchange",u);const r=()=>{const c={open:t,openChangeReason:n.reason},s=n.trigger?.id??null;(s||t)&&(c.activeTriggerId=s,c.activeTriggerElement=n.trigger??null),this.update(c)};a?(this.set("stickIfOpen",!0),this.context.stickIfOpenTimeout.start(Oe,()=>{this.set("stickIfOpen",!1)}),ne.flushSync(r)):r(),v||i?this.set("instantType",v?"click":"dismiss"):n.reason===re?this.set("instantType","focus"):this.set("instantType",void 0)};static useStore(t,n){const a=Ie(()=>t??new te(n)).current;return ke(a.disposeEffect),a}disposeEffect=()=>this.context.stickIfOpenTimeout.disposeEffect()}function ie({props:e}){const{children:t,open:n,defaultOpen:a=!1,onOpenChange:v,onOpenChangeComplete:i,modal:u=!1,handle:g,triggerId:r,defaultTriggerId:c=null}=e,s=te.useStore(g?.store,{open:n??a,modal:u,activeTriggerId:r!==void 0?r:c});s.useControlledProp("open",n,a),s.useControlledProp("activeTriggerId",r,c);const f=s.useState("open"),h=s.useState("positionerElement"),C=s.useState("payload"),O=s.useState("openChangeReason");s.useContextCallback("onOpenChange",v),s.useContextCallback("onOpenChangeComplete",i);const{openMethod:d,triggerProps:y,reset:x}=vt(f);Ae(s);const{forceUnmount:p}=je(f,s,()=>{s.update({stickIfOpen:!0,openChangeReason:null}),x()});mt(f&&u===!0&&O!==X&&d!=="touch",h),o.useEffect(()=>{f||s.context.stickIfOpenTimeout.clear()},[s,f]);const F=o.useCallback(b=>{const w=Y(b);return w.preventUnmountOnClose=()=>{s.set("preventUnmountingOnClose",!0)},w},[s]),P=o.useCallback(()=>{s.setOpen(!1,F(se))},[s,F]);o.useImperativeHandle(e.actionsRef,()=>({unmount:p,close:P}),[p,P]);const E=Ne({popupStore:s,onOpenChange:s.setOpen}),I=Be(E,{outsidePressEvent:{mouse:u==="trap-focus"?"sloppy":"intentional",touch:"sloppy"}}),R=Ct(E),{getReferenceProps:j,getFloatingProps:k,getTriggerProps:T}=ue([I,R]),H=o.useMemo(()=>j(y),[j,y]),A=o.useMemo(()=>T(y),[T,y]),N=o.useMemo(()=>k(),[k]);s.useSyncedValues({modal:u,openMethod:d,activeTriggerProps:H,inactiveTriggerProps:A,popupProps:N,floatingRootContext:E,nested:He()!=null});const L=o.useMemo(()=>({store:s}),[s]);return l.jsx(me.Provider,{value:L,children:typeof t=="function"?t({payload:C}):t})}function wt(e){return $(!0)?l.jsx(ie,{props:e}):l.jsx(Fe,{children:l.jsx(ie,{props:e})})}const Ot=300,le=o.forwardRef(function(t,n){const{render:a,className:v,disabled:i=!1,nativeButton:u=!0,handle:g,payload:r,openOnHover:c=!1,delay:s=Ot,closeDelay:f=0,id:h,...C}=t,O=$(!0),d=g?.store??O?.store;if(!d)throw new Error(W(74));const y=Le(h),x=d.useState("isTriggerActive",y),p=d.useState("floatingRootContext"),F=d.useState("isOpenedByTrigger",y),P=o.useRef(null),{registerTrigger:E,isMountedByThisTrigger:I}=Ge(y,P,d,{payload:r,disabled:i,openOnHover:c,closeDelay:f}),R=d.useState("openChangeReason"),j=d.useState("stickIfOpen"),k=d.useState("openMethod"),T=De(p,{enabled:p!=null&&c&&(k!=="touch"||R!==oe),mouseOnly:!0,move:!1,handleClose:$e(),restMs:s,delay:{close:f},triggerElementRef:P,isActiveTrigger:x}),H=ht(p,{enabled:p!=null,stickIfOpen:j}),A=ue([H]),N=d.useState("triggerProps",I),L=o.useMemo(()=>({disabled:i,open:F}),[i,F]),{getButtonProps:b,buttonRef:w}=Ue({disabled:i,native:u}),D=o.useMemo(()=>({open(m){return m&&R===oe?Ke.open(m):_e.open(m)}}),[R]),M=K("button",t,{state:L,ref:[w,n,E,P],props:[A.getReferenceProps(),T,N,{[ze]:"",id:y},C,b],stateAttributesMapping:D}),U=o.useRef(null),_=J(m=>{ne.flushSync(()=>{d.setOpen(!1,Y(re,m.nativeEvent,m.currentTarget))}),Ye(U.current)?.focus()}),z=J(m=>{const S=d.select("positionerElement");if(S&&We(m,S))d.context.beforeContentFocusGuardRef.current?.focus();else{ne.flushSync(()=>{d.setOpen(!1,Y(re,m.nativeEvent,m.currentTarget))});let B=Xe(P.current);for(;B!==null&&qe(S,B)||B?.hasAttribute("aria-hidden");){const V=B;if(B=Ve(B),B===V)break}B?.focus()}});return x?l.jsxs(o.Fragment,{children:[l.jsx(ae,{ref:U,onFocus:_}),l.jsx(o.Fragment,{children:M},y),l.jsx(ae,{ref:d.context.triggerFocusTargetRef,onFocus:z})]}):l.jsx(o.Fragment,{children:M},y)}),he=o.createContext(void 0);function It(){const e=o.useContext(he);if(e===void 0)throw new Error(W(45));return e}const kt=o.forwardRef(function(t,n){const{keepMounted:a=!1,...v}=t,{store:i}=$();return i.useState("mounted")||a?l.jsx(he.Provider,{value:a,children:l.jsx(Ze,{ref:n,...v,renderGuards:!1})}):null}),be=o.createContext(void 0);function ye(){const e=o.useContext(be);if(!e)throw new Error(W(46));return e}const Mt=o.forwardRef(function(t,n){const{render:a,className:v,anchor:i,positionMethod:u="absolute",side:g="bottom",align:r="center",sideOffset:c=0,alignOffset:s=0,collisionBoundary:f="clipping-ancestors",collisionPadding:h=5,arrowPadding:C=5,sticky:O=!1,disableAnchorTracking:d=!1,collisionAvoidance:y=Je,...x}=t,{store:p}=$(),F=It(),P=Qe(),E=p.useState("floatingRootContext"),I=p.useState("mounted"),R=p.useState("open"),j=p.useState("openChangeReason"),k=p.useState("activeTriggerElement"),T=p.useState("modal"),H=p.useState("positionerElement"),A=p.useState("instantType"),N=p.useState("transitionStatus"),L=o.useRef(null),b=de(H,!1,!1),w=et({anchor:i,floatingRootContext:E,positionMethod:u,mounted:I,side:g,sideOffset:c,align:r,alignOffset:s,arrowPadding:C,collisionBoundary:f,collisionPadding:h,sticky:O,disableAnchorTracking:d,keepMounted:F,nodeId:P,collisionAvoidance:y,adaptiveOrigin:tt}),D=o.useMemo(()=>{const S={};return R||(S.pointerEvents="none"),{role:"presentation",hidden:!I,style:{...w.positionerStyles,...S}}},[R,I,w.positionerStyles]),M=o.useMemo(()=>({props:D,...w}),[D,w]),U=E?.select("domReferenceElement");Z(()=>{const S=U,B=L.current;if(S&&(L.current=S),B&&S&&S!==B){p.set("instantType",void 0);const V=new AbortController;return b(()=>{p.set("instantType","trigger-change")},V.signal),()=>{V.abort()}}},[U,b,p]);const _=o.useMemo(()=>({open:R,side:M.side,align:M.align,anchorHidden:M.anchorHidden,instant:A}),[R,M.side,M.align,M.anchorHidden,A]),z=o.useCallback(S=>{p.set("positionerElement",S)},[p]),m=K("div",t,{state:_,props:[M.props,fe(N),x],ref:[n,z],stateAttributesMapping:Q});return l.jsxs(be.Provider,{value:M,children:[I&&T===!0&&j!==X&&l.jsx(bt,{ref:p.context.internalBackdropRef,inert:ge(!R),cutout:k}),l.jsx(ot,{id:P,children:m})]})}),Ft={...Q,...ve},At=o.forwardRef(function(t,n){const{className:a,render:v,initialFocus:i,finalFocus:u,...g}=t,{store:r}=$(),c=ye(),s=yt()!=null,f=nt(),h=r.useState("open"),C=r.useState("openMethod"),O=r.useState("instantType"),d=r.useState("transitionStatus"),y=r.useState("popupProps"),x=r.useState("titleElementId"),p=r.useState("descriptionElementId"),F=r.useState("modal"),P=r.useState("mounted"),E=r.useState("openChangeReason"),I=r.useState("popupElement"),R=r.useState("payload"),j=r.useState("positionerElement"),k=r.useState("activeTriggerElement"),T=r.useState("floatingRootContext");rt({open:h,ref:r.context.popupRef,onComplete(){h&&r.context.onOpenChangeComplete?.(!0)}});const H=r.useState("disabled"),A=r.useState("openOnHover"),N=r.useState("closeDelay");st(T,{enabled:A&&!H,closeDelay:N});function L(m){return m==="touch"?r.context.popupRef.current:!0}const b=i===void 0?L:i,w=o.useMemo(()=>({open:h,side:c.side,align:c.align,instant:O,transitionStatus:d}),[h,c.side,c.align,O,d]),D=o.useCallback(m=>{r.set("popupElement",m)},[r]);function M(){T.context.events.emit("measure-layout")}function U(m,S){T.context.events.emit("measure-layout-complete",{previousDimensions:m,nextDimensions:S})}const _=o.useCallback(()=>r.context.triggerElements.size>1,[r]);at({popupElement:I,positionerElement:j,mounted:P,content:R,enabled:_,onMeasureLayout:M,onMeasureLayoutComplete:U,side:c.side,direction:f});const z=K("div",t,{state:w,ref:[n,r.context.popupRef,D],props:[y,{"aria-labelledby":x,"aria-describedby":p,onKeyDown(m){s&&Pt.has(m.key)&&m.stopPropagation()}},fe(d),g],stateAttributesMapping:Ft});return l.jsx(xt,{context:T,openInteractionType:C,modal:F==="trap-focus",disabled:!P||E===X,initialFocus:b,returnFocus:u,restoreFocus:"popup",previousFocusableElement:it(k)?k:void 0,nextFocusableElement:r.context.triggerFocusTargetRef,beforeContentFocusGuardRef:r.context.beforeContentFocusGuardRef,children:z})}),jt=o.forwardRef(function(t,n){const{className:a,render:v,...i}=t,{store:u}=$(),g=u.useState("open"),{arrowRef:r,side:c,align:s,arrowUncentered:f,arrowStyles:h}=ye(),C=o.useMemo(()=>({open:g,side:c,align:s,uncentered:f}),[g,c,s,f]);return K("div",t,{state:C,ref:[n,r],props:[{style:h,"aria-hidden":!0},i],stateAttributesMapping:Q})}),Nt={...Q,...ve},Bt=o.forwardRef(function(t,n){const{className:a,render:v,...i}=t,{store:u}=$(),g=u.useState("open"),r=u.useState("mounted"),c=u.useState("transitionStatus"),s=u.useState("openChangeReason"),f=o.useMemo(()=>({open:g,transitionStatus:c}),[g,c]);return K("div",t,{state:f,ref:[u.context.backdropRef,n],props:[{role:"presentation",hidden:!r,style:{pointerEvents:s===X?"none":void 0,userSelect:"none",WebkitUserSelect:"none"}},i],stateAttributesMapping:Nt})});let pe=(function(e){return e.popupWidth="--popup-width",e.popupHeight="--popup-height",e})({});const Ht={activationDirection:e=>e?{"data-activation-direction":e}:null},Lt=o.forwardRef(function(t,n){const{render:a,className:v,children:i,...u}=t,{store:g}=$(),r=g.useState("activeTriggerElement"),c=g.useState("open"),s=g.useState("floatingRootContext"),f=lt(c?r:null),h=o.useRef(null),[C,O]=o.useState(null),[d,y]=o.useState(null),x=o.useRef(null),p=o.useRef(null),F=de(x,!0,!1),P=pt(),[E,I]=o.useState(null),[R,j]=o.useState(!1);Z(()=>{const b=x.current;if(!b)return;const w=document.createElement("div");for(const D of Array.from(b.childNodes))w.appendChild(D.cloneNode(!0));h.current=w});const k=J(()=>{x.current?.style.setProperty("animation","none"),x.current?.style.setProperty("transition","none"),p.current?.style.setProperty("display","none")}),T=J(b=>{x.current?.style.removeProperty("animation"),x.current?.style.removeProperty("transition"),p.current?.style.removeProperty("display"),E||I(b.previousDimensions)});o.useEffect(()=>(s.context.events.on("measure-layout",k),s.context.events.on("measure-layout-complete",T),()=>{s.context.events.off("measure-layout",k),s.context.events.off("measure-layout-complete",T)}),[s,k,T]);const H=o.useRef(null);Z(()=>{if(r&&f&&r!==f&&H.current!==r&&h.current){O(h.current),j(!0);const b=Dt(f,r);y(b),P.request(()=>{P.request(()=>{j(!1),F(()=>{O(null),I(null),h.current=null})})}),H.current=r}},[r,f,C,F,P]);const A=C!=null;let N;A?N=l.jsxs(o.Fragment,{children:[l.jsx("div",{"data-previous":!0,inert:ge(!0),ref:p,style:{[pe.popupWidth]:`${E?.width}px`,[pe.popupHeight]:`${E?.height}px`,position:"absolute"},"data-ending-style":R?void 0:""},"previous"),l.jsx("div",{"data-current":!0,ref:x,"data-starting-style":R?"":void 0,children:i},"current")]}):N=l.jsx("div",{"data-current":!0,ref:x,children:i},"current"),Z(()=>{const b=p.current;!b||!C||b.replaceChildren(...Array.from(C.childNodes))},[C]);const L=o.useMemo(()=>({activationDirection:Gt(d),transitioning:A}),[d,A]);return K("div",t,{state:L,ref:n,props:[u,{children:N}],stateAttributesMapping:Ht})});function Gt(e){if(e)return`${ce(e.horizontal,5,"right","left")} ${ce(e.vertical,5,"down","up")}`}function ce(e,t,n,a){return e>t?n:e<-t?a:""}function Dt(e,t){const n=e.getBoundingClientRect(),a=t.getBoundingClientRect(),v={x:n.left+n.width/2,y:n.top+n.height/2},i={x:a.left+a.width/2,y:a.top+a.height/2};return{horizontal:i.x-v.x,vertical:i.y-v.y}}class $t{constructor(){this.store=new te}open(t){const n=t?this.store.context.triggerElements.getById(t)??void 0:void 0;if(t&&!n)throw new Error(W(80,t));this.store.setOpen(!0,Y(se,void 0,n))}close(){this.store.setOpen(!1,Y(se,void 0,void 0))}get isOpen(){return this.store.state.open}}function eo(){return new $t}const to=wt,oo=Bt,Ut=({children:e,className:t,nativeButton:n,ref:a,...v})=>{const{isNativeButtonTriggerElement:i,resolvedNativeButton:u}=dt({children:e,nativeButton:n});return o.isValidElement(e)?l.jsx(le,{...v,nativeButton:u,render:(g,r)=>{const c=(()=>{if(i)return g;const{type:C,ref:O,...d}=g;return d})(),s=ft(e.props,c),f=typeof s.className=="function"?s.className(r):s.className,h=typeof t=="function"?t(r):t;return o.cloneElement(e,{...s,className:q(f,h),ref:gt([e.ref,g.ref,a])})}}):l.jsx(le,{...v,className:t,nativeButton:u,ref:a,children:e})};Ut.displayName="PopoverTriggerElement";const Kt=({container:e,root:t,children:n,...a})=>{const v=St(t),i=e??v;return i?l.jsx(kt,{container:i,...a,children:n}):null};Kt.displayName="PopoverPortal";const _t=({children:e,className:t,hoverTrigger:n,placement:a,align:v,side:i,sideOffset:u,...g})=>{const r=a?ct[a]:void 0,[c,s]=o.useState(null);return l.jsx(Mt,{align:v??r?.align??"center","data-hover-trigger":n||void 0,"data-placement":a,ref:s,side:i??r?.side??"bottom",sideOffset:u??6,className:f=>q(ee.positioner,typeof t=="function"?t(f):t),...g,children:l.jsx(ut,{value:c,children:e})})};_t.displayName="PopoverPositioner";const zt=({className:e,...t})=>l.jsx(At,{className:n=>q(ee.popup,typeof e=="function"?e(n):e),...t});zt.displayName="PopoverPopup";const Yt=({className:e,children:t,...n})=>l.jsx(jt,{className:a=>q(ee.arrow,typeof e=="function"?e(a):e),...n,children:t??Rt});Yt.displayName="PopoverArrow";const Wt=({className:e,...t})=>l.jsx(Lt,{className:n=>q(ee.viewport,typeof e=="function"?e(n):e),...t});Wt.displayName="PopoverViewport";const Xt=()=>{},xe=o.createContext({close:Xt}),no=o.memo(({children:e,value:t})=>l.jsx(xe,{value:t,children:e})),ro=()=>o.use(xe),so=o.createContext(null),ao=o.createContext(null);export{so as P,ao as a,wt as b,eo as c,no as d,_t as e,zt as f,Yt as g,Rt as h,Wt as i,Kt as j,ro as k,le as l,Ut as m,to as n,Bt as o,oo as p,St as u};
