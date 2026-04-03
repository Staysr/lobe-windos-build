import{j as a,c as ie}from"../vendor/vendor-motion-DRC1LdIk.js";import{k as V,L as tt,F as b,T as $e,I as K,e5 as ke,W as Pe,au as vn,a_ as yn,o as I,j as ee,af as bn,m as N,ax as jn,aS as st,bU as kn,aT as lt,B as An,f as Sn,bt as Ut,iD as wn,bw as yt,cA as Tn,aX as On,aG as Pn}from"./index-BmW5CTHd.js";import{r as w,R as O,g as Gt}from"../vendor/vendor-emotion-D2wYcXAj.js";import{u as Q}from"./store-CO9_Allt.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import{e as _e,g as Ne}from"./format-CROJBBB8.js";import"./providerConfig-DdZ8yyMi.js";import{bO as Cn,cS as Zt,o as ct,bA as ut,dO as dt,t as nt,ab as Qt,bo as Rn,cM as $n,P as _n,cI as Nn,bq as In,da as Ln,b3 as Dn,_ as En,ae as zn,O as Bn,bP as Fn}from"../vendor/vendor-icons-Bjz-9Gdp.js";import{F as Mn}from"./Table-CTjCW2kP.js";import{B as le}from"./index-BAUyKJp6.js";import{S as Kn}from"./index-B4WS8tzo.js";import{f as E,r as Jt,a as Wn,b as Hn,i as pe,T as pt,p as te,L as J,g as Yt,c as ft,d as Xt,D as qn,C as Un,e as Ae,h as xe,S as Gn,A as Zn,j as Qn,k as bt,l as Jn,m as ye,n as Yn,u as Xn,G as Vn,o as Fe,q as er,s as tr,t as nr,v as ze,w as jt,x as rr,y as ar,z as ir,B as or,E as sr,F as lr,H as cr,I as ur,R as dr,J as pr,K as fr,N as mr,M as hr}from"./index-DDR6Tl9E.js";import{r as Vt}from"./_baseAssignValue-BEuvsmyU.js";import{A as gr}from"./index-CjltaXqJ.js";import{M as xr}from"./Markdown-X4PPeNQt.js";import{R as vr}from"./index-BiFeUURK.js";import{S as yr}from"./StatusBadge-CkGbpOWG.js";import{C as Me}from"./index-e8jwhXrr.js";import{T as ve}from"./index-Bd_-6ftR.js";import{a as kt}from"./utils-DdCRt2d3.js";import{r as Xe}from"./selectors-D8FoU16Z.js";import{P as br}from"./progress-BEDsdH5i.js";import"../i18n/i18n-zh-CN-CCQe7Zp1.js";import"../i18n/i18n-en-US-vCwQO2Oi.js";import"./index-CgzXQjhp.js";import"./useBubbleLock-BPwjL_yj.js";import"./index-Chg2RjB6.js";import"./useForm-BddH9m0f.js";import"./scrollTo-D5uCrSf8.js";import"./Pagination-BeXLtHqv.js";import"./index-B12EbR_j.js";import"./debounce-BRJQYKae.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-CkimUepr.js";import"./index-BDQRU9sz.js";import"./index-BT3CRne0.js";import"./Snippet-CYdrOilV.js";import"./Spotlight-B8XIfx08.js";import"./useTranslation-ByWlna2-.js";import"./image-nnCaCTxV.js";import"./index-CuJQstT7.js";import"./index-BcdkYTCP.js";import"./index-BbuTwi74.js";import"./ScrollShadow-bnBh_g2B.js";import"./index-DPyfkdm-.js";import"./AccordionItem-CEQe2Nmw.js";import"./index-BnepIK60.js";import"./row-B4JgmBB-.js";import"./index-ChM6vSmd.js";const M=ee(({css:e,cssVar:t})=>({caseLink:e`
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
  `})),jr=ee(({css:e,cssVar:t})=>({text:e`
    color: ${t.colorTextSecondary};
  `})),ce=w.memo(({children:e})=>a.jsx("span",{className:jr.text,children:e})),At=w.memo(({record:e})=>{const{t}=V("eval"),r=e.status;if(!r||r==="pending")return a.jsx(le,{status:"default",text:a.jsx(ce,{children:t("run.status.pending")})});if(r==="running")return a.jsx(le,{status:"processing",text:a.jsx(ce,{children:t("run.status.running")})});if(r==="passed")return a.jsx($e,{color:"green",children:t("table.filter.passed")});if(r==="failed")return a.jsx($e,{color:"red",children:t("table.filter.failed")});if(r==="error"){const n=e.evalResult?.error,i=a.jsx(le,{color:"orange",text:a.jsx(ce,{children:t("table.filter.error")})});return n?a.jsx(ke,{title:n,children:i}):i}if(r==="timeout")return a.jsx(le,{color:"orange",text:a.jsx(ce,{children:t("run.status.timeout")})});if(r==="external"){const n=a.jsx(le,{color:"purple",text:a.jsx(ce,{children:t("run.status.external")})});return a.jsx(ke,{title:t("run.status.external.tooltip"),children:n})}if(r==="completed"){const n=a.jsx(le,{color:"blue",text:a.jsx(ce,{children:t("run.status.completed")})});return a.jsx(ke,{title:t("run.status.completed.tooltip"),children:n})}return a.jsx(le,{status:"default",text:a.jsx(ce,{children:r})})}),kr=w.memo(({threads:e})=>a.jsx(b,{horizontal:!0,align:"center",gap:4,children:e.map(t=>{let r=I.colorTextTertiary;t.passed===!0?r=I.colorSuccess:t.passed===!1&&(r=I.colorError),t.status==="external"&&(r=I.colorWarning),t.status==="completed"&&(r=I.colorPrimary);const n=t.error?"error":t.passed===!0?"passed":t.passed===!1&&t.status!=="completed"?"failed":t.status==="external"?"Awaiting for external evaluation":t.status==="completed"?"completed":"pending";return a.jsx(ke,{title:n,children:a.jsx("span",{className:M.threadDot,style:{backgroundColor:r}})},t.threadId)})})),en=w.memo(({ms:e})=>{const t=e/1e3;if(t<60)return a.jsxs("span",{className:M.monoCell,children:[t.toFixed(1),"s"]});const r=Math.floor(t/60),n=Math.floor(t%60);return a.jsxs(b,{gap:2,children:[a.jsxs("span",{className:M.monoCell,children:[r,"m ",n,"s"]}),a.jsxs("span",{className:M.durationSub,children:[t.toFixed(1),"s"]})]})}),Ar=w.memo(({startTime:e})=>{const[t,r]=w.useState(()=>Date.now()-new Date(e).getTime());return w.useEffect(()=>{const n=setInterval(()=>{r(Date.now()-new Date(e).getTime())},100);return()=>clearInterval(n)},[e]),a.jsx(en,{ms:t})}),Sr=new Set(["error","failed","timeout"]),wr=new Set(["completed","failed","aborted"]),Tr=w.memo(({results:e,benchmarkId:t,runId:r,k:n=1,onRetryCase:i,runStatus:s})=>{const{t:o}=V("eval"),[u,l]=w.useState(""),[c,m]=w.useState("all"),[h,S]=w.useState(20),[j,v]=w.useState(null),d=n>1,y=i&&s&&wr.has(s),k=w.useMemo(()=>{let g=e;return u&&(g=g.filter(x=>x.testCase?.content?.input?.toLowerCase().includes(u.toLowerCase()))),c!=="all"&&(c==="pending"?g=g.filter(x=>!x.status||x.status==="pending"):c==="running"?g=g.filter(x=>x.status==="running"):g=g.filter(x=>x.status===c)),g},[e,u,c]),f=w.useMemo(()=>{const g=[{key:"index",render:(x,p,A)=>a.jsx("span",{className:M.indexCell,children:p.testCase?.sortOrder??A+1}),title:"#",width:48},{dataIndex:["testCase","content","input"],key:"input",render:(x,p)=>a.jsx(tt,{className:M.caseLink,to:`/eval/bench/${t}/runs/${r}/cases/${p.testCaseId}`,children:x}),title:o("table.columns.input")}];return d?g.push({key:"threads",render:(x,p)=>{const A=p.evalResult?.threads;return A?.length?a.jsx(kr,{threads:A}):a.jsx(At,{record:p})},title:o("table.columns.status"),width:60+n*12},{key:"passAtK",render:(x,p)=>{const A=p.evalResult?.passAtK,T=p.evalResult?.passAllK,P=A!=null,_=T!=null;return!P&&!_?"-":a.jsxs(b,{gap:2,children:[P&&(A?a.jsx($e,{color:"green",children:o("table.filter.passed")}):a.jsx($e,{color:"red",children:o("table.filter.failed")})),_&&a.jsxs("span",{className:M.durationSub,children:["^",n,": ",o(T?"table.filter.passed":"table.filter.failed")]})]})},title:`pass@${n}`,width:110}):g.push({key:"status",render:(x,p)=>a.jsx(At,{record:p}),title:o("table.columns.status"),width:100}),g.push({key:"duration",render:(x,p)=>{const A=p.evalResult?.duration;return A!=null?a.jsx(en,{ms:A}):p.status==="running"&&p.createdAt?a.jsx(Ar,{startTime:p.createdAt}):"-"},sortDirections:["descend","ascend"],sorter:(x,p)=>(x.evalResult?.duration??0)-(p.evalResult?.duration??0),title:o("table.columns.duration"),width:100},{key:"steps",render:(x,p)=>{const A=p.evalResult?.steps;if(A==null)return"-";const T=p.evalResult?.llmCalls,P=p.evalResult?.toolCalls,_=A,C=T??void 0,U=P??void 0,Y=C!==void 0||U!==void 0;return a.jsxs(b,{gap:2,children:[a.jsxs(b,{horizontal:!0,align:"center",gap:4,children:[a.jsx(K,{icon:Cn,size:12,style:{opacity:.5}}),a.jsx("span",{className:M.monoCell,children:_})]}),Y&&a.jsxs("span",{className:M.durationSub,children:[C??0," llm / ",U??0," tool"]})]})},sortDirections:["descend","ascend"],sorter:(x,p)=>(x.evalResult?.steps??0)-(p.evalResult?.steps??0),title:o("table.columns.steps"),width:120},{key:"cost",render:(x,p)=>{const A=p.evalResult?.cost,T=p.evalResult?.tokens,P=A!=null,_=T!=null;return!P&&!_?"-":a.jsxs(b,{gap:2,children:[P&&a.jsxs("span",{className:M.monoCell,children:["$",_e(A)]}),_&&a.jsxs("span",{className:M.durationSub,children:[Ne(T)," tokens"]})]})},sortDirections:["descend","ascend"],sorter:(x,p)=>(x.evalResult?.cost??0)-(p.evalResult?.cost??0),title:o("table.columns.cost"),width:120}),d&&g.push({key:"totalCost",render:(x,p)=>{const A=p.evalResult?.totalCost,T=p.evalResult?.totalTokens,P=A!=null,_=T!=null;return!P&&!_?"-":a.jsxs(b,{gap:2,children:[P&&a.jsxs("span",{className:M.monoCell,children:["$",_e(A)]}),_&&a.jsxs("span",{className:M.durationSub,children:[Ne(T)," tokens"]})]})},sortDirections:["descend","ascend"],sorter:(x,p)=>(x.evalResult?.totalCost??0)-(p.evalResult?.totalCost??0),title:o("table.columns.totalCost"),width:120}),y&&g.push({key:"actions",render:(x,p)=>{if(!Sr.has(p.status))return null;const A=j===p.testCaseId;return a.jsx(ke,{title:o("run.actions.retryCase"),children:a.jsx(Pe,{icon:Zt,loading:A,size:"small",onClick:async()=>{v(p.testCaseId);try{await i(p.testCaseId)}finally{v(null)}}})})},title:"",width:48}),g},[t,r,o,d,n,y,j,i]);return a.jsxs(b,{gap:0,children:[a.jsxs(b,{horizontal:!0,align:"center",className:M.filterBar,gap:8,children:[a.jsx(vn.Search,{allowClear:!0,placeholder:o("table.search.placeholder"),style:{width:240},onChange:g=>l(g.target.value)}),a.jsx(yn,{style:{width:120},value:c,options:[{label:o("table.filter.all"),value:"all"},{label:o("table.filter.passed"),value:"passed"},{label:o("table.filter.failed"),value:"failed"},{label:o("table.filter.error"),value:"error"},{label:o("table.filter.running"),value:"running"},{label:o("run.status.pending"),value:"pending"},{label:o("run.status.external"),value:"external"},{label:o("run.status.completed"),value:"completed"}],onChange:m}),a.jsx("span",{style:{color:I.colorTextTertiary,fontSize:12,whiteSpace:"nowrap"},children:o("table.total",{count:k.length})})]}),a.jsx(Mn,{columns:f,dataSource:k,rowKey:"testCaseId",size:"small",pagination:{pageSize:h,showSizeChanger:!0,size:"small",onShowSizeChange:(g,x)=>S(x)}})]})});var Or=["points","className","baseLinePoints","connectNulls"];function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},be.apply(this,arguments)}function Pr(e,t){if(e==null)return{};var r=Cr(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Cr(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function St(e){return Nr(e)||_r(e)||$r(e)||Rr()}function Rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $r(e,t){if(e){if(typeof e=="string")return rt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return rt(e,t)}}function _r(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nr(e){if(Array.isArray(e))return rt(e)}function rt(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var wt=function(t){return t&&t.x===+t.x&&t.y===+t.y},Ir=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=[[]];return t.forEach(function(n){wt(n)?r[r.length-1].push(n):r[r.length-1].length>0&&r.push([])}),wt(t[0])&&r[r.length-1].push(t[0]),r[r.length-1].length<=0&&(r=r.slice(0,-1)),r},Ce=function(t,r){var n=Ir(t);r&&(n=[n.reduce(function(s,o){return[].concat(St(s),St(o))},[])]);var i=n.map(function(s){return s.reduce(function(o,u,l){return"".concat(o).concat(l===0?"M":"L").concat(u.x,",").concat(u.y)},"")}).join("");return n.length===1?"".concat(i,"Z"):i},Lr=function(t,r,n){var i=Ce(t,n);return"".concat(i.slice(-1)==="Z"?i.slice(0,-1):i,"L").concat(Ce(r.reverse(),n).slice(1))},Dr=function(t){var r=t.points,n=t.className,i=t.baseLinePoints,s=t.connectNulls,o=Pr(t,Or);if(!r||!r.length)return null;var u=ie("recharts-polygon",n);if(i&&i.length){var l=o.stroke&&o.stroke!=="none",c=Lr(r,i,s);return O.createElement("g",{className:u},O.createElement("path",be({},E(o,!0),{fill:c.slice(-1)==="Z"?o.fill:"none",stroke:"none",d:c})),l?O.createElement("path",be({},E(o,!0),{fill:"none",d:Ce(r,s)})):null,l?O.createElement("path",be({},E(o,!0),{fill:"none",d:Ce(i,s)})):null)}var m=Ce(r,s);return O.createElement("path",be({},E(o,!0),{fill:m.slice(-1)==="Z"?o.fill:"none",className:u,d:m}))},Ve,Tt;function Er(){if(Tt)return Ve;Tt=1;var e=Jt(),t=Wn(),r=Vt();function n(i,s){return i&&i.length?e(i,r(s,2),t):void 0}return Ve=n,Ve}var zr=Er();const Br=Gt(zr);var et,Ot;function Fr(){if(Ot)return et;Ot=1;var e=Jt(),t=Vt(),r=Hn();function n(i,s){return i&&i.length?e(i,t(s,2),r):void 0}return et=n,et}var Mr=Fr();const Kr=Gt(Mr);var Wr=["cx","cy","angle","ticks","axisLine"],Hr=["ticks","tick","angle","tickFormatter","stroke"];function Se(e){"@babel/helpers - typeof";return Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Se(e)}function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Re.apply(this,arguments)}function Pt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pt(Object(r),!0).forEach(function(n){Ue(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ct(e,t){if(e==null)return{};var r=qr(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function qr(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Ur(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,nn(n.key),n)}}function Gr(e,t,r){return t&&Rt(e.prototype,t),r&&Rt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zr(e,t,r){return t=We(t),Qr(e,tn()?Reflect.construct(t,r||[],We(e).constructor):t.apply(e,r))}function Qr(e,t){if(t&&(Se(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Jr(e)}function Jr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tn(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(tn=function(){return!!e})()}function We(e){return We=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},We(e)}function Yr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&at(e,t)}function at(e,t){return at=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},at(e,t)}function Ue(e,t,r){return t=nn(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function nn(e){var t=Xr(e,"string");return Se(t)=="symbol"?t:t+""}function Xr(e,t){if(Se(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Se(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ge=(function(e){function t(){return Ur(this,t),Zr(this,t,arguments)}return Yr(t,e),Gr(t,[{key:"getTickValueCoord",value:function(n){var i=n.coordinate,s=this.props,o=s.angle,u=s.cx,l=s.cy;return te(u,l,i,o)}},{key:"getTickTextAnchor",value:function(){var n=this.props.orientation,i;switch(n){case"left":i="end";break;case"right":i="start";break;default:i="middle";break}return i}},{key:"getViewBox",value:function(){var n=this.props,i=n.cx,s=n.cy,o=n.angle,u=n.ticks,l=Br(u,function(m){return m.coordinate||0}),c=Kr(u,function(m){return m.coordinate||0});return{cx:i,cy:s,startAngle:o,endAngle:o,innerRadius:c.coordinate||0,outerRadius:l.coordinate||0}}},{key:"renderAxisLine",value:function(){var n=this.props,i=n.cx,s=n.cy,o=n.angle,u=n.ticks,l=n.axisLine,c=Ct(n,Wr),m=u.reduce(function(v,d){return[Math.min(v[0],d.coordinate),Math.max(v[1],d.coordinate)]},[1/0,-1/0]),h=te(i,s,m[0],o),S=te(i,s,m[1],o),j=ue(ue(ue({},E(c,!1)),{},{fill:"none"},E(l,!1)),{},{x1:h.x,y1:h.y,x2:S.x,y2:S.y});return O.createElement("line",Re({className:"recharts-polar-radius-axis-line"},j))}},{key:"renderTicks",value:function(){var n=this,i=this.props,s=i.ticks,o=i.tick,u=i.angle,l=i.tickFormatter,c=i.stroke,m=Ct(i,Hr),h=this.getTickTextAnchor(),S=E(m,!1),j=E(o,!1),v=s.map(function(d,y){var k=n.getTickValueCoord(d),f=ue(ue(ue(ue({textAnchor:h,transform:"rotate(".concat(90-u,", ").concat(k.x,", ").concat(k.y,")")},S),{},{stroke:"none",fill:c},j),{},{index:y},k),{},{payload:d});return O.createElement(J,Re({className:ie("recharts-polar-radius-axis-tick",Yt(o)),key:"tick-".concat(d.coordinate)},ft(n.props,d,y)),t.renderTickItem(o,f,l?l(d.value,y):d.value))});return O.createElement(J,{className:"recharts-polar-radius-axis-ticks"},v)}},{key:"render",value:function(){var n=this.props,i=n.ticks,s=n.axisLine,o=n.tick;return!i||!i.length?null:O.createElement(J,{className:ie("recharts-polar-radius-axis",this.props.className)},s&&this.renderAxisLine(),o&&this.renderTicks(),Xt.renderCallByParent(this.props,this.getViewBox()))}}],[{key:"renderTickItem",value:function(n,i,s){var o;return O.isValidElement(n)?o=O.cloneElement(n,i):pe(n)?o=n(i):o=O.createElement(pt,Re({},i,{className:"recharts-polar-radius-axis-tick-value"}),s),o}}])})(w.PureComponent);Ue(Ge,"displayName","PolarRadiusAxis");Ue(Ge,"axisType","radiusAxis");Ue(Ge,"defaultProps",{type:"number",radiusAxisId:0,cx:0,cy:0,angle:0,orientation:"right",stroke:"#ccc",axisLine:!0,tick:!0,tickCount:5,allowDataOverflow:!1,scale:"auto",allowDuplicatedCategory:!0});function we(e){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},we(e)}function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fe.apply(this,arguments)}function $t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$t(Object(r),!0).forEach(function(n){Ze(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$t(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Vr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,an(n.key),n)}}function ea(e,t,r){return t&&_t(e.prototype,t),r&&_t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ta(e,t,r){return t=He(t),na(e,rn()?Reflect.construct(t,r||[],He(e).constructor):t.apply(e,r))}function na(e,t){if(t&&(we(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ra(e)}function ra(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function rn(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(rn=function(){return!!e})()}function He(e){return He=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},He(e)}function aa(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&it(e,t)}function it(e,t){return it=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},it(e,t)}function Ze(e,t,r){return t=an(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function an(e){var t=ia(e,"string");return we(t)=="symbol"?t:t+""}function ia(e,t){if(we(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(we(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oa=Math.PI/180,Nt=1e-5,Qe=(function(e){function t(){return Vr(this,t),ta(this,t,arguments)}return aa(t,e),ea(t,[{key:"getTickLineCoord",value:function(n){var i=this.props,s=i.cx,o=i.cy,u=i.radius,l=i.orientation,c=i.tickSize,m=c||8,h=te(s,o,u,n.coordinate),S=te(s,o,u+(l==="inner"?-1:1)*m,n.coordinate);return{x1:h.x,y1:h.y,x2:S.x,y2:S.y}}},{key:"getTickTextAnchor",value:function(n){var i=this.props.orientation,s=Math.cos(-n.coordinate*oa),o;return s>Nt?o=i==="outer"?"start":"end":s<-Nt?o=i==="outer"?"end":"start":o="middle",o}},{key:"renderAxisLine",value:function(){var n=this.props,i=n.cx,s=n.cy,o=n.radius,u=n.axisLine,l=n.axisLineType,c=de(de({},E(this.props,!1)),{},{fill:"none"},E(u,!1));if(l==="circle")return O.createElement(qn,fe({className:"recharts-polar-angle-axis-line"},c,{cx:i,cy:s,r:o}));var m=this.props.ticks,h=m.map(function(S){return te(i,s,o,S.coordinate)});return O.createElement(Dr,fe({className:"recharts-polar-angle-axis-line"},c,{points:h}))}},{key:"renderTicks",value:function(){var n=this,i=this.props,s=i.ticks,o=i.tick,u=i.tickLine,l=i.tickFormatter,c=i.stroke,m=E(this.props,!1),h=E(o,!1),S=de(de({},m),{},{fill:"none"},E(u,!1)),j=s.map(function(v,d){var y=n.getTickLineCoord(v),k=n.getTickTextAnchor(v),f=de(de(de({textAnchor:k},m),{},{stroke:"none",fill:c},h),{},{index:d,payload:v,x:y.x2,y:y.y2});return O.createElement(J,fe({className:ie("recharts-polar-angle-axis-tick",Yt(o)),key:"tick-".concat(v.coordinate)},ft(n.props,v,d)),u&&O.createElement("line",fe({className:"recharts-polar-angle-axis-tick-line"},S,y)),o&&t.renderTickItem(o,f,l?l(v.value,d):v.value))});return O.createElement(J,{className:"recharts-polar-angle-axis-ticks"},j)}},{key:"render",value:function(){var n=this.props,i=n.ticks,s=n.radius,o=n.axisLine;return s<=0||!i||!i.length?null:O.createElement(J,{className:ie("recharts-polar-angle-axis",this.props.className)},o&&this.renderAxisLine(),this.renderTicks())}}],[{key:"renderTickItem",value:function(n,i,s){var o;return O.isValidElement(n)?o=O.cloneElement(n,i):pe(n)?o=n(i):o=O.createElement(pt,fe({},i,{className:"recharts-polar-angle-axis-tick-value"}),s),o}}])})(w.PureComponent);Ze(Qe,"displayName","PolarAngleAxis");Ze(Qe,"axisType","angleAxis");Ze(Qe,"defaultProps",{type:"category",angleAxisId:0,scale:"auto",cx:0,cy:0,orientation:"outer",axisLine:!0,tickLine:!0,tickSize:8,tick:!0,hide:!1,allowDuplicatedCategory:!0});var Ke;function Te(e){"@babel/helpers - typeof";return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Te(e)}function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},je.apply(this,arguments)}function It(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?It(Object(r),!0).forEach(function(n){q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):It(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,sn(n.key),n)}}function la(e,t,r){return t&&Lt(e.prototype,t),r&&Lt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function ca(e,t,r){return t=qe(t),ua(e,on()?Reflect.construct(t,r||[],qe(e).constructor):t.apply(e,r))}function ua(e,t){if(t&&(Te(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return da(e)}function da(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function on(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(on=function(){return!!e})()}function qe(e){return qe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},qe(e)}function pa(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ot(e,t)}function ot(e,t){return ot=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ot(e,t)}function q(e,t,r){return t=sn(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sn(e){var t=fa(e,"string");return Te(t)=="symbol"?t:t+""}function fa(e,t){if(Te(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Te(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var X=(function(e){function t(r){var n;return sa(this,t),n=ca(this,t,[r]),q(n,"pieRef",null),q(n,"sectorRefs",[]),q(n,"id",Xn("recharts-pie-")),q(n,"handleAnimationEnd",function(){var i=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),pe(i)&&i()}),q(n,"handleAnimationStart",function(){var i=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),pe(i)&&i()}),n.state={isAnimationFinished:!r.isAnimationActive,prevIsAnimationActive:r.isAnimationActive,prevAnimationId:r.animationId,sectorToFocus:0},n}return pa(t,e),la(t,[{key:"isActiveIndex",value:function(n){var i=this.props.activeIndex;return Array.isArray(i)?i.indexOf(n)!==-1:n===i}},{key:"hasActiveIndex",value:function(){var n=this.props.activeIndex;return Array.isArray(n)?n.length!==0:n||n===0}},{key:"renderLabels",value:function(n){var i=this.props.isAnimationActive;if(i&&!this.state.isAnimationFinished)return null;var s=this.props,o=s.label,u=s.labelLine,l=s.dataKey,c=s.valueKey,m=E(this.props,!1),h=E(o,!1),S=E(u,!1),j=o&&o.offsetRadius||20,v=n.map(function(d,y){var k=(d.startAngle+d.endAngle)/2,f=te(d.cx,d.cy,d.outerRadius+j,k),g=$($($($({},m),d),{},{stroke:"none"},h),{},{index:y,textAnchor:t.getTextAnchor(f.x,d.cx)},f),x=$($($($({},m),d),{},{fill:"none",stroke:d.fill},S),{},{index:y,points:[te(d.cx,d.cy,d.outerRadius,k),f]}),p=l;return Ae(l)&&Ae(c)?p="value":Ae(l)&&(p=c),O.createElement(J,{key:"label-".concat(d.startAngle,"-").concat(d.endAngle,"-").concat(d.midAngle,"-").concat(y)},u&&t.renderLabelLineItem(u,x,"line"),t.renderLabelItem(o,g,xe(d,p)))});return O.createElement(J,{className:"recharts-pie-labels"},v)}},{key:"renderSectorsStatically",value:function(n){var i=this,s=this.props,o=s.activeShape,u=s.blendStroke,l=s.inactiveShape;return n.map(function(c,m){if(c?.startAngle===0&&c?.endAngle===0&&n.length!==1)return null;var h=i.isActiveIndex(m),S=l&&i.hasActiveIndex()?l:null,j=h?o:S,v=$($({},c),{},{stroke:u?c.fill:c.stroke,tabIndex:-1});return O.createElement(J,je({ref:function(y){y&&!i.sectorRefs.includes(y)&&i.sectorRefs.push(y)},tabIndex:-1,className:"recharts-pie-sector"},ft(i.props,c,m),{key:"sector-".concat(c?.startAngle,"-").concat(c?.endAngle,"-").concat(c.midAngle,"-").concat(m)}),O.createElement(Gn,je({option:j,isActive:h,shapeType:"sector"},v)))})}},{key:"renderSectorsWithAnimation",value:function(){var n=this,i=this.props,s=i.sectors,o=i.isAnimationActive,u=i.animationBegin,l=i.animationDuration,c=i.animationEasing,m=i.animationId,h=this.state,S=h.prevSectors,j=h.prevIsAnimationActive;return O.createElement(Zn,{begin:u,duration:l,isActive:o,easing:c,from:{t:0},to:{t:1},key:"pie-".concat(m,"-").concat(j),onAnimationStart:this.handleAnimationStart,onAnimationEnd:this.handleAnimationEnd},function(v){var d=v.t,y=[],k=s&&s[0],f=k.startAngle;return s.forEach(function(g,x){var p=S&&S[x],A=x>0?Qn(g,"paddingAngle",0):0;if(p){var T=bt(p.endAngle-p.startAngle,g.endAngle-g.startAngle),P=$($({},g),{},{startAngle:f+A,endAngle:f+T(d)+A});y.push(P),f=P.endAngle}else{var _=g.endAngle,C=g.startAngle,U=bt(0,_-C),Y=U(d),R=$($({},g),{},{startAngle:f+A,endAngle:f+Y+A});y.push(R),f=R.endAngle}}),O.createElement(J,null,n.renderSectorsStatically(y))})}},{key:"attachKeyboardHandlers",value:function(n){var i=this;n.onkeydown=function(s){if(!s.altKey)switch(s.key){case"ArrowLeft":{var o=++i.state.sectorToFocus%i.sectorRefs.length;i.sectorRefs[o].focus(),i.setState({sectorToFocus:o});break}case"ArrowRight":{var u=--i.state.sectorToFocus<0?i.sectorRefs.length-1:i.state.sectorToFocus%i.sectorRefs.length;i.sectorRefs[u].focus(),i.setState({sectorToFocus:u});break}case"Escape":{i.sectorRefs[i.state.sectorToFocus].blur(),i.setState({sectorToFocus:0});break}}}}},{key:"renderSectors",value:function(){var n=this.props,i=n.sectors,s=n.isAnimationActive,o=this.state.prevSectors;return s&&i&&i.length&&(!o||!Jn(o,i))?this.renderSectorsWithAnimation():this.renderSectorsStatically(i)}},{key:"componentDidMount",value:function(){this.pieRef&&this.attachKeyboardHandlers(this.pieRef)}},{key:"render",value:function(){var n=this,i=this.props,s=i.hide,o=i.sectors,u=i.className,l=i.label,c=i.cx,m=i.cy,h=i.innerRadius,S=i.outerRadius,j=i.isAnimationActive,v=this.state.isAnimationFinished;if(s||!o||!o.length||!ye(c)||!ye(m)||!ye(h)||!ye(S))return null;var d=ie("recharts-pie",u);return O.createElement(J,{tabIndex:this.props.rootTabIndex,className:d,ref:function(k){n.pieRef=k}},this.renderSectors(),l&&this.renderLabels(o),Xt.renderCallByParent(this.props,null,!1),(!j||v)&&Yn.renderCallByParent(this.props,o,!1))}}],[{key:"getDerivedStateFromProps",value:function(n,i){return i.prevIsAnimationActive!==n.isAnimationActive?{prevIsAnimationActive:n.isAnimationActive,prevAnimationId:n.animationId,curSectors:n.sectors,prevSectors:[],isAnimationFinished:!0}:n.isAnimationActive&&n.animationId!==i.prevAnimationId?{prevAnimationId:n.animationId,curSectors:n.sectors,prevSectors:i.curSectors,isAnimationFinished:!0}:n.sectors!==i.curSectors?{curSectors:n.sectors,isAnimationFinished:!0}:null}},{key:"getTextAnchor",value:function(n,i){return n>i?"start":n<i?"end":"middle"}},{key:"renderLabelLineItem",value:function(n,i,s){if(O.isValidElement(n))return O.cloneElement(n,i);if(pe(n))return n(i);var o=ie("recharts-pie-label-line",typeof n!="boolean"?n.className:"");return O.createElement(Un,je({},i,{key:s,type:"linear",className:o}))}},{key:"renderLabelItem",value:function(n,i,s){if(O.isValidElement(n))return O.cloneElement(n,i);var o=s;if(pe(n)&&(o=n(i),O.isValidElement(o)))return o;var u=ie("recharts-pie-label-text",typeof n!="boolean"&&!pe(n)?n.className:"");return O.createElement(pt,je({},i,{alignmentBaseline:"middle",className:u}),o)}}])})(w.PureComponent);Ke=X;q(X,"displayName","Pie");q(X,"defaultProps",{stroke:"#fff",fill:"#808080",legendType:"rect",cx:"50%",cy:"50%",startAngle:0,endAngle:360,innerRadius:0,outerRadius:"80%",paddingAngle:0,labelLine:!0,hide:!1,minAngle:0,isAnimationActive:!Vn.isSsr,animationBegin:400,animationDuration:1500,animationEasing:"ease",nameKey:"name",blendStroke:!1,rootTabIndex:0});q(X,"parseDeltaAngle",function(e,t){var r=Fe(t-e),n=Math.min(Math.abs(t-e),360);return r*n});q(X,"getRealPieData",function(e){var t=e.data,r=e.children,n=E(e,!1),i=er(r,tr);return t&&t.length?t.map(function(s,o){return $($($({payload:s},n),s),i&&i[o]&&i[o].props)}):i&&i.length?i.map(function(s){return $($({},n),s.props)}):[]});q(X,"parseCoordinateOfPie",function(e,t){var r=t.top,n=t.left,i=t.width,s=t.height,o=nr(i,s),u=n+ze(e.cx,i,i/2),l=r+ze(e.cy,s,s/2),c=ze(e.innerRadius,o,0),m=ze(e.outerRadius,o,o*.8),h=e.maxRadius||Math.sqrt(i*i+s*s)/2;return{cx:u,cy:l,innerRadius:c,outerRadius:m,maxRadius:h}});q(X,"getComposedData",function(e){var t=e.item,r=e.offset,n=t.type.defaultProps!==void 0?$($({},t.type.defaultProps),t.props):t.props,i=Ke.getRealPieData(n);if(!i||!i.length)return null;var s=n.cornerRadius,o=n.startAngle,u=n.endAngle,l=n.paddingAngle,c=n.dataKey,m=n.nameKey,h=n.valueKey,S=n.tooltipType,j=Math.abs(n.minAngle),v=Ke.parseCoordinateOfPie(n,r),d=Ke.parseDeltaAngle(o,u),y=Math.abs(d),k=c;Ae(c)&&Ae(h)?(jt(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),k="value"):Ae(c)&&(jt(!1,`Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`),k=h);var f=i.filter(function(P){return xe(P,k,0)!==0}).length,g=(y>=360?f:f-1)*l,x=y-f*j-g,p=i.reduce(function(P,_){var C=xe(_,k,0);return P+(ye(C)?C:0)},0),A;if(p>0){var T;A=i.map(function(P,_){var C=xe(P,k,0),U=xe(P,m,_),Y=(ye(C)?C:0)/p,R;_?R=T.endAngle+Fe(d)*l*(C!==0?1:0):R=o;var me=R+Fe(d)*((C!==0?j:0)+Y*x),Le=(R+me)/2,Oe=(v.innerRadius+v.outerRadius)/2,De=[{name:U,value:C,payload:P,dataKey:k,type:S}],Je=te(v.cx,v.cy,Oe,Le);return T=$($($({percent:Y,cornerRadius:s,name:U,tooltipPayload:De,midAngle:Le,middleRadius:Oe,tooltipPosition:Je},P),v),{},{value:xe(P,k),startAngle:R,endAngle:me,payload:P,paddingAngle:Fe(d)*l}),T})}return $($({},v),{},{sectors:A,data:i})});var ma=rr({chartName:"PieChart",GraphicalChild:X,validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",legendContent:"children",axisComponents:[{axisType:"angleAxis",AxisComp:Qe},{axisType:"radiusAxis",AxisComp:Ge}],formatAxisMap:ar,defaultProps:{layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"}}),ha=function(t){var r=t.customCategories,n=t.active,i=t.payload,s=t.valueFormatter;if(n&&i!==null&&i!==void 0&&i[0]){var o=i?.[0];return a.jsx(ir,{children:a.jsx(b,{paddingBlock:8,paddingInline:16,children:a.jsx(or,{color:o.payload.color,name:r?.[o.name]||o.name,value:s(o.value)})})})}return null},ga=function(t,r){return sr(t.map(function(n){return n[r]}))},xa=function(t,r,n,i){return t||r(ga(n,i))},Dt=function(t){var r=t.cx,n=t.cy,i=t.innerRadius,s=t.outerRadius,o=t.startAngle,u=t.endAngle,l=t.className;return a.jsx("g",{children:a.jsx(lr,{className:l,cx:r,cy:n,endAngle:u,fill:"",innerRadius:i,opacity:.3,outerRadius:s,startAngle:o,style:{outline:"none"}})})},Et,zt,Bt,Ft;function Be(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Mt=ee(function(e){var t=e.css,r=e.cssVar;return{emphasis:t(Et||(Et=Be([`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `]))),gridLines:t(zt||(zt=Be([`
    stroke: `,`;
    stroke-width: 1;
  `])),r.colorBorderSecondary),label:t(Bt||(Bt=Be([`
    font-size: 12px;
    line-height: 16px;
    fill: `,`;
  `])),r.colorTextDescription),strongLabel:t(Ft||(Ft=Be([`
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    fill: `,`;
  `])),r.colorTextSecondary)}});function Ie(e){"@babel/helpers - typeof";return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ie(e)}var Kt,va=["data","category","index","colors","variant","valueFormatter","label","showLabel","animationDuration","showAnimation","showTooltip","noDataText","onValueChange","customTooltip","className","width","loading","height","style","customCategories","donutLabel"];function ya(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Wt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Wt(Object(r),!0).forEach(function(n){ln(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Wt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ln(e,t,r){return t=ba(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ba(e){var t=ja(e,"string");return Ie(t)=="symbol"?t:String(t)}function ja(e,t){if(Ie(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ie(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ka(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=cn(e))||t){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,o=!1,u;return{s:function(){r=r.call(e)},n:function(){var c=r.next();return s=c.done,c},e:function(c){o=!0,u=c},f:function(){try{!s&&r.return!=null&&r.return()}finally{if(o)throw u}}}}function Aa(e,t){return Ta(e)||wa(e,t)||cn(e,t)||Sa()}function Sa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cn(e,t){if(e){if(typeof e=="string")return Ht(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ht(e,t)}}function Ht(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function wa(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,i,s,o,u=[],l=!0,c=!1;try{if(s=(r=r.call(e)).next,t!==0)for(;!(l=(n=s.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(m){c=!0,i=m}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw i}}return u}}function Ta(e){if(Array.isArray(e))return e}function Oa(e,t){if(e==null)return{};var r=Pa(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Pa(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var un=w.forwardRef(function(e,t){var r,n=cr(),i=e.data,s=i===void 0?[]:i,o=e.category,u=o===void 0?"value":o,l=e.index,c=l===void 0?"name":l,m=e.colors,h=m===void 0?n:m,S=e.variant,j=S===void 0?"donut":S,v=e.valueFormatter,d=v===void 0?fr:v,y=e.label,k=e.showLabel,f=k===void 0?!0:k,g=e.animationDuration,x=g===void 0?900:g,p=e.showAnimation,A=p===void 0?!1:p,T=e.showTooltip,P=T===void 0?!0:T,_=e.noDataText,C=e.onValueChange,U=e.customTooltip,Y=e.className,R=e.width,me=R===void 0?"100%":R,Le=e.loading,Oe=e.height,De=Oe===void 0?"10rem":Oe,Je=e.style,mt=e.customCategories,dn=e.donutLabel,pn=Oa(e,va),fn=bn(),mn=fn.isDarkMode,ht=U,Ee=j==="donut",hn=xa(y,d,s,u),gn=w.useState(),gt=Aa(gn,2),oe=gt[0],Ye=gt[1],xt=!!C;if(w.useEffect(function(){if(!ur){var se=document.querySelectorAll(".recharts-pie-sector");if(se){var H=ka(se),G;try{for(H.s();!(G=H.n()).done;){var z=G.value;z.setAttribute("style","outline: none")}}catch(he){H.e(he)}finally{H.f()}}}},[oe]),Le||!s)return a.jsx(Kn.Block,{active:!0,height:De,width:me});var xn=function(H,G,z){z.stopPropagation(),xt&&(oe===G?(Ye(void 0),C?.(null)):(Ye(G),C?.(re({eventType:"slice"},H.payload.payload))))},vt=function(H,G){return H.map(function(z,he){var ne=he<G.length?G[he]:I.colorPrimary;return re(re({},z),{},{className:N(jn(Kt||(Kt=ya([`
          fill: `,`;
        `])),ne??I.colorPrimary)),color:ne,fill:""})})};return a.jsx(b,re(re({className:Y,height:De,ref:t,style:re({position:"relative"},Je),width:me},pn),{},{children:a.jsx(dr,{children:s!=null&&s.length?a.jsxs(ma,{margin:{bottom:0,left:0,right:0,top:0},onClick:xt&&oe?function(){Ye(void 0),C?.(null)}:void 0,children:[f&&Ee?a.jsx("text",{className:N(Mt.strongLabel,Mt.emphasis),dominantBaseline:"middle",textAnchor:"middle",x:"50%",y:"50%",children:dn||(typeof oe=="number"?d(s==null||(r=s[oe])===null||r===void 0?void 0:r[u]):hn)}):null,a.jsx(X,{activeIndex:oe,animationDuration:x,cx:"50%",cy:"50%",data:vt(s,h),dataKey:u,endAngle:-270,inactiveShape:Dt,innerRadius:Ee?"75%":"0%",isAnimationActive:A,nameKey:c,onClick:xn,outerRadius:"100%",startAngle:90,stroke:"",strokeLinejoin:"round",style:{cursor:C?"pointer":void 0,outline:"none",stroke:I.colorBgContainer}}),Ee&&a.jsx(X,{activeIndex:oe,animationDuration:x,cx:"50%",cy:"50%",data:vt([ln({},u,1)],[mn?"color-mix(in srgb, #000000 33%, transparent)":"color-mix(in srgb, #000000 10%, transparent)"]),dataKey:u,endAngle:-270,inactiveShape:Dt,innerRadius:Ee?"75%":"0%",isAnimationActive:!1,nameKey:c,outerRadius:"80%",startAngle:90,stroke:"",strokeLinejoin:"round",style:{outline:"none",pointerEvents:"none"}}),a.jsx(pr,{content:P?function(se){var H,G=se.active,z=se.payload;return ht?a.jsx(ht,{active:G,customCategories:mt,label:z==null||(H=z[0])===null||H===void 0?void 0:H.name,payload:z?.map(function(he){var ne,ge;return re(re({},he),{},{color:(ne=z==null||(ge=z[0])===null||ge===void 0||(ge=ge.payload)===null||ge===void 0?void 0:ge.color)!==null&&ne!==void 0?ne:I.colorPrimary})}),valueFormatter:d}):a.jsx(ha,{active:G,customCategories:mt,payload:z,valueFormatter:d})}:void 0,isAnimationActive:!1,wrapperStyle:{outline:"none"}})]}):a.jsx(mr,{noDataText:_})})}))});un.displayName="DonutChart";const ae=ee(({css:e,cssVar:t})=>({axisLabel:e`
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
  `})),Ca=w.memo(({results:e,benchmarkId:t,runId:r})=>{const{t:n}=V("eval"),i=st(),{maxDuration:s,maxTokens:o,scatterData:u}=w.useMemo(()=>{if(!e||e.length===0)return{maxDuration:0,maxTokens:0,scatterData:[]};let l=0,c=0;const m=e.map(h=>{const S=(h.evalResult?.duration||0)/1e3,j=h.evalResult?.tokens||0,v=h.evalResult?.cost,d=h.status,y=h.testCase?.content?.input||"",k=h.testCase?.content?.expected||"",f=h.testCase?.sortOrder,g=h.testCaseId||"";return S>l&&(l=S),j>c&&(c=j),{cost:v,duration:S,expected:k,input:y,sortOrder:f,status:d,testCaseId:g,tokens:j}});return{maxDuration:l,maxTokens:c,scatterData:m}},[e]);return!e||e.length===0?null:a.jsxs("div",{className:ae.scatterArea,children:[a.jsxs("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 100",style:{height:"100%",insetBlockStart:0,insetInlineStart:0,position:"absolute",width:"100%"},children:[a.jsx("line",{stroke:i.colorBorder,strokeWidth:"0.5",x1:"0",x2:"100",y1:"100",y2:"100"}),a.jsx("line",{stroke:i.colorBorder,strokeWidth:"0.5",x1:"0",x2:"0",y1:"0",y2:"100"}),[1,2,3].map(l=>a.jsx("line",{stroke:i.colorBorder,strokeDasharray:"2 2",strokeOpacity:"0.5",strokeWidth:"0.5",x1:"0",x2:"100",y1:100-l*25,y2:100-l*25},l))]}),u.map((l,c)=>{const m=l.tokens/(o||1)*92+4,h=l.duration/(s||1)*88+6,S=l.status==="passed"?i.colorSuccess:l.status==="error"?i.colorWarning:i.colorError,j=l.status==="passed"?"green":l.status==="error"?"orange":"red",v=l.status==="passed"?n("run.chart.pass"):l.status==="error"?n("run.chart.error"):n("run.chart.fail"),d=l.input.length>60?l.input.slice(0,60)+"...":l.input,y=l.expected.length>60?l.expected.slice(0,60)+"...":l.expected,k=`/eval/bench/${t}/runs/${r}/cases/${l.testCaseId}`;return a.jsx(ke,{title:a.jsxs(b,{gap:4,style:{fontSize:12,maxWidth:320},children:[a.jsxs(b,{horizontal:!0,align:"center",gap:6,justify:"space-between",children:[a.jsxs(b,{horizontal:!0,align:"center",gap:6,children:[a.jsxs("span",{style:{fontWeight:600},children:["#",l.sortOrder??c+1]}),a.jsx($e,{color:j,size:"small",children:v})]}),a.jsxs("span",{className:ae.tooltipLabel,children:[l.duration.toFixed(2),"s"]})]}),d&&a.jsx("div",{style:{lineHeight:1.4,wordBreak:"break-all"},children:d}),y&&a.jsx("div",{className:ae.tooltipLabel,style:{lineHeight:1.4,wordBreak:"break-all"},children:y}),a.jsx(kn,{style:{margin:"2px 0"}}),a.jsxs(b,{horizontal:!0,gap:16,children:[a.jsxs("div",{children:[a.jsxs("span",{className:ae.tooltipLabel,children:[n("run.chart.tokens"),": "]}),Ne(l.tokens)]}),l.cost!==void 0&&a.jsxs("div",{children:[a.jsxs("span",{className:ae.tooltipLabel,children:[n("run.metrics.cost"),": "]}),"$",_e(l.cost)]})]})]}),children:a.jsx("div",{className:ae.dot,style:{background:S,borderRadius:"50%",bottom:`${h}%`,height:7,left:`${m}%`,opacity:.8,position:"absolute",transform:"translate(-50%, 50%)",width:7},onClick:()=>window.open(k,"_blank")})},c)}),a.jsx("span",{className:ae.axisLabel,style:{bottom:2,right:4},children:n("run.chart.tokens")}),a.jsx("span",{className:ae.axisLabel,style:{left:4,top:0},children:n("run.chart.duration")})]})}),Ra=w.memo(({passedCases:e,failedCases:t,errorCases:r})=>{const{t:n}=V("eval"),i=st(),s=[{name:n("run.chart.pass"),value:e},{name:n("run.chart.fail"),value:t},...r>0?[{name:n("run.chart.error"),value:r}]:[]],o=[i.colorSuccess,i.colorFill,...r>0?[i.colorWarning]:[]];return a.jsx(un,{category:"value",colors:o,data:s,index:"name",style:{height:200},variant:"pie"})}),W=ee(({css:e,cssVar:t})=>({chartCard:e`
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
  `})),$a=w.memo(({results:e,benchmarkId:t,runId:r})=>{const{t:n}=V("eval"),i=st(),{errorCases:s,failedCases:o,histogramData:u,passedCases:l}=w.useMemo(()=>{if(!e||e.length===0)return{errorCases:0,failedCases:0,histogramData:[],passedCases:0};let j=0,v=0,d=0;const y=[];for(const f of e){const g=(f.evalResult?.duration||0)/1e3,x=f.status;x==="passed"?j++:x==="error"?d++:x==="failed"&&v++,y.push({duration:g,status:x})}const k=[{error:0,failed:0,max:60,passed:0,range:"<1min"},{error:0,failed:0,max:180,passed:0,range:"1~3min"},{error:0,failed:0,max:300,passed:0,range:"3~5min"},{error:0,failed:0,max:1/0,passed:0,range:">5min"}];for(const f of y){const g=f.duration<60?0:f.duration<180?1:f.duration<300?2:3;f.status==="passed"?k[g].passed++:f.status==="error"?k[g].error++:k[g].failed++}return{errorCases:d,failedCases:v,histogramData:k,passedCases:j}},[e]),c=n("run.chart.pass"),m=n("run.chart.fail"),h=n("run.chart.error"),S=w.useMemo(()=>u.map(j=>({[h]:j.error,[m]:j.failed,[c]:j.passed,range:j.range})),[u,c,m,h]);return!e||e.length===0?null:a.jsxs(b,{horizontal:!0,gap:16,style:{height:320},children:[a.jsxs(b,{className:W.chartCard,flex:1,children:[a.jsx("div",{className:W.chartTitle,children:n("run.chart.passFailError")}),a.jsx(b,{align:"center",flex:1,justify:"center",children:a.jsx(Ra,{errorCases:s,failedCases:o,passedCases:l})})]}),a.jsxs(b,{className:W.chartCard,flex:2,children:[a.jsxs(b,{horizontal:!0,justify:"space-between",style:{marginBlockEnd:12},children:[a.jsx("span",{className:W.chartTitle,style:{marginBlockEnd:0},children:n("run.chart.latencyTokenDistribution")}),a.jsxs(b,{horizontal:!0,gap:12,style:{fontSize:11},children:[a.jsxs(b,{horizontal:!0,align:"center",gap:4,children:[a.jsx("div",{className:W.legendDot,style:{background:i.colorSuccess}}),a.jsx("span",{className:W.legendText,children:n("run.chart.pass")})]}),a.jsxs(b,{horizontal:!0,align:"center",gap:4,children:[a.jsx("div",{className:W.legendDot,style:{background:i.colorFill}}),a.jsx("span",{className:W.legendText,children:n("run.chart.fail")})]}),a.jsxs(b,{horizontal:!0,align:"center",gap:4,children:[a.jsx("div",{className:W.legendDot,style:{background:i.colorWarning}}),a.jsx("span",{className:W.legendText,children:n("run.chart.error")})]})]})]}),a.jsx(Ca,{benchmarkId:t,results:e,runId:r})]}),a.jsxs(b,{className:W.chartCard,flex:1,children:[a.jsxs(b,{horizontal:!0,align:"center",className:W.chartTitle,gap:6,children:[a.jsx("span",{children:n("run.chart.latencyDistribution")}),a.jsx("span",{className:W.totalCount,children:e.length})]}),a.jsx(hr,{stack:!0,categories:[c,m,h],colors:[i.colorSuccess,i.colorFill,i.colorWarning],data:S,index:"range",showLegend:!1,showYAxis:!1})]})]})}),B=ee(({css:e,cssVar:t})=>({center:e`
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
  `})),_a=w.memo(({run:e})=>{const{t}=V("eval"),{modal:r,message:n}=lt.useApp(),i=Q(l=>l.startRun),[s,o]=w.useState(!1),u=()=>{r.confirm({content:t("run.actions.start.confirm"),okText:t("run.actions.start"),onOk:async()=>{try{o(!0),await i(e.id,e.status!=="idle")}catch(l){n.error(l?.message||"Failed to start run")}finally{o(!1)}},title:t("run.actions.start")})};return a.jsxs("div",{className:B.container,children:[a.jsxs("div",{className:B.orbitGroup,children:[a.jsx("div",{className:N(B.orbit,B.orbit1)}),a.jsx("div",{className:N(B.orbit,B.orbit2)}),a.jsx("div",{className:N(B.orbit,B.orbit3)}),a.jsx("div",{className:N(B.icon,B.icon1),children:a.jsx(K,{icon:ct,size:16})}),a.jsx("div",{className:N(B.icon,B.icon2),children:a.jsx(K,{icon:ut,size:16})}),a.jsx("div",{className:N(B.icon,B.icon3),children:a.jsx(K,{icon:dt,size:16})}),a.jsx("div",{className:B.center,children:a.jsx(K,{icon:nt,size:18})})]}),a.jsx("div",{className:B.hint,children:t("run.idle.hint")}),a.jsx(An,{icon:a.jsx(nt,{size:14}),loading:s,style:{marginTop:12},type:"primary",onClick:u,children:t("run.actions.start")})]})}),F=ee(({css:e,cssVar:t})=>({center:e`
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
  `})),qt=w.memo(({hint:e})=>a.jsxs("div",{className:F.container,children:[a.jsxs("div",{className:F.orbitGroup,children:[a.jsx("div",{className:N(F.orbit,F.orbit1)}),a.jsx("div",{className:N(F.orbit,F.orbit2)}),a.jsx("div",{className:N(F.orbit,F.orbit3)}),a.jsx("div",{className:N(F.icon,F.icon1),children:a.jsx(K,{icon:ct,size:16})}),a.jsx("div",{className:N(F.icon,F.icon2),children:a.jsx(K,{icon:ut,size:16})}),a.jsx("div",{className:N(F.icon,F.icon3),children:a.jsx(K,{icon:dt,size:16})}),a.jsx("div",{className:F.center,children:a.jsx(K,{icon:Qt,size:18})})]}),a.jsx("div",{className:F.hint,children:e})]})),L=ee(({css:e,cssVar:t})=>({backLink:e`
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
  `})),Na=w.memo(({run:e,benchmarkId:t,hideStart:r})=>{const{t:n}=V("eval"),{modal:i,message:s}=lt.useApp(),o=Sn(),u=Q(R=>R.abortRun),l=Q(R=>R.deleteRun),c=Q(R=>R.startRun),m=e.status==="running"||e.status==="pending",h=e.status==="idle"||e.status==="failed"||e.status==="aborted",[S,j]=w.useState(!1),[v,d]=w.useState(!1),[y,k]=w.useState(!1),f=e.config?.agentSnapshot,g=e.targetAgent?.title||n("run.detail.agent.unnamed"),x=f?.avatar||e.targetAgent?.avatar,p=f?.model||e.targetAgent?.model,A=f?.provider||e.targetAgent?.provider,T=()=>{i.confirm({content:n("run.actions.abort.confirm"),okButtonProps:{danger:!0},okText:n("run.actions.abort"),onOk:()=>u(e.id),title:n("run.actions.abort")})},P=()=>{i.confirm({content:n("run.actions.delete.confirm"),okButtonProps:{danger:!0},okText:n("run.actions.delete"),onOk:async()=>{await l(e.id),o(`/eval/bench/${t}`)},title:n("run.actions.delete")})},_=()=>{i.confirm({content:n("run.actions.start.confirm"),okText:n("run.actions.start"),onOk:async()=>{try{j(!0),await c(e.id,e.status!=="idle")}catch(R){s.error(R?.message||"Failed to start run")}finally{j(!1)}},title:n("run.actions.start")})},C=()=>{e.targetAgentId&&window.open(On(e.targetAgentId),"_blank")},U=async()=>{try{await Tn(e.id),s.success(n("run.detail.copyRunIdSuccess"))}catch{s.error(n("run.detail.copyRunIdFailed"))}},Y=R=>R?(R instanceof Date?R:new Date(R)).toLocaleString():"";return a.jsxs(b,{gap:16,children:[a.jsxs(tt,{className:L.backLink,to:`/eval/bench/${t}`,children:[a.jsx(Rn,{size:16}),n("run.detail.backToBenchmark")]}),a.jsxs(Me,{styles:{body:{padding:20}},children:[a.jsxs(b,{horizontal:!0,align:"center",className:L.titleRow,justify:"space-between",children:[a.jsxs(b,{gap:4,children:[a.jsxs(b,{horizontal:!0,align:"center",gap:8,children:[a.jsx(ve.Title,{level:4,style:{margin:0},children:e.name||e.id.slice(0,8)}),a.jsx(Pe,{icon:$n,size:"small",title:n("run.detail.copyRunId"),onClick:U}),a.jsx(yr,{status:e.status})]}),a.jsxs(b,{horizontal:!0,align:"center",className:L.metaRow,gap:8,children:[e.dataset&&a.jsx(tt,{className:L.datasetLink,target:"_blank",to:`/eval/bench/${t}/datasets/${e.dataset.id}`,children:e.dataset.name}),e.targetAgentId&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:L.separator,children:"|"}),a.jsxs(b,{horizontal:!0,align:"center",gap:4,style:{cursor:"pointer"},onClick:C,children:[a.jsx(gr,{avatar:x,size:16}),a.jsx("span",{children:g})]})]}),p&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:L.separator,children:"|"}),a.jsxs("span",{className:L.modelText,children:[A?`${A} / `:"",p]})]}),e.createdAt&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:L.separator,children:"|"}),a.jsx("span",{children:Y(e.createdAt)})]})]})]}),a.jsxs(b,{horizontal:!0,align:"center",gap:8,children:[h&&!r&&a.jsx(Ut,{icon:a.jsx(nt,{size:14}),loading:S,type:"primary",onClick:_,children:n("run.actions.start")}),a.jsx(Pe,{icon:_n,size:"small",title:n("run.actions.edit"),onClick:()=>k(!0)}),m&&a.jsx(Pe,{icon:Nn,size:"small",title:n("run.actions.abort"),onClick:T}),a.jsx(Pe,{icon:In,size:"small",title:n("run.actions.delete"),onClick:P})]})]}),a.jsxs("button",{className:L.configToggle,onClick:()=>d(!v),children:[v?a.jsx(Ln,{size:12}):a.jsx(Dn,{size:12}),n("run.detail.configSnapshot")]}),v&&f&&a.jsxs(b,{gap:0,children:[f.systemRole&&a.jsxs("div",{className:L.configSection,children:[a.jsx("div",{className:L.configSectionLabel,children:"System Role"}),a.jsx("div",{className:L.systemRole,children:a.jsx(xr,{variant:"chat",children:f.systemRole})})]}),f.plugins&&f.plugins.length>0&&a.jsxs("div",{className:L.configSection,children:[a.jsx("div",{className:L.configSectionLabel,children:"Plugins"}),a.jsx(b,{horizontal:!0,gap:4,wrap:"wrap",children:f.plugins.map(R=>a.jsx(wn,{children:R},R))})]}),(f.chatConfig||f.params)&&a.jsx("div",{className:L.configSection,children:a.jsxs(b,{horizontal:!0,gap:12,children:[f.chatConfig&&a.jsxs(b,{flex:1,gap:0,style:{minWidth:0},children:[a.jsx("div",{className:L.configSectionLabel,children:"Chat Config"}),a.jsx(yt,{language:"json",style:{fontSize:12,maxHeight:300,overflow:"auto"},variant:"filled",children:JSON.stringify(f.chatConfig,null,2)})]}),f.params&&a.jsxs(b,{flex:1,gap:0,style:{minWidth:0},children:[a.jsx("div",{className:L.configSectionLabel,children:"Params"}),a.jsx(yt,{language:"json",style:{fontSize:12,maxHeight:300,overflow:"auto"},variant:"filled",children:JSON.stringify(f.params,null,2)})]})]})})]})]}),a.jsx(vr,{open:y,run:e,onClose:()=>k(!1)})]})}),D=ee(({css:e,cssVar:t})=>({center:e`
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
  `})),Ia=w.memo(()=>{const{t:e}=V("eval");return a.jsxs("div",{className:D.container,children:[a.jsxs("div",{className:D.orbitGroup,children:[a.jsx("div",{className:N(D.orbit,D.orbit1)}),a.jsx("div",{className:N(D.orbit,D.orbit2)}),a.jsx("div",{className:N(D.orbit,D.orbit3)}),a.jsx("div",{className:N(D.icon,D.icon1),children:a.jsx(K,{icon:ct,size:16})}),a.jsx("div",{className:N(D.icon,D.icon2),children:a.jsx(K,{icon:ut,size:16})}),a.jsx("div",{className:N(D.icon,D.icon3),children:a.jsx(K,{icon:dt,size:16})}),a.jsx("div",{className:D.center,children:a.jsx(K,{className:D.spinner,icon:En,size:18})})]}),a.jsx("div",{className:D.hint,children:e("run.running.hint")})]})}),Z=ee(({css:e,cssVar:t})=>({card:e`
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
  `})),La=w.memo(({metrics:e})=>{const{t}=V("eval"),r=e?.passedCases??0,n=e?.totalCases??0,i=[{bgColor:I.colorSuccessBg,color:I.colorSuccess,icon:zn,label:t("run.metrics.passRate"),subtitle:n>0?a.jsxs(a.Fragment,{children:[r,"/",n," ",a.jsx("span",{className:Z.subtitleUnit,children:t("table.filter.passed")})]}):void 0,value:e?.passRate!==void 0?`${Math.round(e.passRate*100)}%`:"-",valueSuffix:void 0},{bgColor:I.colorWarningBg,color:I.colorWarning,icon:Qt,label:t("run.metrics.duration"),subtitle:e?.totalDuration!==void 0&&n>0?a.jsxs(a.Fragment,{children:["~",kt(e.totalDuration/n)," ",a.jsx("span",{className:Z.subtitleUnit,children:t("run.metrics.perCase")})]}):void 0,value:e?.duration!==void 0?kt(e.duration):"-"},{bgColor:I.colorPrimaryBg,color:I.colorPrimary,icon:Bn,label:t("run.metrics.cost"),subtitle:e?.perCaseCost!==void 0?a.jsxs(a.Fragment,{children:["~$",_e(e.perCaseCost)," ",a.jsx("span",{className:Z.subtitleUnit,children:t("run.metrics.perCase")})]}):void 0,value:e?.totalCost!==void 0?`$${_e(e.totalCost)}`:"-"},{bgColor:I.colorInfoBg,color:I.colorInfo,icon:Fn,label:t("run.metrics.tokens"),subtitle:e?.perCaseTokens!==void 0?a.jsxs(a.Fragment,{children:["~",Ne(Math.round(e.perCaseTokens))," ",a.jsx("span",{className:Z.subtitleUnit,children:t("run.metrics.perCase")})]}):void 0,value:e?.totalTokens!==void 0?Ne(e.totalTokens):"-"}];return a.jsx("div",{className:Z.grid,children:i.map(s=>a.jsxs(b,{horizontal:!0,align:"center",className:Z.card,gap:12,children:[a.jsx("div",{className:Z.iconBox,style:{background:s.bgColor},children:a.jsx(K,{icon:s.icon,size:16,style:{color:s.color}})}),a.jsxs(b,{gap:2,children:[a.jsx("span",{className:Z.label,children:s.label}),a.jsxs("span",{className:Z.value,children:[s.value,s.valueSuffix&&a.jsx("span",{className:Z.valueSuffix,children:s.valueSuffix})]}),s.subtitle&&a.jsx("span",{className:Z.subtitle,children:s.subtitle})]})]},s.label))})}),Da=3e3,Fi=w.memo(()=>{const{t:e}=V("eval"),{modal:t}=lt.useApp(),{benchmarkId:r,runId:n}=Pn(),i=Q(T=>T.useFetchRunDetail),s=Q(T=>T.useFetchRunResults),o=Q(T=>T.retryRunErrors),u=Q(T=>T.retryRunCase),l=Q(Xe.getRunDetailById(n)),c=Q(Xe.getRunResultsById(n)),m=Q(Xe.isRunActive(n)),[h,S]=w.useState(!1),j={refreshInterval:m?Da:0};if(i(n,j),s(n,j),!l)return null;const v=!!c?.results?.length,d=l.status==="completed"||l.status==="failed"||l.status==="aborted",y=l.metrics,k=y?.completedCases??0,f=y?.totalCases??0,g=f>0?Math.round(k/f*100):0,x=f>0&&g<100,p=(y?.errorCases??0)+(y?.timeoutCases??0),A=d&&p>0;return a.jsxs(b,{gap:24,padding:24,style:{margin:"0 auto",maxWidth:1440,width:"100%"},children:[a.jsx(Na,{benchmarkId:r,hideStart:l.status==="idle",run:l}),d?a.jsxs(Me,{styles:{body:{display:"flex",flexDirection:"column",gap:20,padding:20},header:{minHeight:"auto",padding:"12px 20px"}},title:a.jsx(ve.Text,{strong:!0,style:{fontSize:14},children:e("run.detail.report")}),children:[a.jsx(La,{metrics:l.metrics??void 0}),v&&a.jsx($a,{benchmarkId:r,results:c.results,runId:n})]}):a.jsx(Me,{styles:{body:{alignItems:"center",display:"flex",justifyContent:"center",minHeight:430,padding:20},header:{minHeight:"auto",padding:"12px 20px"}},title:a.jsx(ve.Text,{strong:!0,style:{fontSize:14},children:e("run.detail.report")}),children:l.status==="running"?a.jsx(Ia,{}):l.status==="pending"?a.jsx(qt,{hint:e("run.pending.hint")}):l.status==="external"?a.jsx(qt,{hint:e("run.external.hint")}):a.jsx(_a,{run:l})}),v&&a.jsx(Me,{styles:{body:{padding:0},header:{padding:"12px 20px"}},extra:x?a.jsxs(b,{horizontal:!0,align:"center",gap:8,children:[a.jsxs(ve.Text,{style:{fontSize:12,whiteSpace:"nowrap"},type:"secondary",children:[k,"/",f," ",e("run.detail.progressCases")]}),a.jsx(br,{percent:g,showInfo:!1,size:"small",status:m?"active":void 0,style:{margin:0,width:120}}),a.jsxs(ve.Text,{style:{fontSize:12},type:"secondary",children:[g,"%"]})]}):A?a.jsx(Ut,{icon:a.jsx(Zt,{size:14}),loading:h,size:"small",onClick:()=>{t.confirm({content:e("run.actions.retryErrors.confirm"),onOk:async()=>{S(!0);try{await o(n)}finally{S(!1)}},title:e("run.actions.retryErrors")})},children:e("run.actions.retryErrors")}):void 0,title:a.jsx(ve.Text,{strong:!0,style:{fontSize:14},children:e("run.detail.caseResults")}),children:a.jsx(Tr,{benchmarkId:r,k:l.config?.k??1,results:c.results,runId:n,runStatus:l.status,onRetryCase:T=>u(n,T)})})]})});export{Fi as default};
