(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[322],{1322:function(t,s,e){"use strict";e.r(s),e.d(s,{default:function(){return u}});var p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"border p-5"},[s("div",[s("div",{staticClass:"columns is-multiline is-centered is-mobile"},t._l(t.getPeople.results,(function(p,i){return s("div",{key:i},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:e(5681)(`./${p.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("a",{staticClass:"nav-link",on:{click:function(s){t.setInfoFilms(p),t.getFilms(p),t.setInfoShip(p),t.getInfoVehicles(p)}}},[s("p",{staticClass:"title is-size-5",staticStyle:{color:"gray"}},[t._v(t._s(p.name))])])])])])})),0)]),s("section",{staticClass:"columns is-centered is-mobile is-multiline"},[s("button",{staticClass:"button is-dark active m-3",on:{click:function(s){return t.decreasePage()}}},[t._v("-")]),s("h1",{staticClass:"m-3 has-text-gray"},[t._v("Page: "+t._s(this.$store.state.pagePeople)+" of 9")]),s("button",{staticClass:"button is-dark m-3",on:{click:function(s){return t.increasePage()}}},[t._v("+")])])])},i=[],g=(e(7658),e(629)),c={name:"ShowPeople",computed:{...(0,g.Se)(["getPeople"])},mounted(){document.getElementById("op2").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op2").style.borderBottom="none"},methods:{setInfoFilms(t){this.$store.state.infoCharacters=t,this.$router.push("/infoCharacters")},setInfoShip(t){this.$store.state.infoTechShip=t},getFilms(t){this.$store.state.infoFilm=t},getInfoVehicles(t){this.$store.state.infoVehicles=t},increasePage(){this.$store.state.pagePeople++,this.$store.state.pagePeople>9&&(this.$store.state.pagePeople=9),this.$store.dispatch("GET_PEOPLE")},decreasePage(){this.$store.state.pagePeople--,this.$store.state.pagePeople<1&&(this.$store.state.pagePeople=1),this.$store.dispatch("GET_PEOPLE")}}},o=c,r=e(1001),n=(0,r.Z)(o,p,i,!1,null,"1b2e9adc",null),u=n.exports},5681:function(t,s,e){var p={"./1.jpg":7629,"./10.jpg":9657,"./11.jpg":9941,"./12.jpg":3728,"./13.jpg":6499,"./14.jpg":4461,"./15.jpg":3671,"./16.jpg":3778,"./18.jpg":5106,"./19.jpg":8118,"./2.jpg":77,"./20.jpg":3986,"./21.jpg":3502,"./22.jpg":9960,"./23.jpg":5562,"./24.jpg":5066,"./25.jpg":345,"./26.jpg":3989,"./27.jpg":2074,"./28.jpg":4853,"./29.jpg":9044,"./3.jpg":599,"./30.jpg":6313,"./31.jpg":4547,"./32.jpg":1701,"./33.jpg":1500,"./34.jpg":9652,"./35.jpg":2747,"./36.jpg":8582,"./37.jpg":6387,"./38.jpg":1373,"./39.jpg":4255,"./4.jpg":3859,"./40.jpg":7088,"./41.jpg":2743,"./42.jpg":7735,"./43.jpg":4497,"./44.jpg":3117,"./45.jpg":1613,"./46.jpg":6925,"./47.jpg":344,"./48.jpg":6611,"./49.jpg":3713,"./5.jpg":5191,"./50.jpg":3421,"./51.jpg":3057,"./52.jpg":9316,"./53.jpg":2886,"./54.jpg":6126,"./55.jpg":9868,"./56.jpg":1583,"./57.jpg":6164,"./58.jpg":6243,"./59.jpg":2321,"./6.jpg":8969,"./60.jpg":9682,"./61.jpg":491,"./62.jpg":1933,"./63.jpg":7808,"./64.jpg":9005,"./65.jpg":7785,"./66.jpg":1201,"./67.jpg":6553,"./68.jpg":3901,"./69.jpg":6533,"./7.jpg":5772,"./70.jpg":5798,"./71.jpg":7734,"./72.jpg":1739,"./73.jpg":6801,"./74.jpg":4400,"./75.jpg":8262,"./76.jpg":3547,"./77.jpg":8057,"./78.jpg":2429,"./79.jpg":6556,"./8.jpg":346,"./80.jpg":9699,"./81.jpg":2248,"./82.jpg":458,"./83.jpg":9513,"./9.jpg":1983};function i(t){var s=g(t);return e(s)}function g(t){if(!e.o(p,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return p[t]}i.keys=function(){return Object.keys(p)},i.resolve=g,t.exports=i,i.id=5681},7629:function(t,s,e){"use strict";t.exports=e.p+"img/1.8d541777.jpg"},9657:function(t,s,e){"use strict";t.exports=e.p+"img/10.ddfebc5a.jpg"},9941:function(t,s,e){"use strict";t.exports=e.p+"img/11.3bc021cc.jpg"},3728:function(t,s,e){"use strict";t.exports=e.p+"img/12.b9ec9929.jpg"},6499:function(t,s,e){"use strict";t.exports=e.p+"img/13.d072e112.jpg"},4461:function(t,s,e){"use strict";t.exports=e.p+"img/14.38b3ed5c.jpg"},3671:function(t,s,e){"use strict";t.exports=e.p+"img/15.9416a211.jpg"},3778:function(t,s,e){"use strict";t.exports=e.p+"img/16.82bdee22.jpg"},5106:function(t,s,e){"use strict";t.exports=e.p+"img/18.54242866.jpg"},8118:function(t,s,e){"use strict";t.exports=e.p+"img/19.11560d2f.jpg"},77:function(t,s,e){"use strict";t.exports=e.p+"img/2.989369d3.jpg"},3986:function(t,s,e){"use strict";t.exports=e.p+"img/20.288dcdbc.jpg"},3502:function(t,s,e){"use strict";t.exports=e.p+"img/21.5d27b13e.jpg"},9960:function(t,s,e){"use strict";t.exports=e.p+"img/22.148d2677.jpg"},5562:function(t,s,e){"use strict";t.exports=e.p+"img/23.2e24f619.jpg"},5066:function(t,s,e){"use strict";t.exports=e.p+"img/24.3bb8d146.jpg"},345:function(t,s,e){"use strict";t.exports=e.p+"img/25.c0d9585f.jpg"},3989:function(t,s,e){"use strict";t.exports=e.p+"img/26.7149ae86.jpg"},2074:function(t,s,e){"use strict";t.exports=e.p+"img/27.515d978a.jpg"},4853:function(t,s,e){"use strict";t.exports=e.p+"img/28.224ceba0.jpg"},9044:function(t,s,e){"use strict";t.exports=e.p+"img/29.102b7526.jpg"},599:function(t,s,e){"use strict";t.exports=e.p+"img/3.2c8b9495.jpg"},6313:function(t,s,e){"use strict";t.exports=e.p+"img/30.11ef361d.jpg"},4547:function(t,s,e){"use strict";t.exports=e.p+"img/31.b7e174ad.jpg"},1701:function(t,s,e){"use strict";t.exports=e.p+"img/32.a678437c.jpg"},1500:function(t,s,e){"use strict";t.exports=e.p+"img/33.e20af3e8.jpg"},9652:function(t,s,e){"use strict";t.exports=e.p+"img/34.5f1d8b1a.jpg"},2747:function(t,s,e){"use strict";t.exports=e.p+"img/35.d90438df.jpg"},8582:function(t,s,e){"use strict";t.exports=e.p+"img/36.c0450ae3.jpg"},6387:function(t,s,e){"use strict";t.exports=e.p+"img/37.242e31d7.jpg"},1373:function(t,s,e){"use strict";t.exports=e.p+"img/38.2c0bca56.jpg"},4255:function(t,s,e){"use strict";t.exports=e.p+"img/39.d8288056.jpg"},3859:function(t,s,e){"use strict";t.exports=e.p+"img/4.d6eb51d9.jpg"},7088:function(t,s,e){"use strict";t.exports=e.p+"img/40.e4b5437e.jpg"},2743:function(t,s,e){"use strict";t.exports=e.p+"img/41.aeefc1bd.jpg"},7735:function(t,s,e){"use strict";t.exports=e.p+"img/42.8ac83739.jpg"},4497:function(t,s,e){"use strict";t.exports=e.p+"img/43.2425ccf4.jpg"},3117:function(t,s,e){"use strict";t.exports=e.p+"img/44.57ed054b.jpg"},1613:function(t,s,e){"use strict";t.exports=e.p+"img/45.8a3b6d1b.jpg"},6925:function(t,s,e){"use strict";t.exports=e.p+"img/46.8f9cb00a.jpg"},344:function(t,s,e){"use strict";t.exports=e.p+"img/47.825a1682.jpg"},6611:function(t,s,e){"use strict";t.exports=e.p+"img/48.60ef2cff.jpg"},3713:function(t,s,e){"use strict";t.exports=e.p+"img/49.144765a2.jpg"},5191:function(t,s,e){"use strict";t.exports=e.p+"img/5.3234ad3e.jpg"},3421:function(t,s,e){"use strict";t.exports=e.p+"img/50.bcf4460c.jpg"},3057:function(t,s,e){"use strict";t.exports=e.p+"img/51.6f40c37d.jpg"},9316:function(t,s,e){"use strict";t.exports=e.p+"img/52.770e5373.jpg"},2886:function(t,s,e){"use strict";t.exports=e.p+"img/53.7fa18fa5.jpg"},6126:function(t,s,e){"use strict";t.exports=e.p+"img/54.e24c44a0.jpg"},9868:function(t,s,e){"use strict";t.exports=e.p+"img/55.1804ed4c.jpg"},1583:function(t,s,e){"use strict";t.exports=e.p+"img/56.165ec60f.jpg"},6164:function(t,s,e){"use strict";t.exports=e.p+"img/57.891de61a.jpg"},6243:function(t,s,e){"use strict";t.exports=e.p+"img/58.f1f8ee06.jpg"},2321:function(t,s,e){"use strict";t.exports=e.p+"img/59.d9655fea.jpg"},8969:function(t,s,e){"use strict";t.exports=e.p+"img/6.9f9d639d.jpg"},9682:function(t,s,e){"use strict";t.exports=e.p+"img/60.149e1950.jpg"},491:function(t,s,e){"use strict";t.exports=e.p+"img/61.44400be2.jpg"},1933:function(t,s,e){"use strict";t.exports=e.p+"img/62.26c3de4f.jpg"},7808:function(t,s,e){"use strict";t.exports=e.p+"img/63.d8574ec6.jpg"},9005:function(t,s,e){"use strict";t.exports=e.p+"img/64.9bff25f6.jpg"},7785:function(t,s,e){"use strict";t.exports=e.p+"img/65.d87ad4a9.jpg"},1201:function(t,s,e){"use strict";t.exports=e.p+"img/66.f1ac28d9.jpg"},6553:function(t,s,e){"use strict";t.exports=e.p+"img/67.bd56dd0a.jpg"},3901:function(t,s,e){"use strict";t.exports=e.p+"img/68.483b2235.jpg"},6533:function(t,s,e){"use strict";t.exports=e.p+"img/69.7e0bfe07.jpg"},5772:function(t,s,e){"use strict";t.exports=e.p+"img/7.f16ee59b.jpg"},5798:function(t,s,e){"use strict";t.exports=e.p+"img/70.17f4fe7c.jpg"},7734:function(t,s,e){"use strict";t.exports=e.p+"img/71.6b473e6a.jpg"},1739:function(t,s,e){"use strict";t.exports=e.p+"img/72.ab78fb4f.jpg"},6801:function(t,s,e){"use strict";t.exports=e.p+"img/73.846b8c6a.jpg"},4400:function(t,s,e){"use strict";t.exports=e.p+"img/74.31cda59d.jpg"},8262:function(t,s,e){"use strict";t.exports=e.p+"img/75.f73b3403.jpg"},3547:function(t,s,e){"use strict";t.exports=e.p+"img/76.505eaeae.jpg"},8057:function(t,s,e){"use strict";t.exports=e.p+"img/77.132d5de6.jpg"},2429:function(t,s,e){"use strict";t.exports=e.p+"img/78.db1dfa1e.jpg"},6556:function(t,s,e){"use strict";t.exports=e.p+"img/79.4244ac6b.jpg"},346:function(t,s,e){"use strict";t.exports=e.p+"img/8.99f2be3d.jpg"},9699:function(t,s,e){"use strict";t.exports=e.p+"img/80.d6878802.jpg"},2248:function(t,s,e){"use strict";t.exports=e.p+"img/81.c94b2f3d.jpg"},458:function(t,s,e){"use strict";t.exports=e.p+"img/82.195f2e7b.jpg"},9513:function(t,s,e){"use strict";t.exports=e.p+"img/83.82da4c73.jpg"},1983:function(t,s,e){"use strict";t.exports=e.p+"img/9.fc4e83ac.jpg"}}]);
//# sourceMappingURL=322.9bd67b27.js.map