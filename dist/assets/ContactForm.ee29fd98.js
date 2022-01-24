import{_ as $,a as i,u as E}from"./index.f010fb53.js";import{d as I,a as m,as as T,u as j,r as V,q as P,b as u,h as k,j as L,i as o,t as d,k as l,g as C,l as g,f as S,s as O,z as A,A as F}from"./vendor.03c6fa73.js";import{_ as U}from"./bg-contact-alert-cartoon.a89cf9f2.js";const M=I({name:"ContactForm",components:{VCheckbox:m(()=>i(()=>import("./VCheckbox.901dc252.js"),["assets/VCheckbox.901dc252.js","assets/index.f010fb53.js","assets/index.b21ab698.css","assets/vendor.03c6fa73.js"])),VButton:m(()=>i(()=>import("./index.f010fb53.js").then(function(e){return e.c}),["assets/index.f010fb53.js","assets/index.b21ab698.css","assets/vendor.03c6fa73.js"])),VInput:m(()=>i(()=>import("./VInput.e7bac1d3.js"),["assets/VInput.e7bac1d3.js","assets/vendor.03c6fa73.js","assets/index.f010fb53.js","assets/index.b21ab698.css"])),VTextarea:m(()=>i(()=>import("./VTextarea.922080ad.js"),["assets/VTextarea.922080ad.js","assets/index.f010fb53.js","assets/index.b21ab698.css","assets/vendor.03c6fa73.js"])),VCustomModal:m(()=>i(()=>import("./VCustomModal.6e0b6da7.js"),["assets/VCustomModal.6e0b6da7.js","assets/VCustomModal.0982fd24.css","assets/vendor.03c6fa73.js","assets/index.f010fb53.js","assets/index.b21ab698.css"])),VCountries:m(()=>i(()=>import("./VCountries.6a698389.js"),["assets/VCountries.6a698389.js","assets/index.9068c8c5.js","assets/index.ab398724.js","assets/vendor.03c6fa73.js","assets/VButtonRadio.a35f0792.js","assets/index.f010fb53.js","assets/index.b21ab698.css"])),VFilePicker:m(()=>i(()=>import("./VFilePicker.e9ca41ed.js"),["assets/VFilePicker.e9ca41ed.js","assets/vendor.03c6fa73.js","assets/index.f010fb53.js","assets/index.b21ab698.css"]))},setup(){const e=E(),t=T(),{t:y}=j({useScope:"global"}),_=V(!1),x=V(!1),p=V({name:"",surname:"",email:"",phone:"",company:"",country_id:"",message:"",cv_document:""}),r=V(!1),v=()=>{const a=new FormData;return Object.entries(p.value).forEach(([n,c])=>{a.append(n,c)}),a},h=async()=>{var a,n,c,s;if(!w.value)return t.info(y("Please fill required fields"),{timeout:2e3});try{await e.dispatch("contacts/POST_CONTACTS",v()),r.value=!0}catch(f){t.error(((s=(c=Object.values((n=(a=f==null?void 0:f.response)==null?void 0:a.data)==null?void 0:n.errors))==null?void 0:c[0])==null?void 0:s[0])||"Something went wrong...",{timeout:2e3}),console.error({err:f})}},w=P(()=>{const a=["phone","company"];return Object.values(p.value).filter(n=>!a.includes(n)).every(n=>n)&&_.value});return{form:p,agreement1:_,agreement2:x,isSent:r,isValid:w,postContactForm:h}}}),b=e=>(A("data-v-0059608e"),e=e(),F(),e),D={class:"tw-px-4 tw-pt-15 tw-pb-10 md:tw-p-15 xl:tw-p-17.5 gray-shadow-1"},R={class:"tw-flex tw-justify-between tw-items-center md:tw-items-start xl:tw-items-center tw-flex-col xl:tw-flex-row tw-gap-4"},B={class:"topic-title tw-text-center"},q={class:"topic-description tw-hidden md:tw-block"},N={class:"tw-mt-8 md:tw-mt-15 xl:tw-mt-17"},z={class:"tw-flex tw-items-center tw-gap-x-10 tw-flex-col xl:tw-flex-row tw-gap-y-4"},Y={class:"tw-flex tw-items-center tw-gap-x-10 tw-mt-4 xl:tw-mt-6 tw-flex-col xl:tw-flex-row tw-gap-y-4"},Z={class:"tw-flex tw-items-center tw-gap-x-10 tw-mt-4 xl:tw-mt-6 tw-flex-col xl:tw-flex-row tw-gap-y-4"},G={class:"tw-mt-4 xl:tw-mt-6"},H={class:"tw-my-6"},J={class:"tw-my-6"},K=b(()=>o("br",{class:"lg:tw-hidden"},null,-1)),Q={class:"tw-flex tw-justify-between tw-flex-col lg:tw-flex-row tw-items-center tw-gap-15 tw-mt-4 md:tw-mt-12 lg:tw-mt-12"},W={class:"tw-text-sm tw-max-w-2xl"},X={class:"tw-text-orange-1"},ee={class:"topic-description tw-text-center tw-mt-4 tw-block md:tw-hidden"},te={class:"alert-modal bg-contact-alert tw-relative tw-bg-white tw-m-auto tw-rounded-3xl"},oe={class:"tw-h-full tw-relative tw-z-20 tw-pb-16"},se=b(()=>o("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("circle",{cx:"24",cy:"24",r:"23.25",stroke:"#E8E7EA","stroke-width":"1.5"}),o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.293 18.293C18.4806 18.1055 18.7349 18.0002 19 18.0002C19.2652 18.0002 19.5195 18.1055 19.707 18.293L24 22.586L28.293 18.293C28.3853 18.1975 28.4956 18.1213 28.6176 18.0689C28.7396 18.0165 28.8709 17.9889 29.0036 17.9878C29.1364 17.9866 29.2681 18.0119 29.391 18.0622C29.5139 18.1125 29.6255 18.1867 29.7194 18.2806C29.8133 18.3745 29.8876 18.4862 29.9379 18.6091C29.9881 18.732 30.0134 18.8636 30.0123 18.9964C30.0111 19.1292 29.9835 19.2604 29.9311 19.3824C29.8787 19.5044 29.8025 19.6148 29.707 19.707L25.414 24L29.707 28.293C29.8892 28.4816 29.99 28.7342 29.9877 28.9964C29.9854 29.2586 29.8803 29.5094 29.6948 29.6948C29.5094 29.8802 29.2586 29.9854 28.9964 29.9877C28.7342 29.99 28.4816 29.8892 28.293 29.707L24 25.414L19.707 29.707C19.5184 29.8892 19.2658 29.99 19.0036 29.9877C18.7414 29.9854 18.4906 29.8802 18.3052 29.6948C18.1198 29.5094 18.0146 29.2586 18.0124 28.9964C18.0101 28.7342 18.1109 28.4816 18.293 28.293L22.586 24L18.293 19.707C18.1056 19.5195 18.0002 19.2652 18.0002 19C18.0002 18.7349 18.1056 18.4805 18.293 18.293Z",fill:"#21242C"})],-1)),le=[se],ae={class:"tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full tw-font-semibold tw-text-2xl"},ne=b(()=>o("div",null,[o("img",{src:U})],-1)),re={class:"tw-text-center tw-max-w-sm tw-mt-10"};function de(e,t,y,_,x,p){const r=u("VInput"),v=u("VCountries"),h=u("VTextarea"),w=u("VFilePicker"),a=u("VCheckbox"),n=u("VButton"),c=u("VCustomModal");return k(),L("div",D,[o("div",R,[o("div",B,d(e.$t("Fill the contact form")),1),o("div",q,"*"+d(e.$t("Required fields")),1)]),o("div",N,[o("div",z,[l(r,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.name=s),modelModifiers:{trim:!0},placeholder:e.$t("Name"),required:""},null,8,["modelValue","placeholder"]),l(r,{modelValue:e.form.surname,"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.surname=s),modelModifiers:{trim:!0},placeholder:e.$t("Surname"),required:""},null,8,["modelValue","placeholder"])]),o("div",Y,[l(r,{modelValue:e.form.phone,"onUpdate:modelValue":t[2]||(t[2]=s=>e.form.phone=s),modelModifiers:{trim:!0},placeholder:e.$t("Phone")},null,8,["modelValue","placeholder"]),l(r,{modelValue:e.form.email,"onUpdate:modelValue":t[3]||(t[3]=s=>e.form.email=s),modelModifiers:{trim:!0},placeholder:e.$t("Email"),required:""},null,8,["modelValue","placeholder"])]),o("div",Z,[l(r,{modelValue:e.form.company,"onUpdate:modelValue":t[4]||(t[4]=s=>e.form.company=s),modelModifiers:{trim:!0},class:"tw-basis-1/2",placeholder:e.$t("Company name")},null,8,["modelValue","placeholder"]),l(v,{country:e.form.country_id,"onUpdate:country":t[5]||(t[5]=s=>e.form.country_id=s),class:"tw-basis-1/2 tw-w-full","key-label":"title","key-value":"id",placeholder:e.$t("Offices you want to contact")+"*","is-select":""},null,8,["country","placeholder"])]),o("div",G,[l(h,{modelValue:e.form.message,"onUpdate:modelValue":t[6]||(t[6]=s=>e.form.message=s),placeholder:e.$t("Your message")+"*"},null,8,["modelValue","placeholder"])])]),o("div",H,[o("div",J,[l(w,{modelValue:e.form.cv_document,"onUpdate:modelValue":t[7]||(t[7]=s=>e.form.cv_document=s)},{default:C(()=>[g(d(e.$t("Upload other documents"))+" ",1),K,g(" ("+d(e.$t("eg portfolio references"))+") ",1)]),_:1},8,["modelValue"])])]),o("div",Q,[o("div",W,[l(a,{modelValue:e.agreement1,"onUpdate:modelValue":t[8]||(t[8]=s=>e.agreement1=s)},{default:C(()=>[o("span",null,[g(" *"+d(e.$t("I have read and understood that my personal data will be processed for contact purposes as described in the"))+" ",1),o("span",X,d(e.$t("Privacy notice for clients and external experts"))+".",1)])]),_:1},8,["modelValue"]),l(a,{modelValue:e.agreement2,"onUpdate:modelValue":t[9]||(t[9]=s=>e.agreement2=s),class:"tw-mt-6",label:e.$t("I agree to receive from CIVITTA information related to the services it offers")},null,8,["modelValue","label"])]),o("div",null,[l(n,{text:"Send",variant:"blue",class:"tw-w-[311px] lg:tw-w-[244px]",onClick:e.postContactForm},null,8,["onClick"]),o("div",ee,"*"+d(e.$t("Required fields")),1)])]),e.isSent?(k(),S(c,{key:0,onClose:t[11]||(t[11]=s=>e.isSent=!1)},{default:C(()=>[o("div",te,[o("div",oe,[o("button",{class:"tw-absolute tw-right-6 tw-top-6",onClick:t[10]||(t[10]=s=>e.isSent=!1)},le),o("div",ae,[ne,o("div",re,d(e.$t("Your form has been successfully send"))+"!",1)])])])]),_:1})):O("",!0)])}var ce=$(M,[["render",de],["__scopeId","data-v-0059608e"]]);export{ce as default};
