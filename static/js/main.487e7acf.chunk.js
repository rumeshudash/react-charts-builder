(this["webpackJsonpreact-charts-builder-example"]=this["webpackJsonpreact-charts-builder-example"]||[]).push([[0],{180:function(e,a,t){e.exports=t(340)},181:function(e,a,t){},335:function(e,a,t){},340:function(e,a,t){"use strict";t.r(a);t(181);var n=t(0),l=t.n(n),r=t(42),c=t.n(r),u=t(18),i=t(342),s=t(343),o=t(347),d=t(43),m=t(44),f=t(73),y=t(86),p=t(60),b=t(348),h=t(87),E=t(351),v=t(169),g=t(71),k=t(349),w=t(88),C=t(352),O=t(174),j=t(157),K=t.n(j),S={pie:["#ffa860","#a8d8a8","#3090c0","#f07848","#60c0a8","#a8c0a8","#ff6060","#f0f0a8","#483030","#786048"],bar:["#ffa860","#a8d8a8","#3090c0","#f07848","#a8c0a8"],line:["#ffa860","#a8d8a8","#3090c0","#f07848","#a8c0a8"],area:["#f07848","#a8d8a8","#3090c0","#a8c0a8","#ffa860"]},N=[{key:"pie",name:"Pie"},{key:"donut",name:"Donut"},{key:"line",name:"Line"},{key:"bar",name:"Bar"},{key:"stackedBar",name:"Stacked Bar"},{key:"column",name:"Column"},{key:"stackedColumn",name:"Stacked Column"},{key:"area",name:"Area"}],V=[{name:"Most popular",charts:["pie","bar","line","area"]},{name:"Pie",charts:["pie","donut"]},{name:"Line",charts:["line"]},{name:"Bar",charts:["bar"]},{name:"Column",charts:["column"]},{name:"Area",charts:["area"]}],D=function(e){var a=e.data,t=e.stacked,n=e.showCartesianGrid,r=void 0===n||n;return l.a.createElement(i.a,{width:"100%",debounce:5,aspect:2},l.a.createElement(s.a,{width:300,height:300,data:a},r&&l.a.createElement(o.a,{vertical:!1,strokeDasharray:"3 3"}),l.a.createElement(d.a,{dataKey:"label"}),l.a.createElement(m.a,null),l.a.createElement(f.a,null),Object.keys(a[0]).length>2?Object.keys(a[0]).map((function(e){return"label"!==e?l.a.createElement(y.a,{key:e,stackId:t?"stacked":e,dataKey:e}):null})):l.a.createElement(y.a,{dataKey:"value",fill:S.bar[0]},a.map((function(e,a){return l.a.createElement(p.a,{key:"cell-"+a,fill:S.bar[a%S.bar.length]})})))))},T=function(e){var a=e.data,t=e.showCartesianGrid,n=void 0===t||t;return l.a.createElement(i.a,{width:"100%",debounce:5,aspect:2},l.a.createElement(b.a,{width:300,height:300,data:a},n&&l.a.createElement(o.a,{vertical:!1,strokeDasharray:"3 3"}),l.a.createElement(d.a,{dataKey:"label"}),l.a.createElement(m.a,null),l.a.createElement(f.a,null),Object.keys(a[0]).map((function(e,a){return"label"!==e?l.a.createElement(h.a,{key:e,type:"monotone",dataKey:e,stroke:S.line[a]}):null}))))},x=function(e){var a=e.data,t=e.data2;return t?l.a.createElement(i.a,{width:"100%",debounce:2,aspect:2},l.a.createElement(E.a,{width:300,height:300},l.a.createElement(v.a,{data:a,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:"60%",fill:S.pie[0]}),l.a.createElement(v.a,{data:t,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:"70%",outerRadius:"80%",fill:S.pie[1],label:!0}),l.a.createElement(f.a,null))):l.a.createElement(i.a,{width:"100%",debounce:5,aspect:2},l.a.createElement(E.a,{width:300,height:300},l.a.createElement(v.a,{data:a,dataKey:"value",nameKey:"label",fill:S.pie[0],label:!0,labelLine:!1},a.map((function(e,a){return l.a.createElement(p.a,{key:"cell-"+a,fill:S.pie[a%S.pie.length]})}))),l.a.createElement(f.a,null),l.a.createElement(g.a,null)))},A=function(e){var a=e.data,t=e.showCartesianGrid,n=void 0===t||t;return l.a.createElement(i.a,{width:"100%",debounce:5,aspect:2},l.a.createElement(k.a,{width:300,height:300,data:a},n&&l.a.createElement(o.a,{strokeDasharray:"3 3"}),l.a.createElement(d.a,{dataKey:"label"}),l.a.createElement(m.a,null),l.a.createElement(f.a,null),Object.keys(a[0]).map((function(e,a){return"label"!==e?l.a.createElement(w.a,{key:"key",type:"monotone",dataKey:e,stroke:S.area[a],fill:S.area[a]}):null}))))},F=function(e){var a=e.data,t=e.def;return l.a.createElement(i.a,{width:"100%",debounce:5,aspect:2},l.a.createElement(C.a,{width:300,height:300,data:a},l.a.createElement(o.a,{strokeDasharray:"3 3"}),l.a.createElement(d.a,{dataKey:"name"}),l.a.createElement(m.a,null),l.a.createElement(f.a,null),l.a.createElement(g.a,null),Object.keys(t).map((function(e,a){return"area"===t[e]?l.a.createElement(w.a,{type:"monotone",dataKey:e,stroke:S.area[a],fill:S.area[a]}):"bar"===t[e]?l.a.createElement(y.a,{dataKey:e,fill:S.bar[a]}):"line"===t[e]?l.a.createElement(h.a,{type:"monotone",dataKey:e,stroke:S.line[a]}):null}))))},B=function(e){return!!e&&Array.isArray(e)},L=function(e){return e.map((function(e){return{label:e,value:e}}))},R=function(e,a){var t=e.filter((function(e){return e.value===a}));return t.length>0?t[0]:null},G=function(e){var a=e.data;return l.a.createElement(i.a,{width:"100%",debounce:5,aspect:2},l.a.createElement(E.a,{width:300,height:300},l.a.createElement(v.a,{data:a,dataKey:"value",nameKey:"label",cx:"50%",cy:"50%",innerRadius:"45%",outerRadius:"80%",fill:S.pie[1],label:!0,labelLine:!1},a.map((function(e,a){return l.a.createElement(p.a,{key:"cell-"+a,fill:S.pie[a%S.pie.length]})}))),l.a.createElement(f.a,null),l.a.createElement(g.a,null)))},P=function(e){var a=e.data,t=e.stacked,n=e.showCartesianGrid,r=void 0===n||n;return l.a.createElement(i.a,{width:"100%",debounce:5,aspect:2},l.a.createElement(s.a,{layout:"vertical",width:300,height:300,data:a},r&&l.a.createElement(o.a,{horizontal:!1,strokeDasharray:"3 3"}),l.a.createElement(d.a,{type:"number"}),l.a.createElement(m.a,{dataKey:"label",type:"category"}),l.a.createElement(f.a,null),Object.keys(a[0]).length>2?Object.keys(a[0]).map((function(e){return"label"!==e?l.a.createElement(y.a,{key:e,stackId:t?"stacked":e,dataKey:e}):null})):l.a.createElement(y.a,{dataKey:"value"},a.map((function(e,a){return l.a.createElement(p.a,{key:"cell-"+a,fill:S.bar[a%S.bar.length]})})))))},I=function(e){var a=e.data,t=e.className;return l.a.createElement("div",{className:"chart-container "+(null!==t&&void 0!==t?t:"")},B(a.data)&&a.data.length>0&&function(e){var a=e.type,t=e.data,n=e.data2,r=e.def;switch(a){case"pie":return l.a.createElement(x,{data:t,data2:n});case"donut":return l.a.createElement(G,{data:t});case"bar":return l.a.createElement(D,{data:t});case"column":return l.a.createElement(P,{data:t});case"bar_stacked":return l.a.createElement(D,{data:t,stacked:!0});case"line":return l.a.createElement(T,{data:t});case"area":return l.a.createElement(A,{data:t});case"composed":return l.a.createElement(F,{data:t,def:r||{}});default:return null}}({type:a.type,data:a.data,data2:a.data2,def:a.def}))},J=[{name:"Labels",type:"collapse",settings:[{key:"label",type:"select",valueType:"string",defaultValue:function(e){return Y(e)[0]||null},isClearable:!1}]},{name:"Values",type:"collapse",settings:[{key:"value",type:"select",label:"Chart Value",valueType:"number",defaultValue:function(e){return z(e)[0]||null},isClearable:!0},{key:"aggregate",label:"Calculation Function",type:"radio"}]}],M=[{name:"X Axis",type:"collapse",settings:[{key:"label",type:"select",valueType:"string",defaultValue:function(e){return Y(e)[0]||null},isClearable:!1}]},{name:"Y Axis",type:"collapse",settings:[{key:"value",type:"select",label:"Chart Value",valueType:"number",defaultValue:function(e){return z(e)[0]||null},isClearable:!0},{key:"aggregate",label:"Calculation Function",type:"radio"}]}],X=[{name:"Y Axis",type:"collapse",settings:[{key:"label",type:"select",valueType:"string",defaultValue:function(e){return Y(e)[0]||null},isClearable:!1}]},{name:"X Axis",type:"collapse",settings:[{key:"value",type:"select",label:"Chart Value",valueType:"number",defaultValue:function(e){return z(e)[0]||null},isClearable:!0},{key:"aggregate",label:"Calculation Function",type:"radio"}]}],Y=function(e){return B(e)?Object.keys(e[0]).filter((function(a){return"string"===typeof e[0][a]})):[]},z=function(e){return B(e)?Object.keys(e[0]).filter((function(a){return"number"===typeof e[0][a]})):[]};function W(){return(W=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var _=function(e){var a=e.title,t=e.children,r=e.collapse,c=e.onChange,u=Object(n.useState)(r||!1),i=u[0],s=u[1];Object(n.useEffect)((function(){"undefined"!==typeof r&&s(r)}),[r]);return l.a.createElement("div",{className:"collapse "+(i?"":"open")},l.a.createElement("div",{className:"title",onClick:function(){"undefined"===typeof r&&s(!i),"function"===typeof c&&c(!i)}},a," ",l.a.createElement("span",{className:"arrow"})),l.a.createElement(K.a,{easing:"ease",duration:500,height:i?0:"auto"},l.a.createElement("div",{className:"controls"},t)))},q=function(e){var a=e.data,t=e.settings,r=e.onSettingChange,c=Object(n.useState)(t||{}),u=c[0],i=c[1],s=Object(n.useState)("chartType"),o=s[0],d=s[1],m=Object(n.useState)([]),f=m[0],y=m[1],p=Object(n.useState)((null===t||void 0===t?void 0:t.chart)||"pie"),b=p[0],h=p[1];Object(n.useEffect)((function(){y(v())}),[b]),Object(n.useEffect)((function(){var e=g();if(t){var a=W({},t);delete a.chart,e=function(e,a){var t={};for(var n in e)t[n]="undefined"===typeof a[n]?e[n]:a[n];return t}(e,a)}i(e)}),[f,b]),Object(n.useEffect)((function(){var e;(e=r)&&"function"===typeof e&&r(u)}),[u]);var E=function(e,a){d(e?null:a)},v=function(){switch(b){case"pie":case"donut":return J;case"line":case"area":case"bar":return M;case"column":return X;default:return[]}},g=function(){var e=function e(a){var t=[];return a.map((function(a){t="collapse"===a.type?[].concat(t,e(a.settings)):[].concat(t,[a])})),t}(f),t={chart:b};return e.map((function(e){var n=e.defaultValue;"function"===typeof e.defaultValue&&(n=e.defaultValue(a)),t[e.key]=n||null})),t},k=function e(t){var r=t.defaultValue;switch("function"===typeof t.defaultValue&&(r=t.defaultValue(a)),t.type){case"collapse":return t.settings.length>0?l.a.createElement(_,{title:t.name,collapse:o!==t.name,onChange:function(e){return E(e,t.name)}},t.settings.map((function(a,r){return l.a.createElement(n.Fragment,{key:t.type+a.key+r},e(a))}))):null;case"select":var c=[];return"string"===t.valueType?c=L(Y(a)):"number"===t.valueType&&(c=L(z(a))),l.a.createElement("div",{className:"setting-controls"},t.label&&l.a.createElement("label",{className:"controls-label"},t.label),l.a.createElement(O.a,{value:R(c,"undefined"===typeof u[t.key]?r:u[t.key]),isClearable:t.isClearable,options:c,onChange:function(e){return function(e,a){var t=W({},u);(function(e){if(e)for(var a in e)return!1;return!0})(t)&&(t=g()),t.hasOwnProperty(e)&&(t[e]=a,i(t))}(t.key,(null===e||void 0===e?void 0:e.value)||null)}}));default:return null}};return l.a.createElement("div",{className:"builder-settings"},l.a.createElement("h1",{className:"settings-header"},"Settings"),l.a.createElement("div",{className:"setting-items"},l.a.createElement(_,{title:"Chart Type",collapse:"chartType"!==o,onChange:function(e){return E(e,"chartType")}},V.map((function(e,a){return l.a.createElement("div",{key:e.name+a,className:"chart-category"},l.a.createElement("div",{className:"category-title"},e.name),l.a.createElement("div",{className:"chart-list"},e.charts.map((function(e,a){var t,n,r=(t="key",n=e,N.find((function(e){return e[t]===n})));return l.a.createElement("div",{key:a+e,className:"chart-item",onClick:function(){return h(e)}},r.name)}))))}))),f.map((function(e,a){return l.a.createElement(n.Fragment,{key:e.name+a},k(e))}))))},H=function(e){var a=e.data,t=e.settingData,r=void 0===t?null:t,c=e.onSettingChange,u=void 0===c?function(){}:c,i=Object(n.useState)({type:"pie",data:[]}),s=i[0],o=i[1],d=Object(n.useState)(r||{}),m=d[0],f=d[1];Object(n.useEffect)((function(){var e={type:m.chart,data:[]};if(Object.keys(m).length>1)switch(m.chart){case"pie":case"donut":e.data=function(e,a,t){return e.map((function(e){return{label:e[a],value:e[t]||0}}))}(a,m.label,m.value);break;case"line":case"area":case"bar":case"column":e.data=function(e,a,t){return e.map((function(e){return{label:e[a],value:e[t]||0}}))}(a,m.label,m.value)}o(e)}),[m]);return l.a.createElement("div",{className:"chart-builder"},l.a.createElement(I,{data:s}),l.a.createElement(q,{data:a,settings:m,onSettingChange:function(e){f(e),u(e)}}))},Q=(t(335),t(173)),U=t.n(Q),Z=(t(339),function(){var e=Object(n.useState)({}),a=Object(u.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement("div",{style:{margin:"10px auto",width:"80vw",border:"1px solid #ccc"}},l.a.createElement(H,{data:[{name:"Sun",date:"1 Dec",sales:2400,profit:400},{name:"Mon",date:"2 Dec",sales:2210,profit:300},{name:"Tue",date:"3 Dec",sales:2290,profit:100},{name:"Wed",date:"3 Dec",sales:2e3,profit:700},{name:"Thu",date:"3 Dec",sales:2181,profit:200},{name:"Fri",date:"4 Dec",sales:2500,profit:900},{name:"Sat",date:"4 Dec",sales:2100,profit:100}],settingData:{chart:"bar",label:"date",value:"sales",aggregate:null},onSettingChange:r})),l.a.createElement("div",{style:{margin:"10px auto",width:"80vw"}},l.a.createElement(U.a,{id:"json-pretty",data:t})))});c.a.render(l.a.createElement(Z,null),document.getElementById("root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.487e7acf.chunk.js.map