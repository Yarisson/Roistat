(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],c=0,f=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},a=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7318a9ec"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}s[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a9b":function(e,t,n){"use strict";n("5454")},5454:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("1dce"),a=n.n(s),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("router-view")],1)},i=[],l=(n("5c0b"),n("2877")),u={},c=Object(l["a"])(u,o,i,!1,null,null,null),d=c.exports,f=n("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var p=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Users")],1)},v=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"users"},[n("button",{staticClass:"users__button",on:{click:e.openModal}},[e._v("Добавить")]),n("table",{staticClass:"users__table"},[e._m(0),e._l(e.allUsers,(function(t){return n("tr",{key:t,staticClass:"users__row"},[n("th",{staticClass:"users__head"},[e._v(e._s(t.name))]),n("th",{staticClass:"users__head"},[e._v(e._s(t.phone))])])}))],2),e.modalOpen?n("ModalUser",{on:{modalClose:e.modalCloseHandler}}):e._e()],1)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"users__row"},[n("th",{staticClass:"users__head"},[e._v("имя")]),n("th",{staticClass:"users__head"},[e._v("телефон")])])}],b=(n("96cf"),n("1da1")),g=n("5530"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-user"},[n("form",{staticClass:"modal-user__form",on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[n("h1",{staticClass:"modal-user__title"},[e._v("Добавить пользователя")]),n("button",{staticClass:"modal-user__button-close",on:{click:e.modalClose}}),n("div",{staticClass:"modal-user__input-field"},[n("label",{staticClass:"modal-user__label",attrs:{for:"name"}},[e._v("Имя")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{invalid:e.$v.name.$dirty&&!e.$v.name.required},attrs:{id:"name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e.$v.name.$dirty&&!e.$v.name.required?n("span",{staticClass:"modal-user__helper-text invalid"},[e._v("Введите имя пользователя ")]):e._e()]),n("div",{staticClass:"modal-user__input-field"},[[n("label",{staticClass:"modal-user__label",attrs:{for:"phone"}},[e._v("Телефон")]),n("vue-tel-input",{attrs:{id:"phone","preferred-countries":["ru","bl","by","fr","gr","it","gb","uk","ua","us"],"valid-characters-only":!0,"select-label":"Code"},on:{input:e.onInput},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("div",{staticClass:"modal-user__phone-info"},[e.tel.number?n("div",{staticStyle:{color:"#e83e8c"}},[n("span",[e._v(" Номер: "),n("strong",[e._v(e._s(e.tel.number))]),e._v(", ")]),n("span",[e._v(" Корректность: "),n("strong",[e._v(e._s(e.tel.valid))]),e._v(", ")]),n("span",[e._v(" Страна: "),n("strong",[e._v(e._s(e.tel.country))])])]):e._e()]),n("div",{staticClass:"modal-user__phone-info"},[n("v-row",{attrs:{justify:"start"}},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{on:{click:function(t){e.phone="+7 916 703 4643"}}},[e._v("Добавьте номер")])],1)],1)],1)]],2),e.allUsers.length>0?n("div",{staticClass:"modal-user__input-field"},[n("span",{staticClass:"modal-user__label"},[e._v("Имя Начальника:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.chief,expression:"chief"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.chief=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"chief"}},[e._v("Выберите один из вариантов")]),e._l(e.allUsers,(function(t){return n("option",{key:t},[e._v(" "+e._s(t.name)+" ")])}))],2)]):e._e(),n("button",{staticClass:"modal-user__button",attrs:{type:"submit"}},[e._v("Сохранить")])])])},w=[],C=(n("b0c0"),n("a9e3"),n("b5ae")),O=n("e75b"),j=n.n(O),k=n("2f62"),U={components:{VueTelInput:O["VueTelInput"]},data:function(){return{name:"",phone:{type:Number,default:1},chief:"",tel:{number:"",valid:!1,country:void 0}}},computed:Object(k["c"])(["allUsers"]),validations:{name:{required:C["required"]}},methods:Object(g["a"])(Object(g["a"])({modalClose:function(){this.$emit("modalClose")}},Object(k["d"])(["addUser"])),{},{submitHandler:function(){if(this.$v.$invalid)this.$v.$touch();else{this.addUser({name:this.name,phone:this.phone,chief:this.chief});var e=JSON.stringify(this.allUsers);localStorage.setItem("users",e),this.name="",this.phone=1,this.chief="",this.$emit("modalClose")}},onInput:function(e,t){var n=t.number,r=t.valid,s=t.country;this.tel.number=n.international,this.tel.valid=r,this.tel.country=s&&s.name}})},x=U,$=(n("bdc9"),Object(l["a"])(x,y,w,!1,null,null,null)),S=$.exports,P={name:"Users",data:function(){return{modalOpen:!1}},computed:Object(k["c"])(["allUsers"]),components:{ModalUser:S},methods:Object(g["a"])(Object(g["a"])(Object(g["a"])({},Object(k["d"])(["updateUsers"])),Object(k["b"])(["fetchUsers"])),{},{openModal:function(){this.modalOpen=!0},modalCloseHandler:function(){this.modalOpen=!1}}),mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!localStorage.getItem("users")){t.next=9;break}return t.prev=1,n=JSON.parse(localStorage.getItem("users")),t.next=5,e.$store.dispatch("fetchUsers",n);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},E=P,M=(n("2a9b"),Object(l["a"])(E,h,_,!1,null,null,null)),N=M.exports,H={name:"Home",components:{Users:N}},I=H,T=Object(l["a"])(I,m,v,!1,null,null,null),q=T.exports;r["a"].use(p["a"]);var A=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],J=new p["a"]({mode:"history",base:"/",routes:A}),R=J;r["a"].use(k["a"]);var F=new k["a"].Store({state:{users:[]},mutations:{addUser:function(e,t){e.users.push(t)},updateUsers:function(e,t){e.users=t}},actions:{fetchUsers:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,r("updateUsers",t);case 2:case"end":return n.stop()}}),n)})))()}},getters:{allUsers:function(e){return e.users}},modules:{}});n("bf68");r["a"].use(j.a),r["a"].config.productionTip=!1,r["a"].use(a.a),new r["a"]({router:R,store:F,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"68bd":function(e,t,n){},"9c0c":function(e,t,n){},bdc9:function(e,t,n){"use strict";n("68bd")}});
//# sourceMappingURL=app.8f5bb819.js.map