import{L as p}from"./Layout.0bdb68f3.js";import{P as h}from"./Pagination.b2de77d0.js";import{L as g,H as v,r as o,o as t,c as n,a as c,w as d,b as e,d as f,F as r,e as k,f as x,t as s}from"./app.6f2c2d24.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";const y={layout:p,components:{Link:g,Head:v,Pagination:h},props:{announcements:Object}},L={class:"page-wrapper"},N={class:"page-content"},C=x('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Pengumuman</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Pengumuman</li></ol></nav></div></div>',1),D={class:"card"},H={class:"card-body"},V=e("div",{class:"d-flex align-items-center"},[e("div",null,[e("h6",{class:"mb-3"},"Pengumuman")])],-1),w={class:"table-responsive"},B={class:"table mb-0"},j=e("thead",{class:"table-light"},[e("tr",null,[e("th",null,"No"),e("th",null,"Judul"),e("th",null,"Created at"),e("th",null,"Actions")])],-1),A={key:0,align:"center",colspan:"4"},F={class:"d-flex order-actions"},S=e("i",{class:"bx bx-grid-alt"},null,-1);function E(u,I,a,J,O,$){const m=o("Head"),_=o("Link"),b=o("Pagination");return t(),n(r,null,[c(m,null,{default:d(()=>[e("title",null,s(u.$page.props.app_name)+" - Data Pengumuman",1)]),_:1}),e("div",L,[e("div",N,[C,e("div",D,[e("div",H,[V,e("div",w,[e("table",B,[j,e("tbody",null,[e("tr",null,[a.announcements.data.length?f("",!0):(t(),n("td",A,"Data Pengumuman kosong"))]),(t(!0),n(r,null,k(a.announcements.data,(l,i)=>(t(),n("tr",{key:i},[e("td",null,s(++i+(a.announcements.current_page-1)*a.announcements.per_page),1),e("td",null,s(l.title),1),e("td",null,s(l.created_at),1),e("td",null,[e("div",F,[c(_,{href:`/user/announcements/${l.id}`,class:"ms-2"},{default:d(()=>[S]),_:2},1032,["href"])])])]))),128))])])]),c(b,{links:a.announcements.links,align:"end"},null,8,["links"])])])])])],64)}const M=P(y,[["render",E]]);export{M as default};