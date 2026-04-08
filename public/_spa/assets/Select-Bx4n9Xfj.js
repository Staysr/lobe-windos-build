import{j as xn,c8 as pt,m as de,cc as bn,fM as ft,jK as ee,fQ as Pt,jL as jt,jM as zt,jN as vn,jO as yn,jP as Sn,jQ as L,jR as Et,fR as je,fN as Ne,jS as Ct,jT as wn,jU as Rn,jV as Tn,jW as In,jX as Mn,jY as En,aI as Wt,fO as qt,fT as Cn,fU as Ue,fV as Yt,jF as rt,fS as Xt,jZ as An,fW as Oe,j_ as kn,j$ as wt,k0 as Pn,jG as Ot,k1 as jn,k2 as On,k3 as Bn,k4 as Ln,k5 as Vn,k6 as $n,k7 as Fn,k8 as Hn,k9 as Dn,ka as Nn,kb as Gt,kc as Un,kd as zn,ke as Bt,jI as Wn,Z as _t,kf as qn,kg as Yn,kh as Kt,ki as Xn,kj as Gn,kk as _n,kl as Kn,km as vt,fP as Zn,af as Jn,I as tt,dN as Ye,d$ as Qn}from"./index-BBAuCJqA.js";import{r as n}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as I}from"../vendor/vendor-motion-DRC1LdIk.js";import{aI as eo,dE as to,a0 as no,bc as Lt}from"../vendor/vendor-icons-C6hg4LnF.js";import{g as ot,h as Rt,i as oo,u as ro,a as Zt,b as Jt,c as so,d as lo,j as Tt,e as io,k as ao,f as co,r as uo,l as fo,m as yt,s as It,n as po}from"./styles-BDiSun-j.js";const q=xn(({css:e,cssVar:t})=>({arrow:e`
    display: flex;
    width: 12px;
    height: 6px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  `,borderless:de(pt.variantBorderless,e`
      --lobe-select-open-bg: ${t.colorFillTertiary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${t.colorFillTertiary} 70%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${t.colorFillTertiary} 55%, transparent);
    `),clear:e`
    display: inline-flex;
    align-items: center;

    color: ${t.colorTextTertiary};

    opacity: 0;

    transition: opacity 150ms ${t.motionEaseOut};

    &:hover {
      color: ${t.colorTextSecondary};
    }
  `,empty:e``,filled:de(pt.variantFilled,e`
      --lobe-select-open-bg: ${t.colorFillSecondary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${t.colorFillTertiary} 70%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${t.colorFillTertiary} 55%, transparent);
    `),group:e``,groupLabel:e``,icon:e`
    display: inline-flex;
    align-items: center;
    transition: transform 150ms ${t.motionEaseOut};

    &[data-popup-open] {
      transform: rotate(180deg);
    }
  `,item:e``,itemBoldSelected:e`
    &[data-selected] {
      font-weight: 600;
    }
  `,itemIndicator:e`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-inline-start: auto;
    padding-inline-start: 8px;

    color: ${t.colorPrimary};
  `,itemText:e``,list:e`
    overflow-y: auto;
    flex: 1;

    min-height: 0;
    max-height: var(--lobe-select-available-height, var(--available-height));
    padding-block: 0;
  `,outlined:de(pt.variantOutlined,e`
      --lobe-select-open-bg: ${t.colorFillTertiary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${t.colorBgContainer} 75%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${t.colorBgContainer} 60%, transparent);
    `),popup:e`
    --lobe-select-available-height: min(
      var(--available-height),
      var(--lobe-select-popup-max-height, var(--available-height))
    );

    transform-origin: var(--transform-origin);

    display: flex;
    flex-direction: column;

    box-sizing: border-box;

    transition:
      opacity 150ms ${t.motionEaseOut},
      transform 150ms ${t.motionEaseOut};

    &[data-starting-style],
    &[data-ending-style] {
      transform: scaleY(0.92);
      opacity: 0;
    }
  `,positioner:e`
    z-index: 1100;
    outline: none;
  `,prefix:e`
    display: inline-flex;
    align-items: center;
    color: ${t.colorTextSecondary};
  `,scrollArrow:e`
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 16px;

    color: ${t.colorTextSecondary};

    background: ${t.colorBgElevated};
  `,search:e`
    cursor: text;

    display: flex;
    align-items: center;

    min-height: 36px;
    margin-inline: -4px;
    padding-block: 8px;
    padding-inline: 12px;
    border-block-end: 1px solid ${t.colorFillSecondary};
  `,searchInput:e`
    flex: 1;

    min-width: 0;
    padding-block: 0;
    padding-inline: 4px;
    border: 0;

    font-size: 14px;
    line-height: 20px;
    color: ${t.colorText};

    background: transparent;
    outline: none;

    &::placeholder {
      color: ${t.colorTextPlaceholder};
    }
  `,shadow:pt.shadow,suffix:e`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${t.colorTextSecondary};
  `,tag:e`
    display: inline-flex;
    align-items: center;

    max-width: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border-radius: ${t.borderRadiusSM};

    font-size: 12px;
    line-height: 20px;
    color: ${t.colorText};

    background: ${t.colorFillTertiary};
  `,tags:e`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
  `,trigger:e`
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    gap: 8px;
    align-items: center;

    box-sizing: border-box;
    width: 100%;
    border: 1px solid transparent;
    border-radius: ${t.borderRadius};

    font-family: inherit;
    color: ${t.colorText};

    background: transparent;
    outline: none;

    transition: all 150ms ${t.motionEaseOut};

    &:not([data-disabled], [data-readonly])[data-popup-open],
    &:not([data-disabled], [data-readonly])[data-open],
    &:not([data-disabled], [data-readonly])[data-state='open'],
    &:not([data-disabled], [data-readonly])[aria-expanded='true'] {
      background: var(--lobe-select-open-bg, ${t.colorFillTertiary});
    }

    &:focus-visible {
      outline: 2px solid ${t.colorPrimaryBorder};
      outline-offset: 1px;
    }

    &:hover [data-role='lobe-select-clear'] {
      opacity: 1;
    }

    &[data-placeholder] [data-role='lobe-select-clear'] {
      pointer-events: none;
      opacity: 0;
    }

    &[data-disabled] {
      cursor: not-allowed;
      color: ${t.colorTextDisabled};
      background: var(--lobe-select-disabled-bg, transparent);

      &:hover {
        background: var(--lobe-select-disabled-bg, transparent);
      }
    }

    &[data-readonly] {
      cursor: default;
      color: ${t.colorTextSecondary};
      background: var(--lobe-select-readonly-bg, transparent);

      &:hover {
        background: var(--lobe-select-readonly-bg, transparent);
      }
    }

    &[data-disabled] [data-role='lobe-select-clear'] {
      pointer-events: none;
      opacity: 0;
    }
  `,triggerLarge:e`
    min-height: 40px;
    padding-block: 6px;
    padding-inline: 12px;

    font-size: 16px;
    line-height: 24px;
  `,triggerMiddle:e`
    min-height: 32px;
    padding-block: 4px;
    padding-inline: 11px;

    font-size: 14px;
    line-height: 20px;
  `,triggerSmall:e`
    min-height: 24px;
    padding-block: 0;
    padding-inline: 8px;

    font-size: 12px;
    line-height: 18px;
  `,value:e`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;

    min-width: 0;

    color: inherit;

    &[data-placeholder] {
      color: ${t.colorTextPlaceholder};
    }
  `,valueText:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),go=bn(q.trigger,{defaultVariants:{shadow:!1,size:"middle",variant:"outlined"},variants:{shadow:{false:null,true:q.shadow},size:{large:q.triggerLarge,middle:q.triggerMiddle,small:q.triggerSmall},variant:{borderless:q.borderless,filled:q.filled,outlined:q.outlined}}}),Qt=n.createContext(null),en=n.createContext(null);function ze(){const e=n.useContext(Qt);if(e===null)throw new Error(ft(60));return e}function tn(){const e=n.useContext(en);if(e===null)throw new Error(ft(61));return e}const B={id:ee(e=>e.id),modal:ee(e=>e.modal),multiple:ee(e=>e.multiple),items:ee(e=>e.items),itemToStringLabel:ee(e=>e.itemToStringLabel),itemToStringValue:ee(e=>e.itemToStringValue),isItemEqualToValue:ee(e=>e.isItemEqualToValue),value:ee(e=>e.value),open:ee(e=>e.open),mounted:ee(e=>e.mounted),forceMount:ee(e=>e.forceMount),transitionStatus:ee(e=>e.transitionStatus),openMethod:ee(e=>e.openMethod),activeIndex:ee(e=>e.activeIndex),selectedIndex:ee(e=>e.selectedIndex),isActive:ee((e,t)=>e.activeIndex===t),isSelected:ee((e,t,r)=>{const o=e.isItemEqualToValue,x=e.value;return e.multiple?Array.isArray(x)&&x.some(u=>Rt(u,r,o)):e.selectedIndex===t&&e.selectedIndex!==null?!0:Rt(x,r,o)}),isSelectedByFocus:ee((e,t)=>e.selectedIndex===t),popupProps:ee(e=>e.popupProps),triggerProps:ee(e=>e.triggerProps),triggerElement:ee(e=>e.triggerElement),positionerElement:ee(e=>e.positionerElement),listElement:ee(e=>e.listElement),scrollUpArrowVisible:ee(e=>e.scrollUpArrowVisible),scrollDownArrowVisible:ee(e=>e.scrollDownArrowVisible),hasScrollArrows:ee(e=>e.hasScrollArrows),serializedValue:ee(e=>{const{multiple:t,value:r,itemToStringValue:o}=e;return t&&Array.isArray(r)&&r.length===0?"":ot(r,o)})};function mo(e){const{id:t,value:r,defaultValue:o=null,onValueChange:x,open:u,defaultOpen:l=!1,onOpenChange:s,name:m,disabled:R=!1,readOnly:d=!1,required:v=!1,modal:y=!0,actionsRef:F,inputRef:M,onOpenChangeComplete:O,items:N,multiple:w=!1,itemToStringLabel:k,itemToStringValue:g,isItemEqualToValue:G=oo,highlightItemOnHover:ae=!0,children:A}=e,{clearErrors:V}=ro(),{setDirty:$,shouldValidateOnChange:fe,validityData:Z,setFilled:H,name:se,disabled:S,validation:p}=Zt(),{controlId:i}=Jt(),E=so({id:t}),h=S||R,b=se??m,[a,U]=Pt({controlled:r,default:w?o??jt:o,name:"Select",state:"value"}),[T,te]=Pt({controlled:u,default:l,name:"Select",state:"open"}),oe=n.useRef([]),W=n.useRef([]),_=n.useRef(null),C=n.useRef(null),j=n.useRef(0),Y=n.useRef(null),J=n.useRef([]),re=n.useRef(!1),ie=n.useRef(!1),me=n.useRef(null),be=n.useRef({allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1}),Me=n.useRef(!1),{mounted:he,setMounted:ne,transitionStatus:ye}=zt(T),{openMethod:Se,triggerProps:le,reset:Q}=vn(T),P=yn(()=>new Sn({id:E,modal:y,multiple:w,itemToStringLabel:k,itemToStringValue:g,isItemEqualToValue:G,value:a,open:T,mounted:he,transitionStatus:ye,items:N,forceMount:!1,openMethod:null,activeIndex:null,selectedIndex:null,popupProps:{},triggerProps:{},triggerElement:null,positionerElement:null,listElement:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1,hasScrollArrows:!1})).current,ve=L(P,B.activeIndex),xe=L(P,B.selectedIndex),we=L(P,B.triggerElement),ce=L(P,B.positionerElement),ke=n.useMemo(()=>w&&Array.isArray(a)&&a.length===0?"":ot(a,g),[w,a,g]),st=n.useMemo(()=>w&&Array.isArray(a)?a.map(D=>ot(D,g)):ot(a,g),[w,a,g]),Ke=Et(P.state.triggerElement);lo({id:E,commit:p.commit,value:a,controlRef:Ke,name:b,getValue:()=>st});const Re=n.useRef(a);je(()=>{a!==Re.current&&P.set("forceMount",!0)},[P,a]),je(()=>{H(a!==null)},[a,H]),je(function(){if(T)return;const pe=J.current;if(w){const $e=Array.isArray(a)?a:[];if($e.length===0){P.set("selectedIndex",null);return}const c=$e[$e.length-1],f=Tt(pe,c,G);P.set("selectedIndex",f===-1?null:f);return}const Ve=Tt(pe,a,G);P.set("selectedIndex",Ve===-1?null:Ve)},[w,T,a,J,G,P]),io(a,()=>{V(b),$(a!==Z.initialValue),fe()?p.commit(a):p.commit(a,!0)});const We=Ne((D,pe)=>{if(s?.(D,pe),!pe.isCanceled&&(te(D),!D&&P.state.activeIndex!==null)){const Ve=oe.current[P.state.activeIndex];queueMicrotask(()=>{Ve?.setAttribute("tabindex","-1")})}}),qe=Ne(()=>{ne(!1),P.set("activeIndex",null),Q(),O?.(!1)});Ct({enabled:!F,open:T,ref:_,onComplete(){T||qe()}}),n.useImperativeHandle(F,()=>({unmount:qe}),[qe]);const Be=Ne((D,pe)=>{x?.(D,pe),!pe.isCanceled&&U(D)}),Ee=Ne(()=>{const D=P.state.listElement||_.current;if(!D)return;const pe=D.scrollTop,Ve=D.scrollTop+D.clientHeight,$e=pe>1,c=Ve<D.scrollHeight-1;P.state.scrollUpArrowVisible!==$e&&P.set("scrollUpArrowVisible",$e),P.state.scrollDownArrowVisible!==c&&P.set("scrollDownArrowVisible",c)}),Te=wn({open:T,onOpenChange:We,elements:{reference:we,floating:ce}}),Fe=Rn(Te,{enabled:!d&&!h,event:"mousedown"}),Ze=Tn(Te,{bubbles:!1}),lt=In(Te,{enabled:!d&&!h,listRef:oe,activeIndex:ve,selectedIndex:xe,disabledIndices:jt,onNavigate(D){D===null&&!T||P.set("activeIndex",D)},focusItemOnHover:!1}),Je=Mn(Te,{enabled:!d&&!h&&(T||!w),listRef:W,activeIndex:ve,selectedIndex:xe,onMatch(D){T?P.set("activeIndex",D):Be(J.current[D],Ue("none"))},onTypingChange(D){re.current=D}}),{getReferenceProps:Le,getFloatingProps:Ce,getItemProps:Xe}=En([Fe,Ze,lt,Je]),He=n.useMemo(()=>Wt(Le(),le),[Le,le]);ao(()=>{P.update({popupProps:Ce(),triggerProps:He})}),je(()=>{P.update({id:E,modal:y,multiple:w,value:a,open:T,mounted:he,transitionStatus:ye,popupProps:Ce(),triggerProps:He,items:N,itemToStringLabel:k,itemToStringValue:g,isItemEqualToValue:G,openMethod:Se})},[P,E,y,w,a,T,he,ye,Ce,He,N,k,g,G,Se]);const De=n.useMemo(()=>({store:P,name:b,required:v,disabled:h,readOnly:d,multiple:w,itemToStringLabel:k,itemToStringValue:g,highlightItemOnHover:ae,setValue:Be,setOpen:We,listRef:oe,popupRef:_,scrollHandlerRef:C,handleScrollArrowVisibility:Ee,scrollArrowsMountedCountRef:j,getItemProps:Xe,events:Te.context.events,valueRef:Y,valuesRef:J,labelsRef:W,typingRef:re,selectionRef:be,selectedItemTextRef:me,validation:p,onOpenChangeComplete:O,keyboardActiveRef:ie,alignItemWithTriggerActiveRef:Me,initialValueRef:Re}),[P,b,v,h,d,w,k,g,ae,Be,We,Xe,Te.context.events,p,O,Ee]),Ge=qt(M,p.inputRef),it=w&&Array.isArray(a)&&a.length>0,Qe=n.useMemo(()=>!w||!Array.isArray(a)||!b?null:a.map(D=>{const pe=ot(D,g);return I.jsx("input",{type:"hidden",name:b,value:pe},pe)}),[w,a,b,g]);return I.jsx(Qt.Provider,{value:De,children:I.jsxs(en.Provider,{value:Te,children:[A,I.jsx("input",{...p.getInputValidationProps({onFocus(){P.state.triggerElement?.focus()},onChange(D){if(D.nativeEvent.defaultPrevented)return;const pe=D.target.value,Ve=Ue(Yt,D.nativeEvent);function $e(){if(w)return;const c=J.current.find(f=>ot(f,g).toLowerCase()===pe.toLowerCase());c!=null&&($(c!==Z.initialValue),Be(c,Ve),fe()&&p.commit(c))}P.set("forceMount",!0),queueMicrotask($e)}}),id:t||i||void 0,name:w?void 0:b,value:ke,disabled:h,required:v&&!it,readOnly:d,ref:Ge,style:Cn,tabIndex:-1,"aria-hidden":!0}),Qe]})})}const gt=2,ho={...kn,...co,value:()=>null},xo=n.forwardRef(function(t,r){const{render:o,className:x,disabled:u=!1,nativeButton:l=!0,...s}=t,{setTouched:m,setFocused:R,validationMode:d,state:v,disabled:y}=Zt(),{labelId:F}=Jt(),{store:M,setOpen:O,selectionRef:N,validation:w,readOnly:k,alignItemWithTriggerActiveRef:g,disabled:G,keyboardActiveRef:ae}=ze(),A=y||G||u,V=L(M,B.open),$=L(M,B.value),fe=L(M,B.triggerProps),Z=L(M,B.positionerElement),H=L(M,B.listElement),se=L(M,B.serializedValue),S=Et(Z),p=n.useRef(null),i=rt(),E=rt(),{getButtonProps:h,buttonRef:b}=Xt({disabled:A,native:l}),a=Ne(C=>{M.set("triggerElement",C)}),U=qt(r,p,b,a),T=rt(),te=rt();n.useEffect(()=>{if(V)return te.start(200,()=>{N.current.allowUnselectedMouseUp=!0,T.start(200,()=>{N.current.allowSelectedMouseUp=!0})}),()=>{T.clear(),te.clear()};N.current={allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1},E.clear()},[V,N,E,T,te]);const oe=n.useMemo(()=>H?.id??An(Z)?.id,[H,Z]),W=Wt(fe,{role:"combobox","aria-expanded":V?"true":"false","aria-haspopup":"listbox","aria-controls":V?oe:void 0,"aria-labelledby":F,"aria-readonly":k||void 0,tabIndex:A?-1:0,ref:U,onFocus(C){R(!0),V&&g.current&&O(!1,Ue(Pn,C.nativeEvent)),i.start(0,()=>{M.set("forceMount",!0)})},onBlur(){m(!0),R(!1),d==="onBlur"&&w.commit($)},onPointerMove(){ae.current=!1},onKeyDown(){ae.current=!0},onMouseDown(C){if(V)return;const j=wt(C.currentTarget);function Y(J){if(!p.current)return;const re=J.target;if(Ot(p.current,re)||Ot(S.current,re)||re===p.current)return;const ie=jn(p.current);J.clientX>=ie.left-gt&&J.clientX<=ie.right+gt&&J.clientY>=ie.top-gt&&J.clientY<=ie.bottom+gt||O(!1,Ue(On,J))}E.start(0,()=>{j.addEventListener("mouseup",Y,{once:!0})})}},w.getValidationProps,s,h);W.role="combobox";const _=n.useMemo(()=>({...v,open:V,disabled:A,value:$,readOnly:k,placeholder:!se}),[v,V,A,$,k,se]);return Oe("button",t,{ref:[r,p],state:_,stateAttributesMapping:ho,props:W})}),bo={value:()=>null},vo=n.forwardRef(function(t,r){const{className:o,render:x,children:u,...l}=t,{store:s,valueRef:m}=ze(),R=L(s,B.value),d=L(s,B.items),v=L(s,B.itemToStringLabel),y=L(s,B.serializedValue),F=n.useMemo(()=>({value:R,placeholder:!y}),[R,y]),M=typeof u=="function"?u(R):u??(Array.isArray(R)?uo(R,v):fo(R,d,v));return Oe("span",t,{state:F,ref:[r,m],props:[{children:M},l],stateAttributesMapping:bo})}),yo=n.forwardRef(function(t,r){const{className:o,render:x,...u}=t,{store:l}=ze(),s=L(l,B.open),m=n.useMemo(()=>({open:s}),[s]);return Oe("span",t,{state:m,ref:r,props:[{"aria-hidden":!0,children:"▼"},u],stateAttributesMapping:Bn})}),So=n.createContext(void 0),wo=n.forwardRef(function(t,r){const{store:o}=ze(),x=L(o,B.mounted),u=L(o,B.forceMount);return x||u?I.jsx(So.Provider,{value:!0,children:I.jsx(Ln,{ref:r,...t})}):null}),nn=n.createContext(void 0);function on(){const e=n.useContext(nn);if(!e)throw new Error(ft(59));return e}function xt(e,t){e&&Object.assign(e.style,t)}const rn={position:"relative",maxHeight:"100%",overflowX:"hidden",overflowY:"auto"},Ro={position:"fixed"},To=n.forwardRef(function(t,r){const{anchor:o,positionMethod:x="absolute",className:u,render:l,side:s="bottom",align:m="center",sideOffset:R=0,alignOffset:d=0,collisionBoundary:v="clipping-ancestors",collisionPadding:y,arrowPadding:F=5,sticky:M=!1,disableAnchorTracking:O,alignItemWithTrigger:N=!0,collisionAvoidance:w=Vn,...k}=t,{store:g,listRef:G,labelsRef:ae,alignItemWithTriggerActiveRef:A,selectedItemTextRef:V,valuesRef:$,initialValueRef:fe,popupRef:Z,setValue:H}=ze(),se=tn(),S=L(g,B.open),p=L(g,B.mounted),i=L(g,B.modal),E=L(g,B.value),h=L(g,B.openMethod),b=L(g,B.positionerElement),a=L(g,B.triggerElement),U=L(g,B.isItemEqualToValue),T=n.useRef(null),te=n.useRef(null),[oe,W]=n.useState(N),_=p&&oe&&h!=="touch";!p&&oe!==N&&W(N),je(()=>{p||(B.scrollUpArrowVisible(g.state)&&g.set("scrollUpArrowVisible",!1),B.scrollDownArrowVisible(g.state)&&g.set("scrollDownArrowVisible",!1))},[g,p]),n.useImperativeHandle(A,()=>_),$n((_||i)&&S&&h!=="touch",a);const C=Fn({anchor:o,floatingRootContext:se,positionMethod:x,mounted:p,side:s,sideOffset:R,align:m,alignOffset:d,arrowPadding:F,collisionBoundary:v,collisionPadding:y,sticky:M,disableAnchorTracking:O??_,collisionAvoidance:w,keepMounted:!0}),j=_?"none":C.side,Y=_?Ro:C.positionerStyles,J=n.useMemo(()=>{const ne={};return S||(ne.pointerEvents="none"),{role:"presentation",hidden:!p,style:{...Y,...ne}}},[S,p,Y]),re=n.useMemo(()=>({open:S,side:j,align:C.align,anchorHidden:C.anchorHidden}),[S,j,C.align,C.anchorHidden]),ie=Ne(ne=>{g.set("positionerElement",ne)}),me=Oe("div",t,{ref:[r,ie],state:re,stateAttributesMapping:Gt,props:[J,k]}),be=n.useRef(0),Me=Ne(ne=>{if(ne.size===0&&be.current===0||$.current.length===0)return;const ye=be.current;if(be.current=ne.size,ne.size===ye)return;const Se=Ue(Yt);if(ye!==0&&!g.state.multiple&&E!==null&&Tt($.current,E,U)===-1){const Q=fe.current,ve=Q!=null&&yt($.current,Q,U)?Q:null;H(ve,Se),ve===null&&(g.set("selectedIndex",null),V.current=null)}if(ye!==0&&g.state.multiple&&Array.isArray(E)){const le=E.filter(Q=>yt($.current,Q,U));(le.length!==E.length||le.some(Q=>!yt(E,Q,U)))&&(H(le,Se),le.length===0&&(g.set("selectedIndex",null),V.current=null))}if(S&&_){g.update({scrollUpArrowVisible:!1,scrollDownArrowVisible:!1});const le={height:""};xt(b,le),xt(Z.current,le)}}),he=n.useMemo(()=>({...C,side:j,alignItemWithTriggerActive:_,setControlledAlignItemWithTrigger:W,scrollUpArrowRef:T,scrollDownArrowRef:te}),[C,j,_,W]);return I.jsx(Hn,{elementsRef:G,labelsRef:ae,onMapChange:Me,children:I.jsxs(nn.Provider,{value:he,children:[p&&i&&I.jsx(Dn,{inert:Nn(!S),cutout:a}),me]})})});function sn(e){const t=e.currentTarget.getBoundingClientRect();return t.top+1<=e.clientY&&e.clientY<=t.bottom-1&&t.left+1<=e.clientX&&e.clientX<=t.right-1}const Io={...Gt,...Kt},Mo=n.forwardRef(function(t,r){const{render:o,className:x,...u}=t,{store:l,popupRef:s,onOpenChangeComplete:m,setOpen:R,valueRef:d,selectedItemTextRef:v,keyboardActiveRef:y,multiple:F,handleScrollArrowVisibility:M,scrollHandlerRef:O}=ze(),{side:N,align:w,alignItemWithTriggerActive:k,setControlledAlignItemWithTrigger:g,scrollDownArrowRef:G,scrollUpArrowRef:ae}=on(),A=Un()!=null,V=tn(),$=rt(),fe=L(l,B.id),Z=L(l,B.open),H=L(l,B.mounted),se=L(l,B.popupProps),S=L(l,B.transitionStatus),p=L(l,B.triggerElement),i=L(l,B.positionerElement),E=L(l,B.listElement),h=n.useRef(0),b=n.useRef(!1),a=n.useRef(0),U=n.useRef(!1),T=n.useRef({}),te=zn(),oe=Ne(j=>{if(!i||!s.current||!U.current)return;if(b.current||!k){M();return}const Y=i.style.top==="0px",J=i.style.bottom==="0px",re=i.getBoundingClientRect().height,ie=wt(i),me=getComputedStyle(i),be=parseFloat(me.marginTop),Me=parseFloat(me.marginBottom),he=ie.documentElement.clientHeight-be-Me,ne=j.scrollTop,ye=j.scrollHeight,Se=j.clientHeight,le=ye-Se;let Q=null,P=null,ve=!1;if(Y){const xe=le-ne,we=re+xe,ce=Math.min(we,he);Q=ce,ce!==he?P=le:ve=!0}else if(J){const xe=ne-0,we=re+xe,ce=Math.min(we,he),ke=we-he;Q=ce,ce!==he?P=0:(ve=!0,ne<le&&(P=ne-(xe-ke)))}Q!=null&&(i.style.height=`${Q}px`),P!=null&&(j.scrollTop=P),ve&&(b.current=!0),M()});n.useImperativeHandle(O,()=>oe,[oe]),Ct({open:Z,ref:s,onComplete(){Z&&m?.(!0)}});const W=n.useMemo(()=>({open:Z,transitionStatus:S,side:N,align:w}),[Z,S,N,w]);je(()=>{!i||!s.current||Object.keys(T.current).length||(T.current={top:i.style.top||"0",left:i.style.left||"0",right:i.style.right,height:i.style.height,bottom:i.style.bottom,minHeight:i.style.minHeight,maxHeight:i.style.maxHeight,marginTop:i.style.marginTop,marginBottom:i.style.marginBottom})},[s,i]),je(()=>{H||k||(U.current=!1,b.current=!1,h.current=0,a.current=0,xt(i,T.current))},[H,k,i,s]),je(()=>{const j=s.current;if(!(!H||!p||!i||!j)){if(!k){U.current=!0,te.request(M);return}queueMicrotask(()=>{const Y=getComputedStyle(i),J=getComputedStyle(j),re=wt(p),ie=Bt(i),me=p.getBoundingClientRect(),be=i.getBoundingClientRect(),Me=me.left,he=me.height,ne=E||j,ye=ne.scrollHeight,Se=parseFloat(J.borderBottomWidth),le=parseFloat(Y.marginTop)||10,Q=parseFloat(Y.marginBottom)||10,P=parseFloat(Y.minHeight)||100,ve=5,xe=5,we=20,ce=re.documentElement.clientHeight-le-Q,ke=re.documentElement.clientWidth,st=ce-me.bottom+he,Ke=v.current,Re=d.current;let We=0,qe=0;if(Ke&&Re){const De=Re.getBoundingClientRect(),Ge=Ke.getBoundingClientRect(),it=De.left-Me,Qe=Ge.left-be.left,D=De.top-me.top+De.height/2,pe=Ge.top-be.top+Ge.height/2;We=it-Qe,qe=pe-D}const Be=st+qe+Q+Se;let Ee=Math.min(ce,Be);const Te=ce-le-Q,Fe=Be-Ee,Ze=Math.max(ve,Me+We),lt=ke-xe,Je=Math.max(0,Ze+be.width-lt);i.style.left=`${Ze-Je}px`,i.style.height=`${Ee}px`,i.style.maxHeight="auto",i.style.marginTop=`${le}px`,i.style.marginBottom=`${Q}px`,j.style.height="100%";const Le=ne.scrollHeight-ne.clientHeight,Ce=Fe>=Le;Ce&&(Ee=Math.min(ce,be.height)-(Fe-Le));const Xe=me.top<we||me.bottom>ce-we||Ee<Math.min(ye,P),He=(ie.visualViewport?.scale??1)!==1&&Wn;if(Xe||He){U.current=!0,xt(i,T.current),_t.flushSync(()=>g(!1));return}if(Ce){const De=Math.max(0,ce-Be);i.style.top=be.height>=Te?"0":`${De}px`,i.style.height=`${Ee}px`,ne.scrollTop=ne.scrollHeight-ne.clientHeight,h.current=Math.max(P,Ee)}else i.style.bottom="0",h.current=Math.max(P,Ee),ne.scrollTop=Fe;h.current===ce&&(b.current=!0),M(),setTimeout(()=>{U.current=!0})})}},[l,H,i,p,d,v,s,M,k,g,te,G,ae,E]),n.useEffect(()=>{if(!k||!i||!H)return;const j=Bt(i);function Y(J){R(!1,Ue(Yn,J))}return j.addEventListener("resize",Y),()=>{j.removeEventListener("resize",Y)}},[R,k,i,H]);const _={...E?{role:"presentation","aria-orientation":void 0}:{role:"listbox","aria-multiselectable":F||void 0,id:`${fe}-list`},onKeyDown(j){y.current=!0,A&&Gn.has(j.key)&&j.stopPropagation()},onMouseMove(){y.current=!1},onPointerLeave(j){if(sn(j)||j.pointerType==="touch")return;const Y=j.currentTarget;$.start(0,()=>{l.set("activeIndex",null),Y.focus({preventScroll:!0})})},onScroll(j){E||O.current?.(j.currentTarget)},...k&&{style:E?{height:"100%"}:rn}},C=Oe("div",t,{ref:[r,s],state:W,stateAttributesMapping:Io,props:[se,_,Xn(S),{className:!E&&k?It.className:void 0},u]});return I.jsxs(n.Fragment,{children:[It.element,I.jsx(qn,{context:V,modal:!1,disabled:!H,restoreFocus:!0,children:C})]})}),Vt=n.forwardRef(function(t,r){const{className:o,render:x,...u}=t,{store:l,scrollHandlerRef:s}=ze(),{alignItemWithTriggerActive:m}=on(),R=L(l,B.hasScrollArrows),d=L(l,B.openMethod),v=L(l,B.multiple),F={id:`${L(l,B.id)}-list`,role:"listbox","aria-multiselectable":v||void 0,onScroll(O){s.current?.(O.currentTarget)},...m&&{style:rn},className:R&&d!=="touch"?It.className:void 0},M=Ne(O=>{l.set("listElement",O)});return Oe("div",t,{ref:[r,M],props:[F,u]})}),ln=n.createContext(void 0);function At(){const e=n.useContext(ln);if(!e)throw new Error(ft(57));return e}const $t=n.memo(n.forwardRef(function(t,r){const{render:o,className:x,value:u=null,label:l,disabled:s=!1,nativeButton:m=!1,...R}=t,d=n.useRef(null),v=_n({label:l,textRef:d,indexGuessBehavior:Kn.GuessFromOrder}),{store:y,getItemProps:F,setOpen:M,setValue:O,selectionRef:N,typingRef:w,valuesRef:k,keyboardActiveRef:g,multiple:G,highlightItemOnHover:ae}=ze(),A=rt(),V=L(y,B.isActive,v.index),$=L(y,B.isSelected,v.index,u),fe=L(y,B.isSelectedByFocus,v.index),Z=L(y,B.isItemEqualToValue),H=v.index,se=H!==-1,S=n.useRef(null),p=Et(H);je(()=>{if(!se)return;const C=k.current;return C[H]=u,()=>{delete C[H]}},[se,H,u,k]),je(()=>{if(!se)return;const C=y.state.value;let j=C;G&&Array.isArray(C)&&C.length>0&&(j=C[C.length-1]),j!==void 0&&Rt(j,u,Z)&&y.set("selectedIndex",H)},[se,H,G,Z,y,u]);const i=n.useMemo(()=>({disabled:s,selected:$,highlighted:V}),[s,$,V]),E=F({active:V,selected:$});E.onFocus=void 0,E.id=void 0;const h=n.useRef(null),b=n.useRef("mouse"),a=n.useRef(!1),{getButtonProps:U,buttonRef:T}=Xt({disabled:s,focusableWhenDisabled:!0,native:m});function te(C){const j=y.state.value;if(G){const Y=Array.isArray(j)?j:[],J=$?po(Y,u,Z):[...Y,u];O(J,Ue(vt,C))}else O(u,Ue(vt,C)),M(!1,Ue(vt,C))}const oe={role:"option","aria-selected":$,"aria-disabled":s||void 0,tabIndex:V?0:-1,onFocus(){y.set("activeIndex",H)},onMouseEnter(){!g.current&&y.state.selectedIndex===null&&y.set("activeIndex",H)},onMouseMove(){ae&&y.set("activeIndex",H)},onMouseLeave(C){!ae||g.current||sn(C)||A.start(0,()=>{y.state.activeIndex===H&&y.set("activeIndex",null)})},onTouchStart(){N.current={allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1}},onKeyDown(C){h.current=C.key,y.set("activeIndex",H)},onClick(C){a.current=!1,!(C.type==="keydown"&&h.current===null)&&(s||h.current===" "&&w.current||b.current!=="touch"&&!V||(h.current=null,te(C.nativeEvent)))},onPointerEnter(C){b.current=C.pointerType},onPointerDown(C){b.current=C.pointerType,a.current=!0},onMouseUp(C){if(s)return;if(a.current){a.current=!1;return}const j=!N.current.allowSelectedMouseUp&&$,Y=!N.current.allowUnselectedMouseUp&&!$;j||Y||b.current!=="touch"&&!V||te(C.nativeEvent)}},W=Oe("div",t,{ref:[T,r,v.ref,S],state:i,props:[E,oe,R,U]}),_=n.useMemo(()=>({selected:$,indexRef:p,textRef:d,selectedByFocus:fe,hasRegistered:se}),[$,p,d,fe,se]);return I.jsx(ln.Provider,{value:_,children:W})})),Ft=n.forwardRef(function(t,r){const o=t.keepMounted??!1,{selected:x}=At();return o||x?I.jsx(Eo,{...t,ref:r}):null}),Eo=n.memo(n.forwardRef((e,t)=>{const{render:r,className:o,keepMounted:x,...u}=e,{selected:l}=At(),s=n.useRef(null),{transitionStatus:m,setMounted:R}=zt(l),d=n.useMemo(()=>({selected:l,transitionStatus:m}),[l,m]),v=Oe("span",e,{ref:[t,s],state:d,props:[{"aria-hidden":!0,children:"✔️"},u],stateAttributesMapping:Kt});return Ct({open:l,ref:s,onComplete(){l||R(!1)}}),v})),Ht=n.memo(n.forwardRef(function(t,r){const{indexRef:o,textRef:x,selectedByFocus:u,hasRegistered:l}=At(),{selectedItemTextRef:s}=ze(),{className:m,render:R,...d}=t,v=n.useCallback(F=>{if(!F||!l)return;const M=s.current===null||!s.current.isConnected;(u||M&&o.current===0)&&(s.current=F)},[s,o,u,l]);return Oe("div",t,{ref:[v,r,x],props:d})})),an=n.createContext(void 0);function Co(){const e=n.useContext(an);if(e===void 0)throw new Error(ft(56));return e}const Ao=n.forwardRef(function(t,r){const{className:o,render:x,...u}=t,[l,s]=n.useState(),m=n.useMemo(()=>({labelId:l,setLabelId:s}),[l,s]),R=Oe("div",t,{ref:r,props:[{role:"group","aria-labelledby":l},u]});return I.jsx(an.Provider,{value:m,children:R})}),ko=n.forwardRef(function(t,r){const{className:o,render:x,id:u,...l}=t,{setLabelId:s}=Co(),m=Zn(u);return je(()=>{s(m)},[m,s]),Oe("div",t,{ref:r,props:[{id:m},l]})}),dt=null,{min:_e,max:Pe,abs:Dt,floor:Po}=Math,cn=(e,t,r)=>_e(r,Pe(t,e)),un=e=>[...e].sort(((t,r)=>t-r)),dn=typeof queueMicrotask=="function"?queueMicrotask:e=>{Promise.resolve().then(e)},Mt=()=>{let e;return[new Promise((t=>{e=t})),e]},fn=e=>{let t;return()=>(e&&(t=e(),e=void 0),t)},ut=(e,t,r)=>{const o=r?"unshift":"push";for(let x=0;x<t;x++)e[o](-1);return e},pn=(e,t)=>{const r=e.t[t];return r===-1?e.o:r},jo=(e,t,r)=>{const o=e.t[t]===-1;return e.t[t]=r,e.i=_e(t,e.i),o},ht=(e,t)=>{if(!e.l)return 0;if(e.i>=t)return e.u[t];e.i<0&&(e.u[0]=0,e.i=0);let r=e.i,o=e.u[r];for(;r<t;)o+=pn(e,r),e.u[++r]=o;return e.i=t,o},nt=(e,t,r=0,o=e.l-1)=>{let x=r;for(;r<=o;){const u=Po((r+o)/2);ht(e,u)<=t?(x=u,r=u+1):o=u-1}return cn(x,0,e.l-1)},Nt=(e,t,r)=>{const o=t-e.l;return e.i=r?-1:_e(t-1,e.i),e.l=t,o>0?(ut(e.u,o),ut(e.t,o,r),e.o*o):(e.u.splice(o),(r?e.t.splice(0,-o):e.t.splice(o)).reduce(((x,u)=>x-(u===-1?e.o:u)),0))},Oo=typeof window<"u",Bo=e=>e.documentElement,Lo=e=>e.ownerDocument,Vo=e=>e.defaultView,gn=fn((()=>!!/iP(hone|od|ad)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>0)),$o=fn((()=>"scrollBehavior"in Bo(document).style)),Fo=e=>Pe(e.h(),e.p()),Ho=(e,t=40,r=0,o,x=!1)=>{let u=!!r,l=1,s=0,m=0,R=0,d=0,v=0,y=0,F=0,M=0,O=dt,N=[0,u?Pe(r-1,0):-1],w=0,k=!1;const g=((S,p,i)=>({o:p,t:i?ut(i.slice(0,_e(S,i.length)),Pe(0,S-i.length)):ut([],S),l:S,i:-1,u:ut([],S+1)}))(e,o?o[1]:t,o&&o[0]),G=new Set,ae=()=>R-m,A=()=>ae()+v+d,V=(S,p)=>((i,E,h,b)=>{if(b=_e(b,i.l-1),ht(i,b)<=E){const a=nt(i,h,b);return[nt(i,E,b,a),a]}{const a=nt(i,E,void 0,b);return[a,nt(i,h,a)]}})(g,S,p,N[0]),$=()=>ht(g,g.l),fe=(S,p)=>{const i=ht(g,S)-v;return p?$()-i-Z(S):i},Z=S=>pn(g,S),H=(S,p=-1)=>g.t[S]===p,se=S=>{S&&(gn()&&F!==0||O&&M===1?v+=S:d+=S)};return{v:()=>{G.clear()},m:()=>l,_:()=>(S=>[S.t.slice(),S.o])(g),S:(S=200)=>{if(!k||u)return N;let p,i;if(y)[p,i]=N;else{let E=Pe(0,A()),h=E+s;x||(S=Pe(0,S),F!==1&&(E-=S),F!==2&&(h+=S)),[p,i]=N=V(Pe(0,E),Pe(0,h)),O&&(p=_e(p,O[0]),i=Pe(i,O[1]))}return[Pe(p,0),_e(i,g.l-1)]},$:S=>nt(g,S-m),I:H,k:fe,R:Z,T:()=>g.l,C:()=>R,M:()=>F!==0,p:()=>s,O:()=>m,h:$,H:()=>(y=d,d=0,[y,M===2]),W:(S,p)=>{const i=[S,p];return G.add(i),()=>{G.delete(i)}},B:(S,p)=>{let i,E,h=0;switch(S){case 1:{if(p===R&&M===0)break;const b=y;y=0;const a=p-R,U=Dt(a);b&&U<Dt(b)+1||M!==0||(F=a<0?2:1),u&&(u=!1),R=p,h=4;const T=ae();T>=-s&&T<=$()&&(h+=1,E=U>s);break}case 2:h=8,F!==0&&(i=!0,h+=1),F=0,M=0,O=dt;break;case 3:{const b=p.filter((([a,U])=>!H(a,U)));if(!b.length)break;se(b.reduce(((a,[U,T])=>{let te;if(M===2)te=!0;else if(O&&M===1)te=U<O[0];else{const oe=ae(),W=fe(U),_=Z(U);te=F!==1&&M===0?W+_<oe:W<oe&&W+_<oe+s}return te&&(a+=T-Z(U)),a}),0));for(const[a,U]of b){const T=Z(a),te=jo(g,a,U);x&&(w+=te?U:U-T)}x&&s&&w>s&&(se(((a,U)=>{let T=0;const te=[];a.t.forEach(((Y,J)=>{Y!==-1&&(te.push(Y),J<U&&T++)})),a.i=-1;const oe=un(te),W=oe.length,_=W/2|0,C=W%2==0?(oe[_-1]+oe[_])/2:oe[_],j=a.o;return((a.o=C)-j)*Pe(U-T,0)})(g,nt(g,A()))),x=!1),h=3,E=!0;break}case 4:s!==p&&(s||(k=E=!0),s=p,h=3);break;case 5:p[1]?(se(Nt(g,p[0],!0)),M=2,h=1):(Nt(g,p[0]),h=1);break;case 6:m=p;break;case 7:M=1;break;case 8:O=V(p,p+s),h=1}h&&(l=1+(2147483647&l),i&&v&&(d+=v,v=0),G.forEach((([b,a])=>{h&b&&a(E)})))}}},kt=setTimeout,St=(e,t)=>t?-e:e,Do=(e,t,r,o,x,u)=>{const l=Date.now;let s=0,m=!1,R=!1,d=!1,v=!1;const y=(()=>{let w;const k=()=>{w!=dt&&clearTimeout(w)},g=()=>{k(),w=kt((()=>{w=dt,(()=>{if(m||R)return m=!1,void y();d=!1,e.B(2)})()}),150)};return g.J=k,g})(),F=()=>{s=l(),d&&(v=!0),e.B(1,o()),y()},M=w=>{if(m||!e.M()||w.ctrlKey)return;const k=l()-s;150>k&&50<k&&(r?w.deltaX:w.deltaY)&&(m=!0)},O=()=>{R=!0,d=v=!1},N=()=>{R=!1,gn()&&(d=!0)};return t.addEventListener("scroll",F),t.addEventListener("wheel",M,{passive:!0}),t.addEventListener("touchstart",O,{passive:!0}),t.addEventListener("touchend",N,{passive:!0}),{A:()=>{t.removeEventListener("scroll",F),t.removeEventListener("wheel",M),t.removeEventListener("touchstart",O),t.removeEventListener("touchend",N),y.J()},L:()=>{const[w,k]=e.H();w&&(x(w,k,v),v=!1,k&&e.p()>e.h()&&e.B(1,o()))}}},No=(e,t,r)=>{let o;return[async(x,u)=>{if(!await t())return;o&&o();const l=()=>{const[s,m]=Mt();return o=()=>{m(!1)},e.p()&&kt(o,150),[s,e.W(2,(()=>{m(!0)}))]};if(u&&$o())e.B(8,x()),dn((async()=>{for(;;){let s=!0;for(let[d,v]=e.S();d<=v;d++)if(e.I(d)){s=!1;break}if(s)break;const[m,R]=l();try{if(!await m)return}finally{R()}}e.B(7),r(x(),u)}));else for(;;){const[s,m]=l();try{if(e.B(7),r(x()),!await s)return}finally{m()}}},()=>{o&&o()}]},Uo=(e,t)=>{let r,o,x=Mt(),u=!1;const l=t?"scrollLeft":"scrollTop",s=t?"overflowX":"overflowY",[m,R]=No(e,(()=>x[0]),((d,v)=>{d=St(d,u),v?r.scrollTo({[t?"left":"top"]:d,behavior:"smooth"}):r[l]=d}));return{N(d,v){r=v,t&&(u=getComputedStyle(v).direction==="rtl"),o=Do(e,v,t,(()=>St(v[l],u)),((y,F,M)=>{if(M){const O=v.style,N=O[s];O[s]="hidden",kt((()=>{O[s]=N}))}v[l]=St(e.C()+y,u),F&&R()})),x[1](!0)},v(){o&&o.A(),x[1](!1),x=Mt()},P:()=>u,V(d){m((()=>d))},X(d){d+=e.C(),m((()=>d))},Y(d,{align:v,smooth:y,offset:F=0}={}){if(d=cn(d,0,e.T()-1),v==="nearest"){const M=e.k(d),O=e.C();if(M<O)v="start";else{if(!(M+e.R(d)>O+e.p()))return;v="end"}}m((()=>F+e.O()+e.k(d)+(v==="end"?e.R(d)-e.p():v==="center"?(e.R(d)-e.p())/2:0)),y)},q:()=>{o&&o.L()}}},zo=e=>{let t;return{D(r){(t||(t=new(Vo(Lo(r))).ResizeObserver(e))).observe(r)},j(r){t.unobserve(r)},A(){t&&t.disconnect()}}},Wo=(e,t)=>{let r;const o=t?"width":"height",x=new WeakMap,u=zo((l=>{const s=[];for(const{target:m,contentRect:R}of l)if(m.offsetParent)if(m===r)e.B(4,R[o]);else{const d=x.get(m);d!=dt&&s.push([d,R[o]])}s.length&&e.B(3,s)}));return{G(l){u.D(r=l)},U:(l,s)=>(x.set(l,s),u.D(l),()=>{x.delete(l),u.j(l)}),v:u.A}},bt=Oo?n.useLayoutEffect:n.useEffect,Ie="current",mn=(e,t)=>{if(Array.isArray(e))for(const r of e)mn(r,t);else e==null||typeof e=="boolean"||t.push(e)},qo=(e,t)=>{const r=e.key;return r??"_"+t},Yo=e=>{const t=n.useRef(null);return t[Ie]||(t[Ie]=e())},Ut=e=>{const t=n.useRef(e);return bt((()=>{t[Ie]=e}),[e]),t},Xo=n.memo((({Z:e,ee:t,te:r,oe:o,ne:x,re:u,ie:l,se:s})=>{const m=n.useRef(null);bt((()=>t(m[Ie],r)),[r]);const R=n.useMemo((()=>{const d={contain:"layout style",position:x&&s?void 0:"absolute",[l?"height":"width"]:"100%",[l?"top":"left"]:0,[l?"left":"top"]:o,visibility:!x||s?void 0:"hidden"};return l&&(d.display="inline-flex"),d}),[o,x,s,l]);return I.jsx(u,typeof u=="string"?{ref:m,style:R,children:e}:{ref:m,style:R,index:r,children:e})})),Go=(e,t)=>n.useMemo((()=>{if(typeof e=="function")return[o=>e(t[o],o),t.length];const r=(o=>{const x=[];return mn(o,x),x})(e);return[o=>r[o],r.length]}),[e,t]),_o=n.forwardRef((({children:e,data:t,bufferSize:r,itemSize:o,shift:x,horizontal:u,keepMounted:l,cache:s,startMargin:m=0,ssrCount:R,as:d="div",item:v="div",scrollRef:y,onScroll:F,onScrollEnd:M},O)=>{const[N,w]=Go(e,t),k=n.useRef(null),g=n.useRef(!!R),G=Ut(F),ae=Ut(M),[A,V,$,fe]=Yo((()=>{const h=!!u,b=Ho(w,o,R,s,!o);return[b,Wo(b,h),Uo(b,h),h]}));w!==A.T()&&A.B(5,[w,x]),m!==A.O()&&A.B(6,m);const[Z,H]=n.useReducer(A.m,void 0,A.m),se=A.M(),S=A.h(),p=$.P(),i=[],E=h=>{const b=N(h);return I.jsx(Xo,{ee:V.U,te:h,oe:A.k(h,p),ne:A.I(h),re:v,Z:b,ie:fe,se:g[Ie]},qo(b,h))};if(bt((()=>{g[Ie]=!1,A.W(1,(a=>{a?_t.flushSync(H):H()})),A.W(4,(()=>{G[Ie]&&G[Ie](A.C())})),A.W(8,(()=>{ae[Ie]&&ae[Ie]()}));const h=k[Ie],b=a=>{V.G(a),$.N(h,a)};return y?dn((()=>{y[Ie]&&b(y[Ie])})):b(h.parentElement),()=>{A.v(),V.v(),$.v()}}),[]),bt((()=>{$.q()}),[Z]),n.useImperativeHandle(O,(()=>({get cache(){return A._()},get scrollOffset(){return A.C()},get scrollSize(){return Fo(A)},get viewportSize(){return A.p()},findItemIndex:A.$,getItemOffset:A.k,getItemSize:A.R,scrollToIndex:$.Y,scrollTo:$.V,scrollBy:$.X})),[]),l){const h=new Set(l);for(let[b,a]=A.S(r);b<=a;b++)h.add(b);un([...h]).forEach((b=>{i.push(E(b))}))}else for(let[h,b]=A.S(r);h<=b;h++)i.push(E(h));return I.jsx(d,{ref:k,style:{contain:"size style",overflowAnchor:"none",flex:"none",position:"relative",width:fe?S:"100%",height:fe?"100%":S,pointerEvents:se?"none":void 0},children:i})})),ct=e=>!!e.options,mt=e=>typeof e.label=="string"||typeof e.label=="number"?String(e.label):typeof e.value=="string"||typeof e.value=="number"?String(e.value):e.title?e.title:"",Ko=e=>e.replaceAll(/[$()*+.?[\\\]^{|}]/g,"\\$&"),Zo=(e,t)=>{if(!t||t.length===0)return[e];const r=t.map(Ko).join("|");return e.split(new RegExp(r,"g"))},Jo=e=>e.reduce((t,r)=>ct(r)?t+r.options.length+1:t+1,0),at=e=>e==null||e==="",Qo=n.memo(({allowClear:e,autoFocus:t,className:r,classNames:o,defaultOpen:x,defaultValue:u,disabled:l,id:s,labelRender:m,listHeight:R=512,listItemHeight:d,loading:v,mode:y,name:F,onChange:M,onOpenChange:O,onSelect:N,open:w,optionRender:k,options:g,placeholder:G,popupClassName:ae,popupMatchSelectWidth:A,prefix:V,readOnly:$,required:fe,behaviorVariant:Z="default",selectedIndicatorVariant:H="check",shadow:se,showSearch:S,size:p="middle",style:i,suffixIcon:E,suffixIconProps:h,tokenSeparators:b,value:a,variant:U,virtual:T})=>{const{isDarkMode:te}=Jn(),oe=U??(te?"filled":"outlined"),W=y==="multiple"||y==="tags",_=Z==="item-aligned",[C,j]=n.useState(()=>u!==void 0?u:W?[]:null),Y=n.useCallback(c=>W?Array.isArray(c)?c:c==null?[]:[c]:Array.isArray(c)?c[0]??null:c===void 0?null:c,[W]),J=a!==void 0?a:C,re=n.useMemo(()=>Y(J),[J,Y]),ie=n.useMemo(()=>W?re:at(re)?[]:[re],[W,re]),[me,be]=n.useState([]);n.useEffect(()=>{y!=="tags"&&me.length>0&&be([])},[y,me.length]);const{resolvedOptions:Me,optionMap:he}=n.useMemo(()=>{const c=g??[],f=new Map,X=ge=>{f.has(ge.value)||f.set(ge.value,ge)};(ge=>{ge.forEach(et=>{ct(et)?et.options.forEach(X):X(et)})})(c);const z=me.filter(ge=>!f.has(ge.value));z.forEach(X);const ue=[...c,...z],Ae=ie.filter(ge=>!f.has(ge)).map(ge=>({label:String(ge),value:ge}));return Ae.forEach(X),{optionMap:f,resolvedOptions:Ae.length?[...ue,...Ae]:ue}},[me,g,ie]),[ne,ye]=n.useState(!!x);n.useEffect(()=>{w!==void 0&&ye(w)},[w]);const Se=w??ne,le=n.useCallback(c=>{O?.(c),w===void 0&&ye(c)},[O,w]),[Q,P]=n.useState(""),ve=!!(S||y==="tags");n.useEffect(()=>{Se||P("")},[Se]);const xe=n.useCallback(c=>{const f=he.get(c);return f||(c&&typeof c=="object"&&"label"in c?{label:c.label,value:c}:{label:String(c),value:c})},[he]),we=n.useRef(re);n.useEffect(()=>{we.current=re},[re]);const ce=n.useCallback(c=>{const f=Y(c),X=we.current;if(W){const K=Array.isArray(X)?X:[],z=Array.isArray(f)?f:[];z.filter(ue=>!K.some(Ae=>Object.is(Ae,ue))).forEach(ue=>{N?.(ue,xe(ue))}),a===void 0&&j(z),M?.(z,z.map(ue=>xe(ue)))}else!at(f)&&!Object.is(X,f)&&N?.(f,xe(f)),a===void 0&&j(f),M?.(f,at(f)?void 0:xe(f));we.current=f},[xe,W,Y,M,N,a]),ke=n.useCallback(c=>{const f=c.map(z=>z.trim()).filter(Boolean);if(!f.length)return;const X=[...ie],K=f.filter(z=>!he.has(z));K.length>0&&be(z=>{const ue=new Set(z.map(ge=>ge.value)),Ae=[...z];return K.forEach(ge=>{ue.has(ge)||Ae.push({label:ge,value:ge})}),Ae}),f.forEach(z=>{X.some(ue=>Object.is(ue,z))||X.push(z)}),X.length!==ie.length&&ce(X)},[ce,he,ie]),st=n.useCallback(c=>{const f=c.target.value;if(y==="tags"){const X=Zo(f,b);if(X.length>1){const K=X.pop()??"";ke(X.filter(Boolean)),P(K);return}}P(f)},[ke,y,b]),Ke=n.useCallback(c=>{if(c.stopPropagation(),c.key==="Escape"){le(!1);return}if(y==="tags"){if(c.key==="Enter"){c.preventDefault(),c.stopPropagation(),ke([Q]),P("");return}b?.includes(c.key)&&(c.preventDefault(),c.stopPropagation(),ke([Q]),P(""))}},[ke,le,y,Q,b]),Re=n.useMemo(()=>{if(!ve||!Q.trim())return Me;const c=Q.trim().toLowerCase();return(X=>X.map(K=>{if(ct(K)){const z=K.options.filter(ue=>mt(ue).toLowerCase().includes(c));return z.length?{...K,options:z}:null}return mt(K).toLowerCase().includes(c)?K:null}).filter(Boolean))(Me)},[Me,Q,ve]),We=n.useCallback(c=>{const f=Y(c),X=G===void 0?null:I.jsx("span",{className:q.valueText,children:G});if(W){const ue=Array.isArray(f)?f:[];return ue.length===0?X:I.jsx("span",{className:q.tags,children:ue.map((Ae,ge)=>{const et=xe(Ae),hn=m?m(et):et.label??String(Ae);return I.jsx("span",{className:q.tag,children:hn},`${String(Ae)}-${ge}`)})})}if(at(f))return X;const K=xe(f),z=m?m(K):K.label??String(f);return I.jsx("span",{className:q.valueText,children:z})},[xe,W,m,Y,G]),qe=W?ie.length>0:!at(re),Be=!!(e&&qe&&!l&&!$),Ee=n.useCallback(c=>{c.preventDefault(),c.stopPropagation(),ce(W?[]:null)},[ce,W]),Te=n.useMemo(()=>V==null?null:n.isValidElement(V)||typeof V=="string"||typeof V=="number"?V:I.jsx(tt,{icon:V,size:"small"}),[V]),Fe=n.useMemo(()=>v?I.jsx(tt,{spin:!0,icon:eo,size:"small"}):E===null?null:n.isValidElement(E)||typeof E=="string"||typeof E=="number"?E:I.jsx(tt,{icon:E||to,size:"small",...h,style:{pointerEvents:"none",...h?.style}}),[v,E,h]),Ze=n.useMemo(()=>{const c=_?"80vh":`${R}px`,f={maxHeight:c,maxWidth:"var(--available-width)",minWidth:"var(--anchor-width)","--lobe-select-popup-max-height":c};return A===void 0||A===!0?f:typeof A=="number"?{...f,minWidth:A,width:A}:{...f,minWidth:"max-content"}},[_,R,A]),lt=de(go({shadow:se,size:p,variant:oe}),r,o?.root,o?.trigger),Je=n.useRef(null),Le=n.useRef(!1),Ce=n.useRef(null),Xe=n.useCallback(c=>{const{ref:f,...X}=c;return I.jsx("div",{...X,ref:K=>{K&&(K.scrollIntoView=(...z)=>{Le.current||HTMLElement.prototype.scrollIntoView.call(K,...z)}),typeof f=="function"?f(K):f&&"current"in f&&(f.current=K)}})},[]),He=n.useCallback(()=>{Le.current=!0,Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>{Le.current=!1},120)},[]),De=n.useCallback(()=>{if(!T||!Le.current)return;const c=Je.current,f=document.activeElement;c&&f&&c.contains(f)&&c.focus({preventScroll:!0})},[T]);n.useEffect(()=>()=>{Ce.current&&clearTimeout(Ce.current)},[]);const Ge=n.useMemo(()=>{if(!T)return;const c=Jo(Re);return{height:`min(${Math.min(Math.max(c,1),6)*(d??(p==="large"?40:p==="small"?28:32))+8}px, var(--lobe-select-available-height, var(--available-height)))`}},[Re,d,p,T]),it=n.useMemo(()=>{if(!T||ie.length===0)return;const c=new Set(ie),f=[];let X=0;return Re.forEach(K=>{if(ct(K)){K.options.some(z=>c.has(z.value))&&f.push(X),X+=1;return}c.has(K.value)&&f.push(X),X+=1}),f.length?f:void 0},[Re,ie,T]),Qe=de(k?Ye.itemContent:Ye.label,q.itemText,o?.itemText),D=H==="bold";let pe=0;const Ve=c=>c.map((f,X)=>{if(ct(f))return I.jsxs(Ao,{className:de(q.group,o?.group),children:[I.jsx(ko,{className:de(Ye.groupLabel,q.groupLabel,o?.groupLabel),children:f.label}),f.options.map(z=>{const ue=pe++;return I.jsxs($t,{disabled:z.disabled,label:mt(z),render:T?Xe:void 0,value:z.value,className:de(Ye.item,q.item,D&&q.itemBoldSelected,o?.item,o?.option,z.className),style:{minHeight:d,...z.style},children:[I.jsx(Ht,{className:Qe,children:k?k(z,{index:ue}):z.label}),!D&&I.jsx(Ft,{className:de(q.itemIndicator,o?.itemIndicator),children:I.jsx(tt,{icon:Lt,size:"small"})})]},`${String(z.value)}-${ue}`)})]},`group-${X}`);const K=pe++;return I.jsxs($t,{disabled:f.disabled,label:mt(f),render:T?Xe:void 0,value:f.value,className:de(Ye.item,q.item,D&&q.itemBoldSelected,o?.item,o?.option,f.className),style:{minHeight:d,...f.style},children:[I.jsx(Ht,{className:Qe,children:k?k(f,{index:K}):f.label}),!D&&I.jsx(Ft,{className:de(q.itemIndicator,o?.itemIndicator),children:I.jsx(tt,{icon:Lt,size:"small"})})]},`${String(f.value)}-${K}`)}),$e=Qn();return I.jsxs(mo,{disabled:l,id:s,modal:_,multiple:W,name:F,open:Se,readOnly:$,required:fe,value:re,onOpenChange:le,onValueChange:ce,children:[I.jsxs(xo,{autoFocus:t,className:lt,disabled:l,style:i,children:[Te!=null&&I.jsx("span",{className:de(q.prefix,o?.prefix),children:Te}),I.jsx(vo,{className:de(q.value,o?.value),children:We}),I.jsxs("span",{className:de(q.suffix,o?.suffix),children:[Be&&I.jsx("span",{className:de(q.clear,o?.clear),"data-role":"lobe-select-clear",onClick:Ee,children:I.jsx(tt,{icon:no,size:"small"})}),Fe!=null&&I.jsx(yo,{className:de(q.icon,o?.icon),children:Fe})]})]}),I.jsx(wo,{container:$e,children:I.jsx(To,{align:"start",alignItemWithTrigger:_,className:q.positioner,side:"bottom",sideOffset:6,children:I.jsxs(Mo,{style:Ze,className:de(Ye.popup,q.popup,ae,o?.popup,o?.dropdown),children:[ve&&I.jsx("div",{className:de(q.search,o?.search),children:I.jsx("input",{className:q.searchInput,placeholder:typeof G=="string"?G:void 0,value:Q,onChange:st,onKeyDown:Ke})}),(()=>{const c=Re.length>0?Ve(Re):I.jsx("div",{className:de(Ye.item,Ye.empty,q.empty,o?.empty),children:"No data"});return!T||Re.length===0?I.jsx(Vt,{className:de(q.list,o?.list),"data-virtual":T||void 0,children:c}):I.jsx(Vt,{className:de(q.list,o?.list),"data-virtual":T||void 0,ref:Je,style:Ge,tabIndex:T?-1:void 0,onPointerDown:T?He:void 0,onScroll:T?De:void 0,onTouchMove:T?He:void 0,onWheel:T?He:void 0,children:I.jsx(_o,{itemSize:d,keepMounted:it,children:c})})})()]})})})]})});Qo.displayName="Select";export{Qo as S,on as a,mo as b,q as c,Ao as d,ko as e,yo as f,$t as g,Ft as h,Ht as i,Vt as j,Mo as k,wo as l,To as m,xo as n,vo as o,B as s,go as t,ze as u};
