(function(){"use strict";var t={2441:function(t,e,a){var s=a(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[e("b-navbar-brand",{attrs:{to:"/"}},[e("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KBzam0Z3DrFxVJ19kC-kRB3OA039fdr9zg&usqp=CAU",alt:"Kitten",width:"40px",height:"40px"}})]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),e("b-nav-item",{attrs:{to:"/restaurants"}},[t._v("Restaurants")]),e("b-nav-item",{attrs:{to:"/about"}},[t._v("About")]),e("b-nav-item",{attrs:{to:"/cart"}},[e("b-icon",{attrs:{icon:"cart3"}})],1)],1),e("b-navbar-nav",{staticClass:"ml-auto"},[t.token?t._e():e("b-nav-item",{attrs:{to:"/register"}},[t._v("Register")]),t.token?e("b-nav-item",{on:{click:function(e){return t.logout()}}},[t._v("Log Out")]):e("b-nav-item",{attrs:{to:"/login"}},[t._v("Log In")])],1)],1)],1)],1),e("router-view",{staticClass:"stranica"})],1)},n=[],o=a(3822),i={name:"App",computed:{...(0,o.rn)(["token"])},mounted(){this.fetchRestaurants(),localStorage.token&&this.setToken(localStorage.token)},methods:{...(0,o.nv)(["fetchRestaurants"]),...(0,o.OI)(["removeToken","setToken"]),logout(){this.removeToken()}},sockets:{error(t){alert(t)}}},c=i,l=a(1001),u=(0,l.Z)(c,r,n,!1,null,null,null),m=u.exports,d=a(2631),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("Header",{attrs:{subtitle:"Home"}}),e("b-container",{staticClass:"p-4 bg-dark",attrs:{fluid:""}},[e("b-row",[e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3-300x300.jpg",alt:"Pizza"}})],1),e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://simply-delicious-food.com/wp-content/uploads/2022/06/Pasta-alla-Norma5-300x300.jpg",alt:"Pasta"}})],1),e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://simply-delicious-food.com/wp-content/uploads/2020/08/Bourbon-basted-cheeseburger-2-300x300.jpg",alt:"Burger"}})],1)],1)],1),e("b-container",{staticClass:"p-4 bg-info",attrs:{fluid:""}},[e("b-row",[e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/barbecue-beef-be536ca.jpg",alt:"Barbecue"}})],1),e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://i.pinimg.com/474x/b9/99/c1/b999c18b127b86814d99e5415468f67a--onion-recipes-chicken-recipes.jpg",alt:"Fish"}})],1),e("b-col",[e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://brasserieblanc.com/wp-content/uploads/2022/03/ALC8-300x300.jpg",alt:"Desserts"}})],1)],1)],1),e("h3",[t._v("Are you hungry?")])],1)},f=[],b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"naslov"},[e("h1",[t._v("Food Delivery")]),t.subtitle?e("h3",[t._v(t._s(t.subtitle))]):t._e(),e("hr")])},h=[],v={name:"Header",props:{subtitle:String}},_=v,g=(0,l.Z)(_,b,h,!1,null,"2276d14a",null),C=g.exports,w={name:"HomeView",components:{Header:C}},y=w,k=(0,l.Z)(y,p,f,!1,null,null,null),x=k.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"restaurants"},[e("Header",{attrs:{subtitle:"Restaurants"}}),t._l(t.restaurants,(function(t){return e("Restaurant",{key:t.id,attrs:{restaurant:t}})})),e("div",{staticClass:"restoran"})],2)},j=[],S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-4 restaurant"},[e("b-container",{staticClass:"border border-info rounded",attrs:{fluid:""}},[e("b-row",{staticClass:"justify-content-md-center m-4"},[e("b-col",["Serbian"==t.restaurant.kitchen?e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/barbecue-beef-be536ca.jpg",alt:"Restaurant"}}):"Italian"==t.restaurant.kitchen?e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://simply-delicious-food.com/wp-content/uploads/2020/06/Grilled-Pizza-Margherita-3-300x300.jpg",alt:"Restaurant"}}):"Chinese"==t.restaurant.kitchen?e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://www.metro.ca/userfiles/image/chinese-new-year/chinesedishes-300x300.jpg",alt:"Restaurant"}}):"Mexican"==t.restaurant.kitchen?e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://alidahitthespot.com/wp-content/uploads/2021/09/mexican-food-enchiladas-alida-hit-the-spot-300x300.jpg",alt:"Restaurant"}}):"Mediteran"==t.restaurant.kitchen?e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://i.pinimg.com/474x/b9/99/c1/b999c18b127b86814d99e5415468f67a--onion-recipes-chicken-recipes.jpg",alt:"Restaurant"}}):e("b-img",{attrs:{thumbnail:"",fluid:"",src:"https://images.kupujemprodajem.com//photos/oglasi/1/34/47042341/tmb-300x300-47042341_59345f7c1c8a47-59113981Fast-food-hamburger-.jpg",alt:"Restaurant"}})],1),e("b-col",{staticClass:"m-4"},[e("b-row",{staticClass:"p-1"},[e("h4",[e("b",[t._v(t._s(t.restaurant.name))])])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Kitchen:")]),t._v(" "+t._s(t.restaurant.kitchen))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("City:")]),t._v(" "+t._s(t.restaurant.city))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.street))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Phone:")]),t._v(" "+t._s(t.restaurant.phone))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Delivery price:")]),t._v(" "+t._s(t.restaurant.delivery_price))])]),e("b-row",{staticClass:"p-1"},[e("b-button",{attrs:{pill:"",variant:"info"},on:{click:t.singleRestaurant}},[t._v("More")])],1)],1)],1)],1)],1)},O=[],I={name:"Restaurant",props:{restaurant:Object},methods:{singleRestaurant(t){t.preventDefault(),this.$router.push({name:"SingleRestaurant",params:{id:this.restaurant.id}})}}},T=I,P=(0,l.Z)(T,S,O,!1,null,"10caa0a8",null),H=P.exports,Z={name:"RestaurantView",components:{Header:C,Restaurant:H},computed:{...(0,o.rn)(["restaurants"])}},A=Z,$=(0,l.Z)(A,R,j,!1,null,"780c3a58",null),E=$.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("Header",{attrs:{subtitle:"About Us"}}),e("p",[t._v(' We are the best food delivery in town. Our motto is: "A fed customer is a satisfied customer." Speed is our advantage, and good organization is a virtue. A rich selection of food in just one place, prepared by top chefs. Of course, that\'s not all, become our member and various rewards await you. Bon appetit! ')]),t._m(0)],1)},q=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact_info"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 offset-lg-1"},[e("div",{staticClass:"contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between"},[e("div",{staticClass:"contact_info_item d-flex flex-row align-items-center justify-content-start"},[e("div",{staticClass:"contact_info_image"},[e("img",{attrs:{src:"https://img.icons8.com/office/24/000000/iphone.png",alt:""}})]),e("div",{staticClass:"contact_info_content"},[e("div",{staticClass:"contact_info_title"},[t._v("Phone")]),e("div",{staticClass:"contact_info_text"},[t._v("+381 11-33-48-079")])])]),e("div",{staticClass:"contact_info_item d-flex flex-row align-items-center justify-content-start"},[e("div",{staticClass:"contact_info_image"},[e("img",{attrs:{src:"https://img.icons8.com/ultraviolet/24/000000/filled-message.png",alt:""}})]),e("div",{staticClass:"contact_info_content"},[e("div",{staticClass:"contact_info_title"},[t._v("Email")]),e("div",{staticClass:"contact_info_text"},[t._v("f_delivery@mail.com")])])]),e("div",{staticClass:"contact_info_item d-flex flex-row align-items-center justify-content-start"},[e("div",{staticClass:"contact_info_image"},[e("img",{attrs:{src:"https://img.icons8.com/ultraviolet/24/000000/map-marker.png",alt:""}})]),e("div",{staticClass:"contact_info_content"},[e("div",{staticClass:"contact_info_title"},[t._v("Address")]),e("div",{staticClass:"contact_info_text"},[t._v("Kneza Mihaila 6/VI")])])])])])])])])}],B={name:"AboutView",components:{Header:C}},D=B,F=(0,l.Z)(D,z,q,!1,null,"ce1dd35c",null),M=F.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"single"},[t.currentRestaurant?e("Header",{attrs:{subtitle:t.currentRestaurant.name}}):t._e(),t.currentRestaurant?e("Food"):t._e(),t.currentRestaurant?e("Comments"):t._e()],1)},L=[],V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"root"},t._l(t.currentRestaurant.foods,(function(a){return e("div",{key:a.id,staticClass:"m-4"},[e("b-container",{staticClass:"border border-info rounded restaurant"},[e("b-row",{staticClass:"justify-content-md-center m-4"},[e("b-col",{staticClass:"m-4"},[e("b-row",{staticClass:"p-1"},[e("h4",[e("b",[t._v(t._s(a.name))])])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Category:")]),t._v(" "+t._s(a.category))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Portion:")]),t._v(" "+t._s(a.portion))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Price:")]),t._v(" "+t._s(a.price))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Description:")]),t._v(" "+t._s(a.description))])]),e("b-row",{staticClass:"p-1"},[e("b-button",{attrs:{pill:"",variant:"info"},on:{click:function(e){return t.order(a)}}},[t._v("Order")])],1)],1)],1)],1)],1)})),0)},G=[],J={name:"Food",computed:{...(0,o.rn)(["currentRestaurant"])},methods:{...(0,o.OI)(["addCartItem"]),order(t){this.addCartItem(t)}}},K=J,U=(0,l.Z)(K,V,G,!1,null,"91d1f26e",null),W=U.exports,X=function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticStyle:{"padding-top":"70px"}},[t._v("Comments")]),t.token?e("div",[e("div",[e("b-container",{staticClass:"komentar"},[e("b-form-textarea",{attrs:{id:"textarea-auto-height",placeholder:"Leave a comment...",rows:"6"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),e("b-button",{attrs:{pill:"",variant:"info",size:"lg"},on:{click:t.onSubmit}},[t._v("Send")])],1),t._l(t.comments,(function(a){return e("div",{key:a.id,staticClass:"m-4"},[e("b-container",{staticClass:"border border-info rounded-pill comment"},[e("b-row",{staticClass:"justify-content-md-center m-4"},[e("b-col",{staticClass:"m-4"},[e("b-row",{staticClass:"p-1"},[e("b-icon",{staticClass:"m-3",attrs:{icon:"person-circle",scale:"3"}}),e("h4",{staticClass:"m-3"},[e("b",[t._v(t._s(a.user.first_name)+" "+t._s(a.user.last_name))])])],1),e("b-row",[e("h5",{staticClass:"p-3"},[t._v(t._s(a.content))])])],1)],1)],1)],1)}))],2):e("p",[t._v("You must be signed in to leave a comment")])])},Y=[],Q={name:"Comments",data(){return{content:""}},computed:{...(0,o.rn)(["token","currentRestaurant","comments"])},methods:{onSubmit(){this.$socket.emit("comment",{content:this.content,restaurant_id:this.currentRestaurant.id,token:this.token}),this.content=""}}},tt=Q,et=(0,l.Z)(tt,X,Y,!1,null,"4ca1319e",null),at=et.exports,st={name:"SingleRestaurantView",components:{Header:C,Food:W,Comments:at},computed:{...(0,o.rn)(["currentRestaurant"])},mounted(){setTimeout((()=>{this.fetchCommentsByRestaurant(this.$route.params.id)}),100)},methods:{...(0,o.nv)(["fetchCommentsByRestaurant"])}},rt=st,nt=(0,l.Z)(rt,N,L,!1,null,"3d904338",null),ot=nt.exports,it=function(){var t=this,e=t._self._c;return e("div",[e("Header",{attrs:{subtitle:"Cart"}}),0!==t.cartItems.length?e("Cart"):e("div",[e("h2",{staticClass:"m-5"},[t._v("Cart is empty!!!")]),e("b-icon",{attrs:{icon:"emoji-angry",scale:"4",variant:"danger"}})],1)],1)},ct=[],lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-component"},[t._l(t.cartItems,(function(a){return e("div",{key:a.id,staticClass:"m-4"},[e("b-container",{staticClass:"border border-info rounded cart"},[e("b-row",{staticClass:"justify-content-md-center m-4"},[e("b-col",{staticClass:"m-4"},[e("b-row",{staticClass:"p-1"},[e("h4",[e("b",[t._v(t._s(a.name))])])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Category:")]),t._v(" "+t._s(a.category))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Portion:")]),t._v(" "+t._s(a.portion))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Description:")]),t._v(" "+t._s(a.description))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Count:")]),t._v(" "+t._s(a.count))])]),e("b-row",{staticClass:"p-1"},[e("h5",[e("b",[t._v("Price:")]),t._v(" "+t._s(a.price*a.count)+" rsd")])]),e("b-row",{staticClass:"p-1"},[e("b-button",{attrs:{variant:"white"},on:{click:function(e){return t.remove(a)}}},[e("b-icon",{attrs:{icon:"x-circle",scale:"2",variant:"danger"}})],1)],1)],1)],1)],1)],1)})),e("h4",[e("b",[t._v("Total: "+t._s(t.total)+" rsd")])])],2)},ut=[],mt={name:"Cart",data(){return{total:0}},computed:{...(0,o.rn)(["cartItems"])},mounted(){this.total=0,this.cartItems.forEach((t=>{this.total+=t.price*t.count}))},methods:{...(0,o.OI)(["removeCartItem"]),remove(t){this.total-=t.price*t.count,this.removeCartItem(t.id)}}},dt=mt,pt=(0,l.Z)(dt,lt,ut,!1,null,"0618733a",null),ft=pt.exports,bt={name:"CartView",components:{Header:C,Cart:ft},computed:{...(0,o.rn)(["cartItems"])},methods:{...(0,o.OI)(["removeCartItem"])}},ht=bt,vt=(0,l.Z)(ht,it,ct,!1,null,"40e1d4d8",null),_t=vt.exports,gt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{subtitle:"Log In"}}),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("br"),e("b-button",{attrs:{type:"submit",variant:"info"}},[t._v("Submit")])],1)],1)},Ct=[],wt={name:"Login",components:{Header:C},data(){return{form:{email:"",password:""}}},methods:{...(0,o.nv)(["login"]),onSubmit(t){t.preventDefault(),this.login(this.form),this.$router.push({name:"Home"})}}},yt=wt,kt=(0,l.Z)(yt,gt,Ct,!1,null,"820a41cc",null),xt=kt.exports,Rt=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{subtitle:"Create account"}}),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{label:"First name:","label-for":"firstName"}},[e("b-form-input",{attrs:{id:"firstName",placeholder:"Enter first name",required:""},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}})],1),e("b-form-group",{attrs:{label:"Last name:","label-for":"lastName"}},[e("b-form-input",{attrs:{id:"lastName",placeholder:"Enter last name",required:""},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}})],1),e("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[e("b-form-input",{attrs:{id:"username",placeholder:"Enter username",required:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),e("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("br"),e("b-button",{attrs:{type:"submit",variant:"info"}},[t._v("Submit")])],1)],1)},jt=[],St={name:"Register",components:{Header:C},data(){return{form:{first_name:"",last_name:"",username:"",email:"",password:""}}},methods:{...(0,o.nv)(["register"]),onSubmit(t){t.preventDefault(),this.register(this.form),this.$router.push({name:"Home"})}}},Ot=St,It=(0,l.Z)(Ot,Rt,jt,!1,null,"6691d02c",null),Tt=It.exports;s["default"].use(d.Z);const Pt=[{path:"/",name:"Home",component:x},{path:"/restaurants",name:"Restaurants",component:E},{path:"/about",name:"About",component:M},{path:"/cart",name:"Cart",component:_t},{path:"/restaurant/:id",name:"SingleRestaurant",component:ot},{path:"/login",name:"Login",component:xt},{path:"/register",name:"Register",component:Tt}],Ht=new d.Z({mode:"history",base:"/",routes:Pt});var Zt=Ht,At=a(5996),$t=a(9425),Et=a(9557),zt=a.n(Et);a(7024);s["default"].use(o.ZP);var qt=new o.ZP.Store({state:{token:"",restaurants:[],cartItems:[],currentRestaurant:null,comments:[]},getters:{},mutations:{setToken(t,e){t.token=e,localStorage.token=e},removeToken(t){t.token="",localStorage.token=""},setRestaurants(t,e){t.restaurants=e},setComments(t,e){t.comments=e},setCommentsToRestaurant(t,e){const a=t.restaurants.filter((t=>t.id==e.id))[0];a["comments"]=e.comments},setCurrentRestaurant(t,e){t.currentRestaurant=e},addComment(t,e){const a=t.restaurants.filter((t=>t.id==e.restaurant_id))[0];a["comments"].push(e.comment)},addCartItem(t,e){const a=t.cartItems.filter((t=>t.id==e.id))[0];a?a.count+=1:(e.count=1,t.cartItems.push(e))},removeCartItem(t,e){const a=t.cartItems.findIndex((t=>t.id===e));t.cartItems.splice(a,1)}},actions:{register({commit:t},e){fetch("https://food-delivery-auth-service.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).then((e=>{e.err?alert(e.err):e.message?alert(e.message):t("setToken",e.token)}))},login({commit:t},e){fetch("https://food-delivery-auth-service.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).then((e=>{e.msg?alert(e.msg):t("setToken",e.token)}))},fetchRestaurants({commit:t}){fetch("https://food-delivery-crud.herokuapp.com/admin/restaurants",{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((e=>{t("setRestaurants",e)}))},fetchCommentsByRestaurant({commit:t,state:e},a){const s=e.restaurants.filter((t=>t.id==a))[0];s&&s["comments"]?(t("setCurrentRestaurant",s),t("setComments",s.comments)):s?fetch(`https://food-delivery-crud.herokuapp.com/admin/comments/${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((e=>{t("setCommentsToRestaurant",{id:a,comments:e}),t("setCurrentRestaurant",s),t("setComments",s.comments)})):t("setCurrentRestaurant",null)},socket_comment({commit:t},e){const a=JSON.parse(e);t("addComment",{restaurant_id:a.restaurant_id,comment:a})}},modules:{}});s["default"].use(At.XG7),s["default"].use($t.A7),s["default"].use(new(zt())({debug:!1,connection:"https://food-delivery-crud.herokuapp.com",vuex:{store:qt,actionPrefix:"socket_"}})),s["default"].config.productionTip=!1,new s["default"]({router:Zt,store:qt,render:t=>t(m)}).$mount("#app")}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,n){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],n=t[u][2];for(var i=!0,c=0;c<s.length;c++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(i=!1,n<o&&(o=n));if(i){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,r,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,n,o=s[0],i=s[1],c=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(c)var u=c(a)}for(e&&e(s);l<o.length;l++)n=o[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},s=self["webpackChunkfood_delivery_vue"]=self["webpackChunkfood_delivery_vue"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2441)}));s=a.O(s)})();
//# sourceMappingURL=app.c91a893a.js.map