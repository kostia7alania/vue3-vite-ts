import{_ as h,b as y,a as A,u as k}from"./index.4dfcff3e.js";import{u as v,b as C}from"./index.414f0cbf.js";import{C as S}from"./CardsSwiper.a32c7779.js";import{d as b,a as L,q as E,r as T,o as j,b as n,h as s,j as r,i as x,t as m,F as V,x as u,f as _,aq as I,g as $,k as f}from"./vendor.4cfaf0ae.js";import"./index.edd7962f.js";const B=b({name:"LatestArticles",components:{CardsSwiper:S,VIconSpinner:y,ArticleCard:L(()=>A(()=>import("./ArticleCard.96e79401.js"),["assets/ArticleCard.96e79401.js","assets/index.4dfcff3e.js","assets/index.4162d115.css","assets/vendor.4cfaf0ae.js","assets/dateFormat.916debed.js"]))},props:{title:{type:String,default:""},category:{type:String,default:""}},setup(e){const c=v(C).smaller("lg"),o=k(),l=3,d=E(()=>o.getters["news/GETTER_LATEST_ARTICLES"]({count:l,category:e.category})||{}),a=T(!1);return j(async()=>{a.value=!0;try{await o.dispatch("news/GET_ARTICLES")}catch(i){console.error({err:i})}finally{a.value=!1}}),{md:c,isLoading:a,latestArticles:d}}}),N={class:"max-layout-width"},R={class:"topic-title max-w-400px my-120-80"},q={key:0},D={key:0,class:"gap-40px-16px tw-flex"},F={key:1,class:"tw-flex tw-items-center tw-justify-center"},G={key:2};function O(e,w,c,o,l,d){const a=n("ArticleCard"),p=n("CardsSwiper"),i=n("VIconSpinner");return s(),r("div",N,[x("h2",R,m(e.title?e.title:e.$t("Our latest articles")),1),e.latestArticles.length?(s(),r("div",q,[e.md?(s(),_(p,{key:1},I({_:2},[u(e.latestArticles,(t,g)=>({name:g,fn:$(()=>[f(a,{id:t.id,class:"article-card-swiper",img:t.cover,date:t.publish_at,title:t.title},null,8,["id","img","date","title"])])}))]),1024)):(s(),r("div",D,[(s(!0),r(V,null,u(e.latestArticles,t=>(s(),_(a,{id:t.id,key:t.id,img:t.cover,date:t.publish_at,title:t.title,class:"md:tw-basis-[400px] tw-grow-1 tw-shrink-1"},null,8,["id","img","date","title"]))),128))]))])):e.isLoading?(s(),r("div",F,[f(i,{class:"tw-h-20",spin:""})])):(s(),r("div",G,m(e.$t("We have no latest articles at the time")),1))])}var J=h(B,[["render",O]]);export{J as default};