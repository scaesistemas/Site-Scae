(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-5279c55c":"78f20584","chunk-54669b79":"b45a9a88"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-5279c55c":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-5279c55c":"565efde2","chunk-54669b79":"31d6cfe0"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4c03":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-style-2 ptb--30 bg_image bg_image--1",attrs:{"data-black-overlay":"6"}},[n("div",{staticClass:"wrapper plr--50 plr_sm--20"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{lg:"4",md:"4",sm:"6",cols:"12"}},[n("div",{staticClass:"inner"},[n("div",{staticClass:"logo text-center text-sm-left mb_sm--20"},[n("router-link",{attrs:{to:"/#home"}},[n("img",{attrs:{height:"50px",src:t.logo,alt:"Logo images"}})])],1)])]),n("v-col",{attrs:{lg:"4",md:"4",sm:"6",cols:"12"}},[n("div",{staticClass:"inner text-center"},[n("ul",{staticClass:"social-share rn-lg-size d-flex justify-center liststyle"},t._l(t.socialList,(function(t,e){return n("li",{key:e},[n("a",{attrs:{target:"_blank",href:t.url}},[n("i",{staticClass:"fab",class:t.icon})])])})),0)])]),n("v-col",{attrs:{lg:"4",md:"4",sm:"12",cols:"12"}},[n("div",{staticClass:"inner text-md-right text-center mt_md--20 mt_sm--20"},[n("div",{staticClass:"text"},[n("p",[t._v(" Copyright © "+t._s((new Date).getFullYear())+" ")])])])])],1)],1)])},r=[],o={data(){return{logo:n("ca98"),socialList:[{icon:"fa-facebook-f",url:"https://www.facebook.com/scae.adm"},{icon:"fa-instagram-square",url:"https://www.instagram.com/scae.adm"},{icon:"fa-youtube",url:"https://www.youtube.com/channel/UCtcodK3IjGdg9SnsYu1TWaw"},{icon:"fa-whatsapp",url:"https://materiais.scae.adm.br/lp-whatsapp"},{icon:"fa-linkedin",url:"https://www.linkedin.com/company/scae-sistema-corporativo-de-administra%C3%A7%C3%A3o-empresarial/"}]}}},s=o,i=n("2877"),c=n("6544"),l=n.n(c),u=n("62ad"),f=n("0fd9"),p=Object(i["a"])(s,a,r,!1,null,null,null);e["a"]=p.exports;l()(p,{VCol:u["a"],VRow:f["a"]})},"4e62":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-main",[n("router-view")],1),n("v-fab-transition",[n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",color:"white",fixed:"",width:"50",height:"50",bottom:"",right:""},on:{click:t.toTop}},[n("i",{staticClass:"fa fa-angle-up"})])],1)],1)},o=[],s={data:()=>({fab:!1}),methods:{onScroll(t){if("undefined"===typeof window)return;const e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>60},toTop(){this.$vuetify.goTo(0)}}},i=s,c=(n("b02f"),n("2877")),l=n("6544"),u=n.n(l),f=n("7496"),p=n("8336"),d=n("0789"),m=n("f6c4"),h=n("269a"),v=n.n(h),g=n("f977"),b=Object(c["a"])(i,r,o,!1,null,"c1931580",null),w=b.exports;u()(b,{VApp:f["a"],VBtn:p["a"],VFabTransition:d["b"],VMain:m["a"]}),v()(b,{Scroll:g["b"]});var y=n("8c4f"),C=n("3384"),_=n.n(C),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"error-page-inner bg_color--4"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"inner"},[n("h1",{staticClass:"heading-title theme-gradient"},[t._v("404!")]),n("h3",{staticClass:"sub-title"},[t._v("Página não encontrada.")]),n("span",[t._v("A página que você estava procurando não foi encontrada.")]),n("div",{staticClass:"error-button"},[n("router-link",{staticClass:"rn-button-style--2 btn_solid",attrs:{to:"/"}},[t._v("Voltar à página inicial")])],1)])])],1)],1)],1),n("FooterTwo")],1)},x=[],j=n("4c03"),O={components:{FooterTwo:j["a"]},data(){return{}}},S=O,T=n("62ad"),E=n("a523"),A=n("0fd9"),P=Object(c["a"])(S,k,x,!1,null,null,null),F=P.exports;u()(P,{VCol:T["a"],VContainer:E["a"],VRow:A["a"]}),a["a"].use(y["a"]);const V=[{path:"/",name:"Scae",meta:{title:"SCAE"},component:()=>n.e("chunk-5279c55c").then(n.bind(null,"39d6"))},{path:"/contact",name:"Contato",meta:{title:"Contato"},component:()=>n.e("chunk-54669b79").then(n.bind(null,"3345"))},{path:"*",component:F,meta:{title:"Erro 404"}}],L=new y["a"]({mode:"history",routes:V,scrollBehavior:(t,e,n)=>{let a=0;return t.hash?a=t.hash:n&&(a=n.y),_()(a)}});L.beforeEach((t,e,n)=>{document.title=t.meta.title,n()});var N=L,B=(n("5363"),n("f309"));a["a"].use(B["a"]);var D=new B["a"]({theme:{themes:{light:{primary:"#f6631e",success:"#414042",accent:"#ee9613",teal:"#26B0A1",warning:"#FF8F3C",error:"#FF585A",cyan:"#42D3D5"}}},icons:{iconfont:"mdi"}}),M=n("98c9"),$=n("5547"),q=n("e057"),Y=n.n(q);n("7b8d"),n("6a2c"),n("15f5"),n("2223"),n("c1c3");a["a"].config.productionTip=!1,a["a"].use(M["a"]),a["a"].use($["a"]),a["a"].use(Y.a),new a["a"]({router:N,vuetify:D,render:t=>t(w)}).$mount("#app")},b02f:function(t,e,n){"use strict";n("4e62")},c1c3:function(t,e,n){},ca98:function(t,e,n){t.exports=n.p+"img/logoscae.88236838.png"}});
//# sourceMappingURL=app.6541161d.js.map