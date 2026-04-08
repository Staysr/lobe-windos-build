import{j as o}from"../vendor/vendor-motion-DRC1LdIk.js";import{k as a,C as e,F as p,a4 as s,j as d,m as n,c8 as l,r as c,c9 as h}from"./index-BBAuCJqA.js";import"./providerConfig-DLbrlvJC.js";import{G as x}from"./Grid-2gpThKre.js";import{r as g}from"../vendor/vendor-emotion-D2wYcXAj.js";import{P as m}from"./index-DAHEBu4x.js";import{U as u}from"./UserAvatar-D1W85hLq.js";import{A as b,T as v,a as w}from"./index-BH9q0xYG.js";import"../i18n/i18n-zh-CN-CErfCpws.js";import"../i18n/i18n-en-US-Dpq1-67h.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"../vendor/vendor-icons-C6hg4LnF.js";import"./index-GNbd6Ibo.js";import"./index-C8CgY4-I.js";import"./index-D_NDLVtF.js";import"./store-CcBSmXKM.js";import"./sync-FFm-kBSV.js";import"./FormGroup-DEeBCdH1.js";import"./Segmented-CZw21fS6.js";import"./index-Dx5EGCFK.js";import"./ProviderIcon-W36LlgD7.js";import"./SettingHeader-JzkMF9I0.js";import"./index-BJymUBJF.js";import"./index-D5Dq_-ft.js";import"./InfoCircleOutlined-BWYuV3b3.js";import"./row-ClDdlNJa.js";import"./index-BcDKp4gU.js";import"./index-B6dXP0v-.js";import"./index-PBycsoCz.js";import"./index-DwHjYE4k.js";import"./useForm-BVlaNNzA.js";import"./index-D_OrzpAP.js";import"./format-BRCSVQG4.js";import"./time-DkAh5PEu.js";import"./index-CmYMclQC.js";import"./index-BY_9ea5Y.js";import"./index-7EB5obVF.js";import"./_baseAssignValue-BEuvsmyU.js";import"./debounce-BRJQYKae.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-DupZSReQ.js";import"./Drawer-hdkBrhHh.js";import"./index-C0yP_FPJ.js";import"./index-DQ29yPop.js";import"./index-C_IXsgL4.js";import"./providerConfig-ylQq18jD.js";import"./useFillId-CJ7HYZYJ.js";import"./index-DG_b3fBL.js";import"./index-DTG3PkPq.js";import"./index-BBf4LK5Y.js";import"./index-BgqdOH23.js";import"./index-Bgfz0y84.js";import"./base-AbuBx_QK.js";import"./Link-CSY-94RX.js";import"./Trans-D1YMwK4l.js";import"./FormModal-TZFR20PS.js";import"./index-AFo-Bf7w.js";import"./useTranslation-8Gs39hO6.js";import"./form-CzkHLuiW.js";import"./useScreenshot-CvqEUWGy.js";import"./dynamic-CZJOsxzt.js";import"./index-BpekXWEV.js";import"./Table-OPobPAn9.js";import"./index-Ds95mZpO.js";import"./useBubbleLock-BPwjL_yj.js";import"./index-Bz4sOK-X.js";import"./scrollTo-1DYJHy84.js";import"./Pagination-CpmX6Kfs.js";import"./index-8y4Zx6ZG.js";import"./useQueryParam-CD2CvXDx.js";import"./index-Dp3ibRR6.js";import"./customParseFormat-tkY2bdQT.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
  `})),Ko=g.memo(()=>{const{t}=a("auth");return o.jsx("div",{className:i.preview,children:o.jsx("div",{className:i.background,id:"preview",children:o.jsxs(e,{className:i.container,gap:12,padding:24,children:[o.jsx(m,{size:24,type:"text"}),o.jsx("div",{className:i.title,children:t("stats.share.title")}),o.jsxs(p,{horizontal:!0,align:"center",children:[o.jsx(u,{className:i.avatar,shape:"circle",size:48,style:{marginRight:-12,zIndex:2}}),o.jsx(e,{className:i.avatar,height:48,width:48,style:{borderRadius:"50%",zIndex:1},children:o.jsx(m,{size:40})})]}),o.jsxs(p,{gap:12,paddingBlock:12,width:"100%",children:[o.jsx(b,{inShare:!0,blockMargin:2,blockRadius:1,blockSize:4.5,className:i.heatmaps,width:"100%",style:{marginTop:-12}}),o.jsxs(x,{gap:8,maxItemWidth:100,rows:2,width:"100%",children:[o.jsx(v,{inShare:!0}),o.jsx(w,{inShare:!0})]})]}),o.jsx("div",{className:i.footer,children:s})]})})})});export{Ko as default};
