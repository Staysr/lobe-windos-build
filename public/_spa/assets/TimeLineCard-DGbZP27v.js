import{j as t}from"../vendor/vendor-motion-DRC1LdIk.js";import{k as U,F as s,bU as re,I as G,b3 as b,fZ as k,j as S,W as F,X as _,aS as ne,iP as ie,iQ as ae,du as se,iR as $,iS as A,T as D,o as M,a8 as u,ab as w,n as Y,C as le,m as E,cO as ce}from"./index-BBAuCJqA.js";import{S as de}from"./SearchBar-CBEWBUiS.js";import{r as l}from"../vendor/vendor-emotion-D2wYcXAj.js";import{l as pe,dd as me,de as ge,c5 as ue,bO as he}from"../vendor/vendor-icons-C6hg4LnF.js";import{EditorModal as xe}from"./index-j1uyXDJu.js";import{S as d}from"./index-BY_9ea5Y.js";import{N as ye}from"./index-CO1aYmRK.js";import{R as fe,T as je}from"./ToggleRightPanelButton-DSgPsdvq.js";import{M as we}from"./Markdown-C61aHzBp.js";import{G as K}from"./Grid-2gpThKre.js";import{J as ve,Y as Ce}from"./index-sAaYWqRD.js";import{u as Q}from"./useScrollParent-BfVPdf4B.js";const Fe=l.memo(({searchValue:o,onSearch:e,sortValue:r,onSortChange:n,sortOptions:a})=>{const{t:c}=U("memory");return t.jsxs(s,{horizontal:!0,align:"center",gap:12,children:[t.jsx(de,{allowClear:!0,defaultValue:o,placeholder:c("filter.search"),prefix:t.jsx(pe,{size:16}),style:{flex:1},onSearch:i=>e(i),onInputChange:i=>{i||e(i)}}),a&&a.length>0&&n&&t.jsx(re,{options:a,prefix:t.jsx(G,{icon:me,style:{marginRight:4}}),style:{minWidth:150},value:r,onChange:i=>n(i)})]})}),_e=l.memo(()=>{const o=b(i=>i.editingMemoryId),e=b(i=>i.editingMemoryContent),r=b(i=>i.editingMemoryLayer),n=b(i=>i.clearEditingMemory),a=b(i=>i.updateMemory),c={activity:k.Activity,context:k.Context,experience:k.Experience,identity:k.Identity,preference:k.Preference};return t.jsx(xe,{open:!!o,value:e,onCancel:n,onConfirm:async i=>{!o||!r||await a(o,i,c[r])}})}),be=S(({css:o,cssVar:e})=>({card:o`
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 16px;
    border: 1px solid ${e.colorBorderSecondary};
    border-radius: ${e.borderRadiusLG};

    background: ${e.colorBgContainer};
  `})),J=l.memo(({viewMode:o,rows:e=3})=>o==="timeline"?t.jsx(s,{gap:24,paddingBlock:24,style:{paddingLeft:32},children:Array.from({length:3}).map((r,n)=>t.jsxs(s,{gap:8,children:[t.jsx(d.Title,{active:!0,fontSize:18,lineHeight:1.4,width:"30%"}),t.jsx(d.Paragraph,{active:!0,rows:4,style:{marginBottom:0}})]},n))}):t.jsx(K,{gap:12,maxItemWidth:240,paddingBlock:8,rows:e,children:Array.from({length:6}).map((r,n)=>t.jsxs(s,{className:be.card,children:[t.jsx(d.Title,{active:!0,fontSize:16,lineHeight:1.4,width:"80%"}),t.jsx(d.Paragraph,{active:!0,rows:5,style:{marginBottom:0}}),t.jsxs(s,{horizontal:!0,gap:8,children:[t.jsx(d.Button,{active:!0,size:"small",style:{height:20,width:60}}),t.jsx(d.Button,{active:!0,size:"small",style:{height:20,width:50}})]})]},n))})),Ae=l.memo(({value:o,onChange:e})=>{const{t:r}=U("memory");return t.jsxs(t.Fragment,{children:[t.jsx(F,{active:o==="timeline",icon:ge,size:_,title:r("viewMode.timeline"),onClick:()=>e("timeline")}),t.jsx(F,{active:o==="grid",icon:ue,size:_,title:r("viewMode.masonry"),onClick:()=>e("grid")})]})});function ke(o,e=0,r=100){if(e>r)return 0;let n=0;for(let c=0;c<o.length;c++){const i=o.charCodeAt(c);n=(n<<5)-n+i,n=n&n}n=Math.abs(n);const a=r-e+1;return e+n%a}const Z=o=>{const e=ne(),r=[e.volcano,e.orange,e.gold,e.green,e.cyan,e.blue,e.geekblue,e.purple,e.magenta,e.pink];return l.useMemo(()=>{if(!o)return;const n=ke(o,0,r.length-1),a=ie(e.isDarkMode?.25:.5,ae(e.isDarkMode?.06:.05,r[n],e.isDarkMode?e.colorBgContainer:e.colorBgLayout));return{backgroundColor:a,backgroundTextColor:e.isDarkMode?A(.5,a):$(.5,a),color:e.isDarkMode?A(.4,a):$(.6,a),shadowColor:se($(.6,a),e.isDarkMode?.5:.2)}},[o,r,e])},Me=l.memo(({cate:o})=>{const e=Z(o);return t.jsx(D,{size:"large",style:{background:e?.backgroundColor,borderRadius:16,color:e?.color,flex:"none",fontWeight:500},children:o?.toUpperCase()||"CHORE"})}),Oe=l.memo(()=>t.jsxs(t.Fragment,{children:[t.jsx(d.Button,{active:!0,shape:"round",size:"small",width:64}),t.jsx(d.Title,{active:!0,fontSize:20,lineHeight:1.4}),t.jsx(d.Tags,{active:!0,count:2}),t.jsxs(s,{horizontal:!0,align:"center",gap:16,justify:"space-between",children:[t.jsx(d.Tags,{active:!0}),t.jsx(d.Tags,{active:!0})]}),t.jsx(d.Paragraph,{active:!0,fontSize:16,rows:6})]})),Ve=l.memo(({children:o,style:e,header:r,...n})=>t.jsxs(fe,{defaultWidth:480,maxWidth:640,minWidth:300,children:[t.jsx(ye,{...r,left:t.jsxs(t.Fragment,{children:[t.jsx(je,{}),r?.left]})}),t.jsx(s,{flex:1,gap:16,height:"100%",paddingInline:16,style:{minWidth:300,overflowY:"auto",paddingBottom:64,paddingTop:16,...e},...n,children:o})]})),X=l.memo(({hashTags:o})=>{if(!(!o||o.length===0))return o&&o.length>0&&t.jsx(s,{horizontal:!0,wrap:"wrap",children:o.map((e,r)=>t.jsx(D,{icon:t.jsx(G,{icon:he}),variant:"borderless",style:{color:M.colorTextDescription,gap:2,marginRight:12,paddingInline:0},children:e},r))})}),Ue=l.memo(({title:o,children:e})=>{if(!e)return;const r=t.jsx(we,{fontSize:14,variant:"chat",style:{color:M.colorText,overflow:"visible"},children:e||""});return o?t.jsxs(s,{gap:8,children:[t.jsx(u,{weight:500,children:o}),r]}):r}),q=l.memo(({capturedAt:o})=>{if(!o)return;const e=w(o);return t.jsx(u,{as:"time",fontSize:12,style:{display:"block",flex:"none"},title:e.format("YYYY-MM-DD HH:mm"),type:"secondary",children:e.fromNow()})});function Se({items:o,defaultColumnCount:e=3,maxItemWidth:r=240,hasMore:n,isLoading:a,onLoadMore:c,renderItem:i}){const h=Q();return!o||o.length===0?null:t.jsx(ve,{customScrollParent:h,data:o,endReached:n&&c?c:void 0,increaseViewportBy:typeof window<"u"?window.innerHeight:0,overscan:48,style:{minHeight:"100%"},components:{Footer:a?()=>t.jsx(J,{rows:e,viewMode:"grid"}):void 0,List:(({ref:p,...m})=>t.jsx(K,{gap:8,maxItemWidth:r,ref:p,rows:e,...m}))},itemContent:(p,m)=>!m||!m.id?null:i(m,{onClick:void 0,onDelete:void 0,onEdit:void 0})})}const Ge=l.memo(Se),H="memory-masonry-actions",O=S(({css:o,cssVar:e})=>({actions:o`
    transition: opacity 0.15s ease;
  `,masonryCard:o`
    cursor: pointer;
    position: relative;
    background: ${e.colorFillQuaternary};
    box-shadow: 0 0 0 1px ${e.colorFillTertiary} inset;
    .${H} {
      opacity: 0;
    }

    &:hover {
      .${H} {
        opacity: 1;
      }
    }
  `})),Ke=l.memo(({title:o,titleAddon:e,cate:r,children:n,actions:a,onClick:c,hashTags:i,badges:h,footer:p,capturedAt:m})=>{const x=Z(r);return t.jsxs(Y,{className:O.masonryCard,gap:4,height:"100%",padding:4,variant:"filled",style:{background:x?.backgroundColor},onClick:c,children:[t.jsxs(Y,{flex:1,gap:12,paddingBlock:16,paddingInline:12,variant:"outlined",style:{boxShadow:`0 4px 16px -4px ${x?.shadowColor||"rgba(0, 0, 0, 0.2)"}`,overflow:"hidden",position:"relative"},children:[(o||e)&&t.jsxs(t.Fragment,{children:[t.jsx(s,{horizontal:!0,align:"center",gap:8,wrap:"wrap",children:o&&typeof o=="string"?t.jsx(u,{as:"h2",ellipsis:{rows:2},fontSize:16,style:{lineHeight:1.5,margin:0},weight:500,children:o}):o}),typeof e=="string"?t.jsx(D,{variant:"borderless",children:e}):e]}),typeof n=="string"?t.jsx(u,{as:"p",color:M.colorTextSecondary,ellipsis:{rows:4},children:n}):n,t.jsx(X,{hashTags:i}),t.jsxs(s,{horizontal:!0,align:"center",gap:12,justify:"space-between",style:{overflow:"hidden",position:"relative"},children:[p,t.jsx(q,{capturedAt:m})]})]}),t.jsxs(s,{horizontal:!0,align:"center",justify:"space-between",paddingBlock:8,paddingInline:8,style:{overflow:"hidden",position:"relative"},width:"100%",children:[t.jsx(s,{horizontal:!0,align:"center",flex:1,gap:8,style:{overflow:"hidden"},onClick:y=>{y.stopPropagation(),y.preventDefault()},children:h}),t.jsx(le,{flex:"none",children:t.jsx(u,{align:"center",color:x?.backgroundTextColor||M.colorTextSecondary,weight:"bold",style:{opacity:.5},children:r?.toUpperCase()||"CHORE"})}),t.jsx(s,{horizontal:!0,align:"center",className:E(H,O.actions),flex:1,gap:4,justify:"flex-end",style:{overflow:"hidden"},onClick:y=>{y.stopPropagation(),y.preventDefault()},children:a})]})]})}),B=S(({css:o,cssVar:e})=>({timelineContainer:o`
    position: relative;
    height: 100%;
  `,timelineLine:o`
    position: absolute;
    inset-block: 0;
    inset-inline-start: 8px;

    width: 1px;
    height: 100%;

    background: ${e.colorFillSecondary};
  `,timelineLine_dark:o`
    background: ${e.colorFillQuaternary};
  `})),I=(o,e)=>e?e(o):o.capturedAt??o.createdAt??new Date;function ze({data:o,groupBy:e="day",getDateForGrouping:r,hasMore:n,isLoading:a,onLoadMore:c,renderHeader:i,renderItem:h}){const p=ce(),m=Q(),{groupCounts:x,sortedPeriods:y,groupedItems:ee}=l.useMemo(()=>{const f=e==="month"?"YYYY-MM":"YYYY-MM-DD",j=o.reduce((g,v)=>{const T=I(v,r),C=w(T).format(f);return g[C]||(g[C]=[]),g[C].push(v),g},{}),z=Object.keys(j).sort((g,v)=>v.localeCompare(g)),L=[],R=[];for(const g of z){const T=[...j[g]].sort((W,C)=>{const te=I(W,r),oe=I(C,r);return w(oe).valueOf()-w(te).valueOf()});L.push(T.length),R.push(...T)}return{groupCounts:L,groupedItems:R,sortedPeriods:z}},[o,e,r]);return!o||o.length===0?null:t.jsxs("div",{className:B.timelineContainer,children:[t.jsx("div",{className:E(B.timelineLine,p&&B.timelineLine_dark)}),t.jsx(Ce,{customScrollParent:m,endReached:n&&c?c:void 0,groupCounts:x,increaseViewportBy:typeof window<"u"?window.innerHeight:0,overscan:24,style:{minHeight:"100%"},components:{Footer:a?()=>t.jsx(J,{viewMode:"timeline"}):void 0},groupContent:f=>{const j=y[f],z=x[f];return i(j,z)},itemContent:f=>{const j=ee[f];return h(j)}})]})}const Qe=l.memo(ze),P=S(({css:o,cssVar:e})=>({itemWrapper:o`
    position: relative;
    padding-inline-start: 24px;
  `,periodHeader:o`
    position: sticky;
    z-index: 10;
    inset-block-start: 0;

    color: ${e.colorTextSecondary};

    background: ${e.colorBgContainer};
  `,timelineDot:o`
    position: absolute;
    inset-block-start: 20px;
    inset-inline-start: 0;

    width: 16px;
    height: 16px;
    border: 1px solid ${e.colorBorder};
    border-radius: 50%;

    background: ${e.colorBgElevated};
    box-shadow: 0 2px 4px -2px rgb(0 0 0 / 40%);
  `})),Je=l.memo(({periodKey:o,groupBy:e="day"})=>{const r=e==="month"?w(`${o}-01`).format("MMMM YYYY"):w(o).format("MMMM D, YYYY");return t.jsx(s,{horizontal:!0,align:"center",className:P.periodHeader,gap:12,paddingBlock:8,children:t.jsx(u,{weight:500,children:r})})}),Ze=l.memo(({children:o})=>t.jsxs("div",{className:P.itemWrapper,children:[t.jsx("div",{className:P.timelineDot}),o]})),N="memory-actions",V=S(({css:o})=>({actions:o`
    transition: opacity 0.15s ease;
  `,timelineCard:o`
    position: relative;
    .${N} {
      opacity: 0;
    }

    &:hover {
      .${N} {
        opacity: 1;
      }
    }
  `})),Xe=l.memo(({title:o,titleAddon:e,cate:r,children:n,actions:a,onClick:c,capturedAt:i,hashTags:h})=>t.jsxs(Y,{clickable:!0,className:V.timelineCard,gap:12,padding:16,variant:"borderless",onClick:c,children:[(o||e)&&t.jsxs(s,{horizontal:!0,align:"center",gap:4,width:"100%",wrap:"wrap",style:{overflow:"hidden"},children:[o&&typeof o=="string"?t.jsx(u,{as:"h2",fontSize:16,style:{lineHeight:1.5,margin:0},weight:500,children:o}):o,e&&t.jsx(D,{children:e})]}),typeof n=="string"?t.jsx(u,{as:"p",color:M.colorTextSecondary,ellipsis:{rows:3},children:n}):n,t.jsx(X,{hashTags:h}),t.jsxs(s,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[t.jsxs(s,{horizontal:!0,align:"center",gap:8,children:[t.jsx(Me,{cate:r}),t.jsx(q,{capturedAt:i})]}),t.jsx(s,{horizontal:!0,align:"center",className:E(N,V.actions),gap:4,onClick:p=>{p.stopPropagation(),p.preventDefault()},children:a})]})]}));export{Me as C,Ve as D,_e as E,Fe as F,Ke as G,Ue as H,J as L,Je as P,q as T,Ae as V,X as a,Oe as b,Ge as c,Xe as d,Qe as e,Ze as f};
