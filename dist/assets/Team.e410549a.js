import{_ as w,b as C,a as S,u as T}from"./index.f010fb53.js";import{u as V,b as I}from"./index.9068c8c5.js";import{d as f,h as e,j as s,s as h,i as o,t as m,a as j,E as A,q as x,r as b,U as k,o as N,b as u,k as v,F as E,x as B,f as F,n as R}from"./vendor.03c6fa73.js";import L from"./VCountries.6a698389.js";import"./index.ab398724.js";import"./VButtonRadio.a35f0792.js";var M="/assets/1.a36116db.png",q="/assets/2.959e394c.png",P="/assets/3.36976a96.png",U="/assets/4.35eb7231.png",D="/assets/5.05dbc10d.png",G="/assets/6.d1602fc5.png";const O=f({name:"TeamCard",props:{title:{type:[Number,String],default:""},description:{type:[Number,String],default:""},image:{type:[Number,String],default:"1"},avatar:{type:String,default:""}}}),z={class:"tw-max-w-[456px] tw-h-[360px] xl:tw-h-[400px] tw-overflow-hidden gray-shadow-1 tw-bg-white tw-rounded-4xl tw-relative"},K=["src","alt"],W={key:1,class:"card-image",src:M,alt:"Adam Saulius Vaina"},H={key:2,class:"card-image",src:q,alt:"Adam Saulius Vaina"},J={key:3,class:"card-image",src:P,alt:"Riivo Anton"},Q={key:4,class:"card-image",src:U,alt:"Roman Khlibun"},X={key:5,class:"card-image",src:D,alt:"Alexandra Sferle"},Y={key:6,class:"card-image",src:G,alt:"Gundega \u0112lerte"},Z={class:"card-bottom tw-w-full tw-p-6 tw-text-gray-1 tw-absolute tw-bottom-0"},tt={class:"text-22px-24px-24px tw-font-semibold"},et={class:"text-14px-16px-16px tw-flex tw-items-center tw-pt-3"};function st(t,i,d,_,l,r){return e(),s("div",z,[t.avatar?(e(),s("img",{key:0,class:"card-image",src:t.avatar,alt:String(t.title)},null,8,K)):h("",!0),+t.image==1?(e(),s("img",W)):+t.image==2?(e(),s("img",H)):+t.image==3?(e(),s("img",J)):+t.image==4?(e(),s("img",Q)):+t.image==5?(e(),s("img",X)):+t.image==6?(e(),s("img",Y)):h("",!0),o("div",Z,[o("div",tt,m(t.title),1),o("div",et,m(t.description),1)])])}var at=w(O,[["render",st],["__scopeId","data-v-e5b08550"]]);const ot=f({name:"Team",components:{VIconSpinner:C,VCountries:L,TeamCard:at,ContactForm:j(()=>S(()=>import("./ContactForm.ee29fd98.js"),["assets/ContactForm.ee29fd98.js","assets/ContactForm.79e965c0.css","assets/index.f010fb53.js","assets/index.b21ab698.css","assets/vendor.03c6fa73.js","assets/bg-contact-alert-cartoon.a89cf9f2.js"]))},emits:["ready"],setup(t,{emit:i}){const d=T(),_=A(),l=x(()=>_.query.countryId),r=b(1);k(()=>l.value,()=>{const a=parseInt(l.value);a&&!Number.isNaN(a)&&a!==null&&(r.value=a)},{immediate:!0});const g=x(()=>{const{teams:a}=d.state;return(a==null?void 0:a.TEAMS)?a.TEAMS.filter($=>$.country.id===r.value):[]}),c=b(!1),p=async()=>{c.value=!0;try{await d.dispatch("teams/GET_TEAMS")}catch(a){console.error({err:a})}finally{c.value=!1}};return N(()=>{i("ready"),p()}),k(()=>r.value,p),{md:V(I).smaller("md"),teams:g,countryId:r,isLoading:c}}}),nt={class:"px-16px-48px-80px py-80px-104px-120px"},rt={class:"max-layout-width tw-w-full"},it={class:"topic-title tw-flex tw-justify-center tw-mb-20"},ct={class:"tw-max-w-3xl tw-text-center"},dt={class:"tw-mt-20"},lt={key:0,class:"gap-16px-24px-40px tw-flex tw-flex-wrap"},pt={key:1,class:"tw-flex tw-items-center tw-justify-center"},mt={key:2},ut={class:"tw-py-30 px-16px-48px-80px"};function _t(t,i,d,_,l,r){const g=u("VCountries"),c=u("TeamCard"),p=u("VIconSpinner"),y=u("ContactForm");return e(),s("div",null,[o("section",nt,[o("div",rt,[o("div",it,[o("h2",ct,"Primelight OU "+m(t.$t("International senior team")),1)]),v(g,{country:t.countryId,"onUpdate:country":i[0]||(i[0]=n=>t.countryId=n),"key-label":"title","key-value":"id"},null,8,["country"]),o("div",dt,[t.teams.length?(e(),s("div",lt,[(e(!0),s(E,null,B(t.teams,n=>(e(),F(c,{key:n.id,class:"team-card",title:n.name+" "+n.surname,description:n.position,avatar:n.avatar},null,8,["title","description","avatar"]))),128))])):t.isLoading?(e(),s("div",pt,[v(p,{class:"tw-h-20",spin:""})])):(e(),s("div",mt,m(t.$t("We have no colleagues in the selected country")),1))])])]),o("section",{class:R(["tw-bg-gray-4",{"bg-contacts-sm":t.md,"bg-contacts-xl":!t.md}])},[o("div",ut,[v(y,{class:"tw-bg-white max-layout-width"})])],2)])}var xt=w(ot,[["render",_t],["__scopeId","data-v-6284e584"]]);export{xt as default};
