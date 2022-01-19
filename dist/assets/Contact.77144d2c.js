import{_ as b,a as y,u as g}from"./index.592c1b2a.js";import{u as V,b as j}from"./index.180da753.js";import{V as $}from"./VCountries.dcd7cfd4.js";import{d as T,a as x,o as S,r as p,Q as I,b as _,f as o,h as n,g as e,i as d,t as a,F as u,s as m,q as w,j as k,n as L,y as A,z as E}from"./vendor.c2afbfeb.js";import"./index.146f5c80.js";import"./VButtonRadio.90d3fc23.js";const F=T({name:"Contact",components:{VCountries:$,ContactFormCareer:x(()=>y(()=>import("./ContactFormCareer.5d59f94d.js"),["assets/ContactFormCareer.5d59f94d.js","assets/ContactFormCareer.59bfed59.css","assets/index.592c1b2a.js","assets/index.78cd5b61.css","assets/vendor.c2afbfeb.js","assets/VCountries.dcd7cfd4.js","assets/index.180da753.js","assets/index.146f5c80.js","assets/VButtonRadio.90d3fc23.js","assets/bg-contact-alert-cartoon.a89cf9f2.js"])),VSkeleton:x(()=>y(()=>import("./VSkeleton.63cfc938.js"),["assets/VSkeleton.63cfc938.js","assets/index.592c1b2a.js","assets/index.78cd5b61.css","assets/vendor.c2afbfeb.js"]))},emits:["ready"],setup(s,{emit:l}){const f=g();S(()=>l("ready"));const h=V(j).smaller("md"),r=p(null),c=p([]),i=p(!1);return I(()=>r.value,async()=>{if(!!r.value){i.value=!0;try{c.value=await f.dispatch("contacts/GET_CONTACT",r.value)}catch(t){console.error({err:t})}finally{i.value=!1}}},{immediate:!0}),{md:h,country:r,isLoading:i,contacts:c}}}),B=s=>(A("data-v-932a0f8c"),s=s(),E(),s),N={class:"px-16px-48px-80px py-80px-104px-120px"},O={class:"topic-title tw-flex tw-justify-center tw-my-20"},P={class:"tw-max-w-3xl lg:tw-text-center"},R={key:0,class:"tw-flex tw-justify-around tw-gap-10"},D={class:"tw-flex tw-justify-center tw-flex-col tw-flex-wrap tw-gap-10"},H={class:"tw-flex tw-justify-center tw-flex-col tw-flex-wrap-reverse tw-gap-10"},M={key:1},q={class:"basis-400px"},z={class:"topic-title-28px tw-mb-6"},U={class:"tw-mb-4"},G={key:0,class:"link"},Q=["href"],J={key:1,class:"link"},K=["href"],W={key:2,class:"link"},X=["href"],Y={class:"link"},Z={href:"#"},ee={class:"basis-400px"},te={class:"topic-title-28px tw-mb-6"},se=["innerHTML"],oe={class:"pt-80px-120px-120px"},ne={class:"topic-title tw-flex tw-justify-center tw-mb-6"},ae={class:"tw-max-w-xl tw-text-center"},ie=B(()=>e("br",null,null,-1)),re={class:"tw-pt-20 tw-pb-35"};function le(s,l,f,C,h,r){const c=_("VCountries"),i=_("VSkeleton"),v=_("ContactFormCareer");return o(),n("div",null,[e("section",N,[d(c,{country:s.country,"onUpdate:country":l[0]||(l[0]=t=>s.country=t),"key-label":"title","key-value":"id"},null,8,["country"]),e("div",O,[e("h2",P,a(s.$t("OU Primelight International")),1)]),s.isLoading?(o(),n("div",R,[e("div",D,[(o(!0),n(u,null,m(new Array(5).keys(),t=>(o(),n("div",{key:t},[d(i)]))),128))]),e("div",H,[(o(!0),n(u,null,m(new Array(5).keys(),t=>(o(),n("div",{key:t},[d(i)]))),128))])])):(o(),n("div",M,[(o(!0),n(u,null,m(s.contacts,t=>(o(),n("div",{key:t.id,class:"tw-flex tw-flex-wrap tw-justify-center tw-mt-20 tw-gap-10"},[e("div",q,[e("div",z,a(t.title),1),e("div",U,[t.phone?(o(),n("div",G,[e("a",{href:`tel:${t.phone}`},a(t.phone),9,Q)])):w("",!0),t.email1?(o(),n("div",J,[e("a",{href:`mailTo:${t.email1}`},a(t.email1),9,K)])):w("",!0),t.email2?(o(),n("div",W,[e("a",{href:`mailTo:${t.email2}`},a(t.email2),9,X)])):w("",!0)]),e("div",Y,[e("a",Z,a(s.$t("Send a message"))+" >",1)])]),e("div",ee,[e("div",te,a(s.$t("Company information")),1),e("div",{class:"topic-description tw-max-w-[250px]",innerHTML:t.address.split(",").join(",<br>")},null,8,se)])]))),128))]))]),e("section",{class:L(["tw-bg-gray-4 px-16px-48px-80px",{"bg-contacts-sm":s.md,"bg-contacts-xl":!s.md}])},[e("div",oe,[e("div",ne,[e("h2",ae,[k(a(s.$t("How can we help you grow"))+" ",1),ie,k(" "+a(s.$t("Request proposal")),1)])])]),e("div",re,[d(v,{class:"tw-bg-white"})])],2)])}var we=b(F,[["render",le],["__scopeId","data-v-932a0f8c"]]);export{we as default};
