import{j as a}from"../vendor/vendor-motion-siEo8VfX.js";import{r as e}from"../vendor/vendor-emotion-B6qZrIr4.js";import{S as l}from"./const-lbjNOSiN.js";import{l as c,m as s,j as p,r as m}from"./index-C275yc7e.js";import{c as d}from"./useToc-9DDmtt_-.js";import{A as x}from"./index-CjyeEqc-.js";const o="ant",f=p(({css:r,cssVar:t})=>({toc:r`
      a {
        line-height: 1.4 !important;
        white-space: normal !important;
      }

      .${o}-anchor {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &::before {
          display: none;
        }

        .${o}-anchor-ink {
          display: none !important;
        }

        .${o}-anchor-link-title {
          overflow: hidden;
          display: box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          word-break: break-word;
        }

        .${o}-anchor-link-title,.${o}-anchor-link {
          margin: 0 !important;
          padding-block: 0 !important;
        }

        > .${o}-anchor-link {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-inline-start: 0 !important;
        }

        .${o}-anchor-link-title-active {
          color: ${t.colorText} !important;
        }

        .${o}-anchor-link-title:not(.${o}-anchor-link-title-active) {
          color: ${t.colorTextSecondary};

          &:hover {
            color: ${t.colorText};
          }
        }
      }

      ${m.lg} {
        display: none;
      }
    `})),u=e.memo(({items:r,className:t,...i})=>{const n=e.useMemo(()=>d(r),[r]);return a.jsx(x,{affix:!1,className:s(t,f.toc),items:n,getContainer:c?void 0:()=>document.querySelector(`#${l}`),...i})});export{u as T};
