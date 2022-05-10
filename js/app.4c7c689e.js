(function(){"use strict";var e={5572:function(e,n,t){var r=t(9242),i=t(3396);const a={class:"details"};function s(e,n,t,r,s,o){const l=(0,i.up)("Header"),u=(0,i.up)("RandomPlanet"),d=(0,i.up)("ItemList"),c=(0,i.up)("PersonDetails");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(l),(0,i.Wm)(u),(0,i._)("div",a,[(0,i.Wm)(d,{onSelect:o.oneItem},null,8,["onSelect"]),(0,i.Wm)(c,{name:s.name,gender:s.gender,birthYear:s.birthYear,eyeColor:s.eyeColor},null,8,["name","gender","birthYear","eyeColor"])])])}const o=e=>((0,i.dD)("data-v-832dea14"),e=e(),(0,i.Cn)(),e),l={class:"header"},u=o((()=>(0,i._)("h3",null,"Star DB",-1))),d=o((()=>(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",{href:"#"},"People")]),(0,i._)("li",null,[(0,i._)("a",{href:"#"},"Planets")]),(0,i._)("li",null,[(0,i._)("a",{href:"#"},"Starships")])],-1))),c=[u,d];function p(e,n,t,r,a,s){return(0,i.wg)(),(0,i.iD)("div",l,c)}var h={name:"Header"},g=t(89);const m=(0,g.Z)(h,[["render",p],["__scopeId","data-v-832dea14"]]);var _=m,v=t(7139);const f=e=>((0,i.dD)("data-v-11f90d5a"),e=e(),(0,i.Cn)(),e),w={class:"random-planet"},y=["src"],b={key:1},P={class:"list-description"},D=f((()=>(0,i._)("span",null,"Population ",-1))),C=f((()=>(0,i._)("span",null,"Rotation Period ",-1))),S=f((()=>(0,i._)("span",null,"Diameter ",-1)));function k(e,n,t,r,a,s){const o=(0,i.up)("Spinner");return(0,i.wg)(),(0,i.iD)("div",w,[a.isLoading?((0,i.wg)(),(0,i.iD)("div",b,[(0,i.Wm)(o)])):((0,i.wg)(),(0,i.iD)("img",{key:0,class:"planet-image",src:`${a.img}`,alt:"planet"},null,8,y)),(0,i._)("div",P,[(0,i._)("h4",null,(0,v.zw)(a.name),1),(0,i._)("ul",null,[(0,i._)("li",null,[D,(0,i._)("span",null,(0,v.zw)(a.population),1)]),(0,i._)("li",null,[C,(0,i._)("span",null,(0,v.zw)(a.rotationPeriod),1)]),(0,i._)("li",null,[S,(0,i._)("span",null,(0,v.zw)(a.diameter),1)])])])])}var I=t(2482);t(1703);class ${constructor(){(0,I.Z)(this,"_apiBase","https://swapi.dev/api"),(0,I.Z)(this,"loading",!0),(0,I.Z)(this,"_transformPerson",(e=>({id:this._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color})))}async getResource(e){const n=await fetch(`${this._apiBase}${e}`);if(!n.ok)throw new Error(`Could not fetch ${e} + , received${n.status}`);return await n.json()}_extractId(e){const n=/\/([0-9]*)\/$/;return e.url.match(n)[1]}async getAllPeople(){const e=await this.getResource("/people/");return e.results}async getPerson(e){const n=await this.getResource(`/people/${e}/`);return this._transformPerson(n)}async getAllPlanets(){const e=await this.getResource("/planets/");return e.results}getPlanet(e){return this.getResource(`/planets/${e}/`)}async getAllStarships(){const e=await this.getResource("/starships/");return e.results}getStarship(e){return this.getResource(`/starships/${e}/`)}}const L=e=>((0,i.dD)("data-v-da0ca2ec"),e=e(),(0,i.Cn)(),e),O={class:"loadingio-spinner-bean-eater-iwacvjxy9l"},R=L((()=>(0,i._)("div",{class:"ldio-ygqla0imuak"},[(0,i._)("div",null,[(0,i._)("div"),(0,i._)("div"),(0,i._)("div")]),(0,i._)("div",null,[(0,i._)("div"),(0,i._)("div"),(0,i._)("div")])],-1))),j=[R];function Y(e,n,t,r,a,s){return(0,i.wg)(),(0,i.iD)("div",O,j)}var z={name:"Spinner"};const Z=(0,g.Z)(z,[["render",Y],["__scopeId","data-v-da0ca2ec"]]);var x=Z;const q=new $;var W={name:"RandomPlanet",components:{Spinner:x},data(){return{id:null,img:null,name:null,population:null,rotationPeriod:null,diameter:null,isLoading:!1}},methods:{planetView(){this.isLoading=!0;const e="https://starwars-visualguide.com/assets/img/planets/",n=Math.floor(17*Math.random()+2);q.getPlanet(n).then((t=>{this.id=n,this.img=`${e}${this.id}.jpg`,this.name=t.name,this.population=t.population,this.rotationPeriod=t.rotation_period,this.diameter=t.diameter,this.isLoading=!1}))}},mounted(){this.planetView()}};const A=(0,g.Z)(W,[["render",k],["__scopeId","data-v-11f90d5a"]]);var B=A;const E={class:"list"},H={key:0},M={key:1},T=["onClick"];function V(e,n,t,r,a,s){const o=(0,i.up)("Spinner");return(0,i.wg)(),(0,i.iD)("div",E,[a.isLoading?((0,i.wg)(),(0,i.iD)("div",H,[(0,i.Wm)(o)])):((0,i.wg)(),(0,i.iD)("ul",M,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.person,(n=>((0,i.wg)(),(0,i.iD)("li",{onClick:t=>e.$emit("select",n),key:n},(0,v.zw)(n.name),9,T)))),128))]))])}const F=new $;var G={name:"ItemList",components:{Spinner:x},props:{id:{type:Number,required:!0}},data(){return{person:[],isLoading:!1}},methods:{peopleList(){const e=F.getAllPeople();e.then((e=>{e.forEach((e=>{this.person.push(e)}))}))}},mounted(){this.peopleList()}};const K=(0,g.Z)(G,[["render",V],["__scopeId","data-v-1261811d"]]);var N=K;const J=e=>((0,i.dD)("data-v-054e9087"),e=e(),(0,i.Cn)(),e),Q={class:"person-details"},U=J((()=>(0,i._)("img",{src:"https://starwars-visualguide.com/assets/img/characters/1.jpg"},null,-1))),X={class:""},ee=J((()=>(0,i._)("span",null,[(0,i._)("strong",null,"Gender ")],-1))),ne=J((()=>(0,i._)("span",null,[(0,i._)("strong",null,"Birth Year ")],-1))),te=J((()=>(0,i._)("span",null,[(0,i._)("strong",null,"Eye Color ")],-1)));function re(e,n,t,r,a,s){return(0,i.wg)(),(0,i.iD)("div",Q,[U,(0,i._)("div",X,[(0,i._)("h4",null,(0,v.zw)(t.name),1),(0,i._)("ul",null,[(0,i._)("li",null,[ee,(0,i._)("span",null,(0,v.zw)(t.gender),1)]),(0,i._)("li",null,[ne,(0,i._)("span",null,(0,v.zw)(t.birthYear),1)]),(0,i._)("li",null,[te,(0,i._)("span",null,(0,v.zw)(t.eyeColor),1)])])])])}var ie={name:"PersonDetails",props:{name:{type:String,required:!0},gender:{type:String,required:!0},birthYear:{type:String,required:!0},eyeColor:{type:String,required:!0}}};const ae=(0,g.Z)(ie,[["render",re],["__scopeId","data-v-054e9087"]]);var se=ae,oe={name:"App",components:{PersonDetails:se,ItemList:N,Header:_,RandomPlanet:B},data(){return{name:null,gender:"",birthYear:"",eyeColor:""}},methods:{oneItem(e){this.name=e.name,this.gender=e.gender,this.birthYear=e.birth_year,this.eyeColor=e.eye_color}}};const le=(0,g.Z)(oe,[["render",s]]);var ue=le;(0,r.ri)(ue).mount("#app")}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,a){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],i=e[d][1],a=e[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(o=!1,a<s&&(s=a));if(o){e.splice(d--,1);var u=i();void 0!==u&&(n=u)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,i,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,a,s=r[0],o=r[1],l=r[2],u=0;if(s.some((function(n){return 0!==e[n]}))){for(i in o)t.o(o,i)&&(t.m[i]=o[i]);if(l)var d=l(t)}for(n&&n(r);u<s.length;u++)a=s[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},r=self["webpackChunkstar_db"]=self["webpackChunkstar_db"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(5572)}));r=t.O(r)})();
//# sourceMappingURL=app.4c7c689e.js.map