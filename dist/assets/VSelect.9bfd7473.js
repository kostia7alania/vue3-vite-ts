import{_ as w}from"./index.22206648.js";import{d as f,f as o,h as s,g as y,t as u,F as b,s as g,A as h,B as k}from"./vendor.c2afbfeb.js";const m=f({name:"VSelect",inheritAttrs:!1,props:{modelValue:{type:[Number,String,Object],default:void 0},items:{type:Array,default:()=>[]},keyValue:{type:String,default:void 0},keyLabel:{type:String,default:void 0},placeholder:{type:null,default:void 0}},setup(e,{emit:r}){return{changeHandler:a=>{var d;const{keyValue:l}=e,t=((d=a==null?void 0:a.target)==null?void 0:d.selectedIndex)-1,n=e.items[t],p=l?n[l]:n;r("update:model-value",p)},checkIsSelected:a=>{const{keyValue:l,modelValue:t}=e;return l?a[l]===t:a===t}}}}),V=["aria-label","placeholder"],S={value:"",disabled:"",selected:""},v=["value","selected"];function $(e,r,c,i,a,l){return o(),s("select",h({class:"tw-form-select tw-appearance-none tw-block tw-w-full tw-rounded-2xl tw-px-6 tw-py-4 tw-text-base tw-font-normal tw-text-gray-2 tw-bg-white tw-bg-clip-padding tw-bg-no-repeat tw-border tw-border-solid tw-border-gray-3 tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 tw-focus:bg-white focus:tw-border-blue-600 focus:tw-outline-none","aria-label":e.placeholder,placeholder:e.placeholder},e.$attrs,k(e.$attrs),{onChange:r[0]||(r[0]=t=>e.changeHandler(t))}),[y("option",S,u(e.placeholder),1),(o(!0),s(b,null,g(e.items,t=>(o(),s("option",{key:e.keyValue?t[e.keyValue]:t,value:e.keyValue?t[e.keyValue]:t,selected:e.checkIsSelected(t)},u(e.keyLabel?t[e.keyLabel]:t),9,v))),128))],16,V)}var I=w(m,[["render",$]]);export{I as default};
