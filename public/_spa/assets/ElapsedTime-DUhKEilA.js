import{j as s,A as _e,m as xe}from"../vendor/vendor-motion-DRC1LdIk.js";import{mg as Bt,F as b,k as R,f as rt,B as it,cP as Lt,I as ye,j as X,bZ as Ot,mh as Ft,iv as Ge,dA as Wt,a5 as at,n as Z,ci as De,W as pe,m as I,o as m,cO as Pe,as as st,C as oe,a8 as J,ar as lt,aT as ct,a6 as _t,cS as Gt,aa as le,cj as Ht,mi as He,bU as dt,a9 as Vt,bX as Kt,ad as Xt,j1 as qt}from"./index-BBAuCJqA.js";import{r as f}from"../vendor/vendor-emotion-D2wYcXAj.js";import{N as Yt}from"./index-CO1aYmRK.js";import{W as Ve}from"./index-BIzUCJC6.js";import{W as Qt}from"./WideScreenButton-BG_ClupB.js";import{u as ut}from"./useQueryParam-CD2CvXDx.js";import{A as Jt}from"./Action-BDiDYQHj.js";import{em as Zt,I as Te,aM as Ke,aZ as Re,bn as ze,b0 as en,en as tn,cz as nn,dm as ft,bx as on,bq as rn}from"../vendor/vendor-icons-C6hg4LnF.js";import{k as ht,M as an,l as sn,P as ln,f as cn}from"./providerConfig-DLbrlvJC.js";import{B as dn}from"./BaseErrorForm-DNmaitKy.js";import{u as un}from"./useProviderName-BKiFzBCq.js";import{P as fn}from"./index-8y4Zx6ZG.js";import{S as hn}from"./index-D_OrzpAP.js";import{S as me}from"./SliderWithInput-F1JVUgSq.js";import{G as pt}from"./Grid-2gpThKre.js";import{S as mt}from"./Segmented-CZw21fS6.js";import{u as E}from"./index-B1r7rTyq.js";import{imageGenerationConfigSelectors as H}from"./selectors-DasueCgW.js";import{N as pn}from"./index-eN9E4ZEX.js";import{M as mn}from"./index-DQ29yPop.js";import{S as gn}from"./Select-Bx4n9Xfj.js";var vn=214013,xn=2531011,yn=4294967295,bn=(1<<31)-1,be=function(e){return e*vn+xn&yn},we=function(e){return(e&bn)>>16},gt=(function(){function e(t){this.seed=t}return e.prototype.clone=function(){return new e(this.seed)},e.prototype.next=function(){var t=new e(this.seed),n=t.unsafeNext();return[n,t]},e.prototype.unsafeNext=function(){var t=be(this.seed),n=we(t),o=be(t),r=we(o);this.seed=be(o);var a=we(this.seed),i=a+(r+(n<<15)<<15);return i|0},e.prototype.getState=function(){return[this.seed]},e})();function wn(e){var t=e.length===1;if(!t)throw new Error("The state must have been produced by a congruential32 RandomGenerator");return new gt(e[0])}var Sn=Object.assign(function(e){return new gt(e)},{fromState:wn}),jn=function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var o=n.call(e),r,a=[],i;try{for(;(t===void 0||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(l){i={error:l}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},Cn=function(e,t,n){if(n||arguments.length===2)for(var o=0,r=t.length,a;o<r;o++)(a||!(o in t))&&(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))},vt=(function(){function e(t,n){this.states=t,this.index=n}return e.twist=function(t){for(var n=t.slice(),o=0;o!==e.N-e.M;++o){var r=(n[o]&e.MASK_UPPER)+(n[o+1]&e.MASK_LOWER);n[o]=n[o+e.M]^r>>>1^-(r&1)&e.A}for(var o=e.N-e.M;o!==e.N-1;++o){var a=(n[o]&e.MASK_UPPER)+(n[o+1]&e.MASK_LOWER);n[o]=n[o+e.M-e.N]^a>>>1^-(a&1)&e.A}var i=(n[e.N-1]&e.MASK_UPPER)+(n[0]&e.MASK_LOWER);return n[e.N-1]=n[e.M-1]^i>>>1^-(i&1)&e.A,n},e.seeded=function(t){var n=Array(e.N);n[0]=t;for(var o=1;o!==e.N;++o){var r=n[o-1]^n[o-1]>>>30;n[o]=Math.imul(e.F,r)+o|0}return n},e.from=function(t){return new e(e.twist(e.seeded(t)),0)},e.prototype.clone=function(){return new e(this.states,this.index)},e.prototype.next=function(){var t=new e(this.states,this.index),n=t.unsafeNext();return[n,t]},e.prototype.unsafeNext=function(){var t=this.states[this.index];return t^=this.states[this.index]>>>e.U,t^=t<<e.S&e.B,t^=t<<e.T&e.C,t^=t>>>e.L,++this.index>=e.N&&(this.states=e.twist(this.states),this.index=0),t},e.prototype.getState=function(){return Cn([this.index],jn(this.states),!1)},e.fromState=function(t){var n=t.length===e.N+1&&t[0]>=0&&t[0]<e.N;if(!n)throw new Error("The state must have been produced by a mersenne RandomGenerator");return new e(t.slice(1),t[0])},e.N=624,e.M=397,e.R=31,e.A=2567483615,e.F=1812433253,e.U=11,e.S=7,e.B=2636928640,e.T=15,e.C=4022730752,e.L=18,e.MASK_LOWER=Math.pow(2,e.R)-1,e.MASK_UPPER=Math.pow(2,e.R),e})();function kn(e){return vt.fromState(e)}var Nn=Object.assign(function(e){return vt.from(e)},{fromState:kn}),xt=(function(){function e(t,n,o,r){this.s01=t,this.s00=n,this.s11=o,this.s10=r}return e.prototype.clone=function(){return new e(this.s01,this.s00,this.s11,this.s10)},e.prototype.next=function(){var t=new e(this.s01,this.s00,this.s11,this.s10),n=t.unsafeNext();return[n,t]},e.prototype.unsafeNext=function(){var t=this.s00^this.s00<<23,n=this.s01^(this.s01<<23|this.s00>>>9),o=t^this.s10^(t>>>18|n<<14)^(this.s10>>>5|this.s11<<27),r=n^this.s11^n>>>18^this.s11>>>5,a=this.s00+this.s10|0;return this.s01=this.s11,this.s00=this.s10,this.s11=r,this.s10=o,a},e.prototype.jump=function(){var t=new e(this.s01,this.s00,this.s11,this.s10);return t.unsafeJump(),t},e.prototype.unsafeJump=function(){for(var t=0,n=0,o=0,r=0,a=[1667051007,2321340297,1548169110,304075285],i=0;i!==4;++i)for(var l=1;l;l<<=1)a[i]&l&&(t^=this.s01,n^=this.s00,o^=this.s11,r^=this.s10),this.unsafeNext();this.s01=t,this.s00=n,this.s11=o,this.s10=r},e.prototype.getState=function(){return[this.s01,this.s00,this.s11,this.s10]},e})();function Tn(e){var t=e.length===4;if(!t)throw new Error("The state must have been produced by a xorshift128plus RandomGenerator");return new xt(e[0],e[1],e[2],e[3])}var Rn=Object.assign(function(e){return new xt(-1,~e,e|0,0)},{fromState:Tn}),yt=(function(){function e(t,n,o,r){this.s01=t,this.s00=n,this.s11=o,this.s10=r}return e.prototype.clone=function(){return new e(this.s01,this.s00,this.s11,this.s10)},e.prototype.next=function(){var t=new e(this.s01,this.s00,this.s11,this.s10),n=t.unsafeNext();return[n,t]},e.prototype.unsafeNext=function(){var t=this.s00+this.s10|0,n=this.s10^this.s00,o=this.s11^this.s01,r=this.s00,a=this.s01;return this.s00=r<<24^a>>>8^n^n<<16,this.s01=a<<24^r>>>8^o^(o<<16|n>>>16),this.s10=o<<5^n>>>27,this.s11=n<<5^o>>>27,t},e.prototype.jump=function(){var t=new e(this.s01,this.s00,this.s11,this.s10);return t.unsafeJump(),t},e.prototype.unsafeJump=function(){for(var t=0,n=0,o=0,r=0,a=[3639956645,3750757012,1261568508,386426335],i=0;i!==4;++i)for(var l=1;l;l<<=1)a[i]&l&&(t^=this.s01,n^=this.s00,o^=this.s11,r^=this.s10),this.unsafeNext();this.s01=t,this.s00=n,this.s11=o,this.s10=r},e.prototype.getState=function(){return[this.s01,this.s00,this.s11,this.s10]},e})();function $n(e){var t=e.length===4;if(!t)throw new Error("The state must have been produced by a xoroshiro128plus RandomGenerator");return new yt(e[0],e[1],e[2],e[3])}var Mn=Object.assign(function(e){return new yt(-1,~e,e|0,0)},{fromState:$n});function bt(e,t){if(e.sign!==t.sign)return Ue(e,{sign:-t.sign,data:t.data});for(var n=[],o=0,r=e.data,a=t.data,i=r.length-1,l=a.length-1;i>=0||l>=0;--i,--l){var c=i>=0?r[i]:0,d=l>=0?a[l]:0,u=c+d+o;n.push(u>>>0),o=~~(u/4294967296)}return o!==0&&n.push(o),{sign:e.sign,data:n.reverse()}}function En(e){e.sign=1;for(var t=e.data,n=t.length-1;n>=0;--n)if(t[n]===4294967295)t[n]=0;else return t[n]+=1,e;return t.unshift(1),e}function In(e,t){for(var n=Math.max(e.length,t.length),o=0;o<n;++o){var r=o+e.length-n,a=o+t.length-n,i=r>=0?e[r]:0,l=a>=0?t[a]:0;if(i<l)return!0;if(i>l)return!1}return!1}function Ue(e,t){if(e.sign!==t.sign)return bt(e,{sign:-t.sign,data:t.data});var n=e.data,o=t.data;if(In(n,o)){var r=Ue(t,e);return r.sign=-r.sign,r}for(var a=[],i=0,l=n.length-1,c=o.length-1;l>=0||c>=0;--l,--c){var d=l>=0?n[l]:0,u=c>=0?o[c]:0,h=d-u-i;a.push(h>>>0),i=h<0?1:0}return{sign:e.sign,data:a.reverse()}}function Xe(e){for(var t=e.data,n=0;n!==t.length&&t[n]===0;++n);return n===t.length?(e.sign=1,e.data=[0],e):(t.splice(0,n),e)}function wt(e,t){for(var n=e>2?~~(4294967296/e)*e:4294967296,o=t.unsafeNext()+2147483648;o>=n;)o=t.unsafeNext()+2147483648;return o%e}function St(e,t,n){for(var o=t.length;;){for(var r=0;r!==o;++r){var a=r===0?t[0]+1:4294967296,i=wt(a,n);e[r]=i}for(var r=0;r!==o;++r){var l=e[r],c=t[r];if(l<c)return e;if(l>c)break}}}function $e(e,t,n){var o=Xe(En(Ue(t,e))),r=o.data.slice(0),a=St(r,o.data,n);return Xe(bt({sign:1,data:a},e))}function An(e,t,n){if(n!=null){var o=n.clone();return[$e(e,t,o),o]}return function(r){var a=r.clone();return[$e(e,t,a),a]}}var qe=typeof BigInt<"u"?BigInt:void 0,Dn=typeof BigInt<"u"?BigInt(1):void 0,jt=typeof BigInt<"u"?BigInt(32):void 0,Pn=typeof BigInt<"u"?BigInt(4294967296):void 0;function Me(e,t,n){for(var o=t-e+Dn,r=Pn,a=1;r<o;)r<<=jt,++a;var i=Ye(a,n);if(i<o)return i+e;if(i+o<r)return i%o+e;for(var l=r-r%o;i>=l;)i=Ye(a,n);return i%o+e}function Ye(e,t){for(var n=qe(t.unsafeNext()+2147483648),o=1;o<e;++o){var r=t.unsafeNext();n=(n<<jt)+qe(r+2147483648)}return n}function zn(e,t,n){if(n!=null){var o=n.clone();return[Me(e,t,o),o]}return function(r){var a=r.clone();return[Me(e,t,a),a]}}function Se(e,t){if(t<0){var n=-t;e.sign=-1,e.data[0]=~~(n/4294967296),e.data[1]=n>>>0}else e.sign=1,e.data[0]=~~(t/4294967296),e.data[1]=t>>>0;return e}function Un(e,t,n){var o=t.data[1],r=t.data[0],a=t.sign,i=n.data[1],l=n.data[0],c=n.sign;if(e.sign=1,a===1&&c===-1){var d=o+i,u=r+l+(d>4294967295?1:0);return e.data[0]=u>>>0,e.data[1]=d>>>0,e}var h=o,p=r,g=i,x=l;a===-1&&(h=i,p=l,g=o,x=r);var y=0,j=h-g;return j<0&&(y=1,j=j>>>0),e.data[0]=p-x-y,e.data[1]=j,e}var Bn=Number.MAX_SAFE_INTEGER,Ln={sign:1,data:[0,0]},On={sign:1,data:[0,0]},Qe={sign:1,data:[0,0]},je=[0,0];function Fn(e,t,n,o){var r=n<=Bn?Se(Qe,n):Un(Qe,Se(Ln,t),Se(On,e));return r.data[1]===4294967295?(r.data[0]+=1,r.data[1]=0):r.data[1]+=1,St(je,r.data,o),je[0]*4294967296+je[1]+e}function Ee(e,t,n){var o=t-e;if(o<=4294967295){var r=wt(o+1,n);return r+e}return Fn(e,t,o,n)}function Wn(e,t,n){if(n!=null){var o=n.clone();return[Ee(e,t,o),o]}return function(r){var a=r.clone();return[Ee(e,t,a),a]}}function Ct(e,t){for(var n=0;n!=t;++n)e.unsafeNext()}function _n(e,t){var n=e.clone();return Ct(n,t),n}function kt(e,t){for(var n=[],o=0;o!=t;++o)n.push(e.unsafeNext());return n}function Gn(e,t){var n=e.clone(),o=kt(n,t);return[o,n]}var Hn="module",Vn="7.0.1",Kn="2248506b66d969d1a8b477a4dde8e24cbac33e6a";const Je=Object.freeze(Object.defineProperty({__proto__:null,__commitHash:Kn,__type:Hn,__version:Vn,congruential32:Sn,generateN:Gn,mersenne:Nn,skipN:_n,uniformArrayIntDistribution:An,uniformBigIntDistribution:zn,uniformIntDistribution:Wn,unsafeGenerateN:kt,unsafeSkipN:Ct,unsafeUniformArrayIntDistribution:$e,unsafeUniformBigIntDistribution:Me,unsafeUniformIntDistribution:Ee,xoroshiro128plus:Mn,xorshift128plus:Rn},Symbol.toStringTag,{value:"Module"}));function Xn(e){const t=Date.now();let n=Je.xoroshiro128plus(t);const o=new Set;for(;o.size<e;){const[r,a]=Je.uniformIntDistribution(0,ht,n);n=a,o.add(r)}return Array.from(o)}const qn=f.memo(({path:e,Workspace:t,PromptInput:n})=>{const o=Bt({path:e,end:!0}),[r]=ut("topic"),a=!r;return o?s.jsxs(s.Fragment,{children:[s.jsx(Yt,{right:s.jsx(Qt,{}),styles:{center:{alignItems:"center",display:"flex",justifyContent:"center",minWidth:0},left:{flex:1,minWidth:0},right:{flex:1,minWidth:0}}}),s.jsxs(b,{height:"100%",style:{flexDirection:"column",overflow:"hidden",position:"relative"},width:"100%",children:[s.jsx(b,{flex:1,style:{minHeight:0,overflowY:"auto"},width:"100%",children:s.jsx(Ve,{wrapperStyle:{minHeight:"100%"},children:s.jsx(_e,{initial:!1,mode:"wait",children:a?s.jsx(xe.div,{animate:{opacity:1,y:0},exit:{opacity:0,y:-8},initial:{opacity:0,y:8},transition:{duration:.24,ease:"easeOut"},children:s.jsx(b,{align:"center",justify:"center",style:{minHeight:"calc(100vh - 180px)"},width:"100%",children:s.jsx(n,{disableAnimation:!0,showTitle:!0})})},"home-input"):s.jsx(xe.div,{animate:{opacity:1,y:0},exit:{opacity:0,y:8},initial:{opacity:0,y:10},transition:{duration:.28,ease:"easeOut"},children:s.jsx(t,{embedInput:!1})},"topic-workspace")})})}),s.jsx(_e,{initial:!1,children:!a&&s.jsx(xe.div,{animate:{opacity:1,y:0},exit:{opacity:0,y:8},initial:{opacity:0,y:8},transition:{delay:.04,duration:.2,ease:"easeOut"},children:s.jsx(Ve,{style:{marginTop:-8,paddingBlockEnd:12},children:s.jsx(n,{disableAnimation:!0,showTitle:!1})})},"bottom-input")})]})]}):null});qn.displayName="CreateGenerationPage";const Yn=f.memo(({title:e,content:t})=>s.jsx(Jt,{icon:Zt,popover:{content:t,minWidth:300,title:e},title:typeof e=="string"?e:void 0,trigger:"click"}));Yn.displayName="ConfigAction";const Qn=f.memo(({provider:e,onNavigate:t})=>{const{t:n}=R(["modelProvider","error"]),o=rt(),r=un(e);return s.jsx(dn,{avatar:s.jsx(fn,{provider:e,shape:"square",size:40}),title:n("unlock.apiKey.title",{name:r,ns:"error"}),action:s.jsx(it,{type:"primary",onClick:()=>{o(Lt("/settings/provider",e||"all")),t?.()},children:n("unlock.goToSettings",{ns:"error"})}),desc:e===an.Bedrock?n("bedrock.unlock.description"):n("unlock.apiKey.description",{name:r,ns:"error"})})});Qn.displayName="GenerationInvalidAPIKey";const ce=X(({css:e,cssVar:t})=>({lite:e`
    height: 36px;
  `,heroSelect:e`
    width: auto;
    font-size: inherit;
    line-height: 1.2;
  `,heroText:e`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
  `})),Nt=f.memo(({mode:e,layout:t="toolbar"})=>{const{t:n}=R("common"),o=rt(),r=t==="hero",a=f.useMemo(()=>[{label:s.jsxs(b,{horizontal:!0,align:"center",gap:8,children:[!r&&s.jsx(ye,{icon:Te}),s.jsx("span",{className:r?ce.heroText:void 0,children:n("tab.image")})]}),value:"image"},{label:s.jsxs(b,{horizontal:!0,align:"center",gap:8,children:[!r&&s.jsx(ye,{icon:Ke}),s.jsx("span",{className:r?ce.heroText:void 0,children:n("tab.video")})]}),value:"video"}],[n,r]),i=f.useCallback(c=>{const u=String(c.value??"")==="video",h=n(u?"tab.video":"tab.image");return r?s.jsx("span",{style:{fontSize:"inherit",fontWeight:600,whiteSpace:"nowrap"},children:h}):s.jsxs(b,{horizontal:!0,align:"center",gap:6,children:[s.jsx(ye,{icon:u?Ke:Te,size:16}),s.jsx("span",{style:{whiteSpace:"nowrap"},children:h})]})},[r,n]),l=f.useCallback(c=>{c!==e&&o(c==="video"?"/video":"/image")},[e,o]);return s.jsx(gn,{className:r?ce.heroSelect:ce.lite,labelRender:i,options:a,popupMatchSelectWidth:!1,size:r?"large":"middle",value:e,variant:r?"borderless":"filled",onChange:l})});Nt.displayName="GenerationMediaModeSegment";const Jn=X(({css:e,cssVar:t})=>({textarea:e`
    padding: 0;
    border-radius: 0;
  `})),Zn=f.memo(({centerActions:e,className:t,header:n,inlineContent:o,leftActions:r,rightActions:a,isDarkMode:i,isCreating:l,value:c,onValueChange:d,onGenerate:u,placeholder:h,generateLabel:p,generatingLabel:g,disableGenerate:x,minRows:y=3,maxRows:j=6})=>{const k=async v=>{v.key!=="Enter"||v.shiftKey||v.nativeEvent.isComposing||(v.preventDefault(),!(x||l||!c?.trim())&&await u())},N=s.jsx(Ot,{autoSize:{maxRows:j,minRows:y},className:Jn.textarea,placeholder:h,value:c,variant:"borderless",onChange:v=>d(v.target.value),onKeyDown:k});return s.jsx(Ft,{className:t,header:n,styles:{body:{padding:8}},footer:e?s.jsxs(b,{horizontal:!0,align:"center",gap:4,padding:4,width:"100%",children:[s.jsx(b,{horizontal:!0,align:"center",flex:1,gap:4,style:{justifyContent:"flex-start",minWidth:0},children:r}),s.jsx(b,{align:"center",flex:1,justify:"center",style:{minWidth:0},children:e}),s.jsxs(b,{horizontal:!0,align:"center",flex:1,gap:8,style:{justifyContent:"flex-end",minWidth:0},children:[a,s.jsx(Ge,{disabled:x||!c,loading:l,title:l?g:p,onClick:u})]})]}):s.jsx(Wt,{left:r,right:s.jsxs(b,{horizontal:!0,align:"center",gap:8,children:[a,s.jsx(Ge,{disabled:x||!c,loading:l,title:l?g:p,onClick:u})]})}),children:o?s.jsxs(b,{horizontal:!0,align:"start",gap:8,children:[o,s.jsx(b,{flex:1,children:N})]}):N})});Zn.displayName="GenerationPromptInput";const de=64,Ze=28,G=X(({css:e})=>({addCircle:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: ${Ze}px;
    height: ${Ze}px;
    border-radius: 50%;

    color: ${m.colorTextSecondary};

    background: ${m.colorBgElevated};
    box-shadow:
      0 2px 8px rgb(0 0 0 / 15%),
      0 0 0 1px ${m.colorBorderSecondary};

    transition: all ${m.motionDurationMid} ease;

    &:hover {
      color: ${m.colorPrimary};
      background: ${m.colorPrimaryBg};
      box-shadow:
        0 2px 8px rgb(0 0 0 / 15%),
        0 0 0 1px ${m.colorPrimary};
    }
  `,closeButton:e`
    position: absolute;
    z-index: 10;
    inset-block-start: -6px;
    inset-inline-end: -6px;

    border-radius: 50% !important;
  `,filledCard:e`
    cursor: pointer;

    position: relative;

    flex-shrink: 0;

    width: ${de}px;
    height: ${de}px;
    padding: 2px;
    border-radius: 6px;

    transition: all ${m.motionDurationMid} ease;

    .upload-card-close {
      opacity: 0 !important;
    }

    &:hover {
      z-index: 99 !important;

      .upload-card-close {
        opacity: 1 !important;
      }
    }
  `,filledCardInner:e`
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 100%;
    border-radius: 3px;
  `,label:e`
    padding-inline: 4px;

    font-size: 10px;
    line-height: 1;
    color: ${m.colorTextQuaternary};
    text-align: center;
  `,placeholderCard:e`
    cursor: pointer;

    flex-shrink: 0;

    width: ${de}px;
    height: ${de}px;
    border-radius: 6px;

    color: ${m.colorTextQuaternary};
  `,uploadOverlay:e`
    position: absolute;
    z-index: 5;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 3px;

    background: ${m.colorBgMask};
  `})),eo=f.memo(({imageUrl:e,label:t,onUpload:n,onRemove:o,maxFileSize:r,className:a,closeClassName:i,style:l,variant:c="card"})=>{const d=f.useRef(null),u=at(v=>v.uploadWithProgress),[h,p]=f.useState(!1),[g,x]=f.useState(null),y=f.useCallback(()=>{d.current?.click()},[]),j=f.useCallback(async v=>{const w=v.target.files?.[0];if(!w||r&&w.size>r)return;const se=URL.createObjectURL(w);x(se),p(!0);try{const O=await u({file:w,onStatusUpdate:()=>{},skipCheckFileType:!0});if(O?.url){const A=O.dimensions?{dimensions:O.dimensions,url:O.url}:O.url;n(A)}}finally{URL.revokeObjectURL(se),x(null),p(!1)}},[r,u,n]),k=g||e,N=s.jsx("input",{accept:"image/*",ref:d,style:{display:"none"},type:"file",onChange:j,onClick:v=>{v.currentTarget.value=""}});return c==="circle"&&!k?s.jsxs(s.Fragment,{children:[N,s.jsx("div",{className:`${G.addCircle} ${a||""}`,style:l,onClick:y,children:s.jsx(Re,{size:14})})]}):k?s.jsxs(s.Fragment,{children:[N,s.jsxs(Z,{clickable:!0,className:I(G.filledCard,a),style:l,variant:"outlined",onClick:y,children:[s.jsxs("div",{className:G.filledCardInner,children:[s.jsx(De,{fill:!0,unoptimized:!0,alt:"",src:g||e,style:{objectFit:"cover"}}),h&&s.jsx("div",{className:G.uploadOverlay,children:s.jsx(hn,{percent:"auto",size:"small"})})]}),!h&&s.jsx(pe,{glass:!0,className:I(G.closeButton,i,"upload-card-close"),icon:ze,size:12,variant:"outlined",onClick:v=>{v.stopPropagation(),o()}})]})]}):s.jsxs(s.Fragment,{children:[N,s.jsxs(Z,{clickable:!0,align:"center",className:I(G.placeholderCard,a),gap:4,justify:"center",style:l,variant:"filled",onClick:y,children:[s.jsx(Re,{size:20}),t&&s.jsx("span",{className:G.label,children:t})]})]})});eo.displayName="UploadCard";const to=e=>{const t=e.split(":");if(t.length!==2)return!1;const[n,o]=t.map(Number);return!isNaN(n)&&!isNaN(o)&&n>0&&o>0},no=f.memo(({options:e,onChange:t,value:n,defaultValue:o,...r})=>{const a=Pe(),[i,l]=st("1:1",{defaultValue:o||"1:1",onChange:t,value:n});return s.jsx(Z,{padding:4,variant:"filled",...r,children:s.jsx(pt,{gap:4,maxItemWidth:48,rows:16,children:e?.map(c=>{const d=i===c.value;let u;if(to(c.value)){const[h,p]=c.value.split(":").map(Number),g=h>p;u=s.jsx("div",{style:{aspectRatio:`${h} / ${p}`,border:`2px solid ${d?m.colorText:m.colorTextDescription}`,borderRadius:3,height:g?void 0:16,width:g?16:void 0}})}else u=s.jsx("div",{style:{border:`2px dashed ${d?m.colorText:m.colorTextDescription}`,borderRadius:3,height:16,width:16}});return s.jsxs(Z,{clickable:!0,align:"center",gap:4,justify:"center",padding:8,shadow:d&&!a,variant:"filled",style:{backgroundColor:d?m.colorBgElevated:"transparent"},onClick:()=>{l(c.value),t?.(c.value)},children:[s.jsx(oe,{height:16,style:{marginTop:4},width:16,children:u}),s.jsx(J,{fontSize:12,type:d?void 0:"secondary",children:c.label||c.value})]},c.value)})})})});function te(e){const t=E(H.parameters),n=E(H.parametersSchema),o=t?.[e],r=E(c=>c.setParamOnInput),a=f.useCallback(c=>{r(e,c)},[e,r]),i=n?.[e],l=f.useMemo(()=>{const c=i&&typeof i=="object"&&"min"in i?i.min:void 0,d=i&&typeof i=="object"&&"max"in i?i.max:void 0,u=i&&typeof i=="object"&&"step"in i?i.step:void 0,h=i&&typeof i=="object"&&"description"in i?i.description:void 0,p=i&&typeof i=="object"&&"enum"in i?i.enum:void 0,g=i&&typeof i=="object"&&"maxFileSize"in i?i.maxFileSize:void 0,x=i&&typeof i=="object"&&"maxCount"in i?i.maxCount:void 0;return{description:h,max:d,min:c,step:u,enumValues:p,maxFileSize:g,maxCount:x}},[i]);return{value:o,setValue:a,...l}}function oo(){const e=E(),t=E(H.parametersSchema),n=E(d=>d.parameters?.aspectRatio),o=e.activeAspectRatio??n??sn,r=E(H.isSupportedParam("width")),a=E(H.isSupportedParam("height")),i=E(H.isSupportedParam("aspectRatio")),l=f.useMemo(()=>{const d=t?.aspectRatio?.enum||[];return d.length>0?d:ln},[t]),c=i||r||a;return{isLocked:e.isAspectRatioLocked,toggleLock:e.toggleAspectRatioLock,width:e.parameters?.width,height:e.parameters?.height,aspectRatio:o,setWidth:e.setWidth,setHeight:e.setHeight,setAspectRatio:e.setAspectRatio,widthSchema:t?.width,heightSchema:t?.height,options:l,showDimensionControl:c}}const lr=f.memo(()=>{const{value:e,setValue:t,min:n,max:o}=te("cfg");return s.jsx(me,{max:o,min:n,value:e,onChange:t})}),ue={aspectRatioSelect:{width:"100%"},label:{fontWeight:500}},ro=f.memo(()=>{const{t:e}=R("image"),{isLocked:t,toggleLock:n,width:o,height:r,aspectRatio:a,setWidth:i,setHeight:l,setAspectRatio:c,widthSchema:d,heightSchema:u,options:h}=oo(),p=f.useMemo(()=>h.map(y=>({label:y,value:y})),[h]),g=e(t?"config.aspectRatio.unlock":"config.aspectRatio.lock"),x=t?en:tn;return s.jsxs(b,{gap:16,children:[s.jsxs(b,{gap:8,children:[s.jsxs(b,{horizontal:!0,align:"center",distribution:"space-between",children:[s.jsx("span",{style:ue.label,children:e("config.aspectRatio.label")}),s.jsx(pe,{"aria-label":g,icon:x,size:"small",title:g,onClick:n})]}),s.jsx(no,{options:p,style:ue.aspectRatioSelect,value:a,onChange:c})]}),d&&s.jsxs(b,{gap:8,children:[s.jsx("span",{style:ue.label,children:e("config.width.label")}),s.jsx(me,{max:d.max,min:d.min,value:o??d.min,onChange:i})]}),u&&s.jsxs(b,{gap:8,children:[s.jsx("span",{style:ue.label,children:e("config.height.label")}),s.jsx(me,{max:u.max,min:u.min,value:r??u.min,onChange:l})]})]})});ro.displayName="DimensionControlGroup";const io=50,et="__custom__",ao=f.memo(({presetCounts:e=[1,2,4,8],min:t=1,max:n=io,disabled:o=!1})=>{const r=E(H.imageNum),a=E(v=>v.setImageNum),[i,l]=f.useState(!1),[c,d]=f.useState(null),u=f.useRef(null),h=f.useRef(null),p=!e.includes(r),g=f.useMemo(()=>{const v=e.map(w=>({label:String(w),value:w}));return p?v.push({label:String(r),value:r}):v.push({label:s.jsx(Re,{size:16,style:{verticalAlign:"middle"}}),value:et}),v},[e,p,r]),x=f.useCallback(v=>{o||(v===et||p&&v===r?(d(r),u.current=r,l(!0)):a(v))},[o,p,r,a]),y=f.useCallback(()=>{let v=u.current;if(v===null){l(!1);return}v>n?v=n:v<t&&(v=t),a(v),l(!1),d(null)},[t,n,a]),j=f.useCallback(()=>{l(!1),d(null)},[]),k=f.useCallback(v=>{if(v===null){d(null),u.current=null;return}const w=parseInt(String(v),10);isNaN(w)||(d(w),u.current=w)},[]);f.useEffect(()=>{i&&setTimeout(()=>{h.current&&(h.current.focus(),h.current.select())},100)},[i]);const N=c!==null;return i?s.jsxs(b,{horizontal:!0,gap:8,style:{width:"100%"},children:[s.jsx(lt,{max:n,min:t,placeholder:`${t}-${n}`,ref:h,size:"small",style:{flex:1},value:c,onChange:k,onPressEnter:y,onKeyDown:v=>{v.key==="Escape"&&(v.preventDefault(),j())}}),s.jsx(pe,{disabled:!N,icon:nn,size:"small",variant:"filled",onClick:y}),s.jsx(pe,{icon:ze,size:"small",variant:"filled",onClick:j})]}):s.jsx(mt,{block:!0,disabled:o,options:g,style:{width:"100%"},value:r,variant:"filled",onChange:x})});ao.displayName="ImageCountSelector";const so=({onDrop:e,accept:t="image/*"})=>{const[n,o]=f.useState(!1),r=f.useRef(0);return{dragHandlers:{onDragEnter:d=>{d.preventDefault(),d.stopPropagation(),d.dataTransfer.types.includes("Files")&&(r.current++,o(!0))},onDragLeave:d=>{d.preventDefault(),d.stopPropagation(),r.current--,r.current===0&&o(!1)},onDragOver:d=>{d.preventDefault(),d.stopPropagation()},onDrop:async d=>{d.preventDefault(),d.stopPropagation(),r.current=0,o(!1);const h=Array.from(d.dataTransfer.files).filter(p=>{if(t==="*/*")return!0;if(t.endsWith("/*")){const g=t.slice(0,-2);return p.type.startsWith(g)}return p.type===t});h.length>0&&e(h)}},isDragOver:n}},fe=e=>{if(e===0)return"0 B";const t=1024,n=["B","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/Math.pow(t,o)).toFixed(1))} ${n[o]}`},lo=(e,t)=>{const o=t??10485760;return e.size>o?{actualSize:e.size,error:"fileSizeExceeded",fileName:e.name,maxSize:o,valid:!1}:{valid:!0}},co=(e,t)=>({valid:!0}),uo=e=>new Promise((t,n)=>{const o=URL.createObjectURL(e),r=new globalThis.Image;r.onload=()=>{URL.revokeObjectURL(o),t({height:r.naturalHeight,width:r.naturalWidth})},r.onerror=()=>{URL.revokeObjectURL(o),n(new Error("Failed to load image"))},r.src=o}),fo=async(e,t)=>{const{width:n,height:o}=await uo(e),r=t.width?.min,a=t.width?.max,i=t.height?.min,l=t.height?.max;if(r&&n<r||i&&o<i)return{error:"imageDimensionTooSmall",fileName:e.name,height:o,minHeight:i,minWidth:r,valid:!1,width:n};if(a&&n>a||l&&o>l)return{error:"imageDimensionTooLarge",fileName:e.name,height:o,maxHeight:l,maxWidth:a,valid:!1,width:n};const c=n/o,d=t.aspectRatio?.min,u=t.aspectRatio?.max;return d&&c<d||u&&c>u?{error:"imageAspectRatioInvalid",fileName:e.name,height:o,valid:!1,width:n}:{valid:!0}},ho=(e,t)=>{const n=[],o=[],r=[],a=co(e.length);return!a.valid&&a.error&&n.push(a.error),e.forEach(i=>{const l=lo(i,t.maxFileSize);o.push(l),!l.valid&&l.error&&(n.push(l.error),r.push(l))}),{errors:Array.from(new Set(n)),failedFiles:r,fileResults:o,valid:n.length===0}},po=(e,t,n)=>{const{t:o}=R("components"),{message:r}=ct.useApp(),a=f.useCallback((l,c=0)=>{const d=ho(l,{maxFileSize:t});return d.valid?!0:(d.errors.forEach(u=>{if(u==="fileSizeExceeded"){const h=d.failedFiles?.filter(p=>p.error==="fileSizeExceeded"&&p.actualSize&&p.maxSize)||[];if(h.length===1){const p=h[0],g=fe(p.actualSize),x=fe(p.maxSize),y=p.fileName||"File";r.error(o("MultiImagesUpload.validation.fileSizeExceededDetail",{actualSize:g,fileName:y,maxSize:x}))}else if(h.length>1){const p=fe(h[0].maxSize),g=h.map(x=>`${x.fileName||"File"} (${fe(x.actualSize)})`).join(", ");r.error(o("MultiImagesUpload.validation.fileSizeExceededMultiple",{count:h.length,fileList:g,maxSize:p}))}}else u==="imageCountExceeded"&&r.error(o("MultiImagesUpload.validation.imageCountExceeded"))}),!1)},[e,t,r,o]);return{validateDimensions:f.useCallback(async l=>{if(!n)return!0;try{const c=await fo(l,n);if(!c.valid){if(c.error==="imageDimensionTooSmall"){const d=[];c.minWidth&&d.push(`width ≥ ${c.minWidth}px`),c.minHeight&&d.push(`height ≥ ${c.minHeight}px`),r.error(o("ImageUpload.validation.imageDimensionTooSmall",{fileName:c.fileName||l.name,height:c.height,minDimension:d.join(", "),width:c.width}))}else if(c.error==="imageDimensionTooLarge"){const d=[];c.maxWidth&&d.push(`width ≤ ${c.maxWidth}px`),c.maxHeight&&d.push(`height ≤ ${c.maxHeight}px`),r.error(o("ImageUpload.validation.imageDimensionTooLarge",{fileName:c.fileName||l.name,height:c.height,maxDimension:d.join(", "),width:c.width}))}else if(c.error==="imageAspectRatioInvalid"){const d=c.width&&c.height?(c.width/c.height).toFixed(2):"?",u=n.aspectRatio?.min,h=n.aspectRatio?.max,p=u&&h?`${u}–${h}`:u?`≥ ${u}`:`≤ ${h}`;r.error(o("ImageUpload.validation.imageAspectRatioInvalid",{actualRatio:d,fileName:c.fileName||l.name,range:p}))}return!1}}catch{}return!0},[n,r,o]),validateFiles:a}},Tt=X(({css:e,cssVar:t})=>({dragOver:e`
    transform: scale(1.02);
    border-color: ${t.colorPrimary} !important;
    box-shadow: 0 0 0 2px color-mix(in srgb, ${t.colorPrimary} 12.5%, transparent);
    transition: transform 0.2s ease;
  `,dragTransition:e`
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  `})),U=X(({css:e})=>({changeButton:e`
      cursor: pointer;

      padding-block: 8px;
      padding-inline: 16px;
      border: 1px solid ${m.colorBorder};
      border-radius: ${m.borderRadius};

      font-size: 12px;
      font-weight: 500;
      color: ${m.colorText};

      background: ${m.colorBgContainer};
      box-shadow: ${m.boxShadowSecondary};

      &:hover {
        border-color: ${m.colorPrimary};
        color: ${m.colorPrimary};
        background: ${m.colorBgElevated};
      }
    `,changeOverlay:e`
      position: absolute;
      z-index: 5;
      inset: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;
      background: ${m.colorBgMask};

      transition: opacity ${m.motionDurationMid} ease;
    `,container:e`
      width: 100%;
    `,deleteIcon:e`
      cursor: pointer;

      position: absolute;
      z-index: 10;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 24px;
      height: 24px;
      border-radius: 50%;

      color: ${m.colorTextLightSolid};

      opacity: 0;
      background: ${m.colorBgMask};

      transition: opacity ${m.motionDurationMid} ease;

      &:hover {
        color: ${m.colorError};
        background: ${m.colorErrorBg};
      }
    `,placeholder:e`
      cursor: pointer;

      width: 100%;
      height: 160px;
      border: 1px solid ${m.colorBorder};
      border-radius: ${m.borderRadiusLG};

      background: ${m.colorFillTertiary};

      transition: all ${m.motionDurationMid} ease;

      &:hover {
        background: ${m.colorFillSecondary};
      }

      &.drag-over {
        transform: scale(1.02);
        border-color: ${m.colorPrimary};
        background: ${m.colorPrimaryBg};
      }
    `,placeholderIcon:e`
      color: ${m.colorTextTertiary};
    `,placeholderText:e`
      font-size: 12px;
      line-height: 1.4;
      color: ${m.colorTextSecondary};
      text-align: center;
    `,successDisplay:e`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;
      height: 160px;
      border: 2px solid transparent;
      border-radius: ${m.borderRadiusLG};

      background: ${m.colorBgContainer};

      transition: all ${m.motionDurationMid} ease;

      &:hover .change-overlay {
        opacity: 1;
      }

      &:hover .delete-icon {
        opacity: 1;
      }

      &.drag-over {
        transform: scale(1.02);
        border-color: ${m.colorPrimary};
        background: ${m.colorPrimaryBg};
      }
    `,uploadingDisplay:e`
      position: relative;

      overflow: hidden;

      width: 100%;
      height: 160px;
      border: 2px solid ${m.colorPrimary};
      border-radius: ${m.borderRadiusLG};

      background: ${m.colorFillSecondary};
    `,uploadingOverlay:e`
      position: absolute;
      z-index: 5;
      inset: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${m.colorBgMask};
    `})),Ce=e=>e.startsWith("blob:"),Rt=f.memo(({value:e,size:t=60,strokeWidth:n=6,showText:o=!0})=>{const r=Math.min(100,Math.max(0,e)),a=(t-n)/2,i=a*2*Math.PI,l=i-r/100*i;return s.jsxs("div",{style:{alignItems:"center",display:"flex",height:t,justifyContent:"center",position:"relative",width:t},children:[s.jsx("svg",{height:t,style:{position:"absolute",transform:"rotate(-90deg)"},width:t,children:s.jsx("circle",{cx:t/2,cy:t/2,fill:"none",r:a,stroke:m.colorBorder,strokeWidth:n})}),s.jsx("svg",{height:t,style:{position:"absolute",transform:"rotate(-90deg)"},width:t,children:s.jsx("circle",{cx:t/2,cy:t/2,fill:"none",r:a,stroke:m.colorPrimary,strokeDasharray:i,strokeDashoffset:l,strokeLinecap:"round",strokeWidth:n,style:{transition:"stroke-dashoffset 0.2s ease-in-out"}})}),o&&s.jsxs("span",{style:{color:m.colorPrimary,fontSize:"12px",fontWeight:600,position:"relative",zIndex:1},children:[Math.round(r),"%"]})]})});Rt.displayName="CircularProgress";const $t=f.memo(({isDragOver:e,onClick:t,height:n})=>{const o=Tt,{t:r}=R("components");return s.jsxs(oe,{gap:16,horizontal:!1,style:n?{height:n}:void 0,className:I(U.placeholder,o.dragTransition,e&&o.dragOver),onClick:t,children:[s.jsx(Te,{className:U.placeholderIcon,size:48,strokeWidth:1.5}),s.jsxs("div",{className:U.placeholderText,children:[r("ImageUpload.placeholder.primary"),s.jsx("br",{}),r("ImageUpload.placeholder.secondary")]})]})});$t.displayName="Placeholder";const Mt=f.memo(({previewUrl:e,progress:t})=>s.jsxs("div",{className:U.uploadingDisplay,children:[s.jsx(De,{fill:!0,unoptimized:!0,alt:"Uploading preview",src:e,style:{objectFit:"cover"}}),s.jsx("div",{className:U.uploadingOverlay,children:s.jsx(Rt,{value:t})})]}));Mt.displayName="UploadingDisplay";const Et=f.memo(({imageUrl:e,isDragOver:t,onDelete:n,onChangeImage:o})=>{const r=Tt,{t:a}=R("components"),i=c=>{c.stopPropagation(),n?.()},l=c=>{c.stopPropagation(),o?.()};return s.jsxs("div",{className:I(U.successDisplay,r.dragTransition,t&&r.dragOver),onClick:o,children:[s.jsx(De,{fill:!0,unoptimized:!0,alt:"Uploaded image",src:e,style:{objectFit:"cover"}}),s.jsx("div",{className:I(U.deleteIcon,"delete-icon"),onClick:i,children:s.jsx(ze,{size:14})}),s.jsx("div",{className:I(U.changeOverlay,"change-overlay"),onClick:l,children:s.jsx("button",{className:U.changeButton,type:"button",children:a("ImageUpload.actions.changeImage")})})]})});Et.displayName="SuccessDisplay";const mo=f.memo(({value:e,onChange:t,style:n,className:o,maxFileSize:r,imageConstraints:a,placeholderHeight:i})=>{const l=f.useRef(null),c=at(A=>A.uploadWithProgress),[d,u]=f.useState(null),{t:h}=R("components"),{message:p}=ct.useApp(),{validateFiles:g,validateDimensions:x}=po(void 0,r,a);f.useEffect(()=>()=>{d?.previewUrl&&Ce(d.previewUrl)&&URL.revokeObjectURL(d.previewUrl)},[d?.previewUrl]);const y=()=>{l.current?.click()},j=async A=>{const D=A.target.files?.[0];if(!D||!g([D])||!await x(D))return;const F=URL.createObjectURL(D);u({previewUrl:F,progress:0,status:"pending"});try{const S=await c({file:D,onStatusUpdate:$=>{$.type==="updateFile"?u(W=>{if(!W)return null;const _=$.value.status;return _?{...W,error:_==="error"?"Upload failed":void 0,progress:$.value.uploadState?.progress||0,status:_}:W}):$.type==="removeFile"&&u(null)},skipCheckFileType:!0});if(S?.url){const $=S.dimensions?{dimensions:S.dimensions,url:S.url}:S.url;t?.($)}}catch{u(S=>S?{...S,error:"Upload failed",status:"error"}:null)}finally{Ce(F)&&URL.revokeObjectURL(F),setTimeout(()=>{u(null)},1e3)}},k=()=>{t?.(void 0)},N=async A=>{A.length>1&&p.warning(h("ImageUpload.actions.dropMultipleFiles"));const D=A[0];if(!g([D])||!await x(D))return;const F=URL.createObjectURL(D);u({previewUrl:F,progress:0,status:"pending"});try{const S=await c({file:D,onStatusUpdate:$=>{$.type==="updateFile"?u(W=>{if(!W)return null;const _=$.value.status;return _?{...W,error:_==="error"?"Upload failed":void 0,progress:$.value.uploadState?.progress||0,status:_}:W}):$.type==="removeFile"&&u(null)},skipCheckFileType:!0});if(S?.url){const $=S.dimensions?{dimensions:S.dimensions,url:S.url}:S.url;t?.($)}}catch{u(S=>S?{...S,error:"Upload failed",status:"error"}:null)}finally{Ce(F)&&URL.revokeObjectURL(F),setTimeout(()=>{u(null)},1e3)}},{isDragOver:v,dragHandlers:w}=so({accept:"image/*",onDrop:N}),se=!!e,O=!!d;return s.jsxs("div",{className:o,...w,style:n,children:[s.jsx("input",{accept:"image/*",ref:l,style:{display:"none"},type:"file",onChange:j,onClick:A=>{A.currentTarget.value=""}}),O&&d?s.jsx(Mt,{previewUrl:d.previewUrl,progress:d.progress}):se?s.jsx(Et,{imageUrl:e,isDragOver:v,onChangeImage:y,onDelete:k}):s.jsx($t,{height:i,isDragOver:v,onClick:y})]})});mo.displayName="ImageUpload";const go=320,Y=X(({css:e,cssVar:t})=>({descriptionText:e`
    color: ${t.colorTextSecondary};
  `,descriptionText_dark:e`
    color: ${t.colorText};
  `,popover:e`
    .ant-popover-inner {
      background: ${t.colorBgElevated};
    }
  `,popover_dark:e`
    .ant-popover-inner {
      background: ${t.colorBgSpotlight};
    }
  `,priceText:e`
    font-weight: 500;
    color: ${t.colorTextTertiary};
    word-break: keep-all;
    white-space: nowrap;
  `,priceText_dark:e`
    font-weight: 500;
    color: ${t.colorTextLightSolid};
  `})),vo=f.memo(({approximatePricePerImage:e,approximatePricePerVideo:t,description:n,pricePerImage:o,pricePerVideo:r,providerId:a,showPopover:i=!0,showBadge:l=!0,showPrice:c=!1,priceKind:d="image",...u})=>{const h=Pe(),{t:p}=R("components"),g=_t(Gt.enableBusinessFeatures),x=f.useMemo(()=>{if(!c)return;const k=d==="video",N=k?r:o,v=k?t:e;if(g&&a===cn){if(typeof N=="number"){const w=N*He;return p(k?"GenerationModelItem.creditsPerVideoExact":"GenerationModelItem.creditsPerImageExact",{amount:le(w).format("0,0")})}if(typeof v=="number"){const w=v*He;return p(k?"GenerationModelItem.creditsPerVideoApproximate":"GenerationModelItem.creditsPerImageApproximate",{amount:le(w).format("0,0")})}}else{if(typeof N=="number")return`${le(N).format("$0,0.00[000]")} / ${k?"video":"image"}`;if(typeof v=="number")return`~ ${le(v).format("$0,0.00[000]")} / ${k?"video":"image"}`}},[c,e,t,g,o,r,d,a,p]),y=f.useMemo(()=>!n&&!x?null:s.jsxs(b,{gap:8,style:{maxWidth:go},children:[n&&s.jsx(J,{className:I(Y.descriptionText,h&&Y.descriptionText_dark),children:n}),x&&s.jsx(J,{className:I(Y.priceText,h&&Y.priceText_dark),children:x})]}),[n,x,h]),j=s.jsxs(b,{horizontal:!0,align:"center",gap:8,style:{overflow:"hidden"},children:[s.jsx(mn,{model:u.id,size:20}),s.jsx(J,{ellipsis:!0,title:u.displayName||u.id,children:u.displayName||u.id}),l&&s.jsx(pn,{releasedAt:u.releasedAt})]});return!i||!y?j:s.jsx(Ht,{classNames:{root:I(Y.popover,h&&Y.popover_dark)},content:y,placement:"rightTop",children:j})});vo.displayName="GenerationModelItem";const cr=f.memo(()=>{const{t:e}=R("image"),{value:t,setValue:n,enumValues:o}=te("quality"),r=o?.map(a=>({label:e(a==="standard"?"config.quality.options.standard":"config.quality.options.hd"),value:a}))??[];return s.jsx(dt,{options:r,style:{width:"100%"},value:t,onChange:n})}),dr=f.memo(()=>{const{t:e}=R("image"),{value:t,setValue:n,enumValues:o}=te("resolution"),r=f.useCallback(i=>{n(String(i))},[n]),a=f.useMemo(()=>!o||o.length===0?[]:o.map(i=>({label:e(`config.resolution.options.${i}`,{defaultValue:i}),value:i})),[o,e]);return a.length===0?null:s.jsx(mt,{block:!0,options:a,style:{width:"100%"},value:t,variant:"filled",onChange:r})}),xo=f.memo(({value:e,onChange:t,style:n,className:o,...r})=>{const{t:a}=R("image"),i=f.useCallback(()=>{const l=Xn(1)[0];t?.(l)},[t]);return s.jsxs(b,{horizontal:!0,className:o,gap:4,style:n,children:[s.jsx(lt,{max:ht,min:0,placeholder:a("config.seed.random"),step:1,style:{width:"100%"},value:e,onChange:t,...r}),s.jsx(Vt,{title:a("config.seed.random"),children:s.jsx(it,{icon:ft,style:{flex:"none",width:48},variant:"outlined",onClick:i})})]})}),ur=f.memo(()=>{const{t:e}=R("image"),{value:t,setValue:n}=te("seed");return s.jsx(xo,{placeholder:e("config.seed.random"),value:t,onChange:n})}),yo=e=>{if(e==="auto")return!0;const t=e.split("x");if(t.length!==2)return!1;const[n,o]=t.map(Number);return!isNaN(n)&&!isNaN(o)&&n>0&&o>0},bo=f.memo(({options:e,onChange:t,value:n,defaultValue:o,...r})=>{const a=Pe(),[i,l]=st("auto",{defaultValue:o,onChange:t,value:n});return e?.some(d=>!yo(d.value))?s.jsx(dt,{options:e,style:{width:"100%"},value:i,onChange:t}):s.jsx(Z,{padding:4,variant:"filled",...r,children:s.jsx(pt,{gap:4,maxItemWidth:72,rows:16,children:e?.map(d=>{const u=i===d.value;let h;if(d.value==="auto")h=s.jsx("div",{style:{border:`2px dashed ${u?m.colorText:m.colorTextDescription}`,borderRadius:3,height:16,width:16}});else{const[p,g]=d.value.split("x").map(Number),x=p>g;h=s.jsx("div",{style:{aspectRatio:`${p} / ${g}`,border:`2px solid ${u?m.colorText:m.colorTextDescription}`,borderRadius:3,height:x?void 0:16,width:x?16:void 0}})}return s.jsxs(Z,{clickable:!0,align:"center",gap:4,justify:"center",padding:8,shadow:u&&!a,variant:"filled",style:{backgroundColor:u?m.colorBgElevated:"transparent"},onClick:()=>{l(d.value),t?.(d.value)},children:[s.jsx(oe,{height:16,style:{marginTop:4},width:16,children:h}),s.jsx(J,{fontSize:12,type:u?void 0:"secondary",children:d.label||d.value})]},d.value)})})})}),fr=f.memo(()=>{const{value:e,setValue:t,enumValues:n}=te("size"),o=n.map(r=>({label:r,value:r}));return s.jsx(bo,{options:o,value:e,onChange:t})}),hr=f.memo(()=>{const{value:e,setValue:t,min:n,max:o}=te("steps");return s.jsx(me,{max:o,min:n,value:e,onChange:t})}),wo=f.memo(({mode:e})=>{const{t}=R("common");return s.jsxs(b,{horizontal:!0,align:"center",justify:"center",style:{fontSize:28,fontWeight:"bold",marginBottom:24},width:"100%",children:[t("generation.hero.taglinePrefix"),s.jsx(Nt,{layout:"hero",mode:e})]})});wo.displayName="PromptTitle";const So=({embedInput:e=!0,useStore:t,selectors:n,PromptInput:o,GenerationFeed:r,SkeletonList:a,EmptyStateComponent:i})=>{const l=t(n.activeGenerationTopicId),c=t(p=>p.useFetchGenerationBatches),d=t(n.isCurrentGenerationTopicLoaded);c(l);const u=t(n.currentGenerationBatches),h=u&&u.length>0;return d?h?s.jsxs(s.Fragment,{children:[s.jsx(r,{},l),e&&s.jsx(o,{disableAnimation:!0,showTitle:!1})]}):s.jsx(i,{PromptInput:o,embedInput:e}):s.jsx(a,{embedInput:e})},Ie=f.memo(({embedInput:e=!0,PromptInput:t})=>e?s.jsx(oe,{height:"calc(100vh - 180px)",children:s.jsx(t,{showTitle:!0})}):s.jsx(oe,{flex:1}));Ie.displayName="GenerationWorkspaceEmptyState";const pr=({embedInput:e=!0,useStore:t,selectors:n,PromptInput:o,GenerationFeed:r,SkeletonList:a})=>{const[i]=ut("topic"),l=t(c=>c.isCreatingWithNewTopic);return!i||l?s.jsx(Ie,{PromptInput:o,embedInput:e}):s.jsx(So,{EmptyStateComponent:Ie,GenerationFeed:r,PromptInput:o,SkeletonList:a,embedInput:e,selectors:n,useStore:t})},Ae=new Set,C=new WeakMap,K=new WeakMap,M=new WeakMap,re=new WeakMap,ke=new WeakMap,ne=new WeakMap,V=new WeakMap,L=new WeakMap,Q=new WeakSet;let T,Be=0,Le=0;const B="__aa_tgt",ie="__aa_del",ge="__aa_new",It=e=>{const t=No(e);t&&t.forEach(n=>To(n))},jo=e=>{e.forEach(t=>{t.target===T&&Co(),C.has(t.target)&&q(t.target)})};function At(e){const t=e.getBoundingClientRect(),n=T?.clientWidth||0,o=T?.clientHeight||0;return t.bottom<0||t.top>o||t.right<0||t.left>n}function Oe(e){const t=re.get(e);t?.disconnect();let n=C.get(e),o=0;const r=5;n||(n=ee(e),C.set(e,n));const{offsetWidth:a,offsetHeight:i}=T,c=[n.top-r,a-(n.left+r+n.width),i-(n.top+r+n.height),n.left-r].map(u=>`${-1*Math.floor(u)}px`).join(" "),d=new IntersectionObserver(()=>{++o>1&&q(e)},{root:T,threshold:1,rootMargin:c});d.observe(e),re.set(e,d)}function q(e,t=!0){clearTimeout(L.get(e));const n=ve(e),o=t?ae(n)?500:n.duration:0;L.set(e,setTimeout(async()=>{const r=M.get(e);try{await r?.finished,C.set(e,ee(e)),Oe(e)}catch{}},o))}function Co(){clearTimeout(L.get(T)),L.set(T,setTimeout(()=>{Ae.forEach(e=>he(e,t=>Dt(()=>q(t))))},100))}function ko(e){setTimeout(()=>{ne.set(e,setInterval(()=>Dt(q.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Dt(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let z;const Pt=typeof window<"u"&&"ResizeObserver"in window;Pt&&(T=document.documentElement,new MutationObserver(It),z=new ResizeObserver(jo),window.addEventListener("scroll",()=>{Le=window.scrollY,Be=window.scrollX}),z.observe(T));function No(e){return e.reduce((o,r)=>[...o,...Array.from(r.addedNodes),...Array.from(r.removedNodes)],[]).every(o=>o.nodeName==="#comment")?!1:e.reduce((o,r)=>{if(o===!1)return!1;if(r.target instanceof Element){if(Ne(r.target),!o.has(r.target)){o.add(r.target);for(let a=0;a<r.target.children.length;a++){const i=r.target.children.item(a);if(i){if(ie in i)return!1;Ne(r.target,i),o.add(i)}}}if(r.removedNodes.length)for(let a=0;a<r.removedNodes.length;a++){const i=r.removedNodes[a];if(ie in i)return!1;i instanceof Element&&(o.add(i),Ne(r.target,i),K.set(i,[r.previousSibling,r.nextSibling]))}}return o},new Set)}function Ne(e,t){!t&&!(B in e)?Object.defineProperty(e,B,{value:e}):t&&!(B in t)&&Object.defineProperty(t,B,{value:e})}function To(e){var t,n;const o=e.isConnected,r=C.has(e);o&&K.has(e)&&K.delete(e),((t=M.get(e))===null||t===void 0?void 0:t.playState)!=="finished"&&((n=M.get(e))===null||n===void 0||n.cancel()),ge in e?tt(e):r&&o?$o(e):r&&!o?Mo(e):tt(e)}function P(e){return Number(e.replace(/[^0-9.\-]/g,""))}function Ro(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function ee(e){const t=e.getBoundingClientRect(),{x:n,y:o}=Ro(e);return{top:t.top+o,left:t.left+n,width:t.width,height:t.height}}function zt(e,t,n){let o=t.width,r=t.height,a=n.width,i=n.height;const l=getComputedStyle(e);if(l.getPropertyValue("box-sizing")==="content-box"){const d=P(l.paddingTop)+P(l.paddingBottom)+P(l.borderTopWidth)+P(l.borderBottomWidth),u=P(l.paddingLeft)+P(l.paddingRight)+P(l.borderRightWidth)+P(l.borderLeftWidth);o-=u,a-=u,r-=d,i-=d}return[o,a,r,i].map(Math.round)}function ve(e){return B in e&&V.has(e[B])?V.get(e[B]):{duration:250,easing:"ease-in-out"}}function Ut(e){if(B in e)return e[B]}function Fe(e){const t=Ut(e);return t?Q.has(t):!1}function he(e,...t){t.forEach(n=>n(e,V.has(e)));for(let n=0;n<e.children.length;n++){const o=e.children.item(n);o&&t.forEach(r=>r(o,V.has(o)))}}function We(e){return Array.isArray(e)?e:[e]}function ae(e){return typeof e=="function"}function $o(e){const t=C.get(e),n=ee(e);if(!Fe(e))return C.set(e,n);if(At(e)){C.set(e,n),Oe(e);return}let o;if(!t)return;const r=ve(e);if(typeof r!="function"){let a=t.left-n.left,i=t.top-n.top;const l=t.left+t.width-(n.left+n.width);t.top+t.height-(n.top+n.height)==0&&(i=0),l==0&&(a=0);const[d,u,h,p]=zt(e,t,n),g={transform:`translate(${a}px, ${i}px)`},x={transform:"translate(0, 0)"};d!==u&&(g.width=`${d}px`,x.width=`${u}px`),h!==p&&(g.height=`${h}px`,x.height=`${p}px`),o=e.animate([g,x],{duration:r.duration,easing:r.easing})}else{const[a]=We(r(e,"remain",t,n));o=new Animation(a),o.play()}M.set(e,o),C.set(e,n),o.addEventListener("finish",q.bind(null,e,!1),{once:!0})}function tt(e){ge in e&&delete e[ge];const t=ee(e);C.set(e,t);const n=ve(e);if(!Fe(e))return;if(At(e)){Oe(e);return}let o;if(typeof n!="function")o=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[r]=We(n(e,"add",t));o=new Animation(r),o.play()}M.set(e,o),o.addEventListener("finish",q.bind(null,e,!1),{once:!0})}function nt(e,t){var n;e.remove(),C.delete(e),K.delete(e),M.delete(e),(n=re.get(e))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(ie in e&&delete e[ie],Object.defineProperty(e,ge,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const o in t)e.style[o]=""},0)}function Mo(e){var t;if(!K.has(e)||!C.has(e))return;const[n,o]=K.get(e);Object.defineProperty(e,ie,{value:!0,configurable:!0});const r=window.scrollX,a=window.scrollY;if(o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(e,o):n&&n.parentNode?n.parentNode.appendChild(e):(t=Ut(e))===null||t===void 0||t.appendChild(e),!Fe(e))return nt(e);const[i,l,c,d]=Io(e),u=ve(e),h=C.get(e);(r!==Be||a!==Le)&&Eo(e,r,a,u);let p,g={position:"absolute",top:`${i}px`,left:`${l}px`,width:`${c}px`,height:`${d}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!ae(u))Object.assign(e.style,g),p=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"});else{const[x,y]=We(u(e,"remove",h));y?.styleReset!==!1&&(g=y?.styleReset||g,Object.assign(e.style,g)),p=new Animation(x),p.play()}M.set(e,p),p.addEventListener("finish",()=>nt(e,g),{once:!0})}function Eo(e,t,n,o){const r=Be-t,a=Le-n,i=document.documentElement.style.scrollBehavior;if(getComputedStyle(T).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+r,window.scrollY+a),!e.parentElement)return;const c=e.parentElement;let d=c.clientHeight,u=c.clientWidth;const h=performance.now();function p(){requestAnimationFrame(()=>{if(!ae(o)){const g=d-c.clientHeight,x=u-c.clientWidth;h+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-x,top:window.scrollY-g}),d=c.clientHeight,u=c.clientWidth,p()):document.documentElement.style.scrollBehavior=i}})}p()}function Io(e){var t;const n=C.get(e),[o,,r]=zt(e,n,ee(e));let a=e.parentElement;for(;a&&(getComputedStyle(a).position==="static"||a instanceof HTMLBodyElement);)a=a.parentElement;a||(a=document.body);const i=getComputedStyle(a),l=!M.has(e)||((t=M.get(e))===null||t===void 0?void 0:t.playState)==="finished"?ee(a):C.get(a),c=Math.round(n.top-l.top)-P(i.borderTopWidth),d=Math.round(n.left-l.left)-P(i.borderLeftWidth);return[c,d,o,r]}function Ao(e,t={}){if(Pt&&z&&!(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!ae(t)&&!t.disrespectUserMotionPreference)){Q.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),he(e,q,ko,i=>z?.observe(i)),ae(t)?V.set(e,t):V.set(e,{duration:250,easing:"ease-in-out",...t});const a=new MutationObserver(It);a.observe(e,{childList:!0}),ke.set(e,a),Ae.add(e)}return Object.freeze({parent:e,enable:()=>{Q.add(e)},disable:()=>{Q.delete(e),he(e,o=>{const r=M.get(o);try{r?.cancel()}catch{}M.delete(o);const a=L.get(o);a&&clearTimeout(a),L.delete(o);const i=ne.get(o);i&&clearInterval(i),ne.delete(o)})},isEnabled:()=>Q.has(e),destroy:()=>{Q.delete(e),Ae.delete(e),V.delete(e);const o=ke.get(e);o?.disconnect(),ke.delete(e),he(e,r=>{z?.unobserve(r);const a=M.get(r);try{a?.cancel()}catch{}M.delete(r);const i=re.get(r);i?.disconnect(),re.delete(r);const l=ne.get(r);l&&clearInterval(l),ne.delete(r);const c=L.get(r);c&&clearTimeout(c),L.delete(r),C.delete(r),K.delete(r)})}})}function Do(e){const[t,n]=f.useState(),o=f.useMemo(()=>e,[]),r=f.useCallback(i=>{i instanceof HTMLElement?n(Ao(i,o)):n(void 0)},[o]),a=f.useCallback(i=>{t&&(i?t.enable():t.disable())},[t]);return f.useEffect(()=>()=>{var i;(i=t?.destroy)===null||i===void 0||i.call(t)},[t]),[r,a]}const Po=f.memo(({batches:e,renderBatchItem:t})=>{const[n,o]=Do(),r=f.useRef(null),a=f.useRef(!0),i=f.useRef(0),l=(c="smooth")=>{if(!r.current)return;const d=r.current.closest('[style*="overflow"]')||document.documentElement,u=r.current.getBoundingClientRect(),h=d.getBoundingClientRect(),p=d.scrollTop+u.bottom-h.bottom+999;d.scrollTo({behavior:c,top:p})};return f.useEffect(()=>{const c=e.length,d=i.current;if(c===0){i.current=0;return}if(a.current)l("auto"),a.current=!1;else if(c>d){o(!1);const u=setTimeout(()=>{l("smooth"),o(!0)},50);return()=>clearTimeout(u)}i.current=c},[e,o]),!e||e.length===0?null:s.jsxs(b,{flex:1,children:[s.jsx(b,{gap:16,ref:n,style:{paddingBottom:48},width:"100%",children:e.map((c,d)=>s.jsxs(f.Fragment,{children:[d!==0&&s.jsx(Kt,{dashed:!0,style:{margin:0}}),t(c)]},c.id))}),s.jsx("div",{ref:r,style:{height:1}})]})});Po.displayName="GenerationFeed";const zo=Xt`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Uo=X(({css:e,cssVar:t})=>({generationActionButton:I("generation-actions",e`
      position: absolute;
      z-index: 10;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      opacity: 0;

      transition: opacity 0.1s ${t.motionEaseInOut};
    `),imageContainer:e`
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover .generation-actions {
      opacity: 1;
    }
  `,placeholderContainer:e`
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover .generation-actions {
      opacity: 1;
    }
  `,placeholderContainerLoading:e`
    &::before {
      content: '';

      position: absolute;
      z-index: 1;
      inset: 0;

      background: ${t.colorFillSecondary};

      animation: ${zo} 2s linear infinite;
    }
  `,spinIcon:e`
    color: ${t.colorPrimary};
  `})),Bo={tooltipProps:{placement:"left"}},Lo=f.memo(({onDelete:e,onDownload:t,onCopySeed:n,showDownload:o=!1,showCopySeed:r=!1,seedTooltip:a})=>{const{t:i}=R("image");return s.jsx(qt,{actionIconProps:Bo,className:Uo.generationActionButton,horizontal:!1,variant:"outlined",items:f.useMemo(()=>[!!(o&&t)&&{icon:on,key:"download",label:i("generation.actions.download"),onClick:t},!!(r&&n)&&{icon:ft,key:"copySeed",label:a,onClick:n},{danger:!0,icon:rn,key:"delete",label:i("generation.actions.delete"),onClick:e}].filter(Boolean),[o,t,r,n,a,e])})});Lo.displayName="ActionButtons";const ot=e=>`generation_start_time_${e}`;function mr({generationId:e,isActive:t}){const[n,o]=f.useState(null),r=f.useRef(null),a=f.useRef(0);f.useEffect(()=>{if(!t){r.current&&(cancelAnimationFrame(r.current),r.current=null);const u=ot(e);sessionStorage.removeItem(u),o(null);return}const l=ot(e),c=(()=>{const u=sessionStorage.getItem(l);if(u)return Number(u);const h=Date.now();return sessionStorage.setItem(l,h.toString()),h})(),d=u=>{if(u-a.current>=100){const h=(Date.now()-c)/100;o(Math.max(0,h)),a.current=u}r.current=requestAnimationFrame(d)};return r.current=requestAnimationFrame(d),()=>{r.current&&cancelAnimationFrame(r.current)}},[e,t]);const i=(()=>{if(n===null)return"";const l=n/10;return l<60?`${l.toFixed(1)}s`:`${(l/60).toFixed(1)}min`})();return s.jsx(J,{code:!0,fontSize:10,type:"secondary",children:i})}export{no as A,Yn as C,ro as D,mr as E,vo as G,ao as I,wo as P,cr as Q,dr as R,bo as S,eo as U,de as a,Zn as b,Nt as c,Lo as d,Qn as e,Po as f,Xn as g,pr as h,qn as i,te as j,oo as k,fr as l,hr as m,lr as n,ur as o,Uo as s,Do as u};
