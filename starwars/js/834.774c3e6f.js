"use strict";(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[834],{8433:function(t,s,e){e.r(s),e.d(s,{default:function(){return F}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"caixa"},[s("div",{staticClass:"container p-5"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half mt-3"},[s("img",{attrs:{src:t.getImageFilm}}),s("div",{staticClass:"mt-3"})]),s("div",{staticClass:"column has-text-left is-half mt-3"},[s("div",{staticClass:"box"},[s("p",[s("strong",[t._v("Title: ")]),t._v(" "+t._s(t.infoFilm.title))]),s("p",[s("strong",[t._v("Director: ")]),t._v(" "+t._s(t.infoFilm.director))]),s("p",[s("strong",[t._v("Producer(s): ")]),t._v(t._s(t.infoFilm.producer))]),s("p",[s("strong",[t._v("Release date: ")]),t._v(t._s(t.infoFilm.release_date))]),s("p",[s("strong",[t._v("Synopsis: ")]),t._v(t._s(t.infoFilm.opening_crawl))])]),s("div",{staticClass:"column"},[s("relatedSpecies"),s("relatedPlanets"),s("relatedCharacters")],1),s("div",{staticClass:"column"},[s("relatedStarships"),s("relatedvehicles")],1)])])])])},i=[],l=e(629),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("p",{staticClass:"titol is-size-4 is-bold"},[t._v("Related Characters")]),s("div",{staticClass:"columns is-multiline is-mobile is-centered"},t._l(t.personatges,(function(a,i){return s("div",{key:i},[s("div",{staticClass:"carta"},[s("div",[s("figure",{staticClass:"image"},[s("img",{staticClass:"imatge",attrs:{src:e(5681)(`./${a.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("a",{staticClass:"nav-link",on:{click:function(s){return t.setInfo(a)}}},[s("p",{staticClass:"title has-text-grey-lighter is-size-6"},[t._v(" "+t._s(a.name))])])])])])})),0)])},n=[],c=(e(7658),{name:"relatedCharacters",data(){return{personatges:[],numImatge:""}},computed:{...(0,l.Se)(["getInfoFilms"])},created(){this.getcharacters()},methods:{setInfo(t){this.$router.push("/infoCharacters"),this.$store.dispatch("GET_INFOCHARACTERS",t)},async getcharacters(){for(let t=0;t<this.getInfoFilms.characters.length;t++){const s=fetch(this.getInfoFilms.characters[t]),e=await(await s).json();this.personatges.push(e)}}}}),o=c,d=e(1001),m=(0,d.Z)(o,r,n,!1,null,null,null),u=m.exports,h=e(9698),v=e(1233),f=e(4443),p=e(6542),g={name:"infoFilms",components:{relatedCharacters:u,relatedPlanets:h.Z,relatedSpecies:v.Z,relatedStarships:f.Z,relatedvehicles:p.Z},computed:{...(0,l.rn)(["infoFilm"]),...(0,l.Se)(["getImageFilm"])}},C=g,_=(0,d.Z)(C,a,i,!1,null,"ddc1c264",null),F=_.exports}}]);
//# sourceMappingURL=834.774c3e6f.js.map