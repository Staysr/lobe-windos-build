import{g as J,s as Q,a as Y,b as tt,t as et,q as at,_ as u,l as z,c as rt,G as nt,K as it,P as ot,e as st,z as lt,H as ct}from"./mermaid.core-7gsDylHV.js";import{p as pt}from"./chunk-4BX2VUAB-DF4BNQ0t.js";import{p as ut}from"./wardley-RL74JXVD-Eulk5bc9.js";import{d as I}from"./arc-CP6XhVRu.js";import{o as dt}from"./ordinal-DILIJJjt.js";import{a as S,t as R,n as gt}from"./step-B6EOmCqb.js";import"./index-BmW5CTHd.js";import"../vendor/vendor-motion-DRC1LdIk.js";import"../vendor/vendor-emotion-D2wYcXAj.js";import"../i18n/i18n-zh-CN-CCQe7Zp1.js";import"../i18n/i18n-en-US-vCwQO2Oi.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"../vendor/vendor-icons-Bjz-9Gdp.js";import"./providerConfig-DdZ8yyMi.js";import"./isEmpty-DwtTZ7Mo.js";import"./min-HPkHUxvA.js";import"./_baseUniq-DN39k_-8.js";import"./_baseIsEqual-hiD2plHL.js";import"./init-Dmth1JHB.js";function ft(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function mt(t){return t}function ht(){var t=mt,a=ft,f=null,y=S(0),o=S(R),d=S(0);function s(e){var n,l=(e=gt(e)).length,g,m,v=0,c=new Array(l),i=new Array(l),x=+y.apply(this,arguments),w=Math.min(R,Math.max(-R,o.apply(this,arguments)-x)),h,D=Math.min(Math.abs(w)/l,d.apply(this,arguments)),$=D*(w<0?-1:1),p;for(n=0;n<l;++n)(p=i[c[n]=n]=+t(e[n],n,e))>0&&(v+=p);for(a!=null?c.sort(function(A,C){return a(i[A],i[C])}):f!=null&&c.sort(function(A,C){return f(e[A],e[C])}),n=0,m=v?(w-l*$)/v:0;n<l;++n,x=h)g=c[n],p=i[g],h=x+(p>0?p*m:0)+$,i[g]={data:e[g],index:n,value:p,startAngle:x,endAngle:h,padAngle:D};return i}return s.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),s):t},s.sortValues=function(e){return arguments.length?(a=e,f=null,s):a},s.sort=function(e){return arguments.length?(f=e,a=null,s):f},s.startAngle=function(e){return arguments.length?(y=typeof e=="function"?e:S(+e),s):y},s.endAngle=function(e){return arguments.length?(o=typeof e=="function"?e:S(+e),s):o},s.padAngle=function(e){return arguments.length?(d=typeof e=="function"?e:S(+e),s):d},s}var vt=ct.pie,W={sections:new Map,showData:!1},T=W.sections,F=W.showData,xt=structuredClone(vt),St=u(()=>structuredClone(xt),"getConfig"),yt=u(()=>{T=new Map,F=W.showData,lt()},"clear"),wt=u(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),At=u(()=>T,"getSections"),Ct=u(t=>{F=t},"setShowData"),Dt=u(()=>F,"getShowData"),_={getConfig:St,clear:yt,setDiagramTitle:at,getDiagramTitle:et,setAccTitle:tt,getAccTitle:Y,setAccDescription:Q,getAccDescription:J,addSection:wt,getSections:At,setShowData:Ct,getShowData:Dt},$t=u((t,a)=>{pt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Tt={parse:u(async t=>{const a=await ut("pie",t);z.debug(a),$t(a,_)},"parse")},bt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),kt=bt,Et=u(t=>{const a=[...t.values()].reduce((o,d)=>o+d,0),f=[...t.entries()].map(([o,d])=>({label:o,value:d})).filter(o=>o.value/a*100>=1);return ht().value(o=>o.value).sort(null)(f)},"createPieArcs"),Mt=u((t,a,f,y)=>{z.debug(`rendering pie chart
`+t);const o=y.db,d=rt(),s=nt(o.getConfig(),d.pie),e=40,n=18,l=4,g=450,m=g,v=it(a),c=v.append("g");c.attr("transform","translate("+m/2+","+g/2+")");const{themeVariables:i}=d;let[x]=ot(i.pieOuterStrokeWidth);x??=2;const w=s.textPosition,h=Math.min(m,g)/2-e,D=I().innerRadius(0).outerRadius(h),$=I().innerRadius(h*w).outerRadius(h*w);c.append("circle").attr("cx",0).attr("cy",0).attr("r",h+x/2).attr("class","pieOuterCircle");const p=o.getSections(),A=Et(p),C=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let b=0;p.forEach(r=>{b+=r});const G=A.filter(r=>(r.data.value/b*100).toFixed(0)!=="0"),k=dt(C).domain([...p.keys()]);c.selectAll("mySlices").data(G).enter().append("path").attr("d",D).attr("fill",r=>k(r.data.label)).attr("class","pieCircle"),c.selectAll("mySlices").data(G).enter().append("text").text(r=>(r.data.value/b*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice");const V=c.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),L=[...p.entries()].map(([r,M])=>({label:r,value:M})),E=c.selectAll(".legend").data(L).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const O=n+l,K=O*L.length/2,X=12*n,Z=M*O-K;return"translate("+X+","+Z+")"});E.append("rect").attr("width",n).attr("height",n).style("fill",r=>k(r.label)).style("stroke",r=>k(r.label)),E.append("text").attr("x",n+l).attr("y",n-l).text(r=>o.getShowData()?`${r.label} [${r.value}]`:r.label);const U=Math.max(...E.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),j=m+e+n+l+U,N=V.node()?.getBoundingClientRect().width??0,q=m/2-N/2,H=m/2+N/2,P=Math.min(0,q),B=Math.max(j,H)-P;v.attr("viewBox",`${P} 0 ${B} ${g}`),st(v,g,B,s.useMaxWidth)},"draw"),Rt={draw:Mt},Qt={parser:Tt,db:_,renderer:Rt,styles:kt};export{Qt as diagram};
