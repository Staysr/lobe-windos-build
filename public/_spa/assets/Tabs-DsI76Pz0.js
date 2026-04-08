import{j as p,cc as x,W as u,m as l}from"./index-BBAuCJqA.js";import{j as n}from"../vendor/vendor-motion-DRC1LdIk.js";import{T as m}from"./index-BcDKp4gU.js";import{aC as $}from"../vendor/vendor-icons-C6hg4LnF.js";const r="ant",o=p(({css:a,cssVar:t})=>({compact:a`
      &.${r}-tabs {
        .${r}-tabs-tab {
          margin: 4px;

          + [class*='ant-tabs-tab'] {
            margin: 4px;
          }
        }
      }
    `,dropdown:a`
      .${r}-tabs-dropdown-menu {
        padding: 4px;
        border: 1px solid ${t.colorBorderSecondary};

        .${r}-tabs-dropdown-menu-item {
          border-radius: ${t.borderRadius};
        }
      }
    `,hideHolder:a`
      &.${r}-tabs {
        .${r}-tabs-content-holder {
          display: none;
        }

        .${r}-tabs-nav {
          margin: 0;

          &::before {
            display: none;
          }
        }
      }
    `,margin:a`
      &.${r}-tabs {
        .${r}-tabs-tab {
          margin: 8px;

          + .${r}-tabs-tab {
            margin: 8px;
          }
        }
      }
    `,point:a`
      &.${r}-tabs {
        &.${r}-tabs-top {
          .${r}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-start-start-radius: 4px;
            border-start-end-radius: 4px;
          }
        }

        &.${r}-tabs-bottom {
          .${r}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-end-start-radius: 4px;
            border-end-end-radius: 4px;
          }
        }

        &.${r}-tabs-left {
          .${r}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-start-radius: 4px;
            border-end-start-radius: 4px;
          }
        }

        &.${r}-tabs-right {
          .${r}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-end-radius: 4px;
            border-end-end-radius: 4px;
          }
        }
      }
    `,root:a`
      &.${r}-tabs {
        .${r}-tabs-tab {
          padding-block: 8px;
          padding-inline: 12px;
          color: ${t.colorTextSecondary};
          transition: background-color 100ms ease-out;

          &:hover {
            border-radius: ${t.borderRadius};
            color: ${t.colorText};
            background: ${t.colorFillTertiary};
          }
        }
      }
    `,rounded:a`
      &.${r}-tabs {
        &.${r}-tabs-top {
          .${r}-tabs-ink-bar {
            height: 3px;
            border-start-start-radius: 3px;
            border-start-end-radius: 3px;
          }
        }

        &.${r}-tabs-bottom {
          .${r}-tabs-ink-bar {
            height: 3px;
            border-end-start-radius: 3px;
            border-end-end-radius: 3px;
          }
        }

        &.${r}-tabs-left {
          .${r}-tabs-ink-bar {
            width: 3px;
            border-start-start-radius: 3px;
            border-end-start-radius: 3px;
          }
        }

        &.${r}-tabs-right {
          .${r}-tabs-ink-bar {
            width: 3px;
            border-start-end-radius: 3px;
            border-end-end-radius: 3px;
          }
        }
      }
    `})),c=x(o.root,{defaultVariants:{compact:!1,underlined:!1,variant:"rounded"},variants:{variant:{square:null,rounded:o.rounded,point:o.point},compact:{false:o.margin,true:o.compact},underlined:{false:o.hideHolder,true:null}}}),h=({className:a,compact:t,variant:s="rounded",items:e,...d})=>{const i=e?.some(b=>!!b.children);return n.jsx(m,{className:l(c({compact:t,underlined:i,variant:s}),a),items:e,...d,classNames:{...d?.classNames,popup:{root:o.dropdown,...d?.classNames?.popup}},more:{icon:n.jsx(u,{icon:$}),...d?.more}})};h.displayName="Tabs";export{h as T};
