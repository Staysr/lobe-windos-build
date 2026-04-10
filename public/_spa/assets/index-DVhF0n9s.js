import{j as a,c as le}from"../vendor/vendor-motion-siEo8VfX.js";import{k as Z,ed as re,aZ as Sn,bz as An,bu as $e,iG as Yt,L as rt,F as T,T as Ne,I as H,W as ke,av as wn,a$ as Tn,o as E,j as te,ag as Cn,m as L,ay as On,aT as lt,bY as Rn,aU as ct,B as Pn,f as _n,bx as bt,cD as $n,aY as Nn,aH as In}from"./index-C275yc7e.js";import{r as b,R as C,g as Qt}from"../vendor/vendor-emotion-B6qZrIr4.js";import{a as En,u as G}from"./store-DyOI1hPC.js";import{C as jt}from"./index-Ch0UCOj0.js";import{T as ge}from"./index-BVlugt2r.js";import{F as Jt}from"./Table-CXPjVh9Q.js";import{B as ne}from"./index-D6DvmplH.js";import"../vendor/vendor-es-toolkit-CFMjQStz.js";import{e as Ie,g as Ee}from"./format-CzTD0Usd.js";import"./providerConfig-BNV0IvMA.js";import{bN as Ln,cY as Xt,t as Le,o as ut,bz as dt,dP as pt,ab as Vt,bo as Dn,co as zn,P as Bn,cP as Fn,bq as Mn,da as Kn,b3 as Wn,_ as Hn,ae as Un,O as qn,bO as Gn}from"../vendor/vendor-icons-CwKawJ1k.js";import{S as Zn}from"./index-DMKxTJGG.js";import{f as B,r as en,a as Yn,b as Qn,i as xe,T as ft,p as ae,L as V,g as tn,c as mt,d as nn,D as Jn,C as Xn,e as Te,h as je,S as Vn,A as er,j as tr,k as kt,l as nr,m as Se,n as rr,u as ar,G as ir,o as Ke,q as or,s as sr,t as lr,v as Fe,w as St,x as cr,y as ur,z as dr,B as pr,E as fr,F as mr,H as hr,I as gr,R as xr,J as vr,K as yr,N as br,M as jr}from"./index-1UYA6KeV.js";import{r as rn}from"./_baseAssignValue-DKiRLsuq.js";import{A as kr}from"./index-B1FRBCSR.js";import{M as Sr}from"./Markdown-DhgCm8T7.js";import{R as Ar}from"./index-CwjbtQIJ.js";import{S as wr}from"./StatusBadge-BWbP34IW.js";import{C as We}from"./index-B4eFmeIb.js";import{a as At}from"./utils-DdCRt2d3.js";import{r as et}from"./selectors-D8FoU16Z.js";import{P as Tr}from"./progress-ByKxxd6Z.js";import"../i18n/i18n-zh-CN-CcVu2is6.js";import"../i18n/i18n-en-US-DqZ3IPP5.js";import"./useBubbleLock-hIRUaOo-.js";import"./index-CDCjmxOa.js";import"./useForm-C4hvPi2h.js";import"./scrollTo-0Y8P0xAA.js";import"./Pagination-Cd9CbmaG.js";import"./index-C2H8Z_Bj.js";import"./debounce-yArlvKmP.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-DvKkbDJI.js";import"./index-DOKgRZvR.js";import"./index-DykGnXB3.js";import"./Snippet-Bioy9Xhp.js";import"./Spotlight-OeUDDJY8.js";import"./useTranslation-DXQttwfC.js";import"./image-nnCaCTxV.js";import"./index-CK7d1PZF.js";import"./index-BHwegkc5.js";import"./index-ClojSa7h.js";import"./ScrollShadow-jEogUgPT.js";import"./index-CAiMwnpS.js";import"./AccordionItem-D6EDXJOr.js";import"./index-B5hHQ14u.js";import"./row-Ck51Dhje.js";import"./index-CecNsLP-.js";const Cr=b.memo(({status:e})=>{const{t}=Z("eval");return e==="error"?a.jsx(ne,{color:"orange",text:t("table.filter.error")}):e==="timeout"?a.jsx(ne,{color:"orange",text:t("run.status.timeout")}):a.jsx(Yt,{children:e})}),Or=b.memo(({open:e,onClose:t,onConfirm:r,runId:n})=>{const{t:i}=Z("eval"),{t:o}=Z("common"),[s,c]=b.useState([]),[l,u]=b.useState(!1),[p,y]=b.useState(!1),[j,A]=b.useState([]),[k,f]=b.useState(10);b.useEffect(()=>{e&&(A([]),u(!0),En.getResumableCases(n).then(v=>{c(v),A(v.filter(d=>d.canResume).map(d=>d.testCaseId))}).finally(()=>u(!1)))},[e,n]);const S=b.useMemo(()=>s.filter(v=>v.canResume),[s]),w=j.length===S.length&&S.length>0,g=j.length>0&&j.length<S.length,O=b.useCallback(v=>{A(v?S.map(d=>d.testCaseId):[])},[S]),P=b.useCallback((v,d)=>{A(m=>d?[...m,v]:m.filter(x=>x!==v))},[]),N=b.useMemo(()=>[{key:"select",render:(v,d)=>a.jsx(re,{title:d.canResume?void 0:d.reason,children:a.jsx(jt,{checked:j.includes(d.testCaseId),disabled:!d.canResume,onChange:m=>P(d.testCaseId,m.target.checked)})}),title:a.jsx(jt,{checked:w,disabled:S.length===0,indeterminate:g,onChange:v=>O(v.target.checked)}),width:48},{key:"index",render:(v,d)=>a.jsx("span",{style:{color:"var(--ant-color-text-tertiary)",fontFamily:"monospace",fontSize:12},children:d.sortOrder??"-"}),title:"#",width:48},{key:"input",render:(v,d)=>a.jsx(ge.Paragraph,{ellipsis:{expandable:!0,rows:2,symbol:"..."},style:{margin:0},children:d.input}),title:i("table.columns.input")},{key:"status",render:(v,d)=>a.jsx(re,{title:d.canResume?void 0:d.reason,children:a.jsx(Cr,{status:d.resumeStatus})}),title:i("table.columns.status"),width:110}],[i,j,w,g,S,P,O]),I=async()=>{if(j.length!==0){y(!0);try{await r(s.filter(v=>j.includes(v.testCaseId)).map(v=>({testCaseId:v.testCaseId,threadId:v.threadId}))),t()}finally{y(!1)}}};return a.jsx(Sn,{destroyOnHidden:!0,open:e,title:i("run.actions.batchResume.modal.title"),width:700,footer:[a.jsx($e,{onClick:t,children:o("cancel")},"cancel"),a.jsxs($e,{disabled:j.length===0,loading:p,type:"primary",onClick:I,children:[i("run.actions.batchResume.modal.confirm")," (",j.length,")"]},"confirm")],onCancel:t,children:l?a.jsx(An,{active:!0,paragraph:{rows:4}}):a.jsx(Jt,{columns:N,dataSource:s,rowKey:"testCaseId",scroll:{y:400},size:"small",style:{minHeight:300},pagination:{pageSize:k,showSizeChanger:!0,size:"small",onShowSizeChange:(v,d)=>f(d)}})})}),wt=new Set(["error","timeout"]),an=(e,t)=>{if(t<=1)return wt.has(e.status??"")?{resumeStatus:e.status}:void 0;const r=e.evalResult?.threads?.find(n=>wt.has(n.status??""));if(r?.status)return{resumeStatus:r.status,threadId:r.threadId}},W=te(({css:e,cssVar:t})=>({caseLink:e`
    color: inherit;
    text-decoration: none;
  `,durationSub:e`
    font-family: monospace;
    font-size: 10px;
    color: ${t.colorTextTertiary};
  `,filterBar:e`
    padding-block: 12px;
    padding-inline: 20px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,indexCell:e`
    font-family: monospace;
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,monoCell:e`
    font-family: monospace;
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,threadDot:e`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `})),Rr=te(({css:e,cssVar:t})=>({text:e`
    color: ${t.colorTextSecondary};
  `})),fe=b.memo(({children:e})=>a.jsx("span",{className:Rr.text,children:e})),Tt=b.memo(({record:e})=>{const{t}=Z("eval"),r=e.status;if(!r||r==="pending")return a.jsx(ne,{status:"default",text:a.jsx(fe,{children:t("run.status.pending")})});if(r==="running")return a.jsx(ne,{status:"processing",text:a.jsx(fe,{children:t("run.status.running")})});if(r==="passed")return a.jsx(Ne,{color:"green",children:t("table.filter.passed")});if(r==="failed")return a.jsx(Ne,{color:"red",children:t("table.filter.failed")});if(r==="error"){const n=e.evalResult?.error,i=a.jsx(ne,{color:"orange",text:a.jsx(fe,{children:t("table.filter.error")})});return n?a.jsx(re,{title:n,children:i}):i}if(r==="timeout")return a.jsx(ne,{color:"orange",text:a.jsx(fe,{children:t("run.status.timeout")})});if(r==="external"){const n=a.jsx(ne,{color:"purple",text:a.jsx(fe,{children:t("run.status.external")})});return a.jsx(re,{title:t("run.status.external.tooltip"),children:n})}if(r==="completed"){const n=a.jsx(ne,{color:"blue",text:a.jsx(fe,{children:t("run.status.completed")})});return a.jsx(re,{title:t("run.status.completed.tooltip"),children:n})}return a.jsx(ne,{status:"default",text:a.jsx(fe,{children:r})})}),Pr=b.memo(({threads:e})=>a.jsx(T,{horizontal:!0,align:"center",gap:4,children:e.map(t=>{let r=E.colorTextTertiary;t.status==="running"?r=E.colorPrimary:t.status==="error"?r=E.colorError:t.passed===!0?r=E.colorSuccess:t.passed===!1&&(r=E.colorError),t.status==="external"&&(r=E.colorWarning),t.status==="completed"&&(r=E.colorPrimary);const n=t.error||t.status==="error"?"error":t.status==="running"?"running":t.passed===!0?"passed":t.passed===!1&&t.status!=="completed"?"failed":t.status==="external"?"Awaiting for external evaluation":t.status==="completed"?"completed":"pending";return a.jsx(re,{title:n,children:a.jsx("span",{className:W.threadDot,style:{backgroundColor:r}})},t.threadId)})})),on=b.memo(({ms:e})=>{const t=e/1e3;if(t<60)return a.jsxs("span",{className:W.monoCell,children:[t.toFixed(1),"s"]});const r=Math.floor(t/60),n=Math.floor(t%60);return a.jsxs(T,{gap:2,children:[a.jsxs("span",{className:W.monoCell,children:[r,"m ",n,"s"]}),a.jsxs("span",{className:W.durationSub,children:[t.toFixed(1),"s"]})]})}),_r=b.memo(({startTime:e})=>{const[t,r]=b.useState(()=>Date.now()-new Date(e).getTime());return b.useEffect(()=>{const n=setInterval(()=>{r(Date.now()-new Date(e).getTime())},100);return()=>clearInterval(n)},[e]),a.jsx(on,{ms:t})}),$r=new Set(["error","failed","timeout"]),Nr=new Set(["completed","failed","aborted"]),Ir=b.memo(({results:e,benchmarkId:t,runId:r,k:n=1,onRetryCase:i,onResumeCase:o,runStatus:s})=>{const{t:c}=Z("eval"),[l,u]=b.useState(""),[p,y]=b.useState("all"),[j,A]=b.useState(20),[k,f]=b.useState(null),[S,w]=b.useState(null),g=n>1,O=!!i&&!!s&&Nr.has(s),P=!!o,N=b.useMemo(()=>{let v=e;return l&&(v=v.filter(d=>d.testCase?.content?.input?.toLowerCase().includes(l.toLowerCase()))),p!=="all"&&(p==="pending"?v=v.filter(d=>!d.status||d.status==="pending"):p==="running"?v=v.filter(d=>d.status==="running"):v=v.filter(d=>d.status===p)),v},[e,l,p]),I=b.useMemo(()=>{const v=[{key:"index",render:(d,m,x)=>a.jsx("span",{className:W.indexCell,children:m.testCase?.sortOrder??x+1}),title:"#",width:48},{dataIndex:["testCase","content","input"],key:"input",render:(d,m)=>a.jsx(rt,{className:W.caseLink,to:`/eval/bench/${t}/runs/${r}/cases/${m.testCaseId}`,children:d}),title:c("table.columns.input")}];return g?v.push({key:"threads",render:(d,m)=>{const x=m.evalResult?.threads;return x?.length?a.jsx(Pr,{threads:x}):a.jsx(Tt,{record:m})},title:c("table.columns.status"),width:60+n*12},{key:"passAtK",render:(d,m)=>{const x=m.evalResult?.passAtK,R=m.evalResult?.passAllK,_=x!=null,h=R!=null;return!_&&!h?"-":a.jsxs(T,{gap:2,children:[_&&(x?a.jsx(Ne,{color:"green",children:c("table.filter.passed")}):a.jsx(Ne,{color:"red",children:c("table.filter.failed")})),h&&a.jsxs("span",{className:W.durationSub,children:["^",n,": ",c(R?"table.filter.passed":"table.filter.failed")]})]})},title:`pass@${n}`,width:110}):v.push({key:"status",render:(d,m)=>a.jsx(Tt,{record:m}),title:c("table.columns.status"),width:100}),v.push({key:"duration",render:(d,m)=>{const x=m.evalResult?.duration;return x!=null?a.jsx(on,{ms:x}):m.status==="running"&&m.createdAt?a.jsx(_r,{startTime:m.createdAt}):"-"},sortDirections:["descend","ascend"],sorter:(d,m)=>(d.evalResult?.duration??0)-(m.evalResult?.duration??0),title:c("table.columns.duration"),width:100},{key:"steps",render:(d,m)=>{const x=m.evalResult?.steps;if(x==null)return"-";const R=m.evalResult?.llmCalls,_=m.evalResult?.toolCalls,h=x,U=R??void 0,ce=_??void 0,ue=U!==void 0||ce!==void 0;return a.jsxs(T,{gap:2,children:[a.jsxs(T,{horizontal:!0,align:"center",gap:4,children:[a.jsx(H,{icon:Ln,size:12,style:{opacity:.5}}),a.jsx("span",{className:W.monoCell,children:h})]}),ue&&a.jsxs("span",{className:W.durationSub,children:[U??0," llm / ",ce??0," tool"]})]})},sortDirections:["descend","ascend"],sorter:(d,m)=>(d.evalResult?.steps??0)-(m.evalResult?.steps??0),title:c("table.columns.steps"),width:120},{key:"cost",render:(d,m)=>{const x=m.evalResult?.cost,R=m.evalResult?.tokens,_=x!=null,h=R!=null;return!_&&!h?"-":a.jsxs(T,{gap:2,children:[_&&a.jsxs("span",{className:W.monoCell,children:["$",Ie(x)]}),h&&a.jsxs("span",{className:W.durationSub,children:[Ee(R)," tokens"]})]})},sortDirections:["descend","ascend"],sorter:(d,m)=>(d.evalResult?.cost??0)-(m.evalResult?.cost??0),title:c("table.columns.cost"),width:120}),g&&v.push({key:"totalCost",render:(d,m)=>{const x=m.evalResult?.totalCost,R=m.evalResult?.totalTokens,_=x!=null,h=R!=null;return!_&&!h?"-":a.jsxs(T,{gap:2,children:[_&&a.jsxs("span",{className:W.monoCell,children:["$",Ie(x)]}),h&&a.jsxs("span",{className:W.durationSub,children:[Ee(R)," tokens"]})]})},sortDirections:["descend","ascend"],sorter:(d,m)=>(d.evalResult?.totalCost??0)-(m.evalResult?.totalCost??0),title:c("table.columns.totalCost"),width:120}),(O||P)&&v.push({key:"actions",render:(d,m)=>{const x=O&&$r.has(m.status),R=an(m,n),_=P&&!!R;if(!x&&!_)return null;const h=k===m.testCaseId,U=S===m.testCaseId;return a.jsxs(T,{horizontal:!0,gap:4,children:[x&&a.jsx(re,{title:c("run.actions.retryCase"),children:a.jsx(ke,{icon:Xt,loading:h,size:"small",onClick:async()=>{f(m.testCaseId);try{await i(m.testCaseId)}finally{f(null)}}})}),_&&a.jsx(re,{title:c("run.actions.resumeCase"),children:a.jsx(ke,{icon:Le,loading:U,size:"small",onClick:async()=>{w(m.testCaseId);try{await o(m.testCaseId,R?.threadId)}finally{w(null)}}})})]})},title:"",width:80}),v},[t,r,c,g,n,O,P,k,S,i,o]);return a.jsxs(T,{gap:0,children:[a.jsxs(T,{horizontal:!0,align:"center",className:W.filterBar,gap:8,children:[a.jsx(wn.Search,{allowClear:!0,placeholder:c("table.search.placeholder"),style:{width:240},onChange:v=>u(v.target.value)}),a.jsx(Tn,{style:{width:120},value:p,options:[{label:c("table.filter.all"),value:"all"},{label:c("table.filter.passed"),value:"passed"},{label:c("table.filter.failed"),value:"failed"},{label:c("table.filter.error"),value:"error"},{label:c("table.filter.running"),value:"running"},{label:c("run.status.pending"),value:"pending"},{label:c("run.status.external"),value:"external"},{label:c("run.status.completed"),value:"completed"}],onChange:y}),a.jsx("span",{style:{color:E.colorTextTertiary,fontSize:12,whiteSpace:"nowrap"},children:c("table.total",{count:N.length})})]}),a.jsx(Jt,{columns:I,dataSource:N,rowKey:"testCaseId",size:"small",pagination:{pageSize:j,showSizeChanger:!0,size:"small",onShowSizeChange:(v,d)=>A(d)}})]})});var Er=["points","className","baseLinePoints","connectNulls"];function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ae.apply(this,arguments)}function Lr(e,t){if(e==null)return{};var r=Dr(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Dr(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Ct(e){return Mr(e)||Fr(e)||Br(e)||zr()}function zr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Br(e,t){if(e){if(typeof e=="string")return at(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return at(e,t)}}function Fr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Mr(e){if(Array.isArray(e))return at(e)}function at(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Ot=function(t){return t&&t.x===+t.x&&t.y===+t.y},Kr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=[[]];return t.forEach(function(n){Ot(n)?r[r.length-1].push(n):r[r.length-1].length>0&&r.push([])}),Ot(t[0])&&r[r.length-1].push(t[0]),r[r.length-1].length<=0&&(r=r.slice(0,-1)),r},Pe=function(t,r){var n=Kr(t);r&&(n=[n.reduce(function(o,s){return[].concat(Ct(o),Ct(s))},[])]);var i=n.map(function(o){return o.reduce(function(s,c,l){return"".concat(s).concat(l===0?"M":"L").concat(c.x,",").concat(c.y)},"")}).join("");return n.length===1?"".concat(i,"Z"):i},Wr=function(t,r,n){var i=Pe(t,n);return"".concat(i.slice(-1)==="Z"?i.slice(0,-1):i,"L").concat(Pe(r.reverse(),n).slice(1))},Hr=function(t){var r=t.points,n=t.className,i=t.baseLinePoints,o=t.connectNulls,s=Lr(t,Er);if(!r||!r.length)return null;var c=le("recharts-polygon",n);if(i&&i.length){var l=s.stroke&&s.stroke!=="none",u=Wr(r,i,o);return C.createElement("g",{className:c},C.createElement("path",Ae({},B(s,!0),{fill:u.slice(-1)==="Z"?s.fill:"none",stroke:"none",d:u})),l?C.createElement("path",Ae({},B(s,!0),{fill:"none",d:Pe(r,o)})):null,l?C.createElement("path",Ae({},B(s,!0),{fill:"none",d:Pe(i,o)})):null)}var p=Pe(r,o);return C.createElement("path",Ae({},B(s,!0),{fill:p.slice(-1)==="Z"?s.fill:"none",className:c,d:p}))},tt,Rt;function Ur(){if(Rt)return tt;Rt=1;var e=en(),t=Yn(),r=rn();function n(i,o){return i&&i.length?e(i,r(o,2),t):void 0}return tt=n,tt}var qr=Ur();const Gr=Qt(qr);var nt,Pt;function Zr(){if(Pt)return nt;Pt=1;var e=en(),t=rn(),r=Qn();function n(i,o){return i&&i.length?e(i,t(o,2),r):void 0}return nt=n,nt}var Yr=Zr();const Qr=Qt(Yr);var Jr=["cx","cy","angle","ticks","axisLine"],Xr=["ticks","tick","angle","tickFormatter","stroke"];function Ce(e){"@babel/helpers - typeof";return Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ce(e)}function _e(){return _e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_e.apply(this,arguments)}function _t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_t(Object(r),!0).forEach(function(n){Ze(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_t(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $t(e,t){if(e==null)return{};var r=Vr(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Vr(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function ea(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Nt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ln(n.key),n)}}function ta(e,t,r){return t&&Nt(e.prototype,t),r&&Nt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function na(e,t,r){return t=Ue(t),ra(e,sn()?Reflect.construct(t,r||[],Ue(e).constructor):t.apply(e,r))}function ra(e,t){if(t&&(Ce(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aa(e)}function aa(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sn(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sn=function(){return!!e})()}function Ue(e){return Ue=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Ue(e)}function ia(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&it(e,t)}function it(e,t){return it=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},it(e,t)}function Ze(e,t,r){return t=ln(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ln(e){var t=oa(e,"string");return Ce(t)=="symbol"?t:t+""}function oa(e,t){if(Ce(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ce(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ye=(function(e){function t(){return ea(this,t),na(this,t,arguments)}return ia(t,e),ta(t,[{key:"getTickValueCoord",value:function(n){var i=n.coordinate,o=this.props,s=o.angle,c=o.cx,l=o.cy;return ae(c,l,i,s)}},{key:"getTickTextAnchor",value:function(){var n=this.props.orientation,i;switch(n){case"left":i="end";break;case"right":i="start";break;default:i="middle";break}return i}},{key:"getViewBox",value:function(){var n=this.props,i=n.cx,o=n.cy,s=n.angle,c=n.ticks,l=Gr(c,function(p){return p.coordinate||0}),u=Qr(c,function(p){return p.coordinate||0});return{cx:i,cy:o,startAngle:s,endAngle:s,innerRadius:u.coordinate||0,outerRadius:l.coordinate||0}}},{key:"renderAxisLine",value:function(){var n=this.props,i=n.cx,o=n.cy,s=n.angle,c=n.ticks,l=n.axisLine,u=$t(n,Jr),p=c.reduce(function(k,f){return[Math.min(k[0],f.coordinate),Math.max(k[1],f.coordinate)]},[1/0,-1/0]),y=ae(i,o,p[0],s),j=ae(i,o,p[1],s),A=me(me(me({},B(u,!1)),{},{fill:"none"},B(l,!1)),{},{x1:y.x,y1:y.y,x2:j.x,y2:j.y});return C.createElement("line",_e({className:"recharts-polar-radius-axis-line"},A))}},{key:"renderTicks",value:function(){var n=this,i=this.props,o=i.ticks,s=i.tick,c=i.angle,l=i.tickFormatter,u=i.stroke,p=$t(i,Xr),y=this.getTickTextAnchor(),j=B(p,!1),A=B(s,!1),k=o.map(function(f,S){var w=n.getTickValueCoord(f),g=me(me(me(me({textAnchor:y,transform:"rotate(".concat(90-c,", ").concat(w.x,", ").concat(w.y,")")},j),{},{stroke:"none",fill:u},A),{},{index:S},w),{},{payload:f});return C.createElement(V,_e({className:le("recharts-polar-radius-axis-tick",tn(s)),key:"tick-".concat(f.coordinate)},mt(n.props,f,S)),t.renderTickItem(s,g,l?l(f.value,S):f.value))});return C.createElement(V,{className:"recharts-polar-radius-axis-ticks"},k)}},{key:"render",value:function(){var n=this.props,i=n.ticks,o=n.axisLine,s=n.tick;return!i||!i.length?null:C.createElement(V,{className:le("recharts-polar-radius-axis",this.props.className)},o&&this.renderAxisLine(),s&&this.renderTicks(),nn.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(n,i,o){var s;return C.isValidElement(n)?s=C.cloneElement(n,i):xe(n)?s=n(i):s=C.createElement(ft,_e({},i,{className:"recharts-polar-radius-axis-tick-value"}),o),s}}])})(b.PureComponent);Ze(Ye,"displayName","PolarRadiusAxis");Ze(Ye,"axisType","radiusAxis");Ze(Ye,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe(e)}function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ve.apply(this,arguments)}function It(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?It(Object(r),!0).forEach(function(n){Qe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):It(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Et(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,un(n.key),n)}}function la(e,t,r){return t&&Et(e.prototype,t),r&&Et(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ca(e,t,r){return t=qe(t),ua(e,cn()?Reflect.construct(t,r||[],qe(e).constructor):t.apply(e,r))}function ua(e,t){if(t&&(Oe(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return da(e)}function da(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cn(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(cn=function(){return!!e})()}function qe(e){return qe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},qe(e)}function pa(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ot(e,t)}function ot(e,t){return ot=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ot(e,t)}function Qe(e,t,r){return t=un(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function un(e){var t=fa(e,"string");return Oe(t)=="symbol"?t:t+""}function fa(e,t){if(Oe(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Oe(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ma=Math.PI/180,Lt=1e-5,Je=(function(e){function t(){return sa(this,t),ca(this,t,arguments)}return pa(t,e),la(t,[{key:"getTickLineCoord",value:function(n){var i=this.props,o=i.cx,s=i.cy,c=i.radius,l=i.orientation,u=i.tickSize,p=u||8,y=ae(o,s,c,n.coordinate),j=ae(o,s,c+(l==="inner"?-1:1)*p,n.coordinate);return{x1:y.x,y1:y.y,x2:j.x,y2:j.y}}},{key:"getTickTextAnchor",value:function(n){var i=this.props.orientation,o=Math.cos(-n.coordinate*ma),s;return o>Lt?s=i==="outer"?"start":"end":o<-Lt?s=i==="outer"?"end":"start":s="middle",s}},{key:"renderAxisLine",value:function(){var n=this.props,i=n.cx,o=n.cy,s=n.radius,c=n.axisLine,l=n.axisLineType,u=he(he({},B(this.props,!1)),{},{fill:"none"},B(c,!1));if(l==="circle")return C.createElement(Jn,ve({className:"recharts-polar-angle-axis-line"},u,{cx:i,cy:o,r:s}));var p=this.props.ticks,y=p.map(function(j){return ae(i,o,s,j.coordinate)});return C.createElement(Hr,ve({className:"recharts-polar-angle-axis-line"},u,{points:y}))}},{key:"renderTicks",value:function(){var n=this,i=this.props,o=i.ticks,s=i.tick,c=i.tickLine,l=i.tickFormatter,u=i.stroke,p=B(this.props,!1),y=B(s,!1),j=he(he({},p),{},{fill:"none"},B(c,!1)),A=o.map(function(k,f){var S=n.getTickLineCoord(k),w=n.getTickTextAnchor(k),g=he(he(he({textAnchor:w},p),{},{stroke:"none",fill:u},y),{},{index:f,payload:k,x:S.x2,y:S.y2});return C.createElement(V,ve({className:le("recharts-polar-angle-axis-tick",tn(s)),key:"tick-".concat(k.coordinate)},mt(n.props,k,f)),c&&C.createElement("line",ve({className:"recharts-polar-angle-axis-tick-line"},j,S)),s&&t.renderTickItem(s,g,l?l(k.value,f):k.value))});return C.createElement(V,{className:"recharts-polar-angle-axis-ticks"},A)}},{key:"render",value:function(){var n=this.props,i=n.ticks,o=n.radius,s=n.axisLine;return o<=0||!i||!i.length?null:C.createElement(V,{className:le("recharts-polar-angle-axis",this.props.className)},s&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(n,i,o){var s;return C.isValidElement(n)?s=C.cloneElement(n,i):xe(n)?s=n(i):s=C.createElement(ft,ve({},i,{className:"recharts-polar-angle-axis-tick-value"}),o),s}}])})(b.PureComponent);Qe(Je,"displayName","PolarAngleAxis");Qe(Je,"axisType","angleAxis");Qe(Je,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var He;function Re(e){"@babel/helpers - typeof";return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Re(e)}function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},we.apply(this,arguments)}function Dt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Dt(Object(r),!0).forEach(function(n){Q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Dt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ha(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,pn(n.key),n)}}function ga(e,t,r){return t&&zt(e.prototype,t),r&&zt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function xa(e,t,r){return t=Ge(t),va(e,dn()?Reflect.construct(t,r||[],Ge(e).constructor):t.apply(e,r))}function va(e,t){if(t&&(Re(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ya(e)}function ya(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dn(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dn=function(){return!!e})()}function Ge(e){return Ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Ge(e)}function ba(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&st(e,t)}function st(e,t){return st=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},st(e,t)}function Q(e,t,r){return t=pn(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pn(e){var t=ja(e,"string");return Re(t)=="symbol"?t:t+""}function ja(e,t){if(Re(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Re(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var ee=(function(e){function t(r){var n;return ha(this,t),n=xa(this,t,[r]),Q(n,"pieRef",null),Q(n,"sectorRefs",[]),Q(n,"id",ar("recharts-pie-")),Q(n,"handleAnimationEnd",function(){var i=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),xe(i)&&i()}),Q(n,"handleAnimationStart",function(){var i=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),xe(i)&&i()}),n.state={isAnimationFinished:!r.isAnimationActive,prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,sectorToFocus:0},n}return ba(t,e),ga(t,[{key:"isActiveIndex",value:function(n){var i=this.props.activeIndex;return Array.isArray(i)?i.indexOf(n)!==-1:n===i}},{key:"hasActiveIndex",value:function(){var n=this.props.activeIndex;return Array.isArray(n)?n.length!==0:n||n===0}},{key:"renderLabels",value:function(n){var i=this.props.isAnimationActive;if(i&&!this.state.isAnimationFinished)return null;var o=this.props,s=o.label,c=o.labelLine,l=o.dataKey,u=o.valueKey,p=B(this.props,!1),y=B(s,!1),j=B(c,!1),A=s&&s.offsetRadius||20,k=n.map(function(f,S){var w=(f.startAngle+f.endAngle)/2,g=ae(f.cx,f.cy,f.outerRadius+A,w),O=$($($($({},p),f),{},{stroke:"none"},y),{},{index:S,textAnchor:t.getTextAnchor(g.x,f.cx)},g),P=$($($($({},p),f),{},{fill:"none",stroke:f.fill},j),{},{index:S,points:[ae(f.cx,f.cy,f.outerRadius,w),g]}),N=l;return Te(l)&&Te(u)?N="value":Te(l)&&(N=u),C.createElement(V,{key:"label-".concat(f.startAngle,"-").concat(f.endAngle,"-").concat(f.midAngle,"-").concat(S)},c&&t.renderLabelLineItem(c,P,"line"),t.renderLabelItem(s,O,je(f,N)))});return C.createElement(V,{className:"recharts-pie-labels"},k)}},{key:"renderSectorsStatically",value:function(n){var i=this,o=this.props,s=o.activeShape,c=o.blendStroke,l=o.inactiveShape;return n.map(function(u,p){if(u?.startAngle===0&&u?.endAngle===0&&n.length!==1)return null;var y=i.isActiveIndex(p),j=l&&i.hasActiveIndex()?l:null,A=y?s:j,k=$($({},u),{},{stroke:c?u.fill:u.stroke,tabIndex:-1});return C.createElement(V,we({ref:function(S){S&&!i.sectorRefs.includes(S)&&i.sectorRefs.push(S)},tabIndex:-1,className:"recharts-pie-sector"},mt(i.props,u,p),{key:"sector-".concat(u?.startAngle,"-").concat(u?.endAngle,"-").concat(u.midAngle,"-").concat(p)}),C.createElement(Vn,we({option:A,isActive:y,shapeType:"sector"},k)))})}},{key:"renderSectorsWithAnimation",value:function(){var n=this,i=this.props,o=i.sectors,s=i.isAnimationActive,c=i.animationBegin,l=i.animationDuration,u=i.animationEasing,p=i.animationId,y=this.state,j=y.prevSectors,A=y.prevIsAnimationActive;return C.createElement(er,{begin:c,duration:l,isActive:s,easing:u,from:{t:0},to:{t:1},key:"pie-".concat(p,"-").concat(A),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(k){var f=k.t,S=[],w=o&&o[0],g=w.startAngle;return o.forEach(function(O,P){var N=j&&j[P],I=P>0?tr(O,"paddingAngle",0):0;if(N){var v=kt(N.endAngle-N.startAngle,O.endAngle-O.startAngle),d=$($({},O),{},{startAngle:g+I,endAngle:g+v(f)+I});S.push(d),g=d.endAngle}else{var m=O.endAngle,x=O.startAngle,R=kt(0,m-x),_=R(f),h=$($({},O),{},{startAngle:g+I,endAngle:g+_+I});S.push(h),g=h.endAngle}}),C.createElement(V,null,n.renderSectorsStatically(S))})}},{key:"attachKeyboardHandlers",value:function(n){var i=this;n.onkeydown=function(o){if(!o.altKey)switch(o.key){case"ArrowLeft":{var s=++i.state.sectorToFocus%i.sectorRefs.length;i.sectorRefs[s].focus(),i.setState({sectorToFocus:s});break}case"ArrowRight":{var c=--i.state.sectorToFocus<0?i.sectorRefs.length-1:i.state.sectorToFocus%i.sectorRefs.length;i.sectorRefs[c].focus(),i.setState({sectorToFocus:c});break}case"Escape":{i.sectorRefs[i.state.sectorToFocus].blur(),i.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var n=this.props,i=n.sectors,o=n.isAnimationActive,s=this.state.prevSectors;return o&&i&&i.length&&(!s||!nr(s,i))?this.renderSectorsWithAnimation():this.renderSectorsStatically(i)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var n=this,i=this.props,o=i.hide,s=i.sectors,c=i.className,l=i.label,u=i.cx,p=i.cy,y=i.innerRadius,j=i.outerRadius,A=i.isAnimationActive,k=this.state.isAnimationFinished;if(o||!s||!s.length||!Se(u)||!Se(p)||!Se(y)||!Se(j))return null;var f=le("recharts-pie",c);return C.createElement(V,{tabIndex:this.props.rootTabIndex,className:f,ref:function(w){n.pieRef=w}},this.renderSectors(),l&&this.renderLabels(s),nn.renderCallByParent(this.props,null,!1),(!A||k)&&rr.renderCallByParent(this.props,s,!1))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return i.prevIsAnimationActive!==n.isAnimationActive?{prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,curSectors:n.sectors,prevSectors:[],isAnimationFinished:!0}:n.isAnimationActive&&n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curSectors:n.sectors,prevSectors:i.curSectors,isAnimationFinished:!0}:n.sectors!==i.curSectors?{curSectors:n.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(n,i){return n>i?"start":n<i?"end":"middle"}},{key:"renderLabelLineItem",value:function(n,i,o){if(C.isValidElement(n))return C.cloneElement(n,i);if(xe(n))return n(i);var s=le("recharts-pie-label-line",typeof n!="boolean"?n.className:"");return C.createElement(Xn,we({},i,{key:o,type:"linear",className:s}))}},{key:"renderLabelItem",value:function(n,i,o){if(C.isValidElement(n))return C.cloneElement(n,i);var s=o;if(xe(n)&&(s=n(i),C.isValidElement(s)))return s;var c=le("recharts-pie-label-text",typeof n!="boolean"&&!xe(n)?n.className:"");return C.createElement(ft,we({},i,{alignmentBaseline:"middle",className:c}),s)}}])})(b.PureComponent);He=ee;Q(ee,"displayName","Pie");Q(ee,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!ir.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});Q(ee,"parseDeltaAngle",function(e,t){var r=Ke(t-e),n=Math.min(Math.abs(t-e),360);return r*n});Q(ee,"getRealPieData",function(e){var t=e.data,r=e.children,n=B(e,!1),i=or(r,sr);return t&&t.length?t.map(function(o,s){return $($($({payload:o},n),o),i&&i[s]&&i[s].props)}):i&&i.length?i.map(function(o){return $($({},n),o.props)}):[]});Q(ee,"parseCoordinateOfPie",function(e,t){var r=t.top,n=t.left,i=t.width,o=t.height,s=lr(i,o),c=n+Fe(e.cx,i,i/2),l=r+Fe(e.cy,o,o/2),u=Fe(e.innerRadius,s,0),p=Fe(e.outerRadius,s,s*.8),y=e.maxRadius||Math.sqrt(i*i+o*o)/2;return{cx:c,cy:l,innerRadius:u,outerRadius:p,maxRadius:y}});Q(ee,"getComposedData",function(e){var t=e.item,r=e.offset,n=t.type.defaultProps!==void 0?$($({},t.type.defaultProps),t.props):t.props,i=He.getRealPieData(n);if(!i||!i.length)return null;var o=n.cornerRadius,s=n.startAngle,c=n.endAngle,l=n.paddingAngle,u=n.dataKey,p=n.nameKey,y=n.valueKey,j=n.tooltipType,A=Math.abs(n.minAngle),k=He.parseCoordinateOfPie(n,r),f=He.parseDeltaAngle(s,c),S=Math.abs(f),w=u;Te(u)&&Te(y)?(St(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),w="value"):Te(u)&&(St(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),w=y);var g=i.filter(function(d){return je(d,w,0)!==0}).length,O=(S>=360?g:g-1)*l,P=S-g*A-O,N=i.reduce(function(d,m){var x=je(m,w,0);return d+(Se(x)?x:0)},0),I;if(N>0){var v;I=i.map(function(d,m){var x=je(d,w,0),R=je(d,p,m),_=(Se(x)?x:0)/N,h;m?h=v.endAngle+Ke(f)*l*(x!==0?1:0):h=s;var U=h+Ke(f)*((x!==0?A:0)+_*P),ce=(h+U)/2,ue=(k.innerRadius+k.outerRadius)/2,ze=[{name:R,value:x,payload:d,dataKey:w,type:j}],Xe=ae(k.cx,k.cy,ue,ce);return v=$($($({percent:_,cornerRadius:o,name:R,tooltipPayload:ze,midAngle:ce,middleRadius:ue,tooltipPosition:Xe},d),k),{},{value:je(d,w),startAngle:h,endAngle:U,payload:d,paddingAngle:Ke(f)*l}),v})}return $($({},k),{},{sectors:I,data:i})});var ka=cr({chartName:"PieChart",GraphicalChild:ee,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:Je},{axisType:"radiusAxis",AxisComp:Ye}],formatAxisMap:ur,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),Sa=function(t){var r=t.customCategories,n=t.active,i=t.payload,o=t.valueFormatter;if(n&&i!==null&&i!==void 0&&i[0]){var s=i?.[0];return a.jsx(dr,{children:a.jsx(T,{paddingBlock:8,paddingInline:16,children:a.jsx(pr,{color:s.payload.color,name:r?.[s.name]||s.name,value:o(s.value)})})})}return null},Aa=function(t,r){return fr(t.map(function(n){return n[r]}))},wa=function(t,r,n,i){return t||r(Aa(n,i))},Bt=function(t){var r=t.cx,n=t.cy,i=t.innerRadius,o=t.outerRadius,s=t.startAngle,c=t.endAngle,l=t.className;return a.jsx("g",{children:a.jsx(mr,{className:l,cx:r,cy:n,endAngle:c,fill:"",innerRadius:i,opacity:.3,outerRadius:o,startAngle:s,style:{outline:"none"}})})},Ft,Mt,Kt,Wt;function Me(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Ht=te(function(e){var t=e.css,r=e.cssVar;return{emphasis:t(Ft||(Ft=Me([`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `]))),gridLines:t(Mt||(Mt=Me([`
    stroke: `,`;
    stroke-width: 1;
  `])),r.colorBorderSecondary),label:t(Kt||(Kt=Me([`
    font-size: 12px;
    line-height: 16px;
    fill: `,`;
  `])),r.colorTextDescription),strongLabel:t(Wt||(Wt=Me([`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    fill: `,`;
  `])),r.colorTextSecondary)}});function De(e){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},De(e)}var Ut,Ta=["data","category","index","colors","variant","valueFormatter","label","showLabel","animationDuration","showAnimation","showTooltip","noDataText","onValueChange","customTooltip","className","width","loading","height","style","customCategories","donutLabel"];function Ca(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function qt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qt(Object(r),!0).forEach(function(n){fn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fn(e,t,r){return t=Oa(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Oa(e){var t=Ra(e,"string");return De(t)=="symbol"?t:String(t)}function Ra(e,t){if(De(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(De(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pa(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=mn(e))||t){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,c;return{s:function(){r=r.call(e)},n:function(){var u=r.next();return o=u.done,u},e:function(u){s=!0,c=u},f:function(){try{!o&&r.return!=null&&r.return()}finally{if(s)throw c}}}}function _a(e,t){return Ia(e)||Na(e,t)||mn(e,t)||$a()}function $a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mn(e,t){if(e){if(typeof e=="string")return Gt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Gt(e,t)}}function Gt(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Na(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,o,s,c=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(l=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(p){u=!0,i=p}finally{try{if(!l&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw i}}return c}}function Ia(e){if(Array.isArray(e))return e}function Ea(e,t){if(e==null)return{};var r=La(e,t),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function La(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var hn=b.forwardRef(function(e,t){var r,n=hr(),i=e.data,o=i===void 0?[]:i,s=e.category,c=s===void 0?"value":s,l=e.index,u=l===void 0?"name":l,p=e.colors,y=p===void 0?n:p,j=e.variant,A=j===void 0?"donut":j,k=e.valueFormatter,f=k===void 0?yr:k,S=e.label,w=e.showLabel,g=w===void 0?!0:w,O=e.animationDuration,P=O===void 0?900:O,N=e.showAnimation,I=N===void 0?!1:N,v=e.showTooltip,d=v===void 0?!0:v,m=e.noDataText,x=e.onValueChange,R=e.customTooltip,_=e.className,h=e.width,U=h===void 0?"100%":h,ce=e.loading,ue=e.height,ze=ue===void 0?"10rem":ue,Xe=e.style,ht=e.customCategories,gn=e.donutLabel,xn=Ea(e,Ta),vn=Cn(),yn=vn.isDarkMode,gt=R,Be=A==="donut",bn=wa(S,f,o,c),jn=b.useState(),xt=_a(jn,2),de=xt[0],Ve=xt[1],vt=!!x;if(b.useEffect(function(){if(!gr){var pe=document.querySelectorAll(".recharts-pie-sector");if(pe){var Y=Pa(pe),J;try{for(Y.s();!(J=Y.n()).done;){var F=J.value;F.setAttribute("style","outline: none")}}catch(ye){Y.e(ye)}finally{Y.f()}}}},[de]),ce||!o)return a.jsx(Zn.Block,{active:!0,height:ze,width:U});var kn=function(Y,J,F){F.stopPropagation(),vt&&(de===J?(Ve(void 0),x?.(null)):(Ve(J),x?.(oe({eventType:"slice"},Y.payload.payload))))},yt=function(Y,J){return Y.map(function(F,ye){var ie=ye<J.length?J[ye]:E.colorPrimary;return oe(oe({},F),{},{className:L(On(Ut||(Ut=Ca([`
          fill: `,`;
        `])),ie??E.colorPrimary)),color:ie,fill:""})})};return a.jsx(T,oe(oe({className:_,height:ze,ref:t,style:oe({position:"relative"},Xe),width:U},xn),{},{children:a.jsx(xr,{children:o!=null&&o.length?a.jsxs(ka,{margin:{bottom:0,left:0,right:0,top:0},onClick:vt&&de?function(){Ve(void 0),x?.(null)}:void 0,children:[g&&Be?a.jsx("text",{className:L(Ht.strongLabel,Ht.emphasis),dominantBaseline:"middle",textAnchor:"middle",x:"50%",y:"50%",children:gn||(typeof de=="number"?f(o==null||(r=o[de])===null||r===void 0?void 0:r[c]):bn)}):null,a.jsx(ee,{activeIndex:de,animationDuration:P,cx:"50%",cy:"50%",data:yt(o,y),dataKey:c,endAngle:-270,inactiveShape:Bt,innerRadius:Be?"75%":"0%",isAnimationActive:I,nameKey:u,onClick:kn,outerRadius:"100%",startAngle:90,stroke:"",strokeLinejoin:"round",style:{cursor:x?"pointer":void 0,outline:"none",stroke:E.colorBgContainer}}),Be&&a.jsx(ee,{activeIndex:de,animationDuration:P,cx:"50%",cy:"50%",data:yt([fn({},c,1)],[yn?"color-mix(in srgb, #000000 33%, transparent)":"color-mix(in srgb, #000000 10%, transparent)"]),dataKey:c,endAngle:-270,inactiveShape:Bt,innerRadius:Be?"75%":"0%",isAnimationActive:!1,nameKey:u,outerRadius:"80%",startAngle:90,stroke:"",strokeLinejoin:"round",style:{outline:"none",pointerEvents:"none"}}),a.jsx(vr,{content:d?function(pe){var Y,J=pe.active,F=pe.payload;return gt?a.jsx(gt,{active:J,customCategories:ht,label:F==null||(Y=F[0])===null||Y===void 0?void 0:Y.name,payload:F?.map(function(ye){var ie,be;return oe(oe({},ye),{},{color:(ie=F==null||(be=F[0])===null||be===void 0||(be=be.payload)===null||be===void 0?void 0:be.color)!==null&&ie!==void 0?ie:E.colorPrimary})}),valueFormatter:f}):a.jsx(Sa,{active:J,customCategories:ht,payload:F,valueFormatter:f})}:void 0,isAnimationActive:!1,wrapperStyle:{outline:"none"}})]}):a.jsx(br,{noDataText:m})})}))});hn.displayName="DonutChart";const se=te(({css:e,cssVar:t})=>({axisLabel:e`
    pointer-events: none;
    position: absolute;
    font-size: 11px;
    color: ${t.colorTextTertiary};
  `,dot:e`
    cursor: pointer;
    transition: all 0.15s ease;

    &:hover {
      transform: translate(-50%, 50%) scale(1.5);
      opacity: 1 !important;
    }
  `,scatterArea:e`
    position: relative;
    overflow: hidden;
    flex: 1;
  `,tooltipLabel:e`
    color: ${t.colorTextTertiary};
  `})),Da=b.memo(({results:e,benchmarkId:t,runId:r})=>{const{t:n}=Z("eval"),i=lt(),{maxDuration:o,maxTokens:s,scatterData:c}=b.useMemo(()=>{if(!e||e.length===0)return{maxDuration:0,maxTokens:0,scatterData:[]};let l=0,u=0;const p=e.map(y=>{const j=(y.evalResult?.duration||0)/1e3,A=y.evalResult?.tokens||0,k=y.evalResult?.cost,f=y.status,S=y.testCase?.content?.input||"",w=y.testCase?.content?.expected||"",g=y.testCase?.sortOrder,O=y.testCaseId||"";return j>l&&(l=j),A>u&&(u=A),{cost:k,duration:j,expected:w,input:S,sortOrder:g,status:f,testCaseId:O,tokens:A}});return{maxDuration:l,maxTokens:u,scatterData:p}},[e]);return!e||e.length===0?null:a.jsxs("div",{className:se.scatterArea,children:[a.jsxs("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 100",style:{height:"100%",insetBlockStart:0,insetInlineStart:0,position:"absolute",width:"100%"},children:[a.jsx("line",{stroke:i.colorBorder,strokeWidth:"0.5",x1:"0",x2:"100",y1:"100",y2:"100"}),a.jsx("line",{stroke:i.colorBorder,strokeWidth:"0.5",x1:"0",x2:"0",y1:"0",y2:"100"}),[1,2,3].map(l=>a.jsx("line",{stroke:i.colorBorder,strokeDasharray:"2 2",strokeOpacity:"0.5",strokeWidth:"0.5",x1:"0",x2:"100",y1:100-l*25,y2:100-l*25},l))]}),c.map((l,u)=>{const p=l.tokens/(s||1)*92+4,y=l.duration/(o||1)*88+6,j=l.status==="passed"?i.colorSuccess:l.status==="error"?i.colorWarning:i.colorError,A=l.status==="passed"?"green":l.status==="error"?"orange":"red",k=l.status==="passed"?n("run.chart.pass"):l.status==="error"?n("run.chart.error"):n("run.chart.fail"),f=l.input.length>60?l.input.slice(0,60)+"...":l.input,S=l.expected.length>60?l.expected.slice(0,60)+"...":l.expected,w=`/eval/bench/${t}/runs/${r}/cases/${l.testCaseId}`;return a.jsx(re,{title:a.jsxs(T,{gap:4,style:{fontSize:12,maxWidth:320},children:[a.jsxs(T,{horizontal:!0,align:"center",gap:6,justify:"space-between",children:[a.jsxs(T,{horizontal:!0,align:"center",gap:6,children:[a.jsxs("span",{style:{fontWeight:600},children:["#",l.sortOrder??u+1]}),a.jsx(Ne,{color:A,size:"small",children:k})]}),a.jsxs("span",{className:se.tooltipLabel,children:[l.duration.toFixed(2),"s"]})]}),f&&a.jsx("div",{style:{lineHeight:1.4,wordBreak:"break-all"},children:f}),S&&a.jsx("div",{className:se.tooltipLabel,style:{lineHeight:1.4,wordBreak:"break-all"},children:S}),a.jsx(Rn,{style:{margin:"2px 0"}}),a.jsxs(T,{horizontal:!0,gap:16,children:[a.jsxs("div",{children:[a.jsxs("span",{className:se.tooltipLabel,children:[n("run.chart.tokens"),": "]}),Ee(l.tokens)]}),l.cost!==void 0&&a.jsxs("div",{children:[a.jsxs("span",{className:se.tooltipLabel,children:[n("run.metrics.cost"),": "]}),"$",Ie(l.cost)]})]})]}),children:a.jsx("div",{className:se.dot,style:{background:j,borderRadius:"50%",bottom:`${y}%`,height:7,left:`${p}%`,opacity:.8,position:"absolute",transform:"translate(-50%, 50%)",width:7},onClick:()=>window.open(w,"_blank")})},u)}),a.jsx("span",{className:se.axisLabel,style:{bottom:2,right:4},children:n("run.chart.tokens")}),a.jsx("span",{className:se.axisLabel,style:{left:4,top:0},children:n("run.chart.duration")})]})}),za=b.memo(({passedCases:e,failedCases:t,errorCases:r})=>{const{t:n}=Z("eval"),i=lt(),o=[{name:n("run.chart.pass"),value:e},{name:n("run.chart.fail"),value:t},...r>0?[{name:n("run.chart.error"),value:r}]:[]],s=[i.colorSuccess,i.colorFill,...r>0?[i.colorWarning]:[]];return a.jsx(hn,{category:"value",colors:s,data:o,index:"name",style:{height:200},variant:"pie"})}),q=te(({css:e,cssVar:t})=>({chartCard:e`
    padding: 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: 12px;
    background: ${t.colorBgContainer};
  `,chartTitle:e`
    margin-block-end: 12px;
    font-size: 14px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,legendDot:e`
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `,legendText:e`
    color: ${t.colorTextSecondary};
  `,totalCount:e`
    padding-block: 1px;
    padding-inline: 6px;
    border-radius: 4px;

    font-size: 11px;
    font-weight: 600;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillSecondary};
  `})),Ba=b.memo(({results:e,benchmarkId:t,runId:r})=>{const{t:n}=Z("eval"),i=lt(),{errorCases:o,failedCases:s,histogramData:c,passedCases:l}=b.useMemo(()=>{if(!e||e.length===0)return{errorCases:0,failedCases:0,histogramData:[],passedCases:0};let A=0,k=0,f=0;const S=[];for(const g of e){const O=(g.evalResult?.duration||0)/1e3,P=g.status;P==="passed"?A++:P==="error"?f++:P==="failed"&&k++,S.push({duration:O,status:P})}const w=[{error:0,failed:0,max:60,passed:0,range:"<1min"},{error:0,failed:0,max:180,passed:0,range:"1~3min"},{error:0,failed:0,max:300,passed:0,range:"3~5min"},{error:0,failed:0,max:1/0,passed:0,range:">5min"}];for(const g of S){const O=g.duration<60?0:g.duration<180?1:g.duration<300?2:3;g.status==="passed"?w[O].passed++:g.status==="error"?w[O].error++:w[O].failed++}return{errorCases:f,failedCases:k,histogramData:w,passedCases:A}},[e]),u=n("run.chart.pass"),p=n("run.chart.fail"),y=n("run.chart.error"),j=b.useMemo(()=>c.map(A=>({[y]:A.error,[p]:A.failed,[u]:A.passed,range:A.range})),[c,u,p,y]);return!e||e.length===0?null:a.jsxs(T,{horizontal:!0,gap:16,style:{height:320},children:[a.jsxs(T,{className:q.chartCard,flex:1,children:[a.jsx("div",{className:q.chartTitle,children:n("run.chart.passFailError")}),a.jsx(T,{align:"center",flex:1,justify:"center",children:a.jsx(za,{errorCases:o,failedCases:s,passedCases:l})})]}),a.jsxs(T,{className:q.chartCard,flex:2,children:[a.jsxs(T,{horizontal:!0,justify:"space-between",style:{marginBlockEnd:12},children:[a.jsx("span",{className:q.chartTitle,style:{marginBlockEnd:0},children:n("run.chart.latencyTokenDistribution")}),a.jsxs(T,{horizontal:!0,gap:12,style:{fontSize:11},children:[a.jsxs(T,{horizontal:!0,align:"center",gap:4,children:[a.jsx("div",{className:q.legendDot,style:{background:i.colorSuccess}}),a.jsx("span",{className:q.legendText,children:n("run.chart.pass")})]}),a.jsxs(T,{horizontal:!0,align:"center",gap:4,children:[a.jsx("div",{className:q.legendDot,style:{background:i.colorFill}}),a.jsx("span",{className:q.legendText,children:n("run.chart.fail")})]}),a.jsxs(T,{horizontal:!0,align:"center",gap:4,children:[a.jsx("div",{className:q.legendDot,style:{background:i.colorWarning}}),a.jsx("span",{className:q.legendText,children:n("run.chart.error")})]})]})]}),a.jsx(Da,{benchmarkId:t,results:e,runId:r})]}),a.jsxs(T,{className:q.chartCard,flex:1,children:[a.jsxs(T,{horizontal:!0,align:"center",className:q.chartTitle,gap:6,children:[a.jsx("span",{children:n("run.chart.latencyDistribution")}),a.jsx("span",{className:q.totalCount,children:e.length})]}),a.jsx(jr,{stack:!0,categories:[u,p,y],colors:[i.colorSuccess,i.colorFill,i.colorWarning],data:j,index:"range",showLegend:!1,showYAxis:!1})]})]})}),M=te(({css:e,cssVar:t})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;

    color: ${t.colorTextSecondary};

    background: ${t.colorFillTertiary};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: 13px;
    color: ${t.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: 8px;
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${t.colorSuccess};
    background: ${t.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${t.purple};
    background: ${t.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 50%;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;
  `})),Fa=b.memo(({run:e})=>{const{t}=Z("eval"),{modal:r,message:n}=ct.useApp(),i=G(l=>l.startRun),[o,s]=b.useState(!1),c=()=>{r.confirm({content:t("run.actions.start.confirm"),okText:t("run.actions.start"),onOk:async()=>{try{s(!0),await i(e.id,e.status!=="idle")}catch(l){n.error(l?.message||"Failed to start run")}finally{s(!1)}},title:t("run.actions.start")})};return a.jsxs("div",{className:M.container,children:[a.jsxs("div",{className:M.orbitGroup,children:[a.jsx("div",{className:L(M.orbit,M.orbit1)}),a.jsx("div",{className:L(M.orbit,M.orbit2)}),a.jsx("div",{className:L(M.orbit,M.orbit3)}),a.jsx("div",{className:L(M.icon,M.icon1),children:a.jsx(H,{icon:ut,size:16})}),a.jsx("div",{className:L(M.icon,M.icon2),children:a.jsx(H,{icon:dt,size:16})}),a.jsx("div",{className:L(M.icon,M.icon3),children:a.jsx(H,{icon:pt,size:16})}),a.jsx("div",{className:M.center,children:a.jsx(H,{icon:Le,size:18})})]}),a.jsx("div",{className:M.hint,children:t("run.idle.hint")}),a.jsx(Pn,{icon:a.jsx(Le,{size:14}),loading:o,style:{marginTop:12},type:"primary",onClick:c,children:t("run.actions.start")})]})}),K=te(({css:e,cssVar:t})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;

    color: ${t.colorWarning};

    background: ${t.colorWarningBg};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: 13px;
    color: ${t.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: 8px;
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${t.colorSuccess};
    background: ${t.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${t.purple};
    background: ${t.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px dashed ${t.colorBorderSecondary};
    border-radius: 50%;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;
  `})),Zt=b.memo(({hint:e})=>a.jsxs("div",{className:K.container,children:[a.jsxs("div",{className:K.orbitGroup,children:[a.jsx("div",{className:L(K.orbit,K.orbit1)}),a.jsx("div",{className:L(K.orbit,K.orbit2)}),a.jsx("div",{className:L(K.orbit,K.orbit3)}),a.jsx("div",{className:L(K.icon,K.icon1),children:a.jsx(H,{icon:ut,size:16})}),a.jsx("div",{className:L(K.icon,K.icon2),children:a.jsx(H,{icon:dt,size:16})}),a.jsx("div",{className:L(K.icon,K.icon3),children:a.jsx(H,{icon:pt,size:16})}),a.jsx("div",{className:K.center,children:a.jsx(H,{icon:Vt,size:18})})]}),a.jsx("div",{className:K.hint,children:e})]})),D=te(({css:e,cssVar:t})=>({backLink:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    width: fit-content;

    font-size: 14px;
    color: ${t.colorTextTertiary};
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${t.colorText};
    }
  `,configSection:e`
    margin-block-start: 12px;
  `,configSectionLabel:e`
    margin-block-end: 8px;
    font-size: 12px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,systemRole:e`
    overflow: auto;

    max-height: 300px;
    padding: 12px;
    border-radius: 6px;

    font-size: 13px;

    background: ${t.colorFillQuaternary};
  `,configToggle:e`
    cursor: pointer;

    display: flex;
    gap: 4px;
    align-items: center;

    padding: 0;
    border: none;

    font-size: 12px;
    color: ${t.colorTextTertiary};

    background: transparent;

    transition: color 0.2s;

    &:hover {
      color: ${t.colorText};
    }
  `,datasetLink:e`
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${t.colorPrimary};
    }
  `,metaRow:e`
    flex-wrap: wrap;
    font-size: 13px;
    color: ${t.colorTextTertiary};
  `,modelText:e`
    font-family: monospace;
    font-size: 12px;
  `,separator:e`
    color: ${t.colorBorder};
  `,titleRow:e`
    margin-block-end: 16px;
  `})),Ma=b.memo(({run:e,benchmarkId:t,hideStart:r})=>{const{t:n}=Z("eval"),{modal:i,message:o}=ct.useApp(),s=_n(),c=G(h=>h.abortRun),l=G(h=>h.deleteRun),u=G(h=>h.startRun),p=e.status==="running"||e.status==="pending",y=e.status==="idle"||e.status==="failed"||e.status==="aborted",[j,A]=b.useState(!1),[k,f]=b.useState(!1),[S,w]=b.useState(!1),g=e.config?.agentSnapshot,O=e.targetAgent?.title||n("run.detail.agent.unnamed"),P=g?.avatar||e.targetAgent?.avatar,N=g?.model||e.targetAgent?.model,I=g?.provider||e.targetAgent?.provider,v=()=>{i.confirm({content:n("run.actions.abort.confirm"),okButtonProps:{danger:!0},okText:n("run.actions.abort"),onOk:()=>c(e.id),title:n("run.actions.abort")})},d=()=>{i.confirm({content:n("run.actions.delete.confirm"),okButtonProps:{danger:!0},okText:n("run.actions.delete"),onOk:async()=>{await l(e.id),s(`/eval/bench/${t}`)},title:n("run.actions.delete")})},m=()=>{i.confirm({content:n("run.actions.start.confirm"),okText:n("run.actions.start"),onOk:async()=>{try{A(!0),await u(e.id,e.status!=="idle")}catch(h){o.error(h?.message||"Failed to start run")}finally{A(!1)}},title:n("run.actions.start")})},x=()=>{e.targetAgentId&&window.open(Nn(e.targetAgentId),"_blank")},R=async()=>{try{await $n(e.id),o.success(n("run.detail.copyRunIdSuccess"))}catch{o.error(n("run.detail.copyRunIdFailed"))}},_=h=>h?(h instanceof Date?h:new Date(h)).toLocaleString():"";return a.jsxs(T,{gap:16,children:[a.jsxs(rt,{className:D.backLink,to:`/eval/bench/${t}`,children:[a.jsx(Dn,{size:16}),n("run.detail.backToBenchmark")]}),a.jsxs(We,{styles:{body:{padding:20}},children:[a.jsxs(T,{horizontal:!0,align:"center",className:D.titleRow,justify:"space-between",children:[a.jsxs(T,{gap:4,children:[a.jsxs(T,{horizontal:!0,align:"center",gap:8,children:[a.jsx(ge.Title,{level:4,style:{margin:0},children:e.name||e.id.slice(0,8)}),a.jsx(ke,{icon:zn,size:"small",title:n("run.detail.copyRunId"),onClick:R}),a.jsx(wr,{status:e.status})]}),a.jsxs(T,{horizontal:!0,align:"center",className:D.metaRow,gap:8,children:[e.dataset&&a.jsx(rt,{className:D.datasetLink,target:"_blank",to:`/eval/bench/${t}/datasets/${e.dataset.id}`,children:e.dataset.name}),e.targetAgentId&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:D.separator,children:"|"}),a.jsxs(T,{horizontal:!0,align:"center",gap:4,style:{cursor:"pointer"},onClick:x,children:[a.jsx(kr,{avatar:P,size:16}),a.jsx("span",{children:O})]})]}),N&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:D.separator,children:"|"}),a.jsxs("span",{className:D.modelText,children:[I?`${I} / `:"",N]})]}),e.createdAt&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:D.separator,children:"|"}),a.jsx("span",{children:_(e.createdAt)})]})]})]}),a.jsxs(T,{horizontal:!0,align:"center",gap:8,children:[y&&!r&&a.jsx($e,{icon:a.jsx(Le,{size:14}),loading:j,type:"primary",onClick:m,children:n("run.actions.start")}),a.jsx(ke,{icon:Bn,size:"small",title:n("run.actions.edit"),onClick:()=>w(!0)}),p&&a.jsx(ke,{icon:Fn,size:"small",title:n("run.actions.abort"),onClick:v}),a.jsx(ke,{icon:Mn,size:"small",title:n("run.actions.delete"),onClick:d})]})]}),a.jsxs("button",{className:D.configToggle,onClick:()=>f(!k),children:[k?a.jsx(Kn,{size:12}):a.jsx(Wn,{size:12}),n("run.detail.configSnapshot")]}),k&&g&&a.jsxs(T,{gap:0,children:[g.systemRole&&a.jsxs("div",{className:D.configSection,children:[a.jsx("div",{className:D.configSectionLabel,children:"System Role"}),a.jsx("div",{className:D.systemRole,children:a.jsx(Sr,{variant:"chat",children:g.systemRole})})]}),g.plugins&&g.plugins.length>0&&a.jsxs("div",{className:D.configSection,children:[a.jsx("div",{className:D.configSectionLabel,children:"Plugins"}),a.jsx(T,{horizontal:!0,gap:4,wrap:"wrap",children:g.plugins.map(h=>a.jsx(Yt,{children:h},h))})]}),(g.chatConfig||g.params)&&a.jsx("div",{className:D.configSection,children:a.jsxs(T,{horizontal:!0,gap:12,children:[g.chatConfig&&a.jsxs(T,{flex:1,gap:0,style:{minWidth:0},children:[a.jsx("div",{className:D.configSectionLabel,children:"Chat Config"}),a.jsx(bt,{language:"json",style:{fontSize:12,maxHeight:300,overflow:"auto"},variant:"filled",children:JSON.stringify(g.chatConfig,null,2)})]}),g.params&&a.jsxs(T,{flex:1,gap:0,style:{minWidth:0},children:[a.jsx("div",{className:D.configSectionLabel,children:"Params"}),a.jsx(bt,{language:"json",style:{fontSize:12,maxHeight:300,overflow:"auto"},variant:"filled",children:JSON.stringify(g.params,null,2)})]})]})})]})]}),a.jsx(Ar,{open:S,run:e,onClose:()=>w(!1)})]})}),z=te(({css:e,cssVar:t})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;

    color: ${t.colorTextSecondary};

    background: ${t.colorFillTertiary};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: 13px;
    color: ${t.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: 8px;
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${t.colorSuccess};
    background: ${t.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${t.purple};
    background: ${t.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px dashed ${t.colorBorderSecondary};
    border-radius: 50%;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;

    @keyframes orbit-spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: orbit-spin 20s linear infinite;
  `,spinner:e`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: spin 1.5s linear infinite;
  `})),Ka=b.memo(()=>{const{t:e}=Z("eval");return a.jsxs("div",{className:z.container,children:[a.jsxs("div",{className:z.orbitGroup,children:[a.jsx("div",{className:L(z.orbit,z.orbit1)}),a.jsx("div",{className:L(z.orbit,z.orbit2)}),a.jsx("div",{className:L(z.orbit,z.orbit3)}),a.jsx("div",{className:L(z.icon,z.icon1),children:a.jsx(H,{icon:ut,size:16})}),a.jsx("div",{className:L(z.icon,z.icon2),children:a.jsx(H,{icon:dt,size:16})}),a.jsx("div",{className:L(z.icon,z.icon3),children:a.jsx(H,{icon:pt,size:16})}),a.jsx("div",{className:z.center,children:a.jsx(H,{className:z.spinner,icon:Hn,size:18})})]}),a.jsx("div",{className:z.hint,children:e("run.running.hint")})]})}),X=te(({css:e,cssVar:t})=>({card:e`
    padding: 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: 8px;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 8px;
  `,label:e`
    font-size: 13px;
    color: ${t.colorTextTertiary};
  `,subtitle:e`
    font-size: 14px;
    color: ${t.colorTextSecondary};
  `,subtitleUnit:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,value:e`
    font-size: 24px;
    font-weight: bold;
  `,valueSuffix:e`
    font-size: 16px;
    color: ${t.colorTextTertiary};
  `})),Wa=b.memo(({metrics:e})=>{const{t}=Z("eval"),r=e?.passedCases??0,n=e?.totalCases??0,i=[{bgColor:E.colorSuccessBg,color:E.colorSuccess,icon:Un,label:t("run.metrics.passRate"),subtitle:n>0?a.jsxs(a.Fragment,{children:[r,"/",n," ",a.jsx("span",{className:X.subtitleUnit,children:t("table.filter.passed")})]}):void 0,value:e?.passRate!==void 0?`${Math.round(e.passRate*100)}%`:"-",valueSuffix:void 0},{bgColor:E.colorWarningBg,color:E.colorWarning,icon:Vt,label:t("run.metrics.duration"),subtitle:e?.totalDuration!==void 0&&n>0?a.jsxs(a.Fragment,{children:["~",At(e.totalDuration/n)," ",a.jsx("span",{className:X.subtitleUnit,children:t("run.metrics.perCase")})]}):void 0,value:e?.duration!==void 0?At(e.duration):"-"},{bgColor:E.colorPrimaryBg,color:E.colorPrimary,icon:qn,label:t("run.metrics.cost"),subtitle:e?.perCaseCost!==void 0?a.jsxs(a.Fragment,{children:["~$",Ie(e.perCaseCost)," ",a.jsx("span",{className:X.subtitleUnit,children:t("run.metrics.perCase")})]}):void 0,value:e?.totalCost!==void 0?`$${Ie(e.totalCost)}`:"-"},{bgColor:E.colorInfoBg,color:E.colorInfo,icon:Gn,label:t("run.metrics.tokens"),subtitle:e?.perCaseTokens!==void 0?a.jsxs(a.Fragment,{children:["~",Ee(Math.round(e.perCaseTokens))," ",a.jsx("span",{className:X.subtitleUnit,children:t("run.metrics.perCase")})]}):void 0,value:e?.totalTokens!==void 0?Ee(e.totalTokens):"-"}];return a.jsx("div",{className:X.grid,children:i.map(o=>a.jsxs(T,{horizontal:!0,align:"center",className:X.card,gap:12,children:[a.jsx("div",{className:X.iconBox,style:{background:o.bgColor},children:a.jsx(H,{icon:o.icon,size:16,style:{color:o.color}})}),a.jsxs(T,{gap:2,children:[a.jsx("span",{className:X.label,children:o.label}),a.jsxs("span",{className:X.value,children:[o.value,o.valueSuffix&&a.jsx("span",{className:X.valueSuffix,children:o.valueSuffix})]}),o.subtitle&&a.jsx("span",{className:X.subtitle,children:o.subtitle})]})]},o.label))})}),Ha=3e3,Zi=b.memo(()=>{const{t:e}=Z("eval"),{modal:t}=ct.useApp(),{benchmarkId:r,runId:n}=In(),i=G(h=>h.useFetchRunDetail),o=G(h=>h.useFetchRunResults),s=G(h=>h.retryRunErrors),c=G(h=>h.retryRunCase),l=G(h=>h.resumeRunCase),u=G(h=>h.batchResumeRunCases),p=G(et.getRunDetailById(n)),y=G(et.getRunResultsById(n)),j=G(et.isRunActive(n)),[A,k]=b.useState(!1),[f,S]=b.useState(!1),w={refreshInterval:j?Ha:0};if(i(n,w),o(n,w),!p)return null;const g=!!y?.results?.length,O=p.status==="completed"||p.status==="failed"||p.status==="aborted",P=p.metrics,N=P?.completedCases??0,I=P?.totalCases??0,v=I>0?Math.round(N/I*100):0,d=I>0&&v<100,m=(P?.errorCases??0)+(P?.timeoutCases??0),x=O&&m>0,R=p.config?.k??1,_=(y?.results??[]).some(h=>!!an(h,R));return a.jsxs(T,{gap:24,padding:24,style:{margin:"0 auto",maxWidth:1440,width:"100%"},children:[a.jsx(Ma,{benchmarkId:r,hideStart:p.status==="idle",run:p}),O?a.jsxs(We,{styles:{body:{display:"flex",flexDirection:"column",gap:20,padding:20},header:{minHeight:"auto",padding:"12px 20px"}},title:a.jsx(ge.Text,{strong:!0,style:{fontSize:14},children:e("run.detail.report")}),children:[a.jsx(Wa,{metrics:p.metrics??void 0}),g&&a.jsx(Ba,{benchmarkId:r,results:y.results,runId:n})]}):a.jsx(We,{styles:{body:{alignItems:"center",display:"flex",justifyContent:"center",minHeight:430,padding:20},header:{minHeight:"auto",padding:"12px 20px"}},title:a.jsx(ge.Text,{strong:!0,style:{fontSize:14},children:e("run.detail.report")}),children:p.status==="running"?a.jsx(Ka,{}):p.status==="pending"?a.jsx(Zt,{hint:e("run.pending.hint")}):p.status==="external"?a.jsx(Zt,{hint:e("run.external.hint")}):a.jsx(Fa,{run:p})}),g&&a.jsx(We,{styles:{body:{padding:0},header:{padding:"12px 20px"}},extra:d||x||_?a.jsxs(T,{horizontal:!0,align:"center",gap:8,children:[d&&a.jsxs(a.Fragment,{children:[a.jsxs(ge.Text,{style:{fontSize:12,whiteSpace:"nowrap"},type:"secondary",children:[N,"/",I," ",e("run.detail.progressCases")]}),a.jsx(Tr,{percent:v,showInfo:!1,size:"small",status:j?"active":void 0,style:{margin:0,width:120}}),a.jsxs(ge.Text,{style:{fontSize:12},type:"secondary",children:[v,"%"]})]}),_&&a.jsx($e,{icon:a.jsx(Le,{size:14}),size:"small",onClick:()=>S(!0),children:e("run.actions.batchResume")}),x&&a.jsx($e,{icon:a.jsx(Xt,{size:14}),loading:A,size:"small",onClick:()=>{t.confirm({content:e("run.actions.retryErrors.confirm"),onOk:async()=>{k(!0);try{await s(n)}finally{k(!1)}},title:e("run.actions.retryErrors")})},children:e("run.actions.retryErrors")})]}):void 0,title:a.jsx(ge.Text,{strong:!0,style:{fontSize:14},children:e("run.detail.caseResults")}),children:a.jsx(Ir,{benchmarkId:r,k:R,results:y.results,runId:n,runStatus:p.status,onResumeCase:(h,U)=>l(n,h,U),onRetryCase:h=>c(n,h)})}),a.jsx(Or,{open:f,runId:n,onClose:()=>S(!1),onConfirm:h=>u(n,h)})]})});export{Zi as default};
