(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[968],{8968:function(t,s,i){"use strict";i.r(s),i.d(s,{default:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"border"},[s("div",[s("div",{staticClass:"columns is-multiline is-centered is-mobile"},t._l(t.getFilms.results,(function(e,r){return s("div",{key:r},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:i(477)(`./${e.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("a",{staticClass:"nav-link",on:{click:function(s){t.setInfoFilm(e),t.showImageFilm(e)}}},[s("p",{staticClass:"title is-size-5",staticStyle:{color:"gray"}},[t._v(t._s(e.title))])])])])])})),0)])])},r=[],n=(i(7658),i(3822)),o={name:"ShowFilms",computed:{...(0,n.Se)(["getFilms","getImageFilm"])},methods:{setInfoFilm(t){this.$store.state.infoFilm=t,this.$router.push("/infoFilms")},showImageFilm:function(t){return this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGEFILM")}}},a=o,c=i(1001),u=(0,c.Z)(a,e,r,!1,null,"ff8fe8ae",null),l=u.exports},477:function(t,s,i){var e={"./1.jpg":8659,"./2.jpg":1525,"./3.jpg":4939,"./4.jpg":3299,"./5.jpg":3626,"./6.jpg":1511};function r(t){var s=n(t);return i(s)}function n(t){if(!i.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}r.keys=function(){return Object.keys(e)},r.resolve=n,t.exports=r,r.id=477},8659:function(t,s,i){"use strict";t.exports=i.p+"img/1.fe041fea.jpg"},1525:function(t,s,i){"use strict";t.exports=i.p+"img/2.6c045d6a.jpg"},4939:function(t,s,i){"use strict";t.exports=i.p+"img/3.15711afb.jpg"},3299:function(t,s,i){"use strict";t.exports=i.p+"img/4.a1fc1590.jpg"},3626:function(t,s,i){"use strict";t.exports=i.p+"img/5.aef3b5d9.jpg"},1511:function(t,s,i){"use strict";t.exports=i.p+"img/6.6367d89d.jpg"}}]);
//# sourceMappingURL=968.2383fb44.js.map