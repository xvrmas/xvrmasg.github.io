(function(){var t={892:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"box"},[t._m(0),e("button",{staticClass:"button",on:{click:function(e){return t.goBack()}}},[t._v("X")])])])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel"},[e("p",[t._v("This website is part of an exercise in my training at the IT Academy in Barcelona.")]),e("br"),e("p",[t._v(" The information is taken from the api: "),e("a",{attrs:{target:"_blank",href:"https://swapi.dev/"}},[t._v("swapi.dev")]),t._v(" and from the web: "),e("a",{attrs:{target:"_blank",href:" https://starwars-visualguide.com"}},[t._v(" starwars-visualguide")])])])}],a={name:"info",methods:{goBack(){window.history.back()}}},o=a,r=s(1001),c=(0,r.Z)(o,i,n,!1,null,"81a25fac",null),l=c.exports},1424:function(t,e,s){"use strict";var i=s(144),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-text-centered is-family-secondary",attrs:{id:"app"}},[e("NavBar"),e("router-view"),e("Footer")],1)},a=[],o=(s(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"contenidor"},[e("div",{staticClass:"caixa"},[e("div",[e("img",{staticStyle:{width:"250px",margin:"20px"},attrs:{src:s(436),alt:""}}),e("b-button",{staticClass:"is-rounded is-dark",staticStyle:{"margin-top":"5%","margin-left":"5%"},on:{click:function(e){return t.info()}}},[t._v("Info")])],1)]),e("div",{staticClass:"botons"},[e("div",[e("a",{staticClass:"boto_nav",attrs:{id:"op1"},on:{click:function(e){return t.showFilms()}}},[t._v("Films")]),e("a",{staticClass:"boto_nav",attrs:{id:"op2"},on:{click:function(e){return t.showPeople()}}},[t._v("Characters")]),e("a",{staticClass:"boto_nav",attrs:{id:"op3"},on:{click:function(e){return t.showPlanets()}}},[t._v("Planets")]),e("a",{staticClass:"boto_nav",attrs:{id:"op4"},on:{click:function(e){return t.showSpecies()}}},[t._v("Species")]),e("a",{staticClass:"boto_nav",attrs:{id:"op5"},on:{click:function(e){t.starships(),t.showImageShip()}}},[t._v("Starships")]),e("a",{staticClass:"boto_nav",attrs:{id:"op6"},on:{click:function(e){return t.showVehicles()}}},[t._v("Vehicles")])])])])}),r=[],c=s(892),l={name:"NavBar",components:{info:c["default"]},data(){return{boton:document.getElementsByClassName("boto")}},methods:{showFilms(){this.$router.push("/"),this.$store.dispatch("GET_FILMS")},starships(){this.$router.push("/ShowStarships"),this.$store.dispatch("GET_STARSHIPS")},showImageShip(){this.$store.dispatch("GET_IMAGESHIPS")},showPeople(){this.$router.push("/showPeople"),this.$store.dispatch("GET_PEOPLE")},showPlanets(){this.$router.push("showPlanets"),this.$store.dispatch("GET_PLANETS")},showSpecies(){this.$store.dispatch("GET_SPECIES"),this.$router.push("showSpecies")},showVehicles(){this.$router.push("showVehicles"),this.$store.dispatch("GET_VEHICLES")},info(){this.$router.push("info")}}},h=l,u=s(1001),p=(0,u.Z)(h,o,r,!1,null,"00bb45aa",null),m=p.exports,f=function(){var t=this;t._self._c;return t._m(0)},d=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half my-5"}),e("div",{staticClass:"column is-half adres"},[e("div")])]),e("div",{staticClass:"column copy"},[e("img",{staticClass:"alinear",attrs:{src:s(6045)}}),e("span",[t._v(" Copyright ")])])])])}],g={name:"Footer"},v=g,w=(0,u.Z)(v,f,d,!1,null,"a0e70630",null),S=w.exports,b={name:"app",components:{NavBar:m,Footer:S},mounted(){this.$store.dispatch("GET_FILMS"),this.$router.push("/")}},I=b,_=(0,u.Z)(I,n,a,!1,null,null,null),y=_.exports,P=s(8345),E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"border p-5"},[e("div",[e("div",{staticClass:"columns is-multiline is-centered is-mobile"},t._l(t.orderFilms,(function(i,n){return e("div",{key:n},[e("div",{staticClass:"card"},[e("a",{staticClass:"nav-link",on:{click:function(e){t.setInfoFilm(i),t.showImageFilm(i)}}},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image"},[e("img",{attrs:{src:s(477)(`./${i.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),e("div",[e("p",t._g({staticClass:"title is-size-6",staticStyle:{color:"gray"}},t.num),[t._v("Episode "+t._s(i.episode_id)+" ")]),e("p",{staticClass:"title has-text-weight-bold is-size-5",staticStyle:{color:"gray"}},[t._v(t._s(i.title))])])])])])])})),0)])])},F=[],C=s(629),T={name:"ShowFilms",data(){return{romNum:""}},computed:{...(0,C.Se)(["getFilms","getImageFilm"]),orderFilms(){let t=0,e=0,s="";if(0==this.getFilms.length)console.log("Loading...");else while(t<this.getFilms.length){e=t+1;while(e<this.getFilms.length)this.getFilms[t].episode_id>this.getFilms[e].episode_id&&(s=this.getFilms[t],this.getFilms[t]=this.getFilms[e],this.getFilms[e]=s),e++;t++}return this.getFilms},num(){let t=0;while(t<6)1==this.getFilms[t].episode_id&&(this.romNum="I"),2==this.getFilms[t].episode_id&&(this.romNum="II"),3==this.getFilms[t].episode_id&&(this.romNum="III"),4==this.getFilms[t].episode_id&&(this.romNum="IV"),5==this.getFilms[t].episode_id&&(this.romNum="V"),6==this.getFilms[t].episode_id&&(this.romNum="VI"),t++}},mounted(){document.getElementById("op1").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op1").style.borderBottom="none"},methods:{setInfoFilm(t){this.$store.state.infoFilm=t,this.$router.push("/infoFilms")},showImageFilm:function(t){return this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGEFILM")}}},j=T,k=(0,u.Z)(j,E,F,!1,null,"67ebaff9",null),V=k.exports;i.ZP.use(P.ZP);const N=[{path:"/",name:"Home",component:V},{path:"/ShowStarships",name:"ShowStarships",component:()=>s.e(251).then(s.bind(s,8251))},{path:"/ShowPeople",name:"ShowPeople",component:()=>s.e(953).then(s.bind(s,1953))},{path:"/ShowPlanets",name:"ShowPlanets",component:()=>s.e(511).then(s.bind(s,5511))},{path:"/ShowSpecies",name:"ShowSpecies",component:()=>s.e(482).then(s.bind(s,9482))},{path:"/ShowVehicles",name:"ShowVehicles",component:()=>s.e(304).then(s.bind(s,4304))},{path:"/infoFilms",name:"infoFilms",component:()=>Promise.all([s.e(16),s.e(213)]).then(s.bind(s,8779))},{path:"/infoCharacters",name:"infoCharacters",component:()=>Promise.all([s.e(16),s.e(316)]).then(s.bind(s,7295))},{path:"/infoPlanets",name:"infoPlanets",component:()=>s.e(724).then(s.bind(s,3724))},{path:"/infoSpecies",name:"infoSpecies",component:()=>s.e(547).then(s.bind(s,60))},{path:"/InfoStarShip",name:"InfoStarShip",component:()=>s.e(550).then(s.bind(s,3550))},{path:"/infoVehicles",name:"infoVehicles",component:()=>s.e(45).then(s.bind(s,9045))},{path:"/info",name:"info",component:()=>Promise.resolve().then(s.bind(s,892))}],$=P.ZP.prototype.push;P.ZP.prototype.push=function(t){return $.call(this,t).catch((t=>t))};const G=new P.ZP({mode:"hash",base:"/starwars/",routes:N});var x=G;i.ZP.use(C.ZP);var O=new C.ZP.Store({state:{starShips:[],infoTechShip:[],films:[],people:[],planets:[],species:[],vehicles:[],infoFilm:[],infoCharacters:[],infoPlanets:[],infoSpecies:[],infoVehicles:[],arrayRelatedItems:[],pagePeople:1,pagePlanets:1,pageSpecies:1,pageVehicles:1,pageStarships:1,numImg:1,imageShips:"",imageFilm:"",imageVehicles:""},getters:{getStarShips(t){return t.starShips},getInfoShips(t){return t.infoTechShip},getPage(t){return t.page},getCondition(t){return t.condition},getNumImg(t){return t.numImg},getImageShips(t){return t.imageShips},getFilms(t){return t.films},getPeople(t){return t.people},getPlanets(t){return t.planets},getSpecies(t){return t.species},getVehicles(t){return t.vehicles},getInfoFilms(t){return t.infoFilm},getImageFilm(t){return t.imageFilm},getImageVehicles(t){return t.imageVehicles},getInfoCharacters(t){return t.infoCharacters},getInfoPlanets(t){return t.infoPlanets},getInfoSpecies(t){return t.infoSpecies},getInfoVehicles(t){return t.infoVehicles}},mutations:{setShips(t,e){t.starShips=e},setImageShips(t,e){t.imageShips=e},setInfoShips(t,e){t.infoTechShip=e},setFilms(t,e){t.films=e},setPeople(t,e){t.people=e},setPlanets(t,e){t.planets=e},setSpecies(t,e){t.species=e},setVehicles(t,e){t.vehicles=e},setInfoFilms(t,e){t.infoFilm=e},setImageFilm(t,e){t.imageFilm=e},setInfoCharacters(t,e){t.infoCharacters=e},setInfoPlanets(t,e){t.infoPlanets=e},setInfoSpecies(t,e){t.infoSpecies=e},setInfoVehicles(t,e){t.infoVehicles=e},setImageVehicles(t,e){t.imageVehicles=e}},actions:{async GET_STARSHIPS({commit:t}){const e=await fetch(`https://swapi.dev/api/starships/?page=${this.state.pageStarships}`),s=await e.json();t("setShips",s)},async GET_IMAGESHIPS({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/starships/${this.state.numImg}.jpg`),s=e.url;404==e.status?this.state.imageShips="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageShips",s)}catch(e){console.log("error url imatge")}},async GET_INFOSTARSHIPS({commit:t},e){const s=await fetch(e.url),i=await s.json();t("setInfoShips",i)},async GET_FILMS({commit:t}){const e=await fetch("https://swapi.dev/api/films/");let s=await e.json();s=s.results,t("setFilms",s)},async GET_PEOPLE({commit:t}){const e=await fetch(`https://swapi.dev/api/people/?page=${this.state.pagePeople}`),s=await e.json();t("setPeople",s)},async GET_PLANETS({commit:t}){const e=await fetch(`https://swapi.dev/api/planets/?page=${this.state.pagePlanets}`),s=await e.json();t("setPlanets",s)},async GET_SPECIES({commit:t}){const e=await fetch(`https://swapi.dev/api/species/?page=${this.state.pageSpecies}`),s=await e.json();t("setSpecies",s)},async GET_VEHICLES({commit:t}){const e=await fetch(`https://swapi.dev/api/vehicles/?page=${this.state.pageVehicles}`),s=await e.json();t("setVehicles",s)},async GET_INFOFILMS({commit:t},e){const s=await fetch(e),i=await s.json();t("setInfoFilms",i)},async GET_IMAGEFILM({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/films/${this.state.numImg}.jpg`),s=e.url;404==e.status?this.state.imageFilm="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageFilm",s)}catch(e){console.log("error url imatge")}},async GET_INFOCHARACTERS({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoCharacters",i)},async GET_INFOPLANET({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoPlanets",i)},async GET_INFOSPECIES({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoSpecies",i)},async GET_INFOVEHICLES({commit:t},e){const s=fetch(e.url),i=await(await s).json();t("setInfoVehicles",i)},async GET_IMAGEVEHICLES({commit:t}){try{const e=await fetch(`https://starwars-visualguide.com/assets/img/vehicles/${this.state.numImg}.jpg`),s=e.url;404==e.status?this.state.imageVehicles="https://www.cityofkingman.gov/Home/ShowPublishedImage/2744/636934515291700000":t("setImageVehicles",s)}catch(e){console.log("error url imatge")}console.log("image ship",imageVehicles)}},modules:{}}),A=s(7500);s(387);i.ZP.config.productionTip=!1,i.ZP.use(A.ZP),new i.ZP({router:x,store:O,render:t=>t(y)}).$mount("#app")},477:function(t,e,s){var i={"./1.jpg":8659,"./2.jpg":1525,"./3.jpg":4939,"./4.jpg":3299,"./5.jpg":3626,"./6.jpg":1511};function n(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id=477},6045:function(t,e,s){"use strict";t.exports=s.p+"img/iconmonstr-copyright-2.3d80dd81.svg"},436:function(t,e,s){"use strict";t.exports=s.p+"img/star-wars-4.5f135d99.svg"},8659:function(t,e,s){"use strict";t.exports=s.p+"img/1.fe041fea.jpg"},1525:function(t,e,s){"use strict";t.exports=s.p+"img/2.6c045d6a.jpg"},4939:function(t,e,s){"use strict";t.exports=s.p+"img/3.15711afb.jpg"},3299:function(t,e,s){"use strict";t.exports=s.p+"img/4.a1fc1590.jpg"},3626:function(t,e,s){"use strict";t.exports=s.p+"img/5.aef3b5d9.jpg"},1511:function(t,e,s){"use strict";t.exports=s.p+"img/6.6367d89d.jpg"}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,n,a){if(!i){var o=1/0;for(h=0;h<t.length;h++){i=t[h][0],n=t[h][1],a=t[h][2];for(var r=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(r=!1,a<o&&(o=a));if(r){t.splice(h--,1);var l=n();void 0!==l&&(e=l)}}return e}a=a||0;for(var h=t.length;h>0&&t[h-1][2]>a;h--)t[h]=t[h-1];t[h]=[i,n,a]}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{16:"86ed6814",45:"9dbfea99",213:"6eb4a4b8",251:"17795a06",304:"8fc9d9af",316:"1d2e9bbf",482:"619c5acb",511:"b0b25724",547:"d2d1793a",550:"bea73be6",724:"8615ad2f",953:"a984715a"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{45:"0dfec493",213:"cea65c23",251:"68933984",304:"89c3cfa6",316:"ba7697b7",482:"35fade40",511:"bfc3d6f6",547:"0dfec493",550:"44087330",724:"0dfec493",953:"62cb18db"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="starwars:";s.l=function(i,n,a,o){if(t[i])t[i].push(n);else{var r,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),h=0;h<l.length;h++){var u=l[h];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+a){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+a),r.src=i),t[i]=[n];var p=function(e,s){r.onerror=r.onload=null,clearTimeout(m);var n=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/starwars/"}(),function(){var t=function(t,e,s,i){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=function(a){if(n.onerror=n.onload=null,"load"===a.type)s();else{var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,n.parentNode.removeChild(n),i(c)}};return n.onerror=n.onload=a,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var n=s[i],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===t||a===e))return n}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){n=o[i],a=n.getAttribute("data-href");if(a===t||a===e)return n}},i=function(i){return new Promise((function(n,a){var o=s.miniCssF(i),r=s.p+o;if(e(o,r))return n();t(i,r,n,a)}))},n={143:0};s.f.miniCss=function(t,e){var s={45:1,213:1,251:1,304:1,316:1,482:1,511:1,547:1,550:1,724:1,953:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=i(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,i){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)i.push(n[2]);else{var a=new Promise((function(s,i){n=t[e]=[s,i]}));i.push(n[2]=a);var o=s.p+s.u(e),r=new Error,c=function(i){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",r.name="ChunkLoadError",r.type=a,r.request=o,n[1](r)}};s.l(o,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,a,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(c)var h=c(s)}for(e&&e(i);l<o.length;l++)a=o[l],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(h)},i=self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(1424)}));i=s.O(i)})();
//# sourceMappingURL=app.c92edf00.js.map