(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"/7QA":function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return v})),a.d(t,"d",(function(){return y})),a.d(t,"a",(function(){return j.a}));var n,r=a("ODXe"),i=a("uFwe"),l=a("q1tI"),c=new Set,s={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function m(){n||(n={size:{height:0,width:0},screen:"xs"},o(),window.addEventListener("resize",()=>{var e=n;if(o(),e!==n){var t,a=Object(i["a"])(c);try{for(a.s();!(t=a.n()).done;){var r=t.value;r()}}catch(l){a.e(l)}finally{a.f()}}}))}function o(){for(var e,t=window.innerWidth,a=window.innerHeight,r={size:{width:t,height:a}},i=!1,l=0,c=Object.keys(s);l<c.length;l++){var m=c[l];if(e=s[m],t>=e.min&&t<e.max){r.screen=m,i=!0;break}}(i||r.size.width!==n.size.width||r.size.height!==n.size.height)&&(n=r)}function u(){m();var e=Object(l["useState"])(n),t=Object(r["a"])(e,2),a=t[0],i=t[1];return Object(l["useEffect"])(()=>{var e=()=>{i(n)};return c.add(e),()=>{c.delete(e)}},[]),a}var d,f=a("VTBJ"),p=a("Ff2n"),b=a("n+Aq"),h=(a("BXCy"),"__WETRIAL_USEFORMTABLE__");function g(e,t){var a=t.form,n=t.refreshDeps,i=void 0===n?[]:n,c=t.manual,s=t.cacheKey,m=Object(p["a"])(t,["form","refreshDeps","manual","cacheKey"]),o=Object(b["c"])("".concat(h).concat(s)),u=Object(r["a"])(o,2),g=u[0],v=u[1],O=Object(b["b"])(e,Object(f["a"])({formatResult:d},m,{paginated:!0,manual:!0})),j=O.params,y=O.run,w=j[2]||{},E=Object(l["useState"])(w.type||"simple"),F=Object(r["a"])(E,2),x=F[0],k=F[1],D=Object(l["useState"])(w.allFormData||{}),I=Object(r["a"])(D,2),z=I[0],C=I[1];Object(b["d"])(()=>{s&&v({pagination:j[0]||{},type:x,allFormData:z})},[j[0],x,z]);var R=Object(l["useCallback"])(()=>{if(!a)return{};if(a.getFieldInstance){var e=a.getFieldsValue(),t={};return Object.keys(e).forEach(n=>{a.getFieldInstance&&!a.getFieldInstance(n)||(t[n]=e[n])}),t}return a.getFieldsValue(null,()=>!0)},[a]),A=Object(l["useRef"])(a);A.current=a,Object(l["useEffect"])(()=>{if(A.current)if(A.current.getFieldInstance){var e={};Object.keys(z).forEach(t=>{A.current.getFieldInstance&&!A.current.getFieldInstance(t)||(e[t]=z[t])}),A.current.setFieldsValue(e)}else A.current.setFieldsValue(z)},[x]),Object(l["useEffect"])(()=>{if(j.length>0)y(...j);else{if(s&&0===j.length){var e=window.performance&&window.performance.navigation&&(PerformanceNavigation.TYPE_RELOAD===window.performance.navigation.type||PerformanceNavigation.TYPE_BACK_FORWARD===window.performance.navigation.type);if(g&&(g.active||e))return j=[g.pagination||{},g.allFormData,{type:g.type,allFormData:g.allFormData}],k(g.type||x),C(g.allFormData),void y(...j)}c||T()}},[]);var S=Object(l["useCallback"])(()=>{var e=R();C(Object(f["a"])({},z,{},e));var t="simple"===x?"advance":"simple";k(t)},[x,z,R]),T=Object(l["useCallback"])(e=>{(null===e||void 0===e?void 0:e.preventDefault)&&e.preventDefault(),setTimeout(()=>{var e=R(),a=Object(f["a"])({},z,{},e);C(a),y(Object(f["a"])({pageSize:t.defaultPageSize||10},j[0]||{},{current:1}),e,{allFormData:a,type:x})})},[R,y,j,z,x]),V=Object(l["useCallback"])(()=>{a&&a.resetFields(),T()},[a,T]),_=Object(b["a"])(V);return Object(b["d"])(()=>{c||_()},[...i]),Object(f["a"])({},O,{search:{submit:T,type:x,changeType:S,reset:V}})}var v=g,O=a("kRpH"),j=a.n(O);function y(e,t){Object(l["useEffect"])(()=>{var a=j.a.subscribe(e,t);return()=>{j.a.unsubscribe(a)}},[])}},U0sl:function(e,t,a){"use strict";a.r(t);a("g9YV");var n=a("wCAj"),r=a("wx14"),i=(a("+L6B"),a("2/Rp")),l=(a("5NDa"),a("5rEg")),c=(a("y8nQ"),a("Vl3Y")),s=a("ODXe"),m=a("/7QA"),o=a("q1tI"),u=a.n(o),d=a("9kvl"),f=(e,t)=>{console.log(e,t);var a=e.current,n=e.pageSize;return fetch("https://randomuser.me/api?results=55&page=".concat(a,"&size=").concat(n)).then(e=>e.json()).then(e=>({total:e.info.results,list:e.results}))};t["default"]=()=>{var e=c["a"].useForm(),t=Object(s["a"])(e,1),a=t[0],o=Object(m["b"])(f,{defaultPageSize:5,form:a,cacheKey:"antd/use-form-table"}),p=o.tableProps,b=o.params,h=o.search,g=o.sorter,v=b[0]||{},O=v.filters,j=void 0===O?{}:O,y=h||{},w=y.type,E=y.changeType,F=y.submit,x=y.reset,k=[{title:"name",dataIndex:["name","last"]},{title:"email",dataIndex:"email"},{title:"phone",dataIndex:"phone",sorter:!0,sortOrder:"phone"===g.field&&g.order},{title:"gender",dataIndex:"gender",filters:[{text:"male",value:"male"},{text:"female",value:"female"}],filteredValue:j.gender}],D=u.a.createElement("div",{style:{marginBottom:16}},u.a.createElement(c["a"],{form:a,style:{display:"flex",justifyContent:"flex-end"}},u.a.createElement(c["a"].Item,{name:"name"},u.a.createElement(l["a"],{placeholder:"enter name",style:{width:140,marginRight:16}})),"advance"===w&&u.a.createElement(u.a.Fragment,null,u.a.createElement(c["a"].Item,{name:"email"},u.a.createElement(l["a"],{placeholder:"enter email",style:{width:140,marginRight:16}})),u.a.createElement(c["a"].Item,{name:"phone"},u.a.createElement(l["a"],{placeholder:"enter phone",style:{width:140,marginRight:16}}))),u.a.createElement(i["a"],{type:"primary",onClick:F},"\u641c\u7d22"),u.a.createElement(i["a"],{onClick:x,style:{marginLeft:8}},"\u91cd\u7f6e"),u.a.createElement(i["a"],{type:"link",onClick:E},"simple"===w?"\u5c55\u5f00":"\u6298\u53e0")));return u.a.createElement("div",null,u.a.createElement(i["a"],{type:"danger",onClick:()=>{d["c"].push({pathname:"/other",hash:"#useformtable-\u6570\u636e\u7f13\u5b58"})},style:{marginBottom:16}},"\u5207\u6362\u5230demo\u9875\u9762(\u518d\u5207\u6362\u56de\u6765\uff0c\u641c\u7d22\u72b6\u6001\u8fd8\u5728)"),D,u.a.createElement(n["a"],Object(r["a"])({columns:k,rowKey:"email"},p)))}}}]);