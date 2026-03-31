import{j as o}from"../vendor/vendor-motion-BIhyHZ0p.js";import{bA as q,F as u,I as P,f as S,v as Y,a_ as k,cL as V,cM as U,g as w,aJ as ee,B as D,C as f,a2 as te,k as F,Z as A,j as L}from"./index-Rjxk4g_I.js";import{r as c}from"../vendor/vendor-emotion-DdM-9MtU.js";import{M as O}from"./Modal-DwD3upc5.js";import{u as oe}from"./upload-Ai724d6H.js";import{v as re}from"./v4-BKrj-4V8.js";import{i as ne,u as ae}from"./index-BLPbWvKS.js";import{A as se}from"./Alert-CygUxl_B.js";import{A as ie}from"./index-B4Zarq8E.js";import{R as W}from"./index-CjQ9Fq_B.js";import{T as le}from"./Trans-CmzCbFmQ.js";import{cz as pe,cm as de,cA as ce,cB as xe}from"../vendor/vendor-icons-B5XxavR9.js";import{c as me,b as ue}from"./format-owXwBtD5.js";import{P as ge}from"./progress-DejBjnL0.js";import{F as G}from"./Table-2tnhkdGw.js";import{U as he}from"./index-hxGsJIZ3.js";var p=(r=>(r[r.Start=0]="Start",r[r.Preparing=1]="Preparing",r[r.Uploading=2]="Uploading",r[r.Importing=3]="Importing",r[r.Success=4]="Success",r[r.Error=5]="Error",r[r.Finished=6]="Finished",r))(p||{});const M="ant",R=S(({css:r,cssVar:t})=>({modalTitleDark:r`
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
  `})),$e=c.memo(({icon:r,onOpenChange:t,title:n,open:a,children:d,width:l=550,height:i})=>{const s=q();return o.jsx(O,{centered:!0,afterOpenChange:t,closable:!1,footer:null,height:i,open:a,width:l,classNames:{header:s?R.modalTitleDark:R.modalTitleLight},title:o.jsxs(u,{horizontal:!0,gap:8,children:[o.jsx(P,{icon:r}),n]}),children:d})});class fe{importSettings=async t=>{await Y.getState().importAppSettings(t)};importData=async(t,n)=>{const a=l=>{n?.onStageChange?.(p.Error);const i=l;n?.onError?.({code:i.data.code,httpStatus:i.data.httpStatus,message:i.message,path:i.data.path})};if((t.messages?.length||0)+(t.sessionGroups?.length||0)+(t.sessions?.length||0)+(t.topics?.length||0)<500){n?.onStageChange?.(p.Importing);const l=Date.now();try{const i=await k.importer.importByPost.mutate({data:t}),s=Date.now()-l;n?.onStageChange?.(p.Success),n?.onSuccess?.(i.results,s)}catch(i){a(i)}return}await this.uploadData(t,{callbacks:n,handleError:a})};importPgData=async(t,n)=>{const{callbacks:a}=n||{},d=i=>{a?.onStageChange?.(p.Error);const s=i;a?.onError?.({code:s.data.code,httpStatus:s.data.httpStatus,message:s.message,path:s.data.path})};if(Object.values(t.data).map(i=>i.length).reduce((i,s)=>i+s,0)<500){a?.onStageChange?.(p.Importing);const i=Date.now();try{const s=await k.importer.importPgByPost.mutate(t),x=Date.now()-i;a?.onStageChange?.(p.Success),a?.onSuccess?.(s.results,x)}catch(s){d(s)}return}await this.uploadData(t,{callbacks:a,handleError:d})};uploadData=async(t,{callbacks:n,handleError:a})=>{const d=`${re()}.json`;let l;try{n?.onStageChange?.(p.Uploading),l=(await oe.uploadDataToS3(t,{filename:d,onProgress:(x,h)=>{n?.onFileUploading?.(h)},pathname:`import_config/${d}`})).data.path}catch{throw new Error("Upload Error")}n?.onStageChange?.(p.Importing);const i=Date.now();try{const s=await k.importer.importByFile.mutate({pathname:l}),x=Date.now()-i;n?.onStageChange?.(p.Success),n?.onSuccess?.(s.results,x)}catch(s){a(s)}}}const je=new fe,ye=async r=>{const t=await r.text();try{return JSON.parse(t)}catch(n){console.error(n),V.error({description:U("import.importConfigFile.description",{ns:"error",reason:n.message}),message:U("import.importConfigFile.title",{ns:"error"})})}},Se=c.memo(({error:r,onClick:t})=>{const{t:n}=w("common");return o.jsx(W,{icon:o.jsx(P,{icon:pe}),status:"error",style:{paddingBlock:24,width:450},title:n("importModal.error.title"),extra:o.jsxs(u,{gap:12,style:{textAlign:"start"},children:[o.jsx(se,{style:{flex:1},title:r?.message,type:"error",extra:o.jsx(ee,{actionIconSize:"small",language:"json",children:JSON.stringify(r,null,2)})}),o.jsx(D,{onClick:t,children:n("close")})]}),subTitle:o.jsx(ie,{children:o.jsx(le,{i18nKey:"importModal.error.desc",ns:"common",children:"非常抱歉，数据库升级过程发生异常。请重试升级"})})})}),e=28,we=te`
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
    `})),I=c.memo(()=>o.jsx(f,{style:{height:80},children:o.jsx("div",{className:be.loader})})),Ce=c.memo(({progress:r=0,speed:t=0,restTime:n})=>{const{t:a}=w("common");return o.jsxs(o.Fragment,{children:[o.jsx(I,{}),o.jsxs(u,{align:"center",gap:8,width:"100%",children:[a("importModal.uploading.desc"),o.jsxs(u,{flex:1,gap:8,width:"100%",children:[o.jsx(ge,{showInfo:!0,percent:r,strokeColor:F.colorSuccess,trailColor:F.colorSuccessBg}),o.jsxs(u,{horizontal:!0,distribution:"space-between",style:{color:F.colorTextDescription,fontSize:12},children:[o.jsxs("span",{children:[a("importModal.uploading.restTime"),": ",n?me(n):"-"]}),o.jsxs("span",{children:[a("importModal.uploading.speed"),": ",ue(t*1024)]})]})]})]})]})}),Me=r=>{const t=[];for(const[n,a]of Object.entries(r.data))Array.isArray(a)&&a.length>0&&t.push({count:a.length,name:n});return t},De=r=>r.reduce((t,n)=>t+n.count,0),y=S(({css:r,cssVar:t})=>({duplicateAlert:r`
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
    `})),ve=({open:r=!0,onOpenChange:t=()=>{},onConfirm:n=()=>{},onCancel:a=()=>{},importData:d})=>{const{t:l}=w("common"),[i]=c.useState("skip"),s=Me(d),x=De(s),h=[{dataIndex:"name",key:"name",render:b=>o.jsx("div",{className:y.tableName,children:b}),title:l("importPreview.tables.name")},{dataIndex:"count",key:"count",title:l("importPreview.tables.count")}],$=()=>{n(i==="overwrite"),t(!1)};return o.jsx(O,{open:r,title:l("importPreview.title"),width:700,footer:[o.jsx(D,{onClick:()=>{t(!1),a()},children:l("cancel")},"cancel"),o.jsx(D,{type:"primary",onClick:$,children:l("importPreview.confirmImport")},"confirm")],onCancel:()=>t(!1),children:o.jsx("div",{className:y.modalContent,children:o.jsxs(u,{gap:16,children:[o.jsxs(u,{gap:4,children:[o.jsxs(u,{horizontal:!0,align:"center",justify:"space-between",width:"100%",children:[o.jsxs(u,{horizontal:!0,align:"center",gap:8,children:[o.jsx(de,{className:y.infoIcon,size:16}),o.jsx(A,{strong:!0,children:l("importPreview.totalRecords",{count:x})})]}),o.jsx(u,{horizontal:!0,children:o.jsx(A,{type:"secondary",children:l("importPreview.totalTables",{count:s.length})})})]}),o.jsxs(u,{horizontal:!0,className:y.hash,gap:4,children:[l("importPreview.hashLabel"),": ",o.jsx("span",{children:d.schemaHash})]})]}),o.jsx("div",{className:y.tableContainer,children:o.jsx(G,{columns:h,dataSource:s,pagination:!1,rowKey:"name",scroll:{y:350},size:"small"})})]})})})},Te=S(({css:r,cssVar:t})=>({zeroCell:r`
      color: ${t.colorTextQuaternary};
    `})),ke=c.memo(({duration:r,dataSource:t,onClickFinish:n})=>{const{t:a}=w("common"),d=l=>l||o.jsx("span",{className:Te.zeroCell,children:"0"});return o.jsx(W,{icon:o.jsx(P,{icon:ce}),status:"success",style:{paddingBlock:24,paddingInline:0},title:a("importModal.finish.title"),extra:o.jsx(D,{size:"large",type:"primary",onClick:n,children:a("importModal.finish.start")}),subTitle:t?o.jsxs(u,{gap:16,width:500,children:[a("importModal.finish.subTitle",{duration:(r/1e3).toFixed(2)}),o.jsx(G,{bordered:!0,dataSource:t,pagination:!1,rowKey:"title",size:"small",columns:[{dataIndex:"title",render:d,title:a("importModal.result.type")},{dataIndex:"added",render:d,title:a("importModal.result.added")},{dataIndex:"skips",render:d,title:a("importModal.result.skips")},{dataIndex:"error",render:d,title:a("importModal.result.errors")},{dataIndex:"updated",render:d,title:a("importModal.result.update")}]})]}):a("importModal.finish.onlySettings")})}),_=S(({css:r})=>({children:r`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: transparent;
    }
  `,wrapper:r`
    font-size: inherit;
  `})),Je=c.memo(({children:r,onFinishImport:t})=>{const{t:n}=w("common"),a=ne(g=>g.refreshAgentList),[d,l]=ae(g=>[g.refreshMessages,g.refreshTopic]),[i,s]=c.useState(0),[x,h]=c.useState(p.Start),[$,b]=c.useState(),[H,z]=c.useState(),[v,B]=c.useState(),[J,E]=c.useState(!1),[T,K]=c.useState(void 0),X=c.useMemo(()=>{if(!v)return;const{type:g,...m}=v;if(g!=="settings")return Object.entries(m).filter(([,j])=>!!j).map(([j,C])=>({added:C.added,error:C.errors,skips:C.skips,title:j,updated:C.updated||0}))},[v]),Q=x===p.Success||x===p.Error,N=()=>{h(p.Finished),B(void 0),z(void 0),b(void 0),t?.()},Z=c.useMemo(()=>{switch(x){case p.Preparing:return o.jsxs(f,{gap:24,padding:40,children:[o.jsx(I,{}),o.jsx("p",{children:n("importModal.preparing")})]});case p.Importing:return o.jsxs(f,{gap:24,padding:40,children:[o.jsx(I,{}),o.jsx("p",{children:n("importModal.loading")})]});case p.Uploading:return o.jsx(f,{gap:24,padding:40,children:o.jsx(Ce,{progress:$?.progress,restTime:$?.restTime,speed:$?.speed})});case p.Success:return o.jsx(f,{gap:24,paddingInline:16,children:o.jsx(ke,{dataSource:X,duration:i,onClickFinish:N})});case p.Error:return o.jsx(f,{gap:24,paddingBlock:24,paddingInline:0,children:o.jsx(Se,{error:H,onClick:N})});default:return}},[x,$]);return o.jsxs(o.Fragment,{children:[o.jsx($e,{icon:xe,open:x!==p.Start&&x!==p.Finished,title:n("importModal.title"),width:Q?600:400,children:Z}),o.jsx(he,{accept:"application/json",className:L(_.wrapper),maxCount:1,showUploadList:!1,beforeUpload:async g=>{const m=await ye(g);return m&&(K(m),E(!0)),!1},children:o.jsx("div",{className:L(_.children),children:r})}),T&&o.jsx(ve,{importData:T,open:J,onOpenChange:E,onConfirm:async g=>{h(p.Preparing),await je.importPgData(T,{callbacks:{onError:m=>{z(m)},onFileUploading:m=>{b(m)},onStageChange:m=>{h(m)},onSuccess:(m,j)=>{m&&B(m),s(j)}},overwriteExisting:g}),await a(),await d(),await l()}})]})});export{Je as D};
