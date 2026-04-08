const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BQGcLAdX.js","assets/index-BBAuCJqA.js","vendor/vendor-motion-DRC1LdIk.js","vendor/vendor-emotion-D2wYcXAj.js","i18n/i18n-zh-CN-CErfCpws.js","i18n/i18n-en-US-Dpq1-67h.js","vendor/vendor-es-toolkit-O0KSByiM.js","vendor/vendor-icons-C6hg4LnF.js","assets/providerConfig-DLbrlvJC.js","assets/index-yzzpVuwK.css"])))=>i.map(i=>d[i]);
import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{r as f}from"../vendor/vendor-emotion-D2wYcXAj.js";import{k as _,a5 as I,C as O,F as u,a8 as C,o as m,cd as x,I as k,j as R,bu as $,cu as z,co as W}from"./index-BBAuCJqA.js";import{F as J}from"./providerConfig-DLbrlvJC.js";import{u as Z,I as B,G as H,a as M}from"./useNotionImport-CFaMJpzV.js";import{N as q}from"./index-CO1aYmRK.js";import{u as y}from"./store-D5lSAt2E.js";import{s as K}from"./identifier-DNYzSWMy.js";import{aZ as Q,a_ as V}from"../vendor/vendor-icons-C6hg4LnF.js";import{U as X}from"./index-BqAaZ8T3.js";import{T as Y}from"./PageTitle-BP6MOlxH.js";import"../i18n/i18n-zh-CN-CErfCpws.js";import"../i18n/i18n-en-US-Dpq1-67h.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"./index-C_IXsgL4.js";import"./ToggleLeftPanelButton--gF-yyr1.js";import"./DeleteOutlined-DFutYCzo.js";import"./progress-DdbsdCjT.js";import"./index-C6GNDBIm.js";import"./store-CcBSmXKM.js";const w=80,i=R(({css:d,cssVar:s})=>({actionTitle:d`
    margin-block-start: 12px;
    font-size: 16px;
    color: ${s.colorTextSecondary};
  `,card:d`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    height: 140px;
    border-radius: ${s.borderRadiusLG};

    font-weight: 500;
    text-align: center;

    background: ${s.colorFillTertiary};
    box-shadow: 0 0 0 1px ${s.colorFillTertiary} inset;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${s.colorFillSecondary};
    }
  `,glow:d`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.5;
    filter: blur(24px);
  `,icon:d`
    position: absolute;
    z-index: 1;
    inset-block-end: -24px;
    inset-inline-end: 8px;

    flex: none;
  `})),ee=f.memo(({hasPages:d=!1,knowledgeBaseId:s})=>{const{t:r}=_(["file","common"]),[h,j]=f.useState(!1),[F,N,D,g,S]=y(o=>[o.createNewPage,o.createOptimisticPage,o.replaceTempPageWithReal,o.setSelectedPageId,o.fetchDocuments]),[P]=I(o=>[o.createDocument]),p=Z({createDocument:P,currentFolderId:null,libraryId:s??null,refetchResources:S,t:r}),A=async o=>{await p.handleNotionImport(o)},T=async(o,n)=>{if(!o){await F(n);return}const c=N(n);g(c,!1);try{const t=await P({content:o,knowledgeBaseId:s,title:n}),l={content:t.content||"",createdAt:t.createdAt?new Date(t.createdAt):new Date,editorData:typeof t.editorData=="string"?JSON.parse(t.editorData):t.editorData||null,fileType:"custom/document",filename:t.title||n,id:t.id,metadata:t.metadata||{},source:"document",sourceType:z.EDITOR,title:t.title||n,totalCharCount:t.content?.length||0,totalLineCount:0,updatedAt:t.updatedAt?new Date(t.updatedAt):new Date};D(c,l),g(t.id)}catch(t){throw console.error("Failed to create page:",t),y.getState().removeTempPage(c),g(null),t}},E=async o=>{try{j(!0);const n=o.name.split(".").pop()?.toLowerCase();if(n==="md"||n==="markdown"){const c=await o.text();await T(c,o.name.replace(/\.md$|\.markdown$/i,""))}else if(n==="pdf"||n==="docx"){const c=o.name.replace(/\.(pdf|docx)$/i,""),t=N(c);try{const l=await I.getState().uploadWithProgress({file:o,knowledgeBaseId:s});if(!l)throw new Error("Failed to upload file");const{lambdaClient:v}=await $(async()=>{const{lambdaClient:U}=await import("./index-BQGcLAdX.js");return{lambdaClient:U}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),a=await v.document.parseDocument.mutate({id:l.id}),G={content:a.content||"",createdAt:a.createdAt?new Date(a.createdAt):new Date,editorData:typeof a.editorData=="string"?JSON.parse(a.editorData):a.editorData||null,fileType:a.fileType||"custom/document",filename:a.filename||c,id:a.id,metadata:a.metadata||{},source:a.source||"document",sourceType:a.sourceType||"file",title:a.title||c,totalCharCount:a.totalCharCount||0,totalLineCount:a.totalLineCount||0,updatedAt:a.updatedAt?new Date(a.updatedAt):new Date};D(t,G),g(a.id,!1);const b=K(a.id),L=b?`/page/${b}`:"/page";window.history.replaceState({},"",L)}catch(l){throw console.error("Failed to upload and parse file:",l),y.getState().removeTempPage(t),l}}}catch(n){console.error("Failed to upload file:",n)}finally{j(!1)}return!1};return e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(O,{gap:24,height:"100%",style:{paddingBottom:100},width:"100%",children:[d&&e.jsxs(u,{justify:"center",style:{textAlign:"center"},children:[e.jsx(C,{as:"h4",children:r("pageEditor.empty.title")}),e.jsx(C,{type:"secondary",children:r("or",{ns:"common"})})]}),e.jsxs(u,{horizontal:!0,gap:12,children:[e.jsxs(u,{className:i.card,padding:16,onClick:()=>T("",r("pageList.untitled")),children:[e.jsx("span",{className:i.actionTitle,children:r("pageEditor.empty.createNewDocument")}),e.jsx("div",{className:i.glow,style:{background:m.purple}}),e.jsx(x,{className:i.icon,color:m.purple,icon:e.jsx(k,{color:"#fff",icon:Q}),size:w,type:"file"})]}),e.jsx(X,{accept:".md,.markdown,.pdf,.docx",beforeUpload:E,disabled:h,multiple:!1,showUploadList:!1,children:e.jsxs(u,{className:i.card,padding:16,style:{opacity:h?.5:1},children:[e.jsx("span",{className:i.actionTitle,children:h?"Uploading...":r("pageEditor.empty.uploadFiles")}),e.jsx("div",{className:i.glow,style:{background:m.gold}}),e.jsx(x,{className:i.icon,color:m.gold,icon:e.jsx(k,{color:"#fff",icon:V}),size:w,type:"file"})]})}),e.jsxs(u,{className:i.card,padding:16,onClick:p.handleOpenNotionGuide,children:[e.jsx("span",{className:i.actionTitle,children:r("pageEditor.empty.importNotion")}),e.jsx("div",{className:i.glow,style:{background:m.geekblue}}),e.jsx(x,{className:i.icon,color:m.geekblue,icon:e.jsx(B,{color:"#fff"}),size:w,type:"file"})]})]})]}),e.jsx(H,{cancelText:r("header.actions.notionGuide.cancel"),cover:e.jsx(M,{height:269,src:J.importFromNotionGuide,width:358}),desc:r("header.actions.notionGuide.desc"),okText:r("header.actions.notionGuide.ok"),open:p.notionGuideOpen,title:r("header.actions.notionGuide.title"),onCancel:p.handleCloseNotionGuide,onOk:p.handleStartNotionImport}),e.jsx("input",{accept:".zip",ref:p.notionInputRef,style:{display:"none"},type:"file",onChange:A})]})}),te=f.memo(()=>e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx(f.Suspense,{fallback:e.jsx(W,{debugId:"PagesPage"}),children:e.jsx(ee,{})})]}));te.displayName="PagesPage";export{te as default};
