(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"/7QA":function(e,t,a){"use strict";a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return y})),a.d(t,"e",(function(){return k})),a.d(t,"a",(function(){return x.a})),a.d(t,"b",(function(){return E}));var r,n=a("ODXe"),c=a("uFwe"),i=a("q1tI"),l=new Set,s={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function u(){r||(r={size:{height:0,width:0},screen:"xs"},o(),window.addEventListener("resize",()=>{var e=r;if(o(),e!==r){var t,a=Object(c["a"])(l);try{for(a.s();!(t=a.n()).done;){var n=t.value;n()}}catch(i){a.e(i)}finally{a.f()}}}))}function o(){for(var e,t=window.innerWidth,a=window.innerHeight,n={size:{width:t,height:a}},c=!1,i=0,l=Object.keys(s);i<l.length;i++){var u=l[i];if(e=s[u],t>=e.min&&t<e.max){n.screen=u,c=!0;break}}(c||n.size.width!==r.size.width||n.size.height!==r.size.height)&&(r=n)}function m(){u();var e=Object(i["useState"])(r),t=Object(n["a"])(e,2),a=t[0],c=t[1];return Object(i["useEffect"])(()=>{var e=()=>{c(r)};return l.add(e),()=>{l.delete(e)}},[]),a}var d,f=a("VTBJ"),b=a("Ff2n"),h=a("0iz5"),p=(a("DwD6"),a("9XV7")),g=(e,t)=>{var a=Object(p["d"])(e),r=Object(n["a"])(a,2),c=r[0],i=r[1];return Object(p["e"])(()=>{var e=t();i(e)}),[c,i]},O=g,j="__WETRIAL_USEFORMTABLE__";function v(e,t){var a=O("".concat(j).concat(t.cacheKey),()=>H()),r=Object(n["a"])(a,1),c=r[0],l=c||{},s=l.active,u=l.defaultType,o=void 0===u?"simple":u,m=l.defaultParams,g=t.form,v=t.refreshDeps,y=void 0===v?[]:v,E=t.manual,w=t.defaultType,x=void 0===w?t.cacheKey&&s?o:"simple":w,k=t.defaultParams,F=void 0===k?t.cacheKey&&s?m:void 0:k,I=(t.cacheKey,Object(b["a"])(t,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),S=Object(h["b"])(e,Object(f["a"])(Object(f["a"])({formatResult:d},I),{},{paginated:!0,manual:!0})),z=S.params,C=S.run,T=z[2]||{},D=Object(i["useState"])(T.type||x),R=Object(n["a"])(D,2),V=R[0],P=R[1],K=Object(i["useState"])(T.allFormData||F&&F[1]||{}),A=Object(n["a"])(K,2),B=A[0],J=A[1],L=Object(i["useCallback"])(()=>{if(!g)return{};if(g.getFieldInstance){var e=g.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{g.getFieldInstance&&!g.getFieldInstance(a)||(t[a]=e[a])}),t}return g.getFieldsValue(null,()=>!0)},[g]),_=Object(i["useRef"])(g);_.current=g,Object(i["useEffect"])(()=>{if(_.current)if(_.current.getFieldInstance){var e={};Object.keys(B).forEach(t=>{_.current.getFieldInstance&&!_.current.getFieldInstance(t)||(e[t]=B[t])}),_.current.setFieldsValue(e)}else _.current.setFieldsValue(B)},[V]),Object(i["useEffect"])(()=>{z.length>0?C(...z):E||Q(F)},[]);var N=Object(i["useCallback"])(()=>{var e=L();J(Object(f["a"])(Object(f["a"])({},B),e));var t="simple"===V?"advance":"simple";P(t)},[V,B,L]),Q=Object(i["useCallback"])(e=>{setTimeout(()=>{var a=L(),r=Object(f["a"])(Object(f["a"])({},B),a);J(r),C(e?e[0]:Object(f["a"])(Object(f["a"])({pageSize:t.defaultPageSize||10},z[0]||{}),{},{current:1}),a,{allFormData:r,type:V})})},[L,C,z,B,V]),X=Object(i["useCallback"])(()=>{g&&g.resetFields(),Q()},[g,Q]),q=Object(p["c"])(X),H=()=>{var e=S.tableProps.pagination,t=z[0]||{},a=t.sorter;return{active:!1,defaultType:V,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:a?{order:a.order,field:a.field}:void 0},B]}};return Object(p["f"])(()=>{E||q()},[...y]),Object(f["a"])(Object(f["a"])({},S),{},{search:{submit:()=>{Q()},type:V,changeType:N,reset:X}})}var y=v,E=e=>{if(sessionStorage){var t="".concat(j).concat(e),a=sessionStorage.getItem(t);if(null!==a){var r=JSON.parse(a);sessionStorage.setItem(t,JSON.stringify(Object(f["a"])(Object(f["a"])({},r),{},{active:!0})))}}},w=a("kRpH"),x=a.n(w);function k(e,t){Object(i["useEffect"])(()=>{var a=x.a.subscribe(e,t);return()=>{x.a.unsubscribe(a)}},[])}},U0sl:function(e,t,a){"use strict";a.r(t);a("g9YV");var r=a("wCAj"),n=a("wx14"),c=(a("+L6B"),a("2/Rp")),i=(a("5NDa"),a("5rEg")),l=(a("y8nQ"),a("Vl3Y")),s=a("ODXe"),u=a("/7QA"),o=a("q1tI"),m=a.n(o),d=a("9kvl"),f=(e,t)=>{console.log(e,t);var a=e.current,r=e.pageSize;return fetch("https://randomuser.me/api?results=55&page=".concat(a,"&size=").concat(r)).then(e=>e.json()).then(e=>({total:e.info.results,list:e.results}))};t["default"]=()=>{var e=l["a"].useForm(),t=Object(s["a"])(e,1),a=t[0],o=Object(u["c"])(f,{defaultPageSize:5,form:a,cacheKey:"antd/use-form-table"}),b=o.tableProps,h=o.params,p=o.search,g=o.sorter,O=h[0]||{},j=O.filters,v=void 0===j?{}:j,y=p||{},E=y.type,w=y.changeType,x=y.submit,k=y.reset,F=[{title:"name",dataIndex:["name","last"]},{title:"email",dataIndex:"email"},{title:"phone",dataIndex:"phone",sorter:!0,sortOrder:"phone"===g.field&&g.order},{title:"gender",dataIndex:"gender",filters:[{text:"male",value:"male"},{text:"female",value:"female"}],filteredValue:v.gender}],I=m.a.createElement("div",{style:{marginBottom:16}},m.a.createElement(l["a"],{form:a,style:{display:"flex",justifyContent:"flex-end"}},m.a.createElement(l["a"].Item,{name:"name"},m.a.createElement(i["a"],{placeholder:"enter name",style:{width:140,marginRight:16}})),"advance"===E&&m.a.createElement(m.a.Fragment,null,m.a.createElement(l["a"].Item,{name:"email"},m.a.createElement(i["a"],{placeholder:"enter email",style:{width:140,marginRight:16}})),m.a.createElement(l["a"].Item,{name:"phone"},m.a.createElement(i["a"],{placeholder:"enter phone",style:{width:140,marginRight:16}}))),m.a.createElement(c["a"],{type:"primary",onClick:x},"\u641c\u7d22"),m.a.createElement(c["a"],{onClick:k,style:{marginLeft:8}},"\u91cd\u7f6e"),m.a.createElement(c["a"],{type:"link",onClick:w},"simple"===E?"\u5c55\u5f00":"\u6298\u53e0")));return m.a.createElement("div",null,m.a.createElement(c["a"],{type:"danger",onClick:()=>{d["e"].push({pathname:"/hooks/other/other",hash:"#useformtable-\u6570\u636e\u7f13\u5b58"})},style:{marginBottom:16}},"\u5207\u6362\u5230demo\u9875\u9762(\u518d\u5207\u6362\u56de\u6765\uff0c\u641c\u7d22\u72b6\u6001\u8fd8\u5728)"),I,m.a.createElement(r["a"],Object(n["a"])({columns:F,rowKey:"email"},b)))}}}]);