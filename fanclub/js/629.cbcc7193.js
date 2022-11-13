"use strict";(self["webpackChunksprint_9"]=self["webpackChunksprint_9"]||[]).push([[629],{3629:function(t,s,i){i.r(s),i.d(s,{default:function(){return w}});var a=function(){var t=this,s=t._self._c;return s("div",[s("showStoreProducts")],1)},o=[],c=function(){var t=this,s=t._self._c;return s("div",[s("section",[s("specialOfert")],1),s("div",{staticClass:"columns"},[t.condition2?s("div",{staticClass:"box"},[s("div",{staticClass:"hero"},[s("h3",{staticClass:"is-size-5 is-underlined"},[t._v("Cart List:")]),s("table",{staticClass:"table"},t._l(t.cartFinal,(function(i,a){return s("tbody",{key:a},[s("th",{staticClass:"is-italic"},[t._v(t._s(i.product)),s("strong")]),s("td",[t._v("$"+t._s(i.price))]),s("td",[s("button",{staticClass:"button is-small is-rounded is-light",on:{click:function(s){return t.resta(i)}}},[t._v("-")])]),s("td",[t._v(t._s(i.amount))]),s("td",[s("button",{staticClass:"button is-small is-rounded is-light",on:{click:function(s){return t.suma(i)}}},[t._v("+")])]),s("td",[t._v("$"+t._s(i.total))]),s("td",[s("button",{staticClass:"button is-small is-light",on:{click:function(s){return t.deleteItem(i)}}},[t._v("X")])])])})),0),s("div",{staticClass:"has-text-right mr-4"},[s("h1",{staticClass:"is-size-6"},[s("strong",[t._v("Cost:")]),t._v("$ "+t._s(t.resultat))]),s("h1",{staticClass:"is-size-6"},[s("strong",[t._v("Discount 15%:")]),t._v(" $ "+t._s(t.discount))]),s("h1",{staticClass:"is-size-5"},[s("strong",[t._v("Total:")]),t._v("$ "),s("strong",[t._v(t._s(t.resultatDiscount))])]),s("hr"),s("div",[s("button",{staticClass:"button button_add mt-3",on:{click:function(s){return t.showCheckOut()}}},[t._v("Chekout")])])])])]):t._e(),s("div",{staticClass:"columns is-multiline is-centered is-mobile mt-5"},t._l(t.getPosts,(function(i,a){return s("div",{key:a},[s("div",{staticClass:"card m-3"},[s("div",[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image",staticStyle:{height:"48vh",width:"43vh"}},[s("img",{attrs:{src:i.img,alt:"image film"}})])]),s("div",{staticClass:"card-content"},[s("p",{staticClass:"is-size-6"},[s("strong",[t._v(" "+t._s(i.text))])]),s("p",{staticClass:"is-size-6"},[t._v("Price: $ "),s("strong",[t._v(t._s(i.price))])]),s("button",{staticClass:"button button_add",on:{click:function(s){t.showProduct(i.price,i.text,i.amount,i.id),t.mostrar()}}},[t._v("Add")])])])])])})),0)])])},n=[],r=(i(7658),i(3822)),e=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"notification is-warning"},[s("p",[t._v("Only today "),s("strong",[t._v(" 15% ")]),t._v("discount on orders over "),s("strong",[t._v("$100")])])])}],u={name:"specialOfert"},h=u,d=i(1001),m=(0,d.Z)(h,e,l,!1,null,"26b798fa",null),_=m.exports,v={name:"showStoreProducts",components:{specialOfert:_},data(){return{cart:[],result:[],cartFinal:[],totalAmount:0,condition2:!1,resultat:0,resultatDiscount:0,discount:0,price:0,product:"",amount:1,total:0,id:0,found:!1}},computed:{...(0,r.Se)(["getPosts"]),...(0,r.rn)(["checkout"])},methods:{showProduct(t,s,i,a){var o={price:t,product:s,amount:i,id:a,total:t};this.cart.push(o);let c=this.cart.map((t=>t.id)),n=c.filter((t=>t===a));n.length>1?this.found=!0:this.found=!1,1==this.found?this.cartFinal.forEach((t=>{t.id===a&&(t.amount++,t.total=t.price*t.amount)})):(this.cartFinal.push(o),localStorage.setItem("cart",JSON.stringify(this.cartFinal))),this.calculTotal()},resta(t){t.amount--,0==t.amount&&this.deleteItem(t),t.total=t.price*t.amount,this.calculTotal()},suma(t){t.amount++,t.total=t.price*t.amount,this.calculTotal()},calculTotal(){let t=this.cartFinal.map((t=>t.total));this.resultat=t.reduce(((t,s)=>t+s),0),this.resultat>=100?(this.discount=15*this.resultat/100,this.resultatDiscount=this.resultat-this.discount):(this.resultatDiscount=this.resultat,this.discount=0)},deleteItem(t){let s=this.cartFinal.indexOf(t);this.cartFinal.splice(s,1),alert(` ${t.product} will be removed from cart`),this.cart=[],this.cart=this.cartFinal,this.cart=[...this.cart],this.cartFinal=[...this.cartFinal],this.mostrar(),this.calculTotal()},mounted(){localStorage.cart&&(this.cart=localStorage.cart)},showCheckOut(){this.$store.state.checkout.push(this.cartFinal),this.$router.push("CheckOut")},mostrar(){this.cartFinal.length>=1?this.condition2=!0:this.condition2=!1}},watch:{name(t){localStorage.cart=t}}},f=v,p=(0,d.Z)(f,c,n,!1,null,"6806902d",null),C=p.exports,g={name:"storeView",components:{showStoreProducts:C}},b=g,k=(0,d.Z)(b,a,o,!1,null,null,null),w=k.exports}}]);
//# sourceMappingURL=629.cbcc7193.js.map