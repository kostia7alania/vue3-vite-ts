import{_ as p}from"./index.22206648.js";import{d as m,r as g,W as b,f as a,h as w,g as t,j as h,t as C,q as x,l as v}from"./vendor.c2afbfeb.js";const y=m({name:"VFilePicker",props:{modelValue:{type:null,default:void 0},label:{type:String,default:""},accept:{type:null,default:void 0}},emits:["update:modelValue"],setup(e,{emit:o}){var l;const r=g(null),i=`${(l=b())==null?void 0:l.uid}`,n=s=>{var d,c;const f=((c=(d=s==null?void 0:s.target)==null?void 0:d.files)==null?void 0:c[0])||void 0;r.value.value="",o("update:modelValue",f)};return{uid:i,changeHandler:n,remove:()=>{n(null)},formFile:r}}}),_={class:"tw-flex tw-justify-center tw-items-center tw-gap-3 lg:tw-gap-10 tw-flex-col lg:tw-flex-row"},L=["accept"],V={key:0,class:"truncate tw-form-label tw-w-full tw-flex tw-flex-1 tw-items-center tw-text-center tw-p-2 tw-h-16 tw-font-semibold tw-rounded-2xl tw-border-2 tw-text-white tw-bg-orange-1 tw-border-orange-1 tw-relative"},k={class:"tw-absolute tw-right-0 tw-z-10 tw-bg-orange-1 tw-pr-6 tw-pl-2 tw-py-1"},F={class:"tw-text-2xl tw-text-white hover:tw-text-black tw-cursor-pointer"},$=t("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{class:"tw-fill-current","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.292787 1.29299C0.480314 1.10552 0.734622 1.0002 0.999786 1.0002C1.26495 1.0002 1.51926 1.10552 1.70679 1.29299L5.99979 5.58599L10.2928 1.29299C10.385 1.19748 10.4954 1.1213 10.6174 1.06889C10.7394 1.01648 10.8706 0.988893 11.0034 0.987739C11.1362 0.986585 11.2678 1.01189 11.3907 1.06217C11.5136 1.11245 11.6253 1.1867 11.7192 1.28059C11.8131 1.37449 11.8873 1.48614 11.9376 1.60904C11.9879 1.73193 12.0132 1.86361 12.012 1.99639C12.0109 2.12917 11.9833 2.26039 11.9309 2.38239C11.8785 2.5044 11.8023 2.61474 11.7068 2.70699L7.41379 6.99999L11.7068 11.293C11.8889 11.4816 11.9897 11.7342 11.9875 11.9964C11.9852 12.2586 11.88 12.5094 11.6946 12.6948C11.5092 12.8802 11.2584 12.9854 10.9962 12.9877C10.734 12.9899 10.4814 12.8891 10.2928 12.707L5.99979 8.41399L1.70679 12.707C1.51818 12.8891 1.26558 12.9899 1.00339 12.9877C0.741188 12.9854 0.490376 12.8802 0.304968 12.6948C0.11956 12.5094 0.0143906 12.2586 0.0121121 11.9964C0.00983372 11.7342 0.110629 11.4816 0.292787 11.293L4.58579 6.99999L0.292787 2.70699C0.105316 2.51946 0 2.26515 0 1.99999C0 1.73483 0.105316 1.48052 0.292787 1.29299Z"})],-1),j=[$],H={for:"formFile",class:"tw-form-label tw-w-full tw-flex tw-flex-1 tw-items-center tw-justify-center tw-text-center tw-cursor-pointer tw-p-2 tw-h-16 tw-font-semibold tw-rounded-2xl tw-border-2 tw-text-orange-1 tw-border-orange-1"},B=["innerHTML"];function M(e,o,r,i,n,u){return a(),w("div",_,[t("input",{id:"formFile",ref:"formFile",class:"form-control tw-hidden tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-blue-600 focus:tw-outline-none",type:"file",accept:e.accept,onChange:o[0]||(o[0]=(...l)=>e.changeHandler&&e.changeHandler(...l))},null,40,L),e.modelValue?(a(),w("div",V,[h(C(e.modelValue.name)+" ",1),t("span",k,[t("span",F,[t("button",{onClick:o[1]||(o[1]=(...l)=>e.remove&&e.remove(...l))},j)])])])):x("",!0),t("label",H,[e.label?(a(),w("span",{key:0,innerHTML:e.label},null,8,B)):v(e.$slots,"default",{key:1})])])}var T=p(y,[["render",M]]);export{T as default};
