(self["webpackChunkstarwars"]=self["webpackChunkstarwars"]||[]).push([[387],{9786:function(t,s,i){"use strict";i.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("p",{staticClass:"titol is-size-4 is-bold"},[t._v("Related Films")]),s("p",{staticClass:"is-size-4 m-5 has-text-gray-lighter"},[t._v(" "+t._s(t.msg))]),s("div",{staticClass:"columns is-multiline is-mobile is-centered"},t._l(t.orderFilms,(function(e,p){return s("div",{key:p},[s("div",{staticClass:"carta"},[s("a",{staticClass:"nav-link",on:{click:function(s){t.setInfo(e),t.showImageFilm(e)}}},[s("figure",{staticClass:"image"},[s("img",{staticClass:"imatge",attrs:{src:i(477)(`./${e.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("div",[s("p",{staticClass:"title has-text-grey is-size-6"},[t._v(" "+t._s(e.title))])])])])])})),0)])},p=[],g=(i(7658),i(629)),n={name:"relatedFilms",computed:{...(0,g.Se)(["getInfoFilms"]),orderFilms(){let t=0,s=0,i="";if(0==this.films.length)console.log("Loading...");else while(t<this.films.length){s=t+1;while(s<this.films.length)this.films[t].episode_id>this.films[s].episode_id&&(i=this.films[t],this.films[t]=this.films[s],this.films[s]=i),s++;t++}return this.films}},data(){return{films:[],msg:""}},mounted(){this.getFilms()},methods:{setInfo(t){this.$store.state.infoFilm=t,this.$router.push("/infoFilms")},showImageFilm:function(t){return this.$store.state.numImg=t.url.split(/\D/g).join(""),this.$store.dispatch("GET_IMAGEFILM")},async getFilms(){if(this.getInfoFilms.films.length>=1)for(let t=0;t<this.getInfoFilms.films.length;t++){const s=fetch(this.getInfoFilms.films[t]),i=await(await s).json();this.films.push(i)}else this.msg="Films not available",this.$store.state.condition=!1}},warch:{orderFilms(){this.fims}}},o=n,c=i(1001),r=(0,c.Z)(o,e,p,!1,null,null,null),u=r.exports},5387:function(t,s,i){"use strict";i.r(s),i.d(s,{default:function(){return x}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"caixa"},[s("div",{staticClass:"container p-5"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half mt-3"},[s("img",{attrs:{src:`https://starwars-visualguide.com/assets/img/species/${t.getInfoSpecies.url.split(/\D/g).join("")}.jpg`,alt:"image film"}})]),s("div",{staticClass:"column has-text-left is-half mt-3"},[s("div",{staticClass:"box"},[s("p",{staticClass:"is-size-3"},[s("strong",[t._v(" "+t._s(t.getInfoSpecies.name))])]),s("p",[s("strong",[t._v("Classification: ")]),t._v(" "+t._s(t.getInfoSpecies.classification))]),s("p",[s("strong",[t._v("Designation: ")]),t._v(" "+t._s(t.getInfoSpecies.designation))]),s("p",[s("strong",[t._v("Averge height: ")]),t._v(" "+t._s(t.getInfoSpecies.average_height)+" cm. ")]),s("p",[s("strong",[t._v("Average lifespan: ")]),t._v(" "+t._s(t.getInfoSpecies.average_lifespan)+" ")]),s("p",[s("strong",[t._v("Hair color: ")]),t._v(" "+t._s(t.getInfoSpecies.hair_colors))]),s("p",[s("strong",[t._v("Skin color: ")]),t._v(" "+t._s(t.getInfoSpecies.skin_colors))]),s("p",[s("strong",[t._v("Eye color: ")]),t._v(" "+t._s(t.getInfoSpecies.eye_colors))]),s("p",[s("strong",[t._v("Languaje: ")]),t._v(" "+t._s(t.getInfoSpecies.language))]),s("br"),s("relatedFilms"),s("realtedPeopleVue")],1)])])])])},p=[],g=i(629),n=i(9786),o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("p",{staticClass:"titol is-size-5 is-bold"},[t._v("Related Characters")]),s("p",{staticClass:"is-size-4 m-5 has-text-gray-lighter"},[t._v(" "+t._s(t.msg))]),s("div",{staticClass:"columns is-multiline is-mobile is-centered"},t._l(t.personatges,(function(e,p){return s("div",{key:p},[s("div",{staticClass:"carta"},[s("a",{staticClass:"nav-link",on:{click:function(s){return t.setInfo(e)}}},[s("figure",{staticClass:"image"},[s("img",{staticClass:"imatge",attrs:{src:i(5681)(`./${e.url.split(/\D/g).join("")}.jpg`),alt:"image film"}})]),s("div",[s("p",{staticClass:"title has-text-grey is-size-6"},[t._v(" "+t._s(e.name))])])])])])})),0)])},c=[],r=(i(7658),{name:"relatedPeople",data(){return{personatges:[],numImatge:"",msg:""}},computed:{...(0,g.Se)(["getInfoFilms"])},created(){this.getcharacters()},methods:{setInfo(t){this.$store.state.infoFilm=t,this.$store.state.infoCharacters=t,this.$router.push("/infoCharacters"),this.$store.dispatch("GET_INFOCHARACTERS",t)},async getcharacters(){0==this.getInfoFilms.people.length&&(this.msg="People not available");for(let t=0;t<this.getInfoFilms.people.length;t++){const s=fetch(this.getInfoFilms.people[t]),i=await(await s).json();this.personatges.push(i)}}}}),u=r,a=i(1001),f=(0,a.Z)(u,o,c,!1,null,null,null),l=f.exports,m={name:"infoSpecies",components:{relatedFilms:n.Z,realtedPeopleVue:l},computed:{...(0,g.Se)(["getInfoSpecies"])},mounted(){document.getElementById("op4").style.borderBottom="solid rgb(191, 147, 0) 3px"},destroyed(){document.getElementById("op4").style.borderBottom="none"},methods:{retroceder(){window.history.back()}}},j=m,d=(0,a.Z)(j,e,p,!1,null,null,null),x=d.exports},5681:function(t,s,i){var e={"./1.jpg":7629,"./10.jpg":9657,"./11.jpg":9941,"./12.jpg":3728,"./13.jpg":6499,"./14.jpg":4461,"./15.jpg":3671,"./16.jpg":3778,"./18.jpg":5106,"./19.jpg":8118,"./2.jpg":77,"./20.jpg":3986,"./21.jpg":3502,"./22.jpg":9960,"./23.jpg":5562,"./24.jpg":5066,"./25.jpg":345,"./26.jpg":3989,"./27.jpg":2074,"./28.jpg":4853,"./29.jpg":9044,"./3.jpg":599,"./30.jpg":6313,"./31.jpg":4547,"./32.jpg":1701,"./33.jpg":1500,"./34.jpg":9652,"./35.jpg":2747,"./36.jpg":8582,"./37.jpg":6387,"./38.jpg":1373,"./39.jpg":4255,"./4.jpg":3859,"./40.jpg":7088,"./41.jpg":2743,"./42.jpg":7735,"./43.jpg":4497,"./44.jpg":3117,"./45.jpg":1613,"./46.jpg":6925,"./47.jpg":344,"./48.jpg":6611,"./49.jpg":3713,"./5.jpg":5191,"./50.jpg":3421,"./51.jpg":3057,"./52.jpg":9316,"./53.jpg":2886,"./54.jpg":6126,"./55.jpg":9868,"./56.jpg":1583,"./57.jpg":6164,"./58.jpg":6243,"./59.jpg":2321,"./6.jpg":8969,"./60.jpg":9682,"./61.jpg":491,"./62.jpg":1933,"./63.jpg":7808,"./64.jpg":9005,"./65.jpg":7785,"./66.jpg":1201,"./67.jpg":6553,"./68.jpg":3901,"./69.jpg":6533,"./7.jpg":5772,"./70.jpg":5798,"./71.jpg":7734,"./72.jpg":1739,"./73.jpg":6801,"./74.jpg":4400,"./75.jpg":8262,"./76.jpg":3547,"./77.jpg":8057,"./78.jpg":2429,"./79.jpg":6556,"./8.jpg":346,"./80.jpg":9699,"./81.jpg":2248,"./82.jpg":458,"./83.jpg":9513,"./9.jpg":1983};function p(t){var s=g(t);return i(s)}function g(t){if(!i.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}p.keys=function(){return Object.keys(e)},p.resolve=g,t.exports=p,p.id=5681},7629:function(t,s,i){"use strict";t.exports=i.p+"img/1.8d541777.jpg"},9657:function(t,s,i){"use strict";t.exports=i.p+"img/10.ddfebc5a.jpg"},9941:function(t,s,i){"use strict";t.exports=i.p+"img/11.3bc021cc.jpg"},3728:function(t,s,i){"use strict";t.exports=i.p+"img/12.b9ec9929.jpg"},6499:function(t,s,i){"use strict";t.exports=i.p+"img/13.d072e112.jpg"},4461:function(t,s,i){"use strict";t.exports=i.p+"img/14.38b3ed5c.jpg"},3671:function(t,s,i){"use strict";t.exports=i.p+"img/15.9416a211.jpg"},3778:function(t,s,i){"use strict";t.exports=i.p+"img/16.82bdee22.jpg"},5106:function(t,s,i){"use strict";t.exports=i.p+"img/18.54242866.jpg"},8118:function(t,s,i){"use strict";t.exports=i.p+"img/19.11560d2f.jpg"},77:function(t,s,i){"use strict";t.exports=i.p+"img/2.989369d3.jpg"},3986:function(t,s,i){"use strict";t.exports=i.p+"img/20.288dcdbc.jpg"},3502:function(t,s,i){"use strict";t.exports=i.p+"img/21.5d27b13e.jpg"},9960:function(t,s,i){"use strict";t.exports=i.p+"img/22.148d2677.jpg"},5562:function(t,s,i){"use strict";t.exports=i.p+"img/23.2e24f619.jpg"},5066:function(t,s,i){"use strict";t.exports=i.p+"img/24.3bb8d146.jpg"},345:function(t,s,i){"use strict";t.exports=i.p+"img/25.c0d9585f.jpg"},3989:function(t,s,i){"use strict";t.exports=i.p+"img/26.7149ae86.jpg"},2074:function(t,s,i){"use strict";t.exports=i.p+"img/27.515d978a.jpg"},4853:function(t,s,i){"use strict";t.exports=i.p+"img/28.224ceba0.jpg"},9044:function(t,s,i){"use strict";t.exports=i.p+"img/29.102b7526.jpg"},599:function(t,s,i){"use strict";t.exports=i.p+"img/3.2c8b9495.jpg"},6313:function(t,s,i){"use strict";t.exports=i.p+"img/30.11ef361d.jpg"},4547:function(t,s,i){"use strict";t.exports=i.p+"img/31.b7e174ad.jpg"},1701:function(t,s,i){"use strict";t.exports=i.p+"img/32.a678437c.jpg"},1500:function(t,s,i){"use strict";t.exports=i.p+"img/33.e20af3e8.jpg"},9652:function(t,s,i){"use strict";t.exports=i.p+"img/34.5f1d8b1a.jpg"},2747:function(t,s,i){"use strict";t.exports=i.p+"img/35.d90438df.jpg"},8582:function(t,s,i){"use strict";t.exports=i.p+"img/36.c0450ae3.jpg"},6387:function(t,s,i){"use strict";t.exports=i.p+"img/37.242e31d7.jpg"},1373:function(t,s,i){"use strict";t.exports=i.p+"img/38.2c0bca56.jpg"},4255:function(t,s,i){"use strict";t.exports=i.p+"img/39.d8288056.jpg"},3859:function(t,s,i){"use strict";t.exports=i.p+"img/4.d6eb51d9.jpg"},7088:function(t,s,i){"use strict";t.exports=i.p+"img/40.e4b5437e.jpg"},2743:function(t,s,i){"use strict";t.exports=i.p+"img/41.aeefc1bd.jpg"},7735:function(t,s,i){"use strict";t.exports=i.p+"img/42.8ac83739.jpg"},4497:function(t,s,i){"use strict";t.exports=i.p+"img/43.2425ccf4.jpg"},3117:function(t,s,i){"use strict";t.exports=i.p+"img/44.57ed054b.jpg"},1613:function(t,s,i){"use strict";t.exports=i.p+"img/45.8a3b6d1b.jpg"},6925:function(t,s,i){"use strict";t.exports=i.p+"img/46.8f9cb00a.jpg"},344:function(t,s,i){"use strict";t.exports=i.p+"img/47.825a1682.jpg"},6611:function(t,s,i){"use strict";t.exports=i.p+"img/48.60ef2cff.jpg"},3713:function(t,s,i){"use strict";t.exports=i.p+"img/49.144765a2.jpg"},5191:function(t,s,i){"use strict";t.exports=i.p+"img/5.3234ad3e.jpg"},3421:function(t,s,i){"use strict";t.exports=i.p+"img/50.bcf4460c.jpg"},3057:function(t,s,i){"use strict";t.exports=i.p+"img/51.6f40c37d.jpg"},9316:function(t,s,i){"use strict";t.exports=i.p+"img/52.770e5373.jpg"},2886:function(t,s,i){"use strict";t.exports=i.p+"img/53.7fa18fa5.jpg"},6126:function(t,s,i){"use strict";t.exports=i.p+"img/54.e24c44a0.jpg"},9868:function(t,s,i){"use strict";t.exports=i.p+"img/55.1804ed4c.jpg"},1583:function(t,s,i){"use strict";t.exports=i.p+"img/56.165ec60f.jpg"},6164:function(t,s,i){"use strict";t.exports=i.p+"img/57.891de61a.jpg"},6243:function(t,s,i){"use strict";t.exports=i.p+"img/58.f1f8ee06.jpg"},2321:function(t,s,i){"use strict";t.exports=i.p+"img/59.d9655fea.jpg"},8969:function(t,s,i){"use strict";t.exports=i.p+"img/6.9f9d639d.jpg"},9682:function(t,s,i){"use strict";t.exports=i.p+"img/60.149e1950.jpg"},491:function(t,s,i){"use strict";t.exports=i.p+"img/61.44400be2.jpg"},1933:function(t,s,i){"use strict";t.exports=i.p+"img/62.26c3de4f.jpg"},7808:function(t,s,i){"use strict";t.exports=i.p+"img/63.d8574ec6.jpg"},9005:function(t,s,i){"use strict";t.exports=i.p+"img/64.9bff25f6.jpg"},7785:function(t,s,i){"use strict";t.exports=i.p+"img/65.d87ad4a9.jpg"},1201:function(t,s,i){"use strict";t.exports=i.p+"img/66.f1ac28d9.jpg"},6553:function(t,s,i){"use strict";t.exports=i.p+"img/67.bd56dd0a.jpg"},3901:function(t,s,i){"use strict";t.exports=i.p+"img/68.483b2235.jpg"},6533:function(t,s,i){"use strict";t.exports=i.p+"img/69.7e0bfe07.jpg"},5772:function(t,s,i){"use strict";t.exports=i.p+"img/7.f16ee59b.jpg"},5798:function(t,s,i){"use strict";t.exports=i.p+"img/70.17f4fe7c.jpg"},7734:function(t,s,i){"use strict";t.exports=i.p+"img/71.6b473e6a.jpg"},1739:function(t,s,i){"use strict";t.exports=i.p+"img/72.ab78fb4f.jpg"},6801:function(t,s,i){"use strict";t.exports=i.p+"img/73.846b8c6a.jpg"},4400:function(t,s,i){"use strict";t.exports=i.p+"img/74.31cda59d.jpg"},8262:function(t,s,i){"use strict";t.exports=i.p+"img/75.f73b3403.jpg"},3547:function(t,s,i){"use strict";t.exports=i.p+"img/76.505eaeae.jpg"},8057:function(t,s,i){"use strict";t.exports=i.p+"img/77.132d5de6.jpg"},2429:function(t,s,i){"use strict";t.exports=i.p+"img/78.db1dfa1e.jpg"},6556:function(t,s,i){"use strict";t.exports=i.p+"img/79.4244ac6b.jpg"},346:function(t,s,i){"use strict";t.exports=i.p+"img/8.99f2be3d.jpg"},9699:function(t,s,i){"use strict";t.exports=i.p+"img/80.d6878802.jpg"},2248:function(t,s,i){"use strict";t.exports=i.p+"img/81.c94b2f3d.jpg"},458:function(t,s,i){"use strict";t.exports=i.p+"img/82.195f2e7b.jpg"},9513:function(t,s,i){"use strict";t.exports=i.p+"img/83.82da4c73.jpg"},1983:function(t,s,i){"use strict";t.exports=i.p+"img/9.fc4e83ac.jpg"}}]);
//# sourceMappingURL=387.d6ef98cb.js.map