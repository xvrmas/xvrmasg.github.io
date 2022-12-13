(function(){"use strict";var t={4947:function(t,e,s){var i=s(6369),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-text-centered is-family-secondary",attrs:{id:"app"}},[e("NavBar"),e("router-view"),e("Footer")],1)},a=[],o=(s(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenidor"},[e("div",{staticClass:"caixa"},[e("a",{on:{click:t.home}},[e("img",{staticStyle:{width:"250px",margin:"20px"},attrs:{src:s(436),alt:""}})])]),e("div",{staticClass:"botons"},[e("a",{staticClass:"boto_nav",attrs:{href:"#"},on:{click:t.showFilms}},[t._v("Films")]),e("a",{staticClass:"boto_nav",attrs:{href:"#"},on:{click:t.showPeople}},[t._v("Characters")]),e("a",{staticClass:"boto_nav",attrs:{href:"#"},on:{click:t.showPlanets}},[t._v("Planets")]),e("a",{staticClass:"boto_nav",attrs:{href:"#"},on:{click:t.showSpecies}},[t._v("Species")]),e("a",{staticClass:"boto_nav",attrs:{href:"#"},on:{click:t.starships}},[t._v("Starships")]),e("a",{staticClass:"boto_nav",attrs:{href:"#"},on:{click:t.showVehicles}},[t._v("Vehicles")])])])}),r=[],c={name:"NavBar",data(){return{boton:document.getElementsByClassName("boto")}},methods:{home(){this.$router.push("/showFilms")},starships(){this.$store.dispatch("GET_STARSHIPS"),this.$router.push("/")},showFilms(){this.$store.dispatch("GET_FILMS"),this.$router.push("/showFilms")},showPeople(){this.$store.dispatch("GET_PEOPLE"),this.$router.push("/showPeople")},showPlanets(){this.$store.dispatch("GET_PLANETS"),this.$router.push("showPlanets")},showSpecies(){this.$store.dispatch("GET_SPECIES"),this.$router.push("showSpecies")},showVehicles(){this.$store.dispatch("GET_VEHICLES"),this.$router.push("showVehicles")}}},h=c,l=s(1001),u=(0,l.Z)(h,o,r,!1,null,"7c089cc2",null),p=u.exports,m=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half my-5"}),e("div",{staticClass:"column is-half adres"},[e("div")])]),e("div",{staticClass:"column copy"},[e("img",{staticClass:"alinear",attrs:{src:s(6045)}}),e("span",[t._v(" Copyright ")])])])])}],d={name:"Footer"},g=d,S=(0,l.Z)(g,m,f,!1,null,"109d36d2",null),v=S.exports,w={name:"app",components:{NavBar:p,Footer:v},mounted(){this.$store.dispatch("GET_FILMS"),this.$router.push("showFilms")}},b=w,y=(0,l.Z)(b,n,a,!1,null,null,null),P=y.exports,_=s(2631),I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenidor"},[e("div",{staticClass:"border"},[e("div",[e("div",{staticClass:"columns is-multiline is-centered is-mobile"},t._l(t.getStarShips.results,(function(s,i){return e("div",{key:i},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:`https://starwars-visualguide.com/assets/img/starships/${s.uid}.jpg`,alt:"image film"}})]),e("a",{staticClass:"nav-link",on:{click:function(e){t.setInfoShip(s),t.showImageShip(s)}}},[e("p",{staticClass:"title is-size-5",staticStyle:{color:"gray"}},[t._v(t._s(s.name)+" ")])])])])])})),0)])])])},E=[],C=s(3822),T={name:"HomeView",methods:{setInfoShip(t){this.$store.dispatch("GET_INFOSTARSHIPS",t.url),this.$router.push("infoStarShip")},increasePage(){this.$store.state.page++,this.$store.state.page>4&&(this.$store.state.page=4),this.$store.dispatch("GET_STARSHIPS")},decreasePage(){this.$store.state.page--,this.$store.state.page<1&&(this.$store.state.page=1),this.$store.dispatch("GET_STARSHIPS")},showImageShip:function(t){return this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGESHIPS",t)}},computed:{...(0,C.Se)(["getStarShips","getImageShips"]),...(0,C.OI)(["setShips"]),...(0,C.rn)(["numImg","page"])}},F=T,$=(0,l.Z)(F,I,E,!1,null,"40d5100c",null),k=$.exports;i.ZP.use(_.ZP);const j=[{path:"/",name:"Home",component:k},{path:"/infoStarShip",name:"infoStarShip",component:()=>s.e(681).then(s.bind(s,4681))},{path:"/ShowFilms",name:"ShowFilms",component:()=>s.e(406).then(s.bind(s,8406))},{path:"/ShowPeople",name:"ShowPeople",component:()=>s.e(875).then(s.bind(s,7875))},{path:"/ShowPlanets",name:"ShowPlanets",component:()=>s.e(756).then(s.bind(s,8756))},{path:"/ShowSpecies",name:"ShowSpecies",component:()=>s.e(630).then(s.bind(s,2630))},{path:"/ShowVehicles",name:"ShowVehicles",component:()=>s.e(107).then(s.bind(s,7107))},{path:"/infoFilms",name:"infoFilms",component:()=>s.e(810).then(s.bind(s,4810))},{path:"/infoCharacters",name:"infoCharacters",component:()=>s.e(371).then(s.bind(s,6371))}],G=_.ZP.prototype.push;_.ZP.prototype.push=function(t){return G.call(this,t).catch((t=>t))};const O=new _.ZP({mode:"history",base:"/starwars/",routes:j});var A=O;i.ZP.use(C.ZP);var N=new C.ZP.Store({state:{starShips:[],infoTechShip:[],films:[],people:[],planets:[],species:[],vehicles:[],infoFilm:[],page:1,condition:!1,numImg:1,imageShips:"",imageFilm:""},getters:{getStarShips(t){return t.starShips},getInfoShips(t){return t.infoTechShip},getPage(t){return t.page},getCondition(t){return t.condition},getNumImg(t){return t.numImg},getImageShips(t){return t.imageShips},getFilms(t){return t.films},getPeople(t){return t.people},getPlanets(t){return t.planets},getSpecies(t){return t.species},getVehicles(t){return t.vehicles},getInfoFilms(t){return t.infoFilm},getImageFilm(t){return t.imageFilm}},mutations:{setShips(t,e){t.starShips=e},setImageShips(t,e){t.imageShips=e},setInfoShips(t,e){t.infoTechShip=e},setFilms(t,e){t.films=e},setPeople(t,e){t.people=e},setPlanets(t,e){t.planets=e},setSpecies(t,e){t.species=e},setVehicles(t,e){t.vehicles=e},setInfoFilms(t,e){t.infoFilm=e},setImageFilm(t,e){t.imageFilm=e}},actions:{async GET_STARSHIPS({commit:t}){const e=await fetch("https://swapi.tech/api/starships/?page=1&limit=36"),s=await e.json();t("setShips",s)},async GET_IMAGESHIPS({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/starships/${this.state.numImg}.jpg`),s=e.url;404==e.status?this.state.imageShips="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageShips",s)}catch(e){console.log("error url imatge")}},async GET_INFOSTARSHIPS({commit:t},e){const s=await fetch(e),i=await s.json();t("setInfoShips",i)},async GET_FILMS({commit:t}){const e=await fetch("https://swapi.tech/api/films/"),s=await e.json();t("setFilms",s)},async GET_PEOPLE({commit:t}){const e=await fetch("https://swapi.tech/api/people?page=1&limit=82"),s=await e.json();t("setPeople",s)},async GET_PLANETS({commit:t}){const e=await fetch("https://www.swapi.tech/api/planets?page=1&limit=60"),s=await e.json();t("setPlanets",s)},async GET_SPECIES({commit:t}){const e=await fetch("https://www.swapi.tech/api/species?page=1&limit=37"),s=await e.json();t("setSpecies",s)},async GET_VEHICLES({commit:t}){const e=await fetch("https://www.swapi.tech/api/vehicles?page=1&limit=39"),s=await e.json();t("setVehicles",s)},async GET_INFOFILMS({commit:t},e){const s=await fetch(e),i=await s.json();t("setInfoFilms",i)},async GET_IMAGEFILM({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/films/${this.state.numImg}.jpg`),s=e.url;404==e.status?this.state.imageFilm="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageFilm",s)}catch(e){console.log("error url imatge")}}},modules:{}}),L=s(9515);s(387);i.ZP.config.productionTip=!1,i.ZP.use(L.ZP),new i.ZP({router:A,store:N,render:t=>t(P)}).$mount("#app")},6045:function(t,e,s){t.exports=s.p+"img/iconmonstr-copyright-2.be8e8ef6.svg"},436:function(t,e,s){t.exports=s.p+"img/star-wars-4.5f135d99.svg"}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,n,a){if(!i){var o=1/0;for(l=0;l<t.length;l++){i=t[l][0],n=t[l][1],a=t[l][2];for(var r=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(r=!1,a<o&&(o=a));if(r){t.splice(l--,1);var h=n();void 0!==h&&(e=h)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[i,n,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{107:"04211609",371:"544fd49c",406:"d134fa86",630:"c21acbcf",681:"c7cd86f2",756:"33ac916d",810:"219a8b96",875:"f3df98b4"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{107:"4ad5b078",406:"a4a62c27",630:"1c243e47",681:"19959fe4",756:"53a63657",810:"cd88743a",875:"98e4a9df"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="starwars:";s.l=function(i,n,a,o){if(t[i])t[i].push(n);else{var r,c;if(void 0!==a)for(var h=document.getElementsByTagName("script"),l=0;l<h.length;l++){var u=h[l];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+a){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+a),r.src=i),t[i]=[n];var p=function(e,s){r.onerror=r.onload=null,clearTimeout(m);var n=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/starwars/"}(),function(){var t=function(t,e,s,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=function(a){if(n.onerror=n.onload=null,"load"===a.type)s();else{var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,n.parentNode.removeChild(n),i(c)}};return n.onerror=n.onload=a,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var n=s[i],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===t||a===e))return n}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){n=o[i],a=n.getAttribute("data-href");if(a===t||a===e)return n}},i=function(i){return new Promise((function(n,a){var o=s.miniCssF(i),r=s.p+o;if(e(o,r))return n();t(i,r,n,a)}))},n={143:0};s.f.miniCss=function(t,e){var s={107:1,406:1,630:1,681:1,756:1,810:1,875:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=i(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,i){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var a=new Promise((function(s,i){n=t[e]=[s,i]}));i.push(n[2]=a);var o=s.p+s.u(e),r=new Error,c=function(i){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",r.name="ChunkLoadError",r.type=a,r.request=o,n[1](r)}};s.l(o,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,a,o=i[0],r=i[1],c=i[2],h=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(c)var l=c(s)}for(e&&e(i);h<o.length;h++)a=o[h],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(l)},i=self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(4947)}));i=s.O(i)})();
//# sourceMappingURL=app.5711b7b2.js.map