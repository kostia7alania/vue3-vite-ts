import{d as l,r as a,h as u,j as w,i as e,w as i,ao as r}from"./vendor.4cfaf0ae.js";import{_ as m,s as f}from"./index.923f7f02.js";const c=l({name:"Login",setup(){const s=a({}),t=a(!1);return{form:s,submit:async()=>{t.value=!0;try{await f.dispatch("auth/LOGIN",s.value)}catch(n){console.log({e:n})}finally{t.value=!1}},isLoading:t}}}),p={class:"tw-flex tw-justify-center tw-items-center tw-h-96"},v={class:"sm:tw-w-60"},b={class:"tw-mt-10"},g=e("div",null,"Username or email",-1),h=e("div",null,"Password",-1),_={class:"tw-mt-4"},L=["disabled"];function y(s,t,d,n,j,k){return u(),w("div",p,[e("div",v,[e("div",b,[g,i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.username=o),class:"tw-w-full tw-border-2 tw-border-indigo-100"},null,512),[[r,s.form.username]])]),e("div",null,[h,i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.password=o),class:"tw-w-full tw-border-2 tw-border-indigo-100"},null,512),[[r,s.form.password]])]),e("div",_,[e("button",{disabled:s.isLoading,class:"tw-py-3 tw-w-full tw-rounded-md tw-bg-green-500 hover:tw-bg-red-100 tw-text-white hover:tw-text-black",onClick:t[2]||(t[2]=(...o)=>s.submit&&s.submit(...o))},"Login",8,L)])])])}var U=m(c,[["render",y]]);export{U as default};