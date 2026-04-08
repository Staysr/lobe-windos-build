import{iI as oe,s as B,u as R,iJ as ie,iK as se,j as k,k as w,cj as le,n as ce,m as b,a8 as A,i as C,gu as de,F as g,W as H,U as Z,V as ue,c as he,cg as pe,$ as me,fC as fe,bx as L,hh as ge,hn as xe,hd as W,bX as ve,a2 as ye,B as G,I as be,o as y,a as J,h as we,iL as Se,iM as Te,iN as ke,ax as Ie,co as Ae,cO as Ce}from"./index-BBAuCJqA.js";import{r as i}from"../vendor/vendor-emotion-D2wYcXAj.js";import{s as F,g as K}from"./index-CyMfM3Iz.js";import{j as n}from"../vendor/vendor-motion-DRC1LdIk.js";import{P as Me}from"./PopoverGroup-CaJgedXQ.js";import{u as P,m as N}from"./index-4zFKohhS.js";import{m as je}from"./markdownToTxt-B-CuD7bg.js";import{c as _}from"./useOperationState-B2Cvlhy1.js";import{da as Pe,b3 as Ne,aZ as q,bn as _e}from"../vendor/vendor-icons-C6hg4LnF.js";import"./providerConfig-DLbrlvJC.js";import{A as Ee}from"./Alert-BwmQeg13.js";import{A as Q}from"./index-GNbd6Ibo.js";import{u as Y}from"./MarketAuthProvider-Cq4lbND_.js";import{o as $e}from"./Modal-DnCv9yaW.js";import{D as ze}from"./index-BQEu9Ri4.js";import{p as V,P as ee}from"./router-DR4bRapi.js";import{M as He}from"./Modal-DupZSReQ.js";const Le=i.memo(()=>{const{analytics:e}=oe(),t=i.useCallback(()=>{const l=F.currentSession(K()),r=l?.id,c=F.defaultSessions(K()),a=B.showRightPanel(R.getState()),h=ie.activeDisplayMessages(se());return{active_assistant:r==="inbox"?null:l?.meta?.title||null,has_chat_history:h.length>0,session_id:r||"inbox",sidebar_state:a?"expanded":"collapsed",visible_assistants_count:c.length}},[]);return i.useEffect(()=>{if(!e)return;const l=setTimeout(()=>{e.track({name:"main_page_view",properties:{...t(),spm:"main_page.interface.view"}})},1e3);return()=>clearTimeout(l)},[e,t]),null});Le.displayName="MainInterfaceTracker";const We=k(({css:e,cssVar:t})=>({arrow:e`
    opacity: 0;
    transition: opacity ${t.motionDurationMid} ease;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFill};
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px ${t.colorPrimaryBorder};
    }
  `,arrowVisible:e`
    opacity: 1;
  `,container:e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset-block: 16px 120px;
    inset-inline-end: 8px;

    width: 32px;
  `,rail:e`
    pointer-events: auto;

    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;
    justify-content: space-between;

    width: 100%;
    height: fit-content;
    margin-block: 0;
    margin-inline: auto;

    &:hover .arrow {
      opacity: 1;
    }
  `,railContent:e`
    scrollbar-width: none;

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;
    justify-content: space-between;

    max-height: 50vh;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  `})),Be=k(({css:e,cssVar:t})=>({indicator:e`
    flex-shrink: 0;

    min-width: 12px;
    height: 12px;
    padding-block: 5px;
    padding-inline: 4px;
  `,indicatorActive:e`
    transform: scaleX(1.1);
    background: ${t.colorPrimary};
    box-shadow: 0 0 0 1px ${t.colorPrimaryHover};
  `,indicatorContent:e`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: ${t.colorFillSecondary};
  `,indicatorContentActive:e`
    background: ${t.colorPrimary};
  `})),te=i.memo(({id:e,width:t,preview:l,role:r,virtuosoIndex:c,position:a,activePosition:h,onJump:m})=>{const{t:s}=w("chat"),o=Be,u=h===a,d=s(r==="user"?"minimap.senderUser":"minimap.senderAssistant"),p=l?n.jsxs(n.Fragment,{children:[n.jsx(A,{fontSize:12,style:{marginBottom:4},type:"secondary",weight:500,children:d}),n.jsx(A,{as:"p",fontSize:12,children:l})]}):void 0;return n.jsx(le,{content:p,mouseEnterDelay:.1,placement:"left",styles:{content:{width:320}},children:n.jsx(ce,{clickable:!0,align:"flex-end",style:{borderRadius:4},variant:"borderless",width:"100%",children:n.jsx("div",{"aria-current":u?"true":void 0,"aria-label":s("minimap.jumpToMessage",{index:a+1}),className:o.indicator,style:{width:t},onClick:()=>m(c),children:n.jsx("div",{className:b(o.indicatorContent,u&&o.indicatorContentActive)})})})},e)});te.displayName="MinimapIndicator";const E=12,Re=24,De=320,Ue=e=>{if(!e)return E;const t=Math.min(e.length/De,1);return E+(Re-E)*t},Oe=e=>{if(!e)return"";const l=je(e).replaceAll(/\s+/g," ").trim();return l?l.slice(0,100)+(l.length>100?"…":""):""},Fe=3,$=de("lobe-react:chat-minimap"),Ke=()=>{const e=P(_.virtuaScrollMethods),t=P(_.activeIndex),l=P(_.displayMessages,C),r=i.useMemo(()=>l.reduce((s,o,u)=>(o.role!=="user"&&o.role!=="assistant"||s.push({id:o.id,preview:Oe(o.content),role:o.role,virtuosoIndex:u,width:Ue(o.content)}),s),[]),[l]),c=i.useMemo(()=>{const s=new Map;return r.forEach(({virtuosoIndex:o},u)=>{s.set(o,u)}),s},[r]),a=i.useMemo(()=>t===null?null:($("> activeIndex",t),$("> indicatorIndexMap",c),c.get(t)??null),[t,c]),h=i.useCallback(s=>{e?.scrollToIndex(s,{align:"start",smooth:!0})},[e]),m=i.useCallback(s=>{if(!e||r.length===0)return;let o;if(a!==null)$("activeIndicatorPosition",a),o=Math.min(Math.max(a+(s==="prev"?-1:1),0),Math.max(r.length-1,0));else if(t!==null)if(s==="prev"){let d=-1;for(let p=r.length-1;p>=0;p-=1)if(r[p].virtuosoIndex<t){d=p;break}o=d===-1?0:d}else{let d=r.length-1;for(const[p,x]of r.entries())if(x.virtuosoIndex>t){d=p;break}o=d}else o=s==="prev"?0:r.length-1;const u=r[o];u&&e.scrollToIndex(u.virtuosoIndex,{align:"start",smooth:!0})},[t,a,r,e]);return{activeIndicatorPosition:a,handleJump:h,handleStep:m,indicators:r}},Xe=i.memo(()=>{const{t:e}=w("chat"),t=We,[l,r]=i.useState(!1),{indicators:c,activeIndicatorPosition:a,handleJump:h,handleStep:m}=Ke();return c.length<=Fe?null:n.jsx(g,{align:"center",className:t.container,justify:"center",children:n.jsxs(g,{className:t.rail,role:"group",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[n.jsx(H,{"aria-label":e("minimap.previousMessage"),className:b(t.arrow,l&&t.arrowVisible),icon:Pe,size:14,onClick:()=>m("prev")}),n.jsx(g,{className:t.railContent,children:n.jsx(Me,{contentLayoutAnimation:!0,children:c.map(({id:s,width:o,preview:u,role:d,virtuosoIndex:p},x)=>n.jsx(te,{activePosition:a,id:s,position:x,preview:u,role:d,virtuosoIndex:p,width:o,onJump:h},s))})}),n.jsx(H,{"aria-label":e("minimap.nextMessage"),className:b(t.arrow,l&&t.arrowVisible),icon:Ne,size:14,onClick:()=>m("next")})]})})});Xe.displayName="ChatMinimap";const z=k(({css:e,cssVar:t})=>({closeButton:e`
    color: ${t.colorTextSecondary};
    transition: color 0.2s;

    &:hover {
      color: ${t.colorTextQuaternary};
    }
  `,container:e`
    position: fixed;
    z-index: 50;
    inset-block-start: 16px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    animation: fade-in-slide-down 300ms ease;

    @keyframes fade-in-slide-down {
      from {
        transform: translate(-50%, -16px);
        opacity: 0;
      }

      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  `,text:e`
    font-size: 16px;
    font-weight: 500;
    color: ${t.colorBgBase};
  `,toast:e`
    display: flex;
    align-items: center;

    padding-block: 8px;
    padding-inline: 24px;
    border-radius: 9999px;

    background: ${t.colorText};
    box-shadow: ${t.boxShadowSecondary};
  `})),Ze=()=>{const{t:e}=w("chat"),[t,l]=i.useState(!0),r=Z(ue.getHotkeyById(he.ToggleZenMode));return i.useEffect(()=>{const c=setTimeout(()=>{l(!1)},2e3);return()=>clearTimeout(c)},[]),t?n.jsx("div",{className:z.container,children:n.jsx("div",{className:z.toast,children:n.jsxs(g,{horizontal:!0,align:"center",className:z.text,gap:8,children:[e("zenMode")," ",n.jsx(pe,{inverseTheme:!0,keys:r})]})})}):null},wt=i.memo(()=>R(B.inZenMode)&&n.jsx(Ze,{})),Ge=[{avatar:"💻",identifier:"lobe-cloud-sandbox",label:"Cloud Sandbox"}],Je=1e3,qe=15e3,ne=i.memo(({tool:e,onAuthComplete:t})=>{const{t:l}=w("chat"),[r,c]=i.useState(!1),[a,h]=i.useState(!1),m=i.useRef(null),s=i.useRef(null),o=i.useRef(null),u=i.useRef(null),d=Z(ye.userId),p=L(f=>f.createKlavisServer),x=L(f=>f.refreshKlavisServerTools),S=i.useCallback(()=>{s.current&&(clearInterval(s.current),s.current=null),o.current&&(clearInterval(o.current),o.current=null),u.current&&(clearTimeout(u.current),u.current=null),m.current=null,h(!1)},[]);i.useEffect(()=>()=>{S()},[S]),i.useEffect(()=>{e.server?.status===W.CONNECTED&&a&&(S(),t())},[e.server?.status,a,S,t]);const I=i.useCallback(f=>{o.current||(o.current=setInterval(async()=>{try{await x(f)}catch(v){console.info("[Klavis] Polling check (expected during auth):",v)}},Je),u.current=setTimeout(()=>{o.current&&(clearInterval(o.current),o.current=null),h(!1)},qe))},[x]),D=i.useCallback((f,v)=>{s.current=setInterval(()=>{try{f.closed&&(s.current&&(clearInterval(s.current),s.current=null),m.current=null,I(v))}catch{s.current&&(clearInterval(s.current),s.current=null),I(v)}},500)},[x,I]),U=i.useCallback((f,v)=>{S(),h(!0);const j=window.open(f,"_blank","width=600,height=700");j?(m.current=j,D(j,v)):I(v)},[S,D,I]),O=async()=>{if(d){if(e.server?.status===W.PENDING_AUTH&&e.server.oauthUrl){U(e.server.oauthUrl,e.server.identifier);return}c(!0);try{const f=await p({identifier:e.identifier,serverName:e.serverName,userId:d});f&&(f.isAuthenticated?(await x(f.identifier),t()):f.oauthUrl&&U(f.oauthUrl,f.identifier))}catch(f){console.error("[ToolAuthAlert] Failed to create server:",f)}finally{c(!1)}}},ae=()=>typeof e.icon=="string"?n.jsx(Q,{alt:e.label,avatar:e.icon,size:20,style:{flex:"none"}}):n.jsx(be,{fill:y.colorText,icon:e.icon,size:20}),M=r||a;return n.jsxs(g,{horizontal:!0,align:"center",gap:12,justify:"space-between",style:{cursor:"pointer"},onClick:O,children:[n.jsxs(g,{horizontal:!0,align:"center",gap:8,children:[ae(),n.jsx(A,{children:e.label})]}),n.jsx(G,{disabled:M,icon:q,loading:M,size:"small",type:"text",onClick:O,children:l(M?"toolAuth.authorizing":"toolAuth.authorize")})]})});ne.displayName="KlavisToolAuthItem";const re=i.memo(({tool:e})=>{const{t}=w("chat"),{signIn:l,isLoading:r}=Y(),c=async()=>{try{await l()}catch(a){console.error("[ToolAuthAlert] Market sign in failed:",a)}};return n.jsxs(g,{horizontal:!0,align:"center",gap:12,justify:"space-between",style:{cursor:"pointer"},onClick:c,children:[n.jsxs(g,{horizontal:!0,align:"center",gap:8,children:[n.jsx(Q,{alt:e.label,avatar:e.avatar,size:20,style:{flex:"none"}}),n.jsx(A,{children:e.label})]}),n.jsx(G,{disabled:r,icon:q,loading:r,size:"small",type:"text",onClick:c,children:t(r?"toolAuth.authorizing":"toolAuth.signIn")})]})});re.displayName="MarketToolAuthItem";const Qe=i.memo(()=>{const{t:e}=w("chat"),t=me(fe.currentAgentPlugins,C),l=L(ge.getServers,C),{isAuthenticated:r}=Y(),c=i.useMemo(()=>{const a=[];for(const h of t){const m=xe.find(o=>o.identifier===h);if(m){const o=l.find(u=>u.identifier===h);(!o||o.status===W.PENDING_AUTH)&&a.push({...m,authType:"klavis",server:o});continue}const s=Ge.find(o=>o.identifier===h);s&&!r&&a.push({...s,authType:"market"})}return a},[t,l,r]);return c.length===0?null:n.jsx(Ee,{showIcon:!1,style:{width:"100%"},type:"secondary",description:n.jsxs(n.Fragment,{children:[e("toolAuth.hint"),n.jsx(ve,{dashed:!0,style:{marginBlock:12}}),n.jsx(g,{gap:12,style:{marginTop:8},children:c.map(a=>a.authType==="klavis"?n.jsx(ne,{tool:a,onAuthComplete:()=>{}},a.identifier):n.jsx(re,{tool:a},a.identifier))})]}),title:n.jsx(g,{horizontal:!0,align:"center",gap:6,children:e("toolAuth.title")})})});Qe.displayName="ToolAuthAlert";const St=({context:e,open:t,setOpen:l}={})=>{const r=i.useRef(null),c=i.useCallback(()=>{r.current?.close(),r.current=null},[]),a=i.useCallback(()=>(r.current||(l?.(!0),r.current=$e({afterClose:()=>{r.current=null,l?.(!1)},context:e})),r.current),[e,l]);return i.useEffect(()=>{if(t!==void 0){if(t){a();return}c()}},[c,t,a]),{closeShareModal:c,openShareModal:a}},X=k(({css:e,cssVar:t})=>({content:e`
    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 100%;
    max-height: 100%;

    background: ${t.colorBgContainer};
  `,drawer:e`
    z-index: 10;
    height: 100%;
    background: ${t.colorBgContainer};
  `})),Tt=i.memo(({children:e})=>{const[t,l,r,c]=J(d=>[N.showPortal(d),N.showPluginUI(d),N.showArtifactUI(d),V.showThread(d)]),[a,h]=R(d=>[B.portalWidth(d),d.updateSystemStatus]),[m,s]=i.useState(a);m!==a&&s(a);const{lg:o}=we(),u=(d,p)=>{if(!p)return;const x=typeof p.width=="string"?Number.parseInt(p.width):p.width;x&&(C(x,a)||(s(x),h({portalWidth:x})))};return n.jsx(ze,{className:X.drawer,defaultSize:{width:m},expand:t,expandable:!1,maxWidth:ke,mode:o?"fixed":"float",placement:"right",showHandleWhenCollapsed:!1,showHandleWideArea:!1,size:{height:"100%",width:a},classNames:{content:X.content},minWidth:r||l||c?Se:Te,onSizeChange:u,children:n.jsx(i.Activity,{mode:t?"visible":"hidden",name:"AgentPortal",children:e})})}),Ye=Ie`
  :has(.portal-artifact) {
    overflow: hidden;
    padding-block-end: 12px;
  }
`,Ve=({children:e})=>n.jsx(g,{className:b(Ye,"portal-body"),height:"100%",style:{flex:1,height:0,position:"relative"},width:"100%",children:e}),et=()=>n.jsx(ee,{renderBody:e=>n.jsx(Ve,{children:e})}),tt=k(({css:e,cssVar:t})=>({container:e`
    background: linear-gradient(${t.colorBgElevated}, ${t.colorBgContainer}) !important;
  `})),nt=()=>{const[e,t,l]=J(a=>[a.showPortal,V.showThread(a),a.clearPortalStack]),{t:r}=w("portal"),c=a=>n.jsx(g,{gap:8,height:"calc(100% - 52px)",padding:"0 8px",style:{overflow:"hidden"},children:n.jsx(g,{height:"100%",style:{marginInline:-8,overflow:"hidden",position:"relative"},width:"calc(100% + 16px)",children:a})});return n.jsx(He,{allowFullscreen:!0,destroyOnHidden:!0,className:b(t&&tt.container),footer:null,height:"95%",open:e,title:r("title"),styles:{body:{padding:0},header:{display:"none"}},onCancel:()=>l(),children:n.jsx(ee,{renderBody:c})})},rt=i.memo(({mobile:e})=>{const t=e?nt:et;return n.jsx(i.Suspense,{fallback:n.jsx(Ae,{debugId:"PortalPanel"}),children:n.jsx(t,{})})});rt.displayName="PortalPanel";const T=k(({css:e})=>({cancelIcon:e`
    position: absolute;
    z-index: 100;
    inset-block-start: 8px;
    inset-inline-end: 8px;
  `,container:e`
    position: absolute;
    z-index: 1100;
    inset-block-end: 16px;
    inset-inline-end: 20px;

    overflow: hidden;

    border: 1px solid ${y.colorSplit};
    border-radius: 8px;

    background: ${y.colorBgContainer};
    box-shadow: ${y.boxShadowSecondary};
  `,mobileContainer:e`
    inset-block-end: 8px;
    inset-inline-start: 8px;
  `,wrapper:e`
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, ${y.colorBgContainer} 0%, transparent),
        ${y.colorBgContainer} var(--gradient-stop, 140px)
      ),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cg fill='${y.colorFillTertiary}' %3E %3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  `,wrapperDark:e`
    --gradient-stop: 80px;
  `,wrapperLight:e`
    --gradient-stop: 140px;
  `})),kt=i.memo(({mobile:e,children:t,show:l,onCancel:r,showCloseIcon:c=!0,width:a=422,height:h="auto",wrapper:m={},className:s,...o})=>{const u=Ce(),{className:d,...p}=m;return l&&n.jsxs(g,{className:b(T.container,e&&T.mobileContainer,s),height:h,width:e?"calc(100% - 16px)":a,...o,children:[c&&n.jsx(H,{className:T.cancelIcon,icon:_e,onClick:()=>r?.()}),n.jsx(g,{horizontal:!0,gap:16,padding:"20px 20px 16px",className:b(T.wrapper,u?T.wrapperDark:T.wrapperLight,d),...p,children:t})]})});export{Xe as C,Le as M,kt as N,Tt as P,Qe as T,wt as Z,rt as a,St as u};
