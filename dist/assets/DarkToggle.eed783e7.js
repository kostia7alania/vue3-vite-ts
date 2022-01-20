import{_ as n}from"./index.592c1b2a.js";import{d,r as i,o as c,h as r,g as l,n as w,f as s}from"./vendor.c2afbfeb.js";const m=()=>{if(window==null?void 0:window.localStorage){const e=window.localStorage.getItem("color-theme");if(e==="tw-light"||e==="tw-dark")return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"tw-dark"}return"tw-light"},h=d({name:"DarkToggle",setup(){const e=i(m()),t=o=>{const a=window.document.documentElement;a.classList.remove("tw-light"),a.classList.remove("tw-dark"),a.classList.add(o),localStorage.setItem("color-theme",o),e.value=o};return c(()=>{t(e.value)}),{colorTheme:e,setColorTheme:t}}}),u={key:0,stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 20 20",class:"tw-text-secondary tw-text-2xl tw-cursor-pointer",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},v=l("path",{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"},null,-1),g=[v],f={key:1,stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 20 20",class:"tw-text-secondary tw-text-2xl tw-cursor-pointer",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},p=l("path",{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"},null,-1),z=[p];function k(e,t,o,a,_,M){return s(),r("div",{class:w(["tw-transition tw-duration-500 tw-ease-out-in tw-rounded-full tw-p-1",{"hover:tw-text-yellow-400":e.colorTheme==="tw-dark","hover:tw-text-blue-400":e.colorTheme==="tw-light"}])},[l("button",{class:"tw-rounded-md tw-p-2 tw-bg-secondary",onClick:t[0]||(t[0]=x=>e.setColorTheme(e.colorTheme==="tw-light"?"tw-dark":"tw-light"))},[e.colorTheme==="tw-dark"?(s(),r("svg",u,g)):(s(),r("svg",f,z))])],2)}var b=n(h,[["render",k]]);export{b as default};