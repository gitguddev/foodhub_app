(this.webpackJsonpfoodhub=this.webpackJsonpfoodhub||[]).push([[23],{201:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a.n(n),c=a(24),u=a(37),s=a(0),i=a.n(s),o=a(25),l=a(3),p=a(17),f=a(96),d=a.n(f),m=a(90),b=a(202),h=a.n(b),g=a(223),v=a(247),w=a(86),x=a(87),O=a(28);function j(){return(j=Object(u.a)(r.a.mark((function e(t,n){var s,i,o,l,p,f,d,m,b,w,x,j,y,E,k,R,_;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(e,t){var a=document.createElement("a");a.href=e,a.target="_blank",a.click(),a.remove()},f=function(e,t,a){var n=new Blob([e],{type:a}),r=window.URL.createObjectURL(n);d(r),setTimeout((function(){return window.URL.revokeObjectURL(r)}),1e3)},e.next=4,g.PDFDocument.create();case 4:return(s=e.sent).registerFontkit(v.a),e.next=8,Promise.all([a.e(26).then(a.t.bind(null,265,7)).then(function(){var e=Object(u.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.default,e.t0=s,e.next=4,fetch(a).then((function(e){return e.arrayBuffer()}));case 4:return e.t1=e.sent,e.abrupt("return",e.t0.embedFont.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.e(27).then(a.t.bind(null,266,7)).then(function(){var e=Object(u.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.default,e.t0=s,e.next=4,fetch(a).then((function(e){return e.arrayBuffer()}));case 4:return e.t1=e.sent,e.abrupt("return",e.t0.embedJpg.call(e.t0,e.t1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())]);case 8:i=e.sent,o=Object(c.a)(i,2),l=o[0],p=o[1],m=1;case 13:if(!(m<=n)){e.next=33;break}return b=s.addPage(),w=b.getSize(),x=w.height,j=w.width,e.next=18,h.a.toDataURL("".concat(O.c,"://").concat(O.d,"/restaurant/auth/").concat(t,"/").concat(m),{width:j/2});case 18:return y=e.sent,E="\u0e42\u0e15\u0e4a\u0e30\u0e17\u0e35\u0e48"+m,50,k=l.widthOfTextAtSize(E,50),b.drawImage(p,{x:0,y:0,width:j,height:x}),b.drawText(E,{x:j/2-k/2-10,y:45,size:50,font:l,color:Object(g.rgb)(1,1,1)}),b.moveTo(j/2,x/2),e.next=27,s.embedPng(y);case 27:R=e.sent,_=R,b.drawImage(R,{x:j/2-_.width/2,y:x/2-_.height/2,width:_.width,height:_.height});case 30:m++,e.next=13;break;case 33:s.save().then((function(e){return f(e,"qrcode.pdf","application/pdf")}));case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(){var e=Object(l.h)(),t=Object(l.g)(),a=Object(s.useRef)(),n=Object(s.useRef)(),f=Object(s.useState)(""),b=Object(c.a)(f,2),h=b[0],g=b[1],v=Object(s.useState)(""),O=Object(c.a)(v,2),y=O[0],E=O[1],k=Object(s.useState)(0),R=Object(c.a)(k,2),_=R[0],S=R[1],U=Object(s.useState)(""),L=Object(c.a)(U,2),C=L[0],F=L[1],D=Object(s.useState)(),N=Object(c.a)(D,2),q=N[0],P=N[1],T=Object(p.a)({promiseFn:o.b,url:"/manager/restaurant/get.php?id=".concat(e.restaurant_id,"&user_uid=").concat(m.a.currentUser.uid),onResolve:function(e){var t=e.result;g(t.name),E(t.info),S(t.table_quantity),F(t.img)}}),B=T.error,z=T.data;function J(){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(r.a.mark((function a(){var n;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(null===(n=prompt("\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"))){a.next=10;break}if(n!==h){a.next=9;break}return a.next=5,Object(o.b)({url:"/manager/restaurant/delete.php?id=".concat(e.restaurant_id,"&user_uid=").concat(m.a.currentUser.uid)});case 5:"success"===a.sent.message?t.push("/manager/list"):P(i.a.createElement("span",{className:d.a.error},"\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e43\u0e19\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23")),a.next=10;break;case 9:J();case 10:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function I(){return(I=Object(u.a)(r.a.mark((function t(n){var c,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),u=new FormData,(null===(c=a.current.files)||void 0===c?void 0:c.length)>0&&u.append("image",a.current.files[0]),t.next=5,Object(o.b)({url:"/manager/restaurant/update.php?id=".concat(e.restaurant_id,"&name=").concat(h,"&info=").concat(y,"&table_quantity=").concat(_,"&user_uid=").concat(m.a.currentUser.uid),option:{method:"POST",body:u}});case 5:"success"===t.sent.message?P(i.a.createElement("span",{className:d.a.success},"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08")):P(i.a.createElement("span",{className:d.a.error},"\u0e40\u0e01\u0e34\u0e14\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e43\u0e19\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return B||("success"===(null===z||void 0===z?void 0:z.message)?i.a.createElement("div",null,i.a.createElement("big",null,i.a.createElement("b",null,"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25")),i.a.createElement("form",{className:d.a.form,onSubmit:function(e){return I.apply(this,arguments)}},"\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23",i.a.createElement("input",{type:"text",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23",value:h,onChange:function(e){var t=e.target;g(t.value)},required:!0}),"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32",i.a.createElement("textarea",{type:"text",placeholder:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32",value:y,onChange:function(e){var t=e.target;E(t.value)},required:!0,rows:4,maxLength:150}),i.a.createElement("label",null,"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e42\u0e15\u0e4a\u0e30\u0e20\u0e32\u0e22\u0e43\u0e19\u0e23\u0e49\u0e32\u0e19"," ",i.a.createElement("input",{type:"number",min:0,max:99,value:_,onChange:function(e){var t=e.target;S(t.value)}})," ",i.a.createElement("button",{type:"button",onClick:function(){return function(e,t){return j.apply(this,arguments)}(e.restaurant_id,_)}},i.a.createElement(w.a,{icon:x.r})," \u0e1b\u0e23\u0e34\u0e49\u0e19 QR Code")),"\u0e23\u0e39\u0e1b\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23",i.a.createElement("img",{ref:n,src:C,alt:"\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23",style:{height:200,objectFit:"cover",border:"1px solid #232323",marginBottom:10}}),i.a.createElement("input",{type:"file",onChange:function(e){var t=e.target,a=new FileReader;a.onload=function(e){var t=e.target;n.current.src=t.result},a.readAsDataURL(t.files[0])},ref:a,accept:"image/*"}),i.a.createElement("span",{className:d.a.status},q),i.a.createElement("input",{type:"submit",value:"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"}),i.a.createElement("input",{onClick:J,className:d.a.danger,type:"button",value:"\u0e25\u0e1a\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23"}))):"Loading")}}}]);
//# sourceMappingURL=23.89b64a24.chunk.js.map