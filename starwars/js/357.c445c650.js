(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[357],{2204:function(t,s,e){"use strict";e.d(s,{Z:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("p",{staticClass:"titol is-size-4 is-bold"},[t._v("Related Films")]),s("div",{staticClass:"columns is-multiline is-mobile is-centered"},t._l(t.films,(function(i,r){return s("div",{key:r},[s("div",{staticClass:"carta"},[s("div",[s("figure",{staticClass:"image"},[s("img",{staticClass:"imatge",attrs:{src:e(477)(`./${i.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("a",{staticClass:"nav-link",on:{click:function(s){t.setInfo(i),t.showImageFilm(i)}}},[s("p",{staticClass:"title has-text-grey is-size-6"},[t._v(" "+t._s(i.title))])])])])])})),0)])},r=[],n=(e(7658),e(629)),o={name:"relatedFilms",computed:{...(0,n.Se)(["getInfoFilms"])},data(){return{films:[]}},mounted(){this.getFilms()},methods:{setInfo(t){this.$router.push("/infoFilms"),this.$store.dispatch("GET_INFOFILMS",t)},showImageFilm:function(t){return this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGEFILM")},async getFilms(){if(this.getInfoFilms.films.length>=1)for(let t=0;t<this.getInfoFilms.films.length;t++){const s=fetch(this.getInfoFilms.films[t]),e=await(await s).json();this.films.push(e)}else this.$store.state.condition=!1}}},a=o,l=e(1001),c=(0,l.Z)(a,i,r,!1,null,null,null),u=c.exports},506:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return d}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"caixa"},[s("div",{staticClass:"container p-5"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half mt-3"},[s("img",{attrs:{src:e(5681)(`./${t.getInfoCharacters.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("div",{staticClass:"column has-text-left is-half mt-3"},[s("div",{staticClass:"box"},[s("p",[s("strong",[t._v("Name: ")]),t._v(" "+t._s(t.getInfoCharacters.name))]),s("p",[s("strong",[t._v("Gender: ")]),t._v(t._s(t.getInfoCharacters.gender))]),s("p",[s("strong",[t._v("Birthday: ")]),t._v(" "+t._s(t.getInfoCharacters.birth_year))]),s("p",[s("strong",[t._v("Eye color: ")]),t._v(t._s(t.getInfoCharacters.eye_color))]),s("p",[s("strong",[t._v("Skin color: ")]),t._v(t._s(t.getInfoCharacters.skin_color))]),s("p",[s("strong",[t._v("Hair color: ")]),t._v(t._s(t.getInfoCharacters.hair_color))]),s("p",[s("strong",[t._v("Height: ")]),t._v(t._s(t.getInfoCharacters.height)+" cm.")]),s("p",[s("strong",[t._v("Mass: ")]),t._v(t._s(t.getInfoCharacters.mass)+" Kgr.")])]),s("button",{staticClass:"button is-dark",on:{click:t.retroceder}},[t._v("Go back")])])])])])},r=[],n=e(629),o=e(2204),a=e(9698),l=e(1233),c=e(4443),u=e(6542),g={name:"infoCharacters",components:{relatedPlanets:a.Z,relatedSpecies:l.Z,relatedStarships:c.Z,relatedvehicles:u.Z,relatedFilms:o.Z},computed:{...(0,n.Se)(["getInfoCharacters"])},mounted(){document.getElementById("op2").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op2").style.borderBottom="none"},methods:{retroceder(){window.history.back()}}},f=g,m=e(1001),p=(0,m.Z)(f,i,r,!1,null,null,null),d=p.exports},477:function(t,s,e){var i={"./1.jpg":8659,"./2.jpg":1525,"./3.jpg":4939,"./4.jpg":3299,"./5.jpg":3626,"./6.jpg":1511};function r(t){var s=n(t);return e(s)}function n(t){if(!e.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=n,t.exports=r,r.id=477},8659:function(t,s,e){"use strict";t.exports=e.p+"img/1.fe041fea.jpg"},1525:function(t,s,e){"use strict";t.exports=e.p+"img/2.6c045d6a.jpg"},4939:function(t,s,e){"use strict";t.exports=e.p+"img/3.15711afb.jpg"},3299:function(t,s,e){"use strict";t.exports=e.p+"img/4.a1fc1590.jpg"},3626:function(t,s,e){"use strict";t.exports=e.p+"img/5.aef3b5d9.jpg"},1511:function(t,s,e){"use strict";t.exports=e.p+"img/6.6367d89d.jpg"}}]);
//# sourceMappingURL=357.c445c650.js.map