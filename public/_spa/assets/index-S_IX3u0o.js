import{j as t}from"../vendor/vendor-motion-siEo8VfX.js";import{k as E,ha as ke,m as R,a4 as D,aa as I,a9 as h,bU as K,F as u,o as y,cf as ze,B as re,j as Te,cS as ae}from"./index-C275yc7e.js";import{A as O}from"./index-B1FRBCSR.js";import{C as le}from"./index-C_TRf6KE.js";import{E as B}from"./Empty-BmPp2xKS.js";import{M as we}from"./Modal-DH7Lw-FF.js";import{L as ne}from"./index-a8u2yLdH.js";import{S as $e}from"./SearchBar-B03_FcLd.js";import{r as s}from"../vendor/vendor-emotion-B6qZrIr4.js";import{G as Ae}from"./index-C6sLmQhH.js";import{M as Re}from"./index-ChUYspZA.js";import{u as We}from"./useEnabledChatModels-P4cW4eV-.js";import{u as Le}from"./index-P5x8y3mT.js";import{o as Ne}from"../vendor/vendor-es-toolkit-CFMjQStz.js";import{a4 as W}from"../vendor/vendor-icons-CwKawJ1k.js";const Pe=()=>{const{t:r}=E("welcome");return["brainstorm","analysis","writing","planning","product","game"].map(m=>({description:r(`guide.groupTemplates.${m}.description`),id:m,members:r(`guide.groupTemplates.${m}.members`,{returnObjects:!0}),title:r(`guide.groupTemplates.${m}.title`)}))},Be=s.memo(({template:r,isSelected:n,onToggle:m,styles:p,cx:z})=>{const{t:a}=E("chat");return t.jsx("div",{className:z(p.listItem),onClick:()=>m(r.id),children:t.jsxs(u,{horizontal:!0,align:"center",gap:12,width:"100%",children:[t.jsx(le,{checked:n,onChange:()=>m(r.id),onClick:ae}),t.jsx(Ae,{size:40,avatars:r.members.filter(l=>l!=null).map(l=>({avatar:l.avatar||D,background:l.backgroundColor||void 0}))}),t.jsxs(u,{flex:1,gap:2,children:[t.jsx(h,{className:p.title,children:r.title}),t.jsx(h,{ellipsis:!0,className:p.description,children:r.description}),t.jsxs(u,{horizontal:!0,align:"center",gap:4,children:[t.jsx(W,{size:11,style:{color:"#999"}}),t.jsx(h,{style:{fontSize:11},type:"secondary",children:a("groupWizard.memberCount",{count:r.members.filter(l=>l!=null).length})})]})]})]})})}),De=s.memo(({agent:r,isSelected:n,onToggle:m,styles:p,cx:z})=>{const{t:a}=E(["chat","common"]),l=r.config?.id,S=r.meta?.title||a("defaultSession",{ns:"common"}),C=r.meta?.description||"",x=r.meta?.avatar||D,T=r.meta?.backgroundColor;return l?t.jsx("div",{className:z(p.listItem),onClick:()=>m(l),children:t.jsxs(u,{horizontal:!0,align:"center",gap:12,width:"100%",children:[t.jsx(le,{checked:n,onChange:()=>m(l),onClick:ae}),t.jsx(O,{avatar:x,background:T,size:40}),t.jsxs(u,{flex:1,gap:2,style:{minWidth:0},children:[t.jsx(h,{className:p.title,children:S}),C&&t.jsx(h,{ellipsis:!0,className:p.description,children:C})]})]})}):null}),g=Te(({css:r,cssVar:n})=>({container:r`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: ${n.borderRadius};
  `,description:r`
    font-size: 12px;
    line-height: 1.2;
    color: ${n.colorTextSecondary};
  `,hostCard:r`
    margin-block-start: ${n.paddingSM};
    margin-inline: ${n.paddingSM};
    padding: ${n.padding};
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: ${n.borderRadiusLG};

    background: ${n.colorFillTertiary};
  `,leftColumn:r`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding: 0;
    border-inline-end: 1px solid ${n.colorBorderSecondary};
  `,listHeader:r`
    padding: 0;
    color: ${n.colorTextDescription};
  `,listItem:r`
    cursor: pointer;

    position: relative;

    margin-block: 2px;
    padding: ${n.paddingSM} !important;
    border-radius: ${n.borderRadius};

    transition: all 0.2s ease;

    &:hover {
      background: ${n.colorFillTertiary};
    }
  `,memberDescription:r`
    display: block;
    padding-inline-end: 48px;
  `,modelSelectDisabled:r`
    pointer-events: none;
  `,rightColumn:r`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding: 0;
  `,title:r`
    font-size: 14px;
    font-weight: 500;
  `})),Ee=s.memo(({onCancel:r,onCreateFromTemplate:n,onCreateCustom:m,open:p,isCreatingFromTemplate:z})=>{const{t:a}=E(["chat","common"]),l=Pe(),S=We(),C=Le(e=>(e.sessions||[]).filter(o=>o.type===ke.Agent)),x=s.useMemo(()=>C.filter(e=>!e.config?.virtual),[C]),T=s.useMemo(()=>R(g.description,g.memberDescription),[R,g.description,g.memberDescription]),f=s.useMemo(()=>{if(S.length>0&&S[0].children.length>0){const e=S[0];return{model:e.children[0].id,provider:e.id}}return{model:void 0,provider:void 0}},[S]),[ce,U]=s.useState(""),[b,Y]=s.useState(""),[c,F]=s.useState(""),[v,w]=s.useState([]),[L,N]=s.useState({}),[M,H]=s.useState(!1),[G,q]=s.useState(f.model&&f.provider?f:{}),[de,J]=s.useState(!1),[ue,Q]=s.useState("templates"),j=s.useRef(null),me=z??!1,pe=s.useCallback(e=>{F(o=>{const i=o===e?"":e;return i!==o&&(N({}),H(!1)),i&&w([]),i})},[]),ge=s.useCallback(e=>{F(""),N({}),w(o=>o.includes(e)?o.filter(i=>i!==e):[...o,e])},[]),X=s.useCallback(e=>{w(o=>o.filter(i=>i!==e))},[]),_=()=>{F(""),w([]),U(""),Y(""),N({}),H(!1),q(f.model&&f.provider?f:{}),j.current&&clearTimeout(j.current)},he=s.useCallback(e=>{q(e)},[]),fe=s.useCallback((e,o,i)=>{N(d=>{const $=d[e]||[];if(i){const k=$.filter(A=>A!==o);return k.length===0?Ne(d,[e]):{...d,[e]:k}}return $.includes(o)?d:{...d,[e]:[...$,o]}})},[]),xe=s.useCallback(e=>{H(!e)},[]),Ce=s.useCallback(e=>{const o=e.target.value;U(o),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{Y(o)},300)},[]),Z=x.length;s.useEffect(()=>()=>{j.current&&clearTimeout(j.current)},[]),s.useEffect(()=>{p&&Q(Z>2?"agents":"templates")},[p,Z]),s.useEffect(()=>{w(e=>e.filter(o=>x.some(i=>i.config?.id===o)))},[x]);const ve=s.useCallback(e=>{if(!e)return;const o=Array.isArray(e)?e[0]:e;(o==="templates"||o==="agents")&&Q(o)},[]),V=s.useMemo(()=>{const e=b.trim().toLowerCase();return e?l.filter(o=>o.title.toLowerCase().includes(e)||o.description.toLowerCase().includes(e)?!0:o.members.some(i=>i!=null&&i.title.toLowerCase().includes(e))):l},[l,b]),ee=s.useMemo(()=>{const e=b.trim().toLowerCase();return e?x.filter(o=>{const i=o.meta?.title||"",d=o.meta?.description||"";return i.toLowerCase().includes(e)||d.toLowerCase().includes(e)}):x},[x,b]),P=s.useMemo(()=>{if(!c)return[];const e=l.find(i=>i.id===c);if(!e)return[];const o=new Set(L[c]||[]);return e.members.filter(i=>i!=null).map(i=>({avatar:i.avatar||D,backgroundColor:i.backgroundColor,description:i.systemRole,isRemoved:o.has(i.title),key:`${c}-${i.title}`,systemRole:i.systemRole,title:i.title}))},[c,L,l]),je=s.useMemo(()=>P.filter(e=>!e.isRemoved).length,[P]),te=s.useMemo(()=>v.map(e=>{const o=C.find(A=>A.config?.id===e);if(!o)return null;const i=o.meta?.title||a("defaultSession",{ns:"common"}),d=o.meta?.avatar||D,$=o.meta?.backgroundColor,k=o.meta?.description||"";return{actions:t.jsx(K,{checked:!0,size:"small",onChange:A=>{A||X(e)}}),avatar:t.jsx(O,{avatar:d,background:$,size:40}),description:k?t.jsx(I,{title:k,children:t.jsx(h,{className:T,ellipsis:{rows:1},children:k})}):null,key:e,showAction:!0,title:i}}).filter(e=>!!e),[v,C,a,X,T]),ye=s.useMemo(()=>{const e=G.model??f.model,o=G.provider??f.provider;if(!(!e||!o))return{model:e,provider:o}},[G,f]),oe=s.useCallback(async()=>{if(c)try{const e=l.find(d=>d.id===c),o=new Set(L[c]||[]),i=(e?.members||[]).filter(d=>d!=null&&!o.has(d.title)).map(d=>d.title);await n(c,i),_()}catch(e){console.error("Failed to create group from template:",e)}},[c,n,l,L]),se=s.useCallback(async()=>{if(v.length!==0)try{J(!0),await m(v),_(),r()}catch(e){console.error("Failed to create group with selected members:",e)}finally{J(!1)}},[v,m,r]),Se=s.useCallback(async()=>{if(c){await oe();return}await se()},[c,oe,se]),ie=()=>{_(),r()},be=c?je===0&&M:v.length===0,Me=c?me:de;return t.jsx(we,{open:p,title:a("groupWizard.title"),width:900,footer:t.jsxs(u,{horizontal:!0,gap:8,justify:"end",children:[t.jsx(re,{onClick:ie,children:a("cancel",{ns:"common"})}),t.jsx(re,{disabled:be,loading:Me,type:"primary",onClick:Se,children:a("groupWizard.createGroup")})]}),onCancel:ie,children:t.jsxs(u,{horizontal:!0,className:g.container,children:[t.jsxs(u,{className:g.leftColumn,flex:1,gap:12,children:[t.jsx($e,{allowClear:!0,placeholder:a("memberSelection.searchAgents"),style:{margin:`${y.paddingSM} ${y.paddingSM} 0 ${y.paddingSM}`},value:ce,variant:"filled",onChange:Ce}),t.jsx(u,{flex:1,style:{overflowY:"auto",padding:`0 ${y.paddingSM}`},children:t.jsx(ze,{accordion:!0,collapsible:!0,activeKey:ue,expandIconPlacement:"end",gap:12,size:"small",variant:"borderless",items:[{children:V.length===0?t.jsx(B,{descriptionProps:{fontSize:14},icon:W,style:{maxWidth:400},description:a(b?"groupWizard.noMatchingTemplates":"groupWizard.noTemplates")}):t.jsx(u,{gap:4,children:V.map(e=>t.jsx(Be,{cx:R,isSelected:c===e.id,styles:g,template:e,onToggle:pe},e.id))}),key:"templates",label:a("groupWizard.useTemplate")},{children:ee.length===0?t.jsx(B,{descriptionProps:{fontSize:14},icon:W,style:{maxWidth:400},description:b?a("noMatchingAgents",{ns:"chat"}):a("noAvailableAgents",{ns:"chat"})}):t.jsx(u,{gap:4,children:ee.map(e=>t.jsx(De,{agent:e,cx:R,isSelected:v.includes(e.config?.id||""),styles:g,onToggle:ge},e.id))}),key:"agents",label:a("groupWizard.existingMembers")}],styles:{header:{color:y.colorTextDescription,fontSize:y.fontSize,padding:0}},onChange:ve})})]}),t.jsx(u,{className:g.rightColumn,flex:1,children:t.jsxs(u,{flex:1,gap:16,style:{overflowY:"auto"},children:[t.jsxs(u,{horizontal:!0,align:"center",className:g.hostCard,gap:12,children:[t.jsxs(u,{flex:1,gap:2,children:[t.jsx(h,{style:{fontSize:14,fontWeight:500},type:M?"secondary":void 0,children:a("groupWizard.host.title")}),t.jsx(h,{style:{color:"#999",fontSize:12},type:M?"secondary":void 0,children:a("groupWizard.host.description")})]}),t.jsxs(u,{horizontal:!0,align:"center",gap:12,children:[t.jsx("div",{className:R(M&&g.modelSelectDisabled),style:{opacity:M?.6:1},children:t.jsx(Re,{requiredAbilities:["functionCall"],value:ye,onChange:he})}),t.jsx(I,{title:a("groupWizard.host.tooltip"),children:t.jsx(K,{checked:!M,size:"small",onChange:e=>xe(e)})})]})]}),t.jsx(u,{style:{padding:`0 ${y.paddingSM}`},children:c?P.length>0?t.jsx(ne,{items:P.map(e=>({actions:t.jsx(K,{checked:!e.isRemoved,size:"small",onChange:o=>fe(c,e.title,o)}),avatar:t.jsx(O,{avatar:e.avatar,background:e.backgroundColor,size:40}),description:e.systemRole?t.jsx(I,{title:e.systemRole,children:t.jsx(h,{className:T,ellipsis:{rows:1},type:e.isRemoved?"secondary":void 0,children:e.systemRole})}):null,key:e.key,showAction:!0,title:t.jsx(h,{type:e.isRemoved?"secondary":void 0,children:e.title})}))}):t.jsx(B,{description:a("groupWizard.noTemplateMembers"),descriptionProps:{fontSize:14},icon:W,style:{maxWidth:400}}):te.length>0?t.jsx(ne,{items:te}):t.jsx(B,{description:a("memberSelection.noSelectedAgents"),descriptionProps:{fontSize:14},icon:W,style:{maxWidth:400}})})]})})]})})}),et=Object.freeze(Object.defineProperty({__proto__:null,ChatGroupWizard:Ee},Symbol.toStringTag,{value:"Module"}));export{Ee as C,et as i,Pe as u};
