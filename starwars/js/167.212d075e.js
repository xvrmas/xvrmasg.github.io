"use strict";(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[167],{7167:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});var i=function(){var e=this,s=e._self._c;return s("div",{staticClass:"border p-5"},[s("div",[s("div",{staticClass:"columns is-multiline is-centered is-mobile"},e._l(e.getVehicles.results,(function(t,i){return s("div",{key:i},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:`https://starwars-visualguide.com/assets/img/vehicles/${t.url.split(/\D/g).join("")}.jpg`,alt:"image film"},on:{error:e.setErrorImg}})]),s("a",{staticClass:"nav-link"},[s("p",{staticClass:"title is-size-5",staticStyle:{color:"gray"},on:{click:function(s){e.getInfoVehicles(t),e.showImageVehicle(t),e.getFilms(t),e.setInfoPilots(t)}}},[e._v(e._s(t.name)+" ")])])])])])})),0)]),s("section",{staticClass:"columns is-centered is-mobile is-multiline"},[s("button",{staticClass:"button is-dark active m-3",on:{click:function(s){return e.decreasePage()}}},[e._v("-")]),s("h1",{staticClass:"m-3 has-text-gray"},[e._v("Page: "+e._s(this.$store.state.pageVehicles)+" of 4")]),s("button",{staticClass:"button is-dark m-3",on:{click:function(s){return e.increasePage()}}},[e._v("+")])])])},a=[],o=(t(7658),t(629)),r=t(5985),l={name:"showVehicles",computed:{...(0,o.Se)(["getVehicles"])},mounted(){document.getElementById("op6").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op6").style.borderBottom="none"},methods:{setErrorImg(e){e.target.src=r},getInfoVehicles(e){this.$store.state.infoVehicles=e,this.$router.push("/infoVehicles")},showImageVehicle:function(e){this.$store.state.numImg=e.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGEVEHICLES",e)},getFilms(e){this.$store.state.infoFilm=e,console.log("show vehicles",e)},setInfoPilots(e){this.$store.state.infoCharacters=e},increasePage(){this.$store.state.pageVehicles++,this.$store.state.pageVehicles>4&&(this.$store.state.pageVehicles=4),this.$store.dispatch("GET_VEHICLES")},decreasePage(){this.$store.state.pageVehicles--,this.$store.state.pageVehicles<1&&(this.$store.state.pageVehicles=1),this.$store.dispatch("GET_VEHICLES")}}},c=l,n=t(1001),h=(0,n.Z)(c,i,a,!1,null,"44e7bf60",null),u=h.exports}}]);
//# sourceMappingURL=167.212d075e.js.map