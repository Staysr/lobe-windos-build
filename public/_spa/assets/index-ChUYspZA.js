import{j as l}from"../vendor/vendor-motion-siEo8VfX.js";import{q as w,j as C}from"./index-C275yc7e.js";import{S as v}from"./Select-CenNWF9u.js";import{r as c}from"../vendor/vendor-emotion-B6qZrIr4.js";import{P as y,M as d,T}from"./index-Dx9BXT5t.js";import{u as b}from"./useEnabledChatModels-P4cW4eV-.js";const i="ant",m=C(({css:o})=>({popup:o`
    width: max(360px, var(--anchor-width));

    &.${i}-select-dropdown .${i}-select-item-option-grouped {
      padding-inline-start: 12px;
    }
  `,select:o`
    .${i}-select-selection-item {
      .${T} {
        display: none;
      }
    }
  `})),L=c.memo(({value:o,onChange:f,showAbility:h=!0,requiredAbilities:a,loading:u,size:x,style:g,variant:$,initialWidth:j=!1,popupWidth:p})=>{const r=b(),M=c.useMemo(()=>{const t=e=>(a&&a.length>0?e.children.filter(s=>a.every(S=>!!s.abilities?.[S])):e.children).map(s=>({...s,label:l.jsx(d,{...s,...s.abilities,showInfoTag:!1}),provider:e.id,value:`${e.id}/${s.id}`}));if(r.length===1){const e=r[0];return t(e)}return r.map(e=>{const n=t(e);if(n.length!==0)return{label:l.jsx(y,{logo:e.logo,name:e.name,provider:e.id,source:e.source}),options:n}}).filter(Boolean)},[r,a,h]);return l.jsx(w,{children:l.jsx(v,{className:m.select,defaultValue:`${o?.provider}/${o?.model}`,loading:u,options:M,popupClassName:m.popup,popupMatchSelectWidth:p===void 0?!1:p,size:x,value:`${o?.provider}/${o?.model}`,variant:$,optionRender:t=>l.jsx(d,{...t,...t.abilities,showInfoTag:!1}),style:{minWidth:200,width:j?"initial":void 0,...g},onChange:(t,e)=>{const n=t.split("/").slice(1).join("/");f?.({model:n,provider:e.provider})}})})});export{L as M};
