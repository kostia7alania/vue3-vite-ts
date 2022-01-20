import{_ as b,a as n}from"./index.1c6de4f9.js";import{_ as y}from"./bg-contact-alert-cartoon.a89cf9f2.js";import{d as I,a as d,r as m,b as r,h as v,j as E,i as t,t as a,k as s,g as w,l as c,f as $,s as k,z as j,A as L}from"./vendor.2a0c6659.js";const S=I({name:"ContactForm",components:{VCheckbox:d(()=>n(()=>import("./VCheckbox.6b0d0478.js"),["assets/VCheckbox.6b0d0478.js","assets/index.1c6de4f9.js","assets/index.f01e11e9.css","assets/vendor.2a0c6659.js"])),VButton:d(()=>n(()=>import("./index.1c6de4f9.js").then(function(e){return e.c}),["assets/index.1c6de4f9.js","assets/index.f01e11e9.css","assets/vendor.2a0c6659.js"])),VInput:d(()=>n(()=>import("./VInput.d16f72b8.js"),["assets/VInput.d16f72b8.js","assets/vendor.2a0c6659.js","assets/index.1c6de4f9.js","assets/index.f01e11e9.css"])),VTextarea:d(()=>n(()=>import("./VTextarea.b901f053.js"),["assets/VTextarea.b901f053.js","assets/index.1c6de4f9.js","assets/index.f01e11e9.css","assets/vendor.2a0c6659.js"])),VSelect:d(()=>n(()=>import("./VCountries.723d665c.js").then(function(e){return e.a}),["assets/VCountries.723d665c.js","assets/index.b5159072.js","assets/index.7c7c4081.js","assets/vendor.2a0c6659.js","assets/VButtonRadio.b075d904.js","assets/index.1c6de4f9.js","assets/index.f01e11e9.css"])),VCustomModal:d(()=>n(()=>import("./VCustomModal.29a53ac8.js"),["assets/VCustomModal.29a53ac8.js","assets/VCustomModal.0982fd24.css","assets/vendor.2a0c6659.js","assets/index.1c6de4f9.js","assets/index.f01e11e9.css"]))},setup(){const e=m(!1),o=m(!1),f=m({office:void 0,name:void 0,surname:void 0,phone:void 0,email:void 0,companyName:void 0,message:void 0}),u=m(!1);return{form:f,agreement1:e,agreement2:o,isSent:u,submitHandler:()=>{u.value=!0}}}}),p=e=>(j("data-v-9f27640c"),e=e(),L(),e),T={class:"tw-px-4 tw-pt-15 tw-pb-10 md:tw-p-15 xl:tw-p-17.5 gray-shadow-1"},A={class:"tw-flex tw-justify-between tw-items-center md:tw-items-start xl:tw-items-center tw-flex-col xl:tw-flex-row tw-gap-4"},M={class:"topic-title tw-text-center"},O={class:"topic-description tw-hidden md:tw-block"},U={class:"tw-mt-8 md:tw-mt-15 xl:tw-mt-17"},P={class:"tw-flex tw-items-center tw-gap-x-10 tw-flex-col xl:tw-flex-row tw-gap-y-4"},B={class:"tw-flex tw-items-center tw-gap-x-10 tw-mt-4 xl:tw-mt-6 tw-flex-col xl:tw-flex-row tw-gap-y-4"},N={class:"tw-flex tw-items-center tw-gap-x-10 tw-mt-4 xl:tw-mt-6 tw-flex-col xl:tw-flex-row tw-gap-y-4"},R={class:"tw-mt-4 xl:tw-mt-6"},D={class:"tw-my-6"},q=p(()=>t("br",{class:"lg:tw-hidden"},null,-1)),F={class:"tw-flex tw-justify-between tw-flex-col lg:tw-flex-row tw-items-center tw-gap-15 tw-mt-4 md:tw-mt-12 lg:tw-mt-12"},H={class:"tw-text-sm tw-max-w-2xl"},z={class:"tw-text-orange-1"},Y={class:"topic-description tw-text-center tw-mt-4 tw-block md:tw-hidden"},Z={class:"alert-modal bg-contact-alert tw-relative tw-bg-white tw-m-auto tw-rounded-3xl"},G={class:"tw-h-full tw-relative tw-z-20 tw-pb-16"},J=p(()=>t("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("circle",{cx:"24",cy:"24",r:"23.25",stroke:"#E8E7EA","stroke-width":"1.5"}),t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.293 18.293C18.4806 18.1055 18.7349 18.0002 19 18.0002C19.2652 18.0002 19.5195 18.1055 19.707 18.293L24 22.586L28.293 18.293C28.3853 18.1975 28.4956 18.1213 28.6176 18.0689C28.7396 18.0165 28.8709 17.9889 29.0036 17.9878C29.1364 17.9866 29.2681 18.0119 29.391 18.0622C29.5139 18.1125 29.6255 18.1867 29.7194 18.2806C29.8133 18.3745 29.8876 18.4862 29.9379 18.6091C29.9881 18.732 30.0134 18.8636 30.0123 18.9964C30.0111 19.1292 29.9835 19.2604 29.9311 19.3824C29.8787 19.5044 29.8025 19.6148 29.707 19.707L25.414 24L29.707 28.293C29.8892 28.4816 29.99 28.7342 29.9877 28.9964C29.9854 29.2586 29.8803 29.5094 29.6948 29.6948C29.5094 29.8802 29.2586 29.9854 28.9964 29.9877C28.7342 29.99 28.4816 29.8892 28.293 29.707L24 25.414L19.707 29.707C19.5184 29.8892 19.2658 29.99 19.0036 29.9877C18.7414 29.9854 18.4906 29.8802 18.3052 29.6948C18.1198 29.5094 18.0146 29.2586 18.0124 28.9964C18.0101 28.7342 18.1109 28.4816 18.293 28.293L22.586 24L18.293 19.707C18.1056 19.5195 18.0002 19.2652 18.0002 19C18.0002 18.7349 18.1056 18.4805 18.293 18.293Z",fill:"#21242C"})],-1)),K=[J],Q={class:"tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full tw-font-semibold tw-text-2xl"},W=p(()=>t("div",null,[t("img",{src:y})],-1)),X={class:"tw-text-center tw-max-w-sm tw-mt-10"};function ee(e,o,f,u,h,te){const i=r("VInput"),C=r("VSelect"),g=r("VTextarea"),V=r("VButton"),_=r("VCheckbox"),x=r("VCustomModal");return v(),E("div",T,[t("div",A,[t("div",M,a(e.$t("Fill the contact form")),1),t("div",O,"*"+a(e.$t("Required fields")),1)]),t("div",U,[t("div",P,[s(i,{modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.name=l),modelModifiers:{trim:!0},placeholder:"Name",required:""},null,8,["modelValue"]),s(i,{modelValue:e.form.surname,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.surname=l),modelModifiers:{trim:!0},placeholder:"Surname",required:""},null,8,["modelValue"])]),t("div",B,[s(i,{modelValue:e.form.phone,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.phone=l),modelModifiers:{trim:!0},placeholder:"Phone"},null,8,["modelValue"]),s(i,{modelValue:e.form.email,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.email=l),modelModifiers:{trim:!0},placeholder:"Email",required:""},null,8,["modelValue"])]),t("div",N,[s(i,{modelValue:e.form.companyName,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.companyName=l),modelModifiers:{trim:!0},class:"tw-basis-1/2",placeholder:"Company name"},null,8,["modelValue"]),s(C,{modelValue:e.form.office,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.office=l),class:"tw-basis-1/2",placeholder:e.$t("Offices you want to contact")+"*",items:["Office 1","Office 2","Office 3"]},null,8,["modelValue","placeholder"])]),t("div",R,[s(g,{modelValue:e.form.message,"onUpdate:modelValue":o[6]||(o[6]=l=>e.form.message=l),placeholder:e.$t("Your message")+"*"},null,8,["modelValue","placeholder"])])]),t("div",D,[s(V,{class:"tw-rounded-3xl tw-h-[80px] lg:tw-h-[60px] tw-w-full tw-text-base",variant:"orange-1"},{default:w(()=>[t("div",null,[c(a(e.$t("Upload documents"))+" ",1),q,c(" ("+a(e.$t("eg brief project description"))+") ",1)])]),_:1})]),t("div",F,[t("div",H,[s(_,{modelValue:e.agreement1,"onUpdate:modelValue":o[7]||(o[7]=l=>e.agreement1=l)},{default:w(()=>[t("span",null,[c(" *"+a(e.$t("I have read and understood that my personal data will be processed for contact purposes as described in the"))+" ",1),t("span",z,a(e.$t("Privacy notice for clients and external experts"))+".",1)])]),_:1},8,["modelValue"]),s(_,{modelValue:e.agreement2,"onUpdate:modelValue":o[8]||(o[8]=l=>e.agreement2=l),class:"tw-mt-6",label:e.$t("I agree to receive from CIVITTA information related to the services it offers")},null,8,["modelValue","label"])]),t("div",null,[s(V,{text:"Send",variant:"blue",class:"tw-w-[311px] lg:tw-w-[244px]",onClick:e.submitHandler},null,8,["onClick"]),t("div",Y,"*"+a(e.$t("Required fields")),1)])]),e.isSent?(v(),$(x,{key:0,onClose:o[10]||(o[10]=l=>e.isSent=!1)},{default:w(()=>[t("div",Z,[t("div",G,[t("button",{class:"tw-absolute tw-right-6 tw-top-6",onClick:o[9]||(o[9]=l=>e.isSent=!1)},K),t("div",Q,[W,t("div",X,a(e.$t("Your form has been successfully send"))+"!",1)])])])]),_:1})):k("",!0)])}var ae=b(S,[["render",ee],["__scopeId","data-v-9f27640c"]]);export{ae as default};
