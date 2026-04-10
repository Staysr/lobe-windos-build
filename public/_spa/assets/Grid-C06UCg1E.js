import{j as l,F as c,m as x}from"./index-C275yc7e.js";import{r as n}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as g}from"../vendor/vendor-motion-siEo8VfX.js";import{f as i}from"../vendor/vendor-es-toolkit-CFMjQStz.js";const f=l(({css:s})=>s`
    --rows: var(--grid-rows, 3);
    --max-item-width: var(--grid-max-item-width, 240px);
    --gap: var(--grid-gap, 1em);

    display: grid !important;
    grid-template-columns: repeat(
      auto-fill,
      minmax(
        max(var(--max-item-width), calc((100% - var(--gap) * (var(--rows) - 1)) / var(--rows))),
        1fr
      )
    );
  `),u=({className:s,gap:r="1em",rows:t=3,children:e,maxItemWidth:a=240,ref:m,style:o,...p})=>{const d=n.useMemo(()=>({"--grid-gap":i(r)?r:`${r}px`,"--grid-max-item-width":i(a)?a:`${a}px`,"--grid-rows":`${t}`}),[r,a,t]);return g.jsx(c,{className:x(f,s),gap:r,ref:m,style:{...d,...o},...p,children:e})};u.displayName="Grid";export{u as G};
