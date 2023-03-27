(function(){"use strict";var e={3591:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"contenidor"},[t("div",{staticClass:"home ml-4"},[t("h4",[e._v("What do you want to do?")]),t("div",{staticClass:"mt-3"},[t("b-form-checkbox",{staticClass:"check",attrs:{value:500},on:{change:function(t){e.showPanel(),e.clicat("A web page"),e.updateCheck(),e.diaHoraPresu()}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("A web page (500 €)")]),t("panell",{attrs:{selected:e.selected,condition:e.condition},on:{resultat:e.totalSuma,pagines:e.numPagines,idiomes:e.numIdiomes}}),t("b-form-checkbox",{staticClass:"check",attrs:{value:300},on:{change:function(t){e.clicat("An SEO consultancy"),e.updateCheck(),e.diaHoraPresu()}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("An SEO consultancy (300 €)")]),t("b-form-checkbox",{staticClass:"check",attrs:{value:200},on:{change:function(t){e.clicat("A Google Ads campaign"),e.updateCheck(),e.diaHoraPresu()}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[e._v("A Google Ads campaign (200 €)")]),t("div",[t("br"),t("h5",[e._v("Price:"+e._s(e.resultat)+" €")])])],1),t("div",[t("hr",{staticStyle:{border:"solid 1px"}}),t("p",[e._v(" If you wish, you can save the estimate by entering the customer's name and a reference. ")]),t("b-form-input",{attrs:{type:"text",placeholder:"Budget reference, maximum 5 characters",maxlength:"5"},model:{value:e.referencia,callback:function(t){e.referencia=t},expression:"referencia"}}),t("b-form-input",{staticClass:"mt-3 mb-4",attrs:{type:"text",placeholder:"Customer number",maxlength:"25"},model:{value:e.client,callback:function(t){e.client=t},expression:"client"}}),t("button",{staticClass:"btn m-1",on:{click:function(t){return e.guardar()}}},[e._v("Save")]),t("button",{staticClass:"btn m-1",on:{click:e.Home}},[e._v("Home")])],1)]),t("div",{staticClass:"presupost"},[t("pressupostList",{attrs:{presupost:e.arrayPresupost}})],1)])},r=[],o=function(){var e=this,t=e._self._c;return t("div",[e.condition?t("div",{staticClass:"carta"},[e._v("Number of pages"),t("b-button",{staticStyle:{"background-color":"salmon","font-family":"Times New Roman","border-radius":"25%"},attrs:{variant:"outline-light"},on:{click:function(t){e.sumaTotal1++}}},[e._v("+")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sumaTotal1,expression:"sumaTotal1"}],staticClass:"caixa",attrs:{size:"1"},domProps:{value:e.sumaTotal1},on:{input:function(t){t.target.composing||(e.sumaTotal1=t.target.value)}}}),t("b-button",{staticClass:"boto",staticStyle:{"background-color":"salmon","font-family":"Times New Roman","border-radius":"25%"},attrs:{variant:"outline-light"},on:{click:function(t){e.sumaTotal1--}}},[e._v("-")]),t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center1",modifiers:{"modal-center1":!0}}],staticClass:"btn-modal",attrs:{rounded:""}},[e._v(" i")]),t("b-modal",{attrs:{id:"modal-center1",centered:"","hide-footer":"","hide-header":""}},[t("p",{staticClass:"my-4"},[e._v(" In this component you must indicate the number of pages you will have website ")])]),t("br"),t("br"),e._v(" Number of langs "),t("b-button",{staticStyle:{"background-color":"salmon","font-family":"Times New Roman","border-radius":"25%"},attrs:{variant:"outline-light"},on:{click:function(t){e.sumaTotal2++}}},[e._v("+")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sumaTotal2,expression:"sumaTotal2"}],staticClass:"caixa",attrs:{size:"1"},domProps:{value:e.sumaTotal2},on:{input:function(t){t.target.composing||(e.sumaTotal2=t.target.value)}}}),t("b-button",{staticStyle:{"background-color":"salmon","font-family":"Times New Roman","border-radius":"25%"},attrs:{variant:"outline-light"},on:{click:function(t){e.sumaTotal2--}}},[e._v("-")]),t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center2",modifiers:{"modal-center2":!0}}],staticClass:"btn-modal"},[e._v("i")]),t("b-modal",{attrs:{id:"modal-center2",centered:"","hide-footer":"","hide-header":""}},[t("p",{staticClass:"my-4"},[e._v(" In this component you must indicate the number of languages ​​you will have website ")])])],1):e._e()])},i=[],n={name:"Panell",props:["selected","condition"],data(){return{sumaTotal1:1,sumaTotal2:1,paginesIdiomes:0}},total:0,computed:{sumaTotal(){return this.sumaTotal1<1&&(this.sumaTotal1=1),this.sumaTotal2<1&&(this.sumaTotal2=1),0==this.condition?(this.sumaTotal1=0,this.sumaTotal2=0,this.paginesIdiomes=0):this.paginesIdiomes=this.sumaTotal1*this.sumaTotal2*30,this.paginesIdiomes},sumaPresupost(){this.total=0;for(let e of this.selected)this.total=this.total+e;return this.total+this.paginesIdiomes}},watch:{sumaPresupost:function(){this.$emit("resultat",this.sumaPresupost)},sumaTotal:function(){this.$emit("pagines",this.sumaTotal1),this.$emit("idiomes",this.sumaTotal2)}}},c=n,u=a(1001),l=(0,u.Z)(c,o,i,!1,null,"9c788c2c",null),d=l.exports,h=function(){var e=this,t=e._self._c;return t("div",[t("button",{staticClass:"btn m-1",on:{click:function(t){return e.ordenarAlfabet()}}},[e._v("A-Z")]),t("button",{staticClass:"btn m-1",on:{click:function(t){return e.ordenarPreu()}}},[e._v("€ +/-")]),t("button",{staticClass:"btn m-1",on:{click:function(t){return e.ordenarData()}}},[t("b-icon",{attrs:{icon:"arrow-repeat"}})],1),t("br"),t("button",{staticClass:"btn m-1",on:{click:function(t){return e.cercaRef()}}},[t("b-icon",{attrs:{icon:"search"}})],1),t("input",{directives:[{name:"model",rawName:"v-model",value:e.texteRef,expression:"texteRef"}],attrs:{id:"cercaReferencia",placeholder:"Enter a reference"},domProps:{value:e.texteRef},on:{input:function(t){t.target.composing||(e.texteRef=t.target.value)}}}),t("br"),t("button",{staticClass:"btn m-1",on:{click:function(t){return e.cercaNom()}}},[t("b-icon",{attrs:{icon:"search"}})],1),t("input",{directives:[{name:"model",rawName:"v-model",value:e.textNom,expression:"textNom"}],attrs:{type:"text",placeholder:"Enter a name"},domProps:{value:e.textNom},on:{input:function(t){t.target.composing||(e.textNom=t.target.value)}}}),t("busqueda",{attrs:{resultRef:e.resultRef,resultNom:e.resultNom}}),t("h4",[e._v("List of budgets:")]),t("hr",{staticStyle:{border:"solid 1px"}}),t("div",{staticClass:"caixa"},[t("div",{staticClass:"llistat"},e._l(e.presupost,(function(a){return t("div",{key:a.id},[t("h6",[e._v(" Budget Name:"),t("strong",[e._v(" "+e._s(a.referencia))])]),t("h6",[e._v(" Customer: "),t("strong",[e._v(e._s(a.client))])]),t("h6",[e._v(" services: "),t("strong",[e._v(" "+e._s(a.serveis+""))])]),t("h6",[e._v(" Number of pages:"),t("strong",[e._v(e._s(a.pagines))])]),t("h6",[e._v(" Languages:"),t("strong",[e._v(e._s(a.idiomes))])]),t("h6",[e._v(" Budget date: "),t("strong",[e._v(e._s(a.diaHora))])]),t("h6",[e._v(" Price: "),t("strong",[e._v(" "+e._s(a.preu))])]),t("h6",[e._v("Budget nº:"+e._s(a.contador))]),t("hr",{staticStyle:{border:"solid 1px"}})])})),0)])],1)},m=[],f=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"caixa"},[t("div",{staticClass:"llistat"},e._l(e.resultRef,(function(a){return t("div",{key:a.id},[t("h6",[t("strong",[e._v('With the reference "'+e._s(a.referencia)+'" you have this one budget:')])]),t("h6",[e._v(" Budget Name:"),t("strong",[e._v(" '"+e._s(a.referencia)+"''")])]),t("h6",[e._v(" Customer: "),t("strong",[e._v(e._s(a.client))])]),t("h6",[e._v(" Services: "),t("strong",[e._v(" "+e._s(a.serveis+""))])]),t("h6",[e._v(" Price: "),t("strong",[e._v(" "+e._s(a.preu))])]),t("h6",[e._v("Budget nº:"+e._s(a.contador))]),t("hr",{staticStyle:{border:"solid 1px"}})])})),0),e._l(e.resultNom,(function(a){return t("div",{key:a.id},[t("h6",[t("strong",[e._v('With the name "'+e._s(a.client)+'" you have this budget:')])]),t("h6",[t("strong",[e._v(" "+e._s(a.referencia))]),e._v("Budget Name: ")]),t("h6",[e._v(" Customer: "),t("strong",[e._v(e._s(a.client))])]),t("h6",[e._v(" Services: "),t("strong",[e._v(" "+e._s(a.serveis+""))])]),t("h6",[e._v(" Price: "),t("strong",[e._v(" "+e._s(a.preu))])]),t("h6",[e._v("Budget nº:"+e._s(a.contador))]),t("hr",{staticStyle:{border:"solid 1px"}})])}))],2)])},v=[],p={name:"busqueda",props:["resultRef","resultNom"],data(){return{condition:!1}}},b=p,g=(0,u.Z)(b,f,v,!1,null,"4d5cf9a4",null),_=g.exports,y={components:{Busqueda:_},name:"presupostList",props:["presupost"],data(){return{ordre:[],i:0,arrayReferencia:[],texteRef:[],textNom:[],resultRef:[],resultNom:[]}},methods:{ordenarAlfabet(){this.presupost.sort(((e,t)=>e.referencia.toLowerCase()>t.referencia.toLowerCase()?1:e.referencia.toLowerCase()<t.referencia.toLowerCase()?-1:0))},ordenarData(){this.presupost.sort(((e,t)=>e.diaHora>t.diaHora?1:e.diaHora<t.diaHora?-1:0))},ordenarPreu(){this.presupost.sort(((e,t)=>e.preu>t.preu?-1:e.preu<t.preu?1:0))},cercaRef(){this.resultRef=this.presupost.filter((e=>e.referencia==this.texteRef)),this.texteRef=""},cercaNom(){this.resultNom=this.presupost.filter((e=>e.client==this.textNom)),this.textNom=""}},watch:{}},C=y,x=(0,u.Z)(C,h,m,!1,null,"f50a1d70",null),k=x.exports,w={components:{Panell:d,pressupostList:k},name:"Home",data(){return{selected:[],arrayPresupost:[],arrayServei:[],arrayCheck:[],checkRepeat:[],client:"",referencia:"",textServei:"",diaHora:"",valorRef:"",resultat:0,counter:0,preu:0,pagines:0,idiomes:0,contador:1,condition:!1,trobat:!1,isCheck:!1,trobatRef:!1}},methods:{clicat(e){var t=0;while(t<=this.arrayServei.length&&!this.trobat)this.arrayServei[t]==e&&(this.trobat=!0),t++;return 1==this.trobat?this.arrayServei.splice(t-1,1):this.arrayServei.push(e),this.trobat=!1,this.arrayServei},totalSuma(e){this.resultat=e},numPagines(e){this.pagines=e},numIdiomes(e){this.idiomes=e},Home(){this.$router.push("/")},showPanel(){this.counter++,this.counter%2==0?this.condition=!1:this.condition=!0},diaHoraPresu(){return this.diaHora=(new Date).toUTCString(),this.diaHora},guardar(){var e={diaHora:this.diaHora,referencia:this.referencia,client:this.client,preu:this.resultat,serveis:this.arrayServei,pagines:this.pagines,idiomes:this.idiomes,contador:this.contador};for(this.valorRef of(this.checkRepeat=this.arrayPresupost.map((e=>e.referencia)),console.log(this.checkRepeat),this.checkRepeat))this.valorRef==this.referencia&&(this.trobatRef=!0);return 0==this.arrayServei&&""==this.client&&""==this.referencia?alert("An empty budget cannot be saved. Choose a service and fill in the reference and name fields"):0==this.arrayServei.length?alert("To save a quote you must first choose at least one service"):""==this.client&&""==this.referencia?alert("The fields 'reference' and 'name' cannot be empty"):""==this.referencia?alert("Enter a reference"):""==this.client?alert("Enter your name"):1==this.trobatRef?(alert("There is already a budget with this reference name, choose another one"),this.referencia="",this.trobatRef=!1):(this.arrayPresupost.push(e),this.contador++,this.client="",this.referencia="",this.condition=!1,this.resetCheck()),this.arrayPresupost},updateCheck(){this.arrayServei.length>=1?this.isCheck=!0:this.isCheck=!1},resetCheck(){1==this.isCheck&&(document.getElementsByClassName("check").checked=!1,this.arrayServei=[],this.selected=[],this.counter=0)}}},T=w,S=(0,u.Z)(T,s,r,!1,null,"37db1e88",null),P=S.exports},5769:function(e,t,a){var s=a(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}}),t("router-link",{attrs:{to:"/Home"}})],1),t("router-view")],1)},o=[],i=a(1001),n={},c=(0,i.Z)(n,r,o,!1,null,null,null),u=c.exports,l=a(2631),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"careta"},[t("div",{staticClass:"bg-primary"}),e._m(0),t("button",{staticClass:"btn",on:{click:e.Calculadora}},[e._v("Get quote")])])},h=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"container px-5 px-lg-5 mt-5"},[t("div",{staticClass:"card px-4 mb-3 shadow"},[t("div",{staticClass:"card-body px-3 p-4"},[t("div",{staticClass:"text-center"},[t("h3",[e._v("What do you want to do?")]),t("h4",{staticClass:"fw-bolder"},[e._v("A website, an SEO consultancy or a Google Ads campaign? ")]),t("h5",[e._v('By "getting a quote" you can select the options that suit your needs"')]),t("h4")])])])])}],m=a(3591),f={components:{Home:m["default"]},name:"AboutView",methods:{Calculadora(){this.$router.push("/Home")}}},v=f,p=(0,i.Z)(v,d,h,!1,null,"74050cc8",null),b=p.exports;s["default"].use(l.Z);const g=[{path:"/",name:"AboutView",component:b},{path:"/Home",name:"Home",component:()=>Promise.resolve().then(a.bind(a,3591))}],_=new l.Z({mode:"hash",base:"/",routes:g});var y=_,C=a(5996),x=a(9425);a(7024);s["default"].config.productionTip=!1,s["default"].use(C.XG7),s["default"].use(x.A7),new s["default"]({router:y,render:e=>e(u)}).$mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,o){if(!s){var i=1/0;for(l=0;l<e.length;l++){s=e[l][0],r=e[l][1],o=e[l][2];for(var n=!0,c=0;c<s.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[c])}))?s.splice(c--,1):(n=!1,o<i&&(i=o));if(n){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[s,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,o,i=s[0],n=s[1],c=s[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(c)var l=c(a)}for(t&&t(s);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},s=self["webpackChunksprint_7"]=self["webpackChunksprint_7"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(5769)}));s=a.O(s)})();
//# sourceMappingURL=app.9d5a8f26.js.map