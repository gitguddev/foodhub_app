(this.webpackJsonpfoodhub=this.webpackJsonpfoodhub||[]).push([[20],{256:function(e,n,t){"use strict";t.r(n);var r=t(26),a=t.n(r),c=t(37),o=t(33),u=t(0),l=t.n(u),s=t(17),i=t(25),d=t(90),m=t(3),p=t(34),f=t(86),h=t(87),b=t(155);function g(){var e=Object(o.a)(["\n  color: ",";\n\n  &:hover {\n    opacity: 0.3;\n    cursor: pointer;\n    transition: all 0.1s;\n  }\n"]);return g=function(){return e},e}function E(){var e=Object(o.a)(["\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85em;\n  border-radius: 3px;\n  box-sizing: border-box;\n\n  th {\n    background-color: #232323;\n    color: white;\n  }\n  td {\n    border-bottom: 1px solid #232323;\n  }\n  td,\n  th {\n    text-align: center;\n    padding: 5px;\n    width: calc(100% / 6) !important;\n    overflow: hidden;\n  }\n  .foodImage {\n    width: 100px;\n    height: 80px;\n    object-fit: cover;\n    background-color: #ccc;\n    border-radius: 3px;\n  }\n  .statusOperator {\n    margin-top: 10px;\n    display: flex;\n    justify-content: center;\n  }\n  .statusOperator > svg {\n    margin: 0px 10px;\n  }\n\n  @media only screen and (max-width: 800px) {\n    .imageCell {\n      display: none;\n    }\n    td,\n    th {\n      width: calc(100% / 5) !important;\n    }\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(o.a)(["\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-radius: 5px;\n  border: 1px solid #232323;\n"]);return v=function(){return e},e}var x=["\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e2d\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19","\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e01\u0e23\u0e30\u0e1a\u0e27\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33","\u0e40\u0e2a\u0e34\u0e23\u0e4c\u0e1f\u0e41\u0e25\u0e49\u0e27","\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e41\u0e25\u0e49\u0e27"],w=p.a.div(v()),O=p.a.table(E()),j=Object(p.a)(f.a)(g(),(function(e){return e.danger?"red":"green"}));n.default=function(){var e=Object(m.h)().restaurant_id,n=Object(s.a)({promiseFn:i.b,url:"/manager/order/select.php?restaurant_id=".concat(e,"&user_uid=").concat(d.a.currentUser.uid)}),t=n.data,r=n.error,o=n.reload,p=Object(u.useContext)(b.Socket),f=p.socket,g=p.connected;function E(){return(E=Object(c.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.b)({url:"/manager/order/cancel.php?restaurant_id=".concat(e,"&user_uid=").concat(d.a.currentUser.uid,"&id=").concat(t)});case 2:"success"===(r=n.sent).message?(f.emit("update"),o()):console.error(r.message);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return(v=Object(c.a)(a.a.mark((function n(t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.b)({url:"/manager/order/update.php?restaurant_id=".concat(e,"&user_uid=").concat(d.a.currentUser.uid,"&id=").concat(t)});case 2:"success"===(r=n.sent).message?(f.emit("update"),o()):console.error(r.message);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}if(Object(u.useEffect)((function(){return f.on("cancel",o),f.on("order",o),f.on("update",o),function(){f.off("order"),f.off("cancel"),f.off("update")}}),[e,f,o]),r)return r;if("success"===(null===t||void 0===t?void 0:t.message)&&g){var y,k=(null===(y=t.result)||void 0===y?void 0:y.length)>0?t.result.filter((function(e){return e.status<2})):[];return l.a.createElement(w,null,l.a.createElement(O,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"imageCell"},"\u0e23\u0e39\u0e1b\u0e2d\u0e32\u0e2b\u0e32\u0e23"),l.a.createElement("th",null,"\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e32\u0e2b\u0e32\u0e23"),l.a.createElement("th",null,"\u0e08\u0e33\u0e19\u0e27\u0e19"),l.a.createElement("th",null,"\u0e42\u0e15\u0e4a\u0e30"),l.a.createElement("th",null,"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38"),l.a.createElement("th",null,"\u0e2a\u0e16\u0e32\u0e19\u0e30"))),l.a.createElement("tbody",null,k.length>0?k.map((function(e,n){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",{className:"imageCell"},l.a.createElement("img",{className:"foodImage",src:e.img,alt:"food"})),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null,e.restaurant_number),l.a.createElement("td",null,e.note||"-"),l.a.createElement("td",null,l.a.createElement("span",null,x[e.status]),l.a.createElement("div",{className:"statusOperator"},e.status>=0&&e.status<2&&l.a.createElement(j,{icon:h.e,onClick:function(){return function(e){return v.apply(this,arguments)}(e.id)}}),e.status<=0&&l.a.createElement(j,{icon:h.y,onClick:function(){return function(e){return E.apply(this,arguments)}(e.id)},danger:"true"}))))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:6},"\u0e44\u0e21\u0e48\u0e21\u0e35\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d\u0e43\u0e19\u0e02\u0e13\u0e30\u0e19\u0e35\u0e49")))))}return"Loading"}}}]);
//# sourceMappingURL=20.1c0dfc8a.chunk.js.map