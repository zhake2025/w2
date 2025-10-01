import{t as e}from"./ordinal-CZG1S6ze.js";import"./init-CSBJf0Nn.js";import{t}from"./arc-C27ZZlw3.js";import{Ha as n,Ia as r,Pa as i,Qa as a,Qr as o,Ra as s,Va as c,Za as l,Zi as u,do as d,ea as f,eo as p,ha as m,ja as h,ma as g,qr as _,uo as v,za as y}from"./index-CPmokYSd.js";import"./chunk-4KMFLZZN-C46etfC3.js";import"./_baseUniq-C2zgoO4k.js";import"./_basePickBy-D7q3lvPJ.js";import"./clone-Dqs9jcRy.js";import"./chunk-JEIROHC2-DrKjJYx9.js";import"./chunk-BN7GFLIU-D0-8rS13.js";import"./chunk-T44TD3VJ-cuMmY3hj.js";import"./chunk-KMC2YHZD-ZksLSbHW.js";import"./chunk-WFWHJNB7-YweKIIin.js";import"./chunk-WFRQ32O7-CU0o2wn6.js";import"./chunk-XRWGC2XP-BqhvD8Um.js";import{t as b}from"./chunk-4BX2VUAB-Cp8FQCKZ.js";import{t as x}from"./mermaid-parser.core-BsNyYwip.js";function S(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function C(e){return e}function w(){var e=C,t=S,n=null,r=m(0),i=m(g),a=m(0);function o(o){var s,c=(o=f(o)).length,l,u,d=0,p=Array(c),m=Array(c),h=+r.apply(this,arguments),_=Math.min(g,Math.max(-g,i.apply(this,arguments)-h)),v,y=Math.min(Math.abs(_)/c,a.apply(this,arguments)),b=y*(_<0?-1:1),x;for(s=0;s<c;++s)(x=m[p[s]=s]=+e(o[s],s,o))>0&&(d+=x);for(t==null?n!=null&&p.sort(function(e,t){return n(o[e],o[t])}):p.sort(function(e,n){return t(m[e],m[n])}),s=0,u=d?(_-c*b)/d:0;s<c;++s,h=v)l=p[s],x=m[l],v=h+(x>0?x*u:0)+b,m[l]={data:o[l],index:s,value:x,startAngle:h,endAngle:v,padAngle:y};return m}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:m(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:m(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:m(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:m(+e),o):a},o}var T=r.pie,E={sections:new Map,showData:!1,config:T},D=E.sections,O=E.showData,k=structuredClone(T),A={getConfig:v(()=>structuredClone(k),`getConfig`),clear:v(()=>{D=new Map,O=E.showData,h()},`clear`),setDiagramTitle:p,getDiagramTitle:n,setAccTitle:a,getAccTitle:y,setAccDescription:l,getAccDescription:s,addSection:v(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(e)||(D.set(e,t),d.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:v(()=>D,`getSections`),setShowData:v(e=>{O=e},`setShowData`),getShowData:v(()=>O,`getShowData`)},j=v((e,t)=>{b(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),M={parse:v(async e=>{let t=await x(`pie`,e);d.debug(t),j(t,A)},`parse`)},N=v(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),P=v(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return w().value(e=>e.value)(n)},`createPieArcs`),F={parser:M,db:A,renderer:{draw:v((n,r,a,s)=>{d.debug(`rendering pie chart
`+n);let l=s.db,f=c(),p=_(l.getConfig(),f.pie),m=u(r),h=m.append(`g`);h.attr(`transform`,`translate(225,225)`);let{themeVariables:g}=f,[v]=o(g.pieOuterStrokeWidth);v??=2;let y=p.textPosition,b=t().innerRadius(0).outerRadius(185),x=t().innerRadius(185*y).outerRadius(185*y);h.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+v/2).attr(`class`,`pieOuterCircle`);let S=l.getSections(),C=P(S),w=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=e(w);h.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),h.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),h.append(`text`).text(l.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`);let O=[...S.entries()].map(([e,t])=>({label:e,value:t})),k=h.selectAll(`.legend`).data(O).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*O.length/2;return`translate(216,`+(t*22-n)+`)`});k.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),k.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>l.getShowData()?`${e.label} [${e.value}]`:e.label);let A=512+Math.max(...k.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));m.attr(`viewBox`,`0 0 ${A} 450`),i(m,450,A,p.useMaxWidth)},`draw`)},styles:N};export{F as diagram};