import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{k as L,bx as b,bz as U,bA as _,by as E,F as m,I as M,W as T,o as O,bB as P,j as R}from"./index-BBAuCJqA.js";import{A as Y}from"./index-GNbd6Ibo.js";import{r as c}from"../vendor/vendor-emotion-D2wYcXAj.js";import{P as $}from"./PublishedTime-C7DA6p6K.js";import{u as Z}from"./store-DzsL-yA2.js";import{F as K,C as W}from"./FileTree-DJLMwIWJ.js";import{av as z,aw as q}from"../vendor/vendor-icons-C6hg4LnF.js";import{I as V}from"./index-BgqdOH23.js";import"../i18n/i18n-zh-CN-CErfCpws.js";import"../i18n/i18n-en-US-Dpq1-67h.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"./providerConfig-DLbrlvJC.js";import"./index-C8CgY4-I.js";import"./index-D_NDLVtF.js";import"./Markdown-C61aHzBp.js";import"./index-ByHC1s9V.js";import"./Snippet-BgrCzHU6.js";import"./Spotlight-BfNArZet.js";import"./useTranslation-8Gs39hO6.js";import"./image-nnCaCTxV.js";import"./index-BcsJv02u.js";import"./index-C0yP_FPJ.js";import"./index-MaA-KmeU.js";import"./ScrollShadow-CojQ7ODV.js";import"./index-B66PVBgD.js";import"./index-C_IXsgL4.js";const h=R(({css:t,cssVar:r})=>({description:t`
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
