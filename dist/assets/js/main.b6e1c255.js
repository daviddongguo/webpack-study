(self.webpackChunktravel_site=self.webpackChunktravel_site||[]).push([[179],{2916:(e,t,n)=>{"use strict";n(7090);var i=n(7294),r=n(3935),o=n(9669),s=n.n(o);function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.form=document.querySelector(".client-area__form"),this.field=document.querySelector(".client-area__input"),this.contentArea=document.querySelector(".client-area__content-area"),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),e.sendRequest()}))}},{key:"sendRequest",value:function(){var e=this;s().post("https://www.david-wu.xyz/.netlify/functions/secret-area",{password:this.field.value}).then((function(t){e.form.remove(),e.contentArea.innerHTML=t.data})).catch((function(){e.contentArea.innerHTML='<p class="client-area__error">That secret phrase is not correct. Try again.</p>',e.field.value="",e.field.focus()}))}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n    <div class="client-area">\n      <div class="wrapper wrapper--medium">\n        <h2 class="section-title section-title--blue">Secret Client Area</h2>\n        <form class="client-area__form" action="">\n          <input class="client-area__input" type="text" placeholder="Enter the secret phrase">\n          <button class="btn btn--orange">Submit</button>\n        </form>\n        <div class="client-area__content-area"></div>\n      </div>\n    </div>\n    ')}}])&&c(t.prototype,n),i&&c(t,i),e}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}])&&a(t.prototype,n),i&&a(t,i),e}();const h=function(){return i.createElement("div",null,i.createElement("h1",{className:"section-title section-title--blue"},"This Is My Amazing React Component"),i.createElement("p",null,"React is great!!!"))};var d=n(3493),f=n.n(d),v=n(3279),m=n.n(v);function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.thresholdPercent=n,this.itemsToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=f()(this.calcCaller,200).bind(this),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",m()((function(){console.log("Resize just ran"),e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;console.log("Scroll function ran"),this.itemsToReveal.forEach((function(t){0==t.isRevealed&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&(console.log("Element was calculated"),e.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle)))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&w(t.prototype,n),i&&w(t,i),e}();function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",f()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",m()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().top/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&y(t.prototype,n),i&&y(t,i),e}();var b;r.render(i.createElement(h,null),document.querySelector("#my-react-example")),new l,new g,new p(document.querySelectorAll(".feature-item"),75),new p(document.querySelectorAll(".testimonial"),60),new u,document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===b?n.e(582).then(n.bind(n,9670)).then((function(e){b=new e.default,setTimeout((function(){return b.openTheModal()}),20)})).catch((function(){return console.log("There was a problem.")})):b.openTheModal()}))}))}},e=>{"use strict";e.O(0,[372],(()=>{return t=2916,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=main.b6e1c255.js.map