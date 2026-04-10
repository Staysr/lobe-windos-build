import{j as x}from"../vendor/vendor-motion-siEo8VfX.js";import{B as U}from"./providerConfig-BNV0IvMA.js";import{A}from"./index-B1FRBCSR.js";import{U as i,a3 as s,aG as d,aK as g,o as l,j as h}from"./index-C275yc7e.js";import{r as k}from"../vendor/vendor-emotion-B6qZrIr4.js";import{u as E}from"./store-DbnW5vB3.js";import{e as N}from"./sync-B0NYe9St.js";const w=h(({css:r})=>({clickable:r`
    position: relative;
    transition: all 200ms ease-out 0s;

    &::before {
      content: '';

      position: absolute;
      transform: skewX(-45deg) translateX(-400%);

      overflow: hidden;

      box-sizing: border-box;
      width: 25%;
      height: 100%;

      background: rgb(255 255 255 / 50%);

      transition: all 200ms ease-out 0s;
    }

    &:hover {
      box-shadow: 0 0 0 2px ${l.colorPrimary};

      &::before {
        transform: skewX(-45deg) translateX(400%);
      }
    }
  `})),B=({ref:r,size:c=40,background:m,clickable:u,className:f,style:p,...S})=>{const[e,a,n]=i(t=>[s.userAvatar(t),s.nickName(t),s.username(t)]),o=i(d.isLogin),b=E(N.remoteServerUrl),v=k.useMemo(()=>{if(!o)return g;if(e)return e},[o,e,b]);return x.jsx(A,{alt:o?a||n||"User":U,avatar:v||a||n,background:m,className:u?w.clickable:f,ref:r,shape:"square",size:c,style:{color:l.colorText,flex:"none",...p},...S})};export{B as U};
