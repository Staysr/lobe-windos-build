import{j as o}from"../vendor/vendor-motion-DRC1LdIk.js";import{r as a}from"../vendor/vendor-emotion-D2wYcXAj.js";import{ay as c,o as t,aC as s,m as d,j as g}from"./index-BmW5CTHd.js";const e="ant",l=g(({css:i,cssVar:n})=>({compact:i`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  `,menu:i`
    flex: 1;
    border: none !important;
    background: transparent;

    .${e}-menu-item-divider {
      margin-block: 0.125rem;
      border-color: ${n.colorFillTertiary};

      &:first-child {
        margin-block-start: 0;
      }

      &:last-child {
        margin-block-end: 0;
      }
    }

    .${e}-menu-item, .${e}-menu-submenu-title {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      height: unset;
      min-height: 2rem;
      padding-block: 0.375rem;
      padding-inline: 0.75rem;

      line-height: 2;

      .anticon + .${e}-menu-title-content {
        margin-inline-start: 0;
      }
    }

    .${e}-menu-item-selected {
      .${e}-menu-item-icon svg {
        color: ${n.colorText};
      }
    }

    .${e}-menu-item-icon svg {
      color: ${n.colorTextSecondary};
    }

    .${e}-menu-title-content {
      flex: 1;
    }
  `})),f=a.memo(({className:i,selectable:n=!1,compact:r,...m})=>o.jsx(c,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemBorderRadius:8,itemColor:n?t.colorTextSecondary:t.colorText,itemHoverBg:t.colorFillTertiary,itemMarginBlock:r?0:4,itemMarginInline:r?0:4,itemSelectedBg:t.colorFillSecondary,paddingXS:-8}}},children:o.jsx(s,{className:d(l.menu,r&&l.compact,i),mode:"vertical",selectable:n,...m})}));export{f as M};
