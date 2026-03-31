import{j as x}from"../vendor/vendor-motion-BIhyHZ0p.js";import{B as d}from"./providerConfig-DjTKVWb5.js";import{A}from"./index-tpJikB3z.js";import{v as i,P as s,an as U,ar as g,k as l,f as h}from"./index-Rjxk4g_I.js";import{r as k}from"../vendor/vendor-emotion-DdM-9MtU.js";import{u as E}from"./store-CAFgtZjz.js";import{e as N}from"./sync-CRIv5ebs.js";const w=h(({css:r})=>({clickable:r`
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
  `})),T=({ref:r,size:c=40,background:m,clickable:u,className:f,style:p,...v})=>{const[e,a,n]=i(o=>[s.userAvatar(o),s.nickName(o),s.username(o)]),t=i(U.isLogin),S=E(N.remoteServerUrl),b=k.useMemo(()=>{if(!t)return g;if(e)return e},[t,e,S]);return x.jsx(A,{alt:t?a||n||"User":d,avatar:b||a||n,background:m,className:u?w.clickable:f,ref:r,shape:"square",size:c,style:{color:l.colorText,flex:"none",...p},...v})};export{T as U};
