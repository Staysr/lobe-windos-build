import{j as G,h as K,az as I,o as B,bu as M,W as $,m as i,aZ as W,I as X}from"./index-C275yc7e.js";import{r as z}from"../vendor/vendor-emotion-B6qZrIr4.js";import{j as e}from"../vendor/vendor-motion-siEo8VfX.js";import{D as Z}from"./Drawer-DJnu92Sk.js";import{aA as q,aB as H,a0 as E}from"../vendor/vendor-icons-CwKawJ1k.js";const l=G(({css:o,cssVar:t})=>({content:o`
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
    `})),J=z.memo(({panelRef:o,allowFullscreen:t,children:c,title:x=" ",className:f,classNames:a,width:F=700,onCancel:d,open:g,destroyOnHidden:m,paddings:u,height:h="75dvh",enableResponsive:A=!0,footer:r,styles:n,okText:w,onOk:b,cancelText:j,okButtonProps:p,cancelButtonProps:y,confirmLoading:v,...C})=>{const[s,D]=z.useState(!1),{mobile:R}=K(),k=r===!1||r===null;return A&&R?e.jsx(I,{theme:{token:{colorBgElevated:B.colorBgContainer}},children:e.jsx(Z,{className:i(l.drawerContent,f),closeIcon:e.jsx($,{icon:E}),destroyOnHidden:m,height:s?"calc(100% - env(safe-area-inset-top))":h,open:g,panelRef:o,placement:"bottom",title:x,classNames:typeof a=="function"?a:{...a,wrapper:i(l.wrap,a?.wrapper)},extra:t&&e.jsx($,{icon:s?q:H,onClick:()=>D(!s)}),footer:k?null:r||e.jsxs(e.Fragment,{children:[e.jsx(M,{color:"default",variant:"filled",onClick:d,...y,children:j||"Cancel"}),e.jsx(M,{loading:v,type:"primary",onClick:b,...p,style:{marginInlineStart:8,...p?.style},children:w||"OK"})]}),styles:typeof n=="function"?n:{...n,body:{paddingBlock:`16px ${r?0:"16px"}`,paddingInline:u?.desktop??16,...n?.body}},onClose:d,...C,children:c})}):e.jsx(I,{theme:{token:{colorBgElevated:B.colorBgContainer}},children:e.jsx(W,{closable:!0,maskClosable:!0,cancelText:j,className:i(l.content,f),closeIcon:e.jsx(X,{icon:E,size:20}),confirmLoading:v,destroyOnHidden:m,footer:k?null:r,okButtonProps:p,okText:w,open:g,panelRef:o,title:x,width:F,cancelButtonProps:{color:"default",variant:"filled",...y},classNames:typeof a=="function"?a:{...a,wrapper:i(l.wrap,a?.wrapper)},styles:typeof n=="function"?n:{...n,body:{maxHeight:h,overflow:"hidden auto",paddingBlock:`0 ${r===null?"16px":0}`,paddingInline:u?.desktop??16,...n?.body}},onCancel:d,onOk:b,...C,children:c})})});J.displayName="Modal";export{J as M};
