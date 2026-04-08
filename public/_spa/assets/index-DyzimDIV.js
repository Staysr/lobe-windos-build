import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{L as z,F as o,I as v,j as B,k as F,T as I,B as S,aT as q,f as P,aw as A,bZ as U,bU as H}from"./index-BBAuCJqA.js";import{E as W}from"./Empty-BmpfRZff.js";import{r as b}from"../vendor/vendor-emotion-D2wYcXAj.js";import{N as Q}from"./index-vMrk6En8.js";import{u as N}from"./store-OpdFyaYT.js";import{S as Z}from"./StatusBadge-DoCOj9Xa.js";import{ae as G,ac as _,bB as J,bC as M,U as K,bp as X,bD as Y,bE as O,t as V,bF as ee,bG as te,E as re,am as ae,bH as ne,bI as oe,aa as se,bJ as ie,bK as le,bL as ce,bM as de,aZ as E}from"../vendor/vendor-icons-C6hg4LnF.js";import{M as he}from"./Modal-DupZSReQ.js";import{F as k}from"./index-DwHjYE4k.js";import"../i18n/i18n-zh-CN-CErfCpws.js";import"../i18n/i18n-en-US-Dpq1-67h.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"./providerConfig-DLbrlvJC.js";import"./Drawer-hdkBrhHh.js";import"./useForm-BVlaNNzA.js";import"./row-ClDdlNJa.js";const m=B(({css:t,cssVar:r})=>({meta:t`
    font-size: 11px;
    color: ${r.colorTextTertiary};
  `,name:t`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: ${r.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,passRate:t`
    font-family: monospace;
    font-size: 14px;
    font-weight: 700;
    color: ${r.colorText};
  `,row:t`
    cursor: pointer;

    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid ${r.colorBorderSecondary};
    border-radius: 8px;

    transition: all 200ms ${r.motionEaseOut};

    &:hover {
      border-color: ${r.colorPrimary};
      background: ${r.colorFillQuaternary};
    }
  `,separator:t`
    color: ${r.colorBorderSecondary};
  `,stat:t`
    display: inline-flex;
    gap: 2px;
    align-items: center;
    font-size: 12px;
  `})),pe=b.memo(({id:t,name:r,status:a,benchmarkId:d,model:u,agentName:i,createdAt:n,passCount:f=0,failCount:x=0,errorCount:g=0,passRate:s,cost:h,completedCases:p=0,totalCases:l=0})=>{const w=$=>$?new Date($).toLocaleDateString("en-US",{day:"numeric",month:"short"}):"",c=l>0?Math.round(p/l*100):0,j=(a==="completed"||a==="running")&&f+x+g>0;return e.jsx(z,{style:{color:"inherit",textDecoration:"none"},to:`/eval/bench/${d}/runs/${t}`,children:e.jsxs(o,{horizontal:!0,align:"center",className:m.row,gap:12,children:[e.jsxs(o,{flex:1,gap:2,style:{minWidth:0},children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx("span",{className:m.name,children:r||t.slice(0,8)}),e.jsx(Z,{status:a})]}),e.jsxs(o,{horizontal:!0,align:"center",className:m.meta,gap:4,children:[n&&e.jsx("span",{children:w(n)}),n&&i&&e.jsx("span",{className:m.separator,children:"/"}),i&&e.jsx("span",{children:i}),(n||i)&&u&&e.jsx("span",{className:m.separator,children:"/"}),u&&e.jsx("span",{style:{fontFamily:"monospace"},children:u}),h!=null&&h>0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:m.separator,children:"/"}),e.jsxs("span",{children:["$",h.toFixed(2)]})]})]})]}),a==="running"?e.jsxs(o,{align:"flex-end",gap:2,style:{width:100},children:[e.jsxs(o,{horizontal:!0,align:"center",justify:"space-between",style:{fontSize:10,color:"var(--ant-color-text-tertiary)",width:"100%"},children:[e.jsxs("span",{children:[p,"/",l]}),e.jsxs("span",{children:[c,"%"]})]}),e.jsx("div",{style:{background:"var(--ant-color-fill-tertiary)",borderRadius:2,height:4,overflow:"hidden",width:"100%"},children:e.jsx("div",{style:{background:"var(--ant-color-primary)",borderRadius:2,height:"100%",transition:"width 300ms ease",width:`${c}%`}})})]}):j?e.jsxs(o,{horizontal:!0,align:"center",gap:10,children:[e.jsxs("span",{className:m.stat,style:{color:"var(--ant-color-success)"},children:[e.jsx(v,{icon:G,size:12}),f]}),e.jsxs("span",{className:m.stat,style:{color:"var(--ant-color-error)"},children:[e.jsx(v,{icon:_,size:12}),x]}),g>0&&e.jsxs("span",{className:m.stat,style:{color:"var(--ant-color-warning)"},children:[e.jsx(v,{icon:J,size:12}),g]}),s!=null&&e.jsxs("span",{className:m.passRate,children:[(s*100).toFixed(0),"%"]})]}):a==="failed"?e.jsxs("span",{className:m.meta,children:[p,"/",l," before failure"]}):e.jsx("span",{className:m.meta,children:"Queued"}),e.jsx(v,{icon:M,size:14,style:{color:"var(--ant-color-text-tertiary)",flexShrink:0}})]})})}),D=[ee,te,re,ae,ne,oe,se,ie,le,ce,de],me=t=>{const r=t.split("").reduce((a,d)=>a+d.charCodeAt(0),0);return D[r%D.length]},y=B(({css:t,cssVar:r})=>({card:t`
    height: 100%;
    padding: 20px;
    border: 1px solid ${r.colorBorderSecondary};
    border-radius: 12px;
  `,description:t`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-size: 12px;
    line-height: 1.6;
    color: ${r.colorTextTertiary};
  `,detailLink:t`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: 6px;

    color: ${r.colorTextTertiary};

    transition: all 200ms ${r.motionEaseOut};

    &:hover {
      color: ${r.colorText};
      background: ${r.colorFillTertiary};
    }
  `,emptyBox:t`
    padding-block: 24px;
    padding-inline: 16px;
    border: 1px dashed ${r.colorBorderSecondary};
    border-radius: 8px;

    text-align: center;

    background: ${r.colorFillQuaternary};
  `,iconBox:t`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: 8px;
  `,meta:t`
    font-size: 12px;
    color: ${r.colorTextTertiary};
  `,name:t`
    font-size: 14px;
    font-weight: 500;
    color: ${r.colorText};
    text-decoration: none;

    transition: color 200ms ${r.motionEaseOut};

    &:hover {
      color: ${r.colorPrimary};
    }
  `,recentLabel:t`
    font-size: 12px;
    font-weight: 500;
    color: ${r.colorTextTertiary};
  `,viewAll:t`
    font-size: 11px;
    color: ${r.colorPrimary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `})),xe=b.memo(({id:t,name:r,description:a,testCaseCount:d,recentRuns:u,runCount:i=0,bestScore:n,source:f,tags:x,datasetCount:g=0})=>{const{t:s}=F("eval"),h=i||u?.length||0,p=u?.slice(0,3)||[],l=g>0,w=b.useMemo(()=>me(t),[t]);return e.jsxs(o,{className:y.card,gap:12,justify:"space-between",children:[e.jsxs(o,{gap:16,children:[e.jsxs(o,{horizontal:!0,justify:"space-between",children:[e.jsxs(o,{horizontal:!0,align:"start",gap:12,children:[e.jsx("div",{className:y.iconBox,style:{background:f==="user"?"var(--ant-color-success-bg)":"var(--ant-color-primary-bg)"},children:e.jsx(v,{icon:f==="user"?K:w,size:24,style:{color:f==="user"?"var(--ant-color-success)":"var(--ant-color-primary)"}})}),e.jsxs(o,{gap:4,children:[e.jsx(z,{className:y.name,to:`/eval/bench/${t}`,children:r}),e.jsxs(o,{horizontal:!0,align:"center",className:y.meta,gap:4,children:[e.jsx("span",{children:s("benchmark.card.datasetCount",{count:g})}),e.jsx("span",{children:"·"}),e.jsx("span",{children:s("benchmark.card.caseCount",{count:d||0})}),e.jsx("span",{children:"·"}),e.jsx("span",{children:s("benchmark.card.runCount",{count:h})}),n!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"·"}),e.jsxs("span",{children:[s("benchmark.card.bestScore")," ",e.jsx("span",{style:{color:"var(--ant-color-text)",fontFamily:"monospace",fontWeight:600},children:n.toFixed(1)})]})]})]})]})]}),e.jsx(z,{className:y.detailLink,to:`/eval/bench/${t}`,children:e.jsx(v,{icon:M,size:16})})]}),a&&e.jsx("p",{className:y.description,children:a}),x&&x.length>0&&e.jsxs(o,{horizontal:!0,gap:4,style:{flexWrap:"wrap"},children:[x.slice(0,4).map(c=>e.jsx(I,{style:{fontSize:10},children:c},c)),x.length>4&&e.jsxs(I,{style:{fontSize:10},children:["+",x.length-4]})]})]}),l?e.jsxs(o,{gap:8,children:[e.jsxs(o,{horizontal:!0,align:"center",justify:"space-between",children:[e.jsx("span",{className:y.recentLabel,children:s("benchmark.card.recentRuns")}),h>3&&e.jsx(z,{className:y.viewAll,to:`/eval/bench/${t}`,children:s("benchmark.card.viewAll",{count:h})})]}),h>0?e.jsx(o,{gap:6,children:p.length>0?p.map(c=>{const j=c.metrics,$=c.config?.agentSnapshot,C=j?.passedCases??0,R=j?.failedCases??0,L=j?.errorCases??0;return e.jsx(pe,{agentName:$?.title,benchmarkId:t,cost:j?.totalCost,createdAt:c.createdAt,errorCount:L,failCount:R,id:c.id,model:$?.model,name:c.name,passCount:C,passRate:j?.passRate,score:j?.averageScore,status:c.status,totalCases:j?.totalCases??0,completedCases:j?.completedCases??C+R+L},c.id)}):e.jsx("p",{style:{color:"var(--ant-color-text-tertiary)",fontSize:12,textAlign:"center",padding:"12px 0"},children:s("benchmark.card.noRecentRuns")})}):e.jsxs("div",{className:y.emptyBox,children:[e.jsx(v,{icon:O,size:24,style:{color:"var(--ant-color-text-quaternary)",marginBottom:8}}),e.jsx("p",{style:{color:"var(--ant-color-text-tertiary)",fontSize:13,margin:"0 0 4px"},children:s("benchmark.card.empty")}),e.jsx("p",{style:{color:"var(--ant-color-text-quaternary)",fontSize:12,margin:"0 0 12px"},children:s("benchmark.card.emptyHint")}),e.jsx(z,{style:{textDecoration:"none"},to:`/eval/bench/${t}?tab=runs`,children:e.jsx(S,{icon:V,size:"small",variant:"filled",children:s("benchmark.card.startFirst")})})]})]}):e.jsxs("div",{className:y.emptyBox,children:[e.jsx(v,{icon:X,size:24,style:{color:"var(--ant-color-text-quaternary)",marginBottom:8}}),e.jsx("p",{style:{color:"var(--ant-color-text-tertiary)",fontSize:13,margin:"0 0 4px"},children:s("benchmark.card.noDataset")}),e.jsx("p",{style:{color:"var(--ant-color-text-quaternary)",fontSize:12,margin:"0 0 12px"},children:s("benchmark.card.noDatasetHint")}),e.jsx(z,{style:{textDecoration:"none"},to:`/eval/bench/${t}`,children:e.jsx(S,{icon:Y,size:"small",variant:"filled",children:s("benchmark.card.importDataset")})})]})]})}),ue=t=>t.trim().toLowerCase().replaceAll(/\s+/g,"-").replaceAll(/[^\da-z-]/g,""),ge=b.memo(({open:t,onCancel:r})=>{const{t:a}=F("eval"),{message:d}=q.useApp(),u=P(),[i]=k.useForm(),[n,f]=b.useState(!1),[x,g]=b.useState(!1),s=N(p=>p.createBenchmark),h=k.useWatch("name",i);return b.useEffect(()=>{!x&&h&&i.setFieldValue("identifier",ue(h))},[h,x,i]),e.jsx(he,{allowFullscreen:!0,destroyOnHidden:!0,okButtonProps:{loading:n},okText:a("benchmark.create.confirm"),open:t,title:a("benchmark.create.title"),width:480,onCancel:p=>{i.resetFields(),g(!1),r?.(p)},onOk:async p=>{try{const l=await i.validateFields();f(!0);const w=await s({identifier:l.identifier.trim(),name:l.name.trim(),description:l.description?.trim()||void 0,tags:l.tags?.length>0?l.tags:void 0});d.success(a("benchmark.create.success")),i.resetFields(),g(!1),r?.(p),w?.id&&u(`/eval/bench/${w.id}`)}catch(l){if(l?.errorFields)return;d.error(a("benchmark.create.error"))}finally{f(!1)}},children:e.jsxs(k,{form:i,layout:"vertical",style:{paddingBlock:16},children:[e.jsx(k.Item,{label:a("benchmark.create.name.label"),name:"name",rules:[{message:a("benchmark.create.nameRequired"),required:!0}],children:e.jsx(A,{autoFocus:!0,placeholder:a("benchmark.create.name.placeholder")})}),e.jsx(k.Item,{label:a("benchmark.create.identifier.label"),name:"identifier",rules:[{message:a("benchmark.create.identifierRequired"),required:!0}],children:e.jsx(A,{placeholder:a("benchmark.create.identifier.placeholder"),onChange:()=>g(!0)})}),e.jsx(k.Item,{label:a("benchmark.create.description.label"),name:"description",children:e.jsx(U,{placeholder:a("benchmark.create.description.placeholder"),rows:3})}),e.jsx(k.Item,{label:a("benchmark.create.tags.label"),name:"tags",style:{marginBottom:0},children:e.jsx(H,{mode:"tags",open:!1,placeholder:a("benchmark.create.tags.placeholder"),style:{width:"100%"},tokenSeparators:[",","，"," "]})})]})})}),T=B(({css:t,cssVar:r})=>({container:t`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `,subtitle:t`
    margin: 0;
    font-size: 13px;
    color: ${r.colorTextTertiary};
  `,title:t`
    margin: 0;

    font-size: 22px;
    font-weight: 600;
    line-height: 1.3;
    color: ${r.colorText};
    letter-spacing: -0.02em;
  `})),Ie=b.memo(()=>{const{t}=F("eval"),[r,a]=b.useState(!1),d=N(n=>n.benchmarkList),u=N(n=>n.useFetchBenchmarks),{isLoading:i}=u();return e.jsxs(o,{className:T.container,gap:32,height:"100%",width:"100%",children:[e.jsxs(o,{horizontal:!0,align:"center",justify:"space-between",children:[e.jsxs(o,{gap:4,children:[e.jsx("h1",{className:T.title,children:t("overview.title")}),e.jsx("p",{className:T.subtitle,children:t("overview.subtitle")})]}),d.length>0&&e.jsx(S,{icon:E,type:"primary",onClick:()=>a(!0),children:t("overview.createBenchmark")})]}),i?e.jsx(o,{align:"center",flex:1,justify:"center",children:e.jsx(Q,{size:64})}):d.length===0?e.jsx(o,{align:"center",flex:1,justify:"center",children:e.jsx(W,{description:t("benchmark.empty"),icon:O,children:e.jsx(S,{icon:E,style:{marginTop:16},type:"primary",onClick:()=>a(!0),children:t("overview.createBenchmark")})})}):e.jsx("div",{style:{display:"grid",gap:20,gridTemplateColumns:"repeat(auto-fill, minmax(480px, 1fr))"},children:d.map(n=>e.jsx(xe,{bestScore:n.bestScore,datasetCount:n.datasetCount,description:n.description,id:n.id,name:n.name,recentRuns:n.recentRuns,runCount:n.runCount,source:n.source,tags:n.tags,testCaseCount:n.testCaseCount},n.id))}),e.jsx(ge,{open:r,onCancel:()=>a(!1)})]})});export{Ie as default};
