(function(){"use strict";var e={7717:function(e,t,s){var n=s(9242),i=s(3396);const a={class:"container"};function r(e,t,s,n,r,o){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(l)])}var o={},l=s(89);const p=(0,l.Z)(o,[["render",r]]);var u=p;const c={class:"details"};function d(e,t,s,n,a,r){const o=(0,i.up)("Header"),l=(0,i.up)("RandomPlanet"),p=(0,i.up)("ItemList"),u=(0,i.up)("PersonDetails");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{onPeopleListItems:r.listOfPeople,onPlanetsListItems:r.listOfPlanets,onStarshipsListItems:r.listOfStarships},null,8,["onPeopleListItems","onPlanetsListItems","onStarshipsListItems"]),(0,i._)("div",null,[(0,i.Wm)(l),(0,i._)("div",c,[(0,i.Wm)(p,{swObjects:a.swObjects,onSelect:r.oneItem},null,8,["swObjects","onSelect"]),(0,i.Wm)(u,{detailsPerson:a.personDetails},null,8,["detailsPerson"])])])],64)}var h=s(7139);const m=e=>((0,i.dD)("data-v-527ab66e"),e=e(),(0,i.Cn)(),e),g={class:"random-planet"},_={key:0},v=["src"],f={class:"list-description"},w=m((()=>(0,i._)("span",null,"Population ",-1))),P=m((()=>(0,i._)("span",null,"Rotation Period ",-1))),y=m((()=>(0,i._)("span",null,"Diameter ",-1)));function D(e,t,s,n,a,r){const o=(0,i.up)("Spinner");return(0,i.wg)(),(0,i.iD)("div",g,[a.img?((0,i.wg)(),(0,i.iD)("img",{key:1,class:"planet-image",src:`${a.img}`,alt:"planet"},null,8,v)):((0,i.wg)(),(0,i.iD)("div",_,[(0,i.Wm)(o)])),(0,i._)("div",f,[(0,i._)("h4",null,(0,h.zw)(a.name),1),(0,i._)("ul",null,[(0,i._)("li",null,[w,(0,i._)("span",null,(0,h.zw)(a.population),1)]),(0,i._)("li",null,[P,(0,i._)("span",null,(0,h.zw)(a.rotationPeriod),1)]),(0,i._)("li",null,[y,(0,i._)("span",null,(0,h.zw)(a.diameter),1)])])])])}var b=s(2482);s(1703);class O{constructor(){(0,b.Z)(this,"_apiBase","https://swapi.dev/api"),(0,b.Z)(this,"loading",!0),(0,b.Z)(this,"_transformPerson",(e=>({id:this._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color})))}async getResource(e){const t=await fetch(`${this._apiBase}${e}`);if(!t.ok)throw new Error(`Could not fetch ${e} + , received${t.status}`);return await t.json()}_extractId(e){const t=/\/([0-9]*)\/$/;return e.url.match(t)[1]}async getAllPeople(){const e=await this.getResource("/people/");return e.results}async getPerson(e){const t=await this.getResource(`/people/${e}/`);return this._transformPerson(t)}async getAllPlanets(){const e=await this.getResource("/planets/");return e.results}getPlanet(e){return this.getResource(`/planets/${e}/`)}async getAllStarships(){const e=await this.getResource("/starships/");return e.results}getStarship(e){return this.getResource(`/starships/${e}/`)}}const k=e=>((0,i.dD)("data-v-da0ca2ec"),e=e(),(0,i.Cn)(),e),I={class:"loadingio-spinner-bean-eater-iwacvjxy9l"},L=k((()=>(0,i._)("div",{class:"ldio-ygqla0imuak"},[(0,i._)("div",null,[(0,i._)("div"),(0,i._)("div"),(0,i._)("div")]),(0,i._)("div",null,[(0,i._)("div"),(0,i._)("div"),(0,i._)("div")])],-1))),C=[L];function j(e,t,s,n,a,r){return(0,i.wg)(),(0,i.iD)("div",I,C)}var S={name:"Spinner"};const $=(0,l.Z)(S,[["render",j],["__scopeId","data-v-da0ca2ec"]]);var R=$;const x=new O;var Z={name:"RandomPlanet",components:{Spinner:R},data(){return{id:null,img:null,name:null,population:null,rotationPeriod:null,diameter:null}},methods:{planetView(){const e="https://starwars-visualguide.com/assets/img/planets/",t=Math.floor(17*Math.random()+2);x.getPlanet(t).then((s=>{this.isLoading=!0,this.id=t,this.img=`${e}${this.id}.jpg`,this.name=s.name,this.population=s.population,this.rotationPeriod=s.rotation_period,this.diameter=s.diameter,this.isLoading=!1}))}},created(){setInterval(this.planetView,5e3)}};const z=(0,l.Z)(Z,[["render",D],["__scopeId","data-v-527ab66e"]]);var A=z;const Y={class:"list"},W=["onClick"];function B(e,t,s,n,a,r){return(0,i.wg)(),(0,i.iD)("div",Y,[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.swObjects,(t=>((0,i.wg)(),(0,i.iD)("li",{onClick:s=>e.$emit("select",t),key:t},(0,h.zw)(t.name),9,W)))),128))])])}var H={name:"ItemList",props:{swObjects:{type:Array,required:!0}}};const M=(0,l.Z)(H,[["render",B],["__scopeId","data-v-e1449f6a"]]);var q=M;const E=e=>((0,i.dD)("data-v-0d33bb9e"),e=e(),(0,i.Cn)(),e),T={class:"person-details"},V=["src"],F={class:""},G={key:0},K=E((()=>(0,i._)("strong",null,"Gender: ",-1))),J=[K],N={key:1},Q=E((()=>(0,i._)("strong",null,"Population: ",-1))),U=[Q],X={key:2},ee=E((()=>(0,i._)("strong",null,"Cargo Capacity: ",-1))),te=[ee],se={key:0},ne=E((()=>(0,i._)("strong",null,"Birth Year: ",-1))),ie=[ne],ae={key:1},re=E((()=>(0,i._)("strong",null,"Rotation Period: ",-1))),oe=[re],le={key:2},pe=E((()=>(0,i._)("strong",null,"Max Speed: ",-1))),ue=[pe],ce={key:0},de=E((()=>(0,i._)("strong",null,"Eye Color: ",-1))),he=[de],me={key:1},ge=E((()=>(0,i._)("strong",null,"Diameter: ",-1))),_e=[ge],ve={key:2},fe=E((()=>(0,i._)("strong",null,"Passengers: ",-1))),we=[fe];function Pe(e,t,s,n,a,r){return(0,i.wg)(),(0,i.iD)("div",T,[(0,i._)("img",{src:`${s.detailsPerson.img}`},null,8,V),(0,i._)("div",F,[(0,i._)("h4",null,(0,h.zw)(s.detailsPerson.name),1),(0,i._)("ul",null,[(0,i._)("li",null,[s.detailsPerson.gender?((0,i.wg)(),(0,i.iD)("span",G,J)):s.detailsPerson.population?((0,i.wg)(),(0,i.iD)("span",N,U)):((0,i.wg)(),(0,i.iD)("span",X,te)),(0,i._)("span",null,(0,h.zw)(s.detailsPerson.gender||s.detailsPerson.population||s.detailsPerson.cargoCapacity),1)]),(0,i._)("li",null,[s.detailsPerson.gender?((0,i.wg)(),(0,i.iD)("span",se,ie)):s.detailsPerson.population?((0,i.wg)(),(0,i.iD)("span",ae,oe)):((0,i.wg)(),(0,i.iD)("span",le,ue)),(0,i._)("span",null,(0,h.zw)(s.detailsPerson.birthYear||s.detailsPerson.rotationPeriod||s.detailsPerson.maxSpeed),1)]),(0,i._)("li",null,[s.detailsPerson.gender?((0,i.wg)(),(0,i.iD)("span",ce,he)):s.detailsPerson.population?((0,i.wg)(),(0,i.iD)("span",me,_e)):((0,i.wg)(),(0,i.iD)("span",ve,we)),(0,i._)("span",null,(0,h.zw)(s.detailsPerson.eyeColor||s.detailsPerson.diameter||s.detailsPerson.passengers),1)])])])])}var ye={name:"PersonDetails",data(){return{keys:[]}},props:{detailsPerson:{type:Object,required:!0}},methods:{},mounted(){}};const De=(0,l.Z)(ye,[["render",Pe],["__scopeId","data-v-0d33bb9e"]]);var be=De;const Oe={class:"header"},ke=["people"],Ie=["planets"],Le=["starships"];function Ce(e,t,s,n,a,r){return(0,i.wg)(),(0,i.iD)("div",Oe,[(0,i._)("h3",{onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"Star DB"),(0,i._)("ul",null,[(0,i._)("li",{onClick:t[1]||(t[1]=(...e)=>r.peopleList&&r.peopleList(...e)),people:a.people}," People ",8,ke),(0,i._)("li",{onClick:t[2]||(t[2]=(...e)=>r.planetsList&&r.planetsList(...e)),planets:a.planets}," Planets ",8,Ie),(0,i._)("li",{onClick:t[3]||(t[3]=(...e)=>r.starshipsList&&r.starshipsList(...e)),starships:a.starships}," Starships ",8,Le)])])}const je=new O;var Se={name:"Header",data(){return{people:[],planets:[],starships:[]}},methods:{peopleList(){const e=je.getAllPeople();e.then((e=>{this.people=e,this.$emit("peopleListItems",this.people)}))},planetsList(){const e=je.getAllPlanets();e.then((e=>{this.planets=e,this.$emit("planetsListItems",this.planets)}))},starshipsList(){const e=je.getAllStarships();e.then((e=>{this.starships=e,this.$emit("starshipsListItems",this.starships)}))}}};const $e=(0,l.Z)(Se,[["render",Ce],["__scopeId","data-v-14ee991f"]]);var Re=$e;const xe=new O;var Ze={name:"App",components:{Header:Re,PersonDetails:be,ItemList:q,RandomPlanet:A},data(){return{personDetails:{name:"",gender:"",birthYear:"",eyeColor:"",img:"",population:"",rotationPeriod:"",diameter:"",cargoCapacity:"",maxSpeed:"",passengers:""},swObjects:[]}},methods:{oneItem(e){const t="https://starwars-visualguide.com/assets/img/characters/",s=xe._extractId(e);this.personDetails.name=e.name,this.personDetails.gender=e.gender,this.personDetails.birthYear=e.birth_year,this.personDetails.eyeColor=e.eye_color,this.personDetails.img=`${t}${s}.jpg`,this.personDetails.population=e.population,this.personDetails.rotationPeriod=e.rotation_period,this.personDetails.diameter=e.diameter,this.personDetails.cargoCapacity=e.cargo_capacity,this.personDetails.maxSpeed=e.max_atmosphering_speed,this.personDetails.passengers=e.passengers},listOfPeople(e){this.swObjects=e},listOfPlanets(e){this.swObjects=e},listOfStarships(e){this.swObjects=e}},computed(){this.listOfPeople(),this.listOfPlanets(),this.listOfStarships()}};const ze=(0,l.Z)(Ze,[["render",d]]);var Ae=ze,Ye=s(678);const We=(0,i._)("h1",null,"Random Planet",-1),Be=[We];function He(e,t,s,n,a,r){return(0,i.wg)(),(0,i.iD)("div",null,Be)}var Me={name:"RandomPlanet"};const qe=(0,l.Z)(Me,[["render",He]]);var Ee=qe;const Te=[{path:"/",component:Ae},{path:"/random",component:Ee},{path:"/people",component:q}],Ve=(0,Ye.p7)({routes:Te,history:(0,Ye.PO)("/star-DB-vue/")});var Fe=Ve;const Ge=(0,n.ri)(u);Ge.use(Fe).mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,n,i,a){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],a=e[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](n[l])}))?n.splice(l--,1):(o=!1,a<r&&(r=a));if(o){e.splice(u--,1);var p=i();void 0!==p&&(t=p)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,i,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,r=n[0],o=n[1],l=n[2],p=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(l)var u=l(s)}for(t&&t(n);p<r.length;p++)a=r[p],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},n=self["webpackChunkstar_db"]=self["webpackChunkstar_db"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(7717)}));n=s.O(n)})();
//# sourceMappingURL=app.f15150d8.js.map