var C=Object.defineProperty,V=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))R.call(t,a)&&_(e,a,t[a]);if(v)for(var a of v(t))S.call(t,a)&&_(e,a,t[a]);return e},u=(e,t)=>V(e,h(t));import{_ as b,a as A,u as E,i as x}from"./index.1528885c.js";import{d as T,a as B,D as q,_ as I,m as g,r as j,Q as k,b as L,h as O,i as $,f as D}from"./vendor.c2afbfeb.js";import{w as G}from"./index.146f5c80.js";const Q=T({name:"ArticlesTags",components:{VButtonRadio:B(()=>A(()=>import("./VButtonRadio.60a4ab76.js"),["assets/VButtonRadio.60a4ab76.js","assets/index.1528885c.js","assets/index.78cd5b61.css","assets/vendor.c2afbfeb.js"]))},setup(){var p;const e=q(),t=I(),a=E(),l=s=>i.value.some(o=>String(o==null?void 0:o.id)===String(s)),i=g(()=>a.getters["news/GETTER_CATEGORIES"].map(s=>u(c({},s),{id:String(s.id)}))),m=g(()=>a.state.news.IS_LOADING),r=j(String((p=e.query)==null?void 0:p.category)),d=()=>{var n;const s=l(r.value)?r.value:(n=i.value[0])==null?void 0:n.id;t.push(u(c({},e),{query:u(c({},e.query),{category:s})}))};k(()=>r.value,()=>{d()}),G(()=>m.value,()=>{var o;const s=String((o=e.query)==null?void 0:o.category);(l(s)?s:i.value[0].id)&&(r.value=s)});const w=g(()=>{var o;const s=new Set;return(((o=a.state.news)==null?void 0:o.ARTICLES)||[]).reduce((y,f)=>(s.size!==s.add(f.category.id).size&&y.push(f.category),y),[{id:0,title:x.global.t("All")}])});return{category:r,articleCategories:w}}}),z={class:"tw-flex tw-flex-wrap tw-gap-6 tw-text-sm"};function N(e,t,a,l,i,m){const r=L("VButtonRadio");return D(),O("div",z,[$(r,{modelValue:e.category,"onUpdate:modelValue":t[0]||(t[0]=d=>e.category=d),items:e.articleCategories,"key-value":"id","key-label":"title",theme:"blue","active-class":"tw-bg-white tw-text-orange-1 active-class","inactive-class":"inactive-class"},null,8,["modelValue","items"])])}var K=b(Q,[["render",N]]);export{K as default};
