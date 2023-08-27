import{L as v}from"./Auth.80b723cb.js";import{H as w,L as k,i as y,r as p,o as l,c as r,a as c,w as _,b as s,j as L,d,k as h,l as f,n as b,t as m,F as H,m as x,g as n}from"./app.31d51b21.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:v,components:{Head:w,Link:k},props:{errors:Object,session:Object},setup(){const e=y({email:"",password:""});return{form:e,submit:()=>{x.Inertia.post("/login",{email:e.email,password:e.password})}}}},V={class:"authentication-reset-password d-flex align-items-center justify-content-center"},j={class:"row"},B={class:"col-12 col-lg-10 mx-auto"},C={class:"card"},D={class:"row g-0"},N={class:"col-lg-12 border-end"},U={class:"card-body"},A={class:"p-5"},E=s("h4",{class:"mt-5 font-weight-bold"},"Login",-1),P=s("p",{class:"text-muted"},"Silakan login dengan email dan password yang sudah anda daftarkan.",-1),S={class:"mb-3 mt-0"},F={key:0,class:"alert alert-danger border-0"},I=s("i",{class:"fa fa-exclamation-triangle"},null,-1),K=n(),O=["innerHTML"],z={key:1,class:"alert alert-success border-0"},R=s("i",{class:"fa fa-exclamation-triangle"},null,-1),q=n(),G=["innerHTML"],J={class:"mb-3 mt-0"},Q=s("label",{class:"form-label"},"Email",-1),W={key:0,class:"invalid-feedback"},X={class:"mb-3"},Y=s("label",{class:"form-label"},"Password",-1),Z={key:0,class:"invalid-feedback"},$=s("div",{class:"d-grid gap-2"},[s("button",{type:"submit",class:"btn btn-primary"},"Login")],-1),ss={class:"text-center"},es=s("br",null,null,-1),os={class:"text-muted"},ts=n(" Belum punya akun ? "),as=n("Daftar disini"),ns=s("br",null,null,-1),is=s("br",null,null,-1),ls=n(" Lupa Password ? "),rs=n("Klik Disini"),ds=s("br",null,null,-1),cs=s("br",null,null,-1),_s=["href"];function ms(e,o,t,a,us,ps){const g=p("Head"),u=p("Link");return l(),r(H,null,[c(g,null,{default:_(()=>[s("title",null,m(e.$page.props.app_name)+" - Login",1)]),_:1}),s("div",V,[s("div",j,[s("div",B,[s("div",C,[s("div",D,[s("div",N,[s("div",U,[s("form",{onSubmit:o[2]||(o[2]=L((...i)=>a.submit&&a.submit(...i),["prevent"])),class:"row g-3"},[s("div",A,[E,P,s("div",S,[e.$page.props.session.error?(l(),r("div",F,[I,K,s("div",{innerHTML:e.$page.props.session.error},null,8,O)])):d("",!0),e.$page.props.session.success?(l(),r("div",z,[R,q,s("div",{innerHTML:e.$page.props.session.success},null,8,G)])):d("",!0)]),s("div",J,[Q,h(s("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=i=>a.form.email=i),class:b([{"is-invalid":t.errors.email},"form-control"]),placeholder:"Email"},null,2),[[f,a.form.email]]),t.errors.email?(l(),r("div",W,m(t.errors.email),1)):d("",!0)]),s("div",X,[Y,h(s("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=i=>a.form.password=i),class:b([{"is-invalid":t.errors.password},"form-control"]),placeholder:"Password"},null,2),[[f,a.form.password]]),t.errors.password?(l(),r("div",Z,m(t.errors.password),1)):d("",!0)]),$,s("div",ss,[es,s("p",os,[ts,c(u,{href:"/register"},{default:_(()=>[as]),_:1}),ns,is,ls,c(u,{href:"/user/forgot-password"},{default:_(()=>[rs]),_:1}),ds,cs,s("a",{href:`https://wa.me/${e.$page.props.app_whatsapp}?text=${encodeURI("Hallo, Admin. saya ingin bertanya....")}`,target:"_blank"},"Klik Untuk Menghubungi Admin",8,_s)])])])],32)])])])])])])])],64)}const gs=M(T,[["render",ms]]);export{gs as default};
