import{cc as M,j as S,n as b,m as k}from"./index-BBAuCJqA.js";import{A as x}from"./index-GNbd6Ibo.js";import{G as q}from"./Grid-2gpThKre.js";import{r as f}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as p}from"../vendor/vendor-motion-DRC1LdIk.js";const z=(r,s=4)=>{const t=r/2,e=[];for(let o=0;o<=360;o+=2){const n=o*Math.PI/180,l=Math.cos(n),g=Math.sin(n),a=t*Math.sign(l)*Math.pow(Math.abs(l),2/s),m=t*Math.sign(g)*Math.pow(Math.abs(g),2/s);e.push(`${t+a},${t+m}`)}return`M${e[0]}L${e.slice(1).join("L")}Z`},d=(r={})=>{const{size:s=100,cornerValue:t=4}=r,e=`
    <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
      <path d="${z(s,t)}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g," ");return`data:image/svg+xml;base64,${btoa(e)}`},A=(r={})=>{const{size:s=100}=r,t=s/2,e=`
    <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${t}" cy="${t}" r="${t}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g," ");return`data:image/svg+xml;base64,${btoa(e)}`},j=(r={})=>{const{size:s=100,borderRadius:t=15}=r,e=`
    <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${s}" height="${s}" rx="${t}" ry="${t}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g," ");return`data:image/svg+xml;base64,${btoa(e)}`},y={circle:A(),ios:d({cornerValue:5}),sharp:d({cornerValue:6}),smooth:d({cornerValue:3}),square:j({borderRadius:15}),squircle:d({cornerValue:4})},c=S(({css:r})=>{const s=t=>r`
    mask-image: url('${y[t]}');
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  `;return{circle:s("circle"),ios:s("ios"),root:r`
      overflow: hidden;
      flex: none;

      /* Fallback for browsers without mask support */
      border-radius: 15%;

      /* Apply smooth corners mask with fallback */
      @supports (mask-image: url('data:image/svg+xml;base64,')) {
        border-radius: 0;
      }
    `,sharp:s("sharp"),smooth:s("smooth"),square:s("square"),squircle:s("squircle")}}),R=M(c.root,{defaultVariants:{cornerShape:"squircle"},variants:{cornerShape:{circle:c.circle,ios:c.ios,sharp:c.sharp,smooth:c.smooth,square:c.square,squircle:c.squircle}}}),E=({className:r,style:s,avatars:t=[],size:e=32,grid:o=2,cornerShape:n="square",avatarShape:l="square",...g})=>{const a=f.useMemo(()=>{const h=t.length,i=o==="auto"?h>4?3:2:o,$=n==="circle",u=Math.floor(e/i*($?.65:.75)),v=Math.floor((e-u*i)/($?6:4));return{avatarSize:u,gapSize:v,gridSize:i,gridWidth:u*i+v,maxItemWidth:u-1}},[t,o,e,n]),m=f.useMemo(()=>t?.slice(0,a.gridSize*a.gridSize),[t,a.gridSize]),w=m?.length===1;return p.jsx(b,{align:"center",className:k(R({cornerShape:n}),r),height:e,justify:"center",style:s,width:e,...g,children:p.jsx(q,{gap:a.gapSize,maxItemWidth:0,rows:a.gridSize,width:a.gridWidth,children:m.map((h,i)=>typeof h=="string"?p.jsx(x,{avatar:h,shape:l,size:w?e*.8:a.avatarSize},i):p.jsx(x,{...h,shape:l,size:w?e*.8:a.avatarSize},i))})})};export{E as G};
