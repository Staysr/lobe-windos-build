import{j as s}from"../vendor/vendor-motion-siEo8VfX.js";import{k as D,i as z,F as u,W as B,B as F,I as L,j as N}from"./index-C275yc7e.js";import{r as g}from"../vendor/vendor-emotion-B6qZrIr4.js";import{F as b}from"./FormInput-U3ItroyC.js";import{aH as $,aZ as A}from"../vendor/vendor-icons-CwKawJ1k.js";const o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));function P(e,t=0){return(o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]).toLowerCase()}let f;const H=new Uint8Array(16);function O(){if(!f){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");f=crypto.getRandomValues.bind(crypto)}return f(H)}const _=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),k={randomUUID:_};function q(e,t,l){e=e||{};const r=e.random??e.rng?.()??O();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,P(r)}function w(e,t,l){return k.randomUUID&&!e?k.randomUUID():q(e)}const E=(e={})=>Object.entries(e||{}).map(([t,l])=>({id:w(),key:t,value:typeof l=="string"?l:""})),G=(e=[])=>{const t={},l=new Set;return(e||[]).slice().reverse().forEach(r=>{const d=r.key.trim();d&&!l.has(d)&&(t[d]=typeof r.value=="string"?r.value:"",l.add(d))}),Object.keys(t).reverse().reduce((r,d)=>(r[d]=t[d],r),{})},m=N(({css:e,cssVar:t})=>({container:e`
    position: relative;

    width: 100%;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};
  `,input:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,row:e`
    margin-block-end: 8px;

    &:last-child {
      margin-block-end: 0;
    }
  `,title:e`
    margin-block-end: 8px;
    color: ${t.colorTextTertiary};
  `})),Y=g.memo(({value:e,onChange:t,keyPlaceholder:l,valuePlaceholder:r,addButtonText:d,duplicateKeyErrorText:K,deleteTooltip:I,style:R})=>{const{t:p}=D("components"),[y,v]=g.useState(()=>E(e)),j=g.useRef(void 0);g.useEffect(()=>{const n=e||{};z(n,j.current)||(v(E(n)),j.current=n)},[e]);const h=n=>{n.forEach(i=>{i.key.trim()}),v(n.map(i=>({...i}))),t?.(G(n))},S=()=>{const n=[...y,{id:w(),key:"",value:""}];h(n)},U=n=>{const i=y.filter(a=>a.id!==n);h(i)},V=(n,i)=>{const a=y.map(c=>c.id===n?{...c,key:i}:c);h(a)},T=(n,i)=>{const a=y.map(c=>c.id===n?{...c,value:i}:c);h(a)},C=(n=>{const i=new Set,a=new Set;return n.forEach(c=>{const x=c.key.trim();x&&(i.has(x)?a.add(x):i.add(x))}),a})(y);return s.jsxs("div",{className:m.container,style:R,children:[s.jsxs(u,{horizontal:!0,className:m.title,gap:8,children:[s.jsx(u,{flex:1,children:l||p("KeyValueEditor.keyPlaceholder")}),s.jsx(u,{flex:2,children:r||p("KeyValueEditor.valuePlaceholder")}),s.jsx(u,{style:{width:30}})]}),s.jsxs(u,{width:"100%",children:[y.map(n=>{const i=n.key.trim()&&C.has(n.key.trim());return s.jsxs(u,{horizontal:!0,align:"flex-start",className:m.row,gap:8,width:"100%",children:[s.jsxs(u,{flex:1,style:{position:"relative"},children:[s.jsx(b,{className:m.input,placeholder:l||p("KeyValueEditor.keyPlaceholder"),status:i?"error":void 0,value:n.key,variant:"filled",onChange:a=>V(n.id,a)}),i&&s.jsx("div",{style:{bottom:"-16px",color:"red",fontSize:"12px",position:"absolute"},children:K||p("KeyValueEditor.duplicateKeyError")})]}),s.jsx(u,{flex:2,children:s.jsx(b,{className:m.input,placeholder:r||p("KeyValueEditor.valuePlaceholder"),value:n.value,variant:"filled",onChange:a=>T(n.id,a)})}),s.jsx(B,{icon:$,size:"small",style:{marginTop:4},title:I||p("KeyValueEditor.deleteTooltip"),onClick:()=>U(n.id)})]},n.id)}),s.jsx(F,{block:!0,icon:s.jsx(L,{icon:A}),size:"small",style:{marginTop:y.length>0?16:8},type:"dashed",onClick:S,children:d||p("KeyValueEditor.addButton")})]})]})});export{Y as K};
