import{f as _t,ae as it,j as ne,ad as Jt,dB as st,fM as U,gB as At,e9 as Zt,gC as v,dX as xt,dF as Pe,dC as De,ga as bt,gD as $t,fS as Qt,fT as en,aq as Pt,dD as Ot,dH as tn,dI as Ne,dJ as kt,e8 as yt,gE as nn,e7 as et,dG as jt,b4 as on,dK as Oe,fX as rn,eF as ft,e4 as ln,e0 as St,gF as sn,fY as an,f$ as cn,gG as un,g3 as dn,g6 as pn,g8 as Vt,ei as fn,ew as wt,eJ as gn,E as mn,gH as hn,gd as Bt,g5 as xn,gI as dt,dE as bn,a3 as vn,I as $e,cj as yn}from"./index-Rjxk4g_I.js";import{u as Rt,a as Sn,b as wn,g as Rn,C as Tn,c as In,I as Mn,s as qe}from"./getPseudoElementBounds-BAHa_VBA.js";import{r as t}from"../vendor/vendor-emotion-DdM-9MtU.js";import{j as s}from"../vendor/vendor-motion-BIhyHZ0p.js";import{e as En}from"./index-Fm1pqgmG.js";import{aI as Cn,aK as An,a0 as Pn,bd as Tt}from"../vendor/vendor-icons-B5XxavR9.js";import{s as Qe,g as gt,h as On,u as kn,a as Ft,b as Ht,c as jn,d as Vn,i as mt,e as Bn,j as Fn,f as Hn,r as Ln,k as Dn,l as pt,m as ht,n as Nn}from"./styles-Bs9H9Xf2.js";import{u as Un,b as zn,a as Wn,I as qn,c as Yn,F as Gn,C as Xn}from"./useOpenInteractionType-BhmIdhIt.js";const E=_t(({css:e,cssVar:n})=>({arrow:e`
    display: flex;
    width: 12px;
    height: 6px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  `,borderless:ne(it.variantBorderless,e`
      --lobe-select-open-bg: ${n.colorFillTertiary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${n.colorFillTertiary} 70%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${n.colorFillTertiary} 55%, transparent);
    `),clear:e`
    display: inline-flex;
    align-items: center;

    color: ${n.colorTextTertiary};

    opacity: 0;

    transition: opacity 150ms ${n.motionEaseOut};

    &:hover {
      color: ${n.colorTextSecondary};
    }
  `,empty:e``,filled:ne(it.variantFilled,e`
      --lobe-select-open-bg: ${n.colorFillSecondary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${n.colorFillTertiary} 70%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${n.colorFillTertiary} 55%, transparent);
    `),group:e``,groupLabel:e``,icon:e`
    display: inline-flex;
    align-items: center;
    transition: transform 150ms ${n.motionEaseOut};

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

    color: ${n.colorPrimary};
  `,itemText:e``,list:e`
    overflow-y: auto;
    flex: 1;

    min-height: 0;
    max-height: var(--lobe-select-available-height, var(--available-height));
    padding-block: 0;
  `,outlined:ne(it.variantOutlined,e`
      --lobe-select-open-bg: ${n.colorFillTertiary};
      --lobe-select-readonly-bg: color-mix(in srgb, ${n.colorBgContainer} 75%, transparent);
      --lobe-select-disabled-bg: color-mix(in srgb, ${n.colorBgContainer} 60%, transparent);
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
      opacity 150ms ${n.motionEaseOut},
      transform 150ms ${n.motionEaseOut};

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
    color: ${n.colorTextSecondary};
  `,scrollArrow:e`
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 16px;

    color: ${n.colorTextSecondary};

    background: ${n.colorBgElevated};
  `,search:e`
    cursor: text;

    display: flex;
    align-items: center;

    min-height: 36px;
    margin-inline: -4px;
    padding-block: 8px;
    padding-inline: 12px;
    border-block-end: 1px solid ${n.colorFillSecondary};
  `,searchInput:e`
    flex: 1;

    min-width: 0;
    padding-block: 0;
    padding-inline: 4px;
    border: 0;

    font-size: 14px;
    line-height: 20px;
    color: ${n.colorText};

    background: transparent;
    outline: none;

    &::placeholder {
      color: ${n.colorTextPlaceholder};
    }
  `,shadow:it.shadow,suffix:e`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${n.colorTextSecondary};
  `,tag:e`
    display: inline-flex;
    align-items: center;

    max-width: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border-radius: ${n.borderRadiusSM};

    font-size: 12px;
    line-height: 20px;
    color: ${n.colorText};

    background: ${n.colorFillTertiary};
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
    border-radius: ${n.borderRadius};

    font-family: inherit;
    color: ${n.colorText};

    background: transparent;
    outline: none;

    transition: all 150ms ${n.motionEaseOut};

    &:not([data-disabled], [data-readonly])[data-popup-open],
    &:not([data-disabled], [data-readonly])[data-open],
    &:not([data-disabled], [data-readonly])[data-state='open'],
    &:not([data-disabled], [data-readonly])[aria-expanded='true'] {
      background: var(--lobe-select-open-bg, ${n.colorFillTertiary});
    }

    &:focus-visible {
      outline: 2px solid ${n.colorPrimaryBorder};
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
      color: ${n.colorTextDisabled};
      background: var(--lobe-select-disabled-bg, transparent);

      &:hover {
        background: var(--lobe-select-disabled-bg, transparent);
      }
    }

    &[data-readonly] {
      cursor: default;
      color: ${n.colorTextSecondary};
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
      color: ${n.colorTextPlaceholder};
    }
  `,valueText:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),Kn=Jt(E.trigger,{defaultVariants:{shadow:!1,size:"middle",variant:"outlined"},variants:{shadow:{false:null,true:E.shadow},size:{large:E.triggerLarge,middle:E.triggerMiddle,small:E.triggerSmall},variant:{borderless:E.borderless,filled:E.filled,outlined:E.outlined}}}),Lt=t.createContext(null),Dt=t.createContext(null);function Ue(){const e=t.useContext(Lt);if(e===null)throw new Error(st(60));return e}function Nt(){const e=t.useContext(Dt);if(e===null)throw new Error(st(61));return e}const m={id:U(e=>e.id),modal:U(e=>e.modal),multiple:U(e=>e.multiple),items:U(e=>e.items),itemToStringLabel:U(e=>e.itemToStringLabel),itemToStringValue:U(e=>e.itemToStringValue),isItemEqualToValue:U(e=>e.isItemEqualToValue),value:U(e=>e.value),open:U(e=>e.open),mounted:U(e=>e.mounted),forceMount:U(e=>e.forceMount),transitionStatus:U(e=>e.transitionStatus),openMethod:U(e=>e.openMethod),activeIndex:U(e=>e.activeIndex),selectedIndex:U(e=>e.selectedIndex),isActive:U((e,n)=>e.activeIndex===n),isSelected:U((e,n,h)=>{const l=e.isItemEqualToValue,G=e.value;return e.multiple?Array.isArray(G)&&G.some(y=>gt(y,h,l)):e.selectedIndex===n&&e.selectedIndex!==null?!0:gt(G,h,l)}),isSelectedByFocus:U((e,n)=>e.selectedIndex===n),popupProps:U(e=>e.popupProps),triggerProps:U(e=>e.triggerProps),triggerElement:U(e=>e.triggerElement),positionerElement:U(e=>e.positionerElement),listElement:U(e=>e.listElement),scrollUpArrowVisible:U(e=>e.scrollUpArrowVisible),scrollDownArrowVisible:U(e=>e.scrollDownArrowVisible),hasScrollArrows:U(e=>e.hasScrollArrows),serializedValue:U(e=>{const{multiple:n,value:h,itemToStringValue:l}=e;return n&&Array.isArray(h)&&h.length===0?"":Qe(h,l)})};function _n(e){const{id:n,value:h,defaultValue:l=null,onValueChange:G,open:y,defaultOpen:c=!1,onOpenChange:u,name:C,disabled:k=!1,readOnly:A=!1,required:B=!1,modal:b=!0,actionsRef:le,inputRef:j,onOpenChangeComplete:Z,items:K,multiple:R=!1,itemToStringLabel:V,itemToStringValue:f,isItemEqualToValue:$=On,highlightItemOnHover:be=!0,children:se}=e,{clearErrors:P}=kn(),{setDirty:z,shouldValidateOnChange:ye,validityData:ie,setFilled:O,name:fe,disabled:ae,validation:S}=Ft(),{controlId:i}=Ht(),I=jn({id:n}),W=ae||k,L=fe??C,[a,ce]=Rt({controlled:h,default:R?l??yt:l,name:"Select",state:"value"}),[g,me]=Rt({controlled:y,default:c,name:"Select",state:"open"}),he=t.useRef([]),D=t.useRef([]),_=t.useRef(null),d=t.useRef(null),x=t.useRef(0),F=t.useRef(null),q=t.useRef([]),X=t.useRef(!1),Q=t.useRef(!1),ue=t.useRef(null),ge=t.useRef({allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1}),Ie=t.useRef(!1),{mounted:de,setMounted:Y,transitionStatus:ve}=At(g),{openMethod:Se,triggerProps:J,reset:N}=Un(g),p=Zt(()=>new nn({id:I,modal:b,multiple:R,itemToStringLabel:V,itemToStringValue:f,isItemEqualToValue:$,value:a,open:g,mounted:de,transitionStatus:ve,items:K,forceMount:!1,openMethod:null,activeIndex:null,selectedIndex:null,popupProps:{},triggerProps:{},triggerElement:null,positionerElement:null,listElement:null,scrollUpArrowVisible:!1,scrollDownArrowVisible:!1,hasScrollArrows:!1})).current,xe=v(p,m.activeIndex),pe=v(p,m.selectedIndex),we=v(p,m.triggerElement),ee=v(p,m.positionerElement),Ae=t.useMemo(()=>R&&Array.isArray(a)&&a.length===0?"":Qe(a,f),[R,a,f]),tt=t.useMemo(()=>R&&Array.isArray(a)?a.map(w=>Qe(w,f)):Qe(a,f),[R,a,f]),Xe=xt(p.state.triggerElement);Vn({id:I,commit:S.commit,value:a,controlRef:Xe,name:L,getValue:()=>tt});const Re=t.useRef(a);Pe(()=>{a!==Re.current&&p.set("forceMount",!0)},[p,a]),Pe(()=>{O(a!==null)},[a,O]),Pe(function(){if(g)return;const oe=q.current;if(R){const Be=Array.isArray(a)?a:[];if(Be.length===0){p.set("selectedIndex",null);return}const o=Be[Be.length-1],r=mt(oe,o,$);p.set("selectedIndex",r===-1?null:r);return}const Ve=mt(oe,a,$);p.set("selectedIndex",Ve===-1?null:Ve)},[R,g,a,q,$,p]),Bn(a,()=>{P(L),z(a!==ie.initialValue),ye()?S.commit(a):S.commit(a,!0)});const ze=De((w,oe)=>{if(u?.(w,oe),!oe.isCanceled&&(me(w),!w&&p.state.activeIndex!==null)){const Ve=he.current[p.state.activeIndex];queueMicrotask(()=>{Ve?.setAttribute("tabindex","-1")})}}),We=De(()=>{Y(!1),p.set("activeIndex",null),N(),Z?.(!1)});bt({enabled:!le,open:g,ref:_,onComplete(){g||We()}}),t.useImperativeHandle(le,()=>({unmount:We}),[We]);const ke=De((w,oe)=>{G?.(w,oe),!oe.isCanceled&&ce(w)}),Me=De(()=>{const w=p.state.listElement||_.current;if(!w)return;const oe=w.scrollTop,Ve=w.scrollTop+w.clientHeight,Be=oe>1,o=Ve<w.scrollHeight-1;p.state.scrollUpArrowVisible!==Be&&p.set("scrollUpArrowVisible",Be),p.state.scrollDownArrowVisible!==o&&p.set("scrollDownArrowVisible",o)}),Te=$t({open:g,onOpenChange:ze,elements:{reference:we,floating:ee}}),Fe=zn(Te,{enabled:!A&&!W,event:"mousedown"}),Ke=Qt(Te,{bubbles:!1}),nt=Sn(Te,{enabled:!A&&!W,listRef:he,activeIndex:xe,selectedIndex:pe,disabledIndices:yt,onNavigate(w){w===null&&!g||p.set("activeIndex",w)},focusItemOnHover:!1}),_e=wn(Te,{enabled:!A&&!W&&(g||!R),listRef:D,activeIndex:xe,selectedIndex:pe,onMatch(w){g?p.set("activeIndex",w):ke(q.current[w],Ne("none"))},onTypingChange(w){X.current=w}}),{getReferenceProps:je,getFloatingProps:Ee,getItemProps:Ye}=en([Fe,Ke,nt,_e]),He=t.useMemo(()=>Pt(je(),J),[je,J]);Fn(()=>{p.update({popupProps:Ee(),triggerProps:He})}),Pe(()=>{p.update({id:I,modal:b,multiple:R,value:a,open:g,mounted:de,transitionStatus:ve,popupProps:Ee(),triggerProps:He,items:K,itemToStringLabel:V,itemToStringValue:f,isItemEqualToValue:$,openMethod:Se})},[p,I,b,R,a,g,de,ve,Ee,He,K,V,f,$,Se]);const Le=t.useMemo(()=>({store:p,name:L,required:B,disabled:W,readOnly:A,multiple:R,itemToStringLabel:V,itemToStringValue:f,highlightItemOnHover:be,setValue:ke,setOpen:ze,listRef:he,popupRef:_,scrollHandlerRef:d,handleScrollArrowVisibility:Me,scrollArrowsMountedCountRef:x,getItemProps:Ye,events:Te.context.events,valueRef:F,valuesRef:q,labelsRef:D,typingRef:X,selectionRef:ge,selectedItemTextRef:ue,validation:S,onOpenChangeComplete:Z,keyboardActiveRef:Q,alignItemWithTriggerActiveRef:Ie,initialValueRef:Re}),[p,L,B,W,A,R,V,f,be,ke,ze,Ye,Te.context.events,S,Z,Me]),Ge=Ot(j,S.inputRef),ot=R&&Array.isArray(a)&&a.length>0,Je=t.useMemo(()=>!R||!Array.isArray(a)||!L?null:a.map(w=>{const oe=Qe(w,f);return s.jsx("input",{type:"hidden",name:L,value:oe},oe)}),[R,a,L,f]);return s.jsx(Lt.Provider,{value:Le,children:s.jsxs(Dt.Provider,{value:Te,children:[se,s.jsx("input",{...S.getInputValidationProps({onFocus(){p.state.triggerElement?.focus()},onChange(w){if(w.nativeEvent.defaultPrevented)return;const oe=w.target.value,Ve=Ne(kt,w.nativeEvent);function Be(){if(R)return;const o=q.current.find(r=>Qe(r,f).toLowerCase()===oe.toLowerCase());o!=null&&(z(o!==ie.initialValue),ke(o,Ve),ye()&&S.commit(o))}p.set("forceMount",!0),queueMicrotask(Be)}}),id:n||i||void 0,name:R?void 0:L,value:Ae,disabled:W,required:B&&!ot,readOnly:A,ref:Ge,style:tn,tabIndex:-1,"aria-hidden":!0}),Je]})})}const at=2,Jn={...rn,...Hn,value:()=>null},Zn=t.forwardRef(function(n,h){const{render:l,className:G,disabled:y=!1,nativeButton:c=!0,...u}=n,{setTouched:C,setFocused:k,validationMode:A,state:B,disabled:b}=Ft(),{labelId:le}=Ht(),{store:j,setOpen:Z,selectionRef:K,validation:R,readOnly:V,alignItemWithTriggerActiveRef:f,disabled:$,keyboardActiveRef:be}=Ue(),se=b||$||y,P=v(j,m.open),z=v(j,m.value),ye=v(j,m.triggerProps),ie=v(j,m.positionerElement),O=v(j,m.listElement),fe=v(j,m.serializedValue),ae=xt(ie),S=t.useRef(null),i=et(),I=et(),{getButtonProps:W,buttonRef:L}=jt({disabled:se,native:c}),a=De(d=>{j.set("triggerElement",d)}),ce=Ot(h,S,L,a),g=et(),me=et();t.useEffect(()=>{if(P)return me.start(200,()=>{K.current.allowUnselectedMouseUp=!0,g.start(200,()=>{K.current.allowSelectedMouseUp=!0})}),()=>{g.clear(),me.clear()};K.current={allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1},I.clear()},[P,K,I,g,me]);const he=t.useMemo(()=>O?.id??on(ie)?.id,[O,ie]),D=Pt(ye,{role:"combobox","aria-expanded":P?"true":"false","aria-haspopup":"listbox","aria-controls":P?he:void 0,"aria-labelledby":le,"aria-readonly":V||void 0,tabIndex:se?-1:0,ref:ce,onFocus(d){k(!0),P&&f.current&&Z(!1,Ne(ln,d.nativeEvent)),i.start(0,()=>{j.set("forceMount",!0)})},onBlur(){C(!0),k(!1),A==="onBlur"&&R.commit(z)},onPointerMove(){be.current=!1},onKeyDown(){be.current=!0},onMouseDown(d){if(P)return;const x=ft(d.currentTarget);function F(q){if(!S.current)return;const X=q.target;if(St(S.current,X)||St(ae.current,X)||X===S.current)return;const Q=Rn(S.current);q.clientX>=Q.left-at&&q.clientX<=Q.right+at&&q.clientY>=Q.top-at&&q.clientY<=Q.bottom+at||Z(!1,Ne(sn,q))}I.start(0,()=>{x.addEventListener("mouseup",F,{once:!0})})}},R.getValidationProps,u,W);D.role="combobox";const _=t.useMemo(()=>({...B,open:P,disabled:se,value:z,readOnly:V,placeholder:!fe}),[B,P,se,z,V,fe]);return Oe("button",n,{ref:[h,S],state:_,stateAttributesMapping:Jn,props:D})}),$n={value:()=>null},Qn=t.forwardRef(function(n,h){const{className:l,render:G,children:y,...c}=n,{store:u,valueRef:C}=Ue(),k=v(u,m.value),A=v(u,m.items),B=v(u,m.itemToStringLabel),b=v(u,m.serializedValue),le=t.useMemo(()=>({value:k,placeholder:!b}),[k,b]),j=typeof y=="function"?y(k):y??(Array.isArray(k)?Ln(k,B):Dn(k,A,B));return Oe("span",n,{state:le,ref:[h,C],props:[{children:j},c],stateAttributesMapping:$n})}),eo=t.forwardRef(function(n,h){const{className:l,render:G,...y}=n,{store:c}=Ue(),u=v(c,m.open),C=t.useMemo(()=>({open:u}),[u]);return Oe("span",n,{state:C,ref:h,props:[{"aria-hidden":!0,children:"▼"},y],stateAttributesMapping:an})}),to=t.createContext(void 0),no=t.forwardRef(function(n,h){const{store:l}=Ue(),G=v(l,m.mounted),y=v(l,m.forceMount);return G||y?s.jsx(to.Provider,{value:!0,children:s.jsx(cn,{ref:h,...n})}):null}),Ut=t.createContext(void 0);function zt(){const e=t.useContext(Ut);if(!e)throw new Error(st(59));return e}function ut(e,n){e&&Object.assign(e.style,n)}const Wt={position:"relative",maxHeight:"100%",overflowX:"hidden",overflowY:"auto"},oo={position:"fixed"},ro=t.forwardRef(function(n,h){const{anchor:l,positionMethod:G="absolute",className:y,render:c,side:u="bottom",align:C="center",sideOffset:k=0,alignOffset:A=0,collisionBoundary:B="clipping-ancestors",collisionPadding:b,arrowPadding:le=5,sticky:j=!1,disableAnchorTracking:Z,alignItemWithTrigger:K=!0,collisionAvoidance:R=un,...V}=n,{store:f,listRef:$,labelsRef:be,alignItemWithTriggerActiveRef:se,selectedItemTextRef:P,valuesRef:z,initialValueRef:ye,popupRef:ie,setValue:O}=Ue(),fe=Nt(),ae=v(f,m.open),S=v(f,m.mounted),i=v(f,m.modal),I=v(f,m.value),W=v(f,m.openMethod),L=v(f,m.positionerElement),a=v(f,m.triggerElement),ce=v(f,m.isItemEqualToValue),g=t.useRef(null),me=t.useRef(null),[he,D]=t.useState(K),_=S&&he&&W!=="touch";!S&&he!==K&&D(K),Pe(()=>{S||(m.scrollUpArrowVisible(f.state)&&f.set("scrollUpArrowVisible",!1),m.scrollDownArrowVisible(f.state)&&f.set("scrollDownArrowVisible",!1))},[f,S]),t.useImperativeHandle(se,()=>_),Wn((_||i)&&ae&&W!=="touch",a);const d=dn({anchor:l,floatingRootContext:fe,positionMethod:G,mounted:S,side:u,sideOffset:k,align:C,alignOffset:A,arrowPadding:le,collisionBoundary:B,collisionPadding:b,sticky:j,disableAnchorTracking:Z??_,collisionAvoidance:R,keepMounted:!0}),x=_?"none":d.side,F=_?oo:d.positionerStyles,q=t.useMemo(()=>{const Y={};return ae||(Y.pointerEvents="none"),{role:"presentation",hidden:!S,style:{...F,...Y}}},[ae,S,F]),X=t.useMemo(()=>({open:ae,side:x,align:d.align,anchorHidden:d.anchorHidden}),[ae,x,d.align,d.anchorHidden]),Q=De(Y=>{f.set("positionerElement",Y)}),ue=Oe("div",n,{ref:[h,Q],state:X,stateAttributesMapping:Vt,props:[q,V]}),ge=t.useRef(0),Ie=De(Y=>{if(Y.size===0&&ge.current===0||z.current.length===0)return;const ve=ge.current;if(ge.current=Y.size,Y.size===ve)return;const Se=Ne(kt);if(ve!==0&&!f.state.multiple&&I!==null&&mt(z.current,I,ce)===-1){const N=ye.current,xe=N!=null&&pt(z.current,N,ce)?N:null;O(xe,Se),xe===null&&(f.set("selectedIndex",null),P.current=null)}if(ve!==0&&f.state.multiple&&Array.isArray(I)){const J=I.filter(N=>pt(z.current,N,ce));(J.length!==I.length||J.some(N=>!pt(I,N,ce)))&&(O(J,Se),J.length===0&&(f.set("selectedIndex",null),P.current=null))}if(ae&&_){f.update({scrollUpArrowVisible:!1,scrollDownArrowVisible:!1});const J={height:""};ut(L,J),ut(ie.current,J)}}),de=t.useMemo(()=>({...d,side:x,alignItemWithTriggerActive:_,setControlledAlignItemWithTrigger:D,scrollUpArrowRef:g,scrollDownArrowRef:me}),[d,x,_,D]);return s.jsx(Tn,{elementsRef:$,labelsRef:be,onMapChange:Ie,children:s.jsxs(Ut.Provider,{value:de,children:[S&&i&&s.jsx(qn,{inert:pn(!ae),cutout:a}),ue]})})});function qt(e){const n=e.currentTarget.getBoundingClientRect();return n.top+1<=e.clientY&&e.clientY<=n.bottom-1&&n.left+1<=e.clientX&&e.clientX<=n.right-1}const lo={...Vt,...Bt},so=t.forwardRef(function(n,h){const{render:l,className:G,...y}=n,{store:c,popupRef:u,onOpenChangeComplete:C,setOpen:k,valueRef:A,selectedItemTextRef:B,keyboardActiveRef:b,multiple:le,handleScrollArrowVisibility:j,scrollHandlerRef:Z}=Ue(),{side:K,align:R,alignItemWithTriggerActive:V,setControlledAlignItemWithTrigger:f,scrollDownArrowRef:$,scrollUpArrowRef:be}=zt(),se=Yn()!=null,P=Nt(),z=et(),ye=v(c,m.id),ie=v(c,m.open),O=v(c,m.mounted),fe=v(c,m.popupProps),ae=v(c,m.transitionStatus),S=v(c,m.triggerElement),i=v(c,m.positionerElement),I=v(c,m.listElement),W=t.useRef(0),L=t.useRef(!1),a=t.useRef(0),ce=t.useRef(!1),g=t.useRef({}),me=fn(),he=De(x=>{if(!i||!u.current||!ce.current)return;if(L.current||!V){j();return}const F=i.style.top==="0px",q=i.style.bottom==="0px",X=i.getBoundingClientRect().height,Q=ft(i),ue=getComputedStyle(i),ge=parseFloat(ue.marginTop),Ie=parseFloat(ue.marginBottom),de=Q.documentElement.clientHeight-ge-Ie,Y=x.scrollTop,ve=x.scrollHeight,Se=x.clientHeight,J=ve-Se;let N=null,p=null,xe=!1;if(F){const pe=J-Y,we=X+pe,ee=Math.min(we,de);N=ee,ee!==de?p=J:xe=!0}else if(q){const pe=Y-0,we=X+pe,ee=Math.min(we,de),Ae=we-de;N=ee,ee!==de?p=0:(xe=!0,Y<J&&(p=Y-(pe-Ae)))}N!=null&&(i.style.height=`${N}px`),p!=null&&(x.scrollTop=p),xe&&(L.current=!0),j()});t.useImperativeHandle(Z,()=>he,[he]),bt({open:ie,ref:u,onComplete(){ie&&C?.(!0)}});const D=t.useMemo(()=>({open:ie,transitionStatus:ae,side:K,align:R}),[ie,ae,K,R]);Pe(()=>{!i||!u.current||Object.keys(g.current).length||(g.current={top:i.style.top||"0",left:i.style.left||"0",right:i.style.right,height:i.style.height,bottom:i.style.bottom,minHeight:i.style.minHeight,maxHeight:i.style.maxHeight,marginTop:i.style.marginTop,marginBottom:i.style.marginBottom})},[u,i]),Pe(()=>{O||V||(ce.current=!1,L.current=!1,W.current=0,a.current=0,ut(i,g.current))},[O,V,i,u]),Pe(()=>{const x=u.current;if(!(!O||!S||!i||!x)){if(!V){ce.current=!0,me.request(j);return}queueMicrotask(()=>{const F=getComputedStyle(i),q=getComputedStyle(x),X=ft(S),Q=wt(i),ue=S.getBoundingClientRect(),ge=i.getBoundingClientRect(),Ie=ue.left,de=ue.height,Y=I||x,ve=Y.scrollHeight,Se=parseFloat(q.borderBottomWidth),J=parseFloat(F.marginTop)||10,N=parseFloat(F.marginBottom)||10,p=parseFloat(F.minHeight)||100,xe=5,pe=5,we=20,ee=X.documentElement.clientHeight-J-N,Ae=X.documentElement.clientWidth,tt=ee-ue.bottom+de,Xe=B.current,Re=A.current;let ze=0,We=0;if(Xe&&Re){const Le=Re.getBoundingClientRect(),Ge=Xe.getBoundingClientRect(),ot=Le.left-Ie,Je=Ge.left-ge.left,w=Le.top-ue.top+Le.height/2,oe=Ge.top-ge.top+Ge.height/2;ze=ot-Je,We=oe-w}const ke=tt+We+N+Se;let Me=Math.min(ee,ke);const Te=ee-J-N,Fe=ke-Me,Ke=Math.max(xe,Ie+ze),nt=Ae-pe,_e=Math.max(0,Ke+ge.width-nt);i.style.left=`${Ke-_e}px`,i.style.height=`${Me}px`,i.style.maxHeight="auto",i.style.marginTop=`${J}px`,i.style.marginBottom=`${N}px`,x.style.height="100%";const je=Y.scrollHeight-Y.clientHeight,Ee=Fe>=je;Ee&&(Me=Math.min(ee,ge.height)-(Fe-je));const Ye=ue.top<we||ue.bottom>ee-we||Me<Math.min(ve,p),He=(Q.visualViewport?.scale??1)!==1&&gn;if(Ye||He){ce.current=!0,ut(i,g.current),mn.flushSync(()=>f(!1));return}if(Ee){const Le=Math.max(0,ee-ke);i.style.top=ge.height>=Te?"0":`${Le}px`,i.style.height=`${Me}px`,Y.scrollTop=Y.scrollHeight-Y.clientHeight,W.current=Math.max(p,Me)}else i.style.bottom="0",W.current=Math.max(p,Me),Y.scrollTop=Fe;W.current===ee&&(L.current=!0),j(),setTimeout(()=>{ce.current=!0})})}},[c,O,i,S,A,B,u,j,V,f,me,$,be,I]),t.useEffect(()=>{if(!V||!i||!O)return;const x=wt(i);function F(q){k(!1,Ne(hn,q))}return x.addEventListener("resize",F),()=>{x.removeEventListener("resize",F)}},[k,V,i,O]);const _={...I?{role:"presentation","aria-orientation":void 0}:{role:"listbox","aria-multiselectable":le||void 0,id:`${ye}-list`},onKeyDown(x){b.current=!0,se&&Xn.has(x.key)&&x.stopPropagation()},onMouseMove(){b.current=!1},onPointerLeave(x){if(qt(x)||x.pointerType==="touch")return;const F=x.currentTarget;z.start(0,()=>{c.set("activeIndex",null),F.focus({preventScroll:!0})})},onScroll(x){I||Z.current?.(x.currentTarget)},...V&&{style:I?{height:"100%"}:Wt}},d=Oe("div",n,{ref:[h,u],state:D,stateAttributesMapping:lo,props:[fe,_,xn(ae),{className:!I&&V?ht.className:void 0},y]});return s.jsxs(t.Fragment,{children:[ht.element,s.jsx(Gn,{context:P,modal:!1,disabled:!O,restoreFocus:!0,children:d})]})}),It=t.forwardRef(function(n,h){const{className:l,render:G,...y}=n,{store:c,scrollHandlerRef:u}=Ue(),{alignItemWithTriggerActive:C}=zt(),k=v(c,m.hasScrollArrows),A=v(c,m.openMethod),B=v(c,m.multiple),le={id:`${v(c,m.id)}-list`,role:"listbox","aria-multiselectable":B||void 0,onScroll(Z){u.current?.(Z.currentTarget)},...C&&{style:Wt},className:k&&A!=="touch"?ht.className:void 0},j=De(Z=>{c.set("listElement",Z)});return Oe("div",n,{ref:[h,j],props:[le,y]})}),Yt=t.createContext(void 0);function vt(){const e=t.useContext(Yt);if(!e)throw new Error(st(57));return e}const Mt=t.memo(t.forwardRef(function(n,h){const{render:l,className:G,value:y=null,label:c,disabled:u=!1,nativeButton:C=!1,...k}=n,A=t.useRef(null),B=In({label:c,textRef:A,indexGuessBehavior:Mn.GuessFromOrder}),{store:b,getItemProps:le,setOpen:j,setValue:Z,selectionRef:K,typingRef:R,valuesRef:V,keyboardActiveRef:f,multiple:$,highlightItemOnHover:be}=Ue(),se=et(),P=v(b,m.isActive,B.index),z=v(b,m.isSelected,B.index,y),ye=v(b,m.isSelectedByFocus,B.index),ie=v(b,m.isItemEqualToValue),O=B.index,fe=O!==-1,ae=t.useRef(null),S=xt(O);Pe(()=>{if(!fe)return;const d=V.current;return d[O]=y,()=>{delete d[O]}},[fe,O,y,V]),Pe(()=>{if(!fe)return;const d=b.state.value;let x=d;$&&Array.isArray(d)&&d.length>0&&(x=d[d.length-1]),x!==void 0&&gt(x,y,ie)&&b.set("selectedIndex",O)},[fe,O,$,ie,b,y]);const i=t.useMemo(()=>({disabled:u,selected:z,highlighted:P}),[u,z,P]),I=le({active:P,selected:z});I.onFocus=void 0,I.id=void 0;const W=t.useRef(null),L=t.useRef("mouse"),a=t.useRef(!1),{getButtonProps:ce,buttonRef:g}=jt({disabled:u,focusableWhenDisabled:!0,native:C});function me(d){const x=b.state.value;if($){const F=Array.isArray(x)?x:[],q=z?Nn(F,y,ie):[...F,y];Z(q,Ne(dt,d))}else Z(y,Ne(dt,d)),j(!1,Ne(dt,d))}const he={role:"option","aria-selected":z,"aria-disabled":u||void 0,tabIndex:P?0:-1,onFocus(){b.set("activeIndex",O)},onMouseEnter(){!f.current&&b.state.selectedIndex===null&&b.set("activeIndex",O)},onMouseMove(){be&&b.set("activeIndex",O)},onMouseLeave(d){!be||f.current||qt(d)||se.start(0,()=>{b.state.activeIndex===O&&b.set("activeIndex",null)})},onTouchStart(){K.current={allowSelectedMouseUp:!1,allowUnselectedMouseUp:!1}},onKeyDown(d){W.current=d.key,b.set("activeIndex",O)},onClick(d){a.current=!1,!(d.type==="keydown"&&W.current===null)&&(u||W.current===" "&&R.current||L.current!=="touch"&&!P||(W.current=null,me(d.nativeEvent)))},onPointerEnter(d){L.current=d.pointerType},onPointerDown(d){L.current=d.pointerType,a.current=!0},onMouseUp(d){if(u)return;if(a.current){a.current=!1;return}const x=!K.current.allowSelectedMouseUp&&z,F=!K.current.allowUnselectedMouseUp&&!z;x||F||L.current!=="touch"&&!P||me(d.nativeEvent)}},D=Oe("div",n,{ref:[g,h,B.ref,ae],state:i,props:[I,he,k,ce]}),_=t.useMemo(()=>({selected:z,indexRef:S,textRef:A,selectedByFocus:ye,hasRegistered:fe}),[z,S,A,ye,fe]);return s.jsx(Yt.Provider,{value:_,children:D})})),Et=t.forwardRef(function(n,h){const l=n.keepMounted??!1,{selected:G}=vt();return l||G?s.jsx(io,{...n,ref:h}):null}),io=t.memo(t.forwardRef((e,n)=>{const{render:h,className:l,keepMounted:G,...y}=e,{selected:c}=vt(),u=t.useRef(null),{transitionStatus:C,setMounted:k}=At(c),A=t.useMemo(()=>({selected:c,transitionStatus:C}),[c,C]),B=Oe("span",e,{ref:[n,u],state:A,props:[{"aria-hidden":!0,children:"✔️"},y],stateAttributesMapping:Bt});return bt({open:c,ref:u,onComplete(){c||k(!1)}}),B})),Ct=t.memo(t.forwardRef(function(n,h){const{indexRef:l,textRef:G,selectedByFocus:y,hasRegistered:c}=vt(),{selectedItemTextRef:u}=Ue(),{className:C,render:k,...A}=n,B=t.useCallback(le=>{if(!le||!c)return;const j=u.current===null||!u.current.isConnected;(y||j&&l.current===0)&&(u.current=le)},[u,l,y,c]);return Oe("div",n,{ref:[B,h,G],props:A})})),Gt=t.createContext(void 0);function ao(){const e=t.useContext(Gt);if(e===void 0)throw new Error(st(56));return e}const co=t.forwardRef(function(n,h){const{className:l,render:G,...y}=n,[c,u]=t.useState(),C=t.useMemo(()=>({labelId:c,setLabelId:u}),[c,u]),k=Oe("div",n,{ref:h,props:[{role:"group","aria-labelledby":c},y]});return s.jsx(Gt.Provider,{value:C,children:k})}),uo=t.forwardRef(function(n,h){const{className:l,render:G,id:y,...c}=n,{setLabelId:u}=ao(),C=bn(y);return Pe(()=>{u(C)},[C,u]),Oe("div",n,{ref:h,props:[{id:C},c]})}),lt=e=>!!e.options,ct=e=>typeof e.label=="string"||typeof e.label=="number"?String(e.label):typeof e.value=="string"||typeof e.value=="number"?String(e.value):e.title?e.title:"",po=e=>e.replaceAll(/[$()*+.?[\\\]^{|}]/g,"\\$&"),fo=(e,n)=>{if(!n||n.length===0)return[e];const h=n.map(po).join("|");return e.split(new RegExp(h,"g"))},go=e=>e.reduce((n,h)=>lt(h)?n+h.options.length+1:n+1,0),rt=e=>e==null||e==="",Xt=t.memo(({allowClear:e,autoFocus:n,className:h,classNames:l,defaultOpen:G,defaultValue:y,disabled:c,id:u,labelRender:C,listHeight:k=512,listItemHeight:A,loading:B,mode:b,name:le,onChange:j,onOpenChange:Z,onSelect:K,open:R,optionRender:V,options:f,placeholder:$,popupClassName:be,popupMatchSelectWidth:se,prefix:P,readOnly:z,required:ye,behaviorVariant:ie="default",selectedIndicatorVariant:O="check",shadow:fe,showSearch:ae,size:S="middle",style:i,suffixIcon:I,suffixIconProps:W,tokenSeparators:L,value:a,variant:ce,virtual:g})=>{const{isDarkMode:me}=vn(),he=ce??(me?"filled":"outlined"),D=b==="multiple"||b==="tags",_=ie==="item-aligned",[d,x]=t.useState(()=>y!==void 0?y:D?[]:null),F=t.useCallback(o=>D?Array.isArray(o)?o:o==null?[]:[o]:Array.isArray(o)?o[0]??null:o===void 0?null:o,[D]),q=a!==void 0?a:d,X=t.useMemo(()=>F(q),[q,F]),Q=t.useMemo(()=>D?X:rt(X)?[]:[X],[D,X]),[ue,ge]=t.useState([]);t.useEffect(()=>{b!=="tags"&&ue.length>0&&ge([])},[b,ue.length]);const{resolvedOptions:Ie,optionMap:de}=t.useMemo(()=>{const o=f??[],r=new Map,M=re=>{r.has(re.value)||r.set(re.value,re)};(re=>{re.forEach(Ze=>{lt(Ze)?Ze.options.forEach(M):M(Ze)})})(o);const T=ue.filter(re=>!r.has(re.value));T.forEach(M);const te=[...o,...T],Ce=Q.filter(re=>!r.has(re)).map(re=>({label:String(re),value:re}));return Ce.forEach(M),{optionMap:r,resolvedOptions:Ce.length?[...te,...Ce]:te}},[ue,f,Q]),[Y,ve]=t.useState(!!G);t.useEffect(()=>{R!==void 0&&ve(R)},[R]);const Se=R??Y,J=t.useCallback(o=>{Z?.(o),R===void 0&&ve(o)},[Z,R]),[N,p]=t.useState(""),xe=!!(ae||b==="tags");t.useEffect(()=>{Se||p("")},[Se]);const pe=t.useCallback(o=>{const r=de.get(o);return r||(o&&typeof o=="object"&&"label"in o?{label:o.label,value:o}:{label:String(o),value:o})},[de]),we=t.useRef(X);t.useEffect(()=>{we.current=X},[X]);const ee=t.useCallback(o=>{const r=F(o),M=we.current;if(D){const H=Array.isArray(M)?M:[],T=Array.isArray(r)?r:[];T.filter(te=>!H.some(Ce=>Object.is(Ce,te))).forEach(te=>{K?.(te,pe(te))}),a===void 0&&x(T),j?.(T,T.map(te=>pe(te)))}else!rt(r)&&!Object.is(M,r)&&K?.(r,pe(r)),a===void 0&&x(r),j?.(r,rt(r)?void 0:pe(r));we.current=r},[pe,D,F,j,K,a]),Ae=t.useCallback(o=>{const r=o.map(T=>T.trim()).filter(Boolean);if(!r.length)return;const M=[...Q],H=r.filter(T=>!de.has(T));H.length>0&&ge(T=>{const te=new Set(T.map(re=>re.value)),Ce=[...T];return H.forEach(re=>{te.has(re)||Ce.push({label:re,value:re})}),Ce}),r.forEach(T=>{M.some(te=>Object.is(te,T))||M.push(T)}),M.length!==Q.length&&ee(M)},[ee,de,Q]),tt=t.useCallback(o=>{const r=o.target.value;if(b==="tags"){const M=fo(r,L);if(M.length>1){const H=M.pop()??"";Ae(M.filter(Boolean)),p(H);return}}p(r)},[Ae,b,L]),Xe=t.useCallback(o=>{if(o.stopPropagation(),o.key==="Escape"){J(!1);return}if(b==="tags"){if(o.key==="Enter"){o.preventDefault(),o.stopPropagation(),Ae([N]),p("");return}L?.includes(o.key)&&(o.preventDefault(),o.stopPropagation(),Ae([N]),p(""))}},[Ae,J,b,N,L]),Re=t.useMemo(()=>{if(!xe||!N.trim())return Ie;const o=N.trim().toLowerCase();return(M=>M.map(H=>{if(lt(H)){const T=H.options.filter(te=>ct(te).toLowerCase().includes(o));return T.length?{...H,options:T}:null}return ct(H).toLowerCase().includes(o)?H:null}).filter(Boolean))(Ie)},[Ie,N,xe]),ze=t.useCallback(o=>{const r=F(o),M=$===void 0?null:s.jsx("span",{className:E.valueText,children:$});if(D){const te=Array.isArray(r)?r:[];return te.length===0?M:s.jsx("span",{className:E.tags,children:te.map((Ce,re)=>{const Ze=pe(Ce),Kt=C?C(Ze):Ze.label??String(Ce);return s.jsx("span",{className:E.tag,children:Kt},`${String(Ce)}-${re}`)})})}if(rt(r))return M;const H=pe(r),T=C?C(H):H.label??String(r);return s.jsx("span",{className:E.valueText,children:T})},[pe,D,C,F,$]),We=D?Q.length>0:!rt(X),ke=!!(e&&We&&!c&&!z),Me=t.useCallback(o=>{o.preventDefault(),o.stopPropagation(),ee(D?[]:null)},[ee,D]),Te=t.useMemo(()=>P==null?null:t.isValidElement(P)||typeof P=="string"||typeof P=="number"?P:s.jsx($e,{icon:P,size:"small"}),[P]),Fe=t.useMemo(()=>B?s.jsx($e,{spin:!0,icon:Cn,size:"small"}):I===null?null:t.isValidElement(I)||typeof I=="string"||typeof I=="number"?I:s.jsx($e,{icon:I||An,size:"small",...W,style:{pointerEvents:"none",...W?.style}}),[B,I,W]),Ke=t.useMemo(()=>{const o=_?"80vh":`${k}px`,r={maxHeight:o,maxWidth:"var(--available-width)",minWidth:"var(--anchor-width)","--lobe-select-popup-max-height":o};return se===void 0||se===!0?r:typeof se=="number"?{...r,minWidth:se,width:se}:{...r,minWidth:"max-content"}},[_,k,se]),nt=ne(Kn({shadow:fe,size:S,variant:he}),h,l?.root,l?.trigger),_e=t.useRef(null),je=t.useRef(!1),Ee=t.useRef(null),Ye=t.useCallback(o=>{const{ref:r,...M}=o;return s.jsx("div",{...M,ref:H=>{H&&(H.scrollIntoView=(...T)=>{je.current||HTMLElement.prototype.scrollIntoView.call(H,...T)}),typeof r=="function"?r(H):r&&"current"in r&&(r.current=H)}})},[]),He=t.useCallback(()=>{je.current=!0,Ee.current&&clearTimeout(Ee.current),Ee.current=setTimeout(()=>{je.current=!1},120)},[]),Le=t.useCallback(()=>{if(!g||!je.current)return;const o=_e.current,r=document.activeElement;o&&r&&o.contains(r)&&o.focus({preventScroll:!0})},[g]);t.useEffect(()=>()=>{Ee.current&&clearTimeout(Ee.current)},[]);const Ge=t.useMemo(()=>{if(!g)return;const o=go(Re),r=6,M=A??(S==="large"?40:S==="small"?28:32);return{height:`min(${Math.min(Math.max(o,1),r)*M+8}px, var(--lobe-select-available-height, var(--available-height)))`}},[Re,A,S,g]),ot=t.useMemo(()=>{if(!g||Q.length===0)return;const o=new Set(Q),r=[];let M=0;return Re.forEach(H=>{if(lt(H)){H.options.some(T=>o.has(T.value))&&r.push(M),M+=1;return}o.has(H.value)&&r.push(M),M+=1}),r.length?r:void 0},[Re,Q,g]),Je=ne(V?qe.itemContent:qe.label,E.itemText,l?.itemText),w=O==="bold";let oe=0;const Ve=o=>o.map((r,M)=>{if(lt(r))return s.jsxs(co,{className:ne(E.group,l?.group),children:[s.jsx(uo,{className:ne(qe.groupLabel,E.groupLabel,l?.groupLabel),children:r.label}),r.options.map(T=>{const te=oe++;return s.jsxs(Mt,{disabled:T.disabled,label:ct(T),render:g?Ye:void 0,value:T.value,className:ne(qe.item,E.item,w&&E.itemBoldSelected,l?.item,l?.option,T.className),style:{minHeight:A,...T.style},children:[s.jsx(Ct,{className:Je,children:V?V(T,{index:te}):T.label}),!w&&s.jsx(Et,{className:ne(E.itemIndicator,l?.itemIndicator),children:s.jsx($e,{icon:Tt,size:"small"})})]},`${String(T.value)}-${te}`)})]},`group-${M}`);const H=oe++;return s.jsxs(Mt,{disabled:r.disabled,label:ct(r),render:g?Ye:void 0,value:r.value,className:ne(qe.item,E.item,w&&E.itemBoldSelected,l?.item,l?.option,r.className),style:{minHeight:A,...r.style},children:[s.jsx(Ct,{className:Je,children:V?V(r,{index:H}):r.label}),!w&&s.jsx(Et,{className:ne(E.itemIndicator,l?.itemIndicator),children:s.jsx($e,{icon:Tt,size:"small"})})]},`${String(r.value)}-${H}`)}),Be=yn();return s.jsxs(_n,{disabled:c,id:u,modal:_,multiple:D,name:le,open:Se,readOnly:z,required:ye,value:X,onOpenChange:J,onValueChange:ee,children:[s.jsxs(Zn,{autoFocus:n,className:nt,disabled:c,style:i,children:[Te!=null&&s.jsx("span",{className:ne(E.prefix,l?.prefix),children:Te}),s.jsx(Qn,{className:ne(E.value,l?.value),children:ze}),s.jsxs("span",{className:ne(E.suffix,l?.suffix),children:[ke&&s.jsx("span",{className:ne(E.clear,l?.clear),"data-role":"lobe-select-clear",onClick:Me,children:s.jsx($e,{icon:Pn,size:"small"})}),Fe!=null&&s.jsx(eo,{className:ne(E.icon,l?.icon),children:Fe})]})]}),s.jsx(no,{container:Be,children:s.jsx(ro,{align:"start",alignItemWithTrigger:_,className:E.positioner,side:"bottom",sideOffset:6,children:s.jsxs(so,{style:Ke,className:ne(qe.popup,E.popup,be,l?.popup,l?.dropdown),children:[xe&&s.jsx("div",{className:ne(E.search,l?.search),children:s.jsx("input",{className:E.searchInput,placeholder:typeof $=="string"?$:void 0,value:N,onChange:tt,onKeyDown:Xe})}),(()=>{const o=Re.length>0?Ve(Re):s.jsx("div",{className:ne(qe.item,qe.empty,E.empty,l?.empty),children:"No data"});return!g||Re.length===0?s.jsx(It,{className:ne(E.list,l?.list),"data-virtual":g||void 0,children:o}):s.jsx(It,{className:ne(E.list,l?.list),"data-virtual":g||void 0,ref:_e,style:Ge,tabIndex:g?-1:void 0,onPointerDown:g?He:void 0,onScroll:g?Le:void 0,onTouchMove:g?He:void 0,onWheel:g?He:void 0,children:s.jsx(En,{itemSize:A,keepMounted:ot,children:o})})})()]})})})]})});Xt.displayName="Select";var Ro=Xt;export{Ro as S,zt as a,_n as b,E as c,co as d,uo as e,eo as f,Mt as g,Et as h,Ct as i,It as j,so as k,no as l,ro as m,Zn as n,Qn as o,m as s,Kn as t,Ue as u};
