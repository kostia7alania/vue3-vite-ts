var w=Object.defineProperty,V=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,n=(e,t)=>{for(var s in t||(t={}))R.call(t,s)&&_(e,s,t[s]);if(v)for(var s of v(t))E.call(t,s)&&_(e,s,t[s]);return e},i=(e,t)=>V(e,C(t));import{_ as S,a as h,u as A,i as T}from"./index.826f1d2f.js";import{d as b,a as q,E as x,aq as B,q as f,r as k,Y as j,b as $,j as I,k as z,h as G}from"./vendor.7852c38b.js";const L=b({name:"ArticlesTags",components:{VButtonRadio:q(()=>h(()=>import("./VButtonRadio.18a2e529.js"),["assets/VButtonRadio.18a2e529.js","assets/index.826f1d2f.js","assets/index.0311fed1.css","assets/vendor.7852c38b.js"]))},setup(){var p;const e=x(),t=B(),s=A(),m=a=>u.value.some(o=>String(o==null?void 0:o.id)===String(a)),u=f(()=>s.getters["news/GETTER_CATEGORIES"].map(a=>i(n({},a),{id:String(a.id)}))),r=k(String(((p=e.query)==null?void 0:p.category)||0)),l=()=>{var c;const a=m(r.value)?r.value:(c=u.value[0])==null?void 0:c.id;t.push(i(n({},e),{query:i(n({},e.query),{category:a})}))};j(()=>r.value,()=>{l()});const d=f(()=>{var o;const a=new Set;return(((o=s.state.news)==null?void 0:o.ARTICLES)||[]).reduce((y,g)=>(a.size!==a.add(g.category.id).size&&y.push(i(n({},g.category),{id:String(g.category.id)})),y),[{id:"0",title:T.global.t("All")}])});return{category:r,articleCategories:d}}}),O={class:"tw-flex tw-flex-wrap tw-gap-6 tw-text-sm"};function P(e,t,s,m,u,r){const l=$("VButtonRadio");return G(),I("div",O,[z(l,{modelValue:e.category,"onUpdate:modelValue":t[0]||(t[0]=d=>e.category=d),items:e.articleCategories,"key-value":"id","key-label":"title",theme:"blue","active-class":"tw-bg-white tw-text-orange-1 active-class","inactive-class":"inactive-class"},null,8,["modelValue","items"])])}var U=S(L,[["render",P]]);export{U as default};
