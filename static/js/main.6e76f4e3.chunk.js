(this.webpackJsonpfoodhub=this.webpackJsonpfoodhub||[]).push([[3],{25:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l}));var r=n(1),a=n(17),o=n(3),c=n(28),i="".concat(c.b,"://").concat(c.a);function s(e){var t=e.url,n=e.option,a=e.restaurant,o=Object(r.a)({},n);return window.localStorage.getItem("jwt")&&!a&&(o.headers||(o.headers={}),o.headers.Authorization||(o.headers.Authorization="Bearer "+window.localStorage.getItem("jwt"))),fetch("".concat(i).concat(t),Object(r.a)({headers:{Accept:"application/json"},mode:"cors"},o)).then((function(e){return e.json()})).catch((function(e){return{message:e}}))}function u(e){var t=e.url;e.option;return s({url:t,restaurant:!0,option:{headers:{Authorization:"Bearer "+window.localStorage.getItem("auth"),Accept:"application/json"}}})}function l(e,t){var n=Object(o.g)();return Object(a.a)(Object(r.a)(Object(r.a)({promiseFn:u,url:e},t),{},{onResolve:function(e){switch(e.message){case"session ended":n.push("/bill");break;case"billing":n.push("/restaurant/cart/billing");break;case"token parse error":alert("token \u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"),window.localStorage.removeItem("auth"),n.push("/error");break;case!1:alert("\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e02\u0e36\u0e49\u0e19"),n.push("/error")}}}))}t.b=s},28:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return o}));var r="gitguddev.github.io/foodhub_app",a="https",o=443,c="35.247.129.108/foodhub_api",i="https",s="35.247.129.108",u="ws",l=5e3},36:function(e,t,n){"use strict";var r=n(33),a=n(0),o=n.n(a),c=n(34),i=n(41),s=n.n(i);function u(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n"]);return u=function(){return e},e}var l=c.a.div(u());t.a=function(e){return o.a.createElement(l,null,o.a.createElement(s.a,Object.assign({type:"ThreeDots",color:"#aaa"},e)))}},47:function(e,t,n){e.exports=n(78)},52:function(e,t,n){},53:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(38),c=n.n(o),i=(n(52),n(53),n(16)),s=n(3),u=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(7)]).then(n.bind(null,155))})),l=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,141))})),d=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(25)]).then(n.bind(null,268))})),h=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,269))})),b=n(26),p=n.n(b),f=n(37),m=n(25),g=n(17);function w(e){return v.apply(this,arguments)}function v(){return(v=Object(f.a)(p.a.mark((function e(t){var n,r,a,o,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.restaurant_id,r=t.table_number,a=t.history,!(o=window.localStorage).getItem("auth")){e.next=19;break}return e.next=5,Object(m.a)({url:"/manager/checkAuth.php?restaurant_id=".concat(n,"&table_number=").concat(r)});case 5:c=e.sent,e.t0=c.message,e.next="success"===e.t0?9:"billing"===e.t0?10:"session ended"===e.t0?11:"token parse error"===e.t0?13:16;break;case 9:return e.abrupt("return",{message:"success"});case 10:return e.abrupt("return",{message:"billing"});case 11:return a.push("/bill"),e.abrupt("break",17);case 13:throw o.removeItem("auth"),alert("token \u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07"),new Error(c.message);case 16:throw new Error(c.message);case 17:e.next=34;break;case 19:return e.next=21,Object(m.b)({url:"/manager/auth.php?restaurant_id=".concat(n,"&table_number=").concat(r),restaurant:!0});case 21:i=e.sent,e.t1=i.message,e.next="success"===e.t1?25:"already has session"===e.t1?28:"token encode error"===e.t1?30:33;break;case 25:return console.log("success"),o.setItem("auth",i.result),e.abrupt("return",{message:"success"});case 28:throw alert("\u0e21\u0e35\u0e04\u0e19\u0e19\u0e31\u0e48\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e42\u0e15\u0e4a\u0e30\u0e19\u0e35\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27"),new Error(i.message);case 30:throw o.removeItem("auth"),alert("\u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e43\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"),new Error(i.message);case 33:throw new Error(i.message);case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(){var e=Object(s.g)(),t=Object(s.h)(),n=t.restaurant_id,r=t.table_number,o=Object(g.a)({promiseFn:w,restaurant_id:n,table_number:r,history:e}),c=o.data;return o.error?a.a.createElement(s.a,{to:"/error"}):"success"===(null===c||void 0===c?void 0:c.message)?a.a.createElement(s.a,{to:"/restaurant"}):"billing"===(null===c||void 0===c?void 0:c.message)?a.a.createElement(s.a,{to:"/restaurant/cart/billing"}):"Authenticationing..."},k=n(36);var j=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(i.a,{basename:"/foodhub_app"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(k.a,null)},a.a.createElement(s.d,null,a.a.createElement(s.b,{path:"/manager",component:u}),a.a.createElement(s.b,{path:"/restaurant/auth/:restaurant_id/:table_number",component:E}),a.a.createElement(s.b,{path:"/restaurant",component:l}),a.a.createElement(s.b,{path:"/bill",component:d}),a.a.createElement(s.b,{path:"/getting-started"},a.a.createElement("div",null,"Getting Started")),a.a.createElement(s.b,{path:"/"},a.a.createElement(h,null))))))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/foodhub_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/foodhub_app","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[47,4,6]]]);
//# sourceMappingURL=main.6e76f4e3.chunk.js.map