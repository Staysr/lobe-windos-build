import{j as H,ad as E,n as L,m as k,o as y,F as j}from"./index-BmW5CTHd.js";import{j as u}from"../vendor/vendor-motion-DRC1LdIk.js";const D=E`
  0% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`,R=H(({css:e,cssVar:t})=>({active:e`
      background: ${t.colorFillSecondary};
      animation: ${D} 2s linear infinite;
    `,avatar:e`
      flex-shrink: 0;
    `,base:e`
      user-select: none;

      position: relative;

      overflow: hidden;

      border-radius: ${t.borderRadius};

      background: ${t.colorFillTertiary};
    `,text:e`
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: ${t.paddingXS};

      width: 100%;
    `})),S=({width:e="100%",height:t="1em",active:o,style:a,className:s})=>u.jsx(L,{className:k(R.base,o&&R.active,s),height:t,style:a,variant:"filled",width:e});S.displayName="SkeletonBlock";const U=40,T=({active:e,shape:t="square",size:o,width:a,height:s,style:r,className:l,...n})=>{const i=o??U,c=a??i,d=s??i,h=t==="circle"?"50%":y.borderRadius;return u.jsx(S,{active:e,className:k(R.avatar,l),height:d,style:{borderRadius:h,...r},width:c,...n})};T.displayName="SkeletonAvatar";const W=3,N=({active:e,rows:t=W,gap:o,width:a,height:s,fontSize:r,lineHeight:l,style:n,className:i,...c})=>{const d=o,h=Math.max(t,1),p=r??14,x=(s||Math.round(p*(l??1.6)))-p,g=Array.isArray(a)?a:null,v=m=>g?g[m]??g.at(-1)??"100%":a!==void 0?a:m===h-1?"66%":"100%",f={gap:d,...n};return u.jsx(j,{className:i,gap:o||x,style:f,width:"100%",...c,children:Array.from({length:h}).map((m,A)=>u.jsx(S,{active:e,height:p,width:v(A)},A))})};N.displayName="SkeletonParagraph";const $=({active:e,fontSize:t,lineHeight:o,height:a,width:s="60%",style:r,className:l,...n})=>{const i=o??1.6,c=t!==void 0?`${t}px`:y.fontSize,d=1+(i-1)*.5,h=(i-1)*.25;return u.jsx(S,{active:e,className:l,height:a??`round(calc(${c} * ${d}), 1px)`,width:s,style:{marginBlock:`round(calc(${c} * ${h}), 1px)`,...r},...n})};$.displayName="SkeletonTitle";const I={default:36,large:46,small:28},B=({active:e,block:t=!1,shape:o="default",size:a="default",width:s,height:r,style:l,className:n,...i})=>{const c=a??"default",d=r??I[c],h=s??(t?"100%":o==="circle"?d:80),p={default:y.borderRadius,large:y.borderRadiusLG,small:y.borderRadiusSM};return u.jsx(S,{active:e,className:n,height:d,style:{borderRadius:o==="circle"?"50%":o==="round"?`calc(${y.borderRadius} * 2)`:p[c],...l},width:h,...i})};B.displayName="SkeletonButton";const G=1,z={large:28,middle:22,small:20},C={large:64,middle:48,small:36},M=({active:e,className:t,count:o=G,gap:a,height:s,size:r="middle",style:l,width:n,...i})=>{const c=a!==void 0?`${a}px`:y.paddingXS,d=Math.max(o,1),h=s??z[r],p=Array.isArray(n)?n:null,x=C[r],g={large:y.borderRadius,middle:y.borderRadiusSM,small:y.borderRadiusXS},v=f=>p?p[f]??p.at(-1)??x:n!==void 0?n:x;return u.jsx(j,{horizontal:!0,className:t,style:{gap:c,...l},...i,children:Array.from({length:d}).map((f,m)=>u.jsx(S,{active:e,height:h,width:v(m),style:{borderRadius:g[r]}},m))})};M.displayName="SkeletonTags";const P=({active:e,avatar:t=!1,title:o=!0,paragraph:a=!0,className:s,classNames:r,styles:l,style:n,width:i,height:c,gap:d=16,...h})=>{const p=!!t,x=!!o,g=!!a,v=typeof t=="object"?t:void 0,f=typeof o=="object"?o:void 0,m=typeof a=="object"?a:void 0,A={...n,...l?.root,...i!==void 0?{width:i}:{},...c!==void 0?{height:c}:{}},_=v?.active??e,w=f?.active??e,F=m?.active??e;return u.jsxs(j,{horizontal:!0,align:g?"flex-start":"center",className:k(s,r?.root),gap:d,style:A,width:"100%",...h,children:[p&&u.jsx(T,{...v,active:_,className:k(R.avatar,r?.avatar,v?.className),style:{...v?.style,...l?.avatar}}),u.jsxs(j,{gap:d,width:"100%",children:[x&&u.jsx($,{...f,active:w,className:k(r?.title,f?.className),style:{...f?.style,...l?.title}}),g&&u.jsx(N,{...m,active:F,className:k(r?.paragraph,m?.className),style:{...m?.style,...l?.paragraph}})]})]})};P.displayName="Skeleton";const b=P;b.Block=S;b.Avatar=T;b.Title=$;b.Paragraph=N;b.Button=B;b.Tags=M;export{b as S,T as a,S as b,B as c,N as d,M as e,$ as f};
