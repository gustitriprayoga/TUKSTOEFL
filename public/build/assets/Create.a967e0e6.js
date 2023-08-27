import{L as h}from"./Layout.8b2cfc3f.js";import{L as p,H as y,i as x,r as g,o as l,c as o,a as u,w as b,b as a,j as k,k as d,l as c,n as m,t as n,d as _,F as N,m as C,f as w,g as S}from"./app.31d51b21.js";import{S as V}from"./sweetalert2.all.1bc12e73.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";const L={layout:h,components:{Link:p,Head:y},props:{errors:Object,valueCategory:Object},setup(r){const e=x({min_grade:"",max_grade:"",category_grade:"",final_grade:""});return{form:e,submit:()=>{C.Inertia.post(`/admin/value-categories/${r.valueCategory.id}/detail-value-categories`,{value_category_id:r.valueCategory.id,min_grade:e.min_grade,max_grade:e.max_grade,category_grade:e.category_grade,final_grade:e.final_grade},{onSuccess:()=>{V.fire({title:"Success!",text:"Detail Kategori Penilaian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},M={class:"page-wrapper"},B={class:"page-content"},K=w('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Kategori Penilaian</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Detail Kategori Penilaian</li></ol></nav></div></div>',1),j={class:"card"},H={class:"card-body"},P={class:"d-lg-flex align-items-center"},T={class:"ms-auto"},A=S("Kembali"),U={class:"col-12"},F=a("label",{class:"form-label"},"Nilai Minimal",-1),O={key:0,class:"invalid-feedback"},z={class:"col-12"},E=a("label",{class:"form-label"},"Nilai Maksimal",-1),I={key:0,class:"invalid-feedback"},q={class:"col-12"},G=a("label",{class:"form-label"},"Nilai Akhir",-1),J={key:0,class:"invalid-feedback"},Q=a("div",{class:"col-12"},[a("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function R(r,e,i,s,W,X){const f=g("Head"),v=g("Link");return l(),o(N,null,[u(f,null,{default:b(()=>[a("title",null,n(r.$page.props.app_name)+" - Tambah Detail Kategori Penilaian",1)]),_:1}),a("div",M,[a("div",B,[K,a("div",j,[a("div",H,[a("div",P,[a("div",T,[u(v,{href:`/admin/value-categories/${i.valueCategory.id}/detail-value-categories`,class:"btn btn-primary mt-2 mt-lg-0"},{default:b(()=>[A]),_:1},8,["href"])])]),a("form",{onSubmit:e[3]||(e[3]=k((...t)=>s.submit&&s.submit(...t),["prevent"])),class:"row g-3"},[a("div",U,[F,d(a("input",{type:"number",class:m(["form-control",{"is-invalid":i.errors.min_grade}]),"onUpdate:modelValue":e[0]||(e[0]=t=>s.form.min_grade=t),placeholder:"Nilai Minimal"},null,2),[[c,s.form.min_grade]]),i.errors.min_grade?(l(),o("div",O,n(i.errors.min_grade),1)):_("",!0)]),a("div",z,[E,d(a("input",{type:"number",class:m(["form-control",{"is-invalid":i.errors.max_grade}]),"onUpdate:modelValue":e[1]||(e[1]=t=>s.form.max_grade=t),placeholder:"Nilai Maksimal"},null,2),[[c,s.form.max_grade]]),i.errors.max_grade?(l(),o("div",I,n(i.errors.max_grade),1)):_("",!0)]),a("div",q,[G,d(a("input",{type:"text",class:m(["form-control",{"is-invalid":i.errors.final_grade}]),"onUpdate:modelValue":e[2]||(e[2]=t=>s.form.final_grade=t),placeholder:"Nilai Akhir"},null,2),[[c,s.form.final_grade]]),i.errors.final_grade?(l(),o("div",J,n(i.errors.final_grade),1)):_("",!0)]),Q],32)])])])])],64)}const ea=D(L,[["render",R]]);export{ea as default};
