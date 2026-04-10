import{j as m,m as d}from"./index-C275yc7e.js";import{r as y}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as t}from"../vendor/vendor-motion-siEo8VfX.js";const i=m(({css:e,cssVar:s})=>{const a="var(--loading-dots-size, 8px)",n="var(--loading-dots-color, var(--ant-color-primary))";return{container:e`
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
      justify-content: center;

      padding: ${s.paddingXS};
    `,defaultDot:e`
      width: ${a};
      height: ${a};
      border-radius: 50%;

      background-color: ${n};

      animation: fade-animation 1.2s ease-in-out infinite;

      @keyframes fade-animation {
        0%,
        100% {
          opacity: 0.3;
        }

        50% {
          opacity: 1;
        }
      }
    `,orbitContainer:e`
      position: relative;
      width: calc(${a} * 4);
      height: calc(${a} * 4);
    `,orbitDot:e`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform-origin: calc(${a} * 2) 0;

      width: ${a};
      height: ${a};
      margin-block-start: calc(${a} / -2);
      margin-inline-start: calc(${a} / -2);
      border-radius: 50%;

      background-color: ${n};

      animation: orbit-animation 1.2s linear infinite;

      @keyframes orbit-animation {
        0% {
          transform: rotate(0deg) translateX(calc(${a} * 2));
        }

        100% {
          transform: rotate(360deg) translateX(calc(${a} * 2));
        }
      }
    `,orbitWrapper:e`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      width: calc(${a} * 5);
      height: calc(${a} * 5);
      padding: ${s.paddingXS};
    `,pulseDot:e`
      width: ${a};
      height: ${a};
      border-radius: 50%;

      background-color: ${n};

      animation: pulse-animation 1.2s ease-in-out infinite;

      @keyframes pulse-animation {
        0%,
        100% {
          transform: scale(0.8);
          opacity: 0.3;
        }

        50% {
          transform: scale(1.3);
          opacity: 1;
        }
      }
    `,typingDot:e`
      width: ${a};
      height: ${a};
      border-radius: 50%;

      background-color: ${n};

      animation: typing-animation 1.2s ease-in-out infinite;

      @keyframes typing-animation {
        0%,
        100% {
          transform: scale(0.6);
          opacity: 0.2;
        }

        25% {
          transform: scale(1);
          opacity: 1;
        }

        50%,
        75% {
          transform: scale(0.6);
          opacity: 0.2;
        }
      }
    `,waveDot:e`
      width: ${a};
      height: ${a};
      border-radius: 50%;

      background-color: ${n};

      animation: wave-animation 1.24s ease-in-out infinite;

      @keyframes wave-animation {
        0%,
        100% {
          transform: translateY(0);
        }

        25% {
          transform: translateY(calc(${a} * -1.5));
        }

        50% {
          transform: translateY(0);
        }
      }
    `}}),p=({size:e=8,color:s,variant:a="dots",className:n,style:r})=>{const l=y.useMemo(()=>{const o={"--loading-dots-size":`${e}px`};return s&&(o["--loading-dots-color"]=s),o},[s,e]),c=()=>{switch(a){case"pulse":return t.jsx("div",{className:i.pulseDot,style:{animationDelay:"0s"}});case"wave":return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:i.waveDot,style:{animationDelay:"0s"}}),t.jsx("div",{className:i.waveDot,style:{animationDelay:"0.12s"}}),t.jsx("div",{className:i.waveDot,style:{animationDelay:"0.24s"}})]});case"orbit":return t.jsxs("div",{className:i.orbitContainer,children:[t.jsx("div",{className:i.orbitDot,style:{animationDelay:"0s"}}),t.jsx("div",{className:i.orbitDot,style:{animationDelay:"-0.4s"}}),t.jsx("div",{className:i.orbitDot,style:{animationDelay:"-0.8s"}})]});case"typing":return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:i.typingDot,style:{animationDelay:"0s"}}),t.jsx("div",{className:i.typingDot,style:{animationDelay:"0.15s"}}),t.jsx("div",{className:i.typingDot,style:{animationDelay:"0.3s"}})]});default:return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:i.defaultDot,style:{animationDelay:"0s"}}),t.jsx("div",{className:i.defaultDot,style:{animationDelay:"0.15s"}}),t.jsx("div",{className:i.defaultDot,style:{animationDelay:"0.3s"}})]})}};return t.jsx("div",{className:d(a==="orbit"?i.orbitWrapper:i.container,n),style:{...l,...r},children:c()})};p.displayName="LoadingDots";export{p as L};
