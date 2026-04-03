import{r as t}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as e,L as ae,A as ce}from"../vendor/vendor-motion-DRC1LdIk.js";import{j as se,as as J,bU as le,m,a8 as de,F as N,cO as ue,n as xe,ct as fe}from"./index-BmW5CTHd.js";const Q=t.createContext(null),he=()=>t.use(Q),s=se(({css:n,cssVar:o})=>({action:n`
      opacity: 0;
      transition: opacity 150ms ${o.motionEaseOut};
    `,actionVisible:n`
      opacity: 1;
    `,base:n`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:n`
      overflow: hidden;
    `,contentInner:n`
      /* Content wrapper for animation */
    `,divider:n`
      margin-block: 0;
    `,header:n`
      &:hover .accordion-action {
        opacity: 1;
      }

      &:focus-visible {
        border-radius: ${o.borderRadiusLG};
        outline: 2px solid ${o.colorPrimary};
        outline-offset: 2px;
      }
    `,icon:n`
      transition: transform 200ms ${o.motionEaseOut};
    `,iconRotate:n`
      transform: rotate(90deg);
    `,indicator:n`
      display: flex;
      flex-shrink: 0;
      align-items: center;

      font-size: 18px;
      color: ${o.colorTextDescription};

      transition: transform 200ms ${o.motionEaseOut};
    `,item:n`
      position: relative;
      display: flex;
      flex-direction: column;
    `,titleWrapper:n`
      user-select: none;
    `})),me=t.memo(({children:n,className:o,style:x,accordion:l=!1,defaultExpandedKeys:f,expandedKeys:i,onExpandedChange:r,variant:v="borderless",gap:j,showDivider:p=!1,disableAnimation:a=!1,hideIndicator:K=!1,indicatorPlacement:P="start",keepContentMounted:F=!0,classNames:R,styles:A,motionProps:d,ref:M,...T})=>{const C=t.Children.toArray(n).filter(t.isValidElement),$=C.map((c,h)=>c.props.itemKey||h),[u,b]=J(f??$,{onChange:r,value:i}),k=t.useCallback(c=>{const h=u;let y;l?y=h.includes(c)?[]:[c]:y=h.includes(c)?h.filter(O=>O!==c):[...h,c],b(y)},[l,u,b]),z={disableAnimation:a,expandedKeys:u,hideIndicator:K,indicatorPlacement:P,isExpanded:t.useCallback(c=>u.includes(c),[u]),keepContentMounted:F,motionProps:d,onToggle:k,showDivider:p,variant:v},w=e.jsx(e.Fragment,{children:C.map((c,h)=>{const y=c.props.itemKey||h;return e.jsxs(t.Fragment,{children:[c,p&&h<C.length-1&&e.jsx(le,{className:s.divider})]},y)})});return e.jsx(Q,{value:z,children:e.jsx("div",{className:m(s.base,R?.base,o),ref:M,style:{gap:j,...A?.base,...x},...T,children:a?w:e.jsx(ae,{children:w})})})});me.displayName="Accordion";const pe=t.memo(({size:n="1em",style:o,...x})=>e.jsx("svg",{fill:"currentColor",fillRule:"evenodd",height:n,style:{flex:"none",lineHeight:1,...o},viewBox:"0 0 16 16",width:n,xmlns:"http://www.w3.org/2000/svg",...x,children:e.jsx("path",{d:"M7.002 10.624a.5.5 0 01-.752-.432V5.808a.5.5 0 01.752-.432l3.758 2.192a.5.5 0 010 .864l-3.758 2.192z"})})),ge={overflow:"hidden"},X=t.memo(({className:n,style:o,children:x,contentInnerClassName:l,isOpen:f,keepContentMounted:i})=>i?e.jsx("div",{className:n,role:"region",style:{display:f?"block":"none",...o},children:e.jsx("div",{className:l,children:x})}):f?e.jsx("div",{className:n,role:"region",style:o,children:e.jsx("div",{className:l,children:x})}):null);X.displayName="AccordionStaticContent";const Y=t.memo(({contextMotionProps:n,className:o,style:x,children:l,contentInnerClassName:f,isOpen:i,skipInitialAnimation:r})=>{const v=fe(),j=t.useMemo(()=>({animate:"enter",exit:"exit",initial:r?!1:"exit",variants:{enter:{height:"auto",opacity:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{height:0,opacity:0,transition:{duration:.2,ease:[.4,0,.2,1]}}},...n}),[n,r]);return e.jsx(ce,{initial:!1,children:i?e.jsx(v.div,{...j,style:ge,children:e.jsx("div",{className:o,role:"region",style:x,children:e.jsx("div",{className:f,children:l})})}):null})});Y.displayName="AccordionMotionContent";const Z=t.memo(({disableAnimation:n,isOpen:o,keepContentMounted:x,className:l,style:f,children:i,contentInnerClassName:r,contextMotionProps:v,skipInitialAnimation:j})=>n||!x?e.jsx(X,{className:l,contentInnerClassName:r,isOpen:o,keepContentMounted:x,style:f,children:i}):e.jsx(Y,{className:l,contentInnerClassName:r,contextMotionProps:v,isOpen:o,skipInitialAnimation:j,style:f,children:i}));Z.displayName="AccordionItemContent";const ve=t.memo(({itemKey:n,title:o,children:x,action:l,alwaysShowAction:f=!1,disabled:i=!1,allowExpand:r=!0,hideIndicator:v,indicatorPlacement:j,indicator:p,classNames:a,paddingInline:K=16,paddingBlock:P=8,padding:F,ref:R,variant:A,styles:d,headerWrapper:M,defaultExpand:T,expand:C,onExpandChange:$})=>{const u=he(),b=C!==void 0||T!==void 0,[k,z]=J(T??!1,{onChange:$,value:C}),w=u?.isExpanded,c=u?.onToggle,h=u?.hideIndicator,y=u?.indicatorPlacement,O=u?.keepContentMounted,V=u?.disableAnimation,S=u?.motionProps,ee=u?.variant??"borderless",H=t.useRef(!0);t.useEffect(()=>{H.current=!1},[]);const D=b?k:w?w(n):!1,U=v??h??!1,W=j??y??"start",ne=O??!0,te=V??!1,_=A||ee,E=t.useCallback(()=>{r&&(i||(b?z(!k):c&&c(n)))},[r,i,b,z,k,c,n]),q=t.useCallback(g=>{if(!(!r||i))switch(g.key){case"Enter":case" ":g.preventDefault(),E();break}},[r,i,E]),I=t.useCallback(g=>{g?.detail>1&&g.preventDefault()},[]),L=t.useMemo(()=>!r||U?null:p?typeof p=="function"?e.jsx("span",{"aria-hidden":"true",className:m(s.indicator,a?.indicator),style:d?.indicator,children:p({isDisabled:i,isOpen:D})}):e.jsx("span",{"aria-hidden":"true",className:m(s.indicator,a?.indicator),style:d?.indicator,children:p}):e.jsx("span",{"aria-hidden":"true",className:m(s.indicator,a?.indicator),style:d?.indicator,children:e.jsx(pe,{className:m(s.icon,D&&s.iconRotate)})}),[r,U,p,i,D,a,d]),oe=H.current&&D,ie=t.useMemo(()=>m("accordion-content",s.content,a?.content),[a?.content]),B=t.useMemo(()=>typeof o=="string"?e.jsx(de,{ellipsis:!0,className:a?.title,style:d?.title,children:o}):o,[o,a?.title,d?.title]),G=t.useMemo(()=>l&&e.jsx(N,{horizontal:!0,align:"center",flex:"none",gap:4,style:d?.action,className:m("accordion-action",s.action,f&&s.actionVisible,a?.action),onClick:ue,children:l}),[l,f,m,s,a?.action,d?.action]),re=t.useMemo(()=>{const g=e.jsx(xe,{horizontal:!0,className:m("accordion-header",s.header,a?.header),clickable:!i&&r,gap:4,justify:"space-between",padding:F,paddingBlock:P,paddingInline:K,ref:R,variant:A||_,style:{alignItems:"center",cursor:i?"not-allowed":r?"pointer":"default",opacity:i?.5:void 0,overflow:"hidden",width:"100%",...d?.header},onClick:E,onKeyDown:q,children:W==="start"?e.jsxs(e.Fragment,{children:[e.jsxs(N,{horizontal:!0,align:"center",className:s.titleWrapper,flex:1,gap:2,style:{overflow:"hidden"},onDoubleClick:I,onMouseDown:I,children:[B,L]}),e.jsx(N,{horizontal:!0,align:"center",flex:"none",gap:4,children:G})]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{horizontal:!0,align:"center",className:s.titleWrapper,flex:1,gap:2,style:{overflow:"hidden"},onDoubleClick:I,onMouseDown:I,children:B}),e.jsxs(N,{horizontal:!0,align:"center",flex:"none",gap:4,children:[G,L]})]})});return M?M(g):g},[a?.header,i,r,F,P,K,R,A,_,d?.header,E,q,W,I,B,L,G,M]);return e.jsxs("div",{className:m("accordion-item",s.item,a?.base),style:d?.base,children:[re,e.jsx(Z,{className:ie,contentInnerClassName:s.contentInner,contextMotionProps:S,disableAnimation:!!te,isOpen:D,keepContentMounted:!!ne,skipInitialAnimation:oe,style:d?.content,children:x})]})});ve.displayName="AccordionItem";export{me as A,ve as a};
