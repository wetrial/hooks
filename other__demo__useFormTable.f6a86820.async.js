(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"/7QA":function(e,t,a){"use strict";a.d(t,"d",(function(){return b})),a.d(t,"c",(function(){return y})),a.d(t,"e",(function(){return S})),a.d(t,"a",(function(){return F.a})),a.d(t,"b",(function(){return w}));var r,c=a("tJVT"),n=a("rAM+"),i=a("q1tI"),s=new Set,u={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function l(){r||(r={size:{height:0,width:0},screen:"xs"},d(),window.addEventListener("resize",()=>{var e=r;if(d(),e!==r){var t,a=Object(n["a"])(s);try{for(a.s();!(t=a.n()).done;){var c=t.value;c()}}catch(i){a.e(i)}finally{a.f()}}}))}function d(){for(var e,t=window.innerWidth,a=window.innerHeight,c={size:{width:t,height:a}},n=!1,i=0,s=Object.keys(u);i<s.length;i++){var l=s[i];if(e=u[l],t>=e.min&&t<e.max){c.screen=l,n=!0;break}}(n||c.size.width!==r.size.width||c.size.height!==r.size.height)&&(r=c)}function b(){l();var e=Object(i["useState"])(r),t=Object(c["a"])(e,2),a=t[0],n=t[1];return Object(i["useEffect"])(()=>{var e=()=>{n(r)};return s.add(e),()=>{s.delete(e)}},[]),a}var f,o=a("k1fw"),O=a("PpiC"),m=a("0iz5"),j=(a("DwD6"),a("9XV7")),v=(e,t)=>{var a=Object(j["d"])(e),r=Object(c["a"])(a,2),n=r[0],i=r[1];return Object(j["e"])(()=>{var e=t();i(e)}),[n,i]},h=v,p="__WETRIAL_USEFORMTABLE__";function g(e,t){var a=h("".concat(p).concat(t.cacheKey),()=>Q()),r=Object(c["a"])(a,1),n=r[0],s=n||{},u=s.active,l=s.defaultType,d=void 0===l?"simple":l,b=s.defaultParams,v=t.form,g=t.refreshDeps,y=void 0===g?[]:g,w=t.manual,k=t.defaultType,F=void 0===k?t.cacheKey&&u?d:"simple":k,S=t.defaultParams,x=void 0===S?t.cacheKey&&u?b:void 0:S,z=(t.cacheKey,Object(O["a"])(t,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),E=Object(m["a"])(e,Object(o["a"])(Object(o["a"])({formatResult:f},z),{},{paginated:!0,manual:!0})),I=E.params,T=E.run,P=I[2]||{},C=Object(i["useState"])(P.type||F),D=Object(c["a"])(C,2),R=D[0],V=D[1],A=Object(i["useState"])(P.allFormData||x&&x[1]||{}),J=Object(c["a"])(A,2),K=J[0],_=J[1],L=Object(i["useCallback"])(()=>{if(!v)return{};if(v.getFieldInstance){var e=v.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{v.getFieldInstance&&!v.getFieldInstance(a)||(t[a]=e[a])}),t}return v.getFieldsValue(null,()=>!0)},[v]),M=Object(i["useRef"])(v);M.current=v,Object(i["useEffect"])(()=>{if(M.current)if(M.current.getFieldInstance){var e={};Object.keys(K).forEach(t=>{M.current.getFieldInstance&&!M.current.getFieldInstance(t)||(e[t]=K[t])}),M.current.setFieldsValue(e)}else M.current.setFieldsValue(K)},[R]),Object(i["useEffect"])(()=>{I.length>0?T(...I):w||B(x)},[]);var q=Object(i["useCallback"])(()=>{var e=L();_(Object(o["a"])(Object(o["a"])({},K),e));var t="simple"===R?"advance":"simple";V(t)},[R,K,L]),B=Object(i["useCallback"])(e=>{setTimeout(()=>{var a=L(),r=Object(o["a"])(Object(o["a"])({},K),a);_(r),T(e?e[0]:Object(o["a"])(Object(o["a"])({pageSize:t.defaultPageSize||10},I[0]||{}),{},{current:1}),a,{allFormData:r,type:R})})},[L,T,I,K,R]),H=Object(i["useCallback"])(()=>{v&&v.resetFields(),B()},[v,B]),N=Object(j["c"])(H),Q=()=>{var e=E.tableProps.pagination,t=I[0]||{},a=t.sorter;return{active:!1,defaultType:R,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:a?{order:a.order,field:a.field}:void 0},K]}};return Object(j["f"])(()=>{w||N()},[...y]),Object(o["a"])(Object(o["a"])({},E),{},{search:{submit:()=>{B()},type:R,changeType:q,reset:H}})}var y=g,w=e=>{if(sessionStorage){var t="".concat(p).concat(e),a=sessionStorage.getItem(t);if(null!==a){var r=JSON.parse(a);sessionStorage.setItem(t,JSON.stringify(Object(o["a"])(Object(o["a"])({},r),{},{active:!0})))}}},k=a("kRpH"),F=a.n(k);function S(e,t){Object(i["useEffect"])(()=>{var a=F.a.subscribe(e,t);return()=>{F.a.unsubscribe(a)}},[])}},dMjx:function(e,t,a){"use strict";a.r(t);a("+L6B");var r=a("2/Rp"),c=a("q1tI"),n=a.n(c),i=a("/7QA"),s=a("9kvl");t["default"]=()=>n.a.createElement(r["a"],{type:"default",onClick:()=>{Object(i["b"])("antd/use-form-table"),s["d"].push({pathname:"/hooks/antd/use-form-table",hash:"#\u6570\u636e\u7f13\u5b58"})}},"\u8fd4\u56deuseFormTable\u9875\u9762")}}]);