"use strict";(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[357],{6668:function(t,s,i){i.r(s),i.d(s,{default:function(){return C}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"caixa"},[s("div",{staticClass:"container p-5"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half mt-3"},[s("img",{attrs:{src:t.getImageFilm}})]),s("div",{staticClass:"column has-text-left is-half mt-3"},[s("div",{staticClass:"box"},[s("p",[s("strong",[t._v("Title: ")]),t._v(" "+t._s(t.infoFilm.title))]),s("p",[s("strong",[t._v("Director: ")]),t._v(" "+t._s(t.infoFilm.director))]),s("p",[s("strong",[t._v("Producer(s): ")]),t._v(t._s(t.infoFilm.producer))]),s("p",[s("strong",[t._v("Release date: ")]),t._v(t._s(t.infoFilm.release_date))]),s("p",[s("strong",[t._v("Synopsis: ")]),t._v(t._s(t.infoFilm.opening_crawl))])]),s("relatedCharacters",{attrs:{infoFilm:t.infoFilm}}),s("relatedSpecies",{attrs:{infoFilm:t.infoFilm}}),s("relatedPlanets",{attrs:{infoFilm:t.infoFilm}}),s("relatedStarships",{attrs:{infoFilm:t.infoFilm}}),s("relatedvehicles",{attrs:{infoFilm:t.infoFilm}})],1)])])])},a=[],l=i(3822),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("p",{staticClass:"titol is-size-4 is-bold"},[t._v("Related Characters")]),s("div",{staticClass:"columns is-multiline is-mobile is-centered"},t._l(t.personatges,(function(e,a){return s("div",{key:a},[s("div",{staticClass:"carta"},[s("div",[s("figure",{staticClass:"image"},[s("img",{staticClass:"imatge",attrs:{src:i(5681)(`./${e.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("a",{staticClass:"nav-link",on:{click:function(s){return t.setInfo(e)}}},[s("p",{staticClass:"title has-text-grey is-size-6"},[t._v(" "+t._s(e.name))])])])])])})),0)])},n=[],o=(i(7658),{name:"relatedCharacters",props:["infoFilm"],props:{infoFilm:{type:Object}},data(){return{personatges:[],numImatge:""}},mounted(){this.getcharacters()},methods:{setInfo(t){this.$router.push("/infoCharacters"),this.$store.dispatch("GET_INFOCHARACTERS",t)},async getcharacters(){for(let t=0;t<this.infoFilm.characters.length;t++){const s=fetch(this.infoFilm.characters[t]),i=await(await s).json();this.personatges.push(i)}}}}),c=o,m=i(1001),f=(0,m.Z)(c,r,n,!1,null,null,null),d=f.exports,p=i(2724),u=i(4195),h=i(5248),v=i(7797),g={name:"infoFilms",components:{relatedCharacters:d,relatedPlanets:p.Z,relatedSpecies:u.Z,relatedStarships:h.Z,relatedvehicles:v.Z},props:["infoFilm"],computed:{...(0,l.rn)(["infoFilm"]),...(0,l.Se)(["getImageFilm","getInfoVehicles"])}},_=g,F=(0,m.Z)(_,e,a,!1,null,"498b340d",null),C=F.exports}}]);
//# sourceMappingURL=357.c9ad5964.js.map