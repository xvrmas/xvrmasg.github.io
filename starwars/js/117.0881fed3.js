"use strict";(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[117],{5028:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var i=function(){var e=this,s=e._self._c;return s("div",{staticClass:"border p-5"},[s("div",[s("div",{staticClass:"columns is-multiline is-centered is-mobile"},e._l(e.getSpecies.results,(function(t,i){return s("div",{key:i},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:`https://starwars-visualguide.com/assets/img/species/${t.url.split(/\D/g).join("")}.jpg`,alt:"image film"}})]),s("a",{staticClass:"nav-link",on:{click:function(s){e.setInfoSpecies(t),e.getFilms(t)}}},[s("p",{staticClass:"title is-size-5",staticStyle:{color:"gray"}},[e._v(e._s(t.name))])])])])])})),0)]),s("section",{staticClass:"columns is-centered is-mobile is-multiline"},[s("button",{staticClass:"button is-dark active m-3",on:{click:function(s){return e.decreasePage()}}},[e._v("-")]),s("h1",{staticClass:"m-3 has-text-gray"},[e._v("Page: "+e._s(this.$store.state.pageSpecies)+" of 4")]),s("button",{staticClass:"button is-dark m-3",on:{click:function(s){return e.increasePage()}}},[e._v("+")])])])},a=[],c=(t(7658),t(629)),o={name:"ShowSpecies",computed:{...(0,c.Se)(["getSpecies"])},mounted(){document.getElementById("op4").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op4").style.borderBottom="none"},methods:{setInfoSpecies(e){this.$store.state.infoSpecies=e,this.$router.push("/infoSpecies")},getFilms(e){this.$store.state.infoFilm=e,console.log("show vehicles",e)},increasePage(){this.$store.state.pageSpecies++,this.$store.state.pageSpecies>4&&(this.$store.state.pageSpecies=4),this.$store.dispatch("GET_SPECIES")},decreasePage(){this.$store.state.pageSpecies--,this.$store.state.pageSpecies<1&&(this.$store.state.pageSpecies=1),this.$store.dispatch("GET_SPECIES")}}},r=o,n=t(1001),l=(0,n.Z)(r,i,a,!1,null,"e4b5dc82",null),p=l.exports}}]);
//# sourceMappingURL=117.0881fed3.js.map