import{j as o}from"../vendor/vendor-motion-BIhyHZ0p.js";import{g as a,C as e,F as p,R as s,f as d,j as n,ae as l,r as c,b1 as h}from"./index-Rjxk4g_I.js";import"./providerConfig-DjTKVWb5.js";import{G as x}from"./Grid-DXkVY7wb.js";import{r as g}from"../vendor/vendor-emotion-DdM-9MtU.js";import{P as m}from"./index-C-MEpv0o.js";import{U as u}from"./UserAvatar-C1lgULVY.js";import{A as b,T as f,a as v}from"./index-9rW2TlLm.js";import"../i18n/i18n-zh-CN-CO_PhvK1.js";import"../i18n/i18n-en-US-B1hbRPog.js";import"../vendor/vendor-es-toolkit-DEdCfXFH.js";import"../vendor/vendor-icons-B5XxavR9.js";import"./index-tpJikB3z.js";import"./index-D3AbbKb4.js";import"./index-C4DxYo5Y.js";import"./index-E-558r2I.js";import"./store-CAFgtZjz.js";import"./GlobalAgentContextManager-qaNT0KmK.js";import"./ipc-wTHpVC92.js";import"./sync-CRIv5ebs.js";import"./FormGroup-BHZcKaNg.js";import"./Segmented-D6pf-TyY.js";import"./index-Bv8Kym3P.js";import"./ProviderIcon-C2ga4ty0.js";import"./SettingHeader-BTtefg70.js";import"./index-Bc5NIMk0.js";import"./Block-Bz_9WVCI.js";import"./index-eF79sEgZ.js";import"./index-B5PLkm48.js";import"./InfoCircleOutlined-BWYuV3b3.js";import"./row-MBlO-RSB.js";import"./index-aFl6usqO.js";import"./EllipsisOutlined-kLJZoIkW.js";import"./PlusOutlined-emjh_Y3o.js";import"./Dropdown-BjTQ0CSF.js";import"./index-DnPP6QVA.js";import"./index-JSOcJg7F.js";import"./index-DiS6uszb.js";import"./useForm-CAb3TyrQ.js";import"./index-2DpINCNa.js";import"./index-D4xubdze.js";import"./abortableRequest-CqTkNl3n.js";import"./format-owXwBtD5.js";import"./currency-iJxIWo9y.js";import"./time-BE-RC3JD.js";import"./index-Cim8TGYX.js";import"./index-B3WrDdDP.js";import"./index-BzNw1Qm3.js";import"./TextArea-D1PECi1L.js";import"./Input-TQ_a30Wx.js";import"./index-DekwUdRV.js";import"./_baseAssignValue-fHrU2WBP.js";import"./debounce-Bxk92SIb.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-DwD3upc5.js";import"./Drawer-CwjeViBh.js";import"./index-CheBPx_Z.js";import"./index-BXDGR7UW.js";import"./index-DDKIJJmB.js";import"./providerConfig-DIE6dcl3.js";import"./useFillId-Dc6zFnxP.js";import"./index-N3n2SlTj.js";import"./index-Dhw_JmpP.js";import"./index-Ct7Fzj8O.js";import"./index-Bydyg3ga.js";import"./index-C8wnA_Oz.js";import"./base-AbuBx_QK.js";import"./Link-C0OwKZH-.js";import"./Trans-CmzCbFmQ.js";import"./FormModal-DdnMnCXk.js";import"./index-C-5EFTeS.js";import"./useTranslation-BH7wwWOT.js";import"./form-CzkHLuiW.js";import"./useScreenshot-D7h1u4Zj.js";import"./dynamic-D1aHtlXt.js";import"./index-DOp5Cj_0.js";import"./Table-2tnhkdGw.js";import"./index-DxbccsFd.js";import"./useBubbleLock-Cs8Mzsm_.js";import"./index-DVYhszaD.js";import"./LeftOutlined-BMhbrsh8.js";import"./index-DybPKzTS.js";import"./index-Co4R0xG7.js";import"./index-CWdHXa9U.js";import"./scrollTo-BgNiOI8g.js";import"./Pagination-DFxxzhBV.js";import"./index-BNjJ2njY.js";import"./useQueryParam-C-vclcxA.js";import"./index-Dxk98Iwb.js";import"./customParseFormat-CAbVLu8E.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
  `})),cr=g.memo(()=>{const{t}=a("auth");return o.jsx("div",{className:i.preview,children:o.jsx("div",{className:i.background,id:"preview",children:o.jsxs(e,{className:i.container,gap:12,padding:24,children:[o.jsx(m,{size:24,type:"text"}),o.jsx("div",{className:i.title,children:t("stats.share.title")}),o.jsxs(p,{horizontal:!0,align:"center",children:[o.jsx(u,{className:i.avatar,shape:"circle",size:48,style:{marginRight:-12,zIndex:2}}),o.jsx(e,{className:i.avatar,height:48,width:48,style:{borderRadius:"50%",zIndex:1},children:o.jsx(m,{size:40})})]}),o.jsxs(p,{gap:12,paddingBlock:12,width:"100%",children:[o.jsx(b,{inShare:!0,blockMargin:2,blockRadius:1,blockSize:4.5,className:i.heatmaps,width:"100%",style:{marginTop:-12}}),o.jsxs(x,{gap:8,maxItemWidth:100,rows:2,width:"100%",children:[o.jsx(f,{inShare:!0}),o.jsx(v,{inShare:!0})]})]}),o.jsx("div",{className:i.footer,children:s})]})})})});export{cr as default};
