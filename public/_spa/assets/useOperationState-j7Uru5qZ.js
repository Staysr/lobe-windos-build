import{m as J,q as de,A as Be,B as _e,F as ze,G as Ne,H as Pe,I as $e,J as Oe,K as De,O as Ue,Q as Ge,T as Qe,V as Ke,X as We,Y as qe,Z as Je,_ as Ve,$ as Ye,a0 as He,u as b,a1 as Ze,a2 as Xe}from"./index-x_gVjQRN.js";import{v as et}from"./index-DUJDMzkh.js";import{j as e}from"../vendor/vendor-motion-BIhyHZ0p.js";import{au as tt,dO as F,f as X,g as D,F as h,Z as z,B as M,gw as nt,gx as ue,dN as st,gy as ot,gz as at,v as ee,ax as rt,A as W,I as pe,E as me,gA as it}from"./index-Rjxk4g_I.js";import{A as ge}from"./Alert-CygUxl_B.js";import{R as lt,r as a}from"../vendor/vendor-emotion-DdM-9MtU.js";import{b as ct,C as dt}from"./index-Cwvu3oVy.js";import{ag as q,ah as ut,ai as pt,aj as mt,ak as gt,al as ft,am as fe,z as he,an as ht,ao as xt,n as xe,u as E,A as ae}from"./index-BLPbWvKS.js";import{o as O}from"./index-B-vgKYkf.js";import{u as K}from"./store-CVDcCKzH.js";import{W as yt}from"./index-CVpEevom.js";import{I as V}from"./Input-D93QuJ5O.js";import{T as Y}from"./TextArea-Oy32KVXb.js";import{S as re}from"./Select-BLtSmkrU.js";import{bp as jt,bE as vt,b4 as Ct,aH as It,a_ as St,dN as bt,dO as kt,P as wt,br as Tt}from"../vendor/vendor-icons-B5XxavR9.js";import"../vendor/vendor-es-toolkit-DEdCfXFH.js";import"./providerConfig-DjTKVWb5.js";import{A as H}from"./index-_dqkZJF-.js";import{D as Mt}from"./DropdownMenu-N2rBrvZu.js";import{P as At}from"./Popover-DeOIjP3O.js";import{S as ie}from"./index-Co4R0xG7.js";import{I as Ft}from"./index-D2z-csWU.js";import{F as N}from"./index-DiS6uszb.js";import{f as P}from"./selectors-DqoL9APm.js";function Lt(t){const n=lt.useRef(void 0);return o=>{const l=t(o);return tt(n.current,l)?n.current:n.current=l}}const Et=t=>t.editor,Rt=t=>t.inputMessage,Bt=t=>t.inputMessage.trim().length>0,_t={editor:Et,hasInput:Bt,inputMessage:Rt},Sn={...Be,...de,..._t,...J,...et},zt={[q.clearTodos]:Ne,[q.createPlan]:ze,[q.createTodos]:_e},Nt={[F.editLocalFile]:qe,[F.globLocalFiles]:We,[F.grepContent]:Ke,[F.listLocalFiles]:Qe,[F.moveLocalFiles]:Ge,[F.readLocalFile]:Ue,[F.renameLocalFile]:De,[F.runCommand]:Oe,[F.searchLocalFiles]:$e,[F.writeLocalFile]:Pe},Pt={},$t={},le=X(({css:t,cssVar:n})=>({escapeLink:t`
    cursor: pointer;

    display: inline-flex;
    gap: 4px;
    align-items: center;

    padding-block: 4px;
    padding-inline: 0;

    font-size: 13px;

    transition: color ${n.motionDurationMid};

    &:hover {
      color: ${n.colorPrimary} !important;
    }
  `})),Ot=a.memo(({field:t,value:n,onChange:o,onPressEnter:l})=>{switch(t.kind){case"textarea":return e.jsx(Y,{autoSize:{maxRows:6,minRows:2},placeholder:t.placeholder,value:n,onChange:s=>o(t.key,s.target.value)});case"select":return e.jsx(re,{options:t.options?.map(s=>({label:s.label,value:s.value})),placeholder:t.placeholder,style:{width:"100%"},value:n,onChange:s=>o(t.key,s)});case"multiselect":return e.jsx(re,{mode:"multiple",options:t.options?.map(s=>({label:s.label,value:s.value})),placeholder:t.placeholder,style:{width:"100%"},value:n,onChange:s=>o(t.key,s)});default:return e.jsx(V,{placeholder:t.placeholder,value:n,onChange:s=>o(t.key,s.target.value),onPressEnter:l})}}),ye=a.memo(({args:t,interactionMode:n,onInteractionAction:o})=>{const{t:l}=D("ui"),{question:s}=t,C=n==="custom",i={};if(s.fields)for(const r of s.fields)r.value!==void 0&&(i[r.key]=r.value);const[u,I]=a.useState(i),[k,c]=a.useState(!1),[g,p]=a.useState(!1),[x,m]=a.useState(""),y=a.useRef(null),j=a.useRef(null),S=a.useCallback((r,d)=>{I(T=>({...T,[r]:d}))},[]),f=a.useCallback(async()=>{if(o){c(!0);try{g?await o({payload:{__freeform__:x},type:"submit"}):await o({payload:u,type:"submit"})}catch(r){console.error(r)}finally{c(!1)}}},[g,x,u,o]),A=a.useCallback(async()=>{o&&await o({type:"skip"})},[o]),w=a.useCallback(()=>{p(r=>!r)},[]);a.useEffect(()=>{const r=setTimeout(()=>{g?y.current?.querySelector("textarea")?.focus():j.current?.querySelector("input, textarea")?.focus()},0);return()=>clearTimeout(r)},[g]);const L=!s.fields||s.fields.length===0,R=g?!x.trim():L?!u.__freeform__:s.fields?.some(r=>r.required&&!u[r.key])??!1;return C?e.jsxs(h,{gap:12,children:[e.jsx(z,{style:{fontWeight:500},children:s.prompt}),s.description&&e.jsx(z,{style:{fontSize:13},type:"secondary",children:s.description}),L?e.jsx(Y,{autoSize:{maxRows:6,minRows:2},placeholder:s.description||"",value:u.__freeform__,onChange:r=>S("__freeform__",r.target.value)}):e.jsxs(e.Fragment,{children:[!g&&e.jsx(h,{gap:8,ref:j,children:s.fields.map(r=>e.jsxs(h,{gap:4,children:[e.jsxs(z,{style:{fontSize:13},children:[r.label,r.required&&e.jsx("span",{style:{color:"red"},children:" *"})]}),e.jsx(Ot,{field:r,value:u[r.key],onChange:S,onPressEnter:()=>{R||f()}})]},r.key))}),g?e.jsxs(h,{gap:8,ref:y,children:[e.jsxs(z,{className:le.escapeLink,type:"secondary",onClick:w,children:[e.jsx(jt,{size:14})," ",l("form.otherBack")]}),e.jsx(Y,{autoSize:{maxRows:6,minRows:2},value:x,onChange:r=>m(r.target.value)})]}):e.jsxs(z,{className:le.escapeLink,type:"secondary",onClick:w,children:[l("form.other")," ",e.jsx(vt,{size:14})]})]}),e.jsxs(h,{horizontal:!0,gap:8,justify:"flex-end",children:[e.jsx(M,{onClick:A,children:l("form.skip")}),e.jsx(M,{disabled:R,loading:k,type:"primary",onClick:f,children:l("form.submit")})]})]}):e.jsxs(h,{gap:8,children:[e.jsx(z,{children:s.prompt}),s.fields&&s.fields.length>0&&e.jsx("ul",{style:{margin:0,paddingLeft:20},children:s.fields.map(r=>e.jsxs("li",{children:[r.label,r.required&&" *"]},r.key))})]})});ye.displayName="AskUserQuestionIntervention";const Dt={[nt.askUserQuestion]:ye},Ut={[at.identifier]:He,[ft.identifier]:Ye,[ot.identifier]:Ve,[gt.identifier]:zt,[st]:Nt,[mt.identifier]:Je,[pt.identifier]:Pt,[ut.identifier]:$t,[ue]:Dt},Gt=(t,n)=>{if(!t||!n)return;const o=Ut[t];if(o)return o[n]},je=a.memo(({approvalMode:t,messageId:n,identifier:o,apiName:l,onBeforeApprove:s,assistantGroupId:C})=>{const{t:i}=D(["chat","common"]),[u,I]=a.useState(""),[k,c]=a.useState(!1),[g,p]=a.useState(!1),[x,m]=a.useState(!1),y=n.startsWith("tmp_"),[j,S,f]=b(r=>[r.approveToolCall,r.rejectToolCall,r.rejectAndContinueToolCall]),A=ee(r=>r.addToolToAllowList),w=async r=>{m(!0);try{if(s&&await s(),await j(n,C??""),r){const d=`${o}/${l}`;await A(d)}}finally{m(!1)}},L=async r=>{p(!0),await S(n,r),p(!1),c(!1),I("")},R=async r=>{p(!0),await f(n,r),p(!1),c(!1),I("")};return e.jsxs(h,{horizontal:!0,gap:8,children:[e.jsx(At,{open:k,placement:"bottomRight",trigger:"click",content:e.jsxs(h,{gap:12,style:{width:400},children:[e.jsxs(h,{horizontal:!0,align:"center",justify:"space-between",children:[e.jsx("div",{children:i("tool.intervention.rejectTitle")}),e.jsxs(ie,{children:[e.jsx(M,{color:"default",loading:g,size:"small",variant:"filled",onClick:()=>L(u),children:i("tool.intervention.rejectOnly")}),e.jsx(M,{loading:g,size:"small",type:"primary",onClick:()=>R(u),children:i("tool.intervention.rejectAndContinue")})]})]}),e.jsx(Ft.TextArea,{autoFocus:!0,placeholder:i("tool.intervention.rejectReasonPlaceholder"),rows:3,value:u,variant:"filled",onChange:r=>I(r.target.value)})]}),onOpenChange:r=>{g||c(r)},children:e.jsx(M,{color:"default",disabled:y,size:"small",variant:"filled",children:i("tool.intervention.reject")})}),t==="allow-list"?e.jsxs(ie.Compact,{children:[e.jsx(M,{disabled:y,loading:x,size:"small",type:"primary",onClick:()=>w(!0),children:i("tool.intervention.approveAndRemember")}),e.jsx(Mt,{items:[{disabled:x||y,key:"once",label:i("tool.intervention.approveOnce"),onClick:()=>w(!1)}],children:e.jsx(M,{disabled:x||y,icon:Ct,size:"small",type:"primary"})})]}):e.jsx(M,{disabled:y,loading:x,size:"small",type:"primary",onClick:()=>w(),children:i("tool.intervention.approve")})]})}),_=X(({css:t,cssVar:n})=>({form:t`
    position: relative;

    width: 100%;
    min-width: 600px;
    padding: 8px;
    border-radius: ${n.borderRadiusLG};
  `,formItem:t`
    margin-block-end: 4px !important;
  `,input:t`
    font-family: ${n.fontFamilyCode};
    font-size: 12px;
  `,row:t`
    position: relative;
  `,title:t`
    margin-block-end: 4px;
    color: ${n.colorTextTertiary};
  `})),ce=t=>Object.entries(t).map(([n,o],l)=>({id:`${n}-${l}`,key:n,value:typeof o=="string"?o:JSON.stringify(o)})).filter(n=>n.key),Qt=t=>{const n={};return t.forEach(o=>{if(o.key)try{n[o.key]=JSON.parse(o.value||'""')}catch{n[o.key]=o.value||""}}),n},ve=a.memo(({initialValue:t={},onFinish:n,onCancel:o})=>{const{t:l}=D(["tool","common"]),[s]=N.useForm(),{message:C}=rt.useApp(),i=a.useRef(null);a.useEffect(()=>{s.setFieldsValue({items:ce(t)})},[t,s]);const[u,I]=a.useState(!1),k=async()=>{I(!0);try{await s.validateFields();const p=s.getFieldsValue(),x=Qt(p.items||[]);await n?.(x)}catch(p){console.error("Validation Failed:",p),C.error(l("updateArgs.formValidationFailed")||"Please check the form for errors.")}I(!1)},c=()=>{o?.()},g=(p,x,m)=>x?.key&&m.map(j=>j?.key).filter(Boolean).filter(j=>j===x.key).length>1?Promise.reject(new Error(l("updateArgs.duplicateKeyError"))):Promise.resolve();return e.jsxs(N,{autoComplete:"off",className:_.form,form:s,initialValues:{items:ce(t)},ref:i,children:[e.jsxs(h,{horizontal:!0,className:_.title,gap:8,children:[e.jsx(h,{flex:1,children:"key"}),e.jsx(h,{flex:4,children:"value"})]}),e.jsx(N.List,{name:"items",children:(p,{add:x,remove:m})=>e.jsxs(h,{width:"100%",children:[p.map(({key:y,name:j,...S},f)=>e.jsxs(h,{horizontal:!0,align:"center",className:_.row,gap:8,width:"100%",children:[e.jsx(N.Item,{...S,className:_.formItem,name:[j,"key"],style:{flex:1},validateTrigger:["onChange","onBlur"],rules:[{message:l("updateArgs.keyRequired"),required:!0},{validator:A=>g(A,s.getFieldValue(["items",f]),s.getFieldValue("items"))}],children:e.jsx(V,{allowClear:!0,className:_.input,placeholder:l("updateArgs.form.key"),variant:"filled"})}),e.jsx(N.Item,{...S,className:_.formItem,name:[j,"value"],style:{flex:4},children:e.jsx(V,{allowClear:!0,className:_.input,placeholder:l("updateArgs.form.value"),variant:"filled"})}),e.jsx(W,{icon:It,size:"small",title:l("delete",{ns:"common"}),style:{marginBottom:6},onClick:()=>m(j)})]},y)),e.jsx(N.Item,{style:{marginBottom:0,marginTop:8},children:e.jsxs(h,{horizontal:!0,gap:8,justify:"space-between",children:[e.jsx(M,{color:"default",icon:e.jsx(pe,{icon:St}),size:"small",variant:"filled",onClick:()=>x({id:`new-${Date.now()}`,key:"",value:""}),children:l("updateArgs.form.add")}),e.jsxs(h,{horizontal:!0,gap:8,children:[e.jsx(M,{size:"small",onClick:c,children:l("cancel",{ns:"common"})}),e.jsx(M,{loading:u,size:"small",type:"primary",onClick:k,children:l("save",{ns:"common"})})]})]})})]})})]})}),Kt=a.memo(({requestArgs:t,id:n,identifier:o,apiName:l,toolCallId:s,assistantGroupId:C,actionsPortalTarget:i})=>{const{t:u}=D("chat"),I=ee(fe.approvalMode),[k,c]=a.useState(!1),g=b(m=>m.updatePluginArguments),p=a.useCallback(()=>{c(!1)},[]),x=a.useCallback(async m=>{if(s)try{JSON.stringify(m,null,2)!==t&&await g(s,m,!0),c(!1)}catch(y){console.error("Error stringifying arguments:",y)}},[t,s,g]);return k?e.jsx(a.Suspense,{fallback:e.jsx(H,{arguments:t}),children:e.jsx(ve,{initialValue:he(t||""),onCancel:p,onFinish:x})}):e.jsxs(h,{gap:12,children:[e.jsx(H,{arguments:t,actions:e.jsx(W,{icon:bt,size:"small",title:u("edit",{ns:"common"}),onClick:()=>{c(!0)}})}),(()=>{const m=e.jsx(h,{horizontal:!0,justify:"flex-end",children:e.jsx(je,{apiName:l,approvalMode:I,assistantGroupId:C,identifier:o,messageId:n,toolCallId:s})});return i?me.createPortal(m,i):m})()]})}),Z=a.memo(({args:t})=>{const{t:n}=D("tool"),o=a.useMemo(()=>ht.checkSecurityBlacklist(xt,t),[t]);return o.blocked?e.jsx(ge,{showIcon:!0,title:n("localFiles.securityBlacklist.warning"),type:"error",variant:"borderless",description:e.jsx(h,{gap:4,style:{fontSize:12},children:e.jsx("div",{children:o.reason?n(o.reason):void 0})})}):null});Z.displayName="SecurityBlacklistWarning";const Wt=a.memo(({requestArgs:t,id:n,identifier:o,apiName:l,toolCallId:s,assistantGroupId:C,actionsPortalTarget:i})=>{const u=ee(fe.approvalMode),[I,k]=a.useState(!1),c=b(d=>d.updatePluginArguments),g=a.useRef(new Map),p=a.useCallback((d,T)=>(g.current.set(d,T),()=>{g.current.delete(d)}),[]),x=a.useCallback(async()=>{const d=Array.from(g.current.values());await Promise.all(d.map(T=>T()))},[]),m=a.useCallback(()=>{k(!1)},[]),y=a.useCallback(async d=>{if(s)try{JSON.stringify(d,null,2)!==t&&await c(s,d,!0),k(!1)}catch(T){console.error("Error stringifying arguments:",T)}},[t,s,c]),j=a.useCallback(async d=>{s&&await c(s,d,!0)},[s,c]),S=a.useMemo(()=>he(t||"")??{},[t]),f=o===ue,A=b(d=>d.submitToolInteraction),w=b(d=>d.skipToolInteraction),L=b(d=>d.cancelToolInteraction),R=a.useCallback(async d=>{switch(d.type){case"submit":{await A(n,d.payload);break}case"skip":{await w(n,d.reason);break}case"cancel":{await L(n);break}}},[n,A,w,L]),r=Gt(o,l);if(r){if(I)return e.jsx(a.Suspense,{fallback:e.jsx(H,{arguments:t}),children:e.jsx(ve,{initialValue:S,onCancel:m,onFinish:y})});if(f)return e.jsx(h,{gap:12,children:e.jsx(r,{apiName:l,args:S,identifier:o,interactionMode:"custom",messageId:n,registerBeforeApprove:p,onArgsChange:j,onInteractionAction:R})});const d=e.jsx(h,{horizontal:!0,justify:"flex-end",children:e.jsx(je,{apiName:l,approvalMode:u,assistantGroupId:C,identifier:o,messageId:n,toolCallId:s,onBeforeApprove:x})});return e.jsxs(h,{gap:12,children:[e.jsx(Z,{args:S}),e.jsx(r,{apiName:l,args:S,identifier:o,messageId:n,registerBeforeApprove:p,onArgsChange:j}),i?me.createPortal(d,i):d]})}return e.jsxs(h,{gap:12,children:[e.jsx(Z,{args:S}),e.jsx(Kt,{actionsPortalTarget:i,apiName:l,assistantGroupId:C,id:n,identifier:o,requestArgs:t,toolCallId:s})]})}),te=it(({css:t,token:n})=>({actions:t`
    padding-block: 8px;
    padding-inline: 16px;
    border-block-start: 1px solid ${n.colorBorderSecondary};
  `,container:t`
    overflow: hidden;
    display: flex;
    flex-direction: column;

    max-height: 50vh;
    margin-block-end: 12px;
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: 10px;

    background: ${n.colorBgContainer};
  `,content:t`
    overflow-y: auto;
    flex: 1;

    min-height: 0;
    padding-block: 12px;
    padding-inline: 16px;
  `,tab:t`
    cursor: pointer;

    padding-block: 6px;
    padding-inline: 14px;
    border-block-end: 2px solid transparent;

    font-size: 12px;
    color: ${n.colorTextSecondary};
    white-space: nowrap;

    transition: all 0.2s;

    &:hover {
      color: ${n.colorText};
    }
  `,tabActive:t`
    border-block-end-color: ${n.colorPrimary};
    color: ${n.colorPrimary};
    background: ${n.colorPrimaryBg};
  `,tabBar:t`
    overflow-x: auto;
    display: flex;
    align-items: center;
    border-block-end: 1px solid ${n.colorBorderSecondary};
  `,tabCounter:t`
    margin-inline-start: auto;
    padding-block: 6px;
    padding-inline: 14px;

    font-size: 11px;
    color: ${n.colorTextTertiary};
    white-space: nowrap;
  `})),qt=a.memo(({intervention:t})=>{const{styles:n}=te(),[o,l]=a.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:n.content,children:e.jsx(Wt,{actionsPortalTarget:o,apiName:t.apiName,assistantGroupId:t.assistantGroupId,id:t.toolMessageId,identifier:t.identifier,requestArgs:t.requestArgs,toolCallId:t.toolCallId})}),e.jsx("div",{className:n.actions,ref:l})]})}),Jt=a.memo(({interventions:t,activeIndex:n,onTabChange:o})=>{const{cx:l,styles:s}=te();return e.jsxs("div",{className:s.tabBar,children:[t.map((C,i)=>e.jsxs("div",{className:l(s.tab,i===n&&s.tabActive),onClick:()=>o(i),children:["🔧 ",C.apiName]},C.toolCallId)),e.jsxs("div",{className:s.tabCounter,children:[n+1," / ",t.length]})]})}),Vt=a.memo(({interventions:t})=>{const{styles:n}=te(),[o,l]=a.useState(null),s=a.useMemo(()=>{if(o){const u=t.findIndex(I=>I.toolCallId===o);if(u>=0)return u}return 0},[t,o]),C=a.useCallback(u=>{l(t[u]?.toolCallId??null)},[t]),i=t[s];return i?e.jsxs("div",{className:n.container,children:[t.length>1&&e.jsx(Jt,{activeIndex:s,interventions:t,onTabChange:C}),e.jsx(qt,{intervention:i},i.toolCallId)]}):null}),$=X(({css:t,cssVar:n})=>({container:t`
    border: 1px solid ${n.colorBorderSecondary};
    border-block-end: none;
    border-radius: 12px 12px 0 0;
    background: ${n.colorBgContainer};
  `,icon:t`
    flex-shrink: 0;
    color: ${n.colorTextDescription};
  `,item:t`
    padding-block: 6px 4px;
    padding-inline: 12px 8px;
  `,itemDivider:t`
    border-block-start: 1px solid ${n.colorBorderSecondary};
  `,text:t`
    overflow: hidden;

    font-size: 13px;
    line-height: 1.4;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),Ce=a.memo(()=>{const t=b(i=>i.context),n=a.useMemo(()=>xe({agentId:t.agentId,groupId:t.groupId,topicId:t.topicId}),[t.agentId,t.groupId,t.topicId]),o=E(i=>O.getQueuedMessages(t)(i)),l=E(i=>i.removeQueuedMessage),s=b(i=>i.editor),C=a.useCallback((i,u)=>{l(n,i),s?.setDocument("markdown",u),s?.focus()},[n,s,l]);return o.length===0?null:e.jsx(h,{className:$.container,gap:0,children:o.map((i,u)=>e.jsxs(h,{horizontal:!0,align:"center",className:u>0?`${$.item} ${$.itemDivider}`:$.item,gap:8,children:[e.jsx(pe,{className:$.icon,icon:kt,size:14}),e.jsx(h,{className:$.text,flex:1,children:i.content}),e.jsx(W,{icon:wt,size:"small",onClick:()=>C(i.id,i.content)}),e.jsx(W,{icon:Tt,size:"small",onClick:()=>l(n,i.id)})]},i.id))})});Ce.displayName="QueueTray";const Yt=a.memo(({actionBarStyle:t,allowExpand:n,leftActions:o=[],leftContent:l,rightActions:s=[],children:C,extraActionItems:i,mentionItems:u,sendMenu:I,sendAreaPrefix:k,sendButtonProps:c,showRuntimeConfig:g=!0,onEditorReady:p,skipScrollMarginWithList:x})=>{const{t:m}=D("chat"),y=b(v=>v.context),[j,S,f,A]=b(v=>[v.context.agentId,v.inputMessage,v.sendMessage,v.stopGenerating]),w=b(v=>v.updateInputMessage),L=b(v=>v.setEditor),R=b(J.isInputLoading),r=b(de.pendingInterventions,(v,U)=>v.length!==U.length?!1:v.every((G,B)=>G.toolCallId===U[B].toolCallId&&G.requestArgs===U[B].requestArgs)),d=r.length>0,T=b(J.sendMessageError),Ie=E(v=>v.clearSendMessageError),Se=K(P.chatUploadFileList),be=K(P.chatContextSelections),ke=K(P.isUploadingFiles),we=E(v=>O.queuedMessageCount(y)(v)>0),Te=!S.trim()&&Se.length===0&&be.length===0||ke,Me=a.useCallback(async({clearContent:v,getMarkdownContent:U,getEditorData:G})=>{const B=K.getState(),ne=P.chatUploadFileList(B),Le=P.isUploadingFiles(B),se=P.chatContextSelections(B);if(Le)return;const oe=U();if(!oe.trim()&&ne.length===0&&se.length===0)return;const Ee=G();v(),B.clearChatUploadFileList(),B.clearChatContextSelections();const Re=se.map(Q=>({content:Q.preview||"",id:Q.id,pageId:Q.pageId||"",xml:Q.content}));await f({editorData:Ee,files:ne,message:oe,pageSelections:Re})},[f]),Ae={disabled:Te,generating:R,onStop:A,...c},Fe=e.jsx(yt,{style:x?{marginTop:-12,position:"relative"}:void 0,children:d?e.jsx(Vt,{interventions:r}):e.jsxs(e.Fragment,{children:[T&&e.jsx(h,{paddingBlock:"0 6px",paddingInline:12,children:e.jsx(ge,{closable:!0,title:m("input.errorMsg",{errorMsg:T}),type:"secondary",onClose:Ie})}),we&&e.jsx(h,{paddingInline:12,style:{position:"absolute",zIndex:10,bottom:"100%",left:12,right:12},children:e.jsx(Ce,{})}),e.jsx(ct,{actionBarStyle:t,borderRadius:12,extraActionItems:i,leftContent:l,sendAreaPrefix:k,showRuntimeConfig:g})]})});return e.jsx(dt,{agentId:j,allowExpand:n,leftActions:o,mentionItems:u,rightActions:s,sendButtonProps:Ae,sendMenu:I,slashPlacement:"top",chatInputEditorRef:v=>{v&&(L(v),p?.(v))},onMarkdownContentChange:w,onSend:Me,children:C??Fe})});Yt.displayName="ConversationChatInput";const bn=t=>{const n=xe(t),{operations:o,operationsByContext:l,operationsByMessage:s,toolCallingStreamIds:C}=E(Lt(c=>({operations:c.operations,operationsByContext:c.operationsByContext,operationsByMessage:c.operationsByMessage,toolCallingStreamIds:c.toolCallingStreamIds}))),i=E(c=>O.isAgentRuntimeRunningByContext(t)(c)),u=E(c=>O.isInputLoadingByContext(t)(c)),I=a.useMemo(()=>{const c=l[n]||[];for(const g of[...c].reverse()){const p=o[g];if(p&&p.type==="sendMessage"&&p.metadata.inputSendErrorMsg)return p.metadata.inputSendErrorMsg}},[l,n,o]);return a.useMemo(()=>({getMessageOperationState:c=>{const g=E.getState(),p=s[c]||[];if(p.length===0)return Xe;const x=p.map(f=>o[f]).filter(Boolean),m=x.filter(f=>f.status==="running"),y=m.some(f=>ae.includes(f.type)),j=[...x].reverse().find(f=>ae.includes(f.type)),S=!y&&!!j&&j.status==="cancelled";return{isContinuing:m.some(f=>f.type==="continue"),isCreating:m.some(f=>f.type==="sendMessage"||f.type==="createAssistantMessage"),isGenerating:y,isInReasoning:m.some(f=>f.type==="reasoning"),isInterrupted:S,isProcessing:O.isMessageProcessing(c)(g),isRegenerating:m.some(f=>f.type==="regenerate")}},getToolOperationState:(c,g,p)=>{const x=E.getState(),m=C[c],y=m?m[g]??!1:!1,j=O.isMessageInToolCalling(c)(x);return!y&&!j?Ze:{isInvoking:j,isStreaming:y}},isAIGenerating:i,isInputLoading:u,sendMessageError:I}),[o,s,C,i,u,I])};export{Yt as C,Sn as c,bn as u};
