(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13,12],{"/7QA":function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return E})),n.d(t,"e",(function(){return x})),n.d(t,"a",(function(){return w.a})),n.d(t,"b",(function(){return j}));var a,r=n("tJVT"),c=n("rAM+"),s=n("q1tI"),o=new Set,u={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function l(){a||(a={size:{height:0,width:0},screen:"xs"},i(),window.addEventListener("resize",()=>{var e=a;if(i(),e!==a){var t,n=Object(c["a"])(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;r()}}catch(s){n.e(s)}finally{n.f()}}}))}function i(){for(var e,t=window.innerWidth,n=window.innerHeight,r={size:{width:t,height:n}},c=!1,s=0,o=Object.keys(u);s<o.length;s++){var l=o[s];if(e=u[l],t>=e.min&&t<e.max){r.screen=l,c=!0;break}}(c||r.size.width!==a.size.width||r.size.height!==a.size.height)&&(a=r)}function f(){l();var e=Object(s["useState"])(a),t=Object(r["a"])(e,2),n=t[0],c=t[1];return Object(s["useEffect"])(()=>{var e=()=>{c(a)};return o.add(e),()=>{o.delete(e)}},[]),n}var m,p=n("k1fw"),b=n("PpiC"),d=n("TTbB"),v=(n("BXCy"),n("n+Aq")),g=(e,t)=>{var n=Object(v["b"])(e),a=Object(r["a"])(n,2),c=a[0],s=a[1];return Object(v["c"])(()=>{var e=t();s(e)}),[c,s]},y=g,h="__WETRIAL_USEFORMTABLE__";function O(e,t){var n=y("".concat(h).concat(t.cacheKey),()=>G()),a=Object(r["a"])(n,1),c=a[0],o=c||{},u=o.active,l=o.defaultType,i=void 0===l?"simple":l,f=o.defaultParams,g=t.form,O=t.refreshDeps,E=void 0===O?[]:O,j=t.manual,S=t.defaultType,w=void 0===S?t.cacheKey&&u?i:"simple":S,x=t.defaultParams,C=void 0===x?t.cacheKey&&u?f:void 0:x,P=(t.cacheKey,Object(b["a"])(t,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),M=Object(d["a"])(e,Object(p["a"])(Object(p["a"])({formatResult:m},P),{},{paginated:!0,manual:!0})),N=M.params,k=M.run,I=N[2]||{},T=Object(s["useState"])(I.type||w),A=Object(r["a"])(T,2),B=A[0],F=A[1],R=Object(s["useState"])(I.allFormData||C&&C[1]||{}),D=Object(r["a"])(R,2),K=D[0],z=D[1],J=Object(s["useCallback"])(()=>{if(!g)return{};if(g.getFieldInstance){var e=g.getFieldsValue(),t={};return Object.keys(e).forEach(n=>{g.getFieldInstance&&!g.getFieldInstance(n)||(t[n]=e[n])}),t}return g.getFieldsValue(null,()=>!0)},[g]),L=Object(s["useRef"])(g);L.current=g,Object(s["useEffect"])(()=>{if(L.current)if(L.current.getFieldInstance){var e={};Object.keys(K).forEach(t=>{L.current.getFieldInstance&&!L.current.getFieldInstance(t)||(e[t]=K[t])}),L.current.setFieldsValue(e)}else L.current.setFieldsValue(K)},[B]),Object(s["useEffect"])(()=>{N.length>0?k(...N):j||V(C)},[]);var _=Object(s["useCallback"])(()=>{var e=J();z(Object(p["a"])(Object(p["a"])({},K),e));var t="simple"===B?"advance":"simple";F(t)},[B,K,J]),V=Object(s["useCallback"])(e=>{setTimeout(()=>{var n=J(),a=Object(p["a"])(Object(p["a"])({},K),n);z(a),k(e?e[0]:Object(p["a"])(Object(p["a"])({pageSize:t.defaultPageSize||10},N[0]||{}),{},{current:1}),n,{allFormData:a,type:B})})},[J,k,N,K,B]),q=Object(s["useCallback"])(()=>{g&&g.resetFields(),V()},[g,V]),H=Object(v["a"])(q),G=()=>{var e=M.tableProps.pagination,t=N[0]||{},n=t.sorter;return{active:!1,defaultType:B,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:n?{order:n.order,field:n.field}:void 0},K]}};return Object(v["d"])(()=>{j||H()},[...E]),Object(p["a"])(Object(p["a"])({},M),{},{search:{submit:()=>{V()},type:B,changeType:_,reset:q}})}var E=O,j=e=>{if(sessionStorage){var t="".concat(h).concat(e),n=sessionStorage.getItem(t);if(null!==n){var a=JSON.parse(n);sessionStorage.setItem(t,JSON.stringify(Object(p["a"])(Object(p["a"])({},a),{},{active:!0})))}}},S=n("kRpH"),w=n.n(S);function x(e,t){Object(s["useEffect"])(()=>{var n=w.a.subscribe(e,t);return()=>{w.a.unsubscribe(n)}},[])}},"0Owb":function(e,t,n){"use strict";function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,"a",(function(){return a}))},"14J3":function(e,t,n){"use strict";n("cIOH"),n("1GLa")},BMrR:function(e,t,n){"use strict";var a=n("qrJ5");t["a"]=a["a"]},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},K0wg:function(e,t,n){"use strict";n.r(t);n("cIOH"),n("bE4E");var a=n("q1tI"),r=n.n(a),c=n("TSYQ"),s=n.n(c),o=n("H84U");function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},f=function(e){return a["createElement"](o["a"],null,(function(t){var n,r=t.getPrefixCls,c=t.direction,o=e.prefixCls,f=e.type,m=void 0===f?"horizontal":f,p=e.orientation,b=void 0===p?"center":p,d=e.className,v=e.children,g=e.dashed,y=e.plain,h=i(e,["prefixCls","type","orientation","className","children","dashed","plain"]),O=r("divider",o),E=b.length>0?"-".concat(b):b,j=!!v,S=s()(d,O,"".concat(O,"-").concat(m),(n={},l(n,"".concat(O,"-with-text"),j),l(n,"".concat(O,"-with-text").concat(E),j),l(n,"".concat(O,"-dashed"),!!g),l(n,"".concat(O,"-plain"),!!y),l(n,"".concat(O,"-rtl"),"rtl"===c),n));return a["createElement"]("div",u({className:S},h,{role:"separator"}),v&&a["createElement"]("span",{className:"".concat(O,"-inner-text")},v))}))},m=f,p=(n("14J3"),n("BMrR")),b=(n("+L6B"),n("2/Rp")),d=(n("jCWc"),n("kPKH")),v=(n("5NDa"),n("5rEg")),g=(n("PQMj"),n("MFj2")),y=n("0n0R");function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function O(e,t){return x(e)||w(e,t)||j(e,t)||E()}function E(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(e,t){if(e){if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function w(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0)if(n.push(s.value),t&&n.length===t)break}catch(u){r=!0,c=u}finally{try{a||null==o["return"]||o["return"]()}finally{if(r)throw c}}return n}}function x(e){if(Array.isArray(e))return e}var C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function P(e){return e?e.toString().split("").reverse().map((function(e){var t=Number(e);return isNaN(t)?e:t})):[]}function M(e,t){for(var n=[],r=0;r<30;r++)n.push(a["createElement"]("p",{key:r.toString(),className:s()(t,{current:e===r})},r%10));return n}var N=function(e){var t=e.prefixCls,n=e.count,r=e.className,c=e.style,u=e.title,l=e.component,i=void 0===l?"sup":l,f=e.displayComponent,m=e.onAnimated,p=void 0===m?function(){}:m,b=C(e,["prefixCls","count","className","style","title","component","displayComponent","onAnimated"]),d=a["useState"](!0),v=O(d,2),g=v[0],E=v[1],j=a["useState"](n),S=O(j,2),w=S[0],x=S[1],N=a["useState"](n),k=O(N,2),I=k[0],T=k[1],A=a["useState"](n),B=O(A,2),F=B[0],R=B[1],D=a["useContext"](o["b"]),K=D.getPrefixCls,z=K("scroll-number",t);I!==n&&(E(!0),T(n)),a["useEffect"]((function(){var e;return R(w),g&&(e=setTimeout((function(){E(!1),x(n),p()}))),function(){e&&clearTimeout(e)}}),[g,n,p]);var J=function(e,t){var n=Math.abs(Number(w)),a=Math.abs(Number(F)),r=Math.abs(P(w)[t]),c=Math.abs(P(a)[t]);return g?10+e:n>a?r>=c?10+e:20+e:r<=c?10+e:e},L=function(e,t){if("number"===typeof e){var n=J(e,t),r=g||void 0===P(F)[t];return a["createElement"]("span",{className:"".concat(z,"-only"),style:{transition:r?"none":void 0,msTransform:"translateY(".concat(100*-n,"%)"),WebkitTransform:"translateY(".concat(100*-n,"%)"),transform:"translateY(".concat(100*-n,"%)")},key:t},M(n,"".concat(z,"-only-unit")))}return a["createElement"]("span",{key:"symbol",className:"".concat(z,"-symbol")},e)},_=function(){return w&&Number(w)%1===0?P(w).map((function(e,t){return L(e,t)})).reverse():w},V=h(h({},b),{style:c,className:s()(z,r),title:u});return c&&c.borderColor&&(V.style=h(h({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),f?Object(y["a"])(f,{className:s()("".concat(z,"-custom-component"),f.props&&f.props.className)}):a["createElement"](i,V,_())},k=N,I=n("09Wf");function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}var F=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function R(e){return-1!==I["a"].indexOf(e)}var D=function(e){var t,n,r=e.prefixCls,c=e.scrollNumberPrefixCls,u=e.children,l=e.status,i=e.text,f=e.color,m=e.count,p=void 0===m?null:m,b=e.overflowCount,d=void 0===b?99:b,v=e.dot,h=void 0!==v&&v,O=e.title,E=e.offset,j=e.style,S=e.className,w=e.showZero,x=void 0!==w&&w,C=F(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","title","offset","style","className","showZero"]),P=a["useContext"](o["b"]),M=P.getPrefixCls,N=P.direction,I=M("badge",r),D=function(){var e=p>d?"".concat(d,"+"):p;return e},K=function(){return!!l||!!f},z=function(){var e=D();return"0"===e||0===e},J=function(){return h&&!z()||K()},L=function(){return J()?"":D()},_=function(){return O||("string"===typeof p||"number"===typeof p?p:void 0)},V=function(){return E?B({right:-parseInt(E[0],10),marginTop:E[1]},j):j},q=function(){var e=L(),t=null===e||void 0===e||""===e;return(t||z()&&!x)&&!J()},H=function(){var e=q();return e||!i?null:a["createElement"]("span",{className:"".concat(I,"-status-text")},i)},G=function(){var e=p;if(e&&"object"===A(e))return Object(y["a"])(e,{style:B(B({},V()),e.props&&e.props.style)})},W=function(){var e,t=M("scroll-number",c),n=L(),r=J(),o=q(),u=s()((e={},T(e,"".concat(I,"-dot"),r),T(e,"".concat(I,"-count"),!r),T(e,"".concat(I,"-multiple-words"),!r&&p&&p.toString&&p.toString().length>1),T(e,"".concat(I,"-status-").concat(l),!!l),T(e,"".concat(I,"-status-").concat(f),R(f)),e)),i=V();return f&&!R(f)&&(i=i||{},i.background=f),o?null:a["createElement"](k,{prefixCls:t,"data-show":!o,className:u,count:n,displayComponent:G(),title:_(),style:i,key:"scrollNumber"})},Q=s()((t={},T(t,"".concat(I,"-status-dot"),K()),T(t,"".concat(I,"-status-").concat(l),!!l),T(t,"".concat(I,"-status-").concat(f),R(f)),t)),Y={};f&&!R(f)&&(Y.background=f);var $=s()(S,I,(n={},T(n,"".concat(I,"-status"),K()),T(n,"".concat(I,"-not-a-wrapper"),!u),T(n,"".concat(I,"-rtl"),"rtl"===N),n));if(!u&&K()){var U=V(),Z=U&&U.color;return a["createElement"]("span",B({},C,{className:$,style:U}),a["createElement"]("span",{className:Q,style:Y}),a["createElement"]("span",{style:{color:Z},className:"".concat(I,"-status-text")},i))}return a["createElement"]("span",B({},C,{className:$}),u,a["createElement"](g["a"],{component:"",showProp:"data-show",transitionName:u?"".concat(I,"-zoom"):"",transitionAppear:!0},W()),H())},K=D,z=n("tJVT"),J=n("/7QA"),L={sendMessage:"sendMessage"};function _(){var e=Object(a["useState"])(""),t=Object(z["a"])(e,2),n=t[0],c=t[1];return Object(J["e"])(L.sendMessage,(e,t)=>{c(t)}),r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{dot:!0},"\u6d88\u606f"),r.a.createElement(v["a"].TextArea,{value:n}))}function V(){var e=Object(a["useState"])(""),t=Object(z["a"])(e,2),n=t[0],c=t[1],s=e=>{e.preventDefault(),J["a"].publish(L.sendMessage,"".concat(n,"-").concat((new Date).getTime())),c("")};return r.a.createElement(v["a"].Group,null,r.a.createElement(p["a"],null,r.a.createElement(d["a"],{span:22},r.a.createElement(v["a"],{value:n,onChange:e=>{c(e.target.value)},defaultValue:"receive"})),r.a.createElement(d["a"],{span:2},r.a.createElement(b["a"],{onClick:s,type:"primary"},"\u53d1\u9001"))))}t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(m,null),r.a.createElement(V,null))}},"KR+h":function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),r=n("q1tI"),c=n.n(r),s=(n("B2uJ"),n("+su7"),n("qOys")),o=n.n(s),u=n("5Yjd"),l=n.n(u),i=c.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("K0wg")),r=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(r)}));t["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"usepubsub"},c.a.createElement("a",{"aria-hidden":"true",href:"#usepubsub"},c.a.createElement("span",{className:"icon icon-link"})),"usePubSub"),c.a.createElement("p",null,"\u5728\u591a\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u8fdb\u884c\u4e8b\u4ef6\u901a\u77e5\u6709\u65f6\u4f1a\u8ba9\u4eba\u975e\u5e38\u5934\u75bc\uff0c\u501f\u52a9 PubSub \uff0c\u53ef\u4ee5\u8ba9\u8fd9\u4e00\u8fc7\u7a0b\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u3002"),c.a.createElement("p",null,"\u5728\u7ec4\u4ef6\u4e2d\u8c03\u7528 ",c.a.createElement("code",null,"useSubscribe")," \u53ef\u4ee5\u8ba2\u9605\u4e00\u4e2a\u4e8b\u4ef6(\u7ec4\u4ef6\u6d88\u8d39\u65f6\u4f1a\u81ea\u52a8\u53d6\u6d88\u8ba2\u9605)"),c.a.createElement("p",null,"\u901a\u8fc7",c.a.createElement("code",null,"PubSub.publish")," \u53ef\u4ee5\u53d1\u5e03\u4e00\u4e2a\u4e8b\u4ef6"),c.a.createElement("p",null,"\u5982\u679c\u6709\u9700\u8981\uff0c\u5728\u975e\u7ec4\u4ef6\u4e2d\u53ef\u4ee5\u4f7f\u7528",c.a.createElement("code",null,"PubSub.publish"),"\u3001",c.a.createElement("code",null,"PubSub.subscribe"),"\u6765\u8fdb\u884c\u8ba2\u9605\u3001\u53d1\u5e03(\u6ce8:\u5982\u679c\u81ea\u884c PubSub.subscribe \u8bf7\u6ce8\u610f\u8c03\u7528",c.a.createElement("code",null,"PubSub.unsubscribe"),"\u8fdb\u884c\u53d6\u6d88\u8ba2\u9605)"),c.a.createElement(o.a,{code:"useSubscribe(event:string,(event:string,data:any)=>void);\n",lang:"js"}),c.a.createElement("blockquote",null,c.a.createElement("p",null,"\u5728\u7ec4\u4ef6\u591a\u6b21\u6e32\u67d3\u65f6\uff0c\u6bcf\u6b21\u6e32\u67d3\u8c03\u7528 ",c.a.createElement("code",null,"useSubscribe")," \u5f97\u5230\u7684\u8fd4\u56de\u503c\u4f1a\u4fdd\u6301\u4e0d\u53d8\uff0c\u4e0d\u4f1a\u91cd\u590d\u8ba2\u9605\u3002")),c.a.createElement(o.a,{code:"PubSub.publish((event: string), (data: any));\n",lang:"js"}),c.a.createElement("p",null,"\u5bf9\u4e8e",c.a.createElement("strong",null,"\u5b50\u7ec4\u4ef6"),"\u901a\u77e5",c.a.createElement("strong",null,"\u7236\u7ec4\u4ef6"),"\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u4ecd\u7136\u63a8\u8350\u76f4\u63a5\u4f7f\u7528 ",c.a.createElement("code",null,"props")," \u4f20\u9012\u4e00\u4e2a ",c.a.createElement("code",null,"event")," \u51fd\u6570\u3002",c.a.createElement("code",null,"useSubscribe")," \u9002\u5408\u7684\u662f\u5728",c.a.createElement("strong",null,"\u8ddd\u79bb\u8f83\u8fdc"),"\u7684\u7ec4\u4ef6\u4e4b\u95f4\u8fdb\u884c\u4e8b\u4ef6\u901a\u77e5\uff0c\u6216\u662f\u5728",c.a.createElement("strong",null,"\u591a\u4e2a"),"\u7ec4\u4ef6\u4e4b\u95f4\u5171\u4eab\u4e8b\u4ef6\u901a\u77e5\u3002"),c.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7801\u6f14\u793a"},c.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),c.a.createElement("h3",{id:"\u5b50\u7ec4\u4ef6\u53d1\u5e03\u7236\u7ec4\u4ef6\u8ba2\u9605"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5b50\u7ec4\u4ef6\u53d1\u5e03\u7236\u7ec4\u4ef6\u8ba2\u9605"},c.a.createElement("span",{className:"icon icon-link"})),"\u5b50\u7ec4\u4ef6\u53d1\u5e03\u7236\u7ec4\u4ef6\u8ba2\u9605")),c.a.createElement(l.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { Button, Input, Badge, Divider, Row, Col } from 'antd';\nimport { PubSub, useSubscribe } from '@wetrial/hooks';\n\nconst eventType = {\n  sendMessage: 'sendMessage',\n};\n\nfunction MessageList() {\n  const [messages, setMessages] = useState('');\n\n  useSubscribe(eventType.sendMessage, (_, data) => {\n    setMessages(data);\n  });\n\n  return (\n    <>\n      <Badge dot>\u6d88\u606f</Badge>\n      <Input.TextArea value={messages}></Input.TextArea>\n    </>\n  );\n}\n\nfunction Chat() {\n  const [message, setMessage] = useState('');\n\n  const sendMessage = e => {\n    e.preventDefault();\n    PubSub.publish(eventType.sendMessage, `${message}-${new Date().getTime()}`);\n    setMessage('');\n  };\n\n  return (\n    <Input.Group>\n      <Row>\n        <Col span={22}>\n          <Input\n            value={message}\n            onChange={e => {\n              setMessage(e.target.value);\n            }}\n            defaultValue=\"receive\"\n          />\n        </Col>\n        <Col span={2}>\n          <Button onClick={sendMessage} type=\"primary\">\n            \u53d1\u9001\n          </Button>\n        </Col>\n      </Row>\n    </Input.Group>\n  );\n}\n\nexport default function() {\n  return (\n    <>\n      <MessageList />\n      <Divider></Divider>\n      <Chat />\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport { Button, Input, Badge, Divider, Row, Col } from 'antd';\nimport { PubSub, useSubscribe } from '@wetrial/hooks';\n\nconst eventType = {\n  sendMessage: 'sendMessage',\n};\n\nfunction MessageList() {\n  const [messages, setMessages] = useState('');\n  useSubscribe(eventType.sendMessage, (_, data) => {\n    setMessages(data);\n  });\n  return (\n    <>\n      <Badge dot>\u6d88\u606f</Badge>\n      <Input.TextArea value={messages}></Input.TextArea>\n    </>\n  );\n}\n\nfunction Chat() {\n  const [message, setMessage] = useState('');\n\n  const sendMessage = e => {\n    e.preventDefault();\n    PubSub.publish(eventType.sendMessage, `${message}-${new Date().getTime()}`);\n    setMessage('');\n  };\n\n  return (\n    <Input.Group>\n      <Row>\n        <Col span={22}>\n          <Input\n            value={message}\n            onChange={e => {\n              setMessage(e.target.value);\n            }}\n            defaultValue=\"receive\"\n          />\n        </Col>\n        <Col span={2}>\n          <Button onClick={sendMessage} type=\"primary\">\n            \u53d1\u9001\n          </Button>\n        </Col>\n      </Row>\n    </Input.Group>\n  );\n}\n\nexport default function() {\n  return (\n    <>\n      <MessageList />\n      <Divider></Divider>\n      <Chat />\n    </>\n  );\n}\n"}},{path:"/_demos/demo1-1",dependencies:{antd:"4.3.1","@wetrial/hooks":"2.0.11"},files:{}}),c.a.createElement(i,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h2",{id:"api"},c.a.createElement("a",{"aria-hidden":"true",href:"#api"},c.a.createElement("span",{className:"icon icon-link"})),"API"),c.a.createElement(o.a,{code:"import { usePublish, PubSub } from '@wetrial/hooks';\n\nuseSubscribe(event:string,(event:string,data:any)=>void);\nPubSub.publish(event:string,data:any);\n",lang:"typescript"})))}},PQMj:function(e,t,n){},bE4E:function(e,t,n){},jCWc:function(e,t,n){"use strict";n("cIOH"),n("1GLa")},kPKH:function(e,t,n){"use strict";var a=n("/kpp");t["a"]=a["a"]}}]);