import{j as ue,c9 as J,fy as fe,fz as he,fA as me,fB as pe,fC as xe,fD as be,fE as ge,aI as ye,fF as ke,fG as Ce,fH as ve,fI as W,ct as D,m as L,as as we,I as Se}from"./index-BmW5CTHd.js";import{r as a}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as s}from"../vendor/vendor-motion-DRC1LdIk.js";import{f as Pe,u as je,a as X,b as Ie,c as Re,d as Ee,e as Te}from"./styles-NMioGP3M.js";import{aI as Ne}from"../vendor/vendor-icons-Bjz-9Gdp.js";const c=ue(({css:e,cssVar:t})=>({icon:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${t.colorTextLightSolid};
  `,iconLeft:e`
    inset-inline-start: 5px;
  `,iconLeftSmall:e`
    inset-inline-start: 4px;
  `,iconRight:e`
    inset-inline-end: 5px;
  `,iconRightSmall:e`
    inset-inline-end: 4px;
  `,iconThumb:e`
    position: relative;
    inset: unset;
    transform: none;
    color: ${t.colorPrimary};
  `,loading:e`
    @keyframes lobe-switch-loading {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    animation: lobe-switch-loading 1s linear infinite;
  `,root:e`
    cursor: pointer;
    user-select: none;

    position: relative;

    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    box-sizing: border-box;
    padding: 2px;
    border: 0;
    border-radius: 100px;

    background: ${t.colorTextQuaternary};
    outline: none;

    transition: background 150ms ${t.motionEaseOut};

    &:focus-visible {
      outline: 2px solid ${t.colorPrimaryBorder};
      outline-offset: 1px;
    }

    &:hover:not([data-disabled]) {
      background: ${t.colorTextTertiary};
    }

    &[data-checked] {
      justify-content: flex-end;
      background: ${t.colorPrimary};

      &:hover:not([data-disabled]) {
        background: ${t.colorPrimaryHover};
      }
    }

    &[data-disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,rootDefault:e`
    width: 44px;
    min-width: 44px;
    height: 22px;
  `,rootSmall:e`
    width: 28px;
    min-width: 28px;
    height: 16px;
  `,thumb:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${t.colorBgContainer};
    box-shadow:
      0 2px 4px 0 rgb(0 35 11 / 20%),
      0 1px 2px 0 rgb(0 0 0 / 8%);

    [data-disabled] > & {
      box-shadow: none;
    }
  `,thumbDefault:e`
    width: 18px;
    height: 18px;
  `,thumbSmall:e`
    width: 12px;
    height: 12px;
  `})),Me=J(c.root,{defaultVariants:{size:"default"},variants:{size:{default:c.rootDefault,small:c.rootSmall}}}),Be=J(c.thumb,{defaultVariants:{size:"default"},variants:{size:{default:c.thumbDefault,small:c.thumbSmall}}}),Y=a.createContext(void 0);function $e(){const e=a.useContext(Y);if(e===void 0)throw new Error(fe(63));return e}let U=(function(e){return e.checked="data-checked",e.unchecked="data-unchecked",e.disabled="data-disabled",e.readonly="data-readonly",e.required="data-required",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const Z={...Pe,checked(e){return e?{[U.checked]:""}:{[U.unchecked]:""}}},Le=a.forwardRef(function(t,n){const{checked:p,className:i,defaultChecked:d,id:r,inputRef:u,name:f,nativeButton:x=!1,onCheckedChange:N,readOnly:g=!1,required:y=!1,disabled:j=!1,render:B,uncheckedValue:h,...k}=t,{clearErrors:m}=je(),{state:b,setTouched:S,setDirty:I,validityData:M,setFilled:P,setFocused:R,shouldValidateOnChange:o,validationMode:ne,disabled:oe,name:ae,validation:C}=X(),{labelId:se}=Ie(),v=oe||j,E=ae??f,V=he(N),T=a.useRef(null),q=me(T,u,C.inputRef),$=a.useRef(null),z=pe(),H=Re({id:r,implicit:!1,controlRef:$}),[l,K]=xe({controlled:p,default:!!d,name:"Switch",state:"checked"});Ee({id:z,commit:C.commit,value:l,controlRef:$,name:E,getValue:()=>l}),be(()=>{T.current&&P(T.current.checked)},[T,P]),Te(l,()=>{m(E),I(l!==M.initialValue),P(l),o()?C.commit(l):C.commit(l,!0)});const{getButtonProps:ie,buttonRef:re}=ge({disabled:v,native:x}),le={id:z,role:"switch","aria-checked":l,"aria-readonly":g||void 0,"aria-labelledby":se,onFocus(){v||R(!0)},onBlur(){const w=T.current;!w||v||(S(!0),R(!1),ne==="onBlur"&&C.commit(w.checked))},onClick(w){g||v||(w.preventDefault(),T?.current?.click())}},ce=a.useMemo(()=>ye({checked:l,disabled:v,id:H,name:E,required:y,style:ke,tabIndex:-1,type:"checkbox","aria-hidden":!0,ref:q,onChange(w){if(w.nativeEvent.defaultPrevented)return;const G=w.target.checked,Q=Ce(ve,w.nativeEvent);V?.(G,Q),!Q.isCanceled&&K(G)},onFocus(){$.current?.focus()}},C.getInputValidationProps),[l,v,q,H,E,V,y,K,C]),O=a.useMemo(()=>({...b,checked:l,disabled:v,readOnly:g,required:y}),[b,l,v,g,y]),de=W("span",t,{state:O,ref:[n,$,re],props:[le,C.getValidationProps,k,ie],stateAttributesMapping:Z});return s.jsxs(Y.Provider,{value:O,children:[de,!l&&E&&h!==void 0&&s.jsx("input",{type:"hidden",name:E,value:h}),s.jsx("input",{...ce})]})}),Fe=a.forwardRef(function(t,n){const{render:p,className:i,...d}=t,{state:r}=X(),u=$e(),f={...r,...u};return W("span",t,{state:f,ref:n,stateAttributesMapping:Z,props:d})}),_=a.createContext(null),A=()=>{const e=a.use(_);if(!e)throw new Error("useSwitchContext must be used within a SwitchRoot");return e},ee=({checked:e,className:t,defaultChecked:n,onCheckedChange:p,onClick:i,size:d="default",children:r,disabled:u,readOnly:f,required:x,inputRef:N,id:g,name:y,...j})=>{const B=D(),[h,k]=a.useState(!1),m=a.useRef(null),[b,S]=we(n??!1,{defaultValue:n,onChange:o=>{m.current&&p?.(o,m.current)},value:e}),I=Me({size:d}),M=a.useMemo(()=>({isChecked:!!b,isPressed:h,setIsChecked:o=>S(o),setIsPressed:k}),[b,h,S]),P=o=>{m.current=o,i?.(!b,o)},R=o=>{(o.key==="Enter"||o.key===" ")&&(m.current=o),j.onKeyDown?.(o)};return s.jsx(_,{value:M,children:s.jsx(Le,{checked:b,defaultChecked:n,disabled:u,id:g,inputRef:N,name:y,readOnly:f,required:x,render:s.jsx(B.button,{...j,className:L(I,t),initial:!1,whileTap:"tap",onClick:P,onKeyDown:R,onTap:()=>k(!1),onTapCancel:()=>k(!1),onTapStart:()=>k(!0)}),onCheckedChange:S,children:r})})};ee.displayName="SwitchRoot";const te=({className:e,pressedAnimation:t,size:n="default",transition:p={damping:25,stiffness:300,type:"spring"},children:i,...d})=>{const r=D(),{isPressed:u}=A(),f=Be({size:n}),x={width:n==="small"?16:22};return s.jsx(Fe,{render:s.jsx(r.span,{layout:!0,animate:u?t||x:void 0,className:L(f,e),transition:p,...d,children:i})})};te.displayName="SwitchThumb";const De=(e,t)=>e==="thumb"?c.iconThumb:e==="left"?t==="small"?c.iconLeftSmall:c.iconLeft:t==="small"?c.iconRightSmall:c.iconRight,F=({children:e,className:t,position:n,transition:p={bounce:0,type:"spring"},...i})=>{const d=D(),{isChecked:r}=A(),u=i.size||"default",f=a.useMemo(()=>n==="right"?!r:n==="left"?r:n==="thumb",[n,r]),x=De(n,u);return s.jsx(d.span,{animate:f?{opacity:1,scale:1}:{opacity:0,scale:0},className:L(c.icon,x,t),transition:p,...i,children:e})};F.displayName="SwitchIcon";const Ve=a.memo(({autoFocus:e,checked:t,checkedChildren:n,className:p,classNames:i,defaultChecked:d,defaultValue:r,disabled:u,id:f,loading:x,name:N,onChange:g,onClick:y,ref:j,rootClassName:B,size:h="default",style:k,styles:m,tabIndex:b,title:S,unCheckedChildren:I,value:M})=>{const P=u||x,R=M??t,o=r??d;return s.jsxs(ee,{autoFocus:e,checked:R,className:L(p,B,i?.root),defaultChecked:o,disabled:P,id:f,name:N,ref:j,size:h,style:{...k,...m?.root},tabIndex:b,title:S,onCheckedChange:g,onClick:y,children:[n&&s.jsx(F,{className:i?.content,position:"left",size:h,style:m?.content,children:n}),I&&s.jsx(F,{className:i?.content,position:"right",size:h,style:m?.content,children:I}),s.jsx(te,{className:i?.thumb,size:h,style:m?.thumb,children:x&&s.jsx(Se,{className:c.loading,icon:Ne,size:h==="small"?8:12,style:{color:"var(--lobe-color-primary)"}})})]})});Ve.displayName="Switch";export{Ve as S,F as a,ee as b,te as c,c as s,A as u};
