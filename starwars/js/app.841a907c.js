(function(){"use strict";var t={1759:function(t,e,s){var i=s(144),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-text-centered is-family-secondary",attrs:{id:"app"}},[e("NavBar"),e("router-view"),e("Footer")],1)},n=[],o=(s(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenidor"},[t._m(0),e("div",{staticClass:"botons"},[e("a",{staticClass:"boto_nav",on:{click:function(e){return t.showFilms()}}},[t._v("Home")]),e("a",{staticClass:"boto_nav",on:{click:function(e){return t.showPeople()}}},[t._v("Characters")]),e("a",{staticClass:"boto_nav",on:{click:function(e){return t.showPlanets()}}},[t._v("Planets")]),e("a",{staticClass:"boto_nav",on:{click:function(e){return t.showSpecies()}}},[t._v("Species")]),e("a",{staticClass:"boto_nav",on:{click:function(e){t.starships(),t.showImageShip()}}},[t._v("Starships")]),e("a",{staticClass:"boto_nav",on:{click:t.showVehicles}},[t._v("Vehicles")])]),e("div",{staticClass:"linea"})])}),r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"caixa"},[e("div",[e("img",{staticStyle:{width:"250px",margin:"20px"},attrs:{src:s(436),alt:""}})])])}],c={name:"NavBar",data(){return{boton:document.getElementsByClassName("boto")}},methods:{home(){this.$router.push("/showFilms")},starships(){this.$store.dispatch("GET_STARSHIPS"),this.$router.push("/")},showImageShip(){this.$store.dispatch("GET_IMAGESHIPS")},showFilms(){this.$router.push("/showFilms"),this.$store.dispatch("GET_FILMS")},showPeople(){this.$router.push("/showPeople"),this.$store.dispatch("GET_PEOPLE")},showPlanets(){this.$router.push("showPlanets"),this.$store.dispatch("GET_PLANETS")},showSpecies(){this.$store.dispatch("GET_SPECIES"),this.$router.push("showSpecies")},showVehicles(){this.$router.push("showVehicles"),this.$store.dispatch("GET_VEHICLES")}}},h=c,l=s(1001),p=(0,l.Z)(h,o,r,!1,null,"69e707d8",null),u=p.exports,m=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half my-5"}),e("div",{staticClass:"column is-half adres"},[e("div")])]),e("div",{staticClass:"column copy"},[e("img",{staticClass:"alinear",attrs:{src:s(6045)}}),e("span",[t._v(" Copyright ")])])])])}],d={name:"Footer"},g=d,S=(0,l.Z)(g,m,f,!1,null,"109d36d2",null),v=S.exports,w={name:"app",components:{NavBar:u,Footer:v},mounted(){this.$store.dispatch("GET_FILMS"),this.$router.push("showFilms")}},P=w,b=(0,l.Z)(P,a,n,!1,null,null,null),I=b.exports,y=s(8345),_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenidor"},[e("div",{staticClass:"border"},[e("div",[e("div",{staticClass:"columns is-multiline is-centered is-mobile"},t._l(t.getStarShips.results,(function(s,i){return e("div",{key:i},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:`https://starwars-visualguide.com/assets/img/starships/${s.url.split(/\D/g).join("")}.jpg`,alt:"image film"}})]),e("a",{staticClass:"nav-link",on:{click:function(e){t.setInfoShip(s),t.showImageShip(s)}}},[e("p",{staticClass:"title is-size-5",staticStyle:{color:"gray"}},[t._v(t._s(s.name)+" ")])])])])])})),0)]),e("section",{staticClass:"columns is-centered is-multiline"},[e("button",{staticClass:"button is-dark active m-3",on:{click:function(e){return t.decreasePage()}}},[t._v("-")]),e("h1",{staticClass:"m-3"},[t._v("Page: "+t._s(this.$store.state.pageStarships)+" of 4")]),e("button",{staticClass:"button is-dark m-3",on:{click:function(e){return t.increasePage()}}},[t._v("+")])])])])},C=[],E=s(629),T={name:"HomeView",destroyed(){this.$store.state.page=1},methods:{setInfoShip(t){this.$store.state.infoTechShip=t,this.$router.push("/infoStarShip")},increasePage(){this.$store.state.pageStarships++,this.$store.state.pageStarships>4&&(this.$store.state.pageStarships=4),this.$store.dispatch("GET_STARSHIPS")},decreasePage(){this.$store.state.pageStarships--,this.$store.state.pageStarships<1&&(this.$store.state.pageStarships=1),this.$store.dispatch("GET_STARSHIPS")},showImageShip:function(t){this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGESHIPS",t)}},computed:{...(0,E.Se)(["getStarShips","getImageShips"]),...(0,E.OI)(["setShips"]),...(0,E.rn)(["numImg","page"])}},F=T,$=(0,l.Z)(F,_,C,!1,null,"20be8406",null),k=$.exports;i.ZP.use(y.ZP);const j=[{path:"/",name:"Home",component:k},{path:"/infoStarShip",name:"infoStarShip",component:()=>s.e(847).then(s.bind(s,3847))},{path:"/ShowFilms",name:"ShowFilms",component:()=>s.e(743).then(s.bind(s,9743))},{path:"/ShowPeople",name:"ShowPeople",component:()=>s.e(42).then(s.bind(s,42))},{path:"/ShowPlanets",name:"ShowPlanets",component:()=>s.e(311).then(s.bind(s,3311))},{path:"/ShowSpecies",name:"ShowSpecies",component:()=>s.e(429).then(s.bind(s,2562))},{path:"/ShowVehicles",name:"ShowVehicles",component:()=>s.e(493).then(s.bind(s,493))},{path:"/infoFilms",name:"infoFilms",component:()=>Promise.all([s.e(81),s.e(834)]).then(s.bind(s,8433))},{path:"/infoCharacters",name:"infoCharacters",component:()=>Promise.all([s.e(81),s.e(291)]).then(s.bind(s,8882))},{path:"/infoPlanets",name:"infoPlanets",component:()=>s.e(500).then(s.bind(s,9500))},{path:"/infoSpecies",name:"infoSpecies",component:()=>s.e(604).then(s.bind(s,5604))},{path:"/infoVehicles",name:"infoVehicles",component:()=>s.e(277).then(s.bind(s,5277))}],G=y.ZP.prototype.push;y.ZP.prototype.push=function(t){return G.call(this,t).catch((t=>t))};const O=new y.ZP({mode:"hash",base:"/starwars/",routes:j});var A=O;i.ZP.use(E.ZP);var V=new E.ZP.Store({state:{starShips:[],infoTechShip:[],films:[],people:[],planets:[],species:[],vehicles:[],infoFilm:[],infoCharacters:[],infoPlanets:[],infoSpecies:[],infoVehicles:[],arrayRelatedItems:[],pagePeople:1,pagePlanets:1,pageSpecies:1,pageVehicles:1,pageStarships:1,numImg:1,imageShips:"",imageFilm:""},getters:{getStarShips(t){return t.starShips},getInfoShips(t){return t.infoTechShip},getPage(t){return t.page},getCondition(t){return t.condition},getNumImg(t){return t.numImg},getImageShips(t){return t.imageShips},getFilms(t){return t.films},getPeople(t){return t.people},getPlanets(t){return t.planets},getSpecies(t){return t.species},getVehicles(t){return t.vehicles},getInfoFilms(t){return t.infoFilm},getImageFilm(t){return t.imageFilm},getInfoCharacters(t){return t.infoCharacters},getInfoPlanets(t){return t.infoPlanets},getInfoSpecies(t){return t.infoSpecies},getInfoVehicles(t){return t.infoVehicles}},mutations:{setShips(t,e){t.starShips=e},setImageShips(t,e){t.imageShips=e},setInfoShips(t,e){t.infoTechShip=e},setFilms(t,e){t.films=e},setPeople(t,e){t.people=e},setPlanets(t,e){t.planets=e},setSpecies(t,e){t.species=e},setVehicles(t,e){t.vehicles=e},setInfoFilms(t,e){t.infoFilm=e},setImageFilm(t,e){t.imageFilm=e},setInfoCharacters(t,e){t.infoCharacters=e},setInfoPlanets(t,e){t.infoPlanets=e},setInfoSpecies(t,e){t.infoSpecies=e},setInfoVehicles(t,e){t.infoVehicles=e}},actions:{async GET_STARSHIPS({commit:t}){const e=await fetch(`https://swapi.dev/api/starships/?page=${this.state.pageStarships}`),s=await e.json();t("setShips",s)},async GET_IMAGESHIPS({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/starships/${this.state.numImg}.jpg`),s=e.url;console.log(s),404==e.status?this.state.imageShips="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageShips",s)}catch(e){console.log("error url imatge")}console.log("image ship",imageShips)},async GET_INFOSTARSHIPS({commit:t},e){const s=await fetch(e.url),i=await s.json();t("setInfoShips",i)},async GET_FILMS({commit:t}){const e=await fetch("https://swapi.dev/api/films/"),s=await e.json();t("setFilms",s)},async GET_PEOPLE({commit:t}){const e=await fetch(`https://swapi.dev/api/people/?page=${this.state.pagePeople}`),s=await e.json();t("setPeople",s)},async GET_PLANETS({commit:t}){const e=await fetch(`https://swapi.dev/api/planets/?page=${this.state.pagePlanets}`),s=await e.json();t("setPlanets",s)},async GET_SPECIES({commit:t}){const e=await fetch(`https://swapi.dev/api/species/?page=${this.state.pageSpecies}`),s=await e.json();t("setSpecies",s)},async GET_VEHICLES({commit:t}){const e=await fetch(`https://swapi.dev/api/vehicles/?page=${this.state.pageVehicles}`),s=await e.json();t("setVehicles",s)},async GET_INFOFILMS({commit:t},e){const s=await fetch(e),i=await s.json();t("setInfoFilms",i)},async GET_IMAGEFILM({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/films/${this.state.numImg}.jpg`),s=e.url;404==e.status?this.state.imageFilm="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageFilm",s)}catch(e){console.log("error url imatge")}},async GET_INFOCHARACTERS({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoCharacters",i)},async GET_INFOPLANET({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoPlanets",i)},async GET_INFOSPECIES({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoSpecies",i)},async GET_INFOVEHICLES({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoVehicles",i)}},modules:{}}),N=s(7500);s(387);i.ZP.config.productionTip=!1,i.ZP.use(N.ZP),new i.ZP({router:A,store:V,render:t=>t(I)}).$mount("#app")},6045:function(t,e,s){t.exports=s.p+"img/iconmonstr-copyright-2.be8e8ef6.svg"},436:function(t,e,s){t.exports=s.p+"img/star-wars-4.5f135d99.svg"}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,n){if(!i){var o=1/0;for(l=0;l<t.length;l++){i=t[l][0],a=t[l][1],n=t[l][2];for(var r=!0,c=0;c<i.length;c++)(!1&n||o>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(r=!1,n<o&&(o=n));if(r){t.splice(l--,1);var h=a();void 0!==h&&(e=h)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[i,a,n]}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{42:"bdc85a5a",81:"eece23ea",277:"8be1bf19",291:"507d280b",311:"9137de82",429:"86a0ee66",493:"f10c14d4",500:"ca682fa2",604:"ba42df25",743:"4c2a71fe",834:"774c3e6f",847:"ea05a4b3"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{42:"86c542e5",277:"60d38d28",291:"e26c0017",311:"5b8df17c",429:"6e2653a0",493:"85514019",500:"be0a80da",604:"c628a947",743:"4cbc70f6",834:"40afd49e",847:"d0fad6ba"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="starwars:";s.l=function(i,a,n,o){if(t[i])t[i].push(a);else{var r,c;if(void 0!==n)for(var h=document.getElementsByTagName("script"),l=0;l<h.length;l++){var p=h[l];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==e+n){r=p;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+n),r.src=i),t[i]=[a];var u=function(e,s){r.onerror=r.onload=null,clearTimeout(m);var a=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/starwars/"}(),function(){var t=function(t,e,s,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=function(n){if(a.onerror=a.onload=null,"load"===n.type)s();else{var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=n,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var a=s[i],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===t||n===e))return a}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){a=o[i],n=a.getAttribute("data-href");if(n===t||n===e)return a}},i=function(i){return new Promise((function(a,n){var o=s.miniCssF(i),r=s.p+o;if(e(o,r))return a();t(i,r,a,n)}))},a={143:0};s.f.miniCss=function(t,e){var s={42:1,277:1,291:1,311:1,429:1,493:1,500:1,604:1,743:1,834:1,847:1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=i(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,i){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var n=new Promise((function(s,i){a=t[e]=[s,i]}));i.push(a[2]=n);var o=s.p+s.u(e),r=new Error,c=function(i){if(s.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",r.name="ChunkLoadError",r.type=n,r.request=o,a[1](r)}};s.l(o,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,o=i[0],r=i[1],c=i[2],h=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(c)var l=c(s)}for(e&&e(i);h<o.length;h++)n=o[h],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(l)},i=self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(1759)}));i=s.O(i)})();
//# sourceMappingURL=app.841a907c.js.map