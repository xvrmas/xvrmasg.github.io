"use strict";(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[19],{1621:function(s,t,e){e.d(t,{Z:function(){return m}});var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"box"},[t("p",{staticClass:"titol is-size-4 has-text-left is-bold"},[s._v("Related Films")]),t("p",{staticClass:"is-size-4 m-5 has-text-gray-lighter"},[s._v(" "+s._s(s.msg))]),t("div",{staticClass:"columns is-multiline is-mobile is-centered"},s._l(s.orderFilms,(function(i,a){return t("div",{key:a},[t("div",{staticClass:"carta"},[t("a",{staticClass:"nav-link",on:{click:function(t){s.setInfo(i),s.showImageFilm(i)}}},[t("figure",{staticClass:"image"},[t("img",{staticClass:"imatge",attrs:{src:e(477)(`./${i.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),t("div",[t("p",{staticClass:"title has-text-grey is-size-6"},[s._v(" "+s._s(i.title))])])])])])})),0)])},a=[],l=(e(7658),e(629)),o={name:"relatedFilms",computed:{...(0,l.Se)(["getInfoFilms"]),orderFilms(){let s=0,t=0,e="";if(0==this.films.length)console.log("Loading...");else while(s<this.films.length){t=s+1;while(t<this.films.length)this.films[s].episode_id>this.films[t].episode_id&&(e=this.films[s],this.films[s]=this.films[t],this.films[t]=e),t++;s++}return this.films}},data(){return{films:[],msg:""}},mounted(){this.getFilms()},methods:{setInfo(s){this.$store.state.infoFilm=s,this.$router.push("/infoFilms")},showImageFilm:function(s){return this.$store.state.numImg=s.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGEFILM")},async getFilms(){if(this.getInfoFilms.films.length>=1)for(let s=0;s<this.getInfoFilms.films.length;s++){const t=fetch(this.getInfoFilms.films[s]),e=await(await t).json();this.films.push(e)}else this.msg="Films not available",this.$store.state.condition=!1}},warch:{orderFilms(){this.fims}}},r=o,n=e(1001),h=(0,n.Z)(r,i,a,!1,null,null,null),m=h.exports},9848:function(s,t,e){e.r(t),e.d(t,{default:function(){return u}});var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"caixa"},[t("div",{staticClass:"container p-5"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-half mt-3"},[t("img",{staticStyle:{height:"50vh"},attrs:{src:e(5681)(`./${s.getInfoCharacters.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),t("div",{staticClass:"column has-text-left is-half mt-3"},[t("div",{staticClass:"box"},[t("p",{staticClass:"is-size-3"},[t("strong",[s._v(" "+s._s(s.getInfoCharacters.name)+" ")])]),t("p",[t("strong",[s._v("Gender: ")]),s._v(s._s(s.getInfoCharacters.gender))]),t("p",[t("strong",[s._v("Birthday: ")]),s._v(" "+s._s(s.getInfoCharacters.birth_year))]),t("p",[t("strong",[s._v("Eye color: ")]),s._v(s._s(s.getInfoCharacters.eye_color))]),t("p",[t("strong",[s._v("Skin color: ")]),s._v(s._s(s.getInfoCharacters.skin_color))]),t("p",[t("strong",[s._v("Hair color: ")]),s._v(s._s(s.getInfoCharacters.hair_color))]),t("p",[t("strong",[s._v("Height: ")]),s._v(s._s(s.getInfoCharacters.height)+" cm.")]),t("p",[t("strong",[s._v("Mass: ")]),s._v(s._s(s.getInfoCharacters.mass)+" Kgr.")]),t("p",[t("strong",[s._v("Home world: ")]),t("a",{on:{click:function(t){s.setInfoPlanets(),s.setInfoResidents(),s.getFilms()}}},[s._v(s._s(s.msg))])]),t("br")])])]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("relatedFilms"),t("relatedStarships")],1),t("div",{staticClass:"column"},[t("relatedvehicles"),t("relatedSpecies")],1)])])])},a=[],l=(e(7658),e(629)),o=e(1621),r=e(86),n=e(8782),h=e(5357),m=e(1666),c={name:"infoCharacters",components:{relatedPlanets:r.Z,relatedSpecies:n.Z,relatedStarships:h.Z,relatedvehicles:m.Z,relatedFilms:o.Z},data(){return{msg:"",home:[]}},computed:{...(0,l.Se)(["getInfoCharacters"]),async homeworld(){const s=fetch(this.getInfoCharacters.homeworld);this.home=await(await s).json(),this.msg=this.home.name}},mounted(){this.homeworld,document.getElementById("op2").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op2").style.borderBottom="none"},methods:{retroceder(){window.history.back()},getFilms(){this.$store.state.infoFilm=this.home},setInfoPlanets(){this.$store.state.infoPlanets=this.home,this.$router.push("/infoPlanets")},setInfoResidents(){this.$store.state.infoCharacters=this.home}}},f=c,d=e(1001),g=(0,d.Z)(f,i,a,!1,null,"62969892",null),u=g.exports}}]);
//# sourceMappingURL=19.9269c5d5.js.map