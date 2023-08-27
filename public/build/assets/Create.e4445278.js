import{L as y}from"./Layout.8b2cfc3f.js";import{L as k,H as x,i as S,r as _,o as n,c as r,a as b,w as u,b as e,j as w,k as c,v,n as d,F as f,e as N,t as l,d as m,l as V,m as B,f as K,g as L}from"./app.31d51b21.js";import{S as P}from"./sweetalert2.all.1bc12e73.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:y,components:{Link:k,Head:x},props:{errors:Object,categories:Object},setup(){const o=S({name:"",category_id:"",description:"",assessment_type:""});return{form:o,submit:()=>{B.Inertia.post("/admin/value-categories",{name:o.name,category_id:o.category_id,assessment_type:o.assessment_type},{onSuccess:()=>{P.fire({title:"Success!",text:"Kategori Penilaian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},j={class:"page-wrapper"},H={class:"page-content"},J=K('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Kategori Penilaian</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Kategori Penilaian</li></ol></nav></div></div>',1),D={class:"card"},M={class:"card-body"},U={class:"d-lg-flex align-items-center"},F={class:"ms-auto"},O=L("Kembali"),z={class:"col-12"},A=e("label",{class:"form-label"},"Kategori",-1),E=e("option",{value:""},"[ Pilih ]",-1),I=["value"],q={key:0,class:"invalid-feedback"},G={class:"col-12"},Q=e("label",{class:"form-label"},"Nama Kategori",-1),R={key:0,class:"invalid-feedback"},W={class:"col-12"},X=e("label",{class:"form-label"},"Jenis Penilaian",-1),Y=e("option",{value:""},"[ Pilih ]",-1),Z=e("option",{value:"1"},"Nilai = Jumlah Benar : Total Soal",-1),$=e("option",{value:"2"},"Nilai = Jumlah Jawaban Benar",-1),ee=[Y,Z,$],se={key:0,class:"invalid-feedback"},ae=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function te(o,t,s,i,ie,oe){const p=_("Head"),h=_("Link");return n(),r(f,null,[b(p,null,{default:u(()=>[e("title",null,l(o.$page.props.app_name)+" - Tambah Kategori Penilaian",1)]),_:1}),e("div",j,[e("div",H,[J,e("div",D,[e("div",M,[e("div",U,[e("div",F,[b(h,{href:"/admin/value-categories",class:"btn btn-primary mt-2 mt-lg-0"},{default:u(()=>[O]),_:1})])]),e("form",{onSubmit:t[3]||(t[3]=w((...a)=>i.submit&&i.submit(...a),["prevent"])),class:"row g-3"},[e("div",z,[A,c(e("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>i.form.category_id=a),class:d([{"is-invalid":s.errors.category_id},"form-select"])},[E,(n(!0),r(f,null,N(s.categories,(a,g)=>(n(),r("option",{key:g,value:a.id},l(a.name),9,I))),128))],2),[[v,i.form.category_id]]),s.errors.category_id?(n(),r("div",q,l(s.errors.category_id),1)):m("",!0)]),e("div",G,[Q,c(e("input",{type:"text",class:d(["form-control",{"is-invalid":s.errors.name}]),"onUpdate:modelValue":t[1]||(t[1]=a=>i.form.name=a),placeholder:"Nama"},null,2),[[V,i.form.name]]),s.errors.name?(n(),r("div",R,l(s.errors.name),1)):m("",!0)]),e("div",W,[X,c(e("select",{"onUpdate:modelValue":t[2]||(t[2]=a=>i.form.assessment_type=a),class:d([{"is-invalid":s.errors.assessment_type},"form-select"])},ee,2),[[v,i.form.assessment_type]]),s.errors.assessment_type?(n(),r("div",se,l(s.errors.assessment_type),1)):m("",!0)]),ae],32)])])])])],64)}const de=C(T,[["render",te]]);export{de as default};