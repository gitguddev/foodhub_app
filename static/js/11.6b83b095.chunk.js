(this.webpackJsonpfoodhub=this.webpackJsonpfoodhub||[]).push([[11],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(24),n(0);var a=n(125),r=n.n(a),c=n(27),o="".concat(c.g,"://").concat(c.e,":").concat(c.f);function l(e){return e?r()(o,{query:{method:"manager",uid:e.uid}}):r()(o,{query:{method:"restaurant",authentication:window.localStorage.getItem("auth")}})}},141:function(e,t,n){"use strict";n.r(t),n.d(t,"Socket",(function(){return k}));var a=n(26),r=n.n(a),c=n(37),o=n(24),l=n(33),u=n(0),i=n.n(u),s=n(87),m=n(195),p=n.n(m),d=n(86),h=n(3),f=n(16),b=n(36),v=n(34),E=n(110),g=n(25),_=n(27);function j(){var e=Object(l.a)(["\n  font-size: 1em;\n  position: absolute;\n  top: 53%;\n  left: 50%;\n  transform: translate(-50%);\n"]);return j=function(){return e},e}function O(){var e=Object(l.a)(["\n  padding: 5px;\n  width: 50%;\n  border: 2px white solid;\n  background-color: transparent;\n  color: white;\n  border-radius: 3px;\n  margin-left: auto;\n  animation: "," 0.8s;\n  position: absolute;\n  right: 10px;\n"]);return O=function(){return e},e}function w(){var e=Object(l.a)(["\n\tfrom {\n\t\twidth: 0%;\n\t}\n\tto {\n\t\twidth: 50%;\n\t}\n"]);return w=function(){return e},e}function y(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return y=function(){return e},e}var x=Object(E.a)(!1),k=Object(u.createContext)(),S=v.a.div(y()),R=Object(v.b)(w()),I=v.a.input.attrs((function(e){return{type:"text",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e32\u0e2b\u0e32\u0e23",autoFocus:!0}}))(O(),R),F=v.a.span(j()),N=Object(u.lazy)((function(){return n.e(17).then(n.bind(null,262))})),q=Object(u.lazy)((function(){return n.e(15).then(n.bind(null,263))})),z=Object(u.lazy)((function(){return n.e(16).then(n.bind(null,264))}));function B(e){var t=e.icon,n=e.title,a=e.url;return i.a.createElement(f.b,{to:a},i.a.createElement("div",{className:p.a.navBT},i.a.createElement(d.a,{icon:t}),n))}t.default=function(){var e=Object(h.i)(),t=Object(h.g)(),n=Object(u.useState)(""),a=Object(o.a)(n,2),l=a[0],m=a[1],v=Object(u.useState)(!!x.connected),E=Object(o.a)(v,2),j=E[0],O=E[1],w=Object(u.useState)(0),y=Object(o.a)(w,2),R=y[0],C=y[1];return Object(u.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)({url:"/restaurant/sessions/confirm.php"});case 2:"session ended"===(null===(t=e.sent)||void 0===t?void 0:t.message)&&(alert("\u0e16\u0e39\u0e01\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e42\u0e14\u0e22\u0e17\u0e32\u0e07\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"),window.localStorage.removeItem("auth"),window.location.href=_.c+"://"+_.d),"success"===(null===t||void 0===t?void 0:t.message)&&1===parseInt(t.result.confirm)&&C(1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(0===R){var t=setInterval((function(){return e.apply(this,arguments)}),1e3);return function(){return clearInterval(t)}}})),x.on("connect",(function(){return O(!0)})),x.on("disconnect",(function(){return O(!1)})),x.on("connect_error",(function(){return O(!1)})),x.on("completeBill",function(){var e=Object(c.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)({url:"/restaurant/get_table_number.php"});case 2:"session ended"===(null===(a=e.sent)||void 0===a?void 0:a.message)&&t.push("/bill");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),window.localStorage.getItem("auth")?0===R?i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,null),i.a.createElement(F,null,"\u0e23\u0e2d\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e08\u0e32\u0e01\u0e17\u0e32\u0e07\u0e23\u0e49\u0e32\u0e19")):j?i.a.createElement(k.Provider,{value:{socket:x,connected:j}},i.a.createElement("div",{className:p.a.container},i.a.createElement("div",{className:p.a.header},i.a.createElement(h.d,null,i.a.createElement(h.b,{path:"".concat(e.path,"/cart")},"\u0e15\u0e23\u0e30\u0e01\u0e23\u0e49\u0e32"),i.a.createElement(h.b,{path:"".concat(e.path,"/catalog/search")},i.a.createElement(S,null,i.a.createElement("span",null,"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2d\u0e32\u0e2b\u0e32\u0e23"),i.a.createElement(I,{value:l,onChange:function(e){m(e.target.value)}}))),i.a.createElement(h.b,{path:"".concat(e.path,"/catalog")},i.a.createElement(S,null,i.a.createElement("span",null,"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"),i.a.createElement(f.b,{style:{color:"white"},to:"".concat(e.url,"/catalog/search")},i.a.createElement(d.a,{icon:s.u})))),i.a.createElement(h.b,{path:"".concat(e.path)},"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01"))),i.a.createElement("div",{className:p.a.content},i.a.createElement(u.Suspense,{fallback:i.a.createElement(b.a,null)},i.a.createElement(h.d,null,i.a.createElement(h.b,{path:"".concat(e.path,"/cart"),component:q}),i.a.createElement(h.b,{path:"".concat(e.path,"/catalog/search")},i.a.createElement(z,{search:l})),i.a.createElement(h.b,{path:"".concat(e.path,"/catalog"),component:z}),i.a.createElement(h.b,{path:"".concat(e.path),component:N})))),i.a.createElement("div",{className:p.a.navigator},i.a.createElement(B,{icon:s.t,title:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",url:"".concat(e.url,"/catalog")}),i.a.createElement(B,{icon:s.m,title:"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01",url:"".concat(e.url)}),i.a.createElement(B,{icon:s.v,title:"\u0e15\u0e23\u0e30\u0e01\u0e23\u0e49\u0e32",url:"".concat(e.url,"/cart")})))):i.a.createElement(b.a,null):i.a.createElement(h.a,{to:"/"})}},195:function(e,t,n){e.exports={container:"Restaurant_container__fOKtj",header:"Restaurant_header__Y1P8S",navigator:"Restaurant_navigator__2yGFV",navBT:"Restaurant_navBT__qycDx",content:"Restaurant_content__gnv30",homeContainer:"Restaurant_homeContainer__1v34V",popularFood:"Restaurant_popularFood__1XXuE",seeMore:"Restaurant_seeMore__kl58q"}}}]);
//# sourceMappingURL=11.6b83b095.chunk.js.map