(function(){"use strict";var t={6885:function(t,e,s){var n=s(6369),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-text-centered is-family-secondary",attrs:{id:"app"}},[e("NavBar"),e("router-view"),e("Footer")],1)},a=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenidor"},[e("div",{staticClass:"caixa"},[e("a",{on:{click:t.home}},[e("img",{staticStyle:{width:"250px",margin:"20px"},attrs:{src:s(436),alt:""}})])]),e("div",{staticClass:"botons"},[e("b-button",{attrs:{type:"is-dark m-3"},on:{click:t.showFilms}},[t._v("Films")]),e("b-button",{attrs:{type:"is-dark m-3"},on:{click:t.showPeople}},[t._v("People")]),e("b-button",{attrs:{type:"is-dark m-3"},on:{click:t.showPlanets}},[t._v("Planets")]),e("b-button",{attrs:{type:"is-dark m-3"}},[t._v("Species")]),e("b-button",{attrs:{type:"is-dark m-3"},on:{click:t.starships}},[t._v("Starships")]),e("b-button",{attrs:{type:"is-dark m-3"}},[t._v("Vehicles")])],1)])},o=[],c=(s(7658),{name:"NavBar",methods:{home(){this.$router.push("/")},starships(){this.$router.push("/")},showFilms(){this.$store.dispatch("GET_FILMS"),this.$router.push("/showFilms")},showPeople(){this.$store.dispatch("GET_PEOPLE"),this.$router.push("/showPeople")},showPlanets(){this.$store.dispatch("GET_PLANETS"),this.$router.push("showPlanets")}}}),u=c,l=s(1001),p=(0,l.Z)(u,r,o,!1,null,"7a7779d4",null),h=p.exports,f=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half my-5"}),e("div",{staticClass:"column is-half adres"},[e("div",{staticClass:"text"},[e("p",[e("strong",[t._v("Star wars fan site")])])])])]),e("div",{staticClass:"column copy"},[e("img",{staticClass:"alinear",attrs:{src:s(6045)}}),e("span",[t._v(" Copyright ")])])])])}],d={name:"Footer"},g=d,v=(0,l.Z)(g,f,m,!1,null,"dcf86c90",null),S=v.exports,w={name:"app",components:{NavBar:h,Footer:S}},y=w,b=(0,l.Z)(y,i,a,!1,null,null,null),P=b.exports,_=s(2631),C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"border"},[e("div"),e("div",[e("a",{staticClass:"columns is-multiline is-centered is-mobile"},t._l(t.getStarShips.results,(function(s,n){return e("div",{key:n},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("a",{staticClass:"nav-link",on:{click:function(e){t.setInfoShip(s),t.showImageShip(s)}}},[e("p",{staticClass:"is-size-5 is-family-monospace is-bold",staticStyle:{color:"gray"}},[t._v(t._s(s.name))])])])])])})),0),e("b-button",{staticClass:"is-dark m-4",staticStyle:{color:"gray"},on:{click:t.decreasePage}},[t._v("-")]),e("b-button",{staticClass:"is-dark m-4",staticStyle:{color:"gray"},on:{click:t.increasePage}},[t._v("+")])],1)])},T=[],k=s(3822),E={name:"HomeView",methods:{setInfoShip(t){this.$store.dispatch("GET_INFOSTARSHIPS",t.url),this.$router.push("infoStarShip")},increasePage(){this.$store.state.page++,this.$store.state.page>4&&(this.$store.state.page=4),this.$store.dispatch("GET_STARSHIPS")},decreasePage(){this.$store.state.page--,this.$store.state.page<1&&(this.$store.state.page=1),this.$store.dispatch("GET_STARSHIPS")},showImageShip:function(t){return this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGESHIPS",t)}},computed:{...(0,k.Se)(["getStarShips"]),...(0,k.OI)(["setShips"]),...(0,k.rn)(["numImg","page"])},created(){this.$store.dispatch("GET_STARSHIPS")}},I=E,$=(0,l.Z)(I,C,T,!1,null,"032d7b4a",null),F=$.exports;n.ZP.use(_.ZP);const O=[{path:"/",name:"Home",component:F},{path:"/infoStarShip",name:"infoStarShip",component:()=>s.e(681).then(s.bind(s,4681))},{path:"/ShowFilms",name:"ShowFilms",component:()=>s.e(805).then(s.bind(s,6805))},{path:"/ShowPeople",name:"ShowPeople",component:()=>s.e(152).then(s.bind(s,152))},{path:"/ShowPlanets",name:"ShowPlanets",component:()=>s.e(247).then(s.bind(s,7247))}],j=_.ZP.prototype.push;_.ZP.prototype.push=function(t){return j.call(this,t).catch((t=>t))};const A=new _.ZP({mode:"history",base:"/starwars/",routes:O});var x=A;n.ZP.use(k.ZP);var G=new k.ZP.Store({state:{starShips:[],infoTechShip:[],films:[],people:[],planets:[],page:1,condition:!1,numImg:1,imageShips:""},getters:{getStarShips(t){return t.starShips},getInfoShips(t){return t.infoTechShip},getPage(t){return t.page},getCondition(t){return t.condition},getNumImg(t){return t.numImg},getImageShips(t){return t.imageShips},getFilms(t){return t.films},getPeople(t){return t.people},getPlanets(t){return t.planets}},mutations:{setShips(t,e){t.starShips=e},setImageShips(t,e){t.imageShips=e},setInfoShips(t,e){t.infoTechShip=e},setFilms(t,e){t.films=e},setPeople(t,e){t.people=e},setPlanets(t,e){t.planets=e}},actions:{async GET_STARSHIPS({commit:t}){const e=await fetch(`https://swapi.tech/api/starships/?page=${this.state.page}&limit=10`),s=await e.json();t("setShips",s)},async GET_IMAGESHIPS({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/starships/${this.state.numImg}.jpg`),s=e.url;404==e.status?this.state.imageShips="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageShips",s)}catch(e){console.log("error url imatge")}},async GET_INFOSTARSHIPS({commit:t},e){const s=await fetch(e),n=await s.json();t("setInfoShips",n)},async GET_FILMS({commit:t}){const e=await fetch("https://swapi.tech/api/films/"),s=await e.json();t("setFilms",s)},async GET_PEOPLE({commit:t}){const e=await fetch(`http://swapi.tech/api/people?page=${this.state.page}&limit=82`),s=await e.json();t("setPeople",s)},async GET_PLANETS({commit:t}){const e=await fetch(`https://www.swapi.tech/api/planets?page=${this.state.page}&limit=60`),s=await e.json();console.log(s),t("setPlanets",s)}},modules:{}}),Z=s(9515);s(387);n.ZP.config.productionTip=!1,n.ZP.use(Z.ZP),new n.ZP({router:x,store:G,render:t=>t(P)}).$mount("#app")},6045:function(t,e,s){t.exports=s.p+"img/iconmonstr-copyright-2.be8e8ef6.svg"},436:function(t,e,s){t.exports=s.p+"img/star-wars-4.5f135d99.svg"}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,n,i,a){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],i=t[l][1],a=t[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(o=!1,a<r&&(r=a));if(o){t.splice(l--,1);var u=i();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,i,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{152:"8d0010c7",247:"4a028599",681:"c7cd86f2",805:"6dd1763a"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{681:"19959fe4",805:"3c4b44d8"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="starwars:";s.l=function(n,i,a,r){if(t[n])t[n].push(i);else{var o,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+a){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+a),o.src=n),t[n]=[i];var h=function(e,s){o.onerror=o.onload=null,clearTimeout(f);var i=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(s)})),e)return e(s)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/starwars/"}(),function(){var t=function(t,e,s,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)s();else{var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=o,i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=a,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var i=s[n],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===t||a===e))return i}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){i=r[n],a=i.getAttribute("data-href");if(a===t||a===e)return i}},n=function(n){return new Promise((function(i,a){var r=s.miniCssF(n),o=s.p+r;if(e(r,o))return i();t(n,o,i,a)}))},i={143:0};s.f.miniCss=function(t,e){var s={681:1,805:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=n(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,n){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise((function(s,n){i=t[e]=[s,n]}));n.push(i[2]=a);var r=s.p+s.u(e),o=new Error,c=function(n){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,i[1](o)}};s.l(r,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,a,r=n[0],o=n[1],c=n[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var l=c(s)}for(e&&e(n);u<r.length;u++)a=r[u],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(l)},n=self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(6885)}));n=s.O(n)})();
//# sourceMappingURL=app.24bb0bda.js.map