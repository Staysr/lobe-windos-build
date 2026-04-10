import{j as lt,fP as le,fZ as U,ki as ee,kc as te,fV as Pe,fX as je,kM as it,fS as ie,kN as _,jT as Te,kk as ct,kg as dt,k5 as ut,ka as pt,kb as ft,jO as mt,kO as gt,kP as xt,fQ as St,kQ as ht,kR as bt,kS as yt,jW as Ct,kT as kt,jH as vt,k7 as wt,jZ as Ie,kU as Mt,kV as Pt,kW as jt,kX as Tt,jL as W,jP as It,kY as Nt,jV as Rt,kZ as Et,k4 as Bt,cw as Ne,m as w,e0 as ce,k_ as Re,cU as Ee,aJ as Be,d$ as be,Z as Dt,cS as Ot,jR as q,jG as $t,jN as At,fU as Ft,dP as Ht,dO as se,ag as Ut}from"./index-C275yc7e.js";import{cs as Pn,k$ as jn,l0 as Tn,l1 as In,l2 as Nn,l3 as Rn,l4 as En,l5 as Bn,l6 as Dn,l7 as On,l8 as $n,l9 as An,fq as Fn,fo as Hn,fp as Un,fm as Ln,la as Gn,lb as Wn,lc as zn,ld as Kn,le as Zn,fn as Yn,N as Xn,O as _n,lf as Qn,K as Jn,R as qn,J as Vn,G as es,hb as ts,lg as os,Q as ns,lh as ss,A as rs,fl as as,bT as ls,cB as is,x as cs,li as ds}from"./index-C275yc7e.js";import{d as ps,b as fs,e as ms}from"./store-CCuKKe9Q.js";import{C as xs}from"./ContextMenuHost-eVRLvN-j.js";import{C as hs}from"./ContextMenuTrigger-BmknoHdn.js";import{P as ys}from"./PopoverGroup-BJUtQFaa.js";import{S as ks,a as vs,b as ws,c as Ms,d as Ps,e as js,f as Ts}from"./ScrollArea-B0_hd4nj.js";import{r}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as n,A as Lt,F as Gt}from"../vendor/vendor-motion-siEo8VfX.js";import{a0 as De,aA as Wt,aB as zt}from"../vendor/vendor-icons-CwKawJ1k.js";import{r as Kt}from"./devSingleton-LXnNH-iO.js";import{u as de,s as J,a as Oe,b as Zt,c as F,d as Yt,e as Xt,f as _t,g as Qt,h as Jt,i as qt,j as Vt,k as eo,l as to,m as oo,t as no,n as ye,o as so}from"./Select-CenNWF9u.js";import{S as Ns}from"./Select-CenNWF9u.js";import{S as Es,a as Bs,b as Ds,c as Os,s as $s,u as As}from"./Switch-D7Su5WVp.js";import"../i18n/i18n-zh-CN-CcVu2is6.js";import"../i18n/i18n-en-US-DqZ3IPP5.js";import"../vendor/vendor-es-toolkit-CFMjQStz.js";import"./providerConfig-BNV0IvMA.js";import"./common-c1NZRvdt.js";import"./useTranslation-DXQttwfC.js";import"./styles-DQMwmhD-.js";const ro={opacity:1,scale:1},Ce={opacity:0,scale:.96},ao={animate:ro,exit:{...Ce,transition:{duration:.15}},initial:Ce,transition:{damping:20,stiffness:300,type:"spring"}},lo={duration:.15},b=lt(({css:t,cssVar:e})=>({backdrop:t`
    position: fixed;
    z-index: 1000;
    inset: 0;

    background: color-mix(in srgb, ${e.colorBgContainer} 60%, transparent);

    transition: opacity 150ms ease-out;

    &[data-starting-style],
    &[data-ending-style] {
      opacity: 0;
    }
  `,close:t`
    cursor: pointer;

    position: absolute;
    inset-block-start: 12px;
    inset-inline-end: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: ${e.borderRadiusSM};

    color: ${e.colorTextTertiary};

    background: transparent;

    transition: all 150ms ease-out;

    &:hover {
      color: ${e.colorText};
      background: ${e.colorFillSecondary};
    }

    &:focus-visible {
      outline: 2px solid ${e.colorPrimaryBorder};
      outline-offset: 1px;
    }
  `,closeInline:t`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: ${e.borderRadiusSM};

    color: ${e.colorTextTertiary};

    background: transparent;

    transition: all 150ms ease-out;

    &:hover {
      color: ${e.colorText};
      background: ${e.colorFillSecondary};
    }

    &:focus-visible {
      outline: 2px solid ${e.colorPrimaryBorder};
      outline-offset: 1px;
    }
  `,content:t`
    overflow: hidden auto;
    padding-block: 12px;
    padding-inline: 16px;
  `,footer:t`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-start: 1px solid ${e.colorBorderSecondary};
  `,header:t`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${e.colorBorderSecondary};
  `,headerDraggable:t`
    cursor: default;
    user-select: none;
  `,popup:t`
    pointer-events: none;

    position: fixed;
    z-index: 1001;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  `,popupInner:t`
    pointer-events: auto;

    position: relative;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    width: calc(100% - 32px);
    max-width: 520px;
    max-height: calc(100dvh - 64px);
    border: 1px solid ${e.colorBorderSecondary};
    border-radius: 12px;

    background: ${e.colorBgContainer};
    box-shadow: ${e.boxShadow};

    transition:
      transform 150ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 150ms ease-out;

    &[data-starting-style],
    &[data-ending-style] {
      transform: scale(0.96) translateY(4px);
      opacity: 0;
    }
  `,title:t`
    margin: 0;

    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: ${e.colorText};
  `,buttonBase:t`
    cursor: pointer;

    display: inline-flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    height: 36px;
    padding-block: 0;
    padding-inline: 16px;
    border: 1px solid ${e.colorBorder};
    border-radius: ${e.borderRadiusSM};

    font-size: 14px;
    font-weight: 500;
    line-height: 1;

    transition: all 150ms ease-out;

    &:focus-visible {
      outline: 2px solid ${e.colorPrimaryBorder};
      outline-offset: 1px;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,cancelButton:t`
    color: ${e.colorText};
    background: ${e.colorBgContainer};

    &:hover:not(:disabled) {
      border-color: ${e.colorPrimaryBorder};
      color: ${e.colorPrimaryText};
    }
  `,loadingSpinner:t`
    @keyframes modal-spin {
      to {
        transform: rotate(360deg);
      }
    }

    display: inline-block;

    width: 14px;
    height: 14px;
    border: 2px solid currentcolor;
    border-block-start-color: transparent;
    border-radius: 50%;

    animation: modal-spin 0.6s linear infinite;
  `,dangerOkButton:t`
    border-color: ${e.colorError};
    color: #fff;
    background: ${e.colorError};

    &:hover:not(:disabled) {
      border-color: ${e.colorErrorHover};
      background: ${e.colorErrorHover};
    }

    &:active:not(:disabled) {
      border-color: ${e.colorErrorActive};
      background: ${e.colorErrorActive};
    }
  `,fullscreenPopupInner:t`
    width: 100% !important;
    max-width: 100% !important;
    height: 100dvh !important;
    max-height: 100dvh !important;
    border: none;
    border-radius: 0;
  `,fullscreenToggle:t`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    border-radius: ${e.borderRadiusSM};

    color: ${e.colorTextTertiary};

    background: transparent;

    transition: all 150ms ease-out;

    &:hover {
      color: ${e.colorText};
      background: ${e.colorFillSecondary};
    }

    &:focus-visible {
      outline: 2px solid ${e.colorPrimaryBorder};
      outline-offset: 1px;
    }
  `,headerActions:t`
    display: flex;
    gap: 4px;
    align-items: center;
    margin-inline-end: -4px;
  `,okButton:t`
    border-color: ${e.colorPrimary};
    color: #fff;
    background: ${e.colorPrimary};

    &:hover:not(:disabled) {
      border-color: ${e.colorPrimaryHover};
      background: ${e.colorPrimaryHover};
    }

    &:active:not(:disabled) {
      border-color: ${e.colorPrimaryActive};
      background: ${e.colorPrimaryActive};
    }
  `,denyAnimation:t`
    @keyframes modal-deny {
      0% {
        outline-color: ${e.colorPrimary};
        outline-offset: 0;
      }

      100% {
        outline-color: transparent;
        outline-offset: 4px;
      }
    }

    outline: 2px solid transparent;
    animation: modal-deny 400ms ease-out;
  `,viewport:t`
    position: fixed;
    z-index: 1000;
    inset: 0;
    overflow: auto;
  `})),$e=r.createContext(void 0);function z(t){const e=r.useContext($e);if(t===!1&&e===void 0)throw new Error(le(27));return e}const io={...te,...ee},ke=r.forwardRef(function(e,o){const{render:d,className:i,forceRender:a=!1,...l}=e,{store:c}=z(),s=c.useState("open"),u=c.useState("nested"),f=c.useState("mounted"),S=c.useState("transitionStatus"),g=r.useMemo(()=>({open:s,transitionStatus:S}),[s,S]);return U("div",e,{state:g,ref:[c.context.backdropRef,o],stateAttributesMapping:io,props:[{role:"presentation",hidden:!f,style:{userSelect:"none",WebkitUserSelect:"none"}},l],enabled:a||!u})}),co=r.forwardRef(function(e,o){const{render:d,className:i,disabled:a=!1,nativeButton:l=!0,...c}=e,{store:s}=z(),u=s.useState("open");function f(x){u&&s.setOpen(!1,je(it,x.nativeEvent))}const{getButtonProps:S,buttonRef:g}=Pe({disabled:a,native:l}),h=r.useMemo(()=>({disabled:a}),[a]);return U("button",e,{state:h,ref:[o,g],props:[{onClick:f},c,S]})}),uo=r.forwardRef(function(e,o){const{render:d,className:i,id:a,...l}=e,{store:c}=z(),s=ie(a);return c.useSyncedValueWithCleanup("descriptionElementId",s),U("p",e,{ref:o,props:[{id:s},l]})});let po=(function(t){return t.nestedDialogs="--nested-dialogs",t})({}),fo=(function(t){return t[t.open=_.open]="open",t[t.closed=_.closed]="closed",t[t.startingStyle=_.startingStyle]="startingStyle",t[t.endingStyle=_.endingStyle]="endingStyle",t.nested="data-nested",t.nestedDialogOpen="data-nested-dialog-open",t})({});const Ae=r.createContext(void 0);function Fe(){const t=r.useContext(Ae);if(t===void 0)throw new Error(le(26));return t}const mo={...te,...ee,nestedDialogOpen(t){return t?{[fo.nestedDialogOpen]:""}:null}},ve=r.forwardRef(function(e,o){const{className:d,finalFocus:i,initialFocus:a,render:l,...c}=e,{store:s}=z(),u=s.useState("descriptionElementId"),f=s.useState("disablePointerDismissal"),S=s.useState("floatingRootContext"),g=s.useState("popupProps"),h=s.useState("modal"),x=s.useState("mounted"),y=s.useState("nested"),m=s.useState("nestedOpenDialogCount"),p=s.useState("open"),C=s.useState("openMethod"),k=s.useState("titleElementId"),v=s.useState("transitionStatus"),R=s.useState("role");Fe(),Te({open:p,ref:s.context.popupRef,onComplete(){p&&s.context.onOpenChangeComplete?.(!0)}});function I(M){return M==="touch"?s.context.popupRef.current:!0}const H=a===void 0?I:a,B=m>0,L=r.useMemo(()=>({open:p,nested:y,transitionStatus:v,nestedDialogOpen:B}),[p,y,v,B]),j=U("div",e,{state:L,props:[g,{"aria-labelledby":k??void 0,"aria-describedby":u??void 0,role:R,tabIndex:-1,hidden:!x,onKeyDown(M){ct.has(M.key)&&M.stopPropagation()},style:{[po.nestedDialogs]:m}},c],ref:[o,s.context.popupRef,s.useStateSetter("popupElement")],stateAttributesMapping:mo});return n.jsx(dt,{context:S,openInteractionType:C,disabled:!x,closeOnFocusOut:!f,initialFocus:H,returnFocus:i,modal:h!==!1,restoreFocus:"popup",children:j})}),go=r.forwardRef(function(e,o){const{keepMounted:d=!1,...i}=e,{store:a}=z(),l=a.useState("mounted"),c=a.useState("modal");return l||d?n.jsx(Ae.Provider,{value:d,children:n.jsxs(ut,{ref:o,...i,children:[l&&c===!0&&n.jsx(pt,{ref:a.context.internalBackdropRef,inert:ft(!open)}),e.children]})}):null});function xo(t){const{store:e,parentContext:o,actionsRef:d}=t,i=e.useState("open"),a=e.useState("disablePointerDismissal"),l=e.useState("modal"),c=e.useState("popupElement"),{openMethod:s,triggerProps:u,reset:f}=mt(i);gt(e);const{forceUnmount:S}=xt(i,e,()=>{f()}),g=St(j=>{const M=je(j);return M.preventUnmountOnClose=()=>{e.set("preventUnmountingOnClose",!0)},M}),h=r.useCallback(()=>{e.setOpen(!1,g(ht))},[e,g]);r.useImperativeHandle(d,()=>({unmount:S,close:h}),[S,h]);const x=bt({popupStore:e,onOpenChange:e.setOpen,treatPopupAsFloatingElement:!0,noEmit:!0}),[y,m]=r.useState(0),p=y===0,C=yt(x),k=Ct(x,{outsidePressEvent(){return e.context.internalBackdropRef.current||e.context.backdropRef.current?"intentional":{mouse:l==="trap-focus"?"sloppy":"intentional",touch:"sloppy"}},outsidePress(j){if("button"in j&&j.button!==0||"touches"in j&&j.touches.length!==1)return!1;const M=kt(j);if(p&&!a){const E=M;return l&&(e.context.internalBackdropRef.current||e.context.backdropRef.current)?e.context.internalBackdropRef.current===E||e.context.backdropRef.current===E||vt(E,c)&&!E?.hasAttribute("data-base-ui-portal"):!0}return!1},escapeKey:p});wt(i&&l===!0,c);const{getReferenceProps:v,getFloatingProps:R,getTriggerProps:I}=Ie([C,k]);e.useContextCallback("onNestedDialogOpen",j=>{m(j+1)}),e.useContextCallback("onNestedDialogClose",()=>{m(0)}),r.useEffect(()=>(o?.onNestedDialogOpen&&i&&o.onNestedDialogOpen(y),o?.onNestedDialogClose&&!i&&o.onNestedDialogClose(),()=>{o?.onNestedDialogClose&&i&&o.onNestedDialogClose()}),[i,o,y]);const H=r.useMemo(()=>v(u),[v,u]),B=r.useMemo(()=>I(u),[I,u]),L=r.useMemo(()=>R(),[R]);e.useSyncedValues({openMethod:s,activeTriggerProps:H,inactiveTriggerProps:B,popupProps:L,floatingRootContext:x,nestedOpenDialogCount:y})}const So={...jt,modal:W(t=>t.modal),nested:W(t=>t.nested),nestedOpenDialogCount:W(t=>t.nestedOpenDialogCount),disablePointerDismissal:W(t=>t.disablePointerDismissal),openMethod:W(t=>t.openMethod),descriptionElementId:W(t=>t.descriptionElementId),titleElementId:W(t=>t.titleElementId),viewportElement:W(t=>t.viewportElement),role:W(t=>t.role)};class ho extends Mt{constructor(e){super(bo(e),{popupRef:r.createRef(),backdropRef:r.createRef(),internalBackdropRef:r.createRef(),triggerElements:new Pt,onOpenChange:void 0,onOpenChangeComplete:void 0},So)}setOpen=(e,o)=>{if(o.preventUnmountOnClose=()=>{this.set("preventUnmountingOnClose",!0)},!e&&o.trigger==null&&this.state.activeTriggerId!=null&&(o.trigger=this.state.activeTriggerElement??void 0),this.context.onOpenChange?.(e,o),o.isCanceled)return;const d={open:e,nativeEvent:o.event,reason:o.reason,nested:this.state.nested};this.state.floatingRootContext.context.events?.emit("openchange",d);const i={open:e},a=o.trigger?.id??null;(a||e)&&(i.activeTriggerId=a,i.activeTriggerElement=o.trigger??null),this.update(i)}}function bo(t={}){return{...Tt(),modal:!0,disablePointerDismissal:!1,popupElement:null,viewportElement:null,descriptionElementId:void 0,titleElementId:void 0,openMethod:null,nested:!1,nestedOpenDialogCount:0,role:"dialog",...t}}function He(t){const{children:e,open:o,defaultOpen:d=!1,onOpenChange:i,onOpenChangeComplete:a,disablePointerDismissal:l=!1,modal:c=!0,actionsRef:s,handle:u,triggerId:f,defaultTriggerId:S=null}=t,g=z(!0),h=!!g,x=It(()=>u?.store??new ho({open:o??d,activeTriggerId:f!==void 0?f:S,modal:c,disablePointerDismissal:l,nested:h})).current;x.useControlledProp("open",o,d),x.useControlledProp("activeTriggerId",f,S),x.useSyncedValues({disablePointerDismissal:l,nested:h,modal:c}),x.useContextCallback("onOpenChange",i),x.useContextCallback("onOpenChangeComplete",a);const y=x.useState("payload");xo({store:x,actionsRef:s,parentContext:g?.store.context});const m=r.useMemo(()=>({store:x}),[x]);return n.jsx($e.Provider,{value:m,children:typeof e=="function"?e({payload:y}):e})}let we=(function(t){return t[t.open=_.open]="open",t[t.closed=_.closed]="closed",t[t.startingStyle=_.startingStyle]="startingStyle",t[t.endingStyle=_.endingStyle]="endingStyle",t.nested="data-nested",t.nestedDialogOpen="data-nested-dialog-open",t})({});const yo={...te,...ee,nested(t){return t?{[we.nested]:""}:null},nestedDialogOpen(t){return t?{[we.nestedDialogOpen]:""}:null}},Co=r.forwardRef(function(e,o){const{className:d,render:i,children:a,...l}=e,c=Fe(),{store:s}=z(),u=s.useState("open"),f=s.useState("nested"),S=s.useState("transitionStatus"),g=s.useState("nestedOpenDialogCount"),h=s.useState("mounted"),x=g>0,y=r.useMemo(()=>({open:u,nested:f,transitionStatus:S,nestedDialogOpen:x}),[u,f,S,x]);return U("div",e,{enabled:c||h,state:y,ref:[o,s.useStateSetter("viewportElement")],stateAttributesMapping:yo,props:[{role:"presentation",hidden:!h,children:a},l]})}),ko=r.forwardRef(function(e,o){const{render:d,className:i,id:a,...l}=e,{store:c}=z(),s=ie(a);return c.useSyncedValueWithCleanup("titleElementId",s),U("h2",e,{ref:o,props:[{id:s},l]})}),Me=r.forwardRef(function(e,o){const{render:d,className:i,disabled:a=!1,nativeButton:l=!0,id:c,payload:s,handle:u,...f}=e,S=z(!0),g=u?.store??S?.store;if(!g)throw new Error(le(79));const h=ie(c),x=g.useState("floatingRootContext"),y=g.useState("isOpenedByTrigger",h),m=r.useRef(null),{registerTrigger:p,isMountedByThisTrigger:C}=Nt(h,m,g,{payload:s}),{getButtonProps:k,buttonRef:v}=Pe({disabled:a,native:l}),R=Rt(x,{enabled:x!=null}),I=Ie([R]),H=r.useMemo(()=>({disabled:a,open:y}),[a,y]),B=g.useState("triggerProps",C);return U("button",e,{state:H,ref:[v,o,p,m],props:[I.getReferenceProps(),B,{[Et]:"",id:h},f,k],stateAttributesMapping:Bt})}),oe=(t,e)=>typeof e=="function"?o=>w(t,e(o)):w(t,e),Ue=r.createContext(null),Le=r.createContext(null),Ge=()=>r.use(Ue),vo=()=>r.use(Le),wo=({open:t,children:e,onExitComplete:o,...d})=>{const[i,a]=r.useState(!!t);r.useEffect(()=>{t&&a(!0)},[t]);const l=r.useCallback(()=>{a(!1),o?.()},[o]),c=r.useMemo(()=>({onExitComplete:l}),[l]);return i?n.jsx(Ue,{value:t,children:n.jsx(Le,{value:c,children:n.jsx(He,{modal:!0,open:!0,...d,children:e})})}):null},We=({open:t,onExitComplete:e,...o})=>t!==void 0?n.jsx(wo,{open:t,onExitComplete:e,...o}):n.jsx(He,{modal:!0,...o}),ze=({container:t,...e})=>{const o=ce();return n.jsx(go,{container:t??o??void 0,...e})},gn=({className:t,...e})=>n.jsx(Co,{...e,className:oe(b.viewport,t)}),Ke=({className:t,style:e,...o})=>{const d=Ge(),i=Ne();return d!==null?n.jsx(ke,{...o,className:w(b.backdrop,t),style:{...e,transition:"none"},render:n.jsx(i.div,{animate:{opacity:d?1:0},initial:{opacity:0},transition:lo})}):n.jsx(ke,{...o,className:oe(b.backdrop,t),style:e})},Ze=({className:t,children:e,width:o,style:d,motionProps:i,panelClassName:a,popupStyle:l,...c})=>{const s=Ge(),u=vo(),f=Ne();return s!==null&&u?n.jsx(ve,{...c,className:w(b.popup,t),style:l,children:n.jsx(Lt,{onExitComplete:u.onExitComplete,children:s?r.createElement(f.div,{...ao,...i,className:w(b.popupInner,a),key:"modal-popup-panel",style:{maxWidth:o??void 0,transition:"none",...d}},e):null})}):n.jsx(ve,{...c,className:oe(b.popup,t),style:l,children:n.jsx("div",{className:w(b.popupInner,a),style:{maxWidth:o??void 0,...d},children:e})})},Ye=({className:t,...e})=>n.jsx("div",{...e,className:w(b.header,t)}),Xe=({className:t,...e})=>n.jsx(ko,{...e,className:oe(b.title,t)}),xn=uo,_e=({className:t,...e})=>n.jsx("div",{...e,className:w(b.content,t)}),Qe=({className:t,...e})=>n.jsx("div",{...e,className:w(b.footer,t)}),Mo=({className:t,children:e,...o})=>n.jsx(co,{...o,className:oe(b.close,t),children:e??n.jsx(De,{size:18})}),Sn=({children:t,className:e,nativeButton:o,ref:d,...i})=>{const{isNativeButtonTriggerElement:a,resolvedNativeButton:l}=Re({children:t,nativeButton:o}),c=s=>{const u=(()=>{if(a)return s;const{type:f,...S}=s;return S})();return r.cloneElement(t,{...Be(t.props,u),ref:Ee([t.ref,s.ref,d])})};return r.isValidElement(t)?n.jsx(Me,{...i,className:e,nativeButton:l,render:c}):n.jsx(Me,{...i,className:e,nativeButton:l,ref:d,children:t})},Je=r.createContext({close:()=>{},setCanDismissByClickOutside:()=>{}}),Po=()=>r.use(Je),jo=({children:t,root:e})=>{const o=ce();return Dt.createPortal(t,e??o??document.body)},qe=({config:t})=>{const{close:e}=Po(),[o,d]=r.useState(!1),{cancelText:i="Cancel",content:a,okButtonProps:l,okText:c="OK",onCancel:s,onOk:u}=t,{danger:f,className:S,...g}=l??{},h=r.useCallback(()=>{e(),s?.()},[e,s]),x=r.useCallback(async()=>{if(u)try{const y=u();y&&typeof y.then=="function"&&(d(!0),await y,d(!1))}catch{d(!1);return}e()},[e,u]);return n.jsxs(n.Fragment,{children:[a&&n.jsx("div",{style:{padding:"16px 24px"},children:a}),n.jsxs(Qe,{children:[n.jsx("button",{className:w(b.buttonBase,b.cancelButton),type:"button",onClick:h,children:i}),n.jsxs("button",{...g,disabled:o,type:"button",className:w(b.buttonBase,f?b.dangerOkButton:b.okButton,S),onClick:x,children:[o&&n.jsx("span",{className:b.loadingSpinner}),c]})]})]})};qe.displayName="ConfirmBody";function To(){let t=[],e=0;const o=new Set,d=()=>o.forEach(m=>m()),i=m=>(o.add(m),()=>o.delete(m)),a=[],l=()=>t,c=()=>a,s=(m,p)=>{let C=!1;t=t.map(k=>k.id!==m?k:(C=!0,{...k,props:{...k.props,...p}})),C&&d()},u=m=>{s(m,{open:!1})},f=m=>{const p=t.filter(C=>C.id!==m);p.length!==t.length&&(t=p,d())},S=r.memo(({entry:m})=>{const{id:p,props:C}=m,{children:k,classNames:v,content:R,footer:I,maskClosable:H,onOpenChange:B,onOpenChangeComplete:L,open:j,styles:M,title:E,width:K}=C,P=j??!0,D=r.useCallback((N,G)=>{!N&&H===!1&&G?.reason==="outside-press"||(N||u(p),B?.(N))},[p,H,B]),Q=r.useCallback(()=>{L?.(!1),f(p)},[p,L]),ne=r.useCallback(()=>u(p),[p]),A=r.useCallback(N=>s(p,{maskClosable:N}),[p]),Z=E!==void 0&&E!==!1&&E!==null;return n.jsx(Je,{value:{close:ne,setCanDismissByClickOutside:A},children:n.jsx(We,{open:P,onExitComplete:Q,onOpenChange:D,children:n.jsxs(ze,{children:[n.jsx(Ke,{className:v?.backdrop,style:M?.backdrop}),n.jsxs(Ze,{className:v?.popup,popupStyle:M?.popup,width:K,children:[Z&&n.jsxs(Ye,{className:v?.header,style:M?.header,children:[n.jsx(Xe,{className:v?.title,style:M?.title,children:E}),n.jsx(Mo,{className:v?.close,style:M?.close})]}),n.jsx(_e,{className:v?.content,style:M?.content,children:R??k}),I]})]})})})});S.displayName="ModalStackItem";const g=r.memo(({stack:m})=>be()?m.map(p=>n.jsx(S,{entry:p},p.id)):null);g.displayName="ModalStackRenderer";const h=({root:m})=>{const p=r.useSyncExternalStore(i,l,c),C=be();return r.useEffect(()=>{if(C)return Kt()},[C,m]),!C||p.length===0?null:n.jsx(jo,{root:m,children:n.jsx(g,{stack:p})})},x=m=>{const p=`base-modal-${Date.now()}-${e++}`;return t=[...t,{id:p,props:{...m,open:m.open??!0}}],d(),{close:()=>u(p),destroy:()=>f(p),setCanDismissByClickOutside:C=>s(p,{maskClosable:C}),update:C=>s(p,C)}};return{ModalHost:h,confirmModal:m=>{const p=x({content:n.jsx(qe,{config:m}),styles:{content:{padding:0}},title:m.title,width:420});return{close:p.close,destroy:p.destroy}},createModal:x}}const ue=To(),hn=ue.ModalHost,bn=ue.createModal,yn=ue.confirmModal,Io=({confirmLoading:t,okButtonProps:e,okText:o,onOk:d})=>{const{className:i,danger:a,disabled:l,onClick:c,...s}=e??{};return n.jsxs("button",{type:"button",...s,className:w(b.buttonBase,a?b.dangerOkButton:b.okButton,i),disabled:t||l,onClick:u=>{d(u),c?.(u)},children:[t&&n.jsx("span",{className:b.loadingSpinner}),o]})},No=({cancelButtonProps:t,cancelText:e,onCancel:o})=>{const{className:d,onClick:i,...a}=t??{};return n.jsx("button",{type:"button",...a,className:w(b.buttonBase,b.cancelButton,d),onClick:l=>{o(l),i?.(l)},children:e})},Ro=r.memo(({open:t,title:e,children:o,onOk:d,onCancel:i,okText:a="OK",cancelText:l="Cancel",okButtonProps:c,cancelButtonProps:s,confirmLoading:u,footer:f,width:S,height:g,maskClosable:h=!0,closable:x=!0,closeIcon:y,className:m,style:p,classNames:C,styles:k,zIndex:v,afterClose:R,afterOpenChange:I,loading:H,getContainer:B,mask:L=!0,keyboard:j,draggable:M=!0,allowFullscreen:E=!1})=>{const K=Gt(),P=r.useRef(null),[D,Q]=r.useState(!1),[ne,A]=r.useState(!1),[Z,N]=r.useState(!1),G=r.useRef(void 0);r.useEffect(()=>()=>clearTimeout(G.current),[]);const Y=r.useCallback(()=>{clearTimeout(G.current),N(!0),G.current=setTimeout(()=>N(!1),400)},[]),T=r.useCallback((O,V)=>{if(t&&!(!O&&j===!1&&V.reason==="escape-key")){if(!O&&!h&&V.reason==="outside-press"){Y();return}O||i?.(new MouseEvent("click"))}},[i,j,h,t,Y]),X=r.useCallback(()=>{Q(!1),R?.(),I?.(!1)},[R,I]),re=r.useCallback(()=>{t&&I?.(!0)},[t,I]),et=r.useCallback(O=>{M&&!D&&(K.start(O),A(!0))},[M,K,D]),pe=r.useCallback(()=>{A(!1)},[]),fe=r.useCallback(O=>{d?.(O)},[d]),ae=r.useCallback(O=>{i?.(O)},[i]),me=r.useMemo(()=>{if(f===!1||f===null)return null;const O=n.jsx(No,{cancelButtonProps:s,cancelText:l,onCancel:ae}),V=n.jsx(Io,{confirmLoading:u,okButtonProps:c,okText:a,onOk:fe}),he=n.jsxs(n.Fragment,{children:[O,V]});return typeof f=="function"?f(he,{CancelBtn:()=>O,OkBtn:()=>V}):f??he},[f,s,l,ae,u,c,a,fe]),tt=B===!1?void 0:B??void 0,ot=v?{zIndex:v}:void 0,nt=v?{zIndex:(v||1e3)+1}:void 0,ge=M&&!D,st=ge?{drag:!0,dragConstraints:P,dragControls:K,dragElastic:0,dragListener:!1,dragMomentum:!1,whileDrag:{cursor:"grabbing"}}:{},xe=e!==void 0&&e!==!1&&e!==null,rt=xe||x||E,Se=g!==void 0,at={...Se&&!D?{height:g}:{},...p};return n.jsx(We,{open:t??!1,onExitComplete:X,onOpenChange:T,children:n.jsxs(ze,{container:tt,children:[L&&n.jsx(Ke,{className:C?.mask,style:{...ot,...k?.mask}}),n.jsxs(Ze,{className:C?.wrapper,popupStyle:{...nt,...k?.wrapper},ref:P,style:at,width:D?void 0:S,motionProps:{...st,onAnimationComplete:re},panelClassName:w(m,D&&b.fullscreenPopupInner,Z&&b.denyAnimation),children:[rt&&n.jsxs(Ye,{className:w(C?.header,ge&&b.headerDraggable),style:{...ne?{cursor:"grabbing"}:{},...k?.header},onPointerCancel:pe,onPointerDown:et,onPointerUp:pe,children:[xe?n.jsx(Xe,{className:C?.title,style:k?.title,children:e}):n.jsx("span",{}),n.jsxs("div",{className:b.headerActions,onPointerDown:Ot,children:[E&&n.jsx("button",{"aria-label":D?"Exit fullscreen":"Fullscreen",className:b.fullscreenToggle,type:"button",onClick:()=>Q(O=>!O),children:D?n.jsx(Wt,{size:14}):n.jsx(zt,{size:14})}),x&&n.jsx("button",{"aria-label":"Close",className:b.closeInline,type:"button",onClick:ae,children:y??n.jsx(De,{size:18})})]})]}),n.jsx(_e,{className:C?.body,style:{...Se||D?{flex:1}:{},...k?.body},children:H?n.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"32px 0"},children:n.jsx("span",{className:b.loadingSpinner,style:{height:24,width:24}})}):o}),me!==null&&n.jsx(Qe,{className:C?.footer,style:k?.footer,children:me})]})]})})});Ro.displayName="Modal";const Eo={...te,...ee},Bo=r.forwardRef(function(e,o){const{className:d,render:i,...a}=e,{store:l}=de(),c=q(l,J.open),s=q(l,J.mounted),u=q(l,J.transitionStatus),f=r.useMemo(()=>({open:c,transitionStatus:u}),[c,u]);return U("div",e,{state:f,ref:o,props:[{role:"presentation",hidden:!s,style:{userSelect:"none",WebkitUserSelect:"none"}},a],stateAttributesMapping:Eo})}),Do={...te,...ee},Oo=r.forwardRef(function(e,o){const{className:d,render:i,...a}=e,{store:l}=de(),{side:c,align:s,arrowRef:u,arrowStyles:f,arrowUncentered:S,alignItemWithTriggerActive:g}=Oe(),h=q(l,J.open,!0),x=r.useMemo(()=>({open:h,side:c,align:s,uncentered:S}),[h,c,s,S]),y=U("div",e,{state:x,ref:[u,o],props:[{style:f,"aria-hidden":!0},a],stateAttributesMapping:Do});return g?null:y}),Ve=r.forwardRef(function(e,o){const{render:d,className:i,direction:a,keepMounted:l=!1,...c}=e,{store:s,popupRef:u,listRef:f,handleScrollArrowVisibility:S,scrollArrowsMountedCountRef:g}=de(),{side:h,scrollDownArrowRef:x,scrollUpArrowRef:y}=Oe(),m=a==="up"?J.scrollUpArrowVisible:J.scrollDownArrowVisible,p=q(s,m),C=q(s,J.openMethod),k=p&&C!=="touch",v=$t(),R=a==="up"?y:x,{transitionStatus:I,setMounted:H}=At(k);Ft(()=>(g.current+=1,s.state.hasScrollArrows||s.set("hasScrollArrows",!0),()=>{g.current=Math.max(0,g.current-1),g.current===0&&s.state.hasScrollArrows&&s.set("hasScrollArrows",!1)}),[s,g]),Te({open:k,ref:R,onComplete(){k||H(!1)}});const B=r.useMemo(()=>({direction:a,visible:k,side:h,transitionStatus:I}),[a,k,h,I]),j=U("div",e,{ref:[o,R],state:B,props:[{"aria-hidden":!0,children:a==="up"?"▲":"▼",style:{position:"absolute"},onMouseMove(E){if(E.movementX===0&&E.movementY===0||v.isStarted())return;s.set("activeIndex",null);function K(){const P=s.state.listElement??u.current;if(!P)return;s.set("activeIndex",null),S();const D=P.scrollTop===0,Q=Math.round(P.scrollTop+P.clientHeight)>=P.scrollHeight;if(f.current.length===0&&(a==="up"?s.set("scrollUpArrowVisible",!D):s.set("scrollDownArrowVisible",!Q)),a==="up"&&D||a==="down"&&Q){v.clear();return}if((s.state.listElement||u.current)&&f.current&&f.current.length>0){const A=f.current,Z=R.current?.offsetHeight||0;if(a==="up"){let N=0;const G=P.scrollTop+Z;for(let T=0;T<A.length;T+=1){const X=A[T];if(X&&X.offsetTop>=G){N=T;break}}const Y=Math.max(0,N-1);if(Y<N){const T=A[Y];T&&(P.scrollTop=Math.max(0,T.offsetTop-Z))}else P.scrollTop=0}else{let N=A.length-1;const G=P.scrollTop+P.clientHeight-Z;for(let T=0;T<A.length;T+=1){const X=A[T];if(X&&X.offsetTop+X.offsetHeight>G){N=Math.max(0,T-1);break}}const Y=Math.min(A.length-1,N+1);if(Y>N){const T=A[Y];T&&(P.scrollTop=T.offsetTop+T.offsetHeight-P.clientHeight+Z)}else P.scrollTop=P.scrollHeight-P.clientHeight}}v.start(40,K)}v.start(40,K)},onMouseLeave(){v.clear()}},c]});return k||l?j:null}),$o=r.forwardRef(function(e,o){return n.jsx(Ve,{...e,ref:o,direction:"down"})}),Ao=r.forwardRef(function(e,o){return n.jsx(Ve,{...e,ref:o,direction:"up"})}),$=(t,e)=>typeof e=="function"?o=>w(t,e(o)):w(t,e),Cn=Zt,kn=Bo,vn=Ht,Fo=({children:t,className:e,nativeButton:o,shadow:d,size:i="middle",variant:a,ref:l,...c})=>{const{isDarkMode:s}=Ut(),u=no({shadow:d,size:i,variant:a??(s?"filled":"outlined")}),{isNativeButtonTriggerElement:f,resolvedNativeButton:S}=Re({children:t,nativeButton:o});return r.isValidElement(t)?n.jsx(ye,{...c,nativeButton:S,render:(g,h)=>{const x=(()=>{if(f)return g;const{type:C,ref:k,...v}=g;return v})(),y=Be(t.props,x),m=typeof y.className=="function"?y.className(h):y.className,p=typeof e=="function"?e(h):e;return r.cloneElement(t,{...y,className:w(u,m,p),ref:Ee([t.ref,g.ref,l])})}}):n.jsx(ye,{...c,className:$(u,e),nativeButton:S,ref:l,children:t})};Fo.displayName="SelectTrigger";const Ho=({className:t,...e})=>n.jsx(_t,{className:$(F.icon,t),...e});Ho.displayName="SelectIcon";const Uo=({className:t,...e})=>n.jsx(so,{className:$(F.value,t),...e});Uo.displayName="SelectValue";const Lo=({container:t,...e})=>{const o=ce();return n.jsx(to,{container:t??o??void 0,...e})};Lo.displayName="SelectPortal";const Go=({align:t,alignItemWithTrigger:e,className:o,side:d,sideOffset:i,...a})=>n.jsx(oo,{align:t??"start",alignItemWithTrigger:e??!1,className:$(F.positioner,o),side:d??"bottom",sideOffset:i??6,...a});Go.displayName="SelectPositioner";const Wo=({className:t,...e})=>n.jsx(eo,{className:$(w(se.popup,F.popup),t),...e});Wo.displayName="SelectPopup";const zo=({className:t,...e})=>n.jsx(Vt,{className:$(F.list,t),...e});zo.displayName="SelectList";const Ko=({className:t,...e})=>n.jsx(Qt,{className:$(w(se.item,F.item),t),...e});Ko.displayName="SelectItem";const Zo=({className:t,...e})=>n.jsx(qt,{className:$(w(se.label,F.itemText),t),...e});Zo.displayName="SelectItemText";const Yo=({className:t,...e})=>n.jsx(Jt,{className:$(F.itemIndicator,t),...e});Yo.displayName="SelectItemIndicator";const Xo=({className:t,...e})=>n.jsx(Yt,{className:$(F.group,t),...e});Xo.displayName="SelectGroup";const _o=({className:t,...e})=>n.jsx(Xt,{className:$(w(se.groupLabel,F.groupLabel),t),...e});_o.displayName="SelectGroupLabel";const Qo=({className:t,...e})=>n.jsx(Ao,{className:$(F.scrollArrow,t),...e});Qo.displayName="SelectScrollUpArrow";const Jo=({className:t,...e})=>n.jsx($o,{className:$(F.scrollArrow,t),...e});Jo.displayName="SelectScrollDownArrow";const qo=({className:t,...e})=>n.jsx(Oo,{className:$(F.arrow,t),...e});qo.displayName="SelectArrow";export{xs as ContextMenuHost,hs as ContextMenuTrigger,Pn as DropdownMenu,jn as DropdownMenuCheckboxItemIndicator,Tn as DropdownMenuCheckboxItemPrimitive,In as DropdownMenuGroup,Nn as DropdownMenuGroupLabel,Rn as DropdownMenuItem,En as DropdownMenuItemContent,Bn as DropdownMenuItemDesc,Dn as DropdownMenuItemExtra,On as DropdownMenuItemIcon,$n as DropdownMenuItemLabel,An as DropdownMenuItemLabelGroup,Fn as DropdownMenuPopup,Hn as DropdownMenuPortal,Un as DropdownMenuPositioner,Ln as DropdownMenuRoot,Gn as DropdownMenuSeparator,Wn as DropdownMenuSubmenuArrow,zn as DropdownMenuSubmenuRoot,Kn as DropdownMenuSubmenuTrigger,Zn as DropdownMenuSwitchItem,Yn as DropdownMenuTrigger,Ro as Modal,Ke as ModalBackdrop,Mo as ModalClose,_e as ModalContent,Je as ModalContext,xn as ModalDescription,Qe as ModalFooter,Ye as ModalHeader,hn as ModalHost,Ze as ModalPopup,ze as ModalPortal,We as ModalRoot,Xe as ModalTitle,Sn as ModalTrigger,gn as ModalViewport,Xn as PopoverArrow,_n as PopoverArrowIcon,Qn as PopoverBackdrop,ys as PopoverGroup,Jn as PopoverPopup,qn as PopoverPortal,Vn as PopoverPositioner,es as PopoverProvider,ts as PopoverRoot,os as PopoverTriggerElement,ns as PopoverViewport,ks as ScrollArea,vs as ScrollAreaContent,ws as ScrollAreaCorner,Ms as ScrollAreaRoot,Ps as ScrollAreaScrollbar,js as ScrollAreaThumb,Ts as ScrollAreaViewport,Ns as Select,qo as SelectArrow,kn as SelectBackdrop,Xo as SelectGroup,_o as SelectGroupLabel,Ho as SelectIcon,Ko as SelectItem,Yo as SelectItemIndicator,Zo as SelectItemText,zo as SelectList,Wo as SelectPopup,Lo as SelectPortal,Go as SelectPositioner,Cn as SelectRoot,Jo as SelectScrollDownArrow,Qo as SelectScrollUpArrow,vn as SelectSeparator,Fo as SelectTrigger,Uo as SelectValue,Es as Switch,Bs as SwitchIcon,Ds as SwitchRoot,Os as SwitchThumb,ss as ToastHost,lo as backdropTransition,ps as closeContextMenu,yn as confirmModal,bn as createModal,To as createModalSystem,ao as modalMotionConfig,rs as parseTrigger,as as renderDropdownMenuItems,fs as showContextMenu,$s as switchStyles,ls as toast,ms as updateContextMenuItems,vo as useModalActions,Po as useModalContext,Ge as useModalOpen,is as usePopoverContext,cs as usePopoverPortalContainer,As as useSwitchContext,ds as useToast};
