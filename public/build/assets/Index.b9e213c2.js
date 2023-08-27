import{L as S}from"./Layout.8b2cfc3f.js";import{P as w}from"./Pagination.0bd8784d.js";import{L as B,H as C,x as D,r as m,o as e,c as s,a as d,w as u,b as a,j as b,k as P,l as J,d as l,F as g,e as L,m as f,f as N,g as y,t as i}from"./app.31d51b21.js";import{S as v}from"./sweetalert2.all.1bc12e73.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const A={layout:S,components:{Link:B,Head:C,Pagination:w},props:{questionTitles:Object},setup(){const c=D(new URL(document.location).searchParams.get("search"));return{search:c,handleSearch:()=>{f.Inertia.get("/admin/question-titles",{search:c.value})},destroy:n=>{v.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Hapus"}).then(h=>{h.isConfirmed&&(f.Inertia.delete(`/admin/question-titles/${n}`),v.fire({title:"Deleted!",text:"Judul Soal Berhasil Dihapus!.",icon:"success",timer:1e3,showConfirmButton:!1}))})}}}},H={class:"page-wrapper"},j={class:"page-content"},I=N('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Judul Soal</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Judul Soal</li></ol></nav></div></div>',1),U={class:"card"},q={class:"card-body"},F={class:"d-lg-flex align-items-center mb-4 gap-3"},K={class:"position-relative"},M=y(),R=a("span",{class:"position-absolute top-50 product-show translate-middle-y"},[a("i",{class:"bx bx-search"})],-1),E={class:"ms-auto"},O=a("i",{class:"bx bxs-plus-square"},null,-1),z=y(" Tambah Judul Soal"),G={class:"table-responsive"},Q={class:"table mb-0"},T=a("thead",{class:"table-light"},[a("tr",null,[a("th",null,"No"),a("th",null,"Peminatan"),a("th",null,"Judul Soal"),a("th",null,"Jumlah Pilihan"),a("th",null,"Kategori Penilaian"),a("th",null,"Actions")])],-1),W={key:0,align:"center",colspan:"6"},X={class:"badge bg-primary"},Y={class:"badge bg-danger"},Z={key:0},$={key:0,class:"badge bg-primary"},aa={key:1,class:"badge bg-primary"},ta={key:2,class:"badge bg-primary"},ea={key:3,class:"badge bg-primary"},sa={class:"d-flex order-actions"},na=a("i",{class:"bx bx-grid-alt"},null,-1),oa=a("i",{class:"bx bxs-edit"},null,-1),la=["onClick"],ia=a("i",{class:"bx bxs-trash"},null,-1),ra=[ia];function da(c,r,o,n,h,ca){const k=m("Head"),_=m("Link"),x=m("Pagination");return e(),s(g,null,[d(k,null,{default:u(()=>[a("title",null,i(c.$page.props.app_name)+" - Data Judul Soal",1)]),_:1}),a("div",H,[a("div",j,[I,a("div",U,[a("div",q,[a("div",F,[a("form",{onSubmit:r[1]||(r[1]=b((...t)=>n.handleSearch&&n.handleSearch(...t),["prevent"]))},[a("div",K,[P(a("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=t=>n.search=t),class:"form-control ps-5 radius-20",placeholder:"Cari Berdasarkan Nama...."},null,512),[[J,n.search]]),M,R])],32),a("div",E,[d(_,{href:"/admin/question-titles/create",class:"btn btn-primary mt-2 mt-lg-0"},{default:u(()=>[O,z]),_:1})])]),a("div",G,[a("table",Q,[T,a("tbody",null,[a("tr",null,[o.questionTitles.data.length?l("",!0):(e(),s("td",W,"Data Soal kosong"))]),(e(!0),s(g,null,L(o.questionTitles.data,(t,p)=>(e(),s("tr",{key:p},[a("td",null,i(++p+(o.questionTitles.current_page-1)*o.questionTitles.per_page),1),a("td",null,[a("span",X,i(t.category.name),1)]),a("td",null,i(t.name),1),a("td",null,i(t.total_choices),1),a("td",null,[a("span",Y,i(t.add_value_category==0?"Tidak":""),1),t.add_value_category==1?(e(),s("div",Z,[t.assessment_type==1?(e(),s("span",$,"Dihitung Per Kategori Penilaian")):l("",!0),t.assessment_type==2?(e(),s("span",aa,"Dihitung Untuk Seluruh Soal (Rata-rata)")):l("",!0),t.assessment_type==3?(e(),s("span",ta,"Dihitung Berdasarkan Poin Jawaban")):l("",!0),t.assessment_type==4?(e(),s("span",ea,"Dihitung Berdasarkan Bobot Jawaban")):l("",!0)])):l("",!0)]),a("td",null,[a("div",sa,[d(_,{href:`/admin/question-titles/${t.id}/questions`,class:"ms-2"},{default:u(()=>[na]),_:2},1032,["href"]),d(_,{href:`/admin/question-titles/${t.id}/edit`,class:"ms-2"},{default:u(()=>[oa]),_:2},1032,["href"]),a("a",{href:"#",onClick:b(ua=>n.destroy(t.id),["prevent"]),class:"ms-2"},ra,8,la)])])]))),128))])])]),d(x,{links:o.questionTitles.links,align:"end"},null,8,["links"])])])])])],64)}const ga=V(A,[["render",da]]);export{ga as default};
