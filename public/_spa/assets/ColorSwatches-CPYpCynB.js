import{dd as T,de as A,df as N,dg as W,dh as E,di as B,dj as H,dk as I,dl as M,dm as q,dn as O,dp as _,dq as D,dr as G,ds as J,dt as K,du as L,j as Q,at as U,o as l,F as X,aa as v,C as Y,I as Z,dv as V,dw as ee,m as b}from"./index-C275yc7e.js";import{r as y}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as i}from"../vendor/vendor-motion-siEo8VfX.js";import{c as oe}from"./index-Ciqn2WuZ.js";import{bc as re}from"../vendor/vendor-icons-CwKawJ1k.js";import{C as ae}from"./ColorPicker-DBl4t_aI.js";const r={blue:L.dark[9],cyan:K.dark[9],geekblue:J.dark[9],gold:G.dark[9],green:D.dark[9],lime:_.dark[9],magenta:O.dark[9],orange:q.dark[9],purple:M.dark[9],red:I.dark[9],volcano:H.dark[9],yellow:B.dark[9]},pe=[r.red,r.orange,r.gold,r.yellow,r.lime,r.green,r.cyan,r.blue,r.geekblue,r.purple,r.magenta,r.volcano],n={mauve:E.dark[9],olive:W.dark[9],sage:N.dark[9],sand:A.dark[9],slate:T.dark[9]},me=[n.mauve,n.slate,n.sage,n.olive,n.sand],he=(a,e)=>Object.entries(a==="primary"?r:n).find(d=>d[1]===e)?.[0],w="ant",s=Q(({css:a,cssVar:e})=>({active:a`
      box-shadow: inset 0 0 0 1px ${e.colorFill};
    `,conic:a`
      background: conic-gradient(
        ${e.red},
        ${e.volcano},
        ${e.orange},
        ${e.gold},
        ${e.yellow},
        ${e.lime},
        ${e.green},
        ${e.cyan},
        ${e.blue},
        ${e.geekblue},
        ${e.purple},
        ${e.magenta},
        ${e.red}
      );
      .${w}-color-picker-color-block {
        opacity: 0;
      }
    `,container:a`
      cursor: pointer;

      flex: none;

      width: var(--color-swatches-size, 24px);
      min-width: var(--color-swatches-size, 24px);
      height: var(--color-swatches-size, 24px);
      min-height: var(--color-swatches-size, 24px);

      background: ${e.colorBgContainer};
      box-shadow: inset 0 0 0 1px ${e.colorFillSecondary};

      &:hover {
        box-shadow:
          inset 0 0 0 1px rgba(0, 0, 0, 5%),
          0 0 0 2px ${e.colorText};
      }
    `,picker:a`
      overflow: hidden;
      flex: none;

      width: var(--color-swatches-size, 24px);
      min-width: var(--color-swatches-size, 24px);
      height: var(--color-swatches-size, 24px);
      min-height: var(--color-swatches-size, 24px);
      padding: 0;
      border: none;

      box-shadow: inset 0 0 0 1px ${e.colorFillSecondary};

      &:hover {
        box-shadow:
          inset 0 0 0 1px ${e.colorFillSecondary},
          0 0 0 2px ${e.colorText};
      }

      .${w}-color-picker-color-block {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: inherit;
      }
    `,transparent:a`
      background-image: conic-gradient(
        ${e.colorFillSecondary} 25%,
        transparent 25% 50%,
        ${e.colorFillSecondary} 50% 75%,
        transparent 75% 100%
      );
      background-size: 50% 50%;
    `})),te=({enableColorPicker:a,enableColorSwatches:e=!0,defaultValue:d,value:$,style:f,colors:c,onChange:C,size:h=24,shape:u="circle",texts:g,ref:z,...j})=>{const[t,p]=U(d,{defaultValue:d,onChange:C,value:$}),S=y.useMemo(()=>({"--color-swatches-size":`${h}px`}),[h]),F=y.useMemo(()=>t&&t!==l.colorPrimary&&!c.some(o=>o.color===t),[t,c]);return i.jsxs(X,{horizontal:!0,gap:6,ref:z,style:{...S,flexWrap:"wrap",...f},...j,children:[e&&c.map((o,P)=>{const m=o.color||l.colorPrimary,x=!t&&!o.color||m===t,k=o.color==="transparent"||o.color&&!o.color.startsWith("var(")&&(()=>{try{return oe(o.color).alpha()===0}catch{return!1}})(),R=o.color?.startsWith("var(")?l.colorPrimary:m;return i.jsx(v,{title:o.title,children:i.jsx(Y,{className:b(s.container,k&&s.transparent,x&&s.active),style:{background:k?void 0:m,borderRadius:u==="circle"?"50%":l.borderRadius},onClick:()=>p(o.color||void 0),children:x&&i.jsx(Z,{color:V(ee(R),.33),icon:re,size:{size:14,strokeWidth:4},style:{pointerEvents:"none"}})})},o?.key||P)}),a&&i.jsx(v,{title:g?.custom||"Custom",children:i.jsx(ae,{disabledAlpha:!0,arrow:!1,defaultValue:l.colorPrimary,format:"hex",value:e?void 0:t,className:b(s.picker,e&&s.conic,F&&s.active),presets:e?void 0:[{colors:c.map(o=>o.color),label:g?.presets||"Presets"}],style:{borderRadius:u==="circle"?"50%":l.borderRadius},onChangeComplete:o=>{o.toHexString()===l.colorPrimary?p(""):p(o.toHexString())}})})]})};te.displayName="ColorSwatches";export{te as C,me as a,pe as b,he as f,n,r as p};
