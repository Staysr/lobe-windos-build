import{j as B,m as i,c8 as E,as as D,aw as F,I as P,cg as z}from"./index-BBAuCJqA.js";import{S as H}from"./Spotlight-BfNArZet.js";import{r as o}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as a}from"../vendor/vendor-motion-DRC1LdIk.js";import{f as J}from"./index-BWOrgFyN.js";import{aI as L,aJ as M}from"../vendor/vendor-icons-C6hg4LnF.js";const c=B(({css:t,cssVar:r})=>({icon:t`
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
    `)})),O=o.memo(({defaultValue:t="",spotlight:r,className:h,value:d,onInputChange:g,placeholder:S,enableShortKey:n,shortKey:s="mod+k",onSearch:y,loading:m,style:j,onChange:k,onBlur:v,onPressEnter:w,onFocus:N,styles:{input:T,shortKey:C}={},classNames:{input:I,shortKey:b}={},...R})=>{const[l,u]=D(t,{defaultValue:t,onChange:g,value:d}),[$,p]=o.useState(!0),f=o.useRef(null),x=o.useMemo(()=>s.includes("+")?s:`mod+${s}`,[s]);return J(x,()=>{n&&f.current?.focus()},{enableOnFormTags:!0,enabled:!!n&&!!s,preventDefault:!0}),a.jsxs("div",{className:i(c.search,h),style:j,children:[r&&a.jsx(H,{}),a.jsx(F,{allowClear:!0,className:I,placeholder:S??"Type keywords...",ref:f,style:T,value:l,prefix:a.jsx(P,{className:c.icon,icon:m?L:M,size:"small",spin:m,style:{marginRight:4}}),onBlur:e=>{v?.(e),u(e.target.value),p(!0)},onChange:e=>{u(e.target.value),k?.(e)},onFocus:e=>{N?.(e),p(!1)},onPressEnter:e=>{w?.(e),y?.(l)},...R}),n&&$&&!l&&a.jsx(z,{compact:!0,className:i(c.tag,b),keys:x,style:C})]})});O.displayName="SearchBar";export{O as S};
