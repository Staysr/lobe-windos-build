import{j as o}from"../vendor/vendor-motion-DRC1LdIk.js";import{k as a,C as e,F as p,a4 as s,j as d,m as n,c5 as l,r as c,c6 as h}from"./index-BmW5CTHd.js";import"./providerConfig-DdZ8yyMi.js";import{G as x}from"./Grid-BUZ_uTMV.js";import{r as g}from"../vendor/vendor-emotion-D2wYcXAj.js";import{P as m}from"./index-DijTe1i2.js";import{U as u}from"./UserAvatar-Dipp6J8F.js";import{A as b,T as v,a as w}from"./index-COnRAnvc.js";import"../i18n/i18n-zh-CN-CCQe7Zp1.js";import"../i18n/i18n-en-US-vCwQO2Oi.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"../vendor/vendor-icons-Bjz-9Gdp.js";import"./index-CjltaXqJ.js";import"./index-CkimUepr.js";import"./index-BDQRU9sz.js";import"./store-CcJrED9P.js";import"./sync-D04MGNXw.js";import"./FormGroup-Doy2NXv_.js";import"./Segmented-CTznw3IS.js";import"./index-DgPhVUtV.js";import"./ProviderIcon-DVe0lEIH.js";import"./SettingHeader-DwAqzeet.js";import"./index-BJymUBJF.js";import"./index-BMCZXRdg.js";import"./InfoCircleOutlined-BWYuV3b3.js";import"./row-B4JgmBB-.js";import"./index-ChM6vSmd.js";import"./index-BRRiPIW_.js";import"./index-BAUyKJp6.js";import"./index-BnepIK60.js";import"./useForm-BddH9m0f.js";import"./index-B12EbR_j.js";import"./format-CROJBBB8.js";import"./time-OWeNg3_r.js";import"./index-DDR6Tl9E.js";import"./index-B4WS8tzo.js";import"./index-Bd_-6ftR.js";import"./_baseAssignValue-BEuvsmyU.js";import"./debounce-BRJQYKae.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-BuUwDCT9.js";import"./Drawer-DADyiFum.js";import"./index-BcdkYTCP.js";import"./index-Df8qgoA9.js";import"./index-iphjo6DU.js";import"./providerConfig-CI1Ulflr.js";import"./useFillId-CJ7HYZYJ.js";import"./index-BLuaYD9v.js";import"./index-w3ayNMwR.js";import"./index-BIvyuDSY.js";import"./index-DZDJdJ_c.js";import"./index-BDFTPKcX.js";import"./base-AbuBx_QK.js";import"./Link-Cd3icMha.js";import"./Trans-CTbarq9G.js";import"./FormModal-BttzH-um.js";import"./index-DpRWC0_d.js";import"./useTranslation-ByWlna2-.js";import"./form-CzkHLuiW.js";import"./useScreenshot-CcLhebcd.js";import"./dynamic-CZJOsxzt.js";import"./index-CZAIuI9u.js";import"./Table-CTjCW2kP.js";import"./index-CgzXQjhp.js";import"./useBubbleLock-BPwjL_yj.js";import"./index-Chg2RjB6.js";import"./scrollTo-D5uCrSf8.js";import"./Pagination-BeXLtHqv.js";import"./index-Dnnpxx1y.js";import"./useQueryParam-D4euhqii.js";import"./index-CkAlCAYH.js";import"./customParseFormat-tkY2bdQT.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
