import{j as n}from"../vendor/vendor-motion-DRC1LdIk.js";import{o as f,I as H,m as g,j,k as y,C as b}from"./index-BmW5CTHd.js";import{E as k}from"./Empty-6bLhRDuU.js";import{M as E}from"./Markdown-X4PPeNQt.js";import{r as a}from"../vendor/vendor-emotion-D2wYcXAj.js";import{u as C}from"./useToc-DEVNQl03.js";import{h as M}from"../vendor/vendor-es-toolkit-O0KSByiM.js";import{aO as w,aP as I,aQ as $,aR as F,F as P}from"../vendor/vendor-icons-Bjz-9Gdp.js";const u=e=>{let r="";return a.Children.forEach(e,t=>{typeof t=="string"||typeof t=="number"?r+=t:a.isValidElement(t)&&t.props.children&&(r+=u(t.props.children))}),r},R={h2:F,h3:$,h4:I,h5:w},p=j(({cx:e,css:r,cssVar:t})=>({anchor:e("toc-anchor",r`
      display: none;
      margin-inline-start: 0.5rem;
      color: ${t.colorTextDescription} !important;
    `),container:r`
    &:hover {
      .toc-anchor {
        display: inline;
      }
    }
  `})),i=e=>({children:t,className:o,style:c,...l})=>{const{setToc:m,setFinished:x}=C(),h=a.useMemo(()=>u(t),[t]),s=M(h);return a.useEffect(()=>{m&&((e==="h2"||e==="h3")&&m?.((d=[])=>[...d,{href:`#${s}`,level:e==="h2"?2:3,title:h}]),x())},[s]),e==="h1"?n.jsx(e,{style:{color:f.colorText,...c},...l,id:s,children:t}):n.jsxs(e,{className:g(p.container,o),style:{color:f.colorText,...c},...l,id:s,children:[t,n.jsx("a",{"aria-label":"Permalink for this section",className:p.anchor,href:`#${s}`,style:{scrollMarginTop:96},children:n.jsx(H,{icon:R[e]})})]})},S=i("h1"),T=i("h2"),V=i("h3"),W=i("h4"),v=i("h5"),_=a.memo(({children:e})=>{const{t:r}=y("common");return e?n.jsx(E,{allowHtml:!0,enableImageGallery:!1,enableLatex:!1,components:{a:({href:t,...o})=>t&&t.startsWith("http")?n.jsx("a",{...o,href:t,rel:"noreferrer",target:"_blank"}):o?.children,h1:S,h2:T,h3:V,h4:W,h5:v,img:({src:t,...o})=>typeof t!="string"||t.includes("glama.ai")?null:t.startsWith("http")?n.jsx("img",{src:t,...o}):null},children:e}):n.jsx(b,{paddingBlock:32,width:"100%",children:n.jsx(k,{description:r("noContent"),descriptionProps:{fontSize:14},icon:P,style:{maxWidth:400}})})});export{_ as M};
