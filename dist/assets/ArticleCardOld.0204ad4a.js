import{_ as i,a as d}from"./index.1c6de4f9.js";import{d as a,a as l,u as w,r as c,b as p,h as u,j as m,i as e,t as n,k as f}from"./vendor.2a0c6659.js";import{_ as v,a as _}from"./students-and-graduates.3a2ef069.js";const g=a({name:"ArticleCardOld",components:{VButton:l(()=>d(()=>import("./index.1c6de4f9.js").then(function(t){return t.c}),["assets/index.1c6de4f9.js","assets/index.f01e11e9.css","assets/vendor.2a0c6659.js"]))},props:{date:{type:String,default:""},title:{type:String,default:""}},emits:["click"],setup(){const{t}=w({useScope:"global"});return{buttonText:c(t("button.read more"))}}}),h={class:"anim-500 tw-grow-1 tw-w-full tw-bg-white tw-rounded-4xl gray-shadow-1 tw-group hover:tw--translate-y-5"},x=e("div",{class:"anim-500 tw-overflow-hidden tw-block group-hover:tw-hidden"},[e("img",{class:"tw-w-full tw-rounded-t-3xl",src:v,alt:"Experienced professionals"})],-1),b=e("div",{class:"anim-500 tw-overflow-hidden tw-hidden group-hover:tw-block"},[e("img",{class:"tw-w-full tw-rounded-t-3xl",src:_,alt:"Experienced professionals"})],-1),k=[x,b],$={class:"tw-px-8 tw-pb-8"},C={class:"tw-text-orange-1 tw-text-sm tw-leading-6 tw-mt-6"};function y(t,o,B,V,j,A){const r=p("VButton");return u(),m("div",h,[e("div",{class:"tw-h-74 tw-overflow-hidden tw-cursor-pointer",onClick:o[0]||(o[0]=s=>t.$emit("click"))},k),e("div",$,[e("div",C,n(t.date),1),e("div",{class:"tw-font-semibold tw-text-2xl tw-leading-8 tw-mt-3 tw-cursor-pointer",onClick:o[1]||(o[1]=s=>t.$emit("click"))},n(t.title),1),f(r,{class:"tw-mt-9 tw-text-sm tw-text-blue-1 group-hover:tw-text-white group-hover:tw-bg-blue-1",text:`${t.buttonText} \xA0 >`,height:"48px",onClick:o[2]||(o[2]=s=>t.$emit("click"))},null,8,["text"])])])}var O=i(g,[["render",y]]);export{O as default};