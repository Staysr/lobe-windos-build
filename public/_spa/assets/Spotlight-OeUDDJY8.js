import{j as g,ag as d,m as h}from"./index-C275yc7e.js";import{r}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as v}from"../vendor/vendor-motion-siEo8VfX.js";const l=g(({css:o,cssVar:t})=>({spotlightDark:o`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: var(--spotlight-opacity, 0.1);
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      ${t.colorText},
      transparent
    );

    transition: all 0.2s;
  `,spotlightDarkOutside:o`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: 0;
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      ${t.colorText},
      transparent
    );

    transition: all 0.2s;
  `,spotlightLight:o`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: var(--spotlight-opacity, 0.1);
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      #fff,
      ${t.colorTextQuaternary}
    );

    transition: all 0.2s;
  `,spotlightLightOutside:o`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    border-radius: inherit;

    opacity: 0;
    background: radial-gradient(
      var(--spotlight-size, 64px) circle at var(--spotlight-x, 0) var(--spotlight-y, 0),
      #fff,
      ${t.colorTextQuaternary}
    );

    transition: all 0.2s;
  `})),x=()=>{const[o,t]=r.useState(),[p,s]=r.useState(!0),e=r.useRef(null);return r.useEffect(()=>{if(e.current&&e.current.parentElement){const i=e.current.parentElement,n=u=>{const c=i.getBoundingClientRect();t({x:u.clientX-c.x,y:u.clientY-c.y}),s(!1)},a=()=>{s(!0)};return i.addEventListener("mousemove",n),i.addEventListener("mouseleave",a),()=>{i.removeEventListener("mousemove",n),i.removeEventListener("mouseleave",a)}}},[]),[o,p,e]},f=r.memo(({className:o,size:t=64,...p})=>{const[s,e,i]=x(),{isDarkMode:n}=d(),a=r.useMemo(()=>({"--spotlight-opacity":e?"0":"0.1","--spotlight-size":`${t}px`,"--spotlight-x":`${s?.x??0}px`,"--spotlight-y":`${s?.y??0}px`}),[s,t,e]);return v.jsx("div",{className:h(n?e?l.spotlightDarkOutside:l.spotlightDark:e?l.spotlightLightOutside:l.spotlightLight,o),ref:i,style:a,...p})});f.displayName="Spotlight";export{f as S};
