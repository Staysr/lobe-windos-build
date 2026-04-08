import{r as i}from"../vendor/vendor-emotion-D2wYcXAj.js";import{fs as le,j as X,r as b,F as C,m as D,I as Z,h as J,ab as q,j1 as de,aT as ce,cD as ue,bX as me,T as pe}from"./index-BBAuCJqA.js";import{u as fe}from"./useTranslation-8Gs39hO6.js";import{c as ge}from"./chat-DOIKXITp.js";import{j as o}from"../vendor/vendor-motion-DRC1LdIk.js";import{A as xe}from"./index-GNbd6Ibo.js";import{aI as he,dr as be,ds as ve,cb as ye,dt as Ce,du as je}from"../vendor/vendor-icons-C6hg4LnF.js";import{A as we}from"./Alert-BwmQeg13.js";import{E as $e}from"./EditableMessage--ndz_4Qq.js";var ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"};function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},_.apply(this,arguments)}const Ee=(e,t)=>i.createElement(le,_({},e,{ref:t,icon:ke})),Qe=i.forwardRef(Ee),a=X(({css:e,cssVar:t})=>{const r=e`
    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid color-mix(in srgb, ${t.colorBorderSecondary} 66%, transparent);
    border-radius: ${t.borderRadiusLG};

    background-color: ${t.colorBgContainer};
  `,l=e`
    padding-block-start: 0;
  `,m=e`
    padding-block-start: 6px;
  `,h=e`
    margin-block-end: -16px;
    transition: background-color 100ms ${t.motionEaseOut};
  `,u=e`
    width: 100%;
  `;return{actionsBubbleLeft:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-end;
    `,actionsBubbleRight:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-start;
    `,actionsDocsLeft:e`
      flex: none;
      align-self: flex-start;
      justify-content: flex-end;
    `,actionsDocsRight:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-start;
    `,actionsEditing:e`
      pointer-events: none !important;
      opacity: 0 !important;
    `,avatarContainer:e`
      position: relative;
      flex: none;
      width: var(--chat-item-avatar-size, 40px);
      height: var(--chat-item-avatar-size, 40px);
    `,avatarGroupContainer:e`
      width: var(--chat-item-avatar-size, 40px);
    `,container:e`
      position: relative;

      width: 100%;
      max-width: 100vw;
      padding-block: 24px 12px;
      padding-inline: 12px;

      time {
        display: inline-block;
        white-space: nowrap;
      }

      div[role='menubar'] {
        display: flex;
      }

      time,
      div[role='menubar'] {
        pointer-events: none;
        opacity: 0;
        transition: opacity 200ms ${t.motionEaseOut};
      }

      &:hover {
        time,
        div[role='menubar'] {
          pointer-events: unset;
          opacity: 1;
        }
      }

      div[role='menubar']:has([data-popup-open]),
      div[role='menubar'][data-popup-open] {
        pointer-events: unset !important;
        opacity: 1 !important;

        [data-popup-open] {
          background: ${t.colorFillTertiary};
        }
      }

      ${b.sm} {
        padding-block-start: 12px;
        padding-inline: 8px;
      }
    `,containerDocs:e`
      ${h}
      position: relative;

      width: 100%;
      max-width: 100vw;
      padding-block: 24px 12px;
      padding-inline: 12px;

      time {
        display: inline-block;
        white-space: nowrap;
      }

      div[role='menubar'] {
        display: flex;
      }

      time,
      div[role='menubar'] {
        pointer-events: none;
        opacity: 0;
        transition: opacity 200ms ${t.motionEaseOut};
      }

      &:hover {
        time,
        div[role='menubar'] {
          pointer-events: unset;
          opacity: 1;
        }
      }

      div[role='menubar']:has(.lobe-dropdown-menu-trigger[data-popup-open]) {
        pointer-events: unset;
        opacity: 1;
      }

      ${b.sm} {
        padding-block-start: 16px;
        padding-inline: 8px;
      }
    `,editingContainer:e`
      ${u}
      padding-block: 8px 12px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};

      &:active,
      &:hover {
        border-color: ${t.colorBorder};
      }
    `,editingContainerDocs:e`
      ${u}
      padding-block: 8px 12px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadius};

      background: ${t.colorFillQuaternary};

      &:active,
      &:hover {
        border-color: ${t.colorBorder};
      }
    `,editingInput:e`
      width: 100%;
    `,errorContainer:e`
      position: relative;
      overflow: hidden;
      width: 100%;
    `,loadingLeft:e`
      position: absolute;
      inset-block-end: 0;
      inset-inline-start: -4px;

      width: 16px;
      height: 16px;
      border-radius: 50%;

      color: ${t.colorBgLayout};

      background: ${t.colorPrimary};
    `,loadingRight:e`
      position: absolute;
      inset-block-end: 0;
      inset-inline-end: -4px;

      width: 16px;
      height: 16px;
      border-radius: 50%;

      color: ${t.colorBgLayout};

      background: ${t.colorPrimary};
    `,messageBubble:e`
      ${r}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        width: 100%;
      }
    `,messageContainer:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        overflow-x: auto;
      }
    `,messageContainerEditing:e`
      ${u}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        overflow-x: auto;
      }
    `,messageContainerEditingWithTime:e`
      ${u}
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-block-start: -16px;

      ${b.sm} {
        overflow-x: auto;
      }
    `,messageContainerWithTime:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-block-start: -16px;

      ${b.sm} {
        overflow-x: auto;
      }
    `,messageContent:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        flex-direction: column !important;
      }
    `,messageContentEditing:e`
      ${u}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        flex-direction: column !important;
      }
    `,messageDocsWithTitle:e`
      ${l}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        width: 100%;
      }
    `,messageDocsWithoutTitle:e`
      ${m}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${b.sm} {
        width: 100%;
      }
    `,messageExtra:e`
      /* message-extra class */
    `,nameLeft:e`
      pointer-events: none;

      margin-block-end: 6px;

      font-size: 12px;
      line-height: 1;
      color: ${t.colorTextDescription};
      text-align: start;
    `,nameRight:e`
      pointer-events: none;

      margin-block-end: 6px;

      font-size: 12px;
      line-height: 1;
      color: ${t.colorTextDescription};
      text-align: end;
    `}}),Re=({actions:e,placement:t="left",variant:r="bubble",editing:l,ref:m})=>o.jsx(C,{align:"flex-start",className:D(i.useMemo(()=>r==="bubble"?t==="left"?a.actionsBubbleLeft:a.actionsBubbleRight:t==="left"?a.actionsDocsLeft:a.actionsDocsRight,[t,r]),l&&a.actionsEditing),ref:m,role:"menubar",children:e}),Me=({loading:e,placement:t="left"})=>e?o.jsx(C,{align:"center",className:t==="left"?a.loadingLeft:a.loadingRight,justify:"center",children:o.jsx(Z,{spin:!0,icon:he,size:{size:12,strokeWidth:3}})}):null,ze=({loading:e,avatar:t,placement:r,unoptimized:l,addon:m,onClick:h,size:u=40,style:f,alt:g})=>{const s=i.useMemo(()=>({"--chat-item-avatar-size":`${u}px`}),[u]),p=o.jsxs("div",{className:a.avatarContainer,style:{...s,...f},children:[o.jsx(xe,{alt:g||t.title,animation:e,avatar:t.avatar,background:t.backgroundColor,size:u,title:t.title,unoptimized:l,onClick:h}),o.jsx(Me,{loading:e,placement:r})]});return m?o.jsxs(C,{align:"center",className:a.avatarGroupContainer,gap:8,children:[p,m]}):p},Ae=({borderSpacing:e})=>e?o.jsx("div",{style:{flex:"none",width:e}}):null,K=({message:e,error:t})=>o.jsx(C,{className:a.errorContainer,children:o.jsx(we,{showIcon:!0,closable:!1,extra:e,type:"error",...t})}),Te=i.memo(({editing:e,onChange:t,onEditingChange:r,text:l,message:m,placement:h,messageExtra:u,renderMessage:f,variant:g,primary:s,onDoubleClick:p,fontSize:j,markdownProps:v})=>{const{mobile:x}=J(),$=i.useMemo(()=>g==="bubble"?a.messageBubble:a.messageDocsWithoutTitle,[g]),n=i.useMemo(()=>g==="docs"?a.editingContainerDocs:a.editingContainer,[g]),k=o.jsx($e,{fullFeaturedCodeBlock:!0,classNames:{input:a.editingInput},editButtonSize:"small",editing:e,fontSize:j,markdownProps:v,openModal:x?e:void 0,text:l,value:m?String(m):"",onChange:t,onEditingChange:r}),w=f?f(k):k;return o.jsxs(C,{className:D($,e&&n),onDoubleClick:p,children:[w,u&&!e?o.jsx("div",{className:a.messageExtra,children:u}):null]})}),Be=e=>{const t=q(),r=q(e);return r.isSame(t,"day")?r.format("HH:mm:ss"):r.isSame(t,"year")?r.format("MM-DD HH:mm:ss"):r.format("YYYY-MM-DD HH:mm:ss")},Se=({showTitle:e,placement:t="left",time:r,avatar:l,titleAddon:m})=>o.jsxs(C,{align:"center",className:t==="left"?a.nameLeft:a.nameRight,direction:t==="left"?"horizontal":"horizontal-reverse",gap:4,children:[e?l.title||"untitled":void 0,e?m:void 0,r&&o.jsx("time",{children:Be(r)})]}),Q=32,De=i.memo(({avatarAddon:e,onAvatarClick:t,avatarProps:r,actions:l,className:m,primary:h,loading:u,message:f,placeholderMessage:g,placement:s="left",variant:p="bubble",avatar:j,error:v,showTitle:x,time:$,editing:n,onChange:k,onEditingChange:w,messageExtra:E,renderMessage:z,text:A,errorMessage:R,onDoubleClick:L,fontSize:N,aboveMessage:I,belowMessage:d,markdownProps:c,actionsWrapWidth:y=54,showAvatar:M=!0,titleAddon:S,...V})=>{const{mobile:F}=J(),{t:G}=fe(ge),W=F?Q:r?.size||40,ee=i.useMemo(()=>({"--chat-item-avatar-size":`${W}px`}),[W]),O=!!$,te=g??G("chat.placeholder"),ne=r?.alt||j.title||G("chat.avatar"),T=i.useRef(null),B=i.useRef(null),[Y,P]=i.useState(p==="bubble"?"horizontal":"vertical");i.useEffect(()=>{if(p==="docs"){P("vertical");return}if(!T.current||!B.current)return;const H=new ResizeObserver(()=>{if(!T.current||!B.current)return;const ae=B.current.clientWidth,se=T.current.scrollWidth;P(se+y>ae?"vertical":"horizontal")});return H.observe(T.current),H.observe(B.current),()=>H.disconnect()},[p,y]);const oe=D(p==="docs"?a.containerDocs:a.container,m),re=i.useMemo(()=>n?O?a.messageContainerEditingWithTime:a.messageContainerEditing:O?a.messageContainerWithTime:a.messageContainer,[n,O]),ie=i.useMemo(()=>n?a.messageContentEditing:a.messageContent,[n]);return o.jsxs(C,{className:oe,direction:s==="left"?"horizontal":"horizontal-reverse",gap:F?6:12,style:ee,...V,children:[M&&o.jsx(ze,{...r,addon:e,alt:ne,avatar:j,loading:u,placement:s,size:W,style:{marginTop:x?-12:6,...r?.style},onClick:t}),o.jsxs(C,{align:s==="left"?"flex-start":"flex-end",className:re,ref:B,children:[o.jsx(Se,{avatar:j,placement:s,showTitle:x,time:$,titleAddon:S}),I,o.jsxs(C,{align:s==="left"?"flex-start":"flex-end",className:ie,"data-layout":Y,gap:8,direction:Y==="horizontal"?s==="left"?"horizontal":"horizontal-reverse":"vertical",children:[o.jsx(C,{ref:T,width:"100%",children:v&&(f===te||!f)?o.jsx(K,{error:v,message:R,placement:s}):o.jsx(Te,{editing:n,fontSize:N,markdownProps:c,message:f,placement:s,primary:h,renderMessage:z,text:A,variant:p,messageExtra:o.jsxs(o.Fragment,{children:[v&&o.jsx(K,{error:v,message:R,placement:s}),E]}),onChange:k,onDoubleClick:L,onEditingChange:w})}),l&&o.jsx(Re,{actions:l,editing:n,placement:s,variant:p})]}),d]}),F&&p==="bubble"&&M&&o.jsx(Ae,{borderSpacing:Q})]})}),Le=e=>i.useMemo(()=>({copy:{icon:Ce,key:"copy",label:e?.copy||"Copy"},del:{icon:ye,key:"del",label:e?.delete||"Delete"},divider:{type:"divider"},edit:{icon:ve,key:"edit",label:e?.edit||"Edit"},regenerate:{icon:be,key:"regenerate",label:e?.regenerate||"Regenerate"}}),[e]),Ne=({text:e,ref:t,...r})=>{const{regenerate:l,edit:m,copy:h,divider:u,del:f}=Le(e);return o.jsx(de,{items:[l,m],menu:[m,h,l,u,f],ref:t,...r})},U=i.memo(e=>{const{renderMessagesExtra:t,showTitle:r,onActionsClick:l,onAvatarsClick:m,onMessageChange:h,variant:u,text:f,renderMessages:g,renderErrorMessages:s,renderActions:p,loading:j,groupNav:v,renderItems:x,showAvatar:$,...n}=e,[k,w]=i.useState(!1),{message:E}=ce.useApp(),z=i.useMemo(()=>{if(!x||!n?.role)return;let d;if(x?.[n.role]&&(d=x[n.role]),!d&&x?.default&&(d=x.default),!!d)return d},[x?.[n.role]]),A=i.useCallback(({editableContent:d,data:c})=>{if(!g||!n?.role)return;let y;if(g?.[n.role]&&(y=g[n.role]),!y&&g?.default&&(y=g.default),!!y)return o.jsx(y,{...c,editableContent:d})},[g?.[n.role]]),R=i.useCallback(({data:d})=>{if(!t||!n?.role)return;let c;if(t?.[n.role]&&(c=t[n.role]),t?.default&&(c=t.default),!!c)return o.jsx(c,{...d})},[t?.[n.role]]),L=i.useCallback(({data:d})=>{if(!s||!n?.error?.type)return;let c;if(s?.[n.error.type]&&(c=s[n.error.type].Render),!c&&s?.default&&(c=s.default.Render),!!c)return o.jsx(c,{...d})},[s]),N=i.useCallback(({data:d})=>{if(!p||!n?.role)return;let c;p?.[n.role]&&(c=p[n.role]),p?.default&&(c=p.default),c||(c=Ne);const y=async(M,S)=>{switch(M.key){case"copy":await ue(S.content),E.success(f?.copySuccess||"Copy Success");break;case"edit":w(!0)}l?.(M,S)};return o.jsx(c,{...d,text:f,onActionClick:M=>y?.(M,d)})},[p?.[n.role],f,l]),I=i.useMemo(()=>{if(!n.error)return;const d=n.error?.message;let c={};return n.error.type&&s?.[n.error.type]&&(c=s[n.error.type]?.config),{message:d,...c}},[s,n.error]);return z?o.jsx(z,{...e},n.id):o.jsx(De,{actions:o.jsx(N,{data:n}),avatar:n.meta,avatarAddon:v,editing:k,error:I,errorMessage:o.jsx(L,{data:n}),loading:j,message:n.content,messageExtra:o.jsx(R,{data:n}),placement:u==="bubble"&&n.role==="user"?"right":"left",primary:n.role==="user",showAvatar:$,showTitle:r,text:f,time:n.updateAt||n.createAt,variant:u,renderMessage:d=>o.jsx(A,{data:n,editableContent:d}),onAvatarClick:m?.(n.role),onChange:d=>h?.(n.id,d),onEditingChange:w,onDoubleClick:d=>{n.id==="default"||n.error||n.role&&["assistant","user"].includes(n.role)&&d.altKey&&w(!0)}})});U.displayName="ChatListItem";const Ie=({enable:e,text:t})=>e?o.jsx("div",{style:{padding:"0 20px"},children:o.jsx(me,{children:o.jsx(pe,{icon:o.jsx(Z,{icon:je}),children:t||"History Message"})})}):null,Fe=X(({css:e})=>({container:e`
      position: relative;
    `})),Xe=i.memo(({onActionsClick:e,onAvatarsClick:t,renderMessagesExtra:r,className:l,data:m,variant:h="bubble",text:u,showTitle:f,onMessageChange:g,renderMessages:s,renderErrorMessages:p,loadingId:j,renderItems:v,enableHistoryCount:x,renderActions:$,historyCount:n=0,showAvatar:k,...w})=>o.jsx("div",{className:D(Fe.container,l),...w,children:m.map((E,z)=>{const A={loading:j===E.id,onActionsClick:e,onAvatarsClick:t,onMessageChange:g,renderActions:$,renderErrorMessages:p,renderItems:v,renderMessages:s,renderMessagesExtra:r,showAvatar:k,showTitle:f,text:u,variant:h},R=m.length;return o.jsxs(i.Fragment,{children:[o.jsx(Ie,{enable:x&&R>n&&n===R-z+1,text:u?.history}),o.jsx(U,{...A,...E})]},E.id)})}));export{Xe as C,Qe as R};
