import{j as e}from"../vendor/vendor-motion-siEo8VfX.js";import{W as u,m as f,j as x,o as t}from"./index-C275yc7e.js";import{I as d}from"./index-DykGnXB3.js";import{r as E}from"../vendor/vendor-emotion-B6qZrIr4.js";import{u as k}from"./usePlatform-gqS5x8JW.js";import{aH as S}from"../vendor/vendor-icons-CwKawJ1k.js";const b=64,r=x(({css:o})=>({deleteButton:o`
    color: #fff;
    background: ${t.colorBgMask};

    &:hover {
      background: ${t.colorError};
    }
  `,editableImage:o`
    background: ${t.colorBgContainer};
    box-shadow: 0 0 0 1px ${t.colorFill} inset;
  `,image:o`
    margin-block: 0 !important;

    .ant-image {
      height: 100% !important;

      img {
        height: 100% !important;
      }
    }
  `})),$=E.memo(({className:o,style:i,editable:a,alt:m,onRemove:n,url:c,loading:l,alwaysShowClose:g,preview:p})=>{const h=a?b:"100%",{isSafari:s}=k();return e.jsx(d,{alt:m||"",alwaysShowActions:g,classNames:{wrapper:f(r.image,a&&r.editableImage,o)},height:s?"auto":"100%",isLoading:l,preview:p,size:h,src:c,style:{height:s?"auto":"100%",width:"100%",...i},actions:a&&e.jsx(u,{glass:!0,className:r.deleteButton,icon:S,size:"small",onClick:I=>{I.stopPropagation(),n?.()}})})});export{$ as I};
