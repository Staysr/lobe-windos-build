import{cc as m,j as d,F as l,m as c}from"./index-BBAuCJqA.js";import{r as s}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as h}from"../vendor/vendor-motion-DRC1LdIk.js";const t=d(({css:a})=>({bottomShadow:a`
      mask-image: linear-gradient(
        180deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,leftShadow:a`
      mask-image: linear-gradient(
        270deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,rightShadow:a`
      mask-image: linear-gradient(
        90deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,root:a`
      scrollbar-width: none;
      position: relative;
      overflow: hidden;

      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `,topShadow:a`
      mask-image: linear-gradient(
        0deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `})),w=m(t.root,{defaultVariants:{position:"bottom"},variants:{position:{top:t.topShadow,bottom:t.bottomShadow,left:t.leftShadow,right:t.rightShadow}}}),p=s.memo(({className:a,children:r,position:i="bottom",size:o=40,...e})=>{const n=s.useMemo(()=>({"--mask-shadow-size":`${o}%`}),[o]);return h.jsx(l,{className:c(w({position:i}),a),style:{...n,...e.style},...e,children:r})});p.displayName="MaskShadow";export{p as M};
