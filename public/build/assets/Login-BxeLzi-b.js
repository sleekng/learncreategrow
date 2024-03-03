import{h as k,i as y,v,o as m,f as w,T as x,c as u,w as d,a,u as s,Z as V,t as $,g as p,b as r,j as B,d as f,n as C,e as N}from"./app-D6KfVlxn.js";import{_ as S}from"./GuestLayout-CQBZ6tjG.js";import{_}from"./InputError-C8qYlHoa.js";import{_ as g}from"./InputLabel-CAP9b-I4.js";import{_ as U}from"./PrimaryButton-Bc_2ZPvF.js";import{_ as h}from"./TextInput-DzgeUFM2.js";import"./ApplicationLogo-BjkkPY9U.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(l,{emit:e}){const n=e,i=l,t=k({get(){return i.checked},set(o){n("update:checked",o)}});return(o,c)=>y((m(),w("input",{"onUpdate:modelValue":c[0]||(c[0]=b=>t.value=b),type:"checkbox",value:l.value,class:"rounded border-gray-300 text-black shadow-sm focus:ring-white"},null,8,q)),[[v,t.value]])}},P={key:0,class:"mb-4 font-medium text-sm text-green-600"},R={class:"mt-4"},j={class:"block mt-4"},D={class:"flex items-center"},E=r("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1),F={class:"flex items-center justify-end mt-4"},J={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=x({email:"",password:"",remember:!1}),n=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(i,t)=>(m(),u(S,null,{default:d(()=>[a(s(V),{title:"Log in"}),l.status?(m(),w("div",P,$(l.status),1)):p("",!0),r("form",{onSubmit:N(n,["prevent"])},[r("div",null,[a(g,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(_,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",R,[a(g,{for:"password",value:"Password"}),a(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(_,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",j,[r("label",D,[a(L,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),E])]),r("div",F,[l.canResetPassword?(m(),u(s(B),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[f(" Forgot your password? ")]),_:1},8,["href"])):p("",!0),a(U,{class:C(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[f(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{J as default};