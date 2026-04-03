import{j as S,c5 as k,m as s,ab as I,F as c,dO as B,I as C,a8 as L}from"./index-BmW5CTHd.js";import{r as T}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{bS as E,aI as F}from"../vendor/vendor-icons-Bjz-9Gdp.js";const n=S(({css:t,cssVar:i})=>({actions:t`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 16px;
      transform: translateY(-50%);
    `,active:k.active,content:t`
      position: relative;
      overflow: hidden;
      flex: 1;
      align-self: center;
    `,date:t`
      font-size: 12px;
      color: ${i.colorTextPlaceholder};
    `,desc:t`
      width: 100%;
      margin: 0;

      font-size: 12px;
      line-height: 1.2;
      color: ${i.colorTextDescription};
    `,pin:t`
      position: absolute;
      inset-block-start: 6px;
      inset-inline-end: 6px;
    `,root:s(k.variantBorderless,t`
        cursor: pointer;
        position: relative;
        border-radius: ${i.borderRadius};
        color: ${i.colorTextTertiary};
      `),title:t`
      width: 100%;
      margin: 0;

      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      color: ${i.colorText};
    `,triangle:t`
      width: 10px;
      height: 10px;
      border-radius: 2px;

      opacity: 0.5;
      background: ${i.colorPrimaryBorder};
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    `})),P=t=>{const i=I(t);return i.isSame(I(),"day")?i.format("HH:mm"):i.format("MM-DD")},b=T.memo(({ref:t,active:i,avatar:x,loading:h,description:d,date:p,title:g,onHoverChange:r,actions:l,className:y,style:u,showAction:m,children:f,classNames:o,addon:j,pin:v,styles:a,...N})=>{const w=e.jsx(C,{spin:!0,icon:F}),z=v&&e.jsx("div",{className:s(n.pin,o?.pin),style:a?.pin,children:e.jsx("div",{className:n.triangle})}),M=l&&e.jsx(c,{horizontal:!0,className:s(n.actions,o?.actions),gap:4,style:{display:m?void 0:"none",...a?.actions},onClick:B,children:l}),D=p&&e.jsx("div",{className:s(n.date,o?.date),style:{opacity:m?0:void 0,...a?.date},children:P(p)});return e.jsxs(c,{horizontal:!0,align:"flex-start",className:s(n.root,i&&n.active,y),distribution:"space-between",gap:8,padding:12,ref:t,style:u,onMouseEnter:()=>{r?.(!0)},onMouseLeave:()=>{r?.(!1)},...N,children:[z,e.jsxs(c,{horizontal:!0,align:"flex-start",className:o?.container,flex:1,gap:8,style:{overflow:"hidden",...a?.container},children:[x??e.jsx(C,{icon:E,style:{marginTop:4}}),e.jsxs(c,{className:s(n.content,o?.content),gap:4,style:a?.content,children:[e.jsx(L,{ellipsis:!0,as:"h3",className:s(n.title,o?.title),style:a?.title,children:g}),d&&e.jsx(L,{ellipsis:!0,className:s(n.desc,o?.desc),style:a?.desc,children:d}),j]})]}),h?w:e.jsxs(e.Fragment,{children:[M,D]}),f]})});b.displayName="ListItem";const $=T.memo(({ref:t,activeKey:i,classNames:x,styles:h,onClick:d,items:p,...g})=>e.jsx(c,{gap:4,padding:4,...g,children:p.map(r=>{const{key:l,onClick:y,className:u,style:m,...f}=r,{item:o,...j}=x||{},{item:v,...a}=h||{};return e.jsx(b,{active:r.key===i,className:s(o,u),classNames:j,ref:t,style:{...v,...m},styles:a,onClick:N=>{d?.({item:r,key:l}),y?.(N)},...f},l)})}));$.displayName="List";const R=$;R.Item=b;export{R as L,b as a};
