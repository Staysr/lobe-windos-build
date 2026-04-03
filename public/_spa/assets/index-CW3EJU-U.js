import{j as t}from"../vendor/vendor-motion-DRC1LdIk.js";import{a3 as $,F as g,a8 as M,j as S,k as C,bC as T,aU as L,bU as B,B as w}from"./index-BmW5CTHd.js";import{M as N}from"./Modal-BuUwDCT9.js";import{r as i}from"../vendor/vendor-emotion-D2wYcXAj.js";import{S as R}from"./SearchBar-C4uEhQKH.js";import{S as j}from"./index-B4WS8tzo.js";import{q as F}from"./index-LmrW6VJz.js";import{A as k}from"./AgentSelectionEmpty-DEsRn0Vk.js";import{A as z}from"./index-CjltaXqJ.js";import{C as E}from"./index-BJuSB9kJ.js";import{u as q}from"./index-cfgNlZqR.js";import{c as D}from"./react-a1h5Ii4M.js";import{bn as H}from"../vendor/vendor-icons-Bjz-9Gdp.js";const f=D((e,n)=>({clearSelection:()=>{e({selectedAgentIds:[]})},isSelected:o=>n().selectedAgentIds.includes(o),removeAgent:o=>{e(s=>({selectedAgentIds:s.selectedAgentIds.filter(l=>l!==o)}))},selectedAgentIds:[],setSelectedAgents:o=>{e({selectedAgentIds:o})},toggleAgent:o=>{e(s=>s.selectedAgentIds.includes(o)?{selectedAgentIds:s.selectedAgentIds.filter(r=>r!==o)}:{selectedAgentIds:[...s.selectedAgentIds,o]})}})),y=S(({css:e,cssVar:n})=>({item:e`
    cursor: pointer;

    margin-block: 1px;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: ${n.borderRadius};

    transition: background 0.2s ease;

    &:hover {
      background: ${n.colorFillTertiary};
    }
  `,removeButton:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 4px;

    color: ${n.colorTextTertiary};

    transition: all 0.2s ease;

    &:hover {
      color: ${n.colorText};
      background: ${n.colorFillSecondary};
    }
  `,title:e`
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),I=i.memo(({agent:e,defaultTitle:n,showCheckbox:o,showRemove:s})=>{const l=i.useRef(null),r=q(l),c=f(a=>a.selectedAgentIds.includes(e.id)),m=f(a=>a.toggleAgent),d=f(a=>a.removeAgent),u=e.title||n,x=e.avatar||$,h=e.backgroundColor??void 0,A=()=>{m(e.id)},v=a=>{a.stopPropagation(),d(e.id)};return t.jsx("div",{className:y.item,ref:l,style:{cursor:o?"pointer":"default"},onClick:o?A:void 0,children:t.jsxs(g,{horizontal:!0,align:"center",gap:8,width:"100%",children:[o&&t.jsx(E,{checked:c,onChange:A,onClick:a=>{a.stopPropagation(),A()}}),t.jsx(z,{animation:r,avatar:x,background:h,shape:"circle",size:28}),t.jsx(M,{ellipsis:!0,className:y.title,children:u}),s&&t.jsx("div",{className:y.removeButton,onClick:v,children:t.jsx(H,{size:14})})]})})}),U=S(({css:e,cssVar:n})=>({container:e`
    user-select: none;

    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding-block: ${n.paddingSM}px 0;
    padding-inline: ${n.paddingSM}px;
  `})),P=i.memo(({agents:e,isLoading:n})=>{const{t:o}=C(["chat","common"]),[s,l]=i.useState(""),r=i.useMemo(()=>o("defaultSession",{ns:"common"}),[o]),c=i.useCallback(d=>{l(d.target.value)},[]),m=i.useMemo(()=>{if(!s.trim())return e;const d=s.toLowerCase();return e.filter(u=>{const x=u.title||"",h=u.description||"";return x.toLowerCase().includes(d)||h.toLowerCase().includes(d)})},[e,s]);return t.jsxs(g,{className:U.container,gap:12,children:[t.jsx(R,{allowClear:!0,placeholder:o("memberSelection.searchAgents"),value:s,variant:"filled",onChange:c}),t.jsx(g,{flex:1,style:{minHeight:0},children:n?t.jsxs(g,{gap:8,padding:8,children:[t.jsx(j,{active:!0,paragraph:{rows:1},title:!1}),t.jsx(j,{active:!0,paragraph:{rows:1},title:!1}),t.jsx(j,{active:!0,paragraph:{rows:1},title:!1})]}):m.length===0?t.jsx(k,{search:!!s,variant:s?"empty":"noAvailable"}):t.jsx(F,{style:{flex:1},totalCount:m.length,itemContent:d=>{const u=m[d];return t.jsx(I,{showCheckbox:!0,agent:u,defaultTitle:r},u.id)}})})]})}),b=S(({css:e,cssVar:n})=>({container:e`
    overflow-y: auto;
    flex: 1;
    padding: ${n.paddingSM}px;
  `,title:e`
    font-size: 12px;
    font-weight: 500;
    color: ${n.colorTextSecondary};
  `})),_=i.memo(({agents:e})=>{const{t:n}=C(["chat","common"]),o=f(r=>r.selectedAgentIds),s=i.useMemo(()=>n("defaultSession",{ns:"common"}),[n]),l=i.useMemo(()=>o.map(r=>e.find(c=>c.id===r)).filter(r=>r!==void 0),[e,o]);return l.length===0?t.jsx(g,{className:b.container,flex:1,children:t.jsx(k,{variant:"noSelected"})}):t.jsxs(g,{className:b.container,gap:4,children:[t.jsx("div",{className:b.title,children:n("memberSelection.selectedAgents",{count:l.length})}),t.jsx(g,{children:l.map(r=>t.jsx(I,{showRemove:!0,agent:r,defaultTitle:s},r.id))})]})}),G=S(({css:e,cssVar:n})=>({container:e`
    display: flex;
    flex-direction: row;

    height: 500px;
    padding: 12px;
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: ${n.borderRadius}px;
  `,rightColumn:e`
    display: flex;
    flex: 1;
    flex-direction: column;
  `})),se=i.memo(({existingMembers:e=[],onCancel:n,onConfirm:o,open:s})=>{const{t:l}=C(["chat","common"]),r=f(p=>p.selectedAgentIds),c=f(p=>p.clearSelection),{data:m=[],isLoading:d}=T(s?"queryAgents":null,()=>L.queryAgents()),u=i.useMemo(()=>m.filter(p=>!e.includes(p.id)),[m,e]);i.useEffect(()=>{s||c()},[s,c]);const[x,h]=i.useState(!1),A=async()=>{try{h(!0),await o(r),c()}catch(p){console.error("Failed to add members:",p)}finally{h(!1)}},v=()=>{c(),n()},a=r.length===0||x;return t.jsx(N,{allowFullscreen:!0,open:s,title:l("memberSelection.addMember"),width:800,footer:t.jsxs(g,{horizontal:!0,gap:8,justify:"end",children:[t.jsx(w,{onClick:v,children:l("cancel",{ns:"common"})}),t.jsxs(w,{disabled:a,loading:x,type:"primary",onClick:A,children:[l("memberSelection.addMember")," (",r.length,")"]})]}),onCancel:v,children:t.jsxs(g,{horizontal:!0,className:G.container,gap:8,children:[t.jsx(P,{agents:u,isLoading:d}),t.jsx(B,{orientation:"vertical",style:{height:"100%"}}),t.jsx(_,{agents:m})]})})});export{se as A};
