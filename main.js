(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(81),r=n.n(a),o=n(645),i=n.n(o),s=n(667),c=n.n(s),d=new URL(n(958),n.b),l=i()(r()),p=c()(d);l.push([e.id,"body {\n    background-image: url("+p+");\n    background-size: cover;\n}\n\n.menu {\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    padding-top: 2vh;\n}\n\n.button {\n    padding: 10px 25px 10px 25px;\n    border-radius: 25px;\n    background-color: rgb(99, 69, 29);\n    border: 2px solid burlywood;\n    color: white;\n    font-size: 22px;\n    font-weight: 800;\n    /* letter-spacing: 2px; */\n    font-family: 'Archivo', sans-serif;\n}\n\n.button:hover {\n    background-color: rgb(210, 174, 127);\n}\n\n.button:active {\n    transform: scale(0.98);\n}\n\n#content {\n    background-color: rgba(0,0,0,0.8);\n    color: aliceblue;\n    box-sizing: border-box;\n    height: auto;\n    padding: 0 5vw 10vh 5vw;\n    margin: 0 10vw 0 10vw;\n    border-radius: 10px;\n}\n\n.container {\n    min-width: 400px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 40px;\n}\n\n.heading {\n    font-size: 48px;\n    padding: 50px 0 50px 0;\n    font-family: 'Archivo', sans-serif;\n    color: burlywood;\n}\n\n.copy {\n    font-size: 32px;\n    margin-bottom: 50px;\n    color: rgb(250, 245, 238);\n}\n\n.item {\n    flex-basis: 20vw;\n    min-height: 75vh;\n    min-width: 350px;\n    border: 2px solid white;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    color: antiquewhite;\n}\n\n.item-picture {\n    box-sizing: border-box;\n    height: 55%;\n    background-size: cover;\n    border-radius: 10px;\n    background-position: 50% 60%;\n    background-repeat: no-repeat;\n}\n\n.item-title {\n    height: 10%;\n    font-size: 32px;\n    text-align: center;\n    padding-top: 25px;\n    font-family: 'Archivo', sans-serif;\n}\n\n.item-desc {\n    background-color: rgba(255, 172, 71, 0.5);\n    height: 35%;\n    padding: 25px;\n    font-size: 18px;\n    text-align: justify;\n    /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */\n    font-family: 'Nunito', sans-serif;\n    color: rgb(250, 245, 238);\n}\n\n",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=a(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},958:(e,t,n)=>{e.exports=n.p+"359e45642e4d0f57f5c7.jpeg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),o=n(569),i=n.n(o),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),h=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=document.createElement("section"),b=document.createElement("h1"),g=document.createElement("div");function y(e,t,n){const a=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");a.className="item",r.className="item-picture",o.className="item-title",i.className="item-desc",r.style.backgroundImage=`url(${e})`,o.textContent=t,i.textContent=n,a.appendChild(r),a.appendChild(o),a.appendChild(i),g.appendChild(a)}m.className="page",b.className="heading",g.className="container",m.appendChild(b),m.appendChild(g);const v=document.querySelector("#content"),w=document.createElement("p"),x=document.createElement("p");function C(){m.innerHTML="",b.textContent="Welcome to The French Bakery!",w.textContent="The French bakery culture is something to be celebrated. From the croissant to the baguette, the French have perfected the art of baking bread, producing a variety of delicious pastries and breads. The French bakery is a unique experience, with the aroma of freshly baked bread and pastries filling the air. From the sweet and savory selection of quiches and tarts to the classic macaroon, the French bakery is an experience like no other, a tradition steeped in history and culture.",x.textContent="This bakery is an inviting and cozy environment where customers can enjoy a variety of freshly-baked breads, pastries, and other delicious treats. With a range of tempting options, such as croissants, éclairs, macarons, tarts, and more, there’s something for everyone. All of the products are crafted with the highest quality ingredients, and the inviting atmosphere and attentive service make it the perfect place to grab a quick bite or linger over a cup of coffee.",m.appendChild(b),m.appendChild(w),m.appendChild(x),v.appendChild(m)}w.className=x.className="copy";const k=n.p+"f30b408b375d8d538d30.jpeg",T=n.p+"5d7501b49ecc5c40074a.jpeg",E=n.p+"b35d1e2136e53ec5cec4.jpeg",j=n.p+"077943ff9f1bb753747d.jpeg",M=n.p+"0be3b0234830e6a76a98.jpeg",$=n.p+"75dceddb7d234bddb12a.jpeg",N=n.p+"4d0550952d3f620e4e17.jpeg",I=n.p+"3671e4e0570bbbea0712.jpeg",S=n.p+"64c163c16e82983c8698.jpeg",A=document.querySelector("body"),F=document.querySelector("#content"),L=document.createElement("button"),z=document.createElement("button"),H=document.createElement("button"),q=document.createElement("button"),B=document.createElement("div");B.className="menu",C(),L.addEventListener("click",C),z.addEventListener("click",(function(){m.innerHTML="",g.innerHTML="",b.textContent="Breads",y(`${k}`,"Country Loaf - $6.5","A country loaf is a type of bread that is rustic in nature. It is often made from a combination of white and whole-wheat flours and is typically leavened with yeast. Country loaves are often baked in a wood-fired oven, giving them a unique flavor and texture. This type of bread is usually dense and has a hearty flavor."),y(`${T}`,"Milk Bread - $5","Milk bread is a soft and sweet white bread made with milk, sugar, butter, and flour. It is usually made with all-purpose flour, giving it a light and fluffy texture. Milk bread is often used for toast and sandwiches, but it can also be enjoyed as a snack or dessert. The addition of milk makes it richer and moister than other white breads."),y(`${E}`,"Sourdough - $8","Sourdough is a type of bread that is made with a fermented dough starter, made with flour and water. It is known for its tangy, chewy texture and complex flavor. The starter is made from a mixture of flour and water, and is allowed to ferment for several days. This sourdough starter provides the leavening for the bread and gives it its distinctive flavor."),m.appendChild(b),m.appendChild(g),content.appendChild(m)})),H.addEventListener("click",(function(){m.innerHTML="",g.innerHTML="",b.textContent="Croissants",y(`${j}`,"Butter Croissant - $2","A butter croissant is a light and flaky pastry made from a dough that contains butter and yeast. It is typically shaped into a crescent shape with a layered structure. The top of the croissant is often glazed for a glossy appearance. It is usually served as a breakfast or snack item, often filled with various ingredients such as cheese, ham, or chocolate."),y(`${M}`,"Almond Croissant - $3.5","An almond croissant is a light, flaky pastry made from croissant dough and filled with a sweet almond paste. It is usually topped with sliced almonds for a crunchy texture and a dash of sugar for sweetness. The outside of the croissant is golden brown and crisp, while the inside is light and soft. Enjoy it for breakfast or as a snack!"),y(`${$}`,"Pain au Chocolat - $3","A pain au chocolat is a French pastry made of puff pastry filled with chocolate. It is similar to a croissant, but with chocolate inside. It is usually served warm and often enjoyed as a breakfast or snack."),m.appendChild(b),m.appendChild(g),content.appendChild(m)})),q.addEventListener("click",(function(){m.innerHTML="",g.innerHTML="",b.textContent="Pastries",y(`${N}`,"Berry Tart - $4","A berry tart is a delicious dessert that features a flaky pastry crust filled with a sweet and tangy berry filling. The tart can be served either warm or cold, and is usually topped with a dollop of sweetened whipped cream. The berries used to fill the tart commonly include strawberries, raspberries, blueberries, and blackberries."),y(`${I}`,"Macarons - $12/doz","A macaron is a small round meringue-based French confection made with egg whites, sugar, almond powder or ground almond, and food colouring. Macarons are typically filled with butter cream, jam, or ganache and have a crisp shell and a soft, chewy interior. They are often served as a dessert or snack."),y(`${S}`,"Mille Feuille - $5","A mille-feuille is a French pastry composed of three layers of puff pastry alternating with two layers of pastry cream. It is often topped with a layer of icing and garnished with chopped nuts or candied fruit. It is a popular dessert in France and other parts of Europe, and is sometimes referred to as a Napoleon."),m.appendChild(b),m.appendChild(g),content.appendChild(m)})),L.textContent="Home",z.textContent="Breads",H.textContent="Croissants",q.textContent="Pastries",L.className=z.className=H.className=q.className="button",B.appendChild(L),B.appendChild(z),B.appendChild(H),B.appendChild(q),A.insertBefore(B,F)})()})();