import{L as p}from"./Layout.8b2cfc3f.js";import{L as b,H as u,r,o as s,c as t,a as c,w as l,b as a,d as v,F as n,e as g,f as d,t as i,g as f}from"./app.31d51b21.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";const y={layout:p,components:{Link:b,Head:u},props:{lessons:Object}},k={class:"page-wrapper"},w={class:"page-content"},j=d('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Latihan Soal</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Mata Pelajaran</li></ol></nav></div></div><h4 class="mb-0 text-uppercase text-center">Pilih Mata Pelajaran Yang Akan Anda Kerjakan....</h4><hr>',3),L={key:0},P=d('<div class="row row-cols-12 row-cols-md-12 row-cols-lg-12 row-cols-xl-12"><div class="col"><div class="card border-bottom border-3 border-0"><div class="card-body"><h5 class="card-title text-center">Mata Pelajaran Belum Tersedia.</h5></div></div></div></div>',1),S=[P],$={class:"row"},N={class:"col-xs-12 col-sm-6 col-md-6 col-lg-3"},V={class:"card border-bottom border-3 border-0"},A=["src"],B={class:"card-body"},D={class:"card-title"},H=a("p",{class:"card-text",style:{height:"100px"}},"Kerjakan Soal Sesuai Perintah Yang Ada Dalam Informasi.",-1),M=a("hr",null,null,-1),C={class:"text-center"},F=f("Selengkapnya");function I(_,K,o,T,Y,E){const m=r("Head"),h=r("Link");return s(),t(n,null,[c(m,null,{default:l(()=>[a("title",null,i(_.$page.props.app_name)+" - Data Mata Pelajaran",1)]),_:1}),a("div",k,[a("div",w,[j,o.lessons.length?v("",!0):(s(),t("div",L,S)),a("div",$,[(s(!0),t(n,null,g(o.lessons,e=>(s(),t("div",N,[a("div",V,[a("img",{src:"/storage/upload_files/lessons/"+e.thumbnail,class:"card-img-top"},null,8,A),a("div",B,[a("h5",D,i(e.name),1),H,M,a("div",C,[c(h,{href:`/user/categories/${e.lesson_category.category.id}/lesson-categories/${e.lesson_category_id}/lessons/${e.id}/exams`,class:"btn btn-outline-primary"},{default:l(()=>[F]),_:2},1032,["href"])])])])]))),256))])])])],64)}const G=x(y,[["render",I]]);export{G as default};
