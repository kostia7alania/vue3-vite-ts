import{_,a as u}from"./index.592c1b2a.js";import{u as y,b as C}from"./index.180da753.js";import{C as S}from"./CardsSwiper.275fde8f.js";import A from"./VIcon.f0f19f56.js";import{d as g,b as o,f as p,h as f,i as e,g as i,t as a,a as w,o as j,n as h,e as I,w as v}from"./vendor.c2afbfeb.js";import"./index.146f5c80.js";const P=g({name:"HelpColumn",components:{VIcon:A},props:{title:{type:[Number,String],default:""},description:{type:[Number,String],default:""},icon:{type:String,default:""}}}),O={class:"tw-bg-white tw-p-2"},W={class:"card-info__content tw-pt-4 md:tw-pt-6"},k={class:"topic-title-28px"},D={class:"tw-flex tw-items-center tw-text-gray-2 tw-font-medium tw-pt-2 md:tw-pt-3"};function V(t,c,r,d,m,$){const l=o("VIcon");return p(),f("div",O,[e(l,{icon:t.icon,class:"h-80px-92px-92px"},null,8,["icon"]),i("div",W,[i("div",k,a(t.title),1),i("div",D,a(t.description),1)])])}var z=_(P,[["render",V]]);const H=g({name:"Services2",components:{CardsSwiper:S,HelpColumn:z,CardInfoDynamicHorizontal:w(()=>u(()=>import("./CardInfoDynamicHorizontal.ff83bfcc.js"),["assets/CardInfoDynamicHorizontal.ff83bfcc.js","assets/index.592c1b2a.js","assets/index.78cd5b61.css","assets/vendor.c2afbfeb.js"])),Cooperation:w(()=>u(()=>import("./Cooperation.3a92f72f.js"),["assets/Cooperation.3a92f72f.js","assets/Cooperation.02a64977.css","assets/index.592c1b2a.js","assets/index.78cd5b61.css","assets/vendor.c2afbfeb.js","assets/index.180da753.js","assets/index.146f5c80.js"])),ArticleCardOld:w(()=>u(()=>import("./ArticleCardOld.cec0c3a0.js"),["assets/ArticleCardOld.cec0c3a0.js","assets/index.592c1b2a.js","assets/index.78cd5b61.css","assets/vendor.c2afbfeb.js","assets/students-and-graduates.3a2ef069.js"]))},emits:["ready"],setup(t,{emit:c}){const r=y(C),d=r.smaller("xl"),m=r.smaller("sm");return j(()=>c("ready")),{smallerXl:d,sm:m}}}),E={class:"my-80px-104px-120px px-16px-48px-80px"},U={class:"md:tw-text-center"},B={class:"topic-title"},N={class:"mt-60px-80px-80px"},R={class:"gap-40px-60px-40px tw-flex tw-flex-col tw-flex-wrap xl:tw-flex-row"},T={class:"topic-title md:tw-mb-20 lg:tw-mb-0"},X={class:"mt-0-80px-80px gap-40px-48px-0 md:tw-bg-white tw-rounded-4xl tw-pt-15 md:tw-pt-8 tw-flex tw-flex-col"},L={class:"my-160px-240px-240px px-16px-48px-80px"},F={class:"my-160px-240px-240px px-16px-48px-80px"},G={class:"topic-title max-w-400px my-120-80"},M={key:0,class:"gap-40px-16px tw-flex"};function q(t,c,r,d,m,$){const l=o("HelpColumn"),s=o("CardInfoDynamicHorizontal"),x=o("Cooperation"),n=o("ArticleCardOld"),b=o("CardsSwiper");return p(),f("div",null,[i("section",E,[i("div",U,[i("h2",B,a(t.$t("We help"))+":",1)]),i("div",N,[i("div",R,[e(l,{class:"tw-flex-1 min-w-400px tw-rounded-4xl",title:t.$t("Corporations"),description:t.$t("We assist companies in various industries such as telecommunications"),icon:"circle-users"},null,8,["title","description"]),e(l,{class:"tw-flex-1 min-w-400px tw-rounded-4xl",title:t.$t("Start-up companies"),description:t.$t("We support start -ups and small companies involved in different industries"),icon:"circle-startup"},null,8,["title","description"]),e(l,{class:"tw-flex-1 min-w-400px tw-rounded-4xl",title:t.$t("Government organizations"),description:t.$t("We provide services for government"),icon:"circle-government"},null,8,["title","description"])])])]),i("section",{class:h(["px-16px-48px-80px tw-relative tw-bg-gray-4",{"bg-services-we-provide-top__sm":t.smallerXl,"bg-services-we-provide-top__xl":!t.smallerXl}])},[i("div",{class:h(["py-80px-120px-120px",{"bg-services-we-provide-bottom__sm":t.smallerXl}])},[i("div",T,a(t.$t("Our Services")),1),i("div",X,[e(s,{title:t.$t("Strategy"),description:t.$t("Our consultants advise organizations on high-level decisions in strategic planning"),icon:"circle-strategy"},null,8,["title","description"]),e(s,{title:t.$t("Innovation"),description:t.$t("We help making future by being in the whole innovation value chain from helping clients innovate to evaluating"),icon:"circle-innovation"},null,8,["title","description"]),e(s,{title:t.$t("Funding"),description:t.$t("We help clients to choose the right funding opportunities"),icon:"circle-funding"},null,8,["title","description"]),e(s,{title:t.$t("Research"),description:t.$t("We collect and analyze external and internal information"),icon:"circle-research"},null,8,["title","description"]),e(s,{title:t.$t("Implementation"),description:t.$t("We help our clients to become more competitive"),icon:"circle-implementation"},null,8,["title","description"]),e(s,{title:t.$t("Digital"),description:t.$t("We provide support and assistance at all stages of the project implementation"),icon:"circle-digital"},null,8,["title","description"]),e(s,{title:t.$t("Sustainability"),description:t.$t("We ensure our clients stability in all daily operations in a strategic"),icon:"circle-sustainability"},null,8,["title","description"])])],2)],2),i("section",L,[e(x,{title:t.$t("Interested In cooperation")},null,8,["title"])]),i("section",F,[i("h2",G,a(t.$t("Case studies")),1),t.sm?(p(),I(b,{key:1},{test1:v(()=>[e(n,{class:"article-card-swiper",date:"2021-10-11",title:t.$t("Poland-based SAS Advisors is joining OU Primelight")},null,8,["title"])]),test2:v(()=>[e(n,{class:"article-card-swiper",date:"2021-10-12",title:t.$t("Poland-based SAS Advisors is joining OU Primelight")},null,8,["title"])]),test3:v(()=>[e(n,{class:"article-card-swiper",date:"2021-10-13",title:t.$t("Poland-based SAS Advisors is joining OU Primelight")},null,8,["title"])]),_:1})):(p(),f("div",M,[e(n,{class:"tw-w-full tw-basis-full",date:"2021-10-11",title:t.$t("Poland-based SAS Advisors is joining OU Primelight")},null,8,["title"]),e(n,{class:"tw-w-full tw-basis-full",date:"2021-10-12",title:t.$t("Poland-based SAS Advisors is joining OU Primelight")},null,8,["title"]),e(n,{class:"tw-w-full tw-basis-full",date:"2021-10-13",title:t.$t("Poland-based SAS Advisors is joining OU Primelight")},null,8,["title"])]))])])}var et=_(H,[["render",q],["__scopeId","data-v-386531e7"]]);export{et as default};
