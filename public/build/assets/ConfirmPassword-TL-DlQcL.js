import{T as n,o as l,c as d,w as t,a,u as o,Z as c,b as e,d as p,n as f,e as u}from"./app-C1Z5_c1N.js";import{_}from"./GuestLayout-CYdLRpXy.js";import{_ as w}from"./InputError-JrBxuq0d.js";import{_ as b}from"./InputLabel-CqMrN-yL.js";import{_ as x}from"./PrimaryButton-jQzRBpjG.js";import{_ as g}from"./TextInput-D38D8Akq.js";import"./ApplicationLogo-CaXGKsN9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(v){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(y,r)=>(l(),d(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),h,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",V,[a(x,{class:f(["ms-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{q as default};
