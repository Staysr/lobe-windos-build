import{j as ue,c5 as p,c9 as fe,af as pe,cu as he,as as me,cv as A,F as E,ce as _,W as q,m as ye,cw as ke}from"./index-BmW5CTHd.js";import{u as ve}from"./useTranslation-ByWlna2-.js";import{h as xe}from"./hotkey-ii61g0AV.js";import{r}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as t}from"../vendor/vendor-motion-DRC1LdIk.js";import{l as be,f as ge}from"./index-BWOrgFyN.js";import{c as je}from"../vendor/vendor-es-toolkit-O0KSByiM.js";import{a$ as Ce,a0 as Te}from"../vendor/vendor-icons-Bjz-9Gdp.js";const s=ue(({css:a,cssVar:n})=>({borderless:p.variantBorderless,disabled:p.disabled,error:a`
      border: 1px solid ${n.colorError};
    `,errorText:a`
      font-size: 12px;
      color: ${n.colorError};
    `,filled:p.variantFilled,focused:a`
      background: ${n.colorFillSecondary} !important;
    `,hiddenInput:a`
      cursor: text;

      position: absolute;
      z-index: -1;
      inset-block-start: 0;
      inset-inline-start: 0;

      width: 100%;
      height: 100%;

      opacity: 0;
    `,outlined:p.variantOutlined,placeholder:a`
      color: ${n.colorTextDescription};
    `,root:a`
      cursor: pointer;

      position: relative;

      max-width: 100%;
      height: 36px;
      padding-block: 0;
      padding-inline: 12px;
      border-radius: ${n.borderRadius};
    `,shadow:p.shadow})),Ie=fe(s.root,{defaultVariants:{disabled:!1,error:!1,shadow:!1,variant:"outlined"},variants:{variant:{filled:s.filled,outlined:s.outlined,borderless:s.borderless},shadow:{false:null,true:s.shadow},focused:{false:null,true:s.focused},error:{fales:null,true:s.error},disabled:{false:null,true:s.disabled}}}),Ee=r.memo(({value:a="",defaultValue:n="",resetValue:h="",onChange:L,onClear:U,onConflict:w,placeholder:W,disabled:l,shadow:X,allowClear:F,allowReset:S=!0,style:G,className:J,hotkeyConflicts:D=[],variant:Q,texts:m,isApple:z,onBlur:Y,onReset:Z,onFocus:V})=>{const[g,y]=r.useState(!1),[H,i]=r.useState(!1),[N,d]=r.useState(!1),j=r.useRef(null),{isDarkMode:ee}=pe(),{t:u}=ve(xe),R=r.useMemo(()=>he(z),[z]),[c,k]=me(n,{defaultValue:n,onChange:L,value:a}),[C,{start:te,stop:T,isRecording:v,resetKeys:K}]=be();ge("*",()=>{j.current?.blur()},{enableOnContentEditable:!0,enableOnFormTags:!0,enabled:v&&!l,keydown:!1,keyup:!0,preventDefault:!0});const{isValid:O,keys:$}=r.useCallback(e=>{const o=[],x=[];for(const b of e){const f=b.toLowerCase();ke.includes(f)?!R&&f==="ctrl"||R&&f==="meta"?o.includes("mod")||o.push("mod"):o.includes(f)||o.push(f):x.push(b)}if(o.length===0&&x.length>0)return{isValid:!1,keys:[]};const P=[o,x.length>0?[x.at(-1)]:[]];return{isValid:P.every(b=>b.length>0),keys:P.flat()}},[])(C),I=$.join("+"),B=r.useCallback(e=>D.filter(o=>o!==h).some(o=>je(A(e),A(o))),[D]);r.useEffect(()=>{if(C.size>0&&!v){if(!O){d(!0),i(!1);return}d(!1);const e=I;B(e)?(i(!0),w?.(e)):(i(!1),k?.(e))}},[C,v,O,I,B,k,w]);const se=e=>{l||(y(!0),i(!1),d(!1),te(),V?.(e))},oe=e=>{y(!1),T(),Y?.(e)},re=e=>{e.preventDefault(),e.stopPropagation(),k?.(""),K(),i(!1),d(!1),y(!1),T(),U?.(c)},ae=e=>{e.preventDefault(),e.stopPropagation(),k?.(h),K(),i(!1),d(!1),y(!1),T(),Z?.(c,h)},ne=e=>{e.preventDefault(),e.stopPropagation(),!(l||g)&&j.current?.focus()},M=W??u("hotkey.placeholder"),le=m?.reset??u("hotkey.reset"),ie=m?.clear??u("hotkey.clear"),ce=m?.conflicts??u("hotkey.conflict"),de=m?.invalidCombination??u("hotkey.invalidCombination");return t.jsxs(E,{className:J,gap:8,style:{position:"relative",...G},children:[t.jsxs(E,{horizontal:!0,align:"center",justify:"space-between",className:ye(Ie({disabled:l,error:H||N,focused:g,shadow:X,variant:Q||(ee?"filled":"outlined")})),onClick:ne,children:[t.jsx("div",{style:{pointerEvents:"none"},children:v?t.jsx("span",{className:s.placeholder,children:$.length>0?t.jsx(_,{keys:I}):M}):c?t.jsx(_,{keys:c}):t.jsx("span",{className:s.placeholder,children:M})}),t.jsx("input",{readOnly:!0,className:s.hiddenInput,disabled:l,ref:j,style:{pointerEvents:"none"},onBlur:oe,onFocus:se}),!g&&c&&!l&&(S||F)&&t.jsxs(E,{horizontal:!0,gap:4,children:[S&&c!==h&&t.jsx(q,{icon:Ce,size:"small",title:le,variant:"filled",onClick:ae}),F&&t.jsx(q,{icon:Te,size:"small",title:ie,variant:"filled",onClick:re})]})]}),H&&t.jsx("div",{className:s.errorText,children:ce}),N&&t.jsx("div",{className:s.errorText,children:de})]})});Ee.displayName="HotkeyInput";export{Ee as H};
