(function(t){function e(e){for(var n,c,u=e[0],i=e[1],p=e[2],f=0,l=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);s&&s(e);while(l.length)l.shift()();return a.push.apply(a,p||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var s=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},4911:function(t,e,r){"use strict";var n=r("e6db"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"products"}},[r("products",{attrs:{products:t.products,Cart:t.Cart}})],1),r("div",{attrs:{id:"Cart"}},[r("Cart",{attrs:{Cart:t.Cart}})],1)])},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",[r("h3",[t._v("Danh sách sản phẩm:")]),t._m(0),t._l(t.products,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(t._f("formatMoney")(e.price)))]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"product.qty"}],attrs:{type:"number",name:"quantity",min:"1"},domProps:{value:e.qty},on:{input:function(r){r.target.composing||t.$set(e,"qty",r.target.value)}}})]),r("td",[r("button",{on:{click:function(r){return t.Cart.push({name:e.name,price:e.price,qty:e.qty})}}},[t._v("Add to Cart")])])])}))],2)])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Name")]),r("th",[t._v("Price")]),r("th",[t._v("Qty")]),r("th")])}],i=(r("d3b7"),r("ac1f"),r("25f0"),r("5319"),{props:["products","Cart"],filters:{formatMoney:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}}),p=i,s=(r("4911"),r("2877")),f=Object(s["a"])(p,c,u,!1,null,"aa43de22",null),l=f.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",[r("h3",[t._v("Cart:")]),t._m(0),t._l(t.Cart,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(t._f("formatMoney")(e.price,"")))]),r("td",[t._v(t._s(e.qty))]),r("td",[r("button",{on:{click:function(e){return t.Cart.splice(n,1)}}},[t._v("Delete")])])])})),r("tr",{attrs:{id:"total"}},[r("td",[t._v("Total:")]),r("td",[t._v(t._s(t._f("formatMoney")(t.Cart.reduce((function(t,e){return t+e.price*e.qty}),0),"VND")))]),r("td",[t._v(t._s(t._f("formatMoney")(Math.round(t.Cart.reduce((function(t,e){return t+e.price*e.qty}),0)/23e3*100)/100,"USD")))])])],2)])},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Name")]),r("th",[t._v("Price")]),r("th",[t._v("Qty")]),r("th")])}],_={props:["Cart"],filters:{formatMoney:function(t,e){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" "+e}}},m=_,y=(r("c6d6"),Object(s["a"])(m,d,v,!1,null,"7e0ab83f",null)),h=y.exports,b={data:function(){return{products:[{name:"Sản phẩm 1",price:1e6,qty:1},{name:"Sản phẩm 2",price:2e6,qty:1},{name:"Sản phẩm 3",price:3e6,qty:1},{name:"Sản phẩm 4",price:4e6,qty:1},{name:"Sản phẩm 5",price:5e6,qty:1}],Cart:[]}},components:{products:l,Cart:h}},g=b,C=(r("034f"),Object(s["a"])(g,o,a,!1,null,null,null)),q=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(q)}}).$mount("#app")},"85ec":function(t,e,r){},be91:function(t,e,r){},c6d6:function(t,e,r){"use strict";var n=r("be91"),o=r.n(n);o.a},e6db:function(t,e,r){}});
//# sourceMappingURL=app.168f6a02.js.map