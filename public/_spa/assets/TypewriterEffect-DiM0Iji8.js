import{j as ce,cw as le,m as ue}from"./index-C275yc7e.js";import{r as t}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as f}from"../vendor/vendor-motion-siEo8VfX.js";const a=ce(({css:r,cssVar:o})=>({container:r`
    display: inline-block;
    white-space: pre-wrap;
  `,cursor:r`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 3px;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${o.colorPrimary};
  `,cursorBlock:r`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 0.5em;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${o.colorPrimary};
  `,cursorCustom:r`
    display: inline-block;
    align-items: center;
    margin-inline-start: 0.25rem;
    opacity: 1;
  `,cursorDot:r`
    display: inline-block;
    align-items: center;

    width: 0.75em;
    height: 0.75em;
    margin-inline-start: 0.25rem;
    border-radius: 50%;

    opacity: 1;
    background-color: ${o.colorPrimary};
  `,cursorHidden:r`
    display: none;
  `,cursorUnderscore:r`
    transform: translateY(0.3em);

    display: inline-block;
    align-items: center;

    width: 0.6em;
    height: 0.15em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${o.colorPrimary};
  `,text:r`
    color: ${o.colorText};
  `})),me=t.memo(({sentences:r,as:o="div",typingSpeed:d=100,initialDelay:P=0,pauseDuration:S=2e3,deletingSpeed:v=50,deletePauseDuration:h=0,loop:T=!0,className:K="",color:R,showCursor:Q=!0,hideCursorWhileTyping:b=!1,cursorCharacter:I,cursorClassName:Y="",cursorColor:X,cursorBlinkDuration:Z=.8,cursorFade:W=!0,cursorStyle:V="pipe",textColors:k=[],variableSpeed:g,onSentenceComplete:w,startOnVisible:C=!1,reverseMode:B=!1,segmentMode:j="grapheme",...ee})=>{const D=le(),A=ue,[y,F]=t.useState(""),[c,H]=t.useState(0),[l,O]=t.useState(!1),[i,te]=t.useState(0),[U,re]=t.useState(!C),[L,M]=t.useState(!1),E=t.useRef(null),s=t.useMemo(()=>Array.isArray(r)?r:[r],[r]),u=t.useCallback(e=>{if(typeof Intl<"u"&&"Segmenter"in Intl){const n=new Intl.Segmenter(void 0,{granularity:j});return Array.from(n.segment(e),p=>p.segment)}return j==="word"?e.split(/(\s+)/).filter(Boolean):Array.from(e)},[j]),_=t.useCallback(()=>{if(!g)return d;const{min:e,max:n}=g;return Math.random()*(n-e)+e},[g,d]),ne=()=>k.length>0?k[i%k.length]:R,ie=()=>X||R;t.useEffect(()=>{if(!C||!E.current)return;const e=new IntersectionObserver(n=>{n.forEach(p=>{p.isIntersecting&&re(!0)})},{threshold:.1});return e.observe(E.current),()=>e.disconnect()},[C]),t.useEffect(()=>{if(!U)return;let e;const n=s[i],p=u(n),ae=B?p.reverse().join(""):n;if(L)return e=setTimeout(()=>{M(!1)},h),()=>clearTimeout(e);const J=()=>{if(l)if(y===""){if(O(!1),i===s.length-1&&!T)return;if(w&&w(s[i],i),te(m=>(m+1)%s.length),H(0),h>0){M(!0);return}}else e=setTimeout(()=>{F(m=>u(m).slice(0,-1).join(""))},v);else{const m=u(ae);if(c<m.length)e=setTimeout(()=>{F($=>$+m[c]),H($=>$+1)},g?_():d);else if(s.length>=1){if(!T&&i===s.length-1)return;e=setTimeout(()=>{O(!0)},S)}}};return c===0&&!l&&y===""?e=setTimeout(J,P):J(),()=>clearTimeout(e)},[c,y,l,L,d,v,h,S,s,i,T,P,U,B,g,w,_,u]);const q=()=>{if(I)return a.cursorCustom;switch(V){case"block":return a.cursorBlock;case"dot":return a.cursorDot;case"underscore":return a.cursorUnderscore;case"pipe":return a.cursor}},z=u(s[i]).length,se=c<z&&!l,x=b===!0?!0:b==="typing"?se||l:b==="afterTyping"?c===z&&!l:!1,G=ne(),N=ie(),oe=u(y);return t.createElement(o,{className:A(a.container,K),ref:E,...ee},f.jsxs(f.Fragment,{children:[f.jsx("span",{className:a.text,style:G?{color:G}:void 0,children:oe.map((e,n)=>f.jsx(D.span,{animate:{opacity:1},initial:{opacity:0},style:{display:"inline-block"},transition:{duration:d/500,ease:"easeInOut"},children:e===" "?" ":e},`${i}-${n}`))}),Q&&(W?f.jsx(D.span,{animate:{opacity:x?0:1},className:A(q(),Y),initial:{opacity:0},style:N?{backgroundColor:N}:void 0,transition:{duration:x?.2:Z,ease:"easeInOut",repeat:x?0:Number.POSITIVE_INFINITY,repeatType:"reverse"},children:I}):f.jsx("span",{className:A(q(),Y),style:{backgroundColor:N,opacity:x?0:1},children:I}))]}))});me.displayName="TypewriterEffect";export{me as T};
