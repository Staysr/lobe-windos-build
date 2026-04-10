import{j as o}from"../vendor/vendor-motion-siEo8VfX.js";import{cP as Y,F as g,I as P,j as S,U as Z,c2 as v,c7 as V,gz as ee,ez as te,eA as N,k as w,bx as oe,B as D,C as f,ae as re,o as F,a9 as A,bE as ne,a as ae,m as L}from"./index-C275yc7e.js";import{r as d}from"../vendor/vendor-emotion-B6qZrIr4.js";import{M as W}from"./Modal-DH7Lw-FF.js";import{A as se}from"./Alert-D4ALX8IV.js";import{A as ie}from"./index-Bg5gInQj.js";import{R as G}from"./index-CLCIVvWm.js";import{T as le}from"./Trans-C3nYCB7P.js";import{cF as pe,cn as ce,cG as de,cH as xe}from"../vendor/vendor-icons-CwKawJ1k.js";import{c as me,b as ge}from"./format-CzTD0Usd.js";import{P as ue}from"./progress-ByKxxd6Z.js";import{F as H}from"./Table-CXPjVh9Q.js";import{U as he}from"./index--YcSIMld.js";var p=(r=>(r[r.Start=0]="Start",r[r.Preparing=1]="Preparing",r[r.Uploading=2]="Uploading",r[r.Importing=3]="Importing",r[r.Success=4]="Success",r[r.Error=5]="Error",r[r.Finished=6]="Finished",r))(p||{});const M="ant",R=S(({css:r,cssVar:t})=>({modalTitleDark:r`
    &.${M}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 80px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${M}-modal-title {
      font-size: 24px;
    }
  `,modalTitleLight:r`
    &.${M}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 140px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${M}-modal-title {
      font-size: 24px;
    }
  `})),$e=d.memo(({icon:r,onOpenChange:t,title:n,open:a,children:c,width:l=550,height:i})=>{const s=Y();return o.jsx(W,{centered:!0,afterOpenChange:t,closable:!1,footer:null,height:i,open:a,width:l,classNames:{header:s?R.modalTitleDark:R.modalTitleLight},title:o.jsxs(g,{horizontal:!0,gap:8,children:[o.jsx(P,{icon:r}),n]}),children:c})});class fe{importSettings=async t=>{await Z.getState().importAppSettings(t)};importData=async(t,n)=>{const a=l=>{n?.onStageChange?.(p.Error);const i=l;n?.onError?.({code:i.data.code,httpStatus:i.data.httpStatus,message:i.message,path:i.data.path})};if((t.messages?.length||0)+(t.sessionGroups?.length||0)+(t.sessions?.length||0)+(t.topics?.length||0)<500){n?.onStageChange?.(p.Importing);const l=Date.now();try{const i=await v.importer.importByPost.mutate({data:t}),s=Date.now()-l;n?.onStageChange?.(p.Success),n?.onSuccess?.(i.results,s)}catch(i){a(i)}return}await this.uploadData(t,{callbacks:n,handleError:a})};importPgData=async(t,n)=>{const{callbacks:a}=n||{},c=i=>{a?.onStageChange?.(p.Error);const s=i;a?.onError?.({code:s.data.code,httpStatus:s.data.httpStatus,message:s.message,path:s.data.path})};if(Object.values(t.data).map(i=>i.length).reduce((i,s)=>i+s,0)<500){a?.onStageChange?.(p.Importing);const i=Date.now();try{const s=await v.importer.importPgByPost.mutate(t),x=Date.now()-i;a?.onStageChange?.(p.Success),a?.onSuccess?.(s.results,x)}catch(s){c(s)}return}await this.uploadData(t,{callbacks:a,handleError:c})};uploadData=async(t,{callbacks:n,handleError:a})=>{const c=`${V()}.json`;let l;try{n?.onStageChange?.(p.Uploading),l=(await ee.uploadDataToS3(t,{filename:c,onProgress:(x,h)=>{n?.onFileUploading?.(h)},pathname:`import_config/${c}`})).data.path}catch{throw new Error("Upload Error")}n?.onStageChange?.(p.Importing);const i=Date.now();try{const s=await v.importer.importByFile.mutate({pathname:l}),x=Date.now()-i;n?.onStageChange?.(p.Success),n?.onSuccess?.(s.results,x)}catch(s){a(s)}}}const je=new fe,ye=async r=>{const t=await r.text();try{return JSON.parse(t)}catch(n){console.error(n),te.error({description:N("import.importConfigFile.description",{ns:"error",reason:n.message}),message:N("import.importConfigFile.title",{ns:"error"})})}},Se=d.memo(({error:r,onClick:t})=>{const{t:n}=w("common");return o.jsx(G,{icon:o.jsx(P,{icon:pe}),status:"error",style:{paddingBlock:24,width:450},title:n("importModal.error.title"),extra:o.jsxs(g,{gap:12,style:{textAlign:"start"},children:[o.jsx(se,{style:{flex:1},title:r?.message,type:"error",extra:o.jsx(oe,{actionIconSize:"small",language:"json",children:JSON.stringify(r,null,2)})}),o.jsx(D,{onClick:t,children:n("close")})]}),subTitle:o.jsx(ie,{children:o.jsx(le,{i18nKey:"importModal.error.desc",ns:"common",children:"非常抱歉，数据库升级过程发生异常。请重试升级"})})})}),e=28,we=re`
  12.5% {
    box-shadow:
      ${e}px -${e}px 0 0,
      ${e*2}px -${e}px 0 0,
      ${e*3}px -${e}px 0 5px,
      ${e}px 0 0 5px,
      ${e*2}px 0 0 0,
      ${e*3}px 0 0 5px,
      ${e}px ${e}px 0 0,
      ${e*2}px ${e}px 0 0,
      ${e*3}px ${e}px 0 0;
  }

  25% {
    box-shadow:
      ${e}px -${e}px 0 5px,
      ${e*2}px -${e}px 0 0,
      ${e*3}px -${e}px 0 5px,
      ${e}px 0 0 0,
      ${e*2}px 0 0 0,
      ${e*3}px 0 0 0,
      ${e}px ${e}px 0 0,
      ${e*2}px ${e}px 0 5px,
      ${e*3}px ${e}px 0 0;
  }

  50% {
    box-shadow:
      ${e}px -${e}px 0 5px,
      ${e*2}px -${e}px 0 5px,
      ${e*3}px -${e}px 0 0,
      ${e}px 0 0 0,
      ${e*2}px 0 0 0,
      ${e*3}px 0 0 0,
      ${e}px ${e}px 0 0,
      ${e*2}px ${e}px 0 0,
      ${e*3}px ${e}px 0 5px;
  }

  62.5% {
    box-shadow:
      ${e}px -${e}px 0 0,
      ${e*2}px -${e}px 0 0,
      ${e*3}px -${e}px 0 0,
      ${e}px 0 0 5px,
      ${e*2}px 0 0 0,
      ${e*3}px 0 0 0,
      ${e}px ${e}px 0 0,
      ${e*2}px ${e}px 0 5px,
      ${e*3}px ${e}px 0 5px;
  }

  75% {
    box-shadow:
      ${e}px -${e}px 0 0,
      ${e*2}px -${e}px 0 5px,
      ${e*3}px -${e}px 0 0,
      ${e}px 0 0 0,
      ${e*2}px 0 0 0,
      ${e*3}px 0 0 5px,
      ${e}px ${e}px 0 0,
      ${e*2}px ${e}px 0 0,
      ${e*3}px ${e}px 0 5px;
  }

  87.5% {
    box-shadow:
      ${e}px -${e}px 0 0,
      ${e*2}px -${e}px 0 5px,
      ${e*3}px -${e}px 0 0,
      ${e}px 0 0 0,
      ${e*2}px 0 0 5px,
      ${e*3}px 0 0 0,
      ${e}px ${e}px 0 5px,
      ${e*2}px ${e}px 0 0,
      ${e*3}px ${e}px 0 0;
  }
`,be=S(({css:r,cssVar:t})=>({loader:r`
      transform: translateX(-${e*2}px);

      aspect-ratio: 1;
      width: 6px;
      border-radius: 50%;

      color: ${t.colorPrimary};

      box-shadow:
        ${e}px -${e}px 0 0,
        ${e*2}px -${e}px 0 0,
        ${e*3}px -${e}px 0 0,
        ${e}px 0 0 5px,
        ${e*2}px 0 0 5px,
        ${e*3}px 0 0 5px,
        ${e}px ${e}px 0 0,
        ${e*2}px ${e}px 0 0,
        ${e*3}px ${e}px 0 0;

      animation: ${we} 2s infinite linear;
    `})),I=d.memo(()=>o.jsx(f,{style:{height:80},children:o.jsx("div",{className:be.loader})})),Ce=d.memo(({progress:r=0,speed:t=0,restTime:n})=>{const{t:a}=w("common");return o.jsxs(o.Fragment,{children:[o.jsx(I,{}),o.jsxs(g,{align:"center",gap:8,width:"100%",children:[a("importModal.uploading.desc"),o.jsxs(g,{flex:1,gap:8,width:"100%",children:[o.jsx(ue,{showInfo:!0,percent:r,strokeColor:F.colorSuccess,trailColor:F.colorSuccessBg}),o.jsxs(g,{horizontal:!0,distribution:"space-between",style:{color:F.colorTextDescription,fontSize:12},children:[o.jsxs("span",{children:[a("importModal.uploading.restTime"),": ",n?me(n):"-"]}),o.jsxs("span",{children:[a("importModal.uploading.speed"),": ",ge(t*1024)]})]})]})]})]})}),Me=r=>{const t=[];for(const[n,a]of Object.entries(r.data))Array.isArray(a)&&a.length>0&&t.push({count:a.length,name:n});return t},De=r=>r.reduce((t,n)=>t+n.count,0),y=S(({css:r,cssVar:t})=>({duplicateAlert:r`
      margin-block-start: ${t.marginMD};
      padding: ${t.paddingMD};
      border: 1px solid ${t.colorWarningBorder};
      border-radius: ${t.borderRadiusLG};

      background-color: ${t.colorWarningBg};
    `,duplicateDescription:r`
      margin-block-start: ${t.marginXS};
      font-size: ${t.fontSizeSM};
      color: ${t.colorTextSecondary};
    `,duplicateOptions:r`
      margin-block-start: ${t.marginSM};
    `,duplicateTag:r`
      border-color: ${t.colorWarningBorder};
      color: ${t.colorWarning};
      background-color: ${t.colorWarningBg};
    `,hash:r`
      font-family: ${t.fontFamilyCode};
      font-size: 12px;
      color: ${t.colorTextTertiary};
    `,infoIcon:r`
      color: ${t.colorTextSecondary};
    `,modalContent:r`
      padding-block: ${t.paddingMD};
      padding-inline: 0;
    `,successIcon:r`
      color: ${t.colorSuccess};
    `,tableContainer:r`
      overflow: hidden;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadiusLG};
    `,tableName:r`
      font-family: ${t.fontFamilyCode};
    `,warningIcon:r`
      color: ${t.colorWarning};
    `})),Te=({open:r=!0,onOpenChange:t=()=>{},onConfirm:n=()=>{},onCancel:a=()=>{},importData:c})=>{const{t:l}=w("common"),[i]=d.useState("skip"),s=Me(c),x=De(s),h=[{dataIndex:"name",key:"name",render:b=>o.jsx("div",{className:y.tableName,children:b}),title:l("importPreview.tables.name")},{dataIndex:"count",key:"count",title:l("importPreview.tables.count")}],$=()=>{n(i==="overwrite"),t(!1)};return o.jsx(W,{open:r,title:l("importPreview.title"),width:700,footer:[o.jsx(D,{onClick:()=>{t(!1),a()},children:l("cancel")},"cancel"),o.jsx(D,{type:"primary",onClick:$,children:l("importPreview.confirmImport")},"confirm")],onCancel:()=>t(!1),children:o.jsx("div",{className:y.modalContent,children:o.jsxs(g,{gap:16,children:[o.jsxs(g,{gap:4,children:[o.jsxs(g,{horizontal:!0,align:"center",justify:"space-between",width:"100%",children:[o.jsxs(g,{horizontal:!0,align:"center",gap:8,children:[o.jsx(ce,{className:y.infoIcon,size:16}),o.jsx(A,{strong:!0,children:l("importPreview.totalRecords",{count:x})})]}),o.jsx(g,{horizontal:!0,children:o.jsx(A,{type:"secondary",children:l("importPreview.totalTables",{count:s.length})})})]}),o.jsxs(g,{horizontal:!0,className:y.hash,gap:4,children:[l("importPreview.hashLabel"),": ",o.jsx("span",{children:c.schemaHash})]})]}),o.jsx("div",{className:y.tableContainer,children:o.jsx(H,{columns:h,dataSource:s,pagination:!1,rowKey:"name",scroll:{y:350},size:"small"})})]})})})},ke=S(({css:r,cssVar:t})=>({zeroCell:r`
      color: ${t.colorTextQuaternary};
    `})),ve=d.memo(({duration:r,dataSource:t,onClickFinish:n})=>{const{t:a}=w("common"),c=l=>l||o.jsx("span",{className:ke.zeroCell,children:"0"});return o.jsx(G,{icon:o.jsx(P,{icon:de}),status:"success",style:{paddingBlock:24,paddingInline:0},title:a("importModal.finish.title"),extra:o.jsx(D,{size:"large",type:"primary",onClick:n,children:a("importModal.finish.start")}),subTitle:t?o.jsxs(g,{gap:16,width:500,children:[a("importModal.finish.subTitle",{duration:(r/1e3).toFixed(2)}),o.jsx(H,{bordered:!0,dataSource:t,pagination:!1,rowKey:"title",size:"small",columns:[{dataIndex:"title",render:c,title:a("importModal.result.type")},{dataIndex:"added",render:c,title:a("importModal.result.added")},{dataIndex:"skips",render:c,title:a("importModal.result.skips")},{dataIndex:"error",render:c,title:a("importModal.result.errors")},{dataIndex:"updated",render:c,title:a("importModal.result.update")}]})]}):a("importModal.finish.onlySettings")})}),O=S(({css:r})=>({children:r`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: transparent;
    }
  `,wrapper:r`
    font-size: inherit;
  `})),Ge=d.memo(({children:r,onFinishImport:t})=>{const{t:n}=w("common"),a=ne(u=>u.refreshAgentList),[c,l]=ae(u=>[u.refreshMessages,u.refreshTopic]),[i,s]=d.useState(0),[x,h]=d.useState(p.Start),[$,b]=d.useState(),[K,z]=d.useState(),[T,E]=d.useState(),[J,B]=d.useState(!1),[k,X]=d.useState(void 0),_=d.useMemo(()=>{if(!T)return;const{type:u,...m}=T;if(u!=="settings")return Object.entries(m).filter(([,j])=>!!j).map(([j,C])=>({added:C.added,error:C.errors,skips:C.skips,title:j,updated:C.updated||0}))},[T]),Q=x===p.Success||x===p.Error,U=()=>{h(p.Finished),E(void 0),z(void 0),b(void 0),t?.()},q=d.useMemo(()=>{switch(x){case p.Preparing:return o.jsxs(f,{gap:24,padding:40,children:[o.jsx(I,{}),o.jsx("p",{children:n("importModal.preparing")})]});case p.Importing:return o.jsxs(f,{gap:24,padding:40,children:[o.jsx(I,{}),o.jsx("p",{children:n("importModal.loading")})]});case p.Uploading:return o.jsx(f,{gap:24,padding:40,children:o.jsx(Ce,{progress:$?.progress,restTime:$?.restTime,speed:$?.speed})});case p.Success:return o.jsx(f,{gap:24,paddingInline:16,children:o.jsx(ve,{dataSource:_,duration:i,onClickFinish:U})});case p.Error:return o.jsx(f,{gap:24,paddingBlock:24,paddingInline:0,children:o.jsx(Se,{error:K,onClick:U})});default:return}},[x,$]);return o.jsxs(o.Fragment,{children:[o.jsx($e,{icon:xe,open:x!==p.Start&&x!==p.Finished,title:n("importModal.title"),width:Q?600:400,children:q}),o.jsx(he,{accept:"application/json",className:L(O.wrapper),maxCount:1,showUploadList:!1,beforeUpload:async u=>{const m=await ye(u);return m&&(X(m),B(!0)),!1},children:o.jsx("div",{className:L(O.children),children:r})}),k&&o.jsx(Te,{importData:k,open:J,onOpenChange:B,onConfirm:async u=>{h(p.Preparing),await je.importPgData(k,{callbacks:{onError:m=>{z(m)},onFileUploading:m=>{b(m)},onStageChange:m=>{h(m)},onSuccess:(m,j)=>{m&&E(m),s(j)}},overwriteExisting:u}),await a(),await c(),await l()}})]})});export{Ge as D};
