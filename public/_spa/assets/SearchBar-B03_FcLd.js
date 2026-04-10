import{j as B,m as i,c8 as E,at as D,ax as F,I as P,cg as z}from"./index-C275yc7e.js";import{S as H}from"./Spotlight-OeUDDJY8.js";import{r as o}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as a}from"../vendor/vendor-motion-siEo8VfX.js";import{f as J}from"./index-CDehTX2A.js";import{aI as L,aJ as M}from"../vendor/vendor-icons-CwKawJ1k.js";const c=B(({css:t,cssVar:r})=>({icon:t`
    color: ${r.colorTextPlaceholder};
  `,search:t`
    position: relative;
    max-width: 100%;
  `,tag:i(E.blur,t`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 6px;
      transform: translateY(-50%);

      color: ${r.colorTextDescription};

      kbd {
        color: inherit;
      }
    `)})),O=o.memo(({defaultValue:t="",spotlight:r,className:h,value:d,onInputChange:g,placeholder:S,enableShortKey:n,shortKey:s="mod+k",onSearch:y,loading:m,style:j,onChange:k,onBlur:v,onPressEnter:N,onFocus:T,styles:{input:w,shortKey:C}={},classNames:{input:I,shortKey:b}={},...R})=>{const[l,u]=D(t,{defaultValue:t,onChange:g,value:d}),[$,p]=o.useState(!0),f=o.useRef(null),x=o.useMemo(()=>s.includes("+")?s:`mod+${s}`,[s]);return J(x,()=>{n&&f.current?.focus()},{enableOnFormTags:!0,enabled:!!n&&!!s,preventDefault:!0}),a.jsxs("div",{className:i(c.search,h),style:j,children:[r&&a.jsx(H,{}),a.jsx(F,{allowClear:!0,className:I,placeholder:S??"Type keywords...",ref:f,style:w,value:l,prefix:a.jsx(P,{className:c.icon,icon:m?L:M,size:"small",spin:m,style:{marginRight:4}}),onBlur:e=>{v?.(e),u(e.target.value),p(!0)},onChange:e=>{u(e.target.value),k?.(e)},onFocus:e=>{T?.(e),p(!1)},onPressEnter:e=>{N?.(e),y?.(l)},...R}),n&&$&&!l&&a.jsx(z,{compact:!0,className:i(c.tag,b),keys:x,style:C})]})});O.displayName="SearchBar";export{O as S};
