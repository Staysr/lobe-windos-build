import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{r as s}from"../vendor/vendor-emotion-D2wYcXAj.js";import{ay as n,o as l,m as d,j as c}from"./index-BBAuCJqA.js";import{F as p}from"./Table-OPobPAn9.js";const a="ant",r=c(({css:t})=>({hoverToActive:t`
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  `,table:t`
    .${a}-table {
      background: transparent;

      th,
      td {
        border: none !important;
        font-size: 13px;
      }

      .${a}-table-cell:before {
        display: none;
      }
    }

    tr {
      td:first-child,
      th:first-child {
        padding-inline-start: 24px !important;
      }

      td:last-child,
      th:last-child {
        padding-inline-end: 24px !important;
      }
    }
  `})),b=s.memo(({hoverToActive:t,className:o,...i})=>e.jsx(n,{theme:{components:{Table:{headerBg:l.colorFillQuaternary,headerBorderRadius:0}}},children:e.jsx(p,{bordered:!1,className:d(r.table,t&&r.hoverToActive,o),pagination:!1,scroll:{x:"max-content"},size:"small",...i})}));export{b as I};
