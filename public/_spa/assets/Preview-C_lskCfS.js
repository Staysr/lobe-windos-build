import{j as o}from"../vendor/vendor-motion-siEo8VfX.js";import{k as a,C as e,F as p,a5 as s,j as d,m as n,c8 as l,r as c,c9 as h}from"./index-C275yc7e.js";import"./providerConfig-BNV0IvMA.js";import{G as x}from"./Grid-C06UCg1E.js";import{r as g}from"../vendor/vendor-emotion-B6qZrIr4.js";import{P as m}from"./index-BeBhPGZl.js";import{U as u}from"./UserAvatar-DywKHwKc.js";import{A as b,T as v,a as w}from"./index-BdmfyCgj.js";import"../i18n/i18n-zh-CN-CcVu2is6.js";import"../i18n/i18n-en-US-DqZ3IPP5.js";import"../vendor/vendor-es-toolkit-CFMjQStz.js";import"../vendor/vendor-icons-CwKawJ1k.js";import"./index-B1FRBCSR.js";import"./index-DvKkbDJI.js";import"./index-DOKgRZvR.js";import"./store-DbnW5vB3.js";import"./system-BqfmOcTp.js";import"./sync-B0NYe9St.js";import"./FormGroup-JjgvA3MA.js";import"./Segmented-Befyy6zO.js";import"./index-TDyohjeM.js";import"./ProviderIcon-9EZaJHBV.js";import"./SettingHeader-B4LS2VfE.js";import"./index-IakR4GtG.js";import"./index-BXf1oQh6.js";import"./InfoCircleOutlined-BWYuV3b3.js";import"./row-Ck51Dhje.js";import"./index-CecNsLP-.js";import"./index-DpNrO4cp.js";import"./index-D6DvmplH.js";import"./index-B5hHQ14u.js";import"./useForm-C4hvPi2h.js";import"./index-C2H8Z_Bj.js";import"./format-CzTD0Usd.js";import"./time-rcaWhIH0.js";import"./index-1UYA6KeV.js";import"./index-DMKxTJGG.js";import"./index-BVlugt2r.js";import"./_baseAssignValue-DKiRLsuq.js";import"./debounce-yArlvKmP.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-DH7Lw-FF.js";import"./Drawer-DJnu92Sk.js";import"./index-BHwegkc5.js";import"./index-4OgsBrhc.js";import"./index-BdXZwuHp.js";import"./providerConfig-Bb-onMKG.js";import"./useFillId-DE6TCRlt.js";import"./index-Cv8AhhVl.js";import"./index-CSuluO9j.js";import"./index-BxOuX_e1.js";import"./index-BQC4K4Xn.js";import"./index-CaauNB8x.js";import"./base-AbuBx_QK.js";import"./Link-BOOoHXIy.js";import"./Trans-C3nYCB7P.js";import"./FormModal-D6kz4A2s.js";import"./index-O8tKHO4b.js";import"./useTranslation-DXQttwfC.js";import"./form-CzkHLuiW.js";import"./useScreenshot-DkGp_kQj.js";import"./dynamic-LwXV6Rk2.js";import"./index-BOs7KqbA.js";import"./Table-CXPjVh9Q.js";import"./index-Ch0UCOj0.js";import"./useBubbleLock-hIRUaOo-.js";import"./index-CDCjmxOa.js";import"./scrollTo-0Y8P0xAA.js";import"./Pagination-Cd9CbmaG.js";import"./index-CtZIRQpu.js";import"./useQueryParam-BHvJPqvZ.js";import"./index-DrRVr6oe.js";import"./customParseFormat-9sD1DkgC.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
    box-sizing: content-box;
    border: 4px solid ${r.colorBgLayout};
    background: ${r.colorText};
  `,background:t`
    position: relative;

    width: 100%;
    padding: 24px;

    background-color: ${r.colorBgLayout};
    background-image: url(${h("screenshot_background.webp")});
    background-position: center;
    background-size: 120% 120%;
  `,container:t`
    position: relative;

    overflow: hidden;

    width: 100%;
    border: 1px solid ${r.colorBorder};
    border-radius: calc(${r.borderRadiusLG} * 2);

    background: ${r.colorBgLayout};
    box-shadow: ${r.boxShadow};
  `,decs:t`
    font-size: 12px;
    color: ${r.colorTextDescription};
  `,footer:t`
    font-size: 12px;
    color: ${r.colorTextDescription};
  `,heatmaps:t`
    .legend-month,
    footer {
      display: none;
    }
  `,preview:n(l.noScrollbar,t`
      overflow: hidden scroll;

      width: 100%;
      max-height: 70dvh;
      border: 1px solid ${r.colorBorder};
      border-radius: ${r.borderRadiusLG};

      background: ${r.colorBgLayout};

      * {
        pointer-events: none;

        ::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
        }
      }

      ${c.sm} {
        max-height: 40dvh;
      }
    `),title:t`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `})),Qo=g.memo(()=>{const{t}=a("auth");return o.jsx("div",{className:i.preview,children:o.jsx("div",{className:i.background,id:"preview",children:o.jsxs(e,{className:i.container,gap:12,padding:24,children:[o.jsx(m,{size:24,type:"text"}),o.jsx("div",{className:i.title,children:t("stats.share.title")}),o.jsxs(p,{horizontal:!0,align:"center",children:[o.jsx(u,{className:i.avatar,shape:"circle",size:48,style:{marginRight:-12,zIndex:2}}),o.jsx(e,{className:i.avatar,height:48,width:48,style:{borderRadius:"50%",zIndex:1},children:o.jsx(m,{size:40})})]}),o.jsxs(p,{gap:12,paddingBlock:12,width:"100%",children:[o.jsx(b,{inShare:!0,blockMargin:2,blockRadius:1,blockSize:4.5,className:i.heatmaps,width:"100%",style:{marginTop:-12}}),o.jsxs(x,{gap:8,maxItemWidth:100,rows:2,width:"100%",children:[o.jsx(v,{inShare:!0}),o.jsx(w,{inShare:!0})]})]}),o.jsx("div",{className:i.footer,children:s})]})})})});export{Qo as default};
