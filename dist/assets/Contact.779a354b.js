import{_ as I,a as x,b as $,u as B}from"./index.374299a1.js";import{u as N,b as O}from"./index.c7457d26.js";import R from"./VCountries.c28ec844.js";import{d as L,a as k,o as g,r as T,q as b,Y as F,b as u,h as o,j as n,i as t,f as V,t as i,F as h,x as y,k as f,s as v,l as j,n as Y,z as D,A as G}from"./vendor.7852c38b.js";import"./VButtonRadio.6cccbaec.js";import"./VSelect.0b04f03a.js";const q=L({name:"Contact",components:{VCountries:R,ContactFormCareerAndContact:k(()=>x(()=>import("./ContactFormCareerAndContact.97da97b5.js"),["assets/ContactFormCareerAndContact.97da97b5.js","assets/ContactFormCareerAndContact.8d2af692.css","assets/index.374299a1.js","assets/index.82ed91c4.css","assets/vendor.7852c38b.js","assets/bg-contact-alert-cartoon.a89cf9f2.js"])),VSkeleton:k(()=>x(()=>import("./VSkeleton.65545145.js"),["assets/VSkeleton.65545145.js","assets/index.374299a1.js","assets/index.82ed91c4.css","assets/vendor.7852c38b.js"])),VIconSpinner:$},emits:["ready"],setup(s,{emit:d}){const r=B();g(()=>d("ready"));const C=N(O).smaller("md"),c=T(null),l=T(!1),w=async()=>await r.dispatch("countries/GET_COUNTRIES"),p=async a=>await r.dispatch("contacts/GET_CONTACT_BY_COUNTRY",a),m=async()=>{l.value=!0;try{const a=await w();for(let _=0;_<a.length;_++)await p(a[_].id)}catch(a){console.error({err:a})}finally{l.value=!1}},e=b(()=>r.getters["contacts/GETTER_CONTACTS"]);g(()=>{m()});const A=async()=>{if(!!c.value)try{await r.dispatch("contacts/GET_CONTACT_BY_COUNTRY",c.value)}catch(a){console.error({err:a})}finally{}},E=b(()=>r.getters["contacts/GETTER_CONTACT_BY_ID"](c.value)||[]);return F(()=>c.value,A,{immediate:!0}),{md:C,country:c,isLoading:l,contacts:E,countries:e}}}),P=s=>(D("data-v-3d74aaad"),s=s(),G(),s),U={class:"px-16px-48px-80px py-80px-104px-120px"},H={class:"max-layout-width"},M={class:"topic-title tw-flex tw-justify-center tw-my-20"},z={class:"tw-flex tw-items-center tw-max-w-3xl lg:tw-text-center tw-relative"},J={key:2,class:"tw-flex tw-justify-around tw-gap-10"},K={class:"tw-flex tw-justify-center tw-flex-col tw-flex-wrap tw-gap-10"},Q={class:"tw-flex tw-justify-center tw-flex-col tw-flex-wrap-reverse tw-gap-10"},W={key:3},X={class:"basis-400px"},Z={class:"topic-title-28px tw-mb-6"},tt={class:"tw-mb-4"},et={key:0,class:"link"},st=["href"],ot={key:1,class:"link"},nt=["href"],at={key:2,class:"link"},it=["href"],rt={class:"link"},ct={href:"#request-proposal"},lt={class:"basis-400px"},dt={class:"topic-title-28px tw-mb-6"},pt=["innerHTML"],_t={class:"max-layout-width-overflow-auto"},ut={class:"pt-80px-120px-120px"},wt={class:"topic-title tw-flex tw-justify-center tw-mb-6"},mt={class:"tw-max-w-xl tw-text-center"},ht=P(()=>t("br",null,null,-1)),yt={class:"tw-pt-20 tw-pb-35"};function ft(s,d,r,S,C,c){const l=u("VIconSpinner"),w=u("VCountries"),p=u("VSkeleton"),m=u("ContactFormCareerAndContact");return o(),n("div",null,[t("section",U,[t("div",H,[s.isLoading?(o(),V(l,{key:0,spin:"",class:"tw-h-[40px] tw-flex tw-justify-center tw-w-full"})):(o(),V(w,{key:1,country:s.country,"onUpdate:country":d[0]||(d[0]=e=>s.country=e),"key-label":"title","key-value":"id","init-countries":s.countries},null,8,["country","init-countries"])),t("div",M,[t("h2",z,i(s.$t("Primelight O\xDC International")),1)]),s.isLoading&&!s.contacts.length?(o(),n("div",J,[t("div",K,[(o(!0),n(h,null,y(new Array(5).keys(),e=>(o(),n("div",{key:e},[f(p)]))),128))]),t("div",Q,[(o(!0),n(h,null,y(new Array(5).keys(),e=>(o(),n("div",{key:e},[f(p)]))),128))])])):(o(),n("div",W,[(o(!0),n(h,null,y(s.contacts,e=>(o(),n("div",{key:e.id,class:"tw-flex tw-flex-wrap tw-justify-center tw-mt-20 tw-gap-10"},[t("div",X,[t("div",Z,i(e.title),1),t("div",tt,[e.phone?(o(),n("div",et,[t("a",{href:`tel:${e.phone}`},i(e.phone),9,st)])):v("",!0),e.email1?(o(),n("div",ot,[t("a",{href:`mailTo:${e.email1}`},i(e.email1),9,nt)])):v("",!0),e.email2?(o(),n("div",at,[t("a",{href:`mailTo:${e.email2}`},i(e.email2),9,it)])):v("",!0)]),t("div",rt,[t("a",ct,i(s.$t("Send a message"))+" >",1)])]),t("div",lt,[t("div",dt,i(s.$t("Company information")),1),t("div",{class:"topic-description tw-max-w-[250px]",innerHTML:e.address.split(",").join(",<br>")},null,8,pt)])]))),128))]))])]),t("section",{id:"request-proposal",class:Y(["tw-bg-gray-4 px-16px-48px-80px",{"bg-contacts-sm":s.md,"bg-contacts-xl":!s.md}])},[t("div",_t,[t("div",ut,[t("div",wt,[t("h2",mt,[j(i(s.$t("How can we help you grow"))+" ",1),ht,j(" "+i(s.$t("Request proposal")),1)])])]),t("div",yt,[f(m,{class:"tw-bg-white","is-contact-page":""})])])],2)])}var bt=I(q,[["render",ft],["__scopeId","data-v-3d74aaad"]]);export{bt as default};
