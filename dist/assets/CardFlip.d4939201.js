import{_ as l,a as d}from"./index.1c6de4f9.js";import{u as p,b as c}from"./index.b5159072.js";import{d as u,a as _,r as f,b as w,h as a,j as n,i as s,p as o,k as v,n as m}from"./vendor.2a0c6659.js";import"./index.7c7c4081.js";const b=u({name:"CardFlip",components:{CirclePlus:_(()=>d(()=>import("./circle-plus.2f272852.js"),["assets/circle-plus.2f272852.js","assets/vendor.2a0c6659.js"]))},props:{isMobile:{type:Boolean,default:!1}},setup(){const e=f(!1),r=p(c).smaller("lg");return{isOpen:e,smallerSm:r}}}),k={key:0,class:"flip-card tw-group tw-h-full tw-w-full"},h={class:"flip-card-inner"},C={class:"flip-card-front group-hover:tw-hidden group-hover:tw-z-0 tw-transition-all tw-relative"},g={class:"flip-card-back tw-hidden group-hover:tw-block group-hover:tw-z-30 tw-relative tw-transition-all"},$={key:1,class:"tw-relative"};function O(e,t,r,j,y,F){const i=w("CirclePlus");return e.smallerSm?(a(),n("div",$,[o(e.$slots,e.isOpen?"back":"front",{},void 0,!0),s("button",{class:"tw-absolute tw-text-[#FDFDFD] tw-bottom-8 tw-right-7 tw-z-30 tw-transition-all",onClick:t[0]||(t[0]=B=>e.isOpen=!e.isOpen)},[v(i,{class:m(["tw-transition-all",{"tw-w-12  tw-rotate-45":e.isOpen,"tw-w-14":!e.isOpen}])},null,8,["class"])])])):(a(),n("div",k,[s("div",h,[s("div",C,[o(e.$slots,"front",{},void 0,!0)]),s("div",g,[o(e.$slots,"back",{},void 0,!0)])])]))}var S=l(b,[["render",O],["__scopeId","data-v-f5f1cd6e"]]);export{S as default};