import{d as m,o as p,E as v,q as u,r as y,b as _,h as t,j as s,i as g,F as x,x as h,k as w,t as A}from"./vendor.4cfaf0ae.js";import C from"./ArticleCard.d6cce43d.js";import{_ as S,b,u as k}from"./index.73c38149.js";import"./dateFormat.916debed.js";const I=m({name:"Articles",components:{ArticleCard:C,VIconSpinner:b},emits:["ready"],setup(r,{emit:i}){p(()=>i("ready"));const o=k(),c=v(),n=u(()=>{var e;return String((e=c.query)==null?void 0:e.category)}),d=u(()=>{const{news:e}=o.state;return(e==null?void 0:e.ARTICLES)?e.ARTICLES.filter(f=>+n.value?String(f.id)===n.value:!0):[]}),a=y(!1);return p(async()=>{a.value=!0;try{await o.dispatch("news/GET_ARTICLES")}catch(e){console.error({err:e})}finally{a.value=!1}}),{isLoading:a,articles:d}}}),j={class:"px-16px-48px-80px tw-pt-20 xl:tw-pt-24 xl:tw-pb-30 tw-pb-40"},E={key:0,class:"max-layout-width-overflow-auto tw-flex tw-flex-wrap tw-gap-10 tw-justify-start"},L={key:1,class:"tw-flex tw-items-center tw-justify-center"},V={key:2};function $(r,i,o,c,n,d){const a=_("ArticleCard"),l=_("VIconSpinner");return t(),s("div",null,[g("section",j,[r.articles.length?(t(),s("div",E,[(t(!0),s(x,null,h(r.articles,e=>(t(),s("div",{key:e.id,class:"md:tw-basis-[400px] tw-max-w-[555px] tw-grow-1 tw-shrink-1 tw-w-full"},[w(a,{id:e.id,img:e.cover,date:e.publish_at,title:e.title},null,8,["id","img","date","title"])]))),128))])):r.isLoading?(t(),s("div",L,[w(l,{class:"tw-h-20",spin:""})])):(t(),s("div",V,A(r.$t("We have no articles in the selected category")),1))])])}var F=S(I,[["render",$],["__scopeId","data-v-e18d9b0a"]]);export{F as default};
