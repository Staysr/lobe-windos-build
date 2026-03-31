import{S as it}from"./DropdownMenu-N2rBrvZu.js";import{D as Bn,w as Dn,x as On,y as An,z as Fn,A as Hn,B as Un,E as Ln,F as Gn,G as zn,H as Wn,I as $n,v as Kn,t as Yn,u as _n,q as qn,J as Qn,K as Xn,L as Zn,N as Jn,O as Vn,s as es,p as ts}from"./DropdownMenu-N2rBrvZu.js";import{u as ct}from"./parseTrigger-DE6TiFSj.js";import{p as ns}from"./parseTrigger-DE6TiFSj.js";import{d as rs,b as as,e as ls}from"./store-CCuKKe9Q.js";import{C as cs}from"./ContextMenuHost-CG6SY9If.js";import{C as us}from"./ContextMenuTrigger-BWKCuubj.js";import{g as ms,h as fs,p as gs,f as xs,j as Ss,e as hs,d as bs,n as Cs,m as ys,i as vs,k as Ms,u as ws}from"./groupContext-C7pWBaTe.js";import{P as Ps}from"./PopoverGroup-COFyRegi.js";import{S as Ts,a as js,b as Ns,c as Rs,d as Es,e as Bs,f as Ds}from"./ScrollArea-ByUbhglq.js";import{f as dt,dB as le,dK as L,gd as ee,g8 as te,dG as Pe,dI as Ie,gS as ut,dE as ie,gT as Q,ga as Te,f$ as pt,g6 as mt,fO as ft,fP as gt,dC as xt,fQ as St,fR as ht,fS as bt,e3 as Ct,e0 as yt,fT as je,fF as vt,fG as Mt,fH as wt,fL as kt,fM as W,e9 as Pt,fU as It,ex as Tt,fY as jt,bu as Ne,j as w,cj as ce,co as Re,bE as Ee,aq as Be,ci as be,E as Nt,bC as Rt,gC as J,e7 as Et,gB as Bt,dF as Dt,a3 as Ot}from"./index-Rjxk4g_I.js";import{gU as As,aY as Fs,gV as Hs}from"./index-Rjxk4g_I.js";import{r}from"../vendor/vendor-emotion-DdM-9MtU.js";import{j as n,A as At,Q as Ft}from"../vendor/vendor-motion-BIhyHZ0p.js";import{a0 as De,aA as Ht,aB as Ut}from"../vendor/vendor-icons-B5XxavR9.js";import{C as Lt,F as Gt,I as zt,u as Wt,a as $t,b as Kt}from"./useOpenInteractionType-BhmIdhIt.js";import{r as Yt}from"./devSingleton-LXnNH-iO.js";import{s as se}from"./getPseudoElementBounds-BAHa_VBA.js";import{u as de,s as Z,a as Oe,b as _t,c as H,d as qt,e as Qt,f as Xt,g as Zt,h as Jt,i as Vt,j as eo,k as to,l as oo,m as no,t as so,n as Ce,o as ro}from"./Select-BLtSmkrU.js";import{S as Ls}from"./Select-BLtSmkrU.js";import{S as zs,a as Ws,b as $s,c as Ks,s as Ys,u as _s}from"./Switch-CijNyn2V.js";import"./index-C5sBZOXs.js";import"./common-c1NZRvdt.js";import"./useTranslation-BH7wwWOT.js";import"./styles-Bs9H9Xf2.js";import"../i18n/i18n-zh-CN-CO_PhvK1.js";import"../i18n/i18n-en-US-B1hbRPog.js";import"../vendor/vendor-es-toolkit-DEdCfXFH.js";import"./providerConfig-DjTKVWb5.js";import"./index-Fm1pqgmG.js";const ao={opacity:1,scale:1},ye={opacity:0,scale:.96},lo={animate:ao,exit:{...ye,transition:{duration:.15}},initial:ye,transition:{damping:20,stiffness:300,type:"spring"}},io={duration:.15},b=dt(({css:t,cssVar:e})=>({backdrop:t`
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
  `})),Ae=r.createContext(void 0);function $(t){const e=r.useContext(Ae);if(t===!1&&e===void 0)throw new Error(le(27));return e}const co={...te,...ee},ve=r.forwardRef(function(e,o){const{render:d,className:i,forceRender:a=!1,...l}=e,{store:c}=$(),s=c.useState("open"),u=c.useState("nested"),m=c.useState("mounted"),S=c.useState("transitionStatus"),g=r.useMemo(()=>({open:s,transitionStatus:S}),[s,S]);return L("div",e,{state:g,ref:[c.context.backdropRef,o],stateAttributesMapping:co,props:[{role:"presentation",hidden:!m,style:{userSelect:"none",WebkitUserSelect:"none"}},l],enabled:a||!u})}),uo=r.forwardRef(function(e,o){const{render:d,className:i,disabled:a=!1,nativeButton:l=!0,...c}=e,{store:s}=$(),u=s.useState("open");function m(x){u&&s.setOpen(!1,Ie(ut,x.nativeEvent))}const{getButtonProps:S,buttonRef:g}=Pe({disabled:a,native:l}),h=r.useMemo(()=>({disabled:a}),[a]);return L("button",e,{state:h,ref:[o,g],props:[{onClick:m},c,S]})}),po=r.forwardRef(function(e,o){const{render:d,className:i,id:a,...l}=e,{store:c}=$(),s=ie(a);return c.useSyncedValueWithCleanup("descriptionElementId",s),L("p",e,{ref:o,props:[{id:s},l]})});let mo=(function(t){return t.nestedDialogs="--nested-dialogs",t})({}),fo=(function(t){return t[t.open=Q.open]="open",t[t.closed=Q.closed]="closed",t[t.startingStyle=Q.startingStyle]="startingStyle",t[t.endingStyle=Q.endingStyle]="endingStyle",t.nested="data-nested",t.nestedDialogOpen="data-nested-dialog-open",t})({});const Fe=r.createContext(void 0);function He(){const t=r.useContext(Fe);if(t===void 0)throw new Error(le(26));return t}const go={...te,...ee,nestedDialogOpen(t){return t?{[fo.nestedDialogOpen]:""}:null}},Me=r.forwardRef(function(e,o){const{className:d,finalFocus:i,initialFocus:a,render:l,...c}=e,{store:s}=$(),u=s.useState("descriptionElementId"),m=s.useState("disablePointerDismissal"),S=s.useState("floatingRootContext"),g=s.useState("popupProps"),h=s.useState("modal"),x=s.useState("mounted"),C=s.useState("nested"),f=s.useState("nestedOpenDialogCount"),p=s.useState("open"),y=s.useState("openMethod"),v=s.useState("titleElementId"),M=s.useState("transitionStatus"),R=s.useState("role");He(),Te({open:p,ref:s.context.popupRef,onComplete(){p&&s.context.onOpenChangeComplete?.(!0)}});function j(k){return k==="touch"?s.context.popupRef.current:!0}const U=a===void 0?j:a,B=f>0,G=r.useMemo(()=>({open:p,nested:C,transitionStatus:M,nestedDialogOpen:B}),[p,C,M,B]),I=L("div",e,{state:G,props:[g,{"aria-labelledby":v??void 0,"aria-describedby":u??void 0,role:R,tabIndex:-1,hidden:!x,onKeyDown(k){Lt.has(k.key)&&k.stopPropagation()},style:{[mo.nestedDialogs]:f}},c],ref:[o,s.context.popupRef,s.useStateSetter("popupElement")],stateAttributesMapping:go});return n.jsx(Gt,{context:S,openInteractionType:y,disabled:!x,closeOnFocusOut:!m,initialFocus:U,returnFocus:i,modal:h!==!1,restoreFocus:"popup",children:I})}),xo=r.forwardRef(function(e,o){const{keepMounted:d=!1,...i}=e,{store:a}=$(),l=a.useState("mounted"),c=a.useState("modal");return l||d?n.jsx(Fe.Provider,{value:d,children:n.jsxs(pt,{ref:o,...i,children:[l&&c===!0&&n.jsx(zt,{ref:a.context.internalBackdropRef,inert:mt(!open)}),e.children]})}):null});function So(t){const{store:e,parentContext:o,actionsRef:d}=t,i=e.useState("open"),a=e.useState("disablePointerDismissal"),l=e.useState("modal"),c=e.useState("popupElement"),{openMethod:s,triggerProps:u,reset:m}=Wt(i);ft(e);const{forceUnmount:S}=gt(i,e,()=>{m()}),g=xt(I=>{const k=Ie(I);return k.preventUnmountOnClose=()=>{e.set("preventUnmountingOnClose",!0)},k}),h=r.useCallback(()=>{e.setOpen(!1,g(St))},[e,g]);r.useImperativeHandle(d,()=>({unmount:S,close:h}),[S,h]);const x=ht({popupStore:e,onOpenChange:e.setOpen,treatPopupAsFloatingElement:!0,noEmit:!0}),[C,f]=r.useState(0),p=C===0,y=ct(x),v=bt(x,{outsidePressEvent(){return e.context.internalBackdropRef.current||e.context.backdropRef.current?"intentional":{mouse:l==="trap-focus"?"sloppy":"intentional",touch:"sloppy"}},outsidePress(I){if("button"in I&&I.button!==0||"touches"in I&&I.touches.length!==1)return!1;const k=Ct(I);if(p&&!a){const E=k;return l&&(e.context.internalBackdropRef.current||e.context.backdropRef.current)?e.context.internalBackdropRef.current===E||e.context.backdropRef.current===E||yt(E,c)&&!E?.hasAttribute("data-base-ui-portal"):!0}return!1},escapeKey:p});$t(i&&l===!0,c);const{getReferenceProps:M,getFloatingProps:R,getTriggerProps:j}=je([y,v]);e.useContextCallback("onNestedDialogOpen",I=>{f(I+1)}),e.useContextCallback("onNestedDialogClose",()=>{f(0)}),r.useEffect(()=>(o?.onNestedDialogOpen&&i&&o.onNestedDialogOpen(C),o?.onNestedDialogClose&&!i&&o.onNestedDialogClose(),()=>{o?.onNestedDialogClose&&i&&o.onNestedDialogClose()}),[i,o,C]);const U=r.useMemo(()=>M(u),[M,u]),B=r.useMemo(()=>j(u),[j,u]),G=r.useMemo(()=>R(),[R]);e.useSyncedValues({openMethod:s,activeTriggerProps:U,inactiveTriggerProps:B,popupProps:G,floatingRootContext:x,nestedOpenDialogCount:C})}const ho={...wt,modal:W(t=>t.modal),nested:W(t=>t.nested),nestedOpenDialogCount:W(t=>t.nestedOpenDialogCount),disablePointerDismissal:W(t=>t.disablePointerDismissal),openMethod:W(t=>t.openMethod),descriptionElementId:W(t=>t.descriptionElementId),titleElementId:W(t=>t.titleElementId),viewportElement:W(t=>t.viewportElement),role:W(t=>t.role)};class bo extends vt{constructor(e){super(Co(e),{popupRef:r.createRef(),backdropRef:r.createRef(),internalBackdropRef:r.createRef(),triggerElements:new Mt,onOpenChange:void 0,onOpenChangeComplete:void 0},ho)}setOpen=(e,o)=>{if(o.preventUnmountOnClose=()=>{this.set("preventUnmountingOnClose",!0)},!e&&o.trigger==null&&this.state.activeTriggerId!=null&&(o.trigger=this.state.activeTriggerElement??void 0),this.context.onOpenChange?.(e,o),o.isCanceled)return;const d={open:e,nativeEvent:o.event,reason:o.reason,nested:this.state.nested};this.state.floatingRootContext.context.events?.emit("openchange",d);const i={open:e},a=o.trigger?.id??null;(a||e)&&(i.activeTriggerId=a,i.activeTriggerElement=o.trigger??null),this.update(i)}}function Co(t={}){return{...kt(),modal:!0,disablePointerDismissal:!1,popupElement:null,viewportElement:null,descriptionElementId:void 0,titleElementId:void 0,openMethod:null,nested:!1,nestedOpenDialogCount:0,role:"dialog",...t}}function Ue(t){const{children:e,open:o,defaultOpen:d=!1,onOpenChange:i,onOpenChangeComplete:a,disablePointerDismissal:l=!1,modal:c=!0,actionsRef:s,handle:u,triggerId:m,defaultTriggerId:S=null}=t,g=$(!0),h=!!g,x=Pt(()=>u?.store??new bo({open:o??d,activeTriggerId:m!==void 0?m:S,modal:c,disablePointerDismissal:l,nested:h})).current;x.useControlledProp("open",o,d),x.useControlledProp("activeTriggerId",m,S),x.useSyncedValues({disablePointerDismissal:l,nested:h,modal:c}),x.useContextCallback("onOpenChange",i),x.useContextCallback("onOpenChangeComplete",a);const C=x.useState("payload");So({store:x,actionsRef:s,parentContext:g?.store.context});const f=r.useMemo(()=>({store:x}),[x]);return n.jsx(Ae.Provider,{value:f,children:typeof e=="function"?e({payload:C}):e})}let we=(function(t){return t[t.open=Q.open]="open",t[t.closed=Q.closed]="closed",t[t.startingStyle=Q.startingStyle]="startingStyle",t[t.endingStyle=Q.endingStyle]="endingStyle",t.nested="data-nested",t.nestedDialogOpen="data-nested-dialog-open",t})({});const yo={...te,...ee,nested(t){return t?{[we.nested]:""}:null},nestedDialogOpen(t){return t?{[we.nestedDialogOpen]:""}:null}},vo=r.forwardRef(function(e,o){const{className:d,render:i,children:a,...l}=e,c=He(),{store:s}=$(),u=s.useState("open"),m=s.useState("nested"),S=s.useState("transitionStatus"),g=s.useState("nestedOpenDialogCount"),h=s.useState("mounted"),x=g>0,C=r.useMemo(()=>({open:u,nested:m,transitionStatus:S,nestedDialogOpen:x}),[u,m,S,x]);return L("div",e,{enabled:c||h,state:C,ref:[o,s.useStateSetter("viewportElement")],stateAttributesMapping:yo,props:[{role:"presentation",hidden:!h,children:a},l]})}),Mo=r.forwardRef(function(e,o){const{render:d,className:i,id:a,...l}=e,{store:c}=$(),s=ie(a);return c.useSyncedValueWithCleanup("titleElementId",s),L("h2",e,{ref:o,props:[{id:s},l]})}),ke=r.forwardRef(function(e,o){const{render:d,className:i,disabled:a=!1,nativeButton:l=!0,id:c,payload:s,handle:u,...m}=e,S=$(!0),g=u?.store??S?.store;if(!g)throw new Error(le(79));const h=ie(c),x=g.useState("floatingRootContext"),C=g.useState("isOpenedByTrigger",h),f=r.useRef(null),{registerTrigger:p,isMountedByThisTrigger:y}=It(h,f,g,{payload:s}),{getButtonProps:v,buttonRef:M}=Pe({disabled:a,native:l}),R=Kt(x,{enabled:x!=null}),j=je([R]),U=r.useMemo(()=>({disabled:a,open:C}),[a,C]),B=g.useState("triggerProps",y);return L("button",e,{state:U,ref:[M,o,p,f],props:[j.getReferenceProps(),B,{[Tt]:"",id:h},m,v],stateAttributesMapping:jt})}),oe=(t,e)=>typeof e=="function"?o=>w(t,e(o)):w(t,e),Le=r.createContext(null),Ge=r.createContext(null),ze=()=>r.use(Le),wo=()=>r.use(Ge),ko=({open:t,children:e,onExitComplete:o,...d})=>{const[i,a]=r.useState(!!t);r.useEffect(()=>{t&&a(!0)},[t]);const l=r.useCallback(()=>{a(!1),o?.()},[o]),c=r.useMemo(()=>({onExitComplete:l}),[l]);return i?n.jsx(Le,{value:t,children:n.jsx(Ge,{value:c,children:n.jsx(Ue,{modal:!0,open:!0,...d,children:e})})}):null},We=({open:t,onExitComplete:e,...o})=>t!==void 0?n.jsx(ko,{open:t,onExitComplete:e,...o}):n.jsx(Ue,{modal:!0,...o}),$e=({container:t,...e})=>{const o=ce();return n.jsx(xo,{container:t??o??void 0,...e})},yn=({className:t,...e})=>n.jsx(vo,{...e,className:oe(b.viewport,t)}),Ke=({className:t,style:e,...o})=>{const d=ze(),i=Ne();return d!==null?n.jsx(ve,{...o,className:w(b.backdrop,t),style:{...e,transition:"none"},render:n.jsx(i.div,{animate:{opacity:d?1:0},initial:{opacity:0},transition:io})}):n.jsx(ve,{...o,className:oe(b.backdrop,t),style:e})},Ye=({className:t,children:e,width:o,style:d,motionProps:i,panelClassName:a,popupStyle:l,...c})=>{const s=ze(),u=wo(),m=Ne();return s!==null&&u?n.jsx(Me,{...c,className:w(b.popup,t),style:l,children:n.jsx(At,{onExitComplete:u.onExitComplete,children:s?r.createElement(m.div,{...lo,...i,className:w(b.popupInner,a),key:"modal-popup-panel",style:{maxWidth:o??void 0,transition:"none",...d}},e):null})}):n.jsx(Me,{...c,className:oe(b.popup,t),style:l,children:n.jsx("div",{className:w(b.popupInner,a),style:{maxWidth:o??void 0,...d},children:e})})},_e=({className:t,...e})=>n.jsx("div",{...e,className:w(b.header,t)}),qe=({className:t,...e})=>n.jsx(Mo,{...e,className:oe(b.title,t)}),vn=po,Qe=({className:t,...e})=>n.jsx("div",{...e,className:w(b.content,t)}),Xe=({className:t,...e})=>n.jsx("div",{...e,className:w(b.footer,t)}),Po=({className:t,children:e,...o})=>n.jsx(uo,{...o,className:oe(b.close,t),children:e??n.jsx(De,{size:18})}),Mn=({children:t,className:e,nativeButton:o,ref:d,...i})=>{const{isNativeButtonTriggerElement:a,resolvedNativeButton:l}=Re({children:t,nativeButton:o}),c=s=>{const u=(()=>{if(a)return s;const{type:m,...S}=s;return S})();return r.cloneElement(t,{...Be(t.props,u),ref:Ee([t.ref,s.ref,d])})};return r.isValidElement(t)?n.jsx(ke,{...i,className:e,nativeButton:l,render:c}):n.jsx(ke,{...i,className:e,nativeButton:l,ref:d,children:t})},Ze=r.createContext({close:()=>{},setCanDismissByClickOutside:()=>{}}),Io=()=>r.use(Ze),To=({children:t,root:e})=>{const o=ce();return Nt.createPortal(t,e??o??document.body)},Je=({config:t})=>{const{close:e}=Io(),[o,d]=r.useState(!1),{cancelText:i="Cancel",content:a,okButtonProps:l,okText:c="OK",onCancel:s,onOk:u}=t,{danger:m,className:S,...g}=l??{},h=r.useCallback(()=>{e(),s?.()},[e,s]),x=r.useCallback(async()=>{if(u)try{const C=u();C&&typeof C.then=="function"&&(d(!0),await C,d(!1))}catch{d(!1);return}e()},[e,u]);return n.jsxs(n.Fragment,{children:[a&&n.jsx("div",{style:{padding:"16px 24px"},children:a}),n.jsxs(Xe,{children:[n.jsx("button",{className:w(b.buttonBase,b.cancelButton),type:"button",onClick:h,children:i}),n.jsxs("button",{...g,disabled:o,type:"button",className:w(b.buttonBase,m?b.dangerOkButton:b.okButton,S),onClick:x,children:[o&&n.jsx("span",{className:b.loadingSpinner}),c]})]})]})};Je.displayName="ConfirmBody";function jo(){let t=[],e=0;const o=new Set,d=()=>o.forEach(f=>f()),i=f=>(o.add(f),()=>o.delete(f)),a=[],l=()=>t,c=()=>a,s=(f,p)=>{let y=!1;t=t.map(v=>v.id!==f?v:(y=!0,{...v,props:{...v.props,...p}})),y&&d()},u=f=>{s(f,{open:!1})},m=f=>{const p=t.filter(y=>y.id!==f);p.length!==t.length&&(t=p,d())},S=r.memo(({entry:f})=>{const{id:p,props:y}=f,{children:v,classNames:M,content:R,footer:j,maskClosable:U,onOpenChange:B,onOpenChangeComplete:G,open:I,styles:k,title:E,width:K}=y,P=I??!0,D=r.useCallback((N,z)=>{!N&&U===!1&&z?.reason==="outside-press"||(N||u(p),B?.(N))},[p,U,B]),X=r.useCallback(()=>{G?.(!1),m(p)},[p,G]),ne=r.useCallback(()=>u(p),[p]),F=r.useCallback(N=>s(p,{maskClosable:N}),[p]),Y=E!==void 0&&E!==!1&&E!==null;return n.jsx(Ze,{value:{close:ne,setCanDismissByClickOutside:F},children:n.jsx(We,{open:P,onExitComplete:X,onOpenChange:D,children:n.jsxs($e,{children:[n.jsx(Ke,{className:M?.backdrop,style:k?.backdrop}),n.jsxs(Ye,{className:M?.popup,popupStyle:k?.popup,width:K,children:[Y&&n.jsxs(_e,{className:M?.header,style:k?.header,children:[n.jsx(qe,{className:M?.title,style:k?.title,children:E}),n.jsx(Po,{className:M?.close,style:k?.close})]}),n.jsx(Qe,{className:M?.content,style:k?.content,children:R??v}),j]})]})})})});S.displayName="ModalStackItem";const g=r.memo(({stack:f})=>be()?f.map(p=>n.jsx(S,{entry:p},p.id)):null);g.displayName="ModalStackRenderer";const h=({root:f})=>{const p=r.useSyncExternalStore(i,l,c),y=be();return r.useEffect(()=>{if(y)return Yt()},[y,f]),!y||p.length===0?null:n.jsx(To,{root:f,children:n.jsx(g,{stack:p})})},x=f=>{const p=`base-modal-${Date.now()}-${e++}`;return t=[...t,{id:p,props:{...f,open:f.open??!0}}],d(),{close:()=>u(p),destroy:()=>m(p),setCanDismissByClickOutside:y=>s(p,{maskClosable:y}),update:y=>s(p,y)}};return{ModalHost:h,confirmModal:f=>{const p=x({content:n.jsx(Je,{config:f}),styles:{content:{padding:0}},title:f.title,width:420});return{close:p.close,destroy:p.destroy}},createModal:x}}const ue=jo(),wn=ue.ModalHost,kn=ue.createModal,Pn=ue.confirmModal,No=({confirmLoading:t,okButtonProps:e,okText:o,onOk:d})=>{const{className:i,danger:a,disabled:l,onClick:c,...s}=e??{};return n.jsxs("button",{type:"button",...s,className:w(b.buttonBase,a?b.dangerOkButton:b.okButton,i),disabled:t||l,onClick:u=>{d(u),c?.(u)},children:[t&&n.jsx("span",{className:b.loadingSpinner}),o]})},Ro=({cancelButtonProps:t,cancelText:e,onCancel:o})=>{const{className:d,onClick:i,...a}=t??{};return n.jsx("button",{type:"button",...a,className:w(b.buttonBase,b.cancelButton,d),onClick:l=>{o(l),i?.(l)},children:e})},Ve=r.memo(({open:t,title:e,children:o,onOk:d,onCancel:i,okText:a="OK",cancelText:l="Cancel",okButtonProps:c,cancelButtonProps:s,confirmLoading:u,footer:m,width:S,height:g,maskClosable:h=!0,closable:x=!0,closeIcon:C,className:f,style:p,classNames:y,styles:v,zIndex:M,afterClose:R,afterOpenChange:j,loading:U,getContainer:B,mask:G=!0,keyboard:I,draggable:k=!0,allowFullscreen:E=!1})=>{const K=Ft(),P=r.useRef(null),[D,X]=r.useState(!1),[ne,F]=r.useState(!1),[Y,N]=r.useState(!1),z=r.useRef(void 0);r.useEffect(()=>()=>clearTimeout(z.current),[]);const _=r.useCallback(()=>{clearTimeout(z.current),N(!0),z.current=setTimeout(()=>N(!1),400)},[]),T=r.useCallback((O,V)=>{if(t&&!(!O&&I===!1&&V.reason==="escape-key")){if(!O&&!h&&V.reason==="outside-press"){_();return}O||i?.(new MouseEvent("click"))}},[i,I,h,t,_]),q=r.useCallback(()=>{X(!1),R?.(),j?.(!1)},[R,j]),re=r.useCallback(()=>{t&&j?.(!0)},[t,j]),tt=r.useCallback(O=>{k&&!D&&(K.start(O),F(!0))},[k,K,D]),pe=r.useCallback(()=>{F(!1)},[]),me=r.useCallback(O=>{d?.(O)},[d]),ae=r.useCallback(O=>{i?.(O)},[i]),fe=r.useMemo(()=>{if(m===!1||m===null)return null;const O=n.jsx(Ro,{cancelButtonProps:s,cancelText:l,onCancel:ae}),V=n.jsx(No,{confirmLoading:u,okButtonProps:c,okText:a,onOk:me}),he=n.jsxs(n.Fragment,{children:[O,V]});return typeof m=="function"?m(he,{CancelBtn:()=>O,OkBtn:()=>V}):m??he},[m,s,l,ae,u,c,a,me]),ot=B===!1?void 0:B??void 0,nt=M?{zIndex:M}:void 0,st=M?{zIndex:(M||1e3)+1}:void 0,ge=k&&!D,rt=ge?{drag:!0,dragConstraints:P,dragControls:K,dragElastic:0,dragListener:!1,dragMomentum:!1,whileDrag:{cursor:"grabbing"}}:{},xe=e!==void 0&&e!==!1&&e!==null,at=xe||x||E,Se=g!==void 0,lt={...Se&&!D?{height:g}:{},...p};return n.jsx(We,{open:t??!1,onExitComplete:q,onOpenChange:T,children:n.jsxs($e,{container:ot,children:[G&&n.jsx(Ke,{className:y?.mask,style:{...nt,...v?.mask}}),n.jsxs(Ye,{className:y?.wrapper,popupStyle:{...st,...v?.wrapper},ref:P,style:lt,width:D?void 0:S,motionProps:{...rt,onAnimationComplete:re},panelClassName:w(f,D&&b.fullscreenPopupInner,Y&&b.denyAnimation),children:[at&&n.jsxs(_e,{className:w(y?.header,ge&&b.headerDraggable),style:{...ne?{cursor:"grabbing"}:{},...v?.header},onPointerCancel:pe,onPointerDown:tt,onPointerUp:pe,children:[xe?n.jsx(qe,{className:y?.title,style:v?.title,children:e}):n.jsx("span",{}),n.jsxs("div",{className:b.headerActions,onPointerDown:Rt,children:[E&&n.jsx("button",{"aria-label":D?"Exit fullscreen":"Fullscreen",className:b.fullscreenToggle,type:"button",onClick:()=>X(O=>!O),children:D?n.jsx(Ht,{size:14}):n.jsx(Ut,{size:14})}),x&&n.jsx("button",{"aria-label":"Close",className:b.closeInline,type:"button",onClick:ae,children:C??n.jsx(De,{size:18})})]})]}),n.jsx(Qe,{className:y?.body,style:{...Se||D?{flex:1}:{},...v?.body},children:U?n.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"32px 0"},children:n.jsx("span",{className:b.loadingSpinner,style:{height:24,width:24}})}):o}),fe!==null&&n.jsx(Xe,{className:y?.footer,style:v?.footer,children:fe})]})]})})});Ve.displayName="Modal";var In=Ve;const Eo={...te,...ee},Bo=r.forwardRef(function(e,o){const{className:d,render:i,...a}=e,{store:l}=de(),c=J(l,Z.open),s=J(l,Z.mounted),u=J(l,Z.transitionStatus),m=r.useMemo(()=>({open:c,transitionStatus:u}),[c,u]);return L("div",e,{state:m,ref:o,props:[{role:"presentation",hidden:!s,style:{userSelect:"none",WebkitUserSelect:"none"}},a],stateAttributesMapping:Eo})}),Do={...te,...ee},Oo=r.forwardRef(function(e,o){const{className:d,render:i,...a}=e,{store:l}=de(),{side:c,align:s,arrowRef:u,arrowStyles:m,arrowUncentered:S,alignItemWithTriggerActive:g}=Oe(),h=J(l,Z.open,!0),x=r.useMemo(()=>({open:h,side:c,align:s,uncentered:S}),[h,c,s,S]),C=L("div",e,{state:x,ref:[u,o],props:[{style:m,"aria-hidden":!0},a],stateAttributesMapping:Do});return g?null:C}),et=r.forwardRef(function(e,o){const{render:d,className:i,direction:a,keepMounted:l=!1,...c}=e,{store:s,popupRef:u,listRef:m,handleScrollArrowVisibility:S,scrollArrowsMountedCountRef:g}=de(),{side:h,scrollDownArrowRef:x,scrollUpArrowRef:C}=Oe(),f=a==="up"?Z.scrollUpArrowVisible:Z.scrollDownArrowVisible,p=J(s,f),y=J(s,Z.openMethod),v=p&&y!=="touch",M=Et(),R=a==="up"?C:x,{transitionStatus:j,setMounted:U}=Bt(v);Dt(()=>(g.current+=1,s.state.hasScrollArrows||s.set("hasScrollArrows",!0),()=>{g.current=Math.max(0,g.current-1),g.current===0&&s.state.hasScrollArrows&&s.set("hasScrollArrows",!1)}),[s,g]),Te({open:v,ref:R,onComplete(){v||U(!1)}});const B=r.useMemo(()=>({direction:a,visible:v,side:h,transitionStatus:j}),[a,v,h,j]),I=L("div",e,{ref:[o,R],state:B,props:[{"aria-hidden":!0,children:a==="up"?"▲":"▼",style:{position:"absolute"},onMouseMove(E){if(E.movementX===0&&E.movementY===0||M.isStarted())return;s.set("activeIndex",null);function K(){const P=s.state.listElement??u.current;if(!P)return;s.set("activeIndex",null),S();const D=P.scrollTop===0,X=Math.round(P.scrollTop+P.clientHeight)>=P.scrollHeight;if(m.current.length===0&&(a==="up"?s.set("scrollUpArrowVisible",!D):s.set("scrollDownArrowVisible",!X)),a==="up"&&D||a==="down"&&X){M.clear();return}if((s.state.listElement||u.current)&&m.current&&m.current.length>0){const F=m.current,Y=R.current?.offsetHeight||0;if(a==="up"){let N=0;const z=P.scrollTop+Y;for(let T=0;T<F.length;T+=1){const q=F[T];if(q&&q.offsetTop>=z){N=T;break}}const _=Math.max(0,N-1);if(_<N){const T=F[_];T&&(P.scrollTop=Math.max(0,T.offsetTop-Y))}else P.scrollTop=0}else{let N=F.length-1;const z=P.scrollTop+P.clientHeight-Y;for(let T=0;T<F.length;T+=1){const q=F[T];if(q&&q.offsetTop+q.offsetHeight>z){N=Math.max(0,T-1);break}}const _=Math.min(F.length-1,N+1);if(_>N){const T=F[_];T&&(P.scrollTop=T.offsetTop+T.offsetHeight-P.clientHeight+Y)}else P.scrollTop=P.scrollHeight-P.clientHeight}}M.start(40,K)}M.start(40,K)},onMouseLeave(){M.clear()}},c]});return v||l?I:null}),Ao=r.forwardRef(function(e,o){return n.jsx(et,{...e,ref:o,direction:"down"})}),Fo=r.forwardRef(function(e,o){return n.jsx(et,{...e,ref:o,direction:"up"})}),A=(t,e)=>typeof e=="function"?o=>w(t,e(o)):w(t,e),Tn=_t,jn=Bo,Nn=it,Ho=({children:t,className:e,nativeButton:o,shadow:d,size:i="middle",variant:a,ref:l,...c})=>{const{isDarkMode:s}=Ot(),u=so({shadow:d,size:i,variant:a??(s?"filled":"outlined")}),{isNativeButtonTriggerElement:m,resolvedNativeButton:S}=Re({children:t,nativeButton:o});return r.isValidElement(t)?n.jsx(Ce,{...c,nativeButton:S,render:(g,h)=>{const x=(()=>{if(m)return g;const{type:y,ref:v,...M}=g;return M})(),C=Be(t.props,x),f=typeof C.className=="function"?C.className(h):C.className,p=typeof e=="function"?e(h):e;return r.cloneElement(t,{...C,className:w(u,f,p),ref:Ee([t.ref,g.ref,l])})}}):n.jsx(Ce,{...c,className:A(u,e),nativeButton:S,ref:l,children:t})};Ho.displayName="SelectTrigger";const Uo=({className:t,...e})=>n.jsx(Xt,{className:A(H.icon,t),...e});Uo.displayName="SelectIcon";const Lo=({className:t,...e})=>n.jsx(ro,{className:A(H.value,t),...e});Lo.displayName="SelectValue";const Go=({container:t,...e})=>{const o=ce();return n.jsx(oo,{container:t??o??void 0,...e})};Go.displayName="SelectPortal";const zo=({align:t,alignItemWithTrigger:e,className:o,side:d,sideOffset:i,...a})=>n.jsx(no,{align:t??"start",alignItemWithTrigger:e??!1,className:A(H.positioner,o),side:d??"bottom",sideOffset:i??6,...a});zo.displayName="SelectPositioner";const Wo=({className:t,...e})=>n.jsx(to,{className:A(w(se.popup,H.popup),t),...e});Wo.displayName="SelectPopup";const $o=({className:t,...e})=>n.jsx(eo,{className:A(H.list,t),...e});$o.displayName="SelectList";const Ko=({className:t,...e})=>n.jsx(Zt,{className:A(w(se.item,H.item),t),...e});Ko.displayName="SelectItem";const Yo=({className:t,...e})=>n.jsx(Vt,{className:A(w(se.label,H.itemText),t),...e});Yo.displayName="SelectItemText";const _o=({className:t,...e})=>n.jsx(Jt,{className:A(H.itemIndicator,t),...e});_o.displayName="SelectItemIndicator";const qo=({className:t,...e})=>n.jsx(qt,{className:A(H.group,t),...e});qo.displayName="SelectGroup";const Qo=({className:t,...e})=>n.jsx(Qt,{className:A(w(se.groupLabel,H.groupLabel),t),...e});Qo.displayName="SelectGroupLabel";const Xo=({className:t,...e})=>n.jsx(Fo,{className:A(H.scrollArrow,t),...e});Xo.displayName="SelectScrollUpArrow";const Zo=({className:t,...e})=>n.jsx(Ao,{className:A(H.scrollArrow,t),...e});Zo.displayName="SelectScrollDownArrow";const Jo=({className:t,...e})=>n.jsx(Oo,{className:A(H.arrow,t),...e});Jo.displayName="SelectArrow";export{cs as ContextMenuHost,us as ContextMenuTrigger,Bn as DropdownMenu,Dn as DropdownMenuCheckboxItemIndicator,On as DropdownMenuCheckboxItemPrimitive,An as DropdownMenuGroup,Fn as DropdownMenuGroupLabel,Hn as DropdownMenuItem,Un as DropdownMenuItemContent,Ln as DropdownMenuItemDesc,Gn as DropdownMenuItemExtra,zn as DropdownMenuItemIcon,Wn as DropdownMenuItemLabel,$n as DropdownMenuItemLabelGroup,Kn as DropdownMenuPopup,Yn as DropdownMenuPortal,_n as DropdownMenuPositioner,qn as DropdownMenuRoot,Qn as DropdownMenuSeparator,Xn as DropdownMenuSubmenuArrow,Zn as DropdownMenuSubmenuRoot,Jn as DropdownMenuSubmenuTrigger,Vn as DropdownMenuSwitchItem,es as DropdownMenuTrigger,In as Modal,Ke as ModalBackdrop,Po as ModalClose,Qe as ModalContent,Ze as ModalContext,vn as ModalDescription,Xe as ModalFooter,_e as ModalHeader,wn as ModalHost,Ye as ModalPopup,$e as ModalPortal,We as ModalRoot,qe as ModalTitle,Mn as ModalTrigger,yn as ModalViewport,ms as PopoverArrow,fs as PopoverArrowIcon,gs as PopoverBackdrop,Ps as PopoverGroup,xs as PopoverPopup,Ss as PopoverPortal,hs as PopoverPositioner,bs as PopoverProvider,Cs as PopoverRoot,ys as PopoverTriggerElement,vs as PopoverViewport,Ts as ScrollArea,js as ScrollAreaContent,Ns as ScrollAreaCorner,Rs as ScrollAreaRoot,Es as ScrollAreaScrollbar,Bs as ScrollAreaThumb,Ds as ScrollAreaViewport,Ls as Select,Jo as SelectArrow,jn as SelectBackdrop,qo as SelectGroup,Qo as SelectGroupLabel,Uo as SelectIcon,Ko as SelectItem,_o as SelectItemIndicator,Yo as SelectItemText,$o as SelectList,Wo as SelectPopup,Go as SelectPortal,zo as SelectPositioner,Tn as SelectRoot,Zo as SelectScrollDownArrow,Xo as SelectScrollUpArrow,Nn as SelectSeparator,Ho as SelectTrigger,Lo as SelectValue,zs as Switch,Ws as SwitchIcon,$s as SwitchRoot,Ks as SwitchThumb,As as ToastHost,io as backdropTransition,rs as closeContextMenu,Pn as confirmModal,kn as createModal,jo as createModalSystem,lo as modalMotionConfig,ns as parseTrigger,ts as renderDropdownMenuItems,as as showContextMenu,Ys as switchStyles,Fs as toast,ls as updateContextMenuItems,wo as useModalActions,Io as useModalContext,ze as useModalOpen,Ms as usePopoverContext,ws as usePopoverPortalContainer,_s as useSwitchContext,Hs as useToast};
