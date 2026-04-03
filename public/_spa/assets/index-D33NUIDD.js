import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{fi as se,k,F as g,j as C,iC as S,b$ as b,au as y,B as x,f2 as A,c0 as U,ah as M,a_ as L,aT as re,I as $,iD as ne,cO as ie,cp as ae,iE as oe,aY as le,by as ce,iF as de,ci as me}from"./index-BmW5CTHd.js";import{r as v}from"../vendor/vendor-emotion-D2wYcXAj.js";import{S as pe}from"./SettingHeader-DwAqzeet.js";import{M as _}from"./Modal-BuUwDCT9.js";import{C as ue}from"./index-e8jwhXrr.js";import{S as Q,m as G,cj as Y,b2 as Z,cw as J,aZ as O,aL as W,P as xe,bq as he,ck as fe,d9 as ye,cB as ge}from"../vendor/vendor-icons-Bjz-9Gdp.js";import{F as l}from"./index-BnepIK60.js";import{U as je}from"./index-4F_htIBT.js";import{S as T}from"./index-B12EbR_j.js";import{A as ve}from"./index-CkimUepr.js";import{S as ke}from"./index-CZ1-Sewc.js";import{u as be}from"./MarketAuthProvider-C2ImwTi0.js";import{A as Ce}from"./index-CjltaXqJ.js";import{A as q}from"./index-Bg6jZEN_.js";import{D as P}from"./index-DcJxpn5d.js";import{T as Se}from"./index-Bd_-6ftR.js";import"../i18n/i18n-zh-CN-CCQe7Zp1.js";import"../i18n/i18n-en-US-vCwQO2Oi.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"./providerConfig-DdZ8yyMi.js";import"./Drawer-DADyiFum.js";import"./index-ChM6vSmd.js";import"./useForm-BddH9m0f.js";import"./row-B4JgmBB-.js";import"./DeleteOutlined-DFutYCzo.js";import"./progress-BEDsdH5i.js";import"./index-BDQRU9sz.js";import"./index-DPfpBMme.js";import"./Pagination-BeXLtHqv.js";import"./index-CgzXQjhp.js";import"./useBubbleLock-BPwjL_yj.js";import"./events-NnJKY1rz.js";import"./Trans-CTbarq9G.js";import"./index-DHseDdtn.js";import"./EmojiPicker-CfFRW3If.js";import"./useTranslation-ByWlna2-.js";import"./emojiPicker-fXP8_c7a.js";import"./Tabs-eBZKq-z0.js";import"./index-Ciqn2WuZ.js";var we={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"};function V(){return V=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},V.apply(this,arguments)}const Ie=(t,n)=>v.createElement(se,V({},t,{ref:n,icon:we})),Ne=v.forwardRef(Ie),w=C(({css:t,cssVar:n})=>({card:t`
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: ${n.colorPrimary};
      box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    }
  `,description:t`
    font-size: 12px;
    color: ${n.colorTextSecondary};
  `,grid:t`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  `,icon:t`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    margin-block-end: 12px;
    border-radius: 12px;

    background: ${n.colorFillSecondary};
  `,title:t`
    margin-block-end: 4px;
    font-weight: 500;
  `})),Fe=[{description:"creds.typeDesc.kv-env",icon:e.jsx(Q,{size:24}),type:"kv-env"},{description:"creds.typeDesc.kv-header",icon:e.jsx(G,{size:24}),type:"kv-header"},{description:"creds.typeDesc.oauth",icon:e.jsx(Y,{size:24}),type:"oauth"},{description:"creds.typeDesc.file",icon:e.jsx(Z,{size:24}),type:"file"}],Pe=({onSelect:t})=>{const{t:n}=k("setting");return e.jsx("div",{className:w.grid,children:Fe.map(({type:r,icon:s,description:a})=>e.jsx(ue,{className:w.card,size:"small",onClick:()=>t(r),children:e.jsxs(g,{align:"center",children:[e.jsx("div",{className:w.icon,children:s}),e.jsx("div",{className:w.title,children:n(`creds.types.${r}`)}),e.jsx("div",{className:w.description,children:n(a)})]})},r))})},$e=C(({css:t})=>({footer:t`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `})),Te=({onBack:t,onSuccess:n})=>{const{t:r}=k("setting"),[s]=l.useForm(),[a,c]=v.useState(null),[d,o]=v.useState(""),[h,i]=v.useState(!1),u=S({mutationFn:p=>{if(!a||!d)throw new Error("File is required");return b.market.creds.createFile.mutate({description:p.description,fileHashId:a,fileName:d,key:p.key,name:p.name})},onSuccess:()=>{n()}}),m=async p=>{i(!0);try{const j=await p.arrayBuffer(),F=new Uint8Array(j);let B="";for(let z=0;z<F.byteLength;z++)B+=String.fromCharCode(F[z]);const te=btoa(B),E=await b.market.creds.uploadFile.mutate({file:te,fileName:p.name,fileType:p.type||"application/octet-stream"});o(E.fileName),c(E.fileHashId),A.success(r("creds.file.uploadSuccess"))}catch(j){console.error("[FileCredForm] Upload failed:",j),A.error(j instanceof Error?j.message:r("creds.file.uploadFailed"))}finally{i(!1)}return!1},f=p=>{if(!a){A.error(r("creds.form.fileRequired"));return}u.mutate(p)};return e.jsxs(l,{form:s,layout:"vertical",onFinish:f,children:[e.jsxs(l.Item,{required:!0,label:r("creds.form.file"),children:[e.jsxs(je.Dragger,{beforeUpload:m,disabled:h,maxCount:1,showUploadList:d?{showRemoveIcon:!0}:!1,onRemove:()=>{c(null),o("")},children:[e.jsx("p",{className:"ant-upload-drag-icon",children:e.jsx(Ne,{})}),e.jsx("p",{className:"ant-upload-text",children:r(h?"creds.file.uploading":"creds.form.uploadHint")}),e.jsx("p",{className:"ant-upload-hint",children:r("creds.form.uploadDesc")})]}),d&&e.jsxs("div",{style:{marginTop:8},children:[r("creds.form.selectedFile"),": ",d]})]}),e.jsx(l.Item,{label:r("creds.form.key"),name:"key",rules:[{required:!0,message:r("creds.form.keyRequired")},{pattern:/^[\w-]+$/,message:r("creds.form.keyPattern")}],children:e.jsx(y,{placeholder:"e.g., gcp-service-account"})}),e.jsx(l.Item,{label:r("creds.form.name"),name:"name",rules:[{required:!0,message:r("creds.form.nameRequired")}],children:e.jsx(y,{placeholder:"e.g., GCP Service Account"})}),e.jsx(l.Item,{label:r("creds.form.description"),name:"description",children:e.jsx(y.TextArea,{placeholder:r("creds.form.descriptionPlaceholder"),rows:2})}),e.jsxs("div",{className:$e.footer,children:[e.jsx(x,{onClick:t,children:r("creds.form.back")}),e.jsx(x,{disabled:!a,htmlType:"submit",loading:u.isPending,type:"primary",children:r("creds.form.submit")})]})]})},D=C(({css:t})=>({footer:t`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,kvPair:t`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `})),ze=({type:t,onBack:n,onSuccess:r})=>{const{t:s}=k("setting"),[a]=l.useForm(),c=S({mutationFn:o=>{const i=(o.kvPairs||[]).reduce((u,m)=>(m.key&&m.value&&(u[m.key]=m.value),u),{});return b.market.creds.createKV.mutate({description:o.description,key:o.key,name:o.name,type:t,values:i})},onSuccess:()=>{r()}}),d=o=>{c.mutate(o)};return e.jsxs(l,{form:a,initialValues:{kvPairs:[{key:"",value:""}]},layout:"vertical",onFinish:d,children:[e.jsx(l.Item,{label:s("creds.form.key"),name:"key",rules:[{required:!0,message:s("creds.form.keyRequired")},{pattern:/^[\w-]+$/,message:s("creds.form.keyPattern")}],children:e.jsx(y,{placeholder:"e.g., openai"})}),e.jsx(l.Item,{label:s("creds.form.name"),name:"name",rules:[{required:!0,message:s("creds.form.nameRequired")}],children:e.jsx(y,{placeholder:"e.g., OpenAI API Key"})}),e.jsx(l.Item,{label:s("creds.form.values"),children:e.jsx(l.List,{name:"kvPairs",children:(o,{add:h,remove:i})=>e.jsxs(g,{gap:8,children:[o.map(({key:u,name:m,...f})=>e.jsxs("div",{className:D.kvPair,children:[e.jsx(l.Item,{...f,name:[m,"key"],style:{flex:1,marginBottom:0},children:e.jsx(y,{placeholder:t==="kv-env"?"ENV_VAR_NAME":"Header-Name"})}),e.jsx(l.Item,{...f,name:[m,"value"],style:{flex:2,marginBottom:0},children:e.jsx(y.Password,{placeholder:s("creds.form.valuePlaceholder")})}),o.length>1&&e.jsx(x,{icon:J,size:"small",type:"text",onClick:()=>i(m)})]},u)),e.jsx(x,{block:!0,icon:O,type:"dashed",onClick:()=>h({key:"",value:""}),children:s("creds.form.addPair")})]})})}),e.jsx(l.Item,{label:s("creds.form.description"),name:"description",children:e.jsx(y.TextArea,{placeholder:s("creds.form.descriptionPlaceholder"),rows:2})}),e.jsxs("div",{className:D.footer,children:[e.jsx(x,{onClick:n,children:s("creds.form.back")}),e.jsx(x,{htmlType:"submit",loading:c.isPending,type:"primary",children:s("creds.form.submit")})]})]})},I=C(({css:t,cssVar:n})=>({connectionOption:t`
    display: flex;
    gap: 8px;
    align-items: center;
  `,footer:t`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,provider:t`
    font-weight: 500;
  `,username:t`
    color: ${n.colorTextSecondary};
  `})),Ae=({onBack:t,onSuccess:n})=>{const{t:r}=k("setting"),[s]=l.useForm(),{data:a,isLoading:c}=U.market.creds.listOAuthConnections.useQuery(),d=a?.connections??[],o=S({mutationFn:i=>b.market.creds.createOAuth.mutate({description:i.description,key:i.key,name:i.name,oauthConnectionId:i.oauthConnectionId}),onSuccess:()=>{n()}}),h=i=>{o.mutate(i)};return c?e.jsx(g,{align:"center",justify:"center",style:{padding:48},children:e.jsx(T,{})}):d.length===0?e.jsxs(g,{gap:16,children:[e.jsx(M,{description:r("creds.oauth.noConnections")}),e.jsx("div",{className:I.footer,children:e.jsx(x,{onClick:t,children:r("creds.form.back")})})]}):e.jsxs(l,{form:s,layout:"vertical",onFinish:h,children:[e.jsx(l.Item,{label:r("creds.form.selectConnection"),name:"oauthConnectionId",rules:[{required:!0,message:r("creds.form.connectionRequired")}],children:e.jsx(L,{placeholder:r("creds.form.selectConnectionPlaceholder"),children:d.map(i=>{const u=i.providerId||"OAuth",m=i.providerName||i.providerUserName||i.email||i.name;return e.jsx(L.Option,{value:i.id,children:e.jsxs("span",{className:I.connectionOption,children:[i.avatar&&e.jsx(ve,{size:"small",src:i.avatar}),e.jsxs("span",{children:[e.jsx("span",{className:I.provider,children:u}),m&&e.jsxs("span",{className:I.username,children:[" - ",m]})]})]})},i.id)})})}),e.jsx(l.Item,{label:r("creds.form.key"),name:"key",rules:[{required:!0,message:r("creds.form.keyRequired")},{pattern:/^[\w-]+$/,message:r("creds.form.keyPattern")}],children:e.jsx(y,{placeholder:"e.g., github-oauth"})}),e.jsx(l.Item,{label:r("creds.form.name"),name:"name",rules:[{required:!0,message:r("creds.form.nameRequired")}],children:e.jsx(y,{placeholder:"e.g., GitHub Connection"})}),e.jsx(l.Item,{label:r("creds.form.description"),name:"description",children:e.jsx(y.TextArea,{placeholder:r("creds.form.descriptionPlaceholder"),rows:2})}),e.jsxs("div",{className:I.footer,children:[e.jsx(x,{onClick:t,children:r("creds.form.back")}),e.jsx(x,{htmlType:"submit",loading:o.isPending,type:"primary",children:r("creds.form.submit")})]})]})},H=C(({css:t})=>({content:t`
    padding-block: 24px;
  `,steps:t`
    margin-block-end: 24px;
  `})),qe=({open:t,onCancel:n,onSuccess:r})=>{const{t:s}=k("setting"),[a,c]=v.useState(0),[d,o]=v.useState(null),h=p=>{o(p),c(1)},i=()=>{c(0),o(null)},u=()=>{c(0),o(null),n()},m=()=>{c(0),o(null),r()},f=()=>{switch(d){case"kv-env":case"kv-header":return e.jsx(ze,{type:d,onBack:i,onSuccess:m});case"oauth":return e.jsx(Ae,{onBack:i,onSuccess:m});case"file":return e.jsx(Te,{onBack:i,onSuccess:m});default:return null}};return e.jsx(_,{footer:null,open:t,title:s("creds.createModal.title"),width:600,onCancel:u,children:e.jsxs("div",{className:H.content,children:[e.jsx(ke,{className:H.steps,current:a,size:"small",items:[{title:s("creds.createModal.selectType")},{title:s("creds.createModal.fillForm")}]}),a===0?e.jsx(Pe,{onSelect:h}):f()]})})},N=C(({css:t,cssVar:n})=>({container:t`
    padding-block: 12px;
    padding-inline: 0;
  `,description:t`
    overflow: hidden;

    font-size: 12px;
    color: ${n.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,icon:t`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border-radius: 12px;

    background: ${n.colorFillTertiary};
  `,key:t`
    font-family: monospace;
    font-size: 12px;
    color: ${n.colorTextSecondary};
  `,title:t`
    font-size: 15px;
    font-weight: 500;
    color: ${n.colorText};
  `})),Re={file:e.jsx(Z,{size:20}),"kv-env":e.jsx(Q,{size:20}),"kv-header":e.jsx(G,{size:20}),oauth:e.jsx(Y,{size:20})},Me={file:"purple","kv-env":"blue","kv-header":"cyan",oauth:"green"},X=v.memo(({cred:t,onEdit:n,onDelete:r,onView:s})=>{const{t:a}=k("setting"),{modal:c}=re.useApp(),d=()=>{c.confirm({centered:!0,content:a("creds.actions.deleteConfirm.content"),okButtonProps:{danger:!0},okText:a("creds.actions.deleteConfirm.ok"),onOk:()=>r(t.id),title:a("creds.actions.deleteConfirm.title"),type:"error"})},h=[...t.type==="kv-env"||t.type==="kv-header"?[{icon:e.jsx($,{icon:W}),key:"view",label:a("creds.actions.view"),onClick:()=>s(t)}]:[],{icon:e.jsx($,{icon:xe}),key:"edit",label:a("creds.actions.edit"),onClick:()=>n(t)},{danger:!0,icon:e.jsx($,{icon:he}),key:"delete",label:a("creds.actions.delete"),onClick:d}],i=()=>t.type==="oauth"&&t.oauthAvatar?e.jsx(Ce,{avatar:t.oauthAvatar,size:32}):e.jsx("span",{style:{color:"var(--lobe-color-text-secondary)"},children:Re[t.type]});return e.jsxs(g,{horizontal:!0,align:"center",className:N.container,gap:16,justify:"space-between",children:[e.jsxs(g,{horizontal:!0,align:"center",gap:16,style:{flex:1,overflow:"hidden"},children:[e.jsx("div",{className:N.icon,children:i()}),e.jsxs(g,{gap:4,style:{overflow:"hidden"},children:[e.jsxs(g,{horizontal:!0,align:"center",gap:8,children:[e.jsx("span",{className:N.title,children:t.name}),e.jsx(ne,{color:Me[t.type],children:a(`creds.types.${t.type}`)})]}),e.jsxs(g,{horizontal:!0,align:"center",gap:8,children:[e.jsx("code",{className:N.key,children:t.key}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"var(--lobe-color-text-quaternary)"},children:"·"}),e.jsx("span",{className:N.description,children:t.description})]})]})]})]}),e.jsx(g,{horizontal:!0,align:"center",gap:8,onClick:ie,children:e.jsx(ae,{items:h,placement:"bottomRight",children:e.jsx(x,{icon:fe})})})]})});X.displayName="CredItem";const K=C(({css:t})=>({footer:t`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,kvPair:t`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `})),Ve=({cred:t,onCancel:n,onSuccess:r})=>{const{t:s}=k("setting"),[a]=l.useForm(),[c,d]=v.useState(!0);v.useEffect(()=>{(async()=>{try{const m=(await b.market.creds.get.query({decrypt:!0,id:t.id})).plaintext||{},f=Object.entries(m).map(([p,j])=>({key:p,value:j}));a.setFieldsValue({description:t.description,kvPairs:f.length>0?f:[{key:"",value:""}],name:t.name})}catch{a.setFieldsValue({description:t.description,kvPairs:[{key:"",value:""}],name:t.name})}finally{d(!1)}})()},[t.id,t.name,t.description,a]);const o=S({mutationFn:i=>{const m=(i.kvPairs||[]).reduce((f,p)=>(p.key&&p.value&&(f[p.key]=p.value),f),{});return b.market.creds.update.mutate({description:i.description,id:t.id,name:i.name,values:m})},onSuccess:()=>{r()}}),h=i=>{o.mutate(i)};return c?e.jsx(g,{align:"center",justify:"center",style:{padding:48},children:e.jsx(T,{})}):e.jsxs(l,{form:a,layout:"vertical",onFinish:h,children:[e.jsx(l.Item,{label:s("creds.form.name"),name:"name",rules:[{required:!0,message:s("creds.form.nameRequired")}],children:e.jsx(y,{})}),e.jsx(l.Item,{label:s("creds.form.values"),children:e.jsx(l.List,{name:"kvPairs",children:(i,{add:u,remove:m})=>e.jsxs(g,{gap:8,children:[i.map(({key:f,name:p,...j})=>e.jsxs("div",{className:K.kvPair,children:[e.jsx(l.Item,{...j,name:[p,"key"],style:{flex:1,marginBottom:0},children:e.jsx(y,{placeholder:t.type==="kv-env"?"ENV_VAR_NAME":"Header-Name"})}),e.jsx(l.Item,{...j,name:[p,"value"],style:{flex:2,marginBottom:0},children:e.jsx(y.Password,{placeholder:s("creds.form.valuePlaceholder")})}),i.length>1&&e.jsx(x,{icon:J,size:"small",type:"text",onClick:()=>m(p)})]},f)),e.jsx(x,{block:!0,icon:O,type:"dashed",onClick:()=>u({key:"",value:""}),children:s("creds.form.addPair")})]})})}),e.jsx(l.Item,{label:s("creds.form.description"),name:"description",children:e.jsx(y.TextArea,{placeholder:s("creds.form.descriptionPlaceholder"),rows:2})}),e.jsxs("div",{className:K.footer,children:[e.jsx(x,{onClick:n,children:s("creds.form.cancel")}),e.jsx(x,{htmlType:"submit",loading:o.isPending,type:"primary",children:s("creds.form.save")})]})]})},Oe=C(({css:t})=>({footer:t`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `})),Be=({cred:t,onCancel:n,onSuccess:r})=>{const{t:s}=k("setting"),[a]=l.useForm(),c=S({mutationFn:o=>b.market.creds.update.mutate({description:o.description,id:t.id,name:o.name}),onSuccess:()=>{r()}}),d=o=>{c.mutate(o)};return e.jsxs(l,{form:a,layout:"vertical",initialValues:{description:t.description,name:t.name},onFinish:d,children:[e.jsx(l.Item,{label:s("creds.form.name"),name:"name",rules:[{required:!0,message:s("creds.form.nameRequired")}],children:e.jsx(y,{})}),e.jsx(l.Item,{label:s("creds.form.description"),name:"description",children:e.jsx(y.TextArea,{placeholder:s("creds.form.descriptionPlaceholder"),rows:2})}),e.jsxs("div",{className:Oe.footer,children:[e.jsx(x,{onClick:n,children:s("creds.form.cancel")}),e.jsx(x,{htmlType:"submit",loading:c.isPending,type:"primary",children:s("creds.form.save")})]})]})},Ee=({open:t,onClose:n,onSuccess:r,cred:s})=>{const{t:a}=k("setting");if(!s)return null;const c=s.type==="kv-env"||s.type==="kv-header",d=()=>{r(),n()};return e.jsx(_,{destroyOnClose:!0,footer:null,open:t,title:a("creds.edit.title"),width:520,onCancel:n,children:c?e.jsx(Ve,{cred:s,onCancel:n,onSuccess:d}):e.jsx(Be,{cred:s,onCancel:n,onSuccess:d})})},{Text:Le}=Se,ee=de(({css:t,token:n})=>({kvKey:t`
    min-width: 140px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${n.borderRadius}px 0 0 ${n.borderRadius}px;

    font-family: ${n.fontFamilyCode};
    font-size: 13px;
    color: ${n.colorTextSecondary};

    background: ${n.colorFillQuaternary};
  `,kvRow:t`
    display: flex;
    align-items: stretch;
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: ${n.borderRadius}px;

    &:not(:last-child) {
      margin-block-end: 8px;
    }
  `,kvValue:t`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    padding-block: 8px;
    padding-inline: 12px;
    border-radius: 0 ${n.borderRadius}px ${n.borderRadius}px 0;

    font-family: ${n.fontFamilyCode};
    font-size: 13px;

    background: ${n.colorBgContainer};
  `,maskedValue:t`
    color: ${n.colorTextQuaternary};
    letter-spacing: 2px;
  `,toggleBtn:t`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;
    border-radius: ${n.borderRadiusSM}px;

    color: ${n.colorTextTertiary};

    transition: all 0.2s;

    &:hover {
      color: ${n.colorText};
      background: ${n.colorFillSecondary};
    }
  `,valuesSection:t`
    margin-block-start: 16px;
  `,valuesTitle:t`
    margin-block-end: 12px;
    font-weight: 500;
  `})),De=t=>t.length<=4?"••••••••":"••••••••"+t.slice(-4),He=({keyName:t,value:n})=>{const{styles:r,cx:s}=ee(),[a,c]=v.useState(!1);return e.jsxs("div",{className:r.kvRow,children:[e.jsx("div",{className:r.kvKey,children:t}),e.jsxs("div",{className:r.kvValue,children:[e.jsx(Le,{className:s(!a&&r.maskedValue),style:{flex:1,fontFamily:"var(--lobe-font-family-code)",fontSize:13,wordBreak:"break-all"},children:a?n:De(n)}),e.jsxs(g,{horizontal:!0,align:"center",gap:4,children:[e.jsx("div",{className:r.toggleBtn,onClick:()=>c(!a),children:a?e.jsx(ye,{size:16}):e.jsx(W,{size:16})}),e.jsx(me,{content:n,size:"small"})]})]})]})},Ke=({cred:t,open:n,onClose:r})=>{const{t:s}=k("setting"),{styles:a}=ee(),{data:c,isLoading:d,error:o}=oe({enabled:n&&!!t,queryFn:()=>b.market.creds.get.query({decrypt:!0,id:t.id}),queryKey:["cred-plaintext",t?.id]}),h=c?.plaintext||{},i=Object.entries(h);return e.jsx(le,{footer:null,open:n,title:s("creds.view.title",{name:t?.name}),width:560,onCancel:r,children:d?e.jsx(ce,{active:!0,paragraph:{rows:3}}):o?e.jsx(q,{showIcon:!0,description:o.message,message:s("creds.view.error"),type:"error"}):e.jsxs(e.Fragment,{children:[e.jsx(q,{showIcon:!0,message:s("creds.view.warning"),style:{marginBottom:16},type:"warning"}),e.jsxs(P,{bordered:!0,column:1,size:"small",children:[e.jsx(P.Item,{label:s("creds.table.name"),children:t?.name}),e.jsx(P.Item,{label:s("creds.table.key"),children:e.jsx("code",{children:t?.key})}),e.jsx(P.Item,{label:s("creds.table.type"),children:t?.type?s(`creds.types.${t.type}`):"-"})]}),i.length>0&&e.jsxs("div",{className:a.valuesSection,children:[e.jsx("div",{className:a.valuesTitle,children:s("creds.view.values")}),i.map(([u,m])=>e.jsx(He,{keyName:u,value:String(m)},u))]}),i.length===0&&t?.type==="oauth"&&e.jsx(q,{showIcon:!0,description:s("creds.view.oauthNote"),message:s("creds.view.noValues"),style:{marginTop:16},type:"info"})]})})},R=C(({css:t})=>({container:t`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,empty:t`
    padding-block: 48px;
    padding-inline: 0;
  `,signInPrompt:t`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    padding: 48px;
  `})),Ue=()=>{const{t}=k("setting"),[n,r]=v.useState(null),[s,a]=v.useState(null),{isAuthenticated:c,isLoading:d,signIn:o}=be(),{data:h,isLoading:i,refetch:u}=U.market.creds.list.useQuery(void 0,{enabled:c}),m=S({mutationFn:j=>b.market.creds.delete.mutate({id:j}),onSuccess:()=>{u()}}),f=h?.data??[],p=()=>{r(null),u()};return d?e.jsx(g,{align:"center",justify:"center",style:{padding:48},children:e.jsx(T,{})}):c?e.jsxs("div",{className:R.container,children:[i?e.jsx(g,{align:"center",justify:"center",style:{padding:48},children:e.jsx(T,{})}):f.length===0?e.jsx(M,{className:R.empty,description:t("creds.empty")}):e.jsx(g,{gap:0,children:f.map(j=>e.jsx(X,{cred:j,onDelete:F=>m.mutate(F),onEdit:r,onView:a},j.id))}),e.jsx(Ee,{cred:n,open:!!n,onClose:()=>r(null),onSuccess:p}),e.jsx(Ke,{cred:s,open:!!s,onClose:()=>a(null)})]}):e.jsxs("div",{className:R.signInPrompt,children:[e.jsx(M,{description:t("creds.signInRequired")}),e.jsx(x,{icon:ge,type:"primary",onClick:()=>o(),children:t("creds.signIn")})]})},_e=()=>{const{t}=k("setting"),[n,r]=v.useState(!1),[s,a]=v.useState(0),c=()=>{r(!1),a(d=>d+1)};return e.jsxs(e.Fragment,{children:[e.jsx(pe,{title:t("tab.creds"),extra:e.jsx(x,{icon:e.jsx($,{icon:O}),size:"large",onClick:()=>r(!0),children:t("creds.create")})}),e.jsx(Ue,{},s),e.jsx(qe,{open:n,onCancel:()=>r(!1),onSuccess:c})]})};_e.displayName="CredsSetting";export{_e as default};
