import{cc as n,j as i,c8 as s,ag as c,m as d}from"./index-C275yc7e.js";import{r as m}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as u}from"../vendor/vendor-motion-siEo8VfX.js";import{A as f}from"./index-DW4Fd9lv.js";const t=i(({css:e})=>({borderless:e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${s.variantBorderless}
        }
      }
    `,filled:e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${s.variantFilled}
        }
      }
    `,outlined:e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${s.variantOutlined}
        }
      }
    `,root:e``,shadow:e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${s.shadow}
        }
      }
    `})),p=n(t.root,{defaultVariants:{shadow:!1},variants:{variant:{filled:t.filled,outlined:t.outlined,borderless:t.borderless,underlined:null},shadow:{false:null,true:t.shadow}}}),v=m.memo(({variant:e,shadow:l,className:o,...r})=>{const{isDarkMode:a}=c();return u.jsx(f,{variant:e||(a?"filled":"outlined"),className:d(p({shadow:l,variant:e||(a?"filled":"outlined")}),o),...r})});v.displayName="AutoComplete";export{v as A};
