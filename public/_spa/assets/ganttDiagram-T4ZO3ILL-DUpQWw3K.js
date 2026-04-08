import{g as $e,s as Oe,t as Ne,q as Ye,a as Ve,b as Pe,_ as c,c as ot,d as gt,e as Re,l as nt,k as We,j as ze,z as Be,u as He}from"./mermaid.core-BpTIImZ_.js";import{ab as W}from"./index-BBAuCJqA.js";import{i as qe}from"./isoWeek-BqEoYQPY.js";import{c as je,a as Xe}from"./customParseFormat-tkY2bdQT.js";import{g as Ue}from"../vendor/vendor-emotion-D2wYcXAj.js";import{t as Ge,m as Ke,a as Ze,b as te,c as ee,d as Je,e as Qe,f as ti,g as ei,h as ii,i as ni,j as si,k as ie,l as ne,n as se,s as re,o as ae}from"./time-DAeG9hya.js";import{l as ri}from"./linear-BkEJkjA2.js";import{R as fe,r as ai,o as he,q as me,C as ke,u as It,v as oi}from"./step-B6EOmCqb.js";import"./isEmpty-CQIxiwre.js";import"../vendor/vendor-motion-DRC1LdIk.js";import"../i18n/i18n-zh-CN-CErfCpws.js";import"../i18n/i18n-en-US-Dpq1-67h.js";import"../vendor/vendor-es-toolkit-O0KSByiM.js";import"../vendor/vendor-icons-C6hg4LnF.js";import"./providerConfig-DLbrlvJC.js";import"./init-Dmth1JHB.js";import"./defaultLocale-DX6XiGOO.js";function ci(t){return t}var vt=1,Mt=2,Nt=3,pt=4,oe=1e-6;function li(t){return"translate("+t+",0)"}function ui(t){return"translate(0,"+t+")"}function di(t){return e=>+t(e)}function fi(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function hi(){return!this.__axis}function ye(t,e){var n=[],s=null,a=null,f=6,y=6,C=3,F=typeof window<"u"&&window.devicePixelRatio>1?0:.5,O=t===vt||t===pt?-1:1,I=t===pt||t===Mt?"x":"y",N=t===vt||t===Nt?li:ui;function S(w){var Y=s??(e.ticks?e.ticks.apply(e,n):e.domain()),D=a??(e.tickFormat?e.tickFormat.apply(e,n):ci),G=Math.max(f,0)+C,P=e.range(),X=+P[0]+F,R=+P[P.length-1]+F,B=(e.bandwidth?fi:di)(e.copy(),F),H=w.selection?w.selection():w,E=H.selectAll(".domain").data([null]),p=H.selectAll(".tick").data(Y,e).order(),d=p.exit(),u=p.enter().append("g").attr("class","tick"),v=p.select("line"),T=p.select("text");E=E.merge(E.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),p=p.merge(u),v=v.merge(u.append("line").attr("stroke","currentColor").attr(I+"2",O*f)),T=T.merge(u.append("text").attr("fill","currentColor").attr(I,O*G).attr("dy",t===vt?"0em":t===Nt?"0.71em":"0.32em")),w!==H&&(E=E.transition(w),p=p.transition(w),v=v.transition(w),T=T.transition(w),d=d.transition(w).attr("opacity",oe).attr("transform",function(g){return isFinite(g=B(g))?N(g+F):this.getAttribute("transform")}),u.attr("opacity",oe).attr("transform",function(g){var m=this.parentNode.__axis;return N((m&&isFinite(m=m(g))?m:B(g))+F)})),d.remove(),E.attr("d",t===pt||t===Mt?y?"M"+O*y+","+X+"H"+F+"V"+R+"H"+O*y:"M"+F+","+X+"V"+R:y?"M"+X+","+O*y+"V"+F+"H"+R+"V"+O*y:"M"+X+","+F+"H"+R),p.attr("opacity",1).attr("transform",function(g){return N(B(g)+F)}),v.attr(I+"2",O*f),T.attr(I,O*G).text(D),H.filter(hi).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Mt?"start":t===pt?"end":"middle"),H.each(function(){this.__axis=B})}return S.scale=function(w){return arguments.length?(e=w,S):e},S.ticks=function(){return n=Array.from(arguments),S},S.tickArguments=function(w){return arguments.length?(n=w==null?[]:Array.from(w),S):n.slice()},S.tickValues=function(w){return arguments.length?(s=w==null?null:Array.from(w),S):s&&s.slice()},S.tickFormat=function(w){return arguments.length?(a=w,S):a},S.tickSize=function(w){return arguments.length?(f=y=+w,S):f},S.tickSizeInner=function(w){return arguments.length?(f=+w,S):f},S.tickSizeOuter=function(w){return arguments.length?(y=+w,S):y},S.tickPadding=function(w){return arguments.length?(C=+w,S):C},S.offset=function(w){return arguments.length?(F=+w,S):F},S}function mi(t){return ye(vt,t)}function ki(t){return ye(Nt,t)}const yi=Math.PI/180,gi=180/Math.PI,wt=18,ge=.96422,pe=1,ve=.82521,Te=4/29,ct=6/29,be=3*ct*ct,pi=ct*ct*ct;function xe(t){if(t instanceof Z)return new Z(t.l,t.a,t.b,t.opacity);if(t instanceof et)return we(t);t instanceof fe||(t=ai(t));var e=$t(t.r),n=$t(t.g),s=$t(t.b),a=At((.2225045*e+.7168786*n+.0606169*s)/pe),f,y;return e===n&&n===s?f=y=a:(f=At((.4360747*e+.3850649*n+.1430804*s)/ge),y=At((.0139322*e+.0971045*n+.7141733*s)/ve)),new Z(116*a-16,500*(f-a),200*(a-y),t.opacity)}function vi(t,e,n,s){return arguments.length===1?xe(t):new Z(t,e,n,s??1)}function Z(t,e,n,s){this.l=+t,this.a=+e,this.b=+n,this.opacity=+s}he(Z,vi,me(ke,{brighter(t){return new Z(this.l+wt*(t??1),this.a,this.b,this.opacity)},darker(t){return new Z(this.l-wt*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return e=ge*Ft(e),t=pe*Ft(t),n=ve*Ft(n),new fe(Lt(3.1338561*e-1.6168667*t-.4906146*n),Lt(-.9787684*e+1.9161415*t+.033454*n),Lt(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}}));function At(t){return t>pi?Math.pow(t,1/3):t/be+Te}function Ft(t){return t>ct?t*t*t:be*(t-Te)}function Lt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function $t(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Ti(t){if(t instanceof et)return new et(t.h,t.c,t.l,t.opacity);if(t instanceof Z||(t=xe(t)),t.a===0&&t.b===0)return new et(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*gi;return new et(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Yt(t,e,n,s){return arguments.length===1?Ti(t):new et(t,e,n,s??1)}function et(t,e,n,s){this.h=+t,this.c=+e,this.l=+n,this.opacity=+s}function we(t){if(isNaN(t.h))return new Z(t.l,0,0,t.opacity);var e=t.h*yi;return new Z(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}he(et,Yt,me(ke,{brighter(t){return new et(this.h,this.c,this.l+wt*(t??1),this.opacity)},darker(t){return new et(this.h,this.c,this.l-wt*(t??1),this.opacity)},rgb(){return we(this).rgb()}}));function bi(t){return function(e,n){var s=t((e=Yt(e)).h,(n=Yt(n)).h),a=It(e.c,n.c),f=It(e.l,n.l),y=It(e.opacity,n.opacity);return function(C){return e.h=s(C),e.c=a(C),e.l=f(C),e.opacity=y(C),e+""}}}const xi=bi(oi);var Tt={exports:{}},wi=Tt.exports,ce;function _i(){return ce||(ce=1,(function(t,e){(function(n,s){t.exports=s()})(wi,(function(){var n,s,a=1e3,f=6e4,y=36e5,C=864e5,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O=31536e6,I=2628e6,N=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,S={years:O,months:I,days:C,hours:y,minutes:f,seconds:a,milliseconds:1,weeks:6048e5},w=function(E){return E instanceof B},Y=function(E,p,d){return new B(E,d,p.$l)},D=function(E){return s.p(E)+"s"},G=function(E){return E<0},P=function(E){return G(E)?Math.ceil(E):Math.floor(E)},X=function(E){return Math.abs(E)},R=function(E,p){return E?G(E)?{negative:!0,format:""+X(E)+p}:{negative:!1,format:""+E+p}:{negative:!1,format:""}},B=(function(){function E(d,u,v){var T=this;if(this.$d={},this.$l=v,d===void 0&&(this.$ms=0,this.parseFromMilliseconds()),u)return Y(d*S[D(u)],this);if(typeof d=="number")return this.$ms=d,this.parseFromMilliseconds(),this;if(typeof d=="object")return Object.keys(d).forEach((function(o){T.$d[D(o)]=d[o]})),this.calMilliseconds(),this;if(typeof d=="string"){var g=d.match(N);if(g){var m=g.slice(2).map((function(o){return o!=null?Number(o):0}));return this.$d.years=m[0],this.$d.months=m[1],this.$d.weeks=m[2],this.$d.days=m[3],this.$d.hours=m[4],this.$d.minutes=m[5],this.$d.seconds=m[6],this.calMilliseconds(),this}}return this}var p=E.prototype;return p.calMilliseconds=function(){var d=this;this.$ms=Object.keys(this.$d).reduce((function(u,v){return u+(d.$d[v]||0)*S[v]}),0)},p.parseFromMilliseconds=function(){var d=this.$ms;this.$d.years=P(d/O),d%=O,this.$d.months=P(d/I),d%=I,this.$d.days=P(d/C),d%=C,this.$d.hours=P(d/y),d%=y,this.$d.minutes=P(d/f),d%=f,this.$d.seconds=P(d/a),d%=a,this.$d.milliseconds=d},p.toISOString=function(){var d=R(this.$d.years,"Y"),u=R(this.$d.months,"M"),v=+this.$d.days||0;this.$d.weeks&&(v+=7*this.$d.weeks);var T=R(v,"D"),g=R(this.$d.hours,"H"),m=R(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var l=R(o,"S"),k=d.negative||u.negative||T.negative||g.negative||m.negative||l.negative,h=g.format||m.format||l.format?"T":"",b=(k?"-":"")+"P"+d.format+u.format+T.format+h+g.format+m.format+l.format;return b==="P"||b==="-P"?"P0D":b},p.toJSON=function(){return this.toISOString()},p.format=function(d){var u=d||"YYYY-MM-DDTHH:mm:ss",v={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return u.replace(F,(function(T,g){return g||String(v[T])}))},p.as=function(d){return this.$ms/S[D(d)]},p.get=function(d){var u=this.$ms,v=D(d);return v==="milliseconds"?u%=1e3:u=v==="weeks"?P(u/S[v]):this.$d[v],u||0},p.add=function(d,u,v){var T;return T=u?d*S[D(u)]:w(d)?d.$ms:Y(d,this).$ms,Y(this.$ms+T*(v?-1:1),this)},p.subtract=function(d,u){return this.add(d,u,!0)},p.locale=function(d){var u=this.clone();return u.$l=d,u},p.clone=function(){return Y(this.$ms,this)},p.humanize=function(d){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!d)},p.valueOf=function(){return this.asMilliseconds()},p.milliseconds=function(){return this.get("milliseconds")},p.asMilliseconds=function(){return this.as("milliseconds")},p.seconds=function(){return this.get("seconds")},p.asSeconds=function(){return this.as("seconds")},p.minutes=function(){return this.get("minutes")},p.asMinutes=function(){return this.as("minutes")},p.hours=function(){return this.get("hours")},p.asHours=function(){return this.as("hours")},p.days=function(){return this.get("days")},p.asDays=function(){return this.as("days")},p.weeks=function(){return this.get("weeks")},p.asWeeks=function(){return this.as("weeks")},p.months=function(){return this.get("months")},p.asMonths=function(){return this.as("months")},p.years=function(){return this.get("years")},p.asYears=function(){return this.as("years")},E})(),H=function(E,p,d){return E.add(p.years()*d,"y").add(p.months()*d,"M").add(p.days()*d,"d").add(p.hours()*d,"h").add(p.minutes()*d,"m").add(p.seconds()*d,"s").add(p.milliseconds()*d,"ms")};return function(E,p,d){n=d,s=d().$utils(),d.duration=function(T,g){var m=d.locale();return Y(T,{$l:m},g)},d.isDuration=w;var u=p.prototype.add,v=p.prototype.subtract;p.prototype.add=function(T,g){return w(T)?H(this,T,1):u.bind(this)(T,g)},p.prototype.subtract=function(T,g){return w(T)?H(this,T,-1):v.bind(this)(T,g)}}}))})(Tt)),Tt.exports}var Di=_i();const Ci=Ue(Di);var Vt=(function(){var t=c(function(m,o,l,k){for(l=l||{},k=m.length;k--;l[m[k]]=o);return l},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],s=[1,27],a=[1,28],f=[1,29],y=[1,30],C=[1,31],F=[1,32],O=[1,33],I=[1,34],N=[1,9],S=[1,10],w=[1,11],Y=[1,12],D=[1,13],G=[1,14],P=[1,15],X=[1,16],R=[1,19],B=[1,20],H=[1,21],E=[1,22],p=[1,23],d=[1,25],u=[1,35],v={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(o,l,k,h,b,r,$){var i=r.length-1;switch(b){case 1:return r[i-1];case 2:this.$=[];break;case 3:r[i-1].push(r[i]),this.$=r[i-1];break;case 4:case 5:this.$=r[i];break;case 6:case 7:this.$=[];break;case 8:h.setWeekday("monday");break;case 9:h.setWeekday("tuesday");break;case 10:h.setWeekday("wednesday");break;case 11:h.setWeekday("thursday");break;case 12:h.setWeekday("friday");break;case 13:h.setWeekday("saturday");break;case 14:h.setWeekday("sunday");break;case 15:h.setWeekend("friday");break;case 16:h.setWeekend("saturday");break;case 17:h.setDateFormat(r[i].substr(11)),this.$=r[i].substr(11);break;case 18:h.enableInclusiveEndDates(),this.$=r[i].substr(18);break;case 19:h.TopAxis(),this.$=r[i].substr(8);break;case 20:h.setAxisFormat(r[i].substr(11)),this.$=r[i].substr(11);break;case 21:h.setTickInterval(r[i].substr(13)),this.$=r[i].substr(13);break;case 22:h.setExcludes(r[i].substr(9)),this.$=r[i].substr(9);break;case 23:h.setIncludes(r[i].substr(9)),this.$=r[i].substr(9);break;case 24:h.setTodayMarker(r[i].substr(12)),this.$=r[i].substr(12);break;case 27:h.setDiagramTitle(r[i].substr(6)),this.$=r[i].substr(6);break;case 28:this.$=r[i].trim(),h.setAccTitle(this.$);break;case 29:case 30:this.$=r[i].trim(),h.setAccDescription(this.$);break;case 31:h.addSection(r[i].substr(8)),this.$=r[i].substr(8);break;case 33:h.addTask(r[i-1],r[i]),this.$="task";break;case 34:this.$=r[i-1],h.setClickEvent(r[i-1],r[i],null);break;case 35:this.$=r[i-2],h.setClickEvent(r[i-2],r[i-1],r[i]);break;case 36:this.$=r[i-2],h.setClickEvent(r[i-2],r[i-1],null),h.setLink(r[i-2],r[i]);break;case 37:this.$=r[i-3],h.setClickEvent(r[i-3],r[i-2],r[i-1]),h.setLink(r[i-3],r[i]);break;case 38:this.$=r[i-2],h.setClickEvent(r[i-2],r[i],null),h.setLink(r[i-2],r[i-1]);break;case 39:this.$=r[i-3],h.setClickEvent(r[i-3],r[i-1],r[i]),h.setLink(r[i-3],r[i-2]);break;case 40:this.$=r[i-1],h.setLink(r[i-1],r[i]);break;case 41:case 47:this.$=r[i-1]+" "+r[i];break;case 42:case 43:case 45:this.$=r[i-2]+" "+r[i-1]+" "+r[i];break;case 44:case 46:this.$=r[i-3]+" "+r[i-2]+" "+r[i-1]+" "+r[i];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:s,14:a,15:f,16:y,17:C,18:F,19:18,20:O,21:I,22:N,23:S,24:w,25:Y,26:D,27:G,28:P,29:X,30:R,31:B,33:H,35:E,36:p,37:24,38:d,40:u},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:n,13:s,14:a,15:f,16:y,17:C,18:F,19:18,20:O,21:I,22:N,23:S,24:w,25:Y,26:D,27:G,28:P,29:X,30:R,31:B,33:H,35:E,36:p,37:24,38:d,40:u},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:c(function(o,l){if(l.recoverable)this.trace(o);else{var k=new Error(o);throw k.hash=l,k}},"parseError"),parse:c(function(o){var l=this,k=[0],h=[],b=[null],r=[],$=this.table,i="",x=0,L=0,A=2,M=1,z=r.slice.call(arguments,1),_=Object.create(this.lexer),J={yy:{}};for(var dt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,dt)&&(J.yy[dt]=this.yy[dt]);_.setInput(o,J.yy),J.yy.lexer=_,J.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var Ct=_.yylloc;r.push(Ct);var Fe=_.options&&_.options.ranges;typeof J.yy.parseError=="function"?this.parseError=J.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Le(j){k.length=k.length-2*j,b.length=b.length-j,r.length=r.length-j}c(Le,"popStack");function Jt(){var j;return j=h.pop()||_.lex()||M,typeof j!="number"&&(j instanceof Array&&(h=j,j=h.pop()),j=l.symbols_[j]||j),j}c(Jt,"lex");for(var q,it,U,St,rt={},kt,Q,Qt,yt;;){if(it=k[k.length-1],this.defaultActions[it]?U=this.defaultActions[it]:((q===null||typeof q>"u")&&(q=Jt()),U=$[it]&&$[it][q]),typeof U>"u"||!U.length||!U[0]){var Et="";yt=[];for(kt in $[it])this.terminals_[kt]&&kt>A&&yt.push("'"+this.terminals_[kt]+"'");_.showPosition?Et="Parse error on line "+(x+1)+`:
`+_.showPosition()+`
Expecting `+yt.join(", ")+", got '"+(this.terminals_[q]||q)+"'":Et="Parse error on line "+(x+1)+": Unexpected "+(q==M?"end of input":"'"+(this.terminals_[q]||q)+"'"),this.parseError(Et,{text:_.match,token:this.terminals_[q]||q,line:_.yylineno,loc:Ct,expected:yt})}if(U[0]instanceof Array&&U.length>1)throw new Error("Parse Error: multiple actions possible at state: "+it+", token: "+q);switch(U[0]){case 1:k.push(q),b.push(_.yytext),r.push(_.yylloc),k.push(U[1]),q=null,L=_.yyleng,i=_.yytext,x=_.yylineno,Ct=_.yylloc;break;case 2:if(Q=this.productions_[U[1]][1],rt.$=b[b.length-Q],rt._$={first_line:r[r.length-(Q||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(Q||1)].first_column,last_column:r[r.length-1].last_column},Fe&&(rt._$.range=[r[r.length-(Q||1)].range[0],r[r.length-1].range[1]]),St=this.performAction.apply(rt,[i,L,x,J.yy,U[1],b,r].concat(z)),typeof St<"u")return St;Q&&(k=k.slice(0,-1*Q*2),b=b.slice(0,-1*Q),r=r.slice(0,-1*Q)),k.push(this.productions_[U[1]][0]),b.push(rt.$),r.push(rt._$),Qt=$[k[k.length-2]][k[k.length-1]],k.push(Qt);break;case 3:return!0}}return!0},"parse")},T=(function(){var m={EOF:1,parseError:c(function(l,k){if(this.yy.parser)this.yy.parser.parseError(l,k);else throw new Error(l)},"parseError"),setInput:c(function(o,l){return this.yy=l||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var l=o.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:c(function(o){var l=o.length,k=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var h=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),k.length-1&&(this.yylineno-=k.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:k?(k.length===h.length?this.yylloc.first_column:0)+h[h.length-k.length].length-k[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(o){this.unput(this.match.slice(o))},"less"),pastInput:c(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var o=this.pastInput(),l=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:c(function(o,l){var k,h,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),h=o[0].match(/(?:\r\n?|\n).*/g),h&&(this.yylineno+=h.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:h?h[h.length-1].length-h[h.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],k=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),k)return k;if(this._backtrack){for(var r in b)this[r]=b[r];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,l,k,h;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),r=0;r<b.length;r++)if(k=this._input.match(this.rules[b[r]]),k&&(!l||k[0].length>l[0].length)){if(l=k,h=r,this.options.backtrack_lexer){if(o=this.test_match(k,b[r]),o!==!1)return o;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(o=this.test_match(l,b[h]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var l=this.next();return l||this.lex()},"lex"),begin:c(function(l){this.conditionStack.push(l)},"begin"),popState:c(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:c(function(l){this.begin(l)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(l,k,h,b){switch(h){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return m})();v.lexer=T;function g(){this.yy={}}return c(g,"Parser"),g.prototype=v,v.Parser=g,new g})();Vt.parser=Vt;var Si=Vt;W.extend(qe);W.extend(je);W.extend(Xe);var le={friday:5,saturday:6},K="",zt="",Bt=void 0,Ht="",ft=[],ht=[],qt=new Map,jt=[],_t=[],ut="",Xt="",_e=["active","done","crit","milestone","vert"],Ut=[],at="",mt=!1,Gt=!1,Kt="sunday",Dt="saturday",Pt=0,Ei=c(function(){jt=[],_t=[],ut="",Ut=[],bt=0,Wt=void 0,xt=void 0,V=[],K="",zt="",Xt="",Bt=void 0,Ht="",ft=[],ht=[],mt=!1,Gt=!1,Pt=0,qt=new Map,at="",Be(),Kt="sunday",Dt="saturday"},"clear"),Ii=c(function(t){at=t},"setDiagramId"),Mi=c(function(t){zt=t},"setAxisFormat"),Ai=c(function(){return zt},"getAxisFormat"),Fi=c(function(t){Bt=t},"setTickInterval"),Li=c(function(){return Bt},"getTickInterval"),$i=c(function(t){Ht=t},"setTodayMarker"),Oi=c(function(){return Ht},"getTodayMarker"),Ni=c(function(t){K=t},"setDateFormat"),Yi=c(function(){mt=!0},"enableInclusiveEndDates"),Vi=c(function(){return mt},"endDatesAreInclusive"),Pi=c(function(){Gt=!0},"enableTopAxis"),Ri=c(function(){return Gt},"topAxisEnabled"),Wi=c(function(t){Xt=t},"setDisplayMode"),zi=c(function(){return Xt},"getDisplayMode"),Bi=c(function(){return K},"getDateFormat"),Hi=c(function(t){ft=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),qi=c(function(){return ft},"getIncludes"),ji=c(function(t){ht=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),Xi=c(function(){return ht},"getExcludes"),Ui=c(function(){return qt},"getLinks"),Gi=c(function(t){ut=t,jt.push(t)},"addSection"),Ki=c(function(){return jt},"getSections"),Zi=c(function(){let t=ue();const e=10;let n=0;for(;!t&&n<e;)t=ue(),n++;return _t=V,_t},"getTasks"),De=c(function(t,e,n,s){const a=t.format(e.trim()),f=t.format("YYYY-MM-DD");return s.includes(a)||s.includes(f)?!1:n.includes("weekends")&&(t.isoWeekday()===le[Dt]||t.isoWeekday()===le[Dt]+1)||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(a)||n.includes(f)},"isInvalidDate"),Ji=c(function(t){Kt=t},"setWeekday"),Qi=c(function(){return Kt},"getWeekday"),tn=c(function(t){Dt=t},"setWeekend"),Ce=c(function(t,e,n,s){if(!n.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=W(t.startTime):a=W(t.startTime,e,!0),a=a.add(1,"d");let f;t.endTime instanceof Date?f=W(t.endTime):f=W(t.endTime,e,!0);const[y,C]=en(a,f,e,n,s);t.endTime=y.toDate(),t.renderEndTime=C},"checkTaskDates"),en=c(function(t,e,n,s,a){let f=!1,y=null;for(;t<=e;)f||(y=e.toDate()),f=De(t,n,s,a),f&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,y]},"fixTaskDates"),Rt=c(function(t,e,n){if(n=n.trim(),c(C=>{const F=C.trim();return F==="x"||F==="X"},"isTimestampFormat")(e)&&/^\d+$/.test(n))return new Date(Number(n));const f=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(f!==null){let C=null;for(const O of f.groups.ids.split(" ")){let I=st(O);I!==void 0&&(!C||I.endTime>C.endTime)&&(C=I)}if(C)return C.endTime;const F=new Date;return F.setHours(0,0,0,0),F}let y=W(n,e.trim(),!0);if(y.isValid())return y.toDate();{nt.debug("Invalid date:"+n),nt.debug("With date format:"+e.trim());const C=new Date(n);if(C===void 0||isNaN(C.getTime())||C.getFullYear()<-1e4||C.getFullYear()>1e4)throw new Error("Invalid date:"+n);return C}},"getStartDate"),Se=c(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),Ee=c(function(t,e,n,s=!1){n=n.trim();const f=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(f!==null){let I=null;for(const S of f.groups.ids.split(" ")){let w=st(S);w!==void 0&&(!I||w.startTime<I.startTime)&&(I=w)}if(I)return I.startTime;const N=new Date;return N.setHours(0,0,0,0),N}let y=W(n,e.trim(),!0);if(y.isValid())return s&&(y=y.add(1,"d")),y.toDate();let C=W(t);const[F,O]=Se(n);if(!Number.isNaN(F)){const I=C.add(F,O);I.isValid()&&(C=I)}return C.toDate()},"getEndDate"),bt=0,lt=c(function(t){return t===void 0?(bt=bt+1,"task"+bt):t},"parseId"),nn=c(function(t,e){let n;e.substr(0,1)===":"?n=e.substr(1,e.length):n=e;const s=n.split(","),a={};Zt(s,a,_e);for(let y=0;y<s.length;y++)s[y]=s[y].trim();let f="";switch(s.length){case 1:a.id=lt(),a.startTime=t.endTime,f=s[0];break;case 2:a.id=lt(),a.startTime=Rt(void 0,K,s[0]),f=s[1];break;case 3:a.id=lt(s[0]),a.startTime=Rt(void 0,K,s[1]),f=s[2];break}return f&&(a.endTime=Ee(a.startTime,K,f,mt),a.manualEndTime=W(f,"YYYY-MM-DD",!0).isValid(),Ce(a,K,ht,ft)),a},"compileData"),sn=c(function(t,e){let n;e.substr(0,1)===":"?n=e.substr(1,e.length):n=e;const s=n.split(","),a={};Zt(s,a,_e);for(let f=0;f<s.length;f++)s[f]=s[f].trim();switch(s.length){case 1:a.id=lt(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:s[0]};break;case 2:a.id=lt(),a.startTime={type:"getStartDate",startData:s[0]},a.endTime={data:s[1]};break;case 3:a.id=lt(s[0]),a.startTime={type:"getStartDate",startData:s[1]},a.endTime={data:s[2]};break}return a},"parseData"),Wt,xt,V=[],Ie={},rn=c(function(t,e){const n={section:ut,type:ut,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},s=sn(xt,e);n.raw.startTime=s.startTime,n.raw.endTime=s.endTime,n.id=s.id,n.prevTaskId=xt,n.active=s.active,n.done=s.done,n.crit=s.crit,n.milestone=s.milestone,n.vert=s.vert,n.order=Pt,Pt++;const a=V.push(n);xt=n.id,Ie[n.id]=a-1},"addTask"),st=c(function(t){const e=Ie[t];return V[e]},"findTaskById"),an=c(function(t,e){const n={section:ut,type:ut,description:t,task:t,classes:[]},s=nn(Wt,e);n.startTime=s.startTime,n.endTime=s.endTime,n.id=s.id,n.active=s.active,n.done=s.done,n.crit=s.crit,n.milestone=s.milestone,n.vert=s.vert,Wt=n,_t.push(n)},"addTaskOrg"),ue=c(function(){const t=c(function(n){const s=V[n];let a="";switch(V[n].raw.startTime.type){case"prevTaskEnd":{const f=st(s.prevTaskId);s.startTime=f.endTime;break}case"getStartDate":a=Rt(void 0,K,V[n].raw.startTime.startData),a&&(V[n].startTime=a);break}return V[n].startTime&&(V[n].endTime=Ee(V[n].startTime,K,V[n].raw.endTime.data,mt),V[n].endTime&&(V[n].processed=!0,V[n].manualEndTime=W(V[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Ce(V[n],K,ht,ft))),V[n].processed},"compileTask");let e=!0;for(const[n,s]of V.entries())t(n),e=e&&s.processed;return e},"compileTasks"),on=c(function(t,e){let n=e;ot().securityLevel!=="loose"&&(n=ze.sanitizeUrl(e)),t.split(",").forEach(function(s){st(s)!==void 0&&(Ae(s,()=>{window.open(n,"_self")}),qt.set(s,n))}),Me(t,"clickable")},"setLink"),Me=c(function(t,e){t.split(",").forEach(function(n){let s=st(n);s!==void 0&&s.classes.push(e)})},"setClass"),cn=c(function(t,e,n){if(ot().securityLevel!=="loose"||e===void 0)return;let s=[];if(typeof n=="string"){s=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<s.length;f++){let y=s[f].trim();y.startsWith('"')&&y.endsWith('"')&&(y=y.substr(1,y.length-2)),s[f]=y}}s.length===0&&s.push(t),st(t)!==void 0&&Ae(t,()=>{He.runFunc(e,...s)})},"setClickFun"),Ae=c(function(t,e){Ut.push(function(){const n=at?`${at}-${t}`:t,s=document.querySelector(`[id="${n}"]`);s!==null&&s.addEventListener("click",function(){e()})},function(){const n=at?`${at}-${t}`:t,s=document.querySelector(`[id="${n}-text"]`);s!==null&&s.addEventListener("click",function(){e()})})},"pushFun"),ln=c(function(t,e,n){t.split(",").forEach(function(s){cn(s,e,n)}),Me(t,"clickable")},"setClickEvent"),un=c(function(t){Ut.forEach(function(e){e(t)})},"bindFunctions"),dn={getConfig:c(()=>ot().gantt,"getConfig"),clear:Ei,setDateFormat:Ni,getDateFormat:Bi,enableInclusiveEndDates:Yi,endDatesAreInclusive:Vi,enableTopAxis:Pi,topAxisEnabled:Ri,setAxisFormat:Mi,getAxisFormat:Ai,setTickInterval:Fi,getTickInterval:Li,setTodayMarker:$i,getTodayMarker:Oi,setAccTitle:Pe,getAccTitle:Ve,setDiagramTitle:Ye,getDiagramTitle:Ne,setDiagramId:Ii,setDisplayMode:Wi,getDisplayMode:zi,setAccDescription:Oe,getAccDescription:$e,addSection:Gi,getSections:Ki,getTasks:Zi,addTask:rn,findTaskById:st,addTaskOrg:an,setIncludes:Hi,getIncludes:qi,setExcludes:ji,getExcludes:Xi,setClickEvent:ln,setLink:on,getLinks:Ui,bindFunctions:un,parseDuration:Se,isInvalidDate:De,setWeekday:Ji,getWeekday:Qi,setWeekend:tn};function Zt(t,e,n){let s=!0;for(;s;)s=!1,n.forEach(function(a){const f="^\\s*"+a+"\\s*$",y=new RegExp(f);t[0].match(y)&&(e[a]=!0,t.shift(1),s=!0)})}c(Zt,"getTaskTags");W.extend(Ci);var fn=c(function(){nt.debug("Something is calling, setConf, remove the call")},"setConf"),de={monday:si,tuesday:ni,wednesday:ii,thursday:ei,friday:ti,saturday:Qe,sunday:Je},hn=c((t,e)=>{let n=[...t].map(()=>-1/0),s=[...t].sort((f,y)=>f.startTime-y.startTime||f.order-y.order),a=0;for(const f of s)for(let y=0;y<n.length;y++)if(f.startTime>=n[y]){n[y]=f.endTime,f.order=y+e,y>a&&(a=y);break}return a},"getMaxIntersections"),tt,Ot=1e4,mn=c(function(t,e,n,s){const a=ot().gantt;s.db.setDiagramId(e);const f=ot().securityLevel;let y;f==="sandbox"&&(y=gt("#i"+e));const C=f==="sandbox"?gt(y.nodes()[0].contentDocument.body):gt("body"),F=f==="sandbox"?y.nodes()[0].contentDocument:document,O=F.getElementById(e);tt=O.parentElement.offsetWidth,tt===void 0&&(tt=1200),a.useWidth!==void 0&&(tt=a.useWidth);const I=s.db.getTasks();let N=[];for(const u of I)N.push(u.type);N=d(N);const S={};let w=2*a.topPadding;if(s.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const u={};for(const T of I)u[T.section]===void 0?u[T.section]=[T]:u[T.section].push(T);let v=0;for(const T of Object.keys(u)){const g=hn(u[T],v)+1;v+=g,w+=g*(a.barHeight+a.barGap),S[T]=g}}else{w+=I.length*(a.barHeight+a.barGap);for(const u of N)S[u]=I.filter(v=>v.type===u).length}O.setAttribute("viewBox","0 0 "+tt+" "+w);const Y=C.select(`[id="${e}"]`),D=Ge().domain([Ke(I,function(u){return u.startTime}),Ze(I,function(u){return u.endTime})]).rangeRound([0,tt-a.leftPadding-a.rightPadding]);function G(u,v){const T=u.startTime,g=v.startTime;let m=0;return T>g?m=1:T<g&&(m=-1),m}c(G,"taskCompare"),I.sort(G),P(I,tt,w),Re(Y,w,tt,a.useMaxWidth),Y.append("text").text(s.db.getDiagramTitle()).attr("x",tt/2).attr("y",a.titleTopMargin).attr("class","titleText");function P(u,v,T){const g=a.barHeight,m=g+a.barGap,o=a.topPadding,l=a.leftPadding,k=ri().domain([0,N.length]).range(["#00B9FA","#F95002"]).interpolate(xi);R(m,o,l,v,T,u,s.db.getExcludes(),s.db.getIncludes()),H(l,o,v,T),X(u,m,o,l,g,k,v),E(m,o),p(l,o,v,T)}c(P,"makeGantt");function X(u,v,T,g,m,o,l){u.sort((i,x)=>i.vert===x.vert?0:i.vert?1:-1);const h=[...new Set(u.map(i=>i.order))].map(i=>u.find(x=>x.order===i));Y.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",function(i,x){return x=i.order,x*v+T-2}).attr("width",function(){return l-a.rightPadding/2}).attr("height",v).attr("class",function(i){for(const[x,L]of N.entries())if(i.type===L)return"section section"+x%a.numberSectionStyles;return"section section0"}).enter();const b=Y.append("g").selectAll("rect").data(u).enter(),r=s.db.getLinks();if(b.append("rect").attr("id",function(i){return e+"-"+i.id}).attr("rx",3).attr("ry",3).attr("x",function(i){return i.milestone?D(i.startTime)+g+.5*(D(i.endTime)-D(i.startTime))-.5*m:D(i.startTime)+g}).attr("y",function(i,x){return x=i.order,i.vert?a.gridLineStartPadding:x*v+T}).attr("width",function(i){return i.milestone?m:i.vert?.08*m:D(i.renderEndTime||i.endTime)-D(i.startTime)}).attr("height",function(i){return i.vert?I.length*(a.barHeight+a.barGap)+a.barHeight*2:m}).attr("transform-origin",function(i,x){return x=i.order,(D(i.startTime)+g+.5*(D(i.endTime)-D(i.startTime))).toString()+"px "+(x*v+T+.5*m).toString()+"px"}).attr("class",function(i){const x="task";let L="";i.classes.length>0&&(L=i.classes.join(" "));let A=0;for(const[z,_]of N.entries())i.type===_&&(A=z%a.numberSectionStyles);let M="";return i.active?i.crit?M+=" activeCrit":M=" active":i.done?i.crit?M=" doneCrit":M=" done":i.crit&&(M+=" crit"),M.length===0&&(M=" task"),i.milestone&&(M=" milestone "+M),i.vert&&(M=" vert "+M),M+=A,M+=" "+L,x+M}),b.append("text").attr("id",function(i){return e+"-"+i.id+"-text"}).text(function(i){return i.task}).attr("font-size",a.fontSize).attr("x",function(i){let x=D(i.startTime),L=D(i.renderEndTime||i.endTime);if(i.milestone&&(x+=.5*(D(i.endTime)-D(i.startTime))-.5*m,L=x+m),i.vert)return D(i.startTime)+g;const A=this.getBBox().width;return A>L-x?L+A+1.5*a.leftPadding>l?x+g-5:L+g+5:(L-x)/2+x+g}).attr("y",function(i,x){return i.vert?a.gridLineStartPadding+I.length*(a.barHeight+a.barGap)+60:(x=i.order,x*v+a.barHeight/2+(a.fontSize/2-2)+T)}).attr("text-height",m).attr("class",function(i){const x=D(i.startTime);let L=D(i.endTime);i.milestone&&(L=x+m);const A=this.getBBox().width;let M="";i.classes.length>0&&(M=i.classes.join(" "));let z=0;for(const[J,dt]of N.entries())i.type===dt&&(z=J%a.numberSectionStyles);let _="";return i.active&&(i.crit?_="activeCritText"+z:_="activeText"+z),i.done?i.crit?_=_+" doneCritText"+z:_=_+" doneText"+z:i.crit&&(_=_+" critText"+z),i.milestone&&(_+=" milestoneText"),i.vert&&(_+=" vertText"),A>L-x?L+A+1.5*a.leftPadding>l?M+" taskTextOutsideLeft taskTextOutside"+z+" "+_:M+" taskTextOutsideRight taskTextOutside"+z+" "+_+" width-"+A:M+" taskText taskText"+z+" "+_+" width-"+A}),ot().securityLevel==="sandbox"){let i;i=gt("#i"+e);const x=i.nodes()[0].contentDocument;b.filter(function(L){return r.has(L.id)}).each(function(L){var A=x.querySelector("#"+CSS.escape(e+"-"+L.id)),M=x.querySelector("#"+CSS.escape(e+"-"+L.id+"-text"));const z=A.parentNode;var _=x.createElement("a");_.setAttribute("xlink:href",r.get(L.id)),_.setAttribute("target","_top"),z.appendChild(_),_.appendChild(A),_.appendChild(M)})}}c(X,"drawRects");function R(u,v,T,g,m,o,l,k){if(l.length===0&&k.length===0)return;let h,b;for(const{startTime:A,endTime:M}of o)(h===void 0||A<h)&&(h=A),(b===void 0||M>b)&&(b=M);if(!h||!b)return;if(W(b).diff(W(h),"year")>5){nt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const r=s.db.getDateFormat(),$=[];let i=null,x=W(h);for(;x.valueOf()<=b;)s.db.isInvalidDate(x,r,l,k)?i?i.end=x:i={start:x,end:x}:i&&($.push(i),i=null),x=x.add(1,"d");Y.append("g").selectAll("rect").data($).enter().append("rect").attr("id",A=>e+"-exclude-"+A.start.format("YYYY-MM-DD")).attr("x",A=>D(A.start.startOf("day"))+T).attr("y",a.gridLineStartPadding).attr("width",A=>D(A.end.endOf("day"))-D(A.start.startOf("day"))).attr("height",m-v-a.gridLineStartPadding).attr("transform-origin",function(A,M){return(D(A.start)+T+.5*(D(A.end)-D(A.start))).toString()+"px "+(M*u+.5*m).toString()+"px"}).attr("class","exclude-range")}c(R,"drawExcludeDays");function B(u,v,T,g){if(T<=0||u>v)return 1/0;const m=v-u,o=W.duration({[g??"day"]:T}).asMilliseconds();return o<=0?1/0:Math.ceil(m/o)}c(B,"getEstimatedTickCount");function H(u,v,T,g){const m=s.db.getDateFormat(),o=s.db.getAxisFormat();let l;o?l=o:m==="D"?l="%d":l=a.axisFormat??"%Y-%m-%d";let k=ki(D).tickSize(-g+v+a.gridLineStartPadding).tickFormat(te(l));const b=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||a.tickInterval);if(b!==null){const r=parseInt(b[1],10);if(isNaN(r)||r<=0)nt.warn(`Invalid tick interval value: "${b[1]}". Skipping custom tick interval.`);else{const $=b[2],i=s.db.getWeekday()||a.weekday,x=D.domain(),L=x[0],A=x[1],M=B(L,A,r,$);if(M>Ot)nt.warn(`The tick interval "${r}${$}" would generate ${M} ticks, which exceeds the maximum allowed (${Ot}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch($){case"millisecond":k.ticks(ae.every(r));break;case"second":k.ticks(re.every(r));break;case"minute":k.ticks(se.every(r));break;case"hour":k.ticks(ne.every(r));break;case"day":k.ticks(ie.every(r));break;case"week":k.ticks(de[i].every(r));break;case"month":k.ticks(ee.every(r));break}}}if(Y.append("g").attr("class","grid").attr("transform","translate("+u+", "+(g-50)+")").call(k).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||a.topAxis){let r=mi(D).tickSize(-g+v+a.gridLineStartPadding).tickFormat(te(l));if(b!==null){const $=parseInt(b[1],10);if(isNaN($)||$<=0)nt.warn(`Invalid tick interval value: "${b[1]}". Skipping custom tick interval.`);else{const i=b[2],x=s.db.getWeekday()||a.weekday,L=D.domain(),A=L[0],M=L[1];if(B(A,M,$,i)<=Ot)switch(i){case"millisecond":r.ticks(ae.every($));break;case"second":r.ticks(re.every($));break;case"minute":r.ticks(se.every($));break;case"hour":r.ticks(ne.every($));break;case"day":r.ticks(ie.every($));break;case"week":r.ticks(de[x].every($));break;case"month":r.ticks(ee.every($));break}}}Y.append("g").attr("class","grid").attr("transform","translate("+u+", "+v+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(H,"makeGrid");function E(u,v){let T=0;const g=Object.keys(S).map(m=>[m,S[m]]);Y.append("g").selectAll("text").data(g).enter().append(function(m){const o=m[0].split(We.lineBreakRegex),l=-(o.length-1)/2,k=F.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("dy",l+"em");for(const[h,b]of o.entries()){const r=F.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttribute("alignment-baseline","central"),r.setAttribute("x","10"),h>0&&r.setAttribute("dy","1em"),r.textContent=b,k.appendChild(r)}return k}).attr("x",10).attr("y",function(m,o){if(o>0)for(let l=0;l<o;l++)return T+=g[o-1][1],m[1]*u/2+T*u+v;else return m[1]*u/2+v}).attr("font-size",a.sectionFontSize).attr("class",function(m){for(const[o,l]of N.entries())if(m[0]===l)return"sectionTitle sectionTitle"+o%a.numberSectionStyles;return"sectionTitle"})}c(E,"vertLabels");function p(u,v,T,g){const m=s.db.getTodayMarker();if(m==="off")return;const o=Y.append("g").attr("class","today"),l=new Date,k=o.append("line");k.attr("x1",D(l)+u).attr("x2",D(l)+u).attr("y1",a.titleTopMargin).attr("y2",g-a.titleTopMargin).attr("class","today"),m!==""&&k.attr("style",m.replace(/,/g,";"))}c(p,"drawToday");function d(u){const v={},T=[];for(let g=0,m=u.length;g<m;++g)Object.prototype.hasOwnProperty.call(v,u[g])||(v[u[g]]=!0,T.push(u[g]));return T}c(d,"checkUnique")},"draw"),kn={setConf:fn,draw:mn},yn=c(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),gn=yn,On={parser:Si,db:dn,renderer:kn,styles:gn};export{On as diagram};
