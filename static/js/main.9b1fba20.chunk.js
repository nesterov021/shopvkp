(window.webpackJsonpshopvkp=window.webpackJsonpshopvkp||[]).push([[0],{129:function(e,t,a){e.exports=a(160)},156:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r),l=a(20),o=a.n(l),s=a(30),u=a.n(s),m=a(39),p=a(26),d=a(48),f=a.n(d),h=(a(135),a(24)),E=a.n(h),b=a(25),k=a.n(b),v=a(43),g=a.n(v),w=a(31),j=a.n(w),O=a(40),y=a.n(O),x=a(42),C=a.n(x),P=a(41),U=a.n(P),_=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(E.a,{id:t},c.a.createElement(k.a,null,"Example"),n&&c.a.createElement(j.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(U.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(j.a,{title:"Navigation Example"},c.a.createElement(C.a,null,c.a.createElement(g.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},A=a(32),I=a(47),K=a.n(I),S=a(44),V=a.n(S),N=a(45),W=a.n(N),J=a(46),T=a.n(J),z=(a(156),Object(A.b)()),B=function(e){return c.a.createElement(E.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(K.a,{onClick:e.go,"data-to":"home"},z===A.a?c.a.createElement(V.a,null):c.a.createElement(W.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},D=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),s=l[0],d=l[1],h=Object(n.useState)(null),E=Object(p.a)(h,2),b=E[0],k=E[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:b},c.a.createElement(_,{id:"home",fetchedUser:s,go:v}),c.a.createElement(B,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(D,null),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[129,1,2]]]);
//# sourceMappingURL=main.9b1fba20.chunk.js.map