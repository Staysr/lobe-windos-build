import{j as e}from"../vendor/vendor-motion-siEo8VfX.js";import{k as L,by as b,bA as U,bB as _,bz as E,F as m,I as M,W as T,o as O,bC as P,j as R}from"./index-C275yc7e.js";import{A as Y}from"./index-B1FRBCSR.js";import{r as c}from"../vendor/vendor-emotion-B6qZrIr4.js";import{P as $}from"./PublishedTime-DQkvB9Yf.js";import{u as Z}from"./store-D5e9H-P4.js";import{F as K,C as W}from"./FileTree-CYBZXcha.js";import{av as z,aw as q}from"../vendor/vendor-icons-CwKawJ1k.js";import{I as V}from"./index-BQC4K4Xn.js";import"../i18n/i18n-zh-CN-CcVu2is6.js";import"../i18n/i18n-en-US-DqZ3IPP5.js";import"../vendor/vendor-es-toolkit-CFMjQStz.js";import"./providerConfig-BNV0IvMA.js";import"./index-DvKkbDJI.js";import"./index-DOKgRZvR.js";import"./Markdown-DhgCm8T7.js";import"./index-DykGnXB3.js";import"./Snippet-Bioy9Xhp.js";import"./Spotlight-OeUDDJY8.js";import"./useTranslation-DXQttwfC.js";import"./image-nnCaCTxV.js";import"./index-CK7d1PZF.js";import"./index-BHwegkc5.js";import"./index-ClojSa7h.js";import"./ScrollShadow-jEogUgPT.js";import"./index-CAiMwnpS.js";import"./index-BdXZwuHp.js";const h=R(({css:t,cssVar:r})=>({description:t`
    overflow: hidden;

    margin: 0;

    font-size: 13px;
    line-height: 1.5;
    color: ${r.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,divider:t`
    flex-shrink: 0;
    width: 1px;
    background: ${r.colorBorderSecondary};
  `,left:t`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `,meta:t`
    flex-shrink: 0;
    padding: 16px;
    border-block-end: 1px solid ${r.colorBorderSecondary};
  `,name:t`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: ${r.colorText};
  `,right:t`
    container-type: size;
    overflow: auto;
    flex: 1;
  `})),X=t=>{const r={},l=u=>{for(const o of u)o.type==="file"&&o.content!==void 0?r[o.path]=o.content:o.children&&l(o.children)};return l(t),r},G=t=>t?Object.keys(t).sort().map(r=>({name:r.split("/").pop()||r,path:r,type:"file"})):[],H=async t=>{const l=await(await fetch(t)).arrayBuffer();return new Promise((u,o)=>{P(new Uint8Array(l),(n,j)=>{if(n)return o(n);const f={},p=[],k=new TextDecoder;for(const[i,d]of Object.entries(j)){if(i.endsWith("/")||i.includes("__MACOSX"))continue;const g=i.indexOf("/"),s=g>=0?i.slice(g+1):i;if(!s||s==="SKILL.md")continue;const a=k.decode(d);f[s]=a,p.push({content:a,name:s.split("/").pop()||s,path:s,type:"file"})}p.sort((i,d)=>i.path.localeCompare(d.path)),u({contentMap:f,tree:p})})})},J=c.memo(({identifier:t})=>{const{t:r}=L("setting"),[l,u]=c.useState("SKILL.md"),o=Z(x=>x.useFetchSkillDetail),{data:n,isLoading:j}=o({identifier:t}),f=b(U.getAgentSkillByIdentifier(t)),{data:p}=b(x=>x.useFetchAgentSkillDetail)(f?.id),[k,i]=c.useState({}),[d,g]=c.useState([]),s=_.getSkillDownloadUrl(encodeURIComponent(t));c.useEffect(()=>{f||H(s).then(({contentMap:x,tree:B})=>{i(x),g(B)}).catch(()=>{})},[s,f]);const a=c.useMemo(()=>p?.resourceTree??[],[p?.resourceTree]),F=c.useMemo(()=>X(a),[a]),A=a.length>0?F:k,C=c.useMemo(()=>a.length>0?a:d.length>0?d:G(n?.resources),[a,d,n?.resources]);if(j||!n)return e.jsx(E,{active:!0,paragraph:{rows:8},style:{padding:16}});const{name:S,icon:I,version:w,description:y,homepage:v,github:D}=n,N={content:p?.skillDetail?.content||n.content};return e.jsxs(m,{style:{height:"100%",overflow:"hidden"},children:[e.jsx("div",{className:h.meta,children:e.jsxs(m,{horizontal:!0,align:"center",gap:12,children:[e.jsx(Y,{avatar:I||S,shape:"square",size:40,style:{flex:"none"}}),e.jsxs(m,{flex:1,gap:4,style:{overflow:"hidden"},children:[e.jsxs(m,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(m,{horizontal:!0,align:"center",className:h.description,gap:4,children:[e.jsx("span",{className:h.name,children:S}),w&&e.jsxs(e.Fragment,{children:[e.jsx(M,{icon:z}),e.jsxs("span",{children:["v",w]})]}),e.jsx(M,{icon:z}),r("agentSkillDetail.updatedAt")," ",e.jsx($,{date:n.updatedAt,template:"MMM DD, YYYY"})]}),e.jsxs(m,{horizontal:!0,align:"center",gap:2,style:{flexShrink:0},children:[D?.url&&e.jsx("a",{href:D.url,rel:"noreferrer",target:"_blank",children:e.jsx(T,{fill:O.colorTextDescription,icon:V,title:r("agentSkillDetail.repository")})}),v&&e.jsx("a",{href:v,rel:"noreferrer",target:"_blank",children:e.jsx(T,{icon:q,title:r("agentSkillDetail.sourceUrl")})})]})]}),y&&e.jsx("p",{className:h.description,children:y})]})]})}),e.jsxs(m,{horizontal:!0,style:{flex:1,overflow:"hidden"},children:[e.jsx("div",{className:h.left,children:e.jsx(K,{resourceTree:C,selectedFile:l,onSelectFile:u})}),e.jsx("div",{className:h.divider}),e.jsx("div",{className:h.right,children:e.jsx(W,{contentMap:A,selectedFile:l,skillDetail:N})},l)]})]})});J.displayName="MarketSkillDetail";export{J as default};
