(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15,14],{"/7QA":function(e,n,t){"use strict";t.d(n,"d",(function(){return m})),t.d(n,"c",(function(){return w})),t.d(n,"e",(function(){return k})),t.d(n,"a",(function(){return y.a})),t.d(n,"b",(function(){return E}));var a,r=t("ODXe"),i=t("uFwe"),c=t("q1tI"),s=new Set,l={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function u(){a||(a={size:{height:0,width:0},screen:"xs"},o(),window.addEventListener("resize",()=>{var e=a;if(o(),e!==a){var n,t=Object(i["a"])(s);try{for(t.s();!(n=t.n()).done;){var r=n.value;r()}}catch(c){t.e(c)}finally{t.f()}}}))}function o(){for(var e,n=window.innerWidth,t=window.innerHeight,r={size:{width:n,height:t}},i=!1,c=0,s=Object.keys(l);c<s.length;c++){var u=s[c];if(e=l[u],n>=e.min&&n<e.max){r.screen=u,i=!0;break}}(i||r.size.width!==a.size.width||r.size.height!==a.size.height)&&(a=r)}function m(){u();var e=Object(c["useState"])(a),n=Object(r["a"])(e,2),t=n[0],i=n[1];return Object(c["useEffect"])(()=>{var e=()=>{i(a)};return s.add(e),()=>{s.delete(e)}},[]),t}var d,f=t("VTBJ"),h=t("Ff2n"),p=t("0iz5"),b=(t("DwD6"),t("9XV7")),v=(e,n)=>{var t=Object(b["d"])(e),a=Object(r["a"])(t,2),i=a[0],c=a[1];return Object(b["e"])(()=>{var e=n();c(e)}),[i,c]},g=v,O="__WETRIAL_USEFORMTABLE__";function j(e,n){var t=g("".concat(O).concat(n.cacheKey),()=>Q()),a=Object(r["a"])(t,1),i=a[0],s=i||{},l=s.active,u=s.defaultType,o=void 0===u?"simple":u,m=s.defaultParams,v=n.form,j=n.refreshDeps,w=void 0===j?[]:j,E=n.manual,x=n.defaultType,y=void 0===x?n.cacheKey&&l?o:"simple":x,k=n.defaultParams,z=void 0===k?n.cacheKey&&l?m:void 0:k,F=(n.cacheKey,Object(h["a"])(n,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),I=Object(p["b"])(e,Object(f["a"])(Object(f["a"])({formatResult:d},F),{},{paginated:!0,manual:!0})),R=I.params,S=I.run,T=R[2]||{},P=Object(c["useState"])(T.type||y),N=Object(r["a"])(P,2),q=N[0],D=N[1],J=Object(c["useState"])(T.allFormData||z&&z[1]||{}),V=Object(r["a"])(J,2),_=V[0],A=V[1],K=Object(c["useCallback"])(()=>{if(!v)return{};if(v.getFieldInstance){var e=v.getFieldsValue(),n={};return Object.keys(e).forEach(t=>{v.getFieldInstance&&!v.getFieldInstance(t)||(n[t]=e[t])}),n}return v.getFieldsValue(null,()=>!0)},[v]),C=Object(c["useRef"])(v);C.current=v,Object(c["useEffect"])(()=>{if(C.current)if(C.current.getFieldInstance){var e={};Object.keys(_).forEach(n=>{C.current.getFieldInstance&&!C.current.getFieldInstance(n)||(e[n]=_[n])}),C.current.setFieldsValue(e)}else C.current.setFieldsValue(_)},[q]),Object(c["useEffect"])(()=>{R.length>0?S(...R):E||L(z)},[]);var B=Object(c["useCallback"])(()=>{var e=K();A(Object(f["a"])(Object(f["a"])({},_),e));var n="simple"===q?"advance":"simple";D(n)},[q,_,K]),L=Object(c["useCallback"])(e=>{setTimeout(()=>{var t=K(),a=Object(f["a"])(Object(f["a"])({},_),t);A(a),S(e?e[0]:Object(f["a"])(Object(f["a"])({pageSize:n.defaultPageSize||10},R[0]||{}),{},{current:1}),t,{allFormData:a,type:q})})},[K,S,R,_,q]),G=Object(c["useCallback"])(()=>{v&&v.resetFields(),L()},[v,L]),H=Object(b["c"])(G),Q=()=>{var e=I.tableProps.pagination,n=R[0]||{},t=n.sorter;return{active:!1,defaultType:q,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:t?{order:t.order,field:t.field}:void 0},_]}};return Object(b["f"])(()=>{E||H()},[...w]),Object(f["a"])(Object(f["a"])({},I),{},{search:{submit:()=>{L()},type:q,changeType:B,reset:G}})}var w=j,E=e=>{if(sessionStorage){var n="".concat(O).concat(e),t=sessionStorage.getItem(n);if(null!==t){var a=JSON.parse(t);sessionStorage.setItem(n,JSON.stringify(Object(f["a"])(Object(f["a"])({},a),{},{active:!0})))}}},x=t("kRpH"),y=t.n(x);function k(e,n){Object(c["useEffect"])(()=>{var t=y.a.subscribe(e,n);return()=>{y.a.unsubscribe(t)}},[])}},OEk7:function(e,n,t){"use strict";t.r(n);var a=t("wx14"),r=t("q1tI"),i=t.n(r),c=(t("B2uJ"),t("+su7"),t("qOys")),s=t.n(c),l=t("5Yjd"),u=t.n(l),o=i.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("TGq+")),r=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(r)}));n["default"]=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"useresponsive"},i.a.createElement("a",{"aria-hidden":"true",href:"#useresponsive"},i.a.createElement("span",{className:"icon icon-link"})),"useResponsive"),i.a.createElement("p",null,"\u83b7\u53d6\u54cd\u5e94\u5f0f\u4fe1\u606f\u3002"),i.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7801\u6f14\u793a"},i.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),i.a.createElement("h3",{id:"\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u54cd\u5e94\u5f0f\u4fe1\u606f"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u54cd\u5e94\u5f0f\u4fe1\u606f"},i.a.createElement("span",{className:"icon icon-link"})),"\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u54cd\u5e94\u5f0f\u4fe1\u606f")),i.a.createElement(u.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport { useResponsive } from '@wetrial/hooks';\n\n// configResponsive({\n//   small: 0,\n//   middle: 800,\n//   large: 1200,\n// });\n\nexport default function() {\n  const { screen, size } = useResponsive();\n  return (\n    <>\n      <p>Please change the width of the browser window to see the effect: </p>\n      <p>screen:{screen}</p>\n      <p>\n        height:{size.height},width:{size.width}\n      </p>\n    </>\n  );\n}\n",jsx:"import React from 'react';\nimport { useResponsive } from '@wetrial/hooks'; // configResponsive({\n//   small: 0,\n//   middle: 800,\n//   large: 1200,\n// });\n\nexport default function() {\n  const { screen, size } = useResponsive();\n  return (\n    <>\n      <p>Please change the width of the browser window to see the effect: </p>\n      <p>screen:{screen}</p>\n      <p>\n        height:{size.height},width:{size.width}\n      </p>\n    </>\n  );\n}\n"}},{path:"/_demos/demo1-2",dependencies:{"@wetrial/hooks":"3.0.1"},files:{}}),i.a.createElement(o,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"api"},i.a.createElement("a",{"aria-hidden":"true",href:"#api"},i.a.createElement("span",{className:"icon icon-link"})),"API"),i.a.createElement(s.a,{code:"interface ResponsiveInfo {\n  screen: string;\n  size: {\n    height: number;\n    width: number;\n  };\n}\nfunction useResponsive(): ResponsiveInfo;\n",lang:"typescript"}),i.a.createElement("h3",{id:"\u914d\u7f6e"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u914d\u7f6e"},i.a.createElement("span",{className:"icon icon-link"})),"\u914d\u7f6e"),i.a.createElement("p",null,"\u9ed8\u8ba4\u7684\u54cd\u5e94\u5f0f\u914d\u7f6e\u548c bootstrap \u662f\u4e00\u81f4\u7684\uff1a"),i.a.createElement(s.a,{code:"{\n   xs: {\n    min: -Infinity,\n    max: 576,\n  },\n  sm: {\n    min: 576,\n    max: 768,\n  },\n  md: {\n    min: 768,\n    max: 992,\n  },\n  lg: {\n    min: 992,\n    max: 1200,\n  },\n  xl: {\n    min: 1200,\n    max: 1600,\n  },\n  xxl: {\n    min: 1600,\n    max: +Infinity,\n  }\n}\n",lang:"javascript"})))}},"TGq+":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),i=t("/7QA");n["default"]=function(){var e=Object(i["d"])(),n=e.screen,t=e.size;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Please change the width of the browser window to see the effect: "),r.a.createElement("p",null,"screen:",n),r.a.createElement("p",null,"height:",t.height,",width:",t.width))}}}]);