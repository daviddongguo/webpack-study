(()=>{"use strict";var e,t,n,r={6078:(e,t,n)=>{n(7090);var r=n(7294),i=n(3935),o=n(9669),a=n.n(o);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.form=document.querySelector(".client-area__form"),this.field=document.querySelector(".client-area__input"),this.contentArea=document.querySelector(".client-area__content-area"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),e.sendRequest()}))}},{key:"sendRequest",value:function(){var e=this;a().post("https://www.david-wu.xyz/.netlify/functions/secret-area",{password:this.field.value}).then((function(t){e.form.remove(),e.contentArea.innerHTML=t.data})).catch((function(){e.contentArea.innerHTML='<p class="client-area__error">That secret phrase is not correct. Try again.</p>',e.field.value="",e.field.focus()}))}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="client-area">\n      <div class="wrapper wrapper--medium">\n        <h2 class="section-title section-title--blue">Secret Client Area</h2>\n        <form class="client-area__form" action="">\n          <input class="client-area__input" type="text" placeholder="Enter the secret phrase">\n          <button class="btn btn--orange">Submit</button>\n        </form>\n        <div class="client-area__content-area"></div>\n      </div>\n    </div>\n    ')}}])&&l(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}])&&c(t.prototype,n),e}(),d=function(){return r.createElement("div",null,r.createElement("h1",{className:"section-title section-title--blue"},"This Is My Amazing React Component"),r.createElement("p",null,"React is great!!!"))};var h=n(3493),f=n.n(h),v=n(3279),m=n.n(v);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const w=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.thresholdPercent=n,this.itemsToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=f()(this.calcCaller,200).bind(this),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",m()((function(){console.log("Resize just ran"),e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;console.log("Scroll function ran"),this.itemsToReveal.forEach((function(t){0==t.isRevealed&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&(console.log("Element was calculated"),e.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle)))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&p(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",f()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",m()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().top/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&g(t.prototype,n),e}();var y;i.render(r.createElement(d,null),document.querySelector("#my-react-example")),new s,new b,new w(document.querySelectorAll(".feature-item"),75),new w(document.querySelectorAll(".testimonial"),60),new u,document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===y?n.e(582).then(n.bind(n,4222)).then((function(e){y=new e.default,setTimeout((function(){return y.openTheModal()}),20)})).catch((function(){return console.log("There was a problem.")})):y.openTheModal()}))}))}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,r,i]=e[c],l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(l=!1,i<a&&(a=i));l&&(e.splice(c--,1),t=r())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"modal.b377616f08be46d5dc3f.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="travel-site:",o.l=(e,r,i,a)=>{if(t[e])t[e].push(r);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",n+i),l.src=e),t[e]=[r];var h=(n,r)=>{l.onerror=l.onload=null,clearTimeout(f);var i=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(r))),n)return n(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),s&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=i);var a=o.p+o.u(t),l=new Error;o.l(a,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}}),"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,l,s]=n,c=0;for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(s)var u=s(o);for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return o.O(u)},n=self.webpackChunktravel_site=self.webpackChunktravel_site||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[372],(()=>o(6078)));a=o.O(a)})();