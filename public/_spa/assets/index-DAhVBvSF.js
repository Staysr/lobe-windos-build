import{j as o}from"../vendor/vendor-motion-siEo8VfX.js";import{r as p}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as h,ae as c}from"./index-C275yc7e.js";const $=c`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`,g=c`
  0% {
    transform: translateX(0);
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(var(--flow-distance));
    opacity: 0.5;
  }
`,u=c`
  100% {
    transform: rotate(360deg);
  }
`,w=c`
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`,a=h(({css:e,cssVar:i})=>({center:e`
    fill: ${i.colorTextSecondary};
    animation: ${w} 2s infinite;
  `,connection:e`
    opacity: 0.3;
    stroke: ${i.colorTextSecondary};
    stroke-width: 0.5;
  `,container:e`
    display: flex;
    align-items: center;
    justify-content: center;
  `,node:e`
    fill: ${i.colorTextSecondary};
    animation: ${$} 2s infinite;
  `,particle:e`
    fill: ${i.colorTextSecondary};
    animation: ${g} 2s infinite;
  `,ring:e`
    transform-origin: center;

    fill: none;
    stroke: ${i.colorFill};
    stroke-dasharray: 0 8;
    stroke-width: 1;

    animation: ${u} 20s infinite linear;
  `,svg:e`
    width: 100%;
    height: 100%;
  `})),v=p.memo(({size:e=16})=>{const m=[];for(let t=0;t<3;t++)for(let n=0;n<3;n++){const s=25+t*25,l=25+n*25,r=(t*3+n)*.2;m.push(o.jsx("circle",{className:a.node,cx:s,cy:l,r:"3",style:{animationDelay:`${r}s`}},`node-${t}-${n}`))}const y=[];for(let t=0;t<2;t++)for(let n=0;n<3;n++){const s=25+t*25,l=25+n*25;for(let r=0;r<3;r++){const x=25+(t+1)*25,f=25+r*25;y.push(o.jsx("line",{className:a.connection,x1:s,x2:x,y1:l,y2:f},`connection-${t}-${n}-${r}`))}}const d=[0,1,2].map(t=>o.jsx("circle",{className:a.particle,cx:25,cy:50,r:"1.5",style:{"--flow-distance":"50px",animationDelay:`${t*.6}s`}},`particle-${t}`));return o.jsx("div",{className:a.container,style:{height:e,width:e},children:o.jsxs("svg",{className:a.svg,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[y,m,d,o.jsx("rect",{className:a.center,height:"6",width:"6",x:"47",y:"47"}),o.jsx("circle",{className:a.ring,cx:"50",cy:"50",r:"40"})]})})});export{v as N};
