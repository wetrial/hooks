(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"/7QA":function(e,t,a){"use strict";a.d(t,"d",(function(){return d})),a.d(t,"f",(function(){return h})),a.d(t,"c",(function(){return E})),a.d(t,"e",(function(){return F})),a.d(t,"a",(function(){return k.a})),a.d(t,"b",(function(){return x}));var r,n=a("tJVT"),c=a("rAM+"),i=a("q1tI"),s=new Set,u={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function l(){r||(r={size:{height:0,width:0},screen:"xs"},o(),window.addEventListener("resize",()=>{var e=r;if(o(),e!==r){var t,a=Object(c["a"])(s);try{for(a.s();!(t=a.n()).done;){var n=t.value;n()}}catch(i){a.e(i)}finally{a.f()}}}))}function o(){for(var e,t=window.innerWidth,a=window.innerHeight,n={size:{width:t,height:a}},c=!1,i=0,s=Object.keys(u);i<s.length;i++){var l=s[i];if(e=u[l],t>=e.min&&t<e.max){n.screen=l,c=!0;break}}(c||n.size.width!==r.size.width||n.size.height!==r.size.height)&&(r=n)}function d(){l();var e=Object(i["useState"])(r),t=Object(n["a"])(e,2),a=t[0],c=t[1];return Object(i["useEffect"])(()=>{var e=()=>{c(r)};return s.add(e),()=>{s.delete(e)}},[]),a}var f=a("9XV7"),b="__table_columns_";function m(e,t){var a=Object(f["c"])("".concat(b).concat(e),t),r=Object(n["a"])(a,2),c=r[0],i=r[1];return{tableProps:{columnStateMap:c,onColumnsStateChange:i},getColumns:e=>{var t=[];return e&&e.forEach(e=>{var a=e.dataIndex;c&&c[a]&&!1===c[a].show||t.push(a)}),t}}}var O,h=m,j=a("k1fw"),v=a("PpiC"),p=a("0iz5"),g=(a("DwD6"),(e,t)=>{var a=Object(f["e"])(e),r=Object(n["a"])(a,2),c=r[0],i=r[1];return Object(f["f"])(()=>{var e=t();i(e)}),[c,i]}),w=g,y="__WETRIAL_USEFORMTABLE__";function S(e,t){var a=w("".concat(y).concat(t.cacheKey),()=>W()),r=Object(n["a"])(a,1),c=r[0],s=c||{},u=s.active,l=s.defaultType,o=void 0===l?"simple":l,d=s.defaultParams,b=t.form,m=t.refreshDeps,h=void 0===m?[]:m,g=t.manual,S=t.defaultType,E=void 0===S?t.cacheKey&&u?o:"simple":S,x=t.defaultParams,z=void 0===x?t.cacheKey&&u?d:void 0:x,k=(t.cacheKey,Object(v["a"])(t,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),F=Object(p["b"])(e,Object(j["a"])(Object(j["a"])({formatResult:O},k),{},{paginated:!0,manual:!0})),T=F.params,I=F.run,P=T[2]||{},_=Object(i["useState"])(P.type||E),C=Object(n["a"])(_,2),D=C[0],A=C[1],J=Object(i["useState"])(P.allFormData||z&&z[1]||{}),K=Object(n["a"])(J,2),R=K[0],V=K[1],q=Object(i["useCallback"])(()=>b?b.getFieldsValue(null,()=>!0):{},[b]),L=Object(i["useRef"])(b);L.current=b,Object(i["useEffect"])(()=>{if(L.current)if(L.current.getFieldInstance){var e={};Object.keys(R).forEach(t=>{L.current.getFieldInstance&&!L.current.getFieldInstance(t)||(e[t]=R[t])}),L.current.setFieldsValue(e)}else L.current.setFieldsValue(R)},[D]),Object(i["useEffect"])(()=>{T.length>0?I(...T):g||H(z)},[]);var M=Object(i["useCallback"])(()=>{var e=q();V(Object(j["a"])(Object(j["a"])({},R),e));var t="simple"===D?"advance":"simple";A(t)},[D,R,q]),H=Object(i["useCallback"])(e=>{setTimeout(()=>{var a=q(),r=Object(j["a"])(Object(j["a"])({},R),a);V(r),I(e?e[0]:Object(j["a"])(Object(j["a"])({pageSize:t.defaultPageSize||10},T[0]||{}),{},{current:1}),a,{allFormData:r,type:D})})},[q,I,T,R,D]),N=Object(i["useCallback"])(()=>{b&&b.resetFields(),H()},[b,H]),Q=Object(f["d"])(N),W=()=>{var e=F.tableProps.pagination,t=T[0]||{},a=t.sorter;return{active:!1,defaultType:D,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:a?{order:a.order,field:a.field}:void 0},R]}};return Object(f["g"])(()=>{g||Q()},[...h]),Object(j["a"])(Object(j["a"])({},F),{},{search:{submit:()=>{H()},type:D,changeType:M,reset:N}})}var E=S,x=e=>{if(sessionStorage){var t="".concat(y).concat(e),a=sessionStorage.getItem(t);if(null!==a){var r=JSON.parse(a);sessionStorage.setItem(t,JSON.stringify(Object(j["a"])(Object(j["a"])({},r),{},{active:!0})))}}},z=a("kRpH"),k=a.n(z);function F(e,t){Object(i["useEffect"])(()=>{var a=k.a.subscribe(e,t);return()=>{k.a.unsubscribe(a)}},[])}},"TGq+":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),c=a("/7QA");t["default"]=function(){var e=Object(c["d"])(),t=e.screen,a=e.size;return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Please change the width of the browser window to see the effect: "),n.a.createElement("p",null,"screen:",t),n.a.createElement("p",null,"height:",a.height,",width:",a.width))}}}]);