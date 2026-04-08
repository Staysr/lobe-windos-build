import{o as q,t as ne,F as $e,G as Ne,H as _e,I as Oe,J as De,K as Ue,O as Ge,Q as Qe,T as Ke,V as We,X as He,Y as Je,Z as Ve,_ as qe,$ as Ze,a0 as Ye,a1 as Xe,a2 as et,u as k,a3 as tt,n as nt,a4 as st,a5 as ot}from"./index-4zFKohhS.js";import{v as at}from"./index-BCDUqS66.js";import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{aP as rt,g1 as R,jp as J,j as H,k as D,F as m,a8 as P,bZ as Z,B as F,aw as Y,jq as it,jr as he,js as lt,jt as ct,ju as dt,g0 as ut,jv as pt,jw as gt,jx as mt,jy as ht,U as se,cj as xt,aZ as de,au as ft,cs as yt,aT as jt,W,I as oe,jz as xe,bx as vt,fp as Ct,eD as bt,g2 as X,Z as fe,jA as St,jB as kt,iH as It,dC as ye,a as B,jC as O,a5 as K,jD as ue}from"./index-BBAuCJqA.js";import{A as je}from"./Alert-BwmQeg13.js";import{R as wt,r}from"../vendor/vendor-emotion-D2wYcXAj.js";import{b as Tt,C as Mt}from"./index-D_GHPkbr.js";import{W as At}from"./index-BIzUCJC6.js";import{S as pe}from"./Select-Bx4n9Xfj.js";import{bo as Ft,bC as Lt,b3 as ve,aH as Rt,aZ as Bt,R as Et,dM as zt,dN as Pt,P as $t,bq as Nt}from"../vendor/vendor-icons-C6hg4LnF.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"./providerConfig-DLbrlvJC.js";import{A as ee}from"./index-KlU98iWa.js";import{F as $}from"./index-DwHjYE4k.js";import{f as N}from"./selectors-Bakn_kOo.js";function _t(t){const n=wt.useRef(void 0);return o=>{const i=t(o);return rt(n.current,i)?n.current:n.current=i}}const Ot=t=>t.editor,Dt=t=>t.inputMessage,Ut=t=>t.inputMessage.trim().length>0,Gt={editor:Ot,hasInput:Ut,inputMessage:Dt},Sn={...$e,...ne,...Gt,...q,...at},Qt={[R.editLocalFile]:He,[R.globLocalFiles]:We,[R.grepContent]:Ke,[R.listLocalFiles]:Qe,[R.moveLocalFiles]:Ge,[R.readLocalFile]:Ue,[R.renameLocalFile]:De,[R.runCommand]:Oe,[R.searchLocalFiles]:_e,[R.writeLocalFile]:Ne},Kt={[J.clearTodos]:qe,[J.createPlan]:Ve,[J.createTodos]:Je},Wt={},Ht={},ge=H(({css:t,cssVar:n})=>({escapeLink:t`
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
  `})),Jt=r.memo(({field:t,value:n,onChange:o,onPressEnter:i})=>{switch(t.kind){case"textarea":return e.jsx(Z,{autoSize:{maxRows:6,minRows:2},placeholder:t.placeholder,value:n,onChange:s=>o(t.key,s.target.value)});case"select":return e.jsx(pe,{options:t.options?.map(s=>({label:s.label,value:s.value})),placeholder:t.placeholder,style:{width:"100%"},value:n,onChange:s=>o(t.key,s)});case"multiselect":return e.jsx(pe,{mode:"multiple",options:t.options?.map(s=>({label:s.label,value:s.value})),placeholder:t.placeholder,style:{width:"100%"},value:n,onChange:s=>o(t.key,s)});default:return e.jsx(Y,{placeholder:t.placeholder,value:n,onChange:s=>o(t.key,s.target.value),onPressEnter:i})}}),Ce=r.memo(({args:t,interactionMode:n,onInteractionAction:o})=>{const{t:i}=D("ui"),{question:s}=t,C=n==="custom",l={};if(s.fields)for(const a of s.fields)a.value!==void 0&&(l[a.key]=a.value);const[u,b]=r.useState(l),[w,c]=r.useState(!1),[p,h]=r.useState(!1),[x,f]=r.useState(""),j=r.useRef(null),y=r.useRef(null),S=r.useCallback((a,d)=>{b(L=>({...L,[a]:d}))},[]),g=r.useCallback(async()=>{if(o){c(!0);try{p?await o({payload:{__freeform__:x},type:"submit"}):await o({payload:u,type:"submit"})}catch(a){console.error(a)}finally{c(!1)}}},[p,x,u,o]),I=r.useCallback(async()=>{o&&await o({type:"skip"})},[o]),T=r.useCallback(()=>{h(a=>!a)},[]);r.useEffect(()=>{const a=setTimeout(()=>{p?j.current?.querySelector("textarea")?.focus():y.current?.querySelector("input, textarea")?.focus()},0);return()=>clearTimeout(a)},[p]);const M=!s.fields||s.fields.length===0,A=p?!x.trim():M?!u.__freeform__:s.fields?.some(a=>a.required&&!u[a.key])??!1;return C?e.jsxs(m,{gap:12,children:[e.jsx(P,{style:{fontWeight:500},children:s.prompt}),s.description&&e.jsx(P,{style:{fontSize:13},type:"secondary",children:s.description}),M?e.jsx(Z,{autoSize:{maxRows:6,minRows:2},placeholder:s.description||"",value:u.__freeform__,onChange:a=>S("__freeform__",a.target.value)}):e.jsxs(e.Fragment,{children:[!p&&e.jsx(m,{gap:8,ref:y,children:s.fields.map(a=>e.jsxs(m,{gap:4,children:[e.jsxs(P,{style:{fontSize:13},children:[a.label,a.required&&e.jsx("span",{style:{color:"red"},children:" *"})]}),e.jsx(Jt,{field:a,value:u[a.key],onChange:S,onPressEnter:()=>{A||g()}})]},a.key))}),p?e.jsxs(m,{gap:8,ref:j,children:[e.jsxs(P,{className:ge.escapeLink,type:"secondary",onClick:T,children:[e.jsx(Ft,{size:14})," ",i("form.otherBack")]}),e.jsx(Z,{autoSize:{maxRows:6,minRows:2},value:x,onChange:a=>f(a.target.value)})]}):e.jsxs(P,{className:ge.escapeLink,type:"secondary",onClick:T,children:[i("form.other")," ",e.jsx(Lt,{size:14})]})]}),e.jsxs(m,{horizontal:!0,gap:8,justify:"flex-end",children:[e.jsx(F,{onClick:I,children:i("form.skip")}),e.jsx(F,{disabled:A,loading:w,type:"primary",onClick:g,children:i("form.submit")})]})]}):e.jsxs(m,{gap:8,children:[e.jsx(P,{children:s.prompt}),s.fields&&s.fields.length>0&&e.jsx("ul",{style:{margin:0,paddingLeft:20},children:s.fields.map(a=>e.jsxs("li",{children:[a.label,a.required&&" *"]},a.key))})]})});Ce.displayName="AskUserQuestionIntervention";const Vt={[it.askUserQuestion]:Ce},qt={[ht.identifier]:et,[mt.identifier]:Xe,[gt.identifier]:Ye,[pt.identifier]:Kt,[ut]:Qt,[dt.identifier]:Ze,[ct.identifier]:Wt,[lt.identifier]:Ht,[he]:Vt},Zt=(t,n)=>{if(!t||!n)return;const o=qt[t];if(o)return o[n]},be=r.memo(({approvalMode:t,messageId:n,identifier:o,apiName:i,onBeforeApprove:s,assistantGroupId:C})=>{const{t:l}=D(["chat","common"]),[u,b]=r.useState(""),[w,c]=r.useState(!1),[p,h]=r.useState(!1),[x,f]=r.useState(!1),j=n.startsWith("tmp_"),[y,S,g]=k(a=>[a.approveToolCall,a.rejectToolCall,a.rejectAndContinueToolCall]),I=se(a=>a.addToolToAllowList),T=async a=>{f(!0);try{if(s&&await s(),await y(n,C??""),a){const d=`${o}/${i}`;await I(d)}}finally{f(!1)}},M=async a=>{h(!0),await S(n,a),h(!1),c(!1),b("")},A=async a=>{h(!0),await g(n,a),h(!1),c(!1),b("")};return e.jsxs(m,{horizontal:!0,gap:8,children:[e.jsx(xt,{open:w,placement:"bottomRight",trigger:"click",content:e.jsxs(m,{gap:12,style:{width:400},children:[e.jsxs(m,{horizontal:!0,align:"center",justify:"space-between",children:[e.jsx("div",{children:l("tool.intervention.rejectTitle")}),e.jsxs(de,{children:[e.jsx(F,{color:"default",loading:p,size:"small",variant:"filled",onClick:()=>M(u),children:l("tool.intervention.rejectOnly")}),e.jsx(F,{loading:p,size:"small",type:"primary",onClick:()=>A(u),children:l("tool.intervention.rejectAndContinue")})]})]}),e.jsx(ft.TextArea,{autoFocus:!0,placeholder:l("tool.intervention.rejectReasonPlaceholder"),rows:3,value:u,variant:"filled",onChange:a=>b(a.target.value)})]}),onOpenChange:a=>{p||c(a)},children:e.jsx(F,{color:"default",disabled:j,size:"small",variant:"filled",children:l("tool.intervention.reject")})}),t==="allow-list"?e.jsxs(de.Compact,{children:[e.jsx(F,{disabled:j,loading:x,size:"small",type:"primary",onClick:()=>T(!0),children:l("tool.intervention.approveAndRemember")}),e.jsx(yt,{items:[{disabled:x||j,key:"once",label:l("tool.intervention.approveOnce"),onClick:()=>T(!1)}],children:e.jsx(F,{disabled:x||j,icon:ve,size:"small",type:"primary"})})]}):e.jsx(F,{disabled:j,loading:x,size:"small",type:"primary",onClick:()=>T(),children:l("tool.intervention.approve")})]})}),z=H(({css:t,cssVar:n})=>({form:t`
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
  `})),me=t=>Object.entries(t).map(([n,o],i)=>({id:`${n}-${i}`,key:n,value:typeof o=="string"?o:JSON.stringify(o)})).filter(n=>n.key),Yt=t=>{const n={};return t.forEach(o=>{if(o.key)try{n[o.key]=JSON.parse(o.value||'""')}catch{n[o.key]=o.value||""}}),n},Se=r.memo(({initialValue:t={},onFinish:n,onCancel:o})=>{const{t:i}=D(["tool","common"]),[s]=$.useForm(),{message:C}=jt.useApp(),l=r.useRef(null);r.useEffect(()=>{s.setFieldsValue({items:me(t)})},[t,s]);const[u,b]=r.useState(!1),w=async()=>{b(!0);try{await s.validateFields();const h=s.getFieldsValue(),x=Yt(h.items||[]);await n?.(x)}catch(h){console.error("Validation Failed:",h),C.error(i("updateArgs.formValidationFailed")||"Please check the form for errors.")}b(!1)},c=()=>{o?.()},p=(h,x,f)=>x?.key&&f.map(y=>y?.key).filter(Boolean).filter(y=>y===x.key).length>1?Promise.reject(new Error(i("updateArgs.duplicateKeyError"))):Promise.resolve();return e.jsxs($,{autoComplete:"off",className:z.form,form:s,initialValues:{items:me(t)},ref:l,children:[e.jsxs(m,{horizontal:!0,className:z.title,gap:8,children:[e.jsx(m,{flex:1,children:"key"}),e.jsx(m,{flex:4,children:"value"})]}),e.jsx($.List,{name:"items",children:(h,{add:x,remove:f})=>e.jsxs(m,{width:"100%",children:[h.map(({key:j,name:y,...S},g)=>e.jsxs(m,{horizontal:!0,align:"center",className:z.row,gap:8,width:"100%",children:[e.jsx($.Item,{...S,className:z.formItem,name:[y,"key"],style:{flex:1},validateTrigger:["onChange","onBlur"],rules:[{message:i("updateArgs.keyRequired"),required:!0},{validator:I=>p(I,s.getFieldValue(["items",g]),s.getFieldValue("items"))}],children:e.jsx(Y,{allowClear:!0,className:z.input,placeholder:i("updateArgs.form.key"),variant:"filled"})}),e.jsx($.Item,{...S,className:z.formItem,name:[y,"value"],style:{flex:4},children:e.jsx(Y,{allowClear:!0,className:z.input,placeholder:i("updateArgs.form.value"),variant:"filled"})}),e.jsx(W,{icon:Rt,size:"small",title:i("delete",{ns:"common"}),style:{marginBottom:6},onClick:()=>f(y)})]},j)),e.jsx($.Item,{style:{marginBottom:0,marginTop:8},children:e.jsxs(m,{horizontal:!0,gap:8,justify:"space-between",children:[e.jsx(F,{color:"default",icon:e.jsx(oe,{icon:Bt}),size:"small",variant:"filled",onClick:()=>x({id:`new-${Date.now()}`,key:"",value:""}),children:i("updateArgs.form.add")}),e.jsxs(m,{horizontal:!0,gap:8,children:[e.jsx(F,{size:"small",onClick:c,children:i("cancel",{ns:"common"})}),e.jsx(F,{loading:u,size:"small",type:"primary",onClick:w,children:i("save",{ns:"common"})})]})]})})]})})]})}),V=H(({css:t,cssVar:n})=>({collapseHeader:t`
    cursor: pointer;
    user-select: none;

    padding-block: 6px;
    padding-inline: 16px;

    font-size: 12px;
    color: ${n.colorTextTertiary};

    &:hover {
      color: ${n.colorTextSecondary};
    }
  `,avatar:t`
    font-size: 16px;
    line-height: 1;
  `,description:t`
    padding-block: 8px;
    padding-inline: 16px;
    font-size: 14px;
    color: ${n.colorText};
  `})),Xt=r.memo(({requestArgs:t,id:n,identifier:o,apiName:i,toolCallId:s,assistantGroupId:C,actionsPortalTarget:l})=>{const{t:u}=D(["chat","plugin","common"]),b=se(xe.approvalMode),[w,c]=r.useState(!1),[p,h]=r.useState(!1),x=k(a=>a.updatePluginArguments),f=vt(Ct.getMetaById(o)),j=tt.includes(o),y=j?u(`builtins.${o}.title`,{defaultValue:o,ns:"plugin"}):bt.getPluginTitle(f)??o,S=j?u(`builtins.${o}.apiName.${i}`,{defaultValue:i,ns:"plugin"}):i,g=r.useMemo(()=>X(t||"")??{},[t]),I=typeof g=="object"?Object.keys(g).length:0,T=r.useCallback(()=>{c(!1)},[]),M=r.useCallback(async a=>{if(s)try{JSON.stringify(a,null,2)!==t&&await x(s,a,!0),c(!1)}catch(d){console.error("Error stringifying arguments:",d)}},[t,s,x]);if(w)return e.jsx(r.Suspense,{fallback:e.jsx(ee,{arguments:t}),children:e.jsx(Se,{initialValue:X(t||""),onCancel:T,onFinish:M})});const A=e.jsx(m,{horizontal:!0,justify:"flex-end",children:e.jsx(be,{apiName:i,approvalMode:b,assistantGroupId:C,identifier:o,messageId:n,toolCallId:s})});return e.jsxs(m,{gap:4,children:[e.jsxs(m,{horizontal:!0,align:"center",className:V.description,gap:6,children:[f?.avatar&&e.jsx("span",{className:V.avatar,children:f.avatar}),e.jsxs("span",{children:[y," → ",S]})]}),I>0&&e.jsxs(e.Fragment,{children:[e.jsxs(m,{horizontal:!0,align:"center",className:V.collapseHeader,gap:4,onClick:()=>h(!p),children:[e.jsx(oe,{icon:p?ve:Et,size:14}),e.jsx("span",{children:u("tool.intervention.viewParameters",{count:I,defaultValue:"View parameters ({{count}})"})}),p&&e.jsx(W,{icon:zt,size:"small",title:u("edit",{ns:"common"}),onClick:a=>{a.stopPropagation(),c(!0)}})]}),p&&e.jsx(ee,{arguments:t})]}),l?fe.createPortal(A,l):A]})}),te=r.memo(({args:t})=>{const{t:n}=D("tool"),o=r.useMemo(()=>St.checkSecurityBlacklist(kt,t),[t]);return o.blocked?e.jsx(je,{showIcon:!0,title:n("localFiles.securityBlacklist.warning"),type:"error",variant:"borderless",description:e.jsx(m,{gap:4,style:{fontSize:12},children:e.jsx("div",{children:o.reason?n(o.reason):void 0})})}):null});te.displayName="SecurityBlacklistWarning";const en=r.memo(({requestArgs:t,id:n,identifier:o,apiName:i,toolCallId:s,assistantGroupId:C,actionsPortalTarget:l})=>{const u=se(xe.approvalMode),[b,w]=r.useState(!1),c=k(d=>d.updatePluginArguments),p=r.useRef(new Map),h=r.useCallback((d,L)=>(p.current.set(d,L),()=>{p.current.delete(d)}),[]),x=r.useCallback(async()=>{const d=Array.from(p.current.values());await Promise.all(d.map(L=>L()))},[]),f=r.useCallback(()=>{w(!1)},[]),j=r.useCallback(async d=>{if(s)try{JSON.stringify(d,null,2)!==t&&await c(s,d,!0),w(!1)}catch(L){console.error("Error stringifying arguments:",L)}},[t,s,c]),y=r.useCallback(async d=>{s&&await c(s,d,!0)},[s,c]),S=r.useMemo(()=>X(t||"")??{},[t]),g=o===he,I=k(d=>d.submitToolInteraction),T=k(d=>d.skipToolInteraction),M=k(d=>d.cancelToolInteraction),A=r.useCallback(async d=>{switch(d.type){case"submit":{await I(n,d.payload);break}case"skip":{await T(n,d.reason);break}case"cancel":{await M(n);break}}},[n,I,T,M]),a=Zt(o,i);if(a){if(b)return e.jsx(r.Suspense,{fallback:e.jsx(ee,{arguments:t}),children:e.jsx(Se,{initialValue:S,onCancel:f,onFinish:j})});if(g)return e.jsx(m,{gap:12,children:e.jsx(a,{apiName:i,args:S,identifier:o,interactionMode:"custom",messageId:n,registerBeforeApprove:h,onArgsChange:y,onInteractionAction:A})});const d=e.jsx(m,{horizontal:!0,justify:"flex-end",children:e.jsx(be,{apiName:i,approvalMode:u,assistantGroupId:C,identifier:o,messageId:n,toolCallId:s,onBeforeApprove:x})});return e.jsxs(m,{gap:12,children:[e.jsx(te,{args:S}),e.jsx(a,{apiName:i,args:S,identifier:o,messageId:n,registerBeforeApprove:h,onArgsChange:y}),l?fe.createPortal(d,l):d]})}return e.jsxs(m,{gap:12,children:[e.jsx(te,{args:S}),e.jsx(Xt,{actionsPortalTarget:l,apiName:i,assistantGroupId:C,id:n,identifier:o,requestArgs:t,toolCallId:s})]})}),ae=It(({css:t,token:n})=>({actions:t`
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
  `})),tn=r.memo(({intervention:t})=>{const{styles:n}=ae(),[o,i]=r.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:n.content,children:e.jsx(en,{actionsPortalTarget:o,apiName:t.apiName,assistantGroupId:t.assistantGroupId,id:t.toolMessageId,identifier:t.identifier,requestArgs:t.requestArgs,toolCallId:t.toolCallId})}),e.jsx("div",{className:n.actions,ref:i})]})}),nn=r.memo(({interventions:t,activeIndex:n,onTabChange:o})=>{const{cx:i,styles:s}=ae();return e.jsxs("div",{className:s.tabBar,children:[t.map((C,l)=>e.jsxs("div",{className:i(s.tab,l===n&&s.tabActive),onClick:()=>o(l),children:["🔧 ",C.apiName]},C.toolCallId)),e.jsxs("div",{className:s.tabCounter,children:[n+1," / ",t.length]})]})}),sn=r.memo(({interventions:t})=>{const{styles:n}=ae(),[o,i]=r.useState(null),s=r.useMemo(()=>{if(o){const u=t.findIndex(b=>b.toolCallId===o);if(u>=0)return u}return 0},[t,o]),C=r.useCallback(u=>{i(t[u]?.toolCallId??null)},[t]),l=t[s];return l?e.jsxs("div",{className:n.container,children:[t.length>1&&e.jsx(nn,{activeIndex:s,interventions:t,onTabChange:C}),e.jsx(tn,{intervention:l},l.toolCallId)]}):null}),_=H(({css:t,cssVar:n})=>({container:t`
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
  `})),ke=r.memo(()=>{const t=k(l=>l.context),n=r.useMemo(()=>ye({agentId:t.agentId,groupId:t.groupId,topicId:t.topicId}),[t.agentId,t.groupId,t.topicId]),o=B(l=>O.getQueuedMessages(t)(l)),i=B(l=>l.removeQueuedMessage),s=k(l=>l.editor),C=r.useCallback((l,u)=>{i(n,l),s?.setDocument("markdown",u),s?.focus()},[n,s,i]);return o.length===0?null:e.jsx(m,{className:_.container,gap:0,children:o.map((l,u)=>e.jsxs(m,{horizontal:!0,align:"center",className:u>0?`${_.item} ${_.itemDivider}`:_.item,gap:8,children:[e.jsx(oe,{className:_.icon,icon:Pt,size:14}),e.jsx(m,{className:_.text,flex:1,children:l.content}),e.jsx(W,{icon:$t,size:"small",onClick:()=>C(l.id,l.content)}),e.jsx(W,{icon:Nt,size:"small",onClick:()=>i(n,l.id)})]},l.id))})});ke.displayName="QueueTray";const on=()=>{const t=nt();return r.useCallback(()=>ne.dbMessages(t.getState()).filter(n=>n.role==="user"||n.role==="assistant"||n.role==="tool").slice(-25).map(n=>({content:typeof n.content=="string"?n.content:"",role:n.role})),[t])},an=r.memo(({actionBarStyle:t,allowExpand:n,leftActions:o=[],leftContent:i,rightActions:s=[],children:C,extraActionItems:l,mentionItems:u,sendMenu:b,sendAreaPrefix:w,sendButtonProps:c,showRuntimeConfig:p=!0,onEditorReady:h,skipScrollMarginWithList:x})=>{const{t:f}=D("chat"),j=on(),y=k(v=>v.context),[S,g,I,T]=k(v=>[v.context.agentId,v.inputMessage,v.sendMessage,v.stopGenerating]),M=k(v=>v.updateInputMessage),A=k(v=>v.setEditor),a=k(q.isInputLoading),d=k(ne.pendingInterventions,(v,U)=>v.length!==U.length?!1:v.every((G,E)=>G.toolCallId===U[E].toolCallId&&G.requestArgs===U[E].requestArgs)),L=d.length>0,re=k(q.sendMessageError),Ie=B(v=>v.clearSendMessageError),we=K(N.chatUploadFileList),Te=K(N.chatContextSelections),Me=K(N.isUploadingFiles),Ae=B(v=>O.queuedMessageCount(y)(v)>0),Fe=!g.trim()&&we.length===0&&Te.length===0||Me,Le=r.useCallback(async({clearContent:v,getMarkdownContent:U,getEditorData:G})=>{const E=K.getState(),ie=N.chatUploadFileList(E),Ee=N.isUploadingFiles(E),le=N.chatContextSelections(E);if(Ee)return;const ce=U();if(!ce.trim()&&ie.length===0&&le.length===0)return;const ze=G();v(),E.clearChatUploadFileList(),E.clearChatContextSelections();const Pe=le.map(Q=>({content:Q.preview||"",id:Q.id,pageId:Q.pageId||"",xml:Q.content}));await I({editorData:ze,files:ie,message:ce,pageSelections:Pe})},[I]),Re={disabled:Fe,generating:a,onStop:T,...c},Be=e.jsx(At,{style:x?{marginTop:-12,position:"relative"}:void 0,children:L?e.jsx(sn,{interventions:d}):e.jsxs(e.Fragment,{children:[re&&e.jsx(m,{paddingBlock:"0 6px",paddingInline:12,children:e.jsx(je,{closable:!0,title:f("input.errorMsg",{errorMsg:re}),type:"secondary",onClose:Ie})}),Ae&&e.jsx(m,{paddingInline:12,style:{position:"absolute",zIndex:10,bottom:"100%",left:12,right:12},children:e.jsx(ke,{})}),e.jsx(Tt,{actionBarStyle:t,borderRadius:12,extraActionItems:l,leftContent:i,sendAreaPrefix:w,showRuntimeConfig:p})]})});return e.jsx(Mt,{agentId:S,allowExpand:n,getMessages:j,leftActions:o,mentionItems:u,rightActions:s,sendButtonProps:Re,sendMenu:b,slashPlacement:"top",chatInputEditorRef:v=>{v&&(A(v),h?.(v))},onMarkdownContentChange:M,onSend:Le,children:C??Be})});an.displayName="ConversationChatInput";const kn=t=>{const n=ye(t),{operations:o,operationsByContext:i,operationsByMessage:s,toolCallingStreamIds:C}=B(_t(c=>({operations:c.operations,operationsByContext:c.operationsByContext,operationsByMessage:c.operationsByMessage,toolCallingStreamIds:c.toolCallingStreamIds}))),l=B(c=>O.isAgentRuntimeRunningByContext(t)(c)),u=B(c=>O.isInputLoadingByContext(t)(c)),b=r.useMemo(()=>{const c=i[n]||[];for(const p of[...c].reverse()){const h=o[p];if(h&&h.type==="sendMessage"&&h.metadata.inputSendErrorMsg)return h.metadata.inputSendErrorMsg}},[i,n,o]);return r.useMemo(()=>({getMessageOperationState:c=>{const p=B.getState(),h=s[c]||[];if(h.length===0)return ot;const x=h.map(g=>o[g]).filter(Boolean),f=x.filter(g=>g.status==="running"),j=f.some(g=>ue.includes(g.type)),y=[...x].reverse().find(g=>ue.includes(g.type)),S=!j&&!!y&&y.status==="cancelled";return{isContinuing:f.some(g=>g.type==="continue"),isCreating:f.some(g=>g.type==="sendMessage"||g.type==="createAssistantMessage"),isGenerating:j,isInReasoning:f.some(g=>g.type==="reasoning"),isInterrupted:S,isProcessing:O.isMessageProcessing(c)(p),isRegenerating:f.some(g=>g.type==="regenerate")}},getToolOperationState:(c,p,h)=>{const x=B.getState(),f=C[c],j=f?f[p]??!1:!1,y=O.isMessageInToolCalling(c)(x);return!j&&!y?st:{isInvoking:y,isStreaming:j}},isAIGenerating:l,isInputLoading:u,sendMessageError:b}),[o,s,C,l,u,b])};export{an as C,Sn as c,kn as u};
