(function(){"use strict";var t={1137:function(t,e,s){var i=s(144),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-text-centered is-family-secondary",attrs:{id:"app"}},[e("NavBar"),e("router-view"),e("Footer")],1)},a=[],o=(s(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenidor"},[t._m(0),e("div",{staticClass:"botons"},[e("a",{staticClass:"boto_nav",attrs:{id:"op1"},on:{click:function(e){return t.showFilms()}}},[t._v("Films")]),e("a",{staticClass:"boto_nav",attrs:{id:"op2"},on:{click:function(e){return t.showPeople()}}},[t._v("Characters")]),e("a",{staticClass:"boto_nav",attrs:{id:"op3"},on:{click:function(e){return t.showPlanets()}}},[t._v("Planets")]),e("a",{staticClass:"boto_nav",attrs:{id:"op4"},on:{click:function(e){return t.showSpecies()}}},[t._v("Species")]),e("a",{staticClass:"boto_nav",attrs:{id:"op5"},on:{click:function(e){t.starships(),t.showImageShip()}}},[t._v("Starships")]),e("a",{staticClass:"boto_nav",attrs:{id:"op6"},on:{click:function(e){return t.showVehicles()}}},[t._v("Vehicles")])]),e("div",{staticClass:"linea"})])}),r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"caixa"},[e("div",[e("img",{staticStyle:{width:"250px",margin:"20px"},attrs:{src:s(436),alt:""}})]),e("div",{staticClass:"linea"})])}],c={name:"NavBar",data(){return{boton:document.getElementsByClassName("boto")}},methods:{home(){this.$router.push("/showFilms")},starships(){this.$store.dispatch("GET_STARSHIPS"),this.$router.push("/")},showImageShip(){this.$store.dispatch("GET_IMAGESHIPS")},showFilms(){this.$router.push("/showFilms"),this.$store.dispatch("GET_FILMS")},showPeople(){this.$router.push("/showPeople"),this.$store.dispatch("GET_PEOPLE")},showPlanets(){this.$router.push("showPlanets"),this.$store.dispatch("GET_PLANETS")},showSpecies(){this.$store.dispatch("GET_SPECIES"),this.$router.push("showSpecies")},showVehicles(){this.$router.push("showVehicles"),this.$store.dispatch("GET_VEHICLES")}}},l=c,h=s(1001),p=(0,h.Z)(l,o,r,!1,null,"3744566b",null),u=p.exports,m=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half my-5"}),e("div",{staticClass:"column is-half adres"},[e("div")])]),e("div",{staticClass:"column copy"},[e("img",{staticClass:"alinear",attrs:{src:s(6045)}}),e("span",[t._v(" Copyright ")])])])])}],d={name:"Footer"},g=d,S=(0,h.Z)(g,m,f,!1,null,"109d36d2",null),v=S.exports,w={name:"app",components:{NavBar:u,Footer:v},mounted(){this.$store.dispatch("GET_FILMS"),this.$router.push("showFilms")}},b=w,P=(0,h.Z)(b,n,a,!1,null,null,null),I=P.exports,y=s(8345),C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenidor"},[e("div",{staticClass:"border p-5"},[e("div",[e("div",{staticClass:"columns is-multiline is-centered is-mobile"},t._l(t.getStarShips.results,(function(s,i){return e("div",{key:i},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:`https://starwars-visualguide.com/assets/img/starships/${s.url.split(/\D/g).join("")}.jpg`,alt:"image film"}})]),e("a",{staticClass:"nav-link",on:{click:function(e){t.setInfoShip(s),t.showImageShip(s)}}},[e("p",{staticClass:"title is-size-5",staticStyle:{color:"gray"}},[t._v(t._s(s.name)+" ")])])])])])})),0)]),e("section",{staticClass:"columns is-centered is-multiline"},[e("button",{staticClass:"button is-dark active m-3",on:{click:function(e){return t.decreasePage()}}},[t._v("-")]),e("h1",{staticClass:"m-3"},[t._v("Page: "+t._s(this.$store.state.pageStarships)+" of 4")]),e("button",{staticClass:"button is-dark m-3",on:{click:function(e){return t.increasePage()}}},[t._v("+")])])])])},_=[],E=s(629),T={name:"HomeView",mounted(){document.getElementById("op5").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op5").style.borderBottom="none"},methods:{setInfoShip(t){this.$store.state.infoTechShip=t,this.$router.push("/infoStarShip")},increasePage(){this.$store.state.pageStarships++,this.$store.state.pageStarships>4&&(this.$store.state.pageStarships=4),this.$store.dispatch("GET_STARSHIPS")},decreasePage(){this.$store.state.pageStarships--,this.$store.state.pageStarships<1&&(this.$store.state.pageStarships=1),this.$store.dispatch("GET_STARSHIPS")},showImageShip:function(t){this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGESHIPS",t)}},computed:{...(0,E.Se)(["getStarShips","getImageShips"]),...(0,E.OI)(["setShips"]),...(0,E.rn)(["numImg","page"])}},F=T,$=(0,h.Z)(F,C,_,!1,null,"589b5b7a",null),k=$.exports;i.ZP.use(y.ZP);const j=[{path:"/",name:"Home",component:k},{path:"/infoStarShip",name:"infoStarShip",component:()=>s.e(195).then(s.bind(s,8195))},{path:"/ShowFilms",name:"ShowFilms",component:()=>s.e(599).then(s.bind(s,8599))},{path:"/ShowPeople",name:"ShowPeople",component:()=>s.e(441).then(s.bind(s,7441))},{path:"/ShowPlanets",name:"ShowPlanets",component:()=>s.e(299).then(s.bind(s,9151))},{path:"/ShowSpecies",name:"ShowSpecies",component:()=>s.e(951).then(s.bind(s,951))},{path:"/ShowVehicles",name:"ShowVehicles",component:()=>s.e(396).then(s.bind(s,2396))},{path:"/infoFilms",name:"infoFilms",component:()=>Promise.all([s.e(81),s.e(387)]).then(s.bind(s,5653))},{path:"/infoCharacters",name:"infoCharacters",component:()=>Promise.all([s.e(81),s.e(357)]).then(s.bind(s,506))},{path:"/infoPlanets",name:"infoPlanets",component:()=>s.e(896).then(s.bind(s,1896))},{path:"/infoSpecies",name:"infoSpecies",component:()=>s.e(595).then(s.bind(s,2595))},{path:"/infoVehicles",name:"infoVehicles",component:()=>s.e(720).then(s.bind(s,7720))}],G=y.ZP.prototype.push;y.ZP.prototype.push=function(t){return G.call(this,t).catch((t=>t))};const O=new y.ZP({mode:"hash",base:"/starwars/",routes:j});var A=O;i.ZP.use(E.ZP);var V=new E.ZP.Store({state:{starShips:[],infoTechShip:[],films:[],people:[],planets:[],species:[],vehicles:[],infoFilm:[],infoCharacters:[],infoPlanets:[],infoSpecies:[],infoVehicles:[],arrayRelatedItems:[],pagePeople:1,pagePlanets:1,pageSpecies:1,pageVehicles:1,pageStarships:1,numImg:1,imageShips:"",imageFilm:""},getters:{getStarShips(t){return t.starShips},getInfoShips(t){return t.infoTechShip},getPage(t){return t.page},getCondition(t){return t.condition},getNumImg(t){return t.numImg},getImageShips(t){return t.imageShips},getFilms(t){return t.films},getPeople(t){return t.people},getPlanets(t){return t.planets},getSpecies(t){return t.species},getVehicles(t){return t.vehicles},getInfoFilms(t){return t.infoFilm},getImageFilm(t){return t.imageFilm},getInfoCharacters(t){return t.infoCharacters},getInfoPlanets(t){return t.infoPlanets},getInfoSpecies(t){return t.infoSpecies},getInfoVehicles(t){return t.infoVehicles}},mutations:{setShips(t,e){t.starShips=e},setImageShips(t,e){t.imageShips=e},setInfoShips(t,e){t.infoTechShip=e},setFilms(t,e){t.films=e},setPeople(t,e){t.people=e},setPlanets(t,e){t.planets=e},setSpecies(t,e){t.species=e},setVehicles(t,e){t.vehicles=e},setInfoFilms(t,e){t.infoFilm=e},setImageFilm(t,e){t.imageFilm=e},setInfoCharacters(t,e){t.infoCharacters=e},setInfoPlanets(t,e){t.infoPlanets=e},setInfoSpecies(t,e){t.infoSpecies=e},setInfoVehicles(t,e){t.infoVehicles=e}},actions:{async GET_STARSHIPS({commit:t}){const e=await fetch(`https://swapi.dev/api/starships/?page=${this.state.pageStarships}`),s=await e.json();t("setShips",s)},async GET_IMAGESHIPS({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/starships/${this.state.numImg}.jpg`),s=e.url;console.log(s),404==e.status?this.state.imageShips="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageShips",s)}catch(e){console.log("error url imatge")}console.log("image ship",imageShips)},async GET_INFOSTARSHIPS({commit:t},e){const s=await fetch(e.url),i=await s.json();t("setInfoShips",i)},async GET_FILMS({commit:t}){const e=await fetch("https://swapi.dev/api/films/"),s=await e.json();t("setFilms",s)},async GET_PEOPLE({commit:t}){const e=await fetch(`https://swapi.dev/api/people/?page=${this.state.pagePeople}`),s=await e.json();t("setPeople",s)},async GET_PLANETS({commit:t}){const e=await fetch(`https://swapi.dev/api/planets/?page=${this.state.pagePlanets}`),s=await e.json();t("setPlanets",s)},async GET_SPECIES({commit:t}){const e=await fetch(`https://swapi.dev/api/species/?page=${this.state.pageSpecies}`),s=await e.json();t("setSpecies",s)},async GET_VEHICLES({commit:t}){const e=await fetch(`https://swapi.dev/api/vehicles/?page=${this.state.pageVehicles}`),s=await e.json();t("setVehicles",s)},async GET_INFOFILMS({commit:t},e){const s=await fetch(e),i=await s.json();t("setInfoFilms",i)},async GET_IMAGEFILM({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/films/${this.state.numImg}.jpg`),s=e.url;404==e.status?this.state.imageFilm="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageFilm",s)}catch(e){console.log("error url imatge")}},async GET_INFOCHARACTERS({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoCharacters",i)},async GET_INFOPLANET({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoPlanets",i)},async GET_INFOSPECIES({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoSpecies",i)},async GET_INFOVEHICLES({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoVehicles",i)}},modules:{}}),N=s(7500);s(387);i.ZP.config.productionTip=!1,i.ZP.use(N.ZP),new i.ZP({router:A,store:V,render:t=>t(I)}).$mount("#app")},6045:function(t,e,s){t.exports=s.p+"img/iconmonstr-copyright-2.be8e8ef6.svg"},436:function(t,e,s){t.exports=s.p+"img/star-wars-4.5f135d99.svg"}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,n,a){if(!i){var o=1/0;for(h=0;h<t.length;h++){i=t[h][0],n=t[h][1],a=t[h][2];for(var r=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(r=!1,a<o&&(o=a));if(r){t.splice(h--,1);var l=n();void 0!==l&&(e=l)}}return e}a=a||0;for(var h=t.length;h>0&&t[h-1][2]>a;h--)t[h]=t[h-1];t[h]=[i,n,a]}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{81:"eece23ea",195:"8d50ed9a",299:"bbb58af5",357:"c445c650",387:"45f2f6b0",396:"dd63b548",441:"9c88da59",595:"89fea0af",599:"3a390e9f",720:"3c006c7d",896:"949bf9ec",951:"0601482f"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{195:"95908148",299:"5660885c",357:"e26c0017",387:"8f627cbd",396:"08fe4665",441:"a6439536",595:"c628a947",599:"12fae70e",720:"60d38d28",896:"be0a80da",951:"076a3089"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="starwars:";s.l=function(i,n,a,o){if(t[i])t[i].push(n);else{var r,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),h=0;h<l.length;h++){var p=l[h];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==e+a){r=p;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+a),r.src=i),t[i]=[n];var u=function(e,s){r.onerror=r.onload=null,clearTimeout(m);var n=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/starwars/"}(),function(){var t=function(t,e,s,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=function(a){if(n.onerror=n.onload=null,"load"===a.type)s();else{var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,n.parentNode.removeChild(n),i(c)}};return n.onerror=n.onload=a,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var n=s[i],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===t||a===e))return n}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){n=o[i],a=n.getAttribute("data-href");if(a===t||a===e)return n}},i=function(i){return new Promise((function(n,a){var o=s.miniCssF(i),r=s.p+o;if(e(o,r))return n();t(i,r,n,a)}))},n={143:0};s.f.miniCss=function(t,e){var s={195:1,299:1,357:1,387:1,396:1,441:1,595:1,599:1,720:1,896:1,951:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=i(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,i){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var a=new Promise((function(s,i){n=t[e]=[s,i]}));i.push(n[2]=a);var o=s.p+s.u(e),r=new Error,c=function(i){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",r.name="ChunkLoadError",r.type=a,r.request=o,n[1](r)}};s.l(o,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,a,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(c)var h=c(s)}for(e&&e(i);l<o.length;l++)a=o[l],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(h)},i=self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(1137)}));i=s.O(i)})();
//# sourceMappingURL=app.0622c984.js.map