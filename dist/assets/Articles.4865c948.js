import{d as w,o as p,E as v,q as u,r as y,b as _,h as t,j as s,i as g,F as h,x,k as f}from"./vendor.2a0c6659.js";import A from"./ArticleCard.cea632fa.js";import{_ as C,b as k,u as I}from"./index.1c6de4f9.js";import"./dateFormat.916debed.js";const S=w({name:"Articles",components:{ArticleCard:A,VIconSpinner:k},emits:["ready"],setup(n,{emit:i}){p(()=>i("ready"));const a=I(),c=v(),o=u(()=>{var e;return String((e=c.query)==null?void 0:e.category)}),d=u(()=>{const{news:e}=a.state;return(e==null?void 0:e.ARTICLES)?e.ARTICLES.filter(m=>+o.value?String(m.id)===o.value:!0):[]}),r=y(!1);return p(async()=>{r.value=!0;try{await a.dispatch("news/GET_ARTICLES")}catch(e){console.error({err:e})}finally{r.value=!1}}),{isLoading:r,articles:d}}}),b={class:"px-16px-48px-80px tw-pt-20 xl:tw-pt-24 xl:tw-pb-30 tw-pb-40"},j={key:0,class:"tw-flex tw-flex-wrap tw-gap-10 tw-justify-start"},E={key:1,class:"tw-flex tw-items-center tw-justify-center"},L={key:2};function V(n,i,a,c,o,d){const r=_("ArticleCard"),l=_("VIconSpinner");return t(),s("div",null,[g("section",b,[n.articles.length?(t(),s("div",j,[(t(!0),s(h,null,x(n.articles,e=>(t(),s("div",{key:e.id,class:"md:tw-basis-[400px] tw-grow-1 tw-shrink-1"},[f(r,{id:e.id,img:e.cover,date:e.publish_at,title:e.title},null,8,["id","img","date","title"])]))),128))])):n.isLoading?(t(),s("div",E,[f(l,{class:"tw-h-20",spin:""})])):(t(),s("div",L,"We have no articles in the selected category"))])])}var B=C(S,[["render",V],["__scopeId","data-v-596da8cc"]]);export{B as default};