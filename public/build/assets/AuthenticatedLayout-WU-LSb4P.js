import{A as B}from"./ApplicationLogo-BNCXk3QB.js";import{p as L,q as D,s as M,h as m,o as n,f as d,b as t,r as l,x as b,u,i as k,y as $,a as i,w as a,n as c,z as N,c as _,j as v,d as f,t as y,g as j}from"./app-4-NH2r3V.js";const z={class:"relative"},E={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(o){const s=o;let e=L(!1);const r=p=>{e.value&&p.key==="Escape"&&(e.value=!1)};D(()=>document.addEventListener("keydown",r)),M(()=>document.removeEventListener("keydown",r));const g=m(()=>({48:"w-48"})[s.width.toString()]),S=m(()=>s.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":s.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(p,h)=>(n(),d("div",z,[t("div",{onClick:h[0]||(h[0]=w=>b(e)?e.value=!u(e):e=!u(e))},[l(p.$slots,"trigger")]),k(t("div",{class:"fixed inset-0 z-40",onClick:h[1]||(h[1]=w=>b(e)?e.value=!1:e=!1)},null,512),[[$,u(e)]]),i(N,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[k(t("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[g.value,S.value]]),style:{display:"none"},onClick:h[2]||(h[2]=w=>b(e)?e.value=!1:e=!1)},[t("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses])},[l(p.$slots,"content")],2)],2),[[$,u(e)]])]),_:3})]))}},A={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},V=["href"],C={__name:"DropdownLink",props:{href:String,as:String},setup(o){return(s,e)=>(n(),d("div",null,[o.as=="button"?(n(),d("button",A,[l(s.$slots,"default")])):o.as=="a"?(n(),d("a",{key:1,href:o.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[l(s.$slots,"default")],8,V)):(n(),_(u(v),{key:2,href:o.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[l(s.$slots,"default")]),_:3},8,["href"]))]))}},O={__name:"NavLink",props:{href:String,active:Boolean},setup(o){const s=o,e=m(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(r,g)=>(n(),_(u(v),{href:o.href,class:c(e.value)},{default:a(()=>[l(r.$slots,"default")]),_:3},8,["href","class"]))}},x={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(o){const s=o,e=m(()=>s.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(r,g)=>(n(),d("div",null,[o.as=="button"?(n(),d("button",{key:0,class:c([e.value,"w-full text-start"])},[l(r.$slots,"default")],2)):(n(),_(u(v),{key:1,href:o.href,class:c(e.value)},{default:a(()=>[l(r.$slots,"default")]),_:3},8,["href","class"]))]))}},P={class:"min-h-screen bg-gray-100"},R={class:"bg-white border-b border-gray-100"},T={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},q={class:"flex justify-between h-16"},U={class:"flex"},F={class:"shrink-0 flex items-center"},G={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},H={class:"hidden sm:flex sm:items-center sm:ms-6"},I={class:"ms-3 relative"},J={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Q=t("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),W={class:"-me-2 flex items-center sm:hidden"},X={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Y={class:"pt-2 pb-3 space-y-1"},Z={class:"pt-4 pb-1 border-t border-gray-200"},ee={class:"px-4"},te={class:"font-medium text-base text-gray-800"},se={class:"font-medium text-sm text-gray-500"},oe={class:"mt-3 space-y-1"},ae={key:0,class:"bg-white shadow"},ne={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},le={__name:"AuthenticatedLayout",setup(o){const s=L(!1);return(e,r)=>(n(),d("div",null,[t("div",P,[t("nav",R,[t("div",T,[t("div",q,[t("div",U,[t("div",F,[i(u(v),{href:e.route("dashboard")},{default:a(()=>[i(B,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),t("div",G,[i(O,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:a(()=>[f(" Dashboard ")]),_:1},8,["href","active"])])]),t("div",H,[t("div",I,[i(E,{align:"right",width:"48"},{trigger:a(()=>[t("span",J,[t("button",K,[f(y(e.$page.props.auth.user.name)+" ",1),Q])])]),content:a(()=>[i(C,{href:e.route("profile.edit")},{default:a(()=>[f(" Profile ")]),_:1},8,["href"]),i(C,{href:e.route("logout"),method:"post",as:"button"},{default:a(()=>[f(" Log Out ")]),_:1},8,["href"])]),_:1})])]),t("div",W,[t("button",{onClick:r[0]||(r[0]=g=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(n(),d("svg",X,[t("path",{class:c({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:c({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:c([{block:s.value,hidden:!s.value},"sm:hidden"])},[t("div",Y,[i(x,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:a(()=>[f(" Dashboard ")]),_:1},8,["href","active"])]),t("div",Z,[t("div",ee,[t("div",te,y(e.$page.props.auth.user.name),1),t("div",se,y(e.$page.props.auth.user.email),1)]),t("div",oe,[i(x,{href:e.route("profile.edit")},{default:a(()=>[f(" Profile ")]),_:1},8,["href"]),i(x,{href:e.route("logout"),method:"post",as:"button"},{default:a(()=>[f(" Log Out ")]),_:1},8,["href"])])])],2)]),e.$slots.header?(n(),d("header",ae,[t("div",ne,[l(e.$slots,"header")])])):j("",!0),t("main",null,[l(e.$slots,"default")])])]))}};export{le as _};
