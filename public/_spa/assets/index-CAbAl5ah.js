import{j as e}from"../vendor/vendor-motion-siEo8VfX.js";import{r as n}from"../vendor/vendor-emotion-B6qZrIr4.js";import{u as ne,a as Te}from"./MarketAuthProvider-BVtkI9Va.js";import{u as X,s as Ue}from"./store-D5e9H-P4.js";import{N as Ne}from"./NotFound-De5kU49v.js";import{k as T,B as de,F as r,a9 as w,C as Pe,j as R,r as ce,o as K,q as oe,aa as F,W as J,gM as Le,fI as De,a$ as Fe,f as q,aU as ie,$ as Ie,bE as Be,cQ as D,aV as Ee,cR as he,I as v,n as Y,cS as Z,cs as ge,m as pe,L as V,T as $,av as O,c2 as Me,bu as Ge,a7 as Re,cT as qe,bB as E,aH as Oe}from"./index-C275yc7e.js";import{A as Q}from"./index-B1FRBCSR.js";import{m as Qe,aw as _e,P as me,d9 as xe,aL as fe,bB as je,cx as ye,b8 as We,b9 as be,ab as ae,a4 as He,bx as Xe,by as Je,F as Ke,aZ as Ze}from"../vendor/vendor-icons-CwKawJ1k.js";import{G as ee}from"./Grid-C06UCg1E.js";import{A as Ye}from"./AssistantEmpty-BMBGY4i6.js";import{q as we}from"./base-AbuBx_QK.js";import{P as le}from"./PublishedTime-DQkvB9Yf.js";import{a as G}from"./format-CzTD0Usd.js";import{P as te}from"./Pagination-Cd9CbmaG.js";import{M as Ve}from"./Modal-DH7Lw-FF.js";import{F as re}from"./index-B5hHQ14u.js";import{I as et}from"./index-BQC4K4Xn.js";import{S as ue}from"./index-DMKxTJGG.js";import{L as tt}from"./ListLoading-DOowlSUd.js";import"./index-CrAWEQ1V.js";import"./row-Ck51Dhje.js";import"./index-C2H8Z_Bj.js";import"./index-Ch0UCOj0.js";import"./useBubbleLock-hIRUaOo-.js";import"./events-NnJKY1rz.js";import"./providerConfig-BNV0IvMA.js";import"./Trans-C3nYCB7P.js";import"./index-B5talE54.js";import"./EmojiPicker-CU-SneYA.js";import"./useTranslation-DXQttwfC.js";import"./emojiPicker-fXP8_c7a.js";import"./Tabs-BJEYda1H.js";import"./index-CecNsLP-.js";import"./index--YcSIMld.js";import"../i18n/i18n-en-US-DqZ3IPP5.js";import"./DeleteOutlined-DFutYCzo.js";import"./progress-ByKxxd6Z.js";import"./index-Ciqn2WuZ.js";import"../i18n/i18n-zh-CN-CcVu2is6.js";import"../vendor/vendor-es-toolkit-CFMjQStz.js";import"./index-DvKkbDJI.js";import"./index-DOKgRZvR.js";import"./Empty-BmPp2xKS.js";import"./Drawer-DJnu92Sk.js";import"./useForm-C4hvPi2h.js";import"./index-BdXZwuHp.js";const ke=n.createContext(null),st=n.memo(({children:s,config:t})=>e.jsx(ke,{value:t,children:s})),I=()=>{const s=n.use(ke);if(!s)throw new Error("useUserDetailContext must be used within UserDetailProvider");return s},rt=n.memo(({userId:s})=>{const{t}=T("discover"),{isAuthenticated:u,signIn:o,session:m}=ne(),[h,f]=n.useState(!1),g=X(i=>i.useFollowStatus),p=X(i=>i.follow),l=X(i=>i.unfollow);m?.accessToken&&Ue.setAccessToken(m.accessToken);const{data:x,mutate:c}=g(s),d=x?.isFollowing??!1,y=async()=>{if(!u){await o();return}f(!0);try{d?await l(s):await p(s),await c()}catch(i){console.error("Follow action failed:",i)}finally{f(!1)}};return e.jsx(de,{loading:h,shape:"round",size:"large",type:d?"default":"primary",style:{fontWeight:500,minWidth:120},onClick:y,children:t(d?"user.unfollow":"user.follow")})}),nt=n.memo(()=>{const{t:s}=T("discover"),{user:t}=I(),u=t.followingCount??0,o=t.followersCount??0;return e.jsxs(r,{horizontal:!0,align:"center",gap:16,children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(w,{style:{fontWeight:600},children:u}),e.jsx(w,{type:"secondary",children:s("user.following")})]}),e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(w,{style:{fontWeight:600},children:o}),e.jsx(w,{type:"secondary",children:s("user.followers")})]})]})}),H=R(({css:s,cssVar:t})=>({banner:s`
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;

    width: 100%;
    height: 160px;
    padding: 16px;

    ${ce.sm} {
      position: relative;

      width: calc(100% + 32px);
      height: 120px;
      margin-block: -16px 0;
      margin-inline: -16px;
    }

    @media (width <= 1720px) {
      height: 144px;
      padding: 0;
    }
  `,bannerAvatar:s`
    filter: blur(100px);
  `,bannerInner:s`
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 100%;
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillTertiary};

    @media (width <= 1720px) {
      border-radius: 0;
    }
  `,button:s`
    position: absolute;
    inset-block-end: -16px;
    inset-inline-end: 16px;
  `,placeholder:s`
    position: relative;
    width: 100%;
    height: 64px;
    min-height: 64px;

    ${ce.sm} {
      display: none;
    }
  `})),ve=n.memo(({avatar:s,bannerUrl:t})=>{const u=t||s,o=!t&&!!s;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:H.banner,children:e.jsx(Pe,{className:H.bannerInner,children:u&&e.jsx("div",{className:o?H.bannerAvatar:void 0,style:{backgroundImage:`url(${u})`,backgroundPosition:"center",backgroundSize:"cover",height:"100%",width:"100%"}})})}),e.jsx("div",{className:H.placeholder})]})}),ot=n.memo(()=>{const{t:s}=T("discover"),{user:t,isOwner:u,onEditProfile:o}=I(),m=t.displayName||t.userName||t.namespace,h=t.userName||t.namespace,f=n.useMemo(()=>{if(t.avatarUrl)return t.avatarUrl.startsWith("/")?`${window.location.origin}${t.avatarUrl}`:t.avatarUrl},[t.avatarUrl]),g=n.useMemo(()=>t.bannerUrl?t.bannerUrl.startsWith("/")?`${window.location.origin}${t.bannerUrl}`:t.bannerUrl:null,[t.bannerUrl]);return e.jsxs(e.Fragment,{children:[e.jsx(ve,{avatar:f,bannerUrl:g}),e.jsxs(r,{gap:16,children:[e.jsx(Q,{avatar:f,shape:"square",size:64,style:{boxShadow:`0 0 0 4px ${K.colorBgContainer}`,flexShrink:0}}),e.jsxs(r,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",children:[e.jsxs(r,{gap:4,style:{overflow:"hidden"},children:[e.jsx(w,{ellipsis:!0,as:"h1",fontSize:24,style:{margin:0},weight:"bold",children:m}),e.jsxs(w,{ellipsis:!0,fontSize:12,type:"secondary",children:["@",h]})]}),u?o&&e.jsx(de,{shape:"round",onClick:()=>o(),children:s("user.editProfile")}):e.jsx(rt,{userId:t.id})]}),e.jsx(nt,{}),t.description&&e.jsx(w,{as:"p",children:t.description}),e.jsx(oe,{children:e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[t.socialLinks?.github&&e.jsx(F,{title:`@${t.socialLinks?.github}`,children:e.jsx("a",{href:`https://github.com/${t?.socialLinks?.github}`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(J,{icon:e.jsx(Le,{size:16}),size:20,variant:"outlined"})})}),t.socialLinks?.twitter&&e.jsx(F,{title:`@${t.socialLinks?.twitter}`,children:e.jsx("a",{href:`https://twitter.com/${t?.socialLinks?.twitter}`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(J,{icon:e.jsx(De,{size:16}),size:20,variant:"outlined"})})}),t.socialLinks?.website&&e.jsx(F,{title:t.socialLinks?.website,children:e.jsx("a",{href:t?.socialLinks?.website,rel:"noopener noreferrer",target:"_blank",children:e.jsx(J,{icon:Qe,size:20,variant:"outlined"})})})]})})]})]})}),Ce=n.memo(({value:s,onChange:t})=>{const{t:u}=T("discover"),o=[{label:u("user.statusFilter.published"),value:"published"},{label:u("user.statusFilter.unpublished"),value:"unpublished"},{label:u("user.statusFilter.deprecated"),value:"deprecated"},{label:u("user.statusFilter.archived"),value:"archived"},{label:u("user.statusFilter.forked"),value:"forked"},{label:u("user.statusFilter.favorite"),value:"favorite"}];return e.jsx(Fe,{options:o,style:{minWidth:120},value:s,onChange:t})}),it=s=>{switch(s){case"published":return"green";case"unpublished":return"orange";case"deprecated":return"red";case"archived":return"default";default:return"default"}},P=R(({css:s,cssVar:t})=>({author:s`
      color: ${t.colorTextDescription};
    `,desc:s`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:s`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,moreButton:s`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `,secondaryDesc:s`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,statTag:s`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `,title:s`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `,wrapper:s`
      &:hover .more-button {
        opacity: 1;
      }
    `})),at=n.memo(({avatar:s,backgroundColor:t,title:u,description:o,createdAt:m,category:h,tokenUsage:f,forkCount:g,status:p,identifier:l,isValidated:x})=>{const{t:c}=T(["discover","setting"]),d=q(),{message:y}=ie.useApp(),{isOwner:i,onStatusChange:j}=I(),[,k]=n.useState(!1),a=Ie(z=>z.createAgent),b=Be(z=>z.refreshAgentList),C=we.stringifyUrl({query:{source:"new"},url:D("/community/agent",l)},{skipNull:!0}),S=p==="published",A=n.useCallback(()=>{window.open(D("/community/agent",l),"_blank")},[l]),B=n.useCallback(async()=>{k(!0);try{const z=await Ee.getAgentByMarketIdentifier(l);if(z)d(D("/agent",z,"profile"));else{const U=await he.getAssistantDetail({identifier:l,source:"new"});if(!U){y.error(c("setting:myAgents.errors.fetchFailed"));return}const W=await a({config:{...U.config,avatar:U.avatar,backgroundColor:U.backgroundColor,description:U.description,editorData:U.editorData,marketIdentifier:l,tags:U.tags,title:U.title}});await b(),W.agentId&&d(D("/agent",W.agentId,"profile"))}}catch(z){console.error("[UserAgentCard] handleEdit error:",z),y.error(c("setting:myAgents.errors.editFailed"))}finally{k(!1)}},[l,d,a,b,y,c]),_=n.useCallback(z=>{j?.(l,z)},[l,j]),se=i?[{icon:e.jsx(v,{icon:_e}),key:"viewDetail",label:c("setting:myAgents.actions.viewDetail"),onClick:A},{icon:e.jsx(v,{icon:me}),key:"edit",label:c("setting:myAgents.actions.edit"),onClick:B},{type:"divider"},{icon:e.jsx(v,{icon:S?xe:fe}),key:"togglePublish",label:c(S?"setting:myAgents.actions.unpublish":"setting:myAgents.actions.publish"),onClick:()=>_(S?"unpublish":"publish")},{danger:!0,icon:e.jsx(v,{icon:je}),key:"deprecate",label:c("setting:myAgents.actions.deprecate"),onClick:()=>_("deprecate")}]:[];return e.jsxs(Y,{clickable:!0,className:P.wrapper,height:"100%",variant:"outlined",width:"100%",style:{cursor:"pointer",overflow:"hidden",position:"relative"},onClick:()=>d(C),children:[i&&e.jsx("div",{onClick:Z,children:e.jsx(ge,{items:se,children:e.jsx("div",{className:pe("more-button",P.moreButton),children:e.jsx(v,{icon:ye,size:16,style:{cursor:"pointer"}})})})}),e.jsx(r,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:e.jsxs(r,{horizontal:!0,gap:12,style:{overflow:"hidden"},children:[e.jsx(Q,{avatar:s,background:t||"transparent",shape:"square",size:40,style:{flex:"none"}}),e.jsx(r,{flex:1,gap:2,style:{overflow:"hidden"},children:e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(V,{style:{color:"inherit",flex:1,overflow:"hidden"},to:C,onClick:z=>z.stopPropagation(),children:e.jsx(w,{ellipsis:!0,as:"h3",className:P.title,style:{flex:1},children:u})}),x===!1?e.jsx($,{color:"orange",style:{flexShrink:0,margin:0},children:c("assistant.underReview",{defaultValue:"Under Review"})}):i&&p&&e.jsx($,{color:it(p),style:{flexShrink:0,margin:0},children:c(`setting:myAgents.status.${p}`)})]})})]})}),e.jsxs(r,{flex:1,gap:12,paddingInline:16,children:[e.jsx(w,{as:"p",className:P.desc,ellipsis:{rows:3},children:o}),e.jsx(oe,{children:e.jsxs(r,{horizontal:!0,align:"center",gap:4,children:[e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:c("assistants.tokenUsage"),children:e.jsx($,{className:P.statTag,icon:e.jsx(v,{icon:We}),children:G(f)})}),!!(g&&g>0)&&e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:c("fork.forksCount",{count:g}),children:e.jsx($,{className:P.statTag,icon:e.jsx(v,{icon:be}),children:G(g)})})]})})]}),e.jsx(r,{horizontal:!0,align:"center",className:P.footer,justify:"space-between",padding:16,children:e.jsxs(r,{horizontal:!0,align:"center",className:P.secondaryDesc,justify:"space-between",children:[e.jsxs(r,{horizontal:!0,align:"center",gap:4,children:[e.jsx(v,{icon:ae,size:14}),e.jsx(le,{className:P.secondaryDesc,date:m})]}),h&&c(`category.assistant.${h}`)]})})]})}),lt=n.memo(({rows:s=4,pageSize:t=8})=>{const{t:u}=T("discover"),{agents:o,agentCount:m,forkedAgents:h=[],favoriteAgents:f=[],isOwner:g}=I(),[p,l]=n.useState(1),[x,c]=n.useState("published"),[d,y]=n.useState(""),i=n.useMemo(()=>{let a=[...o];if(x==="forked"?a=h:x==="favorite"?a=f:a=a.filter(b=>b.status===x),d.trim()){const b=d.toLowerCase();a=a.filter(C=>{const S=C?.title?.toLowerCase()||"",A=C?.description?.toLowerCase()||"";return S.includes(b)||A.includes(b)})}return a},[o,h,x,d]),j=n.useMemo(()=>{const a=(p-1)*t;return i.slice(a,a+t)},[i,p,t]);if(n.useMemo(()=>{l(1)},[x,d]),o.length===0&&h.length===0)return e.jsx(Ye,{});const k=i.length>t;return e.jsxs(r,{gap:16,children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(w,{fontSize:16,weight:500,children:u("user.publishedAgents")}),m>0&&e.jsx($,{children:i.length})]}),g&&e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(O.Search,{allowClear:!0,placeholder:u("user.searchPlaceholder"),style:{width:200},value:d,onChange:a=>y(a.target.value)}),e.jsx(Ce,{value:x,onChange:a=>c(a)})]})]}),e.jsx(ee,{rows:s,width:"100%",children:j.map((a,b)=>e.jsx(at,{...a},a.identifier||b))}),k&&e.jsx(r,{align:"center",justify:"center",children:e.jsx(te,{current:p,pageSize:t,showSizeChanger:!1,total:i.length,onChange:a=>l(a)})})]})}),ct=s=>{switch(s){case"published":return"green";case"unpublished":return"orange";case"deprecated":return"red";case"archived":return"default";default:return"default"}},N=R(({css:s,cssVar:t})=>({desc:s`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:s`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,moreButton:s`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `,secondaryDesc:s`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,statTag:s`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `,title:s`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `,wrapper:s`
      &:hover .more-button {
        opacity: 1;
      }
    `})),ut=n.memo(({avatar:s,title:t,description:u,createdAt:o,category:m,forkCount:h,installCount:f,identifier:g,memberCount:p,status:l,isValidated:x})=>{const{t:c}=T(["discover","setting"]),d=q(),{isOwner:y,onStatusChange:i}=I(),j=we.stringifyUrl({query:{source:"new"},url:D("/community/group_agent",g)},{skipNull:!0}),k=l==="published",a=n.useCallback(()=>{d(j)},[j,d]),b=n.useCallback(()=>{d(D("/group",g,"profile"))},[g,d]),C=n.useCallback(A=>{i?.(g,A,"group")},[g,i]),S=y?[{icon:e.jsx(v,{icon:me}),key:"edit",label:c("setting:myAgents.actions.edit"),onClick:b},{type:"divider"},{icon:e.jsx(v,{icon:k?xe:fe}),key:"togglePublish",label:c(k?"setting:myAgents.actions.unpublish":"setting:myAgents.actions.publish"),onClick:()=>C(k?"unpublish":"publish")},{danger:!0,icon:e.jsx(v,{icon:je}),key:"deprecate",label:c("setting:myAgents.actions.deprecate"),onClick:()=>C("deprecate")}]:[];return e.jsxs(Y,{clickable:!0,className:N.wrapper,height:"100%",variant:"outlined",width:"100%",style:{cursor:"pointer",overflow:"hidden",position:"relative"},onClick:a,children:[y&&e.jsx("div",{onClick:Z,children:e.jsx(ge,{items:S,children:e.jsx("div",{className:pe("more-button",N.moreButton),children:e.jsx(v,{icon:ye,size:16,style:{cursor:"pointer"}})})})}),e.jsx(r,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:e.jsxs(r,{horizontal:!0,gap:12,style:{overflow:"hidden"},children:[e.jsx(Q,{avatar:s,shape:"square",size:40,style:{flex:"none"}}),e.jsx(r,{flex:1,gap:2,style:{overflow:"hidden"},children:e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(V,{style:{color:"inherit",flex:1,overflow:"hidden"},to:j,onClick:Z,children:e.jsx(w,{ellipsis:!0,as:"h3",className:N.title,style:{flex:1},children:t})}),x===!1?e.jsx($,{color:"orange",style:{flexShrink:0,margin:0},children:c("groupAgents.underReview",{defaultValue:"Under Review"})}):y&&l&&e.jsx($,{color:ct(l),style:{flexShrink:0,margin:0},children:c(`setting:myAgents.status.${l}`)})]})})]})}),e.jsxs(r,{flex:1,gap:12,paddingInline:16,children:[e.jsx(w,{as:"p",className:N.desc,ellipsis:{rows:3},children:u}),e.jsx(oe,{children:e.jsxs(r,{horizontal:!0,align:"center",gap:4,children:[p!==void 0&&p>0&&e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:c("groupAgents.memberCount",{defaultValue:"Members"}),children:e.jsx($,{className:N.statTag,icon:e.jsx(v,{icon:He}),children:G(p)})}),!!(h&&h>0)&&e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:c("fork.forksCount",{count:h}),children:e.jsx($,{className:N.statTag,icon:e.jsx(v,{icon:be}),children:G(h)})}),f!==void 0&&f>0&&e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:c("groupAgents.downloads",{defaultValue:"Downloads"}),children:e.jsx($,{className:N.statTag,icon:e.jsx(v,{icon:Xe}),children:G(f)})})]})})]}),e.jsx(r,{horizontal:!0,align:"center",className:N.footer,justify:"space-between",padding:16,children:e.jsxs(r,{horizontal:!0,align:"center",className:N.secondaryDesc,justify:"space-between",children:[e.jsxs(r,{horizontal:!0,align:"center",gap:4,children:[e.jsx(v,{icon:ae,size:14}),e.jsx(le,{className:N.secondaryDesc,date:o})]}),m&&c(`category.groupAgent.${m}`,{defaultValue:m})]})})]})}),dt=n.memo(({rows:s=4,pageSize:t=8})=>{const{t:u}=T("discover"),{agentGroups:o=[],groupCount:m,forkedAgentGroups:h=[],favoriteAgentGroups:f=[],isOwner:g}=I(),[p,l]=n.useState(1),[x,c]=n.useState("published"),[d,y]=n.useState(""),i=n.useMemo(()=>{let a=[...o];if(x==="forked"?a=h:x==="favorite"?a=f:a=a.filter(b=>b.status===x),d.trim()){const b=d.toLowerCase();a=a.filter(C=>{const S=C?.title?.toLowerCase()||"",A=C?.description?.toLowerCase()||"";return S.includes(b)||A.includes(b)})}return a},[o,h,x,d]),j=n.useMemo(()=>{const a=(p-1)*t;return i.slice(a,a+t)},[i,p,t]);if(n.useMemo(()=>{l(1)},[x,d]),o.length===0&&h.length===0)return null;const k=i.length>t;return e.jsxs(r,{gap:16,children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(w,{fontSize:16,weight:500,children:u("user.publishedGroups",{defaultValue:"创作的群组"})}),m>0&&e.jsx($,{children:i.length})]}),g&&e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(O.Search,{allowClear:!0,placeholder:u("user.searchPlaceholder"),style:{width:200},value:d,onChange:a=>y(a.target.value)}),e.jsx(Ce,{value:x,onChange:a=>c(a)})]})]}),e.jsx(ee,{rows:s,width:"100%",children:j.map((a,b)=>e.jsx(ut,{...a},a.identifier||b))}),k&&e.jsx(r,{align:"center",justify:"center",children:e.jsx(te,{current:p,pageSize:t,showSizeChanger:!1,total:i.length,onChange:a=>l(a)})})]})}),M=R(({css:s,cssVar:t})=>({author:s`
      color: ${t.colorTextDescription};
    `,desc:s`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:s`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,secondaryDesc:s`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,title:s`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `})),ht=n.memo(({title:s,avatar:t,author:u,description:o,identifier:m,category:h})=>{const{t:f}=T("discover"),g=q(),p=D("/community/plugin",m),l=n.useCallback(()=>{g(p)},[p,g]);return e.jsxs(Y,{clickable:!0,"data-testid":"user-plugin-item",height:"100%",variant:"outlined",width:"100%",style:{overflow:"hidden",position:"relative"},onClick:l,children:[e.jsx(r,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:e.jsxs(r,{horizontal:!0,gap:12,title:m,style:{overflow:"hidden"},children:[e.jsx(Q,{avatar:t||s,size:40,style:{flex:"none"}}),e.jsxs(r,{flex:1,gap:6,style:{overflow:"hidden"},children:[e.jsx(r,{horizontal:!0,align:"center",flex:1,gap:8,style:{overflow:"hidden"},children:e.jsx(V,{style:{color:"inherit",overflow:"hidden"},to:p,children:e.jsx(w,{ellipsis:!0,as:"h2",className:M.title,children:s})})}),e.jsx(r,{horizontal:!0,align:"center",className:M.author,gap:8,children:u&&e.jsx("div",{children:u})})]})]})}),e.jsx(r,{flex:1,gap:12,paddingInline:16,children:e.jsx(w,{as:"p",className:M.desc,ellipsis:{rows:3},children:o})}),e.jsx(r,{horizontal:!0,align:"center",className:M.footer,justify:"space-between",padding:16,children:e.jsx(r,{horizontal:!0,align:"center",className:M.secondaryDesc,gap:8,children:h&&f(`plugins.categories.${h}.name`)})})]})}),gt=n.memo(({rows:s=4,pageSize:t=8})=>{const{t:u}=T("discover"),{plugins:o=[],isOwner:m}=I(),[h,f]=n.useState(1),[g,p]=n.useState(""),l=n.useMemo(()=>{let d=[...o];if(g.trim()){const y=g.toLowerCase();d=d.filter(i=>{const j=i?.title?.toLowerCase()||"",k=i?.description?.toLowerCase()||"";return j.includes(y)||k.includes(y)})}return d},[o,g]),x=n.useMemo(()=>{const d=(h-1)*t;return l.slice(d,d+t)},[l,h,t]);if(n.useEffect(()=>{f(1)},[g]),o.length===0)return null;const c=l.length>t;return e.jsxs(r,{gap:16,children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(w,{fontSize:16,weight:500,children:u("user.plugins")}),o.length>0&&e.jsx($,{children:l.length})]}),m&&o.length>0&&e.jsx(O.Search,{allowClear:!0,placeholder:u("user.searchPlaceholder"),style:{width:200},value:g,onChange:d=>p(d.target.value)})]}),e.jsx(ee,{rows:s,width:"100%",children:x.map((d,y)=>e.jsx(ht,{...d},d.identifier||y))}),c&&e.jsx(r,{align:"center",justify:"center",children:e.jsx(te,{current:h,pageSize:t,showSizeChanger:!1,total:l.length,onChange:d=>f(d)})})]})}),pt=/^https?:\/\/github\.com\/[\w-]+\/[\w.-]+\/?$/,Se=n.memo(({open:s,onClose:t,onSuccess:u})=>{const{t:o}=T("discover"),{message:m}=ie.useApp(),[h]=re.useForm(),[f,g]=n.useState(!1),p=n.useCallback(async()=>{try{const c=(await h.validateFields()).gitUrl?.trim();if(!c)return;g(!0),await Me.market.socialProfile.submitRepo.mutate({gitUrl:c,type:"skill"}),m.success(o("user.submitRepoSuccess")),u?.(),t(),h.resetFields()}catch(x){console.error("[SubmitRepoModal] Failed to submit:",x),m.error(x instanceof Error?x.message:o("user.submitRepoError"))}finally{g(!1)}},[h,m,o,u,t]),l=n.useCallback(()=>{h.resetFields(),t()},[h,t]);return e.jsxs(Ve,{centered:!0,cancelText:o("user.cancel"),confirmLoading:f,okText:o("user.submit"),open:s,title:!1,width:480,onCancel:l,onOk:p,children:[e.jsx(w,{strong:!0,fontSize:20,style:{display:"block",marginBottom:8,marginTop:16},children:o("user.submitRepoTitle")}),e.jsx(w,{style:{display:"block",marginBottom:16},type:"secondary",children:o("user.submitRepoDescription")}),e.jsx(re,{form:h,layout:"vertical",children:e.jsx(re.Item,{label:o("user.githubUrl"),name:"gitUrl",rules:[{required:!0,message:o("user.githubUrlRequired")},{pattern:pt,message:o("user.githubUrlInvalid")}],children:e.jsx(O,{placeholder:"https://github.com/username/repo"})})}),e.jsx(r,{style:{marginTop:8},children:e.jsx(w,{style:{fontSize:12},type:"secondary",children:o("user.submitRepoHint")})})]})});Se.displayName="SubmitRepoModal";const L=R(({css:s,cssVar:t})=>({author:s`
      color: ${t.colorTextDescription};
    `,desc:s`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:s`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,secondaryDesc:s`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,title:s`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `})),mt=n.memo(({name:s,icon:t,author:u,description:o,identifier:m,category:h,updatedAt:f,installCount:g,github:p,ratingAvg:l,commentCount:x,resourcesCount:c=0})=>{const{t:d}=T("discover"),y=q(),i=D("/community/skill",m),j=n.useCallback(()=>{he.reportSkillEvent({event:"click",identifier:m,source:location.pathname}).catch(()=>{}),y(i)},[m,i,y]);return e.jsxs(Y,{clickable:!0,"data-testid":"user-skill-item",height:"100%",variant:"outlined",width:"100%",style:{overflow:"hidden",position:"relative"},onClick:j,children:[e.jsxs(r,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:[e.jsxs(r,{horizontal:!0,gap:12,title:m,style:{overflow:"hidden"},children:[e.jsx(Q,{avatar:t||s,size:40,style:{flex:"none"}}),e.jsxs(r,{flex:1,gap:6,style:{overflow:"hidden"},children:[e.jsx(r,{horizontal:!0,align:"center",flex:1,gap:8,style:{overflow:"hidden"},children:e.jsx(V,{style:{color:"inherit",overflow:"hidden"},to:i,children:e.jsx(w,{ellipsis:!0,as:"h2",className:L.title,children:s})})}),e.jsxs(r,{horizontal:!0,align:"center",className:L.author,gap:8,children:[!!l&&e.jsxs(r,{horizontal:!0,align:"center",gap:4,style:{fontSize:13},children:[e.jsx(v,{fill:K.colorTextDescription,icon:Je,size:12}),l?.toFixed(1)]}),u&&e.jsx("div",{children:u})]})]})]}),e.jsx(r,{horizontal:!0,align:"center",gap:4,children:p?.url&&e.jsx("a",{href:p.url,rel:"noopener noreferrer",target:"_blank",onClick:Z,children:e.jsx(J,{fill:K.colorTextDescription,icon:et})})})]}),e.jsxs(r,{flex:1,gap:12,paddingInline:16,children:[e.jsx(w,{as:"p",className:L.desc,ellipsis:{rows:3},children:o}),e.jsxs(r,{horizontal:!0,align:"center",className:L.secondaryDesc,justify:"space-between",children:[e.jsx($,{icon:e.jsx(v,{icon:Ke}),size:"small",variant:"filled",style:{color:"inherit",fontSize:"inherit"},children:(c||0)+1}),e.jsx(r,{horizontal:!0,align:"center",className:L.secondaryDesc,gap:8,children:h&&d(`skills.categories.${h}.name`)})]})]}),e.jsx(r,{horizontal:!0,align:"center",className:L.footer,justify:"space-between",padding:16,children:e.jsxs(r,{horizontal:!0,align:"center",gap:4,children:[e.jsx(v,{className:L.secondaryDesc,icon:ae,size:14}),e.jsx(le,{className:L.secondaryDesc,date:f})]})})]})}),xt=n.memo(({rows:s=4,pageSize:t=8})=>{const{t:u}=T("discover"),{skills:o=[],isOwner:m}=I(),[h,f]=n.useState(1),[g,p]=n.useState(""),[l,x]=n.useState(!1),c=n.useMemo(()=>{let i=[...o];if(g.trim()){const j=g.toLowerCase();i=i.filter(k=>{const a=k?.name?.toLowerCase()||"",b=k?.description?.toLowerCase()||"";return a.includes(j)||b.includes(j)})}return i},[o,g]),d=n.useMemo(()=>{const i=(h-1)*t;return c.slice(i,i+t)},[c,h,t]);if(n.useEffect(()=>{f(1)},[g]),o.length===0&&!m)return null;const y=c.length>t;return e.jsxs(e.Fragment,{children:[e.jsxs(r,{gap:16,children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[e.jsx(w,{fontSize:16,weight:500,children:u("user.skills")}),o.length>0&&e.jsx($,{children:c.length})]}),e.jsxs(r,{horizontal:!0,align:"center",gap:8,children:[m&&o.length>0&&e.jsx(O.Search,{allowClear:!0,placeholder:u("user.searchPlaceholder"),style:{width:200},value:g,onChange:i=>p(i.target.value)}),m&&e.jsx(Ge,{icon:e.jsx(Ze,{size:14}),onClick:()=>x(!0),children:u("user.submitRepo")})]})]}),o.length>0?e.jsx(ee,{rows:s,width:"100%",children:d.map((i,j)=>e.jsx(mt,{...i},i.identifier||j))}):e.jsx(r,{align:"center",justify:"center",style:{minHeight:120,opacity:.5},children:e.jsx(w,{type:"secondary",children:u("user.noSkills")})}),y&&e.jsx(r,{align:"center",justify:"center",children:e.jsx(te,{current:h,pageSize:t,showSizeChanger:!1,total:c.length,onChange:i=>f(i)})})]}),e.jsx(Se,{open:l,onClose:()=>x(!1)})]})}),ft=n.memo(()=>e.jsxs(r,{gap:32,children:[e.jsx(lt,{}),e.jsx(dt,{}),e.jsx(xt,{}),e.jsx(gt,{})]})),jt=({onMutate:s}={})=>{const{t}=T("setting"),{message:u,modal:o}=ie.useApp(),{session:m}=ne(),h=Re(qe.enableMarketTrustedClient);return{handleStatusChange:n.useCallback(async(g,p,l="agent")=>{if(!h&&!m?.accessToken){u.error(t("myAgents.errors.notAuthenticated"));return}const x=`${l}-status-${p}`,c=t(`myAgents.actions.${p}Loading`),d=t(`myAgents.actions.${p}Success`),y=t(`myAgents.actions.${p}Error`);async function i(j,k,a){try{if(u.loading({content:c,key:x}),E.setAccessToken(m.accessToken),a==="group")switch(k){case"publish":{await E.publishAgentGroup(j);break}case"unpublish":{await E.unpublishAgentGroup(j);break}case"deprecate":{await E.deprecateAgentGroup(j);break}}else switch(k){case"publish":{await E.publishAgent(j);break}case"unpublish":{await E.unpublishAgent(j);break}case"deprecate":{await E.deprecateAgent(j);break}}u.success({content:d,key:x}),s?.()}catch(b){console.error(`[useUserDetail] ${k} ${a} error:`,b),u.error({content:`${y}: ${b instanceof Error?b.message:"Unknown error"}`,key:x})}}if(p==="deprecate"){o.confirm({cancelText:t("myAgents.actions.cancel"),content:t("myAgents.actions.deprecateConfirmContent"),okButtonProps:{danger:!0},okText:t("myAgents.actions.confirmDeprecate"),onOk:async()=>{await i(g,p,l)},title:t("myAgents.actions.deprecateConfirmTitle")});return}await i(g,p,l)},[h,m?.accessToken,u,o,t,s])}},yt=n.memo(()=>e.jsxs(r,{gap:24,width:"100%",children:[e.jsx(ve,{}),e.jsxs(r,{gap:16,children:[e.jsx(ue.Avatar,{shape:"square",size:64,style:{boxShadow:`0 0 0 4px ${K.colorBgContainer}`,flexShrink:0}}),e.jsx(ue,{paragraph:{rows:1}})]}),e.jsx(tt,{length:4,rows:4})]})),bt=n.memo(({mobile:s})=>{const t=Oe(),u=decodeURIComponent(t.slug??""),o=q(),{checkAndShowClaimableResources:m,getCurrentUserInfo:h,isAuthenticated:f,openProfileSetup:g}=ne(),p=X(C=>C.useUserProfile),{data:l,isLoading:x,mutate:c}=p({username:u}),d=h(),{data:y}=Te(d?.sub),i=f&&!!d&&l?.user?.namespace===y?.namespace,j=n.useRef(!1);n.useEffect(()=>{i&&!j.current&&(j.current=!0,m(()=>{c()}))},[i,m,c]);const{handleStatusChange:k}=jt({onMutate:c}),a=n.useCallback(C=>{const S=l?.user?.userName||l?.user?.namespace;g(A=>{C?.(A),c();const B=A.userName||A.namespace;B&&B!==S&&o(`/community/user/${B}`,{replace:!0})})},[l?.user?.userName,l?.user?.namespace,g,o,c]),b=n.useMemo(()=>{if(!l||!l.user)return null;const{user:C,agents:S,agentGroups:A,forkedAgents:B,forkedAgentGroups:_,favoriteAgents:se,favoriteAgentGroups:z,skills:U,plugins:W}=l,Ae=S.reduce((ze,$e)=>ze+($e.installCount||0),0);return{agentCount:S.length,agentGroups:A||[],agents:S,favoriteAgentGroups:z||[],favoriteAgents:se||[],forkedAgentGroups:_||[],forkedAgents:B||[],groupCount:A?.length||0,isOwner:i,mobile:s,onEditProfile:a,onStatusChange:i?k:void 0,plugins:W||[],skills:U||[],totalInstalls:Ae,user:C}},[l,i,s,a,k]);return x?e.jsx(yt,{}):b?e.jsxs(st,{config:b,children:[e.jsx(ot,{}),e.jsx(ft,{})]}):e.jsx(Ne,{})}),gs=n.memo(()=>e.jsx(bt,{mobile:!0}));export{gs as MobileUserDetailPage,bt as default};
