import{j as G,h as K,ay as I,o as B,bt as M,W as $,m as i,aY as W,I as X}from"./index-BBAuCJqA.js";import{r as E}from"../vendor/vendor-emotion-D2wYcXAj.js";import{j as e}from"../vendor/vendor-motion-DRC1LdIk.js";import{D as Y}from"./Drawer-hdkBrhHh.js";import{aA as q,aB as H,a0 as z}from"../vendor/vendor-icons-C6hg4LnF.js";const l=G(({css:o,cssVar:t})=>({content:o`
      [class*='ant-modal-footer'] {
        margin: 0;
        padding: 16px;
      }

      [class*='ant-modal-header'] {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;

        height: 56px;
        margin-block-end: 0;
        padding: 16px;
      }

      [class*='ant-modal-container'] {
        overflow: hidden;
        padding: 0;
        border: 1px solid ${t.colorSplit};
        border-radius: ${t.borderRadiusLG};
      }
    `,drawerContent:o`
      [class*='ant-drawer-close'] {
        padding: 0;
      }

      [class*='ant-drawer-header'] {
        flex: none;
        height: ${56}px !important;
        padding-block: 0;
        padding-inline: 16px;
      }

      [class*='ant-drawer-footer'] {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        padding: 16px;
        border: none;
      }
    `,wrap:o`
      overflow: hidden auto;
    `})),J=E.memo(({panelRef:o,allowFullscreen:t,children:c,title:x=" ",className:f,classNames:a,width:F=700,onCancel:d,open:g,destroyOnHidden:m,paddings:h,height:u="75dvh",enableResponsive:A=!0,footer:r,styles:n,okText:w,onOk:b,cancelText:j,okButtonProps:p,cancelButtonProps:y,confirmLoading:v,...C})=>{const[s,D]=E.useState(!1),{mobile:R}=K(),k=r===!1||r===null;return A&&R?e.jsx(I,{theme:{token:{colorBgElevated:B.colorBgContainer}},children:e.jsx(Y,{className:i(l.drawerContent,f),closeIcon:e.jsx($,{icon:z}),destroyOnHidden:m,height:s?"calc(100% - env(safe-area-inset-top))":u,open:g,panelRef:o,placement:"bottom",title:x,classNames:typeof a=="function"?a:{...a,wrapper:i(l.wrap,a?.wrapper)},extra:t&&e.jsx($,{icon:s?q:H,onClick:()=>D(!s)}),footer:k?null:r||e.jsxs(e.Fragment,{children:[e.jsx(M,{color:"default",variant:"filled",onClick:d,...y,children:j||"Cancel"}),e.jsx(M,{loading:v,type:"primary",onClick:b,...p,style:{marginInlineStart:8,...p?.style},children:w||"OK"})]}),styles:typeof n=="function"?n:{...n,body:{paddingBlock:`16px ${r?0:"16px"}`,paddingInline:h?.desktop??16,...n?.body}},onClose:d,...C,children:c})}):e.jsx(I,{theme:{token:{colorBgElevated:B.colorBgContainer}},children:e.jsx(W,{closable:!0,maskClosable:!0,cancelText:j,className:i(l.content,f),closeIcon:e.jsx(X,{icon:z,size:20}),confirmLoading:v,destroyOnHidden:m,footer:k?null:r,okButtonProps:p,okText:w,open:g,panelRef:o,title:x,width:F,cancelButtonProps:{color:"default",variant:"filled",...y},classNames:typeof a=="function"?a:{...a,wrapper:i(l.wrap,a?.wrapper)},styles:typeof n=="function"?n:{...n,body:{maxHeight:u,overflow:"hidden auto",paddingBlock:`0 ${r===null?"16px":0}`,paddingInline:h?.desktop??16,...n?.body}},onCancel:d,onOk:b,...C,children:c})})});J.displayName="Modal";export{J as M};
