import{_ as h,b as A,a as v,u as C}from"./index.22206648.js";import{u as g,b as k}from"./index.180da753.js";import{C as y}from"./CardsSwiper.d8ad6e37.js";import{d as b,a as S,m as x,r as L,o as E,b as c,f as t,h as a,F as T,s as m,e as _,$ as j,w as V,i as u,g as I}from"./vendor.c2afbfeb.js";import"./index.146f5c80.js";const B=b({name:"LatestArticles",components:{CardsSwiper:y,VIconSpinner:A,ArticleCard:S(()=>v(()=>import("./ArticleCard.2fdae786.js"),["assets/ArticleCard.2fdae786.js","assets/index.22206648.js","assets/index.8ae7c267.css","assets/vendor.c2afbfeb.js","assets/dateFormat.916debed.js"]))},setup(){const d=g(k).smaller("sm"),r=C(),l=3,p=x(()=>r.getters["news/GETTER_LATEST_ARTICLES"](l)||{}),n=L(!1);return E(async()=>{n.value=!0;try{await r.dispatch("news/GET_ARTICLES")}catch(i){console.error({err:i})}finally{n.value=!1}}),{sm:d,isLoading:n,latestArticles:p}}}),$=I("h2",{class:"topic-title max-w-400px my-120-80"},"Our latest articles",-1),N={key:0},R={key:0,class:"gap-40px-16px tw-flex"},F={key:1,class:"tw-flex tw-items-center tw-justify-center"},G={key:2};function O(s,d,r,l,p,n){const o=c("ArticleCard"),i=c("CardsSwiper"),f=c("VIconSpinner");return t(),a("div",null,[$,s.latestArticles.length?(t(),a("div",N,[s.sm?(t(),_(i,{key:1},j({_:2},[m(s.latestArticles,(e,w)=>({name:w,fn:V(()=>[u(o,{id:e.id,class:"article-card-swiper",img:e.cover,date:e.publish_at,title:e.title},null,8,["id","img","date","title"])])}))]),1024)):(t(),a("div",R,[(t(!0),a(T,null,m(s.latestArticles,e=>(t(),_(o,{id:e.id,key:e.id,img:e.cover,date:e.publish_at,title:e.title,class:"md:tw-basis-[400px] tw-grow-1 tw-shrink-1"},null,8,["id","img","date","title"]))),128))]))])):s.isLoading?(t(),a("div",F,[u(f,{class:"tw-h-20",spin:""})])):(t(),a("div",G,"We have no latest articles at the time"))])}var z=h(B,[["render",O]]);export{z as default};
