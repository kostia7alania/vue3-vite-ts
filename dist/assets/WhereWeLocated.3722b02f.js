import{u as m,b as h}from"./index.180da753.js";import{_,u as f}from"./index.22206648.js";import{d as v,r as x,o as g,f as a,h as o,g as t,t as s,j as r,F as b,s as k,q as u,n as y,y as $,z as L}from"./vendor.c2afbfeb.js";import"./index.146f5c80.js";var T="/assets/world-map.de415752.png";const j=v({name:"WhereWeLocated",setup(){const d=m(h).smaller("sm"),i=x(["Estonia","Latvia","Lithuania","Finland","Poland","Ukraine","Romania","Moldova","Russia","Belarus","Serbia","Slovakia","Bulgaria","North Macedonia","Denmark"]),l=f();return g(async()=>{i.value=(await l.dispatch("countries/GET_COUNTRIES")).map(n=>n.title).filter(n=>n.toLowerCase()!=="international")}),{sm:d,countries:i}}}),C=e=>($("data-v-34b156b7"),e=e(),L(),e),S={class:"px-16px-48px-80px tw-flex tw-justify-between tw-flex-wrap xl:tw-flex-nowrap tw-gap-10 tw-relative tw-z-10"},W={class:"tw-flex-1 tw-basis-1/2"},B=["innerHTML"],M={class:"mt-16px-24px-24px topic-description"},A={class:"tw-mt-2"},E={class:"tw-text-orange-1"},I={key:0},N={key:1},U={class:"tw-text-orange-1"},V={class:"tw-text-orange-1"},z=r(". "),F={class:"tw-mt-2"},R=C(()=>t("div",{class:"tw-flex tw-basis-1/2 tw-flex-1 tw-mt-10 xl:tw-mt-0 xl:tw--translate-y-7"},[t("img",{src:T,class:"world-map tw-w-full tw-translate-x-20"})],-1));function q(e,d,i,l,w,n){return a(),o("section",{class:y(["tw-relative bg-where-we-located",{"bg-where-we-located-xl":!e.sm,"bg-where-we-located-sm":e.sm}])},[t("div",S,[t("div",W,[t("h2",{class:"topic-title tw-max-w-[380px]",innerHTML:e.$t("Where we are located")},null,8,B),t("div",M,[t("div",null,s(e.$t("OU Primeligt was founded in 2012 and has been in continuous operation for more than 9 years")),1),t("div",A,[r(s(e.$t("The companys corporate headquarters are located"))+" ",1),(a(!0),o(b,null,k(e.countries,(c,p)=>(a(),o("span",{key:c},[t("span",E,s(c),1),p<e.countries.length-2?(a(),o("span",I,", \xA0")):u("",!0),p===e.countries.length-2?(a(),o("span",N,"\xA0and\xA0")):u("",!0)]))),128)),r(" "+s(e.$t("with a sales offices in the"))+" ",1),t("span",U,s(e.$t("United Kingdom")),1),r(" "+s(e.$t("and"))+" ",1),t("span",V,s(e.$t("Turkey")),1),z]),t("div",F,s(e.$t("Most of our projects come from an international mindset and have ensured successful cooperation with clients in Europe Asia and Africa")),1)])]),R])],2)}var G=_(j,[["render",q],["__scopeId","data-v-34b156b7"]]);export{G as default};
