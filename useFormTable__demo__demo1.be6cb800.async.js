(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"/7QA":function(e,a,t){"use strict";t.d(a,"d",(function(){return o})),t.d(a,"c",(function(){return E})),t.d(a,"e",(function(){return S})),t.d(a,"a",(function(){return I.a})),t.d(a,"b",(function(){return y}));var n,r=t("tJVT"),c=t("rAM+"),l=t("q1tI"),i=new Set,s={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function m(){n||(n={size:{height:0,width:0},screen:"xs"},u(),window.addEventListener("resize",()=>{var e=n;if(u(),e!==n){var a,t=Object(c["a"])(i);try{for(t.s();!(a=t.n()).done;){var r=a.value;r()}}catch(l){t.e(l)}finally{t.f()}}}))}function u(){for(var e,a=window.innerWidth,t=window.innerHeight,r={size:{width:a,height:t}},c=!1,l=0,i=Object.keys(s);l<i.length;l++){var m=i[l];if(e=s[m],a>=e.min&&a<e.max){r.screen=m,c=!0;break}}(c||r.size.width!==n.size.width||r.size.height!==n.size.height)&&(n=r)}function o(){m();var e=Object(l["useState"])(n),a=Object(r["a"])(e,2),t=a[0],c=a[1];return Object(l["useEffect"])(()=>{var e=()=>{c(n)};return i.add(e),()=>{i.delete(e)}},[]),t}var d,f=t("k1fw"),b=t("PpiC"),p=t("0iz5"),h=(t("DwD6"),t("9XV7")),O=(e,a)=>{var t=Object(h["d"])(e),n=Object(r["a"])(t,2),c=n[0],l=n[1];return Object(h["e"])(()=>{var e=a();l(e)}),[c,l]},j=O,v="__WETRIAL_USEFORMTABLE__";function g(e,a){var t=j("".concat(v).concat(a.cacheKey),()=>N()),n=Object(r["a"])(t,1),c=n[0],i=c||{},s=i.active,m=i.defaultType,u=void 0===m?"simple":m,o=i.defaultParams,O=a.form,g=a.refreshDeps,E=void 0===g?[]:g,y=a.manual,w=a.defaultType,I=void 0===w?a.cacheKey&&s?u:"simple":w,S=a.defaultParams,k=void 0===S?a.cacheKey&&s?o:void 0:S,x=(a.cacheKey,Object(b["a"])(a,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),z=Object(p["a"])(e,Object(f["a"])(Object(f["a"])({formatResult:d},x),{},{paginated:!0,manual:!0})),C=z.params,F=z.run,P=C[2]||{},T=Object(l["useState"])(P.type||I),R=Object(r["a"])(T,2),J=R[0],V=R[1],D=Object(l["useState"])(P.allFormData||k&&k[1]||{}),K=Object(r["a"])(D,2),A=K[0],L=K[1],H=Object(l["useCallback"])(()=>{if(!O)return{};if(O.getFieldInstance){var e=O.getFieldsValue(),a={};return Object.keys(e).forEach(t=>{O.getFieldInstance&&!O.getFieldInstance(t)||(a[t]=e[t])}),a}return O.getFieldsValue(null,()=>!0)},[O]),B=Object(l["useRef"])(O);B.current=O,Object(l["useEffect"])(()=>{if(B.current)if(B.current.getFieldInstance){var e={};Object.keys(A).forEach(a=>{B.current.getFieldInstance&&!B.current.getFieldInstance(a)||(e[a]=A[a])}),B.current.setFieldsValue(e)}else B.current.setFieldsValue(A)},[J]),Object(l["useEffect"])(()=>{C.length>0?F(...C):y||_(k)},[]);var M=Object(l["useCallback"])(()=>{var e=H();L(Object(f["a"])(Object(f["a"])({},A),e));var a="simple"===J?"advance":"simple";V(a)},[J,A,H]),_=Object(l["useCallback"])(e=>{setTimeout(()=>{var t=H(),n=Object(f["a"])(Object(f["a"])({},A),t);L(n),F(e?e[0]:Object(f["a"])(Object(f["a"])({pageSize:a.defaultPageSize||10},C[0]||{}),{},{current:1}),t,{allFormData:n,type:J})})},[H,F,C,A,J]),W=Object(l["useCallback"])(()=>{O&&O.resetFields(),_()},[O,_]),q=Object(h["c"])(W),N=()=>{var e=z.tableProps.pagination,a=C[0]||{},t=a.sorter;return{active:!1,defaultType:J,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:t?{order:t.order,field:t.field}:void 0},A]}};return Object(h["f"])(()=>{y||q()},[...E]),Object(f["a"])(Object(f["a"])({},z),{},{search:{submit:()=>{_()},type:J,changeType:M,reset:W}})}var E=g,y=e=>{if(sessionStorage){var a="".concat(v).concat(e),t=sessionStorage.getItem(a);if(null!==t){var n=JSON.parse(t);sessionStorage.setItem(a,JSON.stringify(Object(f["a"])(Object(f["a"])({},n),{},{active:!0})))}}},w=t("kRpH"),I=t.n(w);function S(e,a){Object(l["useEffect"])(()=>{var t=I.a.subscribe(e,a);return()=>{I.a.unsubscribe(t)}},[])}},"14J3":function(e,a,t){"use strict";t("cIOH"),t("1GLa")},BMrR:function(e,a,t){"use strict";var n=t("qrJ5");a["a"]=n["a"]},O1ic:function(e,a,t){"use strict";t.r(a);t("g9YV");var n=t("wCAj"),r=t("0Owb"),c=(t("+L6B"),t("2/Rp")),l=(t("14J3"),t("BMrR")),i=(t("jCWc"),t("kPKH")),s=(t("5NDa"),t("5rEg")),m=(t("y8nQ"),t("Vl3Y")),u=t("tJVT"),o=(t("OaEy"),t("2fM7")),d=t("q1tI"),f=t.n(d),b=t("/7QA"),p=o["a"].Option,h=(e,a)=>{var t=e.current,n=e.pageSize;return console.log(t,n),console.log("formData",a),fetch("https://randomuser.me/api?results=55&page=".concat(t,"&size=").concat(n)).then(e=>e.json()).then(e=>({total:e.info.results,list:e.results}))};a["default"]=()=>{var e=m["a"].useForm(),a=Object(u["a"])(e,1),t=a[0],d=Object(b["c"])(h,{defaultPageSize:5,form:t}),O=d.tableProps,j=d.search,v=j.type,g=j.changeType,E=j.submit,y=j.reset,w=[{title:"name",dataIndex:["name","last"]},{title:"email",dataIndex:"email"},{title:"phone",dataIndex:"phone"},{title:"gender",dataIndex:"gender"}],I=f.a.createElement("div",null,f.a.createElement(m["a"],{form:t},f.a.createElement(l["a"],{gutter:24},f.a.createElement(i["a"],{span:8},f.a.createElement(m["a"].Item,{label:"name",name:"name"},f.a.createElement(s["a"],{placeholder:"name"}))),f.a.createElement(i["a"],{span:8},f.a.createElement(m["a"].Item,{label:"email",name:"email"},f.a.createElement(s["a"],{placeholder:"email"}))),f.a.createElement(i["a"],{span:8},f.a.createElement(m["a"].Item,{label:"phone",name:"phone"},f.a.createElement(s["a"],{placeholder:"phone"})))),f.a.createElement(l["a"],null,f.a.createElement(m["a"].Item,{style:{display:"flex",justifyContent:"flex-end"}},f.a.createElement(c["a"],{type:"primary",onClick:E},"Search"),f.a.createElement(c["a"],{onClick:y,style:{marginLeft:16}},"Reset"),f.a.createElement(c["a"],{type:"link",onClick:g},"Simple Search"))))),S=f.a.createElement("div",{style:{marginBottom:16}},f.a.createElement(m["a"],{form:t,style:{display:"flex",justifyContent:"flex-end"}},f.a.createElement(m["a"].Item,{name:"gender"},f.a.createElement(o["a"],{placeholder:"-- \u8bf7\u9009\u62e9 --",style:{width:120,marginRight:16},onChange:E},f.a.createElement(p,{value:""},"all"),f.a.createElement(p,{value:"male"},"male"),f.a.createElement(p,{value:"female"},"female"))),f.a.createElement(m["a"].Item,{name:"name"},f.a.createElement(s["a"].Search,{placeholder:"enter name",style:{width:240},onSearch:E})),f.a.createElement(c["a"],{type:"link",onClick:g},"Advanced Search")));return f.a.createElement("div",null,"simple"===v?S:I,f.a.createElement(n["a"],Object(r["a"])({columns:w,rowKey:"email"},O)))}},jCWc:function(e,a,t){"use strict";t("cIOH"),t("1GLa")},kPKH:function(e,a,t){"use strict";var n=t("/kpp");a["a"]=n["a"]}}]);