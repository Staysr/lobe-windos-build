import{j as k,c8 as n,m as o,cc as z,at as E,F,ck as H,o as S}from"./index-C275yc7e.js";import{r as $}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as a}from"../vendor/vendor-motion-siEo8VfX.js";const t=k(({css:r,cssVar:e})=>({borderless:o(n.variantBorderlessWithoutHover,r`
        border-radius: 0;

        pre,
        textarea {
          padding: 0;
        }
      `),filled:n.variantFilledWithoutHover,highlight:r`
      pointer-events: none;
    `,outlined:n.variantOutlinedWithoutHover,root:r`
      position: relative;

      overflow: hidden auto;

      width: 100%;
      height: fit-content;
      border-radius: ${e.borderRadius};

      font-size: 12px;

      pre,
      textarea {
        margin: 0;
        padding: 16px;
      }

      textarea,
      pre,
      code {
        overflow: hidden;

        font-family: ${e.fontFamilyCode};
        font-size: inherit;
        line-height: inherit;
        word-break: inherit;
        word-wrap: break-word;
        white-space: pre-wrap;
      }
    `,textarea:r`
      resize: none;

      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 0;

      overflow: hidden;

      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;

      color: transparent;
      text-align: start;

      background: transparent;
      outline: none;
      caret-color: ${e.colorText};

      &::placeholder {
        color: ${e.colorTextQuaternary};
      }

      &:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }
    `})),N=z(t.root,{defaultVariants:{variant:"borderless"},variants:{variant:{filled:t.filled,outlined:t.outlined,borderless:t.borderless}}}),T=$.memo(({autoFocus:r,classNames:e,styles:l,defaultValue:s="",onChange:c,placeholder:p="",style:g,className:x,onValueChange:f,value:i,language:u="markdown",variant:d="borderless",width:b,height:m,flex:v,ref:w,...y})=>{const[C,j]=E(s,{defaultValue:s,onChange:f,value:i});return a.jsxs(F,{className:o(N({variant:d}),x),flex:v,height:m,style:g,width:b,children:[i?a.jsx(H,{className:o(t.highlight,e?.highlight),language:u,style:l?.highlight,variant:d,children:i}):a.jsx("pre",{className:o(t.highlight,e?.highlight),style:{color:S.colorTextDescription},children:p||" "}),a.jsx("textarea",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",autoFocus:r,className:o(t.textarea,e?.textarea),"data-gramm":!1,ref:w,style:l?.textarea,value:C,onChange:h=>{c?.(h),j(h.target.value)},...y})]})});T.displayName="CodeEditor";export{T as C};
