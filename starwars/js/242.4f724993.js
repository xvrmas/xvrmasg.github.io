(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[242],{5267:function(t,s,e){"use strict";e.d(s,{Z:function(){return g}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("p",{staticClass:"titol is-size-4 is-bold"},[t._v("Related Films")]),s("div",{staticClass:"columns is-multiline is-mobile is-centered"},t._l(t.films,(function(i,n){return s("div",{key:n},[s("div",{staticClass:"carta"},[s("div",[s("figure",{staticClass:"image"},[s("img",{staticClass:"imatge",attrs:{src:e(477)(`./${i.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("a",{staticClass:"nav-link",on:{click:function(s){t.setInfo(i),t.showImageFilm(i)}}},[s("p",{staticClass:"title has-text-grey is-size-6"},[t._v(" "+t._s(i.title))])])])])])})),0)])},n=[],o=(e(7658),e(629)),a={name:"relatedFilms",computed:{...(0,o.Se)(["getInfoFilms"])},data(){return{films:[]}},mounted(){this.getFilms()},methods:{setInfo(t){this.$store.state.infoFilm=t,this.$router.push("/infoFilms"),console.log("related films",t)},showImageFilm:function(t){return this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGEFILM")},async getFilms(){if(this.getInfoFilms.films.length>=1)for(let t=0;t<this.getInfoFilms.films.length;t++){const s=fetch(this.getInfoFilms.films[t]),e=await(await s).json();this.films.push(e)}else this.$store.state.condition=!1}}},r=a,l=e(1001),c=(0,l.Z)(r,i,n,!1,null,null,null),g=c.exports},5242:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"caixa"},[s("div",{staticClass:"container p-5"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half mt-3"},[s("img",{attrs:{src:`https://starwars-visualguide.com/assets/img/species/${t.getInfoSpecies.url.split(/\D/g).join("")}.jpg`,alt:"image film"}})]),s("div",{staticClass:"column has-text-left is-half mt-3"},[s("div",{staticClass:"box"},[s("p",[s("strong",[t._v("Name: ")]),t._v(" "+t._s(t.getInfoSpecies.name))]),s("p",[s("strong",[t._v("Classification: ")]),t._v(" "+t._s(t.getInfoSpecies.classification))]),s("p",[s("strong",[t._v("Designation: ")]),t._v(" "+t._s(t.getInfoSpecies.designation))]),s("p",[s("strong",[t._v("Averge height: ")]),t._v(" "+t._s(t.getInfoSpecies.average_height)+" cm. ")]),s("p",[s("strong",[t._v("Average lifespan: ")]),t._v(" "+t._s(t.getInfoSpecies.average_lifespan)+" ")]),s("p",[s("strong",[t._v("Hair color: ")]),t._v(" "+t._s(t.getInfoSpecies.hair_colors))]),s("p",[s("strong",[t._v("Skin color: ")]),t._v(" "+t._s(t.getInfoSpecies.skin_colors))]),s("p",[s("strong",[t._v("Eye color: ")]),t._v(" "+t._s(t.getInfoSpecies.eye_colors))]),s("p",[s("strong",[t._v("Languaje: ")]),t._v(" "+t._s(t.getInfoSpecies.language))])]),s("div",{staticClass:"column"},[s("relatedFilms")],1),s("button",{staticClass:"button is-dark",on:{click:t.retroceder}},[t._v("Go back")])])])])])},n=[],o=e(629),a=e(5267),r={name:"infoSpecies",components:{relatedFilms:a.Z},computed:{...(0,o.Se)(["getInfoSpecies"])},mounted(){document.getElementById("op4").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op4").style.borderBottom="none"},methods:{retroceder(){window.history.back()}}},l=r,c=e(1001),g=(0,c.Z)(l,i,n,!1,null,null,null),u=g.exports},477:function(t,s,e){var i={"./1.jpg":8659,"./2.jpg":1525,"./3.jpg":4939,"./4.jpg":3299,"./5.jpg":3626,"./6.jpg":1511};function n(t){var s=o(t);return e(s)}function o(t){if(!e.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id=477},8659:function(t,s,e){"use strict";t.exports=e.p+"img/1.fe041fea.jpg"},1525:function(t,s,e){"use strict";t.exports=e.p+"img/2.6c045d6a.jpg"},4939:function(t,s,e){"use strict";t.exports=e.p+"img/3.15711afb.jpg"},3299:function(t,s,e){"use strict";t.exports=e.p+"img/4.a1fc1590.jpg"},3626:function(t,s,e){"use strict";t.exports=e.p+"img/5.aef3b5d9.jpg"},1511:function(t,s,e){"use strict";t.exports=e.p+"img/6.6367d89d.jpg"}}]);
//# sourceMappingURL=242.4f724993.js.map