(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7,6],{"/7QA":function(n,a,s){"use strict";s.d(a,"d",(function(){return i})),s.d(a,"c",(function(){return w})),s.d(a,"e",(function(){return E})),s.d(a,"a",(function(){return x.a})),s.d(a,"b",(function(){return j}));var t,e=s("ODXe"),p=s("uFwe"),o=s("q1tI"),c=new Set,u={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function l(){t||(t={size:{height:0,width:0},screen:"xs"},r(),window.addEventListener("resize",()=>{var n=t;if(r(),n!==t){var a,s=Object(p["a"])(c);try{for(s.s();!(a=s.n()).done;){var e=a.value;e()}}catch(o){s.e(o)}finally{s.f()}}}))}function r(){for(var n,a=window.innerWidth,s=window.innerHeight,e={size:{width:a,height:s}},p=!1,o=0,c=Object.keys(u);o<c.length;o++){var l=c[o];if(n=u[l],a>=n.min&&a<n.max){e.screen=l,p=!0;break}}(p||e.size.width!==t.size.width||e.size.height!==t.size.height)&&(t=e)}function i(){l();var n=Object(o["useState"])(t),a=Object(e["a"])(n,2),s=a[0],p=a[1];return Object(o["useEffect"])(()=>{var n=()=>{p(t)};return c.add(n),()=>{c.delete(n)}},[]),s}var k,m=s("VTBJ"),d=s("Ff2n"),f=s("TTbB"),h=(s("BXCy"),s("n+Aq")),b=(n,a)=>{var s=Object(h["b"])(n),t=Object(e["a"])(s,2),p=t[0],o=t[1];return Object(h["c"])(()=>{var n=a();o(n)}),[p,o]},g=b,y="__WETRIAL_USEFORMTABLE__";function v(n,a){var s=g("".concat(y).concat(a.cacheKey),()=>Q()),t=Object(e["a"])(s,1),p=t[0],c=p||{},u=c.active,l=c.defaultType,r=void 0===l?"simple":l,i=c.defaultParams,b=a.form,v=a.refreshDeps,w=void 0===v?[]:v,j=a.manual,O=a.defaultType,x=void 0===O?a.cacheKey&&u?r:"simple":O,E=a.defaultParams,F=void 0===E?a.cacheKey&&u?i:void 0:E,C=(a.cacheKey,Object(d["a"])(a,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),T=Object(f["a"])(n,Object(m["a"])({formatResult:k},C,{paginated:!0,manual:!0})),B=T.params,S=T.run,I=B[2]||{},z=Object(o["useState"])(I.type||x),R=Object(e["a"])(z,2),_=R[0],J=R[1],P=Object(o["useState"])(I.allFormData||F&&F[1]||{}),q=Object(e["a"])(P,2),A=q[0],D=q[1],K=Object(o["useCallback"])(()=>{if(!b)return{};if(b.getFieldInstance){var n=b.getFieldsValue(),a={};return Object.keys(n).forEach(s=>{b.getFieldInstance&&!b.getFieldInstance(s)||(a[s]=n[s])}),a}return b.getFieldsValue(null,()=>!0)},[b]),N=Object(o["useRef"])(b);N.current=b,Object(o["useEffect"])(()=>{if(N.current)if(N.current.getFieldInstance){var n={};Object.keys(A).forEach(a=>{N.current.getFieldInstance&&!N.current.getFieldInstance(a)||(n[a]=A[a])}),N.current.setFieldsValue(n)}else N.current.setFieldsValue(A)},[_]),Object(o["useEffect"])(()=>{B.length>0?S(...B):j||L(F)},[]);var V=Object(o["useCallback"])(()=>{var n=K();D(Object(m["a"])({},A,{},n));var a="simple"===_?"advance":"simple";J(a)},[_,A,K]),L=Object(o["useCallback"])(n=>{setTimeout(()=>{var s=K(),t=Object(m["a"])({},A,{},s);D(t),S(n?n[0]:Object(m["a"])({pageSize:a.defaultPageSize||10},B[0]||{},{current:1}),s,{allFormData:t,type:_})})},[K,S,B,A,_]),M=Object(o["useCallback"])(()=>{b&&b.resetFields(),L()},[b,L]),H=Object(h["a"])(M),Q=()=>{var n=T.tableProps.pagination,a=B[0]||{},s=a.sorter;return{active:!1,defaultType:_,defaultParams:[{current:n.current,pageSize:n.pageSize,sorter:s?{order:s.order,field:s.field}:void 0},A]}};return Object(h["d"])(()=>{j||H()},[...w]),Object(m["a"])({},T,{search:{submit:()=>{L()},type:_,changeType:V,reset:M}})}var w=v,j=n=>{if(sessionStorage){var a="".concat(y).concat(n),s=sessionStorage.getItem(a);if(null!==s){var t=JSON.parse(s);sessionStorage.setItem(a,JSON.stringify(Object(m["a"])({},t,{active:!0})))}}},O=s("kRpH"),x=s.n(O);function E(n,a){Object(o["useEffect"])(()=>{var s=x.a.subscribe(n,a);return()=>{x.a.unsubscribe(s)}},[])}},dMjx:function(n,a,s){"use strict";s.r(a);s("+L6B");var t=s("2/Rp"),e=s("q1tI"),p=s.n(e),o=s("/7QA"),c=s("9kvl");a["default"]=()=>p.a.createElement(t["a"],{type:"default",onClick:()=>{Object(o["b"])("antd/use-form-table"),c["c"].push({pathname:"/hooks/antd/use-form-table",hash:"#\u6570\u636e\u7f13\u5b58"})}},"\u8fd4\u56deuseFormTable\u9875\u9762")},rvlF:function(n,a,s){"use strict";s.r(a);var t=s("wx14"),e=s("q1tI"),p=s.n(e),o=(s("B2uJ"),s("+su7"),s("5Yjd")),c=s.n(o),u=p.a.memo((function(){var n=t(s("q1tI")),a=t(s("dMjx"));function t(n){return n&&n.__esModule?n:{default:n}}var e=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(e)}));a["default"]=function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"markdown"},p.a.createElement("h1",{id:"sample"},p.a.createElement("a",{"aria-hidden":"true",href:"#sample"},p.a.createElement("span",{className:"icon icon-link"})),"Sample"),p.a.createElement("p",null,"\u4f9b\u5176\u4ed6\u9875\u9762\u6f14\u793a\u4f7f\u7528"),p.a.createElement("h2",{id:"useformtable-\u6570\u636e\u7f13\u5b58"},p.a.createElement("a",{"aria-hidden":"true",href:"#useformtable-\u6570\u636e\u7f13\u5b58"},p.a.createElement("span",{className:"icon icon-link"})),"useFormTable \u6570\u636e\u7f13\u5b58")),p.a.createElement(c.a,Object(t["a"])({source:{raw:"import React from 'react';\nimport { Button } from 'antd';\nimport { activeCache } from '@wetrial/hooks';\nimport { history } from 'umi';\n\nexport default () => {\n  return (\n    <Button\n      type=\"default\"\n      onClick={() => {\n        activeCache('antd/use-form-table');\n        history.push({\n          pathname: '/hooks/antd/use-form-table',\n          hash: '#\u6570\u636e\u7f13\u5b58',\n        });\n      }}\n    >\n      \u8fd4\u56deuseFormTable\u9875\u9762\n    </Button>\n  );\n};\n",jsx:'<pre class="language-jsx"><code class="language-jsx"><span class="token keyword module">import</span> <span class="token maybe-class-name">React</span> <span class="token keyword module">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword module">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword module">import</span> <span class="token punctuation">{</span> activeCache <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'@wetrial/hooks\'</span><span class="token punctuation">;</span>\n<span class="token keyword module">import</span> <span class="token punctuation">{</span> history <span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">\'umi\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword module">export</span> <span class="token keyword module">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span>\n    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span>\n    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n      <span class="token function">activeCache</span><span class="token punctuation">(</span><span class="token string">\'antd/use-form-table\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      history<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        pathname<span class="token punctuation">:</span> <span class="token string">\'/hooks/antd/use-form-table\'</span><span class="token punctuation">,</span>\n        hash<span class="token punctuation">:</span> <span class="token string">\'#\u6570\u636e\u7f13\u5b58\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span><span class="token plain-text">\n    \u8fd4\u56deuseFormTable\u9875\u9762\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre>',tsx:'<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token maybe-class-name">React</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> activeCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@wetrial/hooks\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> history <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'umi\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span><span class="token class-name">Button</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">activeCache</span><span class="token punctuation">(</span><span class="token string">\'antd/use-form-table\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        history<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          pathname<span class="token punctuation">:</span> <span class="token string">\'/hooks/antd/use-form-table\'</span><span class="token punctuation">,</span>\n          hash<span class="token punctuation">:</span> <span class="token string">\'#\u6570\u636e\u7f13\u5b58\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span><span class="token plain-text">\n      \u8fd4\u56deuseFormTable\u9875\u9762\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</code></pre>'}},{path:"/_demos/use-form-table",dependencies:{antd:"4.1.3","@wetrial/hooks":"2.0.1",umi:"3.1.1"}}),p.a.createElement(u,null)))}}}]);