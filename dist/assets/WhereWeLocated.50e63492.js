import{u as m,b as h}from"./index.414f0cbf.js";import{_ as f,u as _}from"./index.fc97ee48.js";import{d as x,r as v,o as g,h as a,j as o,i as t,t as s,l as i,F as b,x as k,s as u,n as y,z as $,A as L}from"./vendor.4cfaf0ae.js";import"./index.edd7962f.js";var T="/assets/world-map.1d160d42.png";const j=x({name:"WhereWeLocated",setup(){const d=m(h).smaller("sm"),r=v(["Estonia","Latvia","Lithuania","Finland","Poland","Ukraine","Romania","Moldova","Russia","Belarus","Serbia","Slovakia","Bulgaria","North Macedonia","Denmark"]),l=_();return g(async()=>{r.value=(await l.dispatch("countries/GET_COUNTRIES")).map(n=>n.title).filter(n=>n.toLowerCase()!=="international")}),{sm:d,countries:r}}}),C=e=>($("data-v-32bbf6f4"),e=e(),L(),e),S={class:"max-layout-width-overflow-auto px-16px-48px-80px tw-flex tw-justify-between tw-flex-wrap xl:tw-flex-nowrap tw-gap-10 tw-relative tw-z-10"},W={class:"tw-flex-1 tw-basis-1/2"},A=["innerHTML"],B={class:"mt-16px-24px-24px topic-description"},M={class:"tw-mt-2"},E={class:"tw-text-orange-1"},I={key:0},N={key:1},U={class:"tw-text-orange-1"},V={class:"tw-text-orange-1"},z=i(". "),F={class:"tw-mt-2"},R=C(()=>t("div",{class:"tw-flex tw-basis-1/2 tw-flex-1 tw-mt-10 xl:tw-mt-0 xl:tw--translate-y-7"},[t("img",{src:T,class:"world-map tw-w-full tw-translate-x-40"})],-1));function D(e,d,r,l,w,n){return a(),o("section",{class:y(["tw-relative bg-where-we-located",{"bg-where-we-located-xl":!e.sm,"bg-where-we-located-sm":e.sm}])},[t("div",S,[t("div",W,[t("h2",{class:"topic-title tw-max-w-[380px]",innerHTML:e.$t("Where we are located")},null,8,A),t("div",B,[t("div",null,s(e.$t("OU Primeligt was founded in 2012 and has been in continuous operation for more than 9 years")),1),t("div",M,[i(s(e.$t("The companys corporate headquarters are located"))+" ",1),(a(!0),o(b,null,k(e.countries,(c,p)=>(a(),o("span",{key:c},[t("span",E,s(c),1),p<e.countries.length-2?(a(),o("span",I,", \xA0")):u("",!0),p===e.countries.length-2?(a(),o("span",N,"\xA0and\xA0")):u("",!0)]))),128)),i(" "+s(e.$t("with a sales offices in the"))+" ",1),t("span",U,s(e.$t("United Kingdom")),1),i(" "+s(e.$t("and"))+" ",1),t("span",V,s(e.$t("Turkey")),1),z]),t("div",F,s(e.$t("Most of our projects come from an international mindset and have ensured successful cooperation with clients in Europe Asia and Africa")),1)])]),R])],2)}var G=f(j,[["render",D],["__scopeId","data-v-32bbf6f4"]]);export{G as default};
