import{L as m}from"./Layout.0bdb68f3.js";import{L as u,H as b,r,o as s,c as a,a as n,w as i,b as t,d as _,t as o,F as g,f,g as l}from"./app.6f2c2d24.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";const x={layout:m,components:{Link:u,Head:b},props:{exam:Object,grade:Object}},p={class:"page-wrapper"},y={class:"page-content"},k={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},j=f('<div class="breadcrumb-title pe-3">Ujian</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Detail Ujian</li></ol></nav></div>',2),L={class:"ms-auto"},H=l("Kembali"),w={class:"row"},M={class:"col-lg-12"},U={key:0,class:"alert alert-danger border-0"},N=["innerHTML"],D={class:"col-lg-12"},T={class:"card"},V=t("div",{class:"card-header bg-primary"},[t("h5",{class:"mb-0 text-white"},"Informasi")],-1),B={class:"card-body"},S={class:"table mb-0"},C={colspan:"3"},K=["innerHTML"],A={class:"col-lg-12"},E={class:"card"},F=t("div",{class:"card-header bg-primary"},[t("h5",{class:"mb-0 text-white"},"Deskripsi Ujian")],-1),O={class:"card-body"},I={class:"table mb-0"},J=t("th",null,"Email",-1),P=t("td",{width:"2px"},":",-1),q=t("th",null,"Nama",-1),z=t("td",null,":",-1),G=t("tr",null,[t("td",{colspan:"3"},"\xA0")],-1),Q=t("th",null,"Kategori",-1),R=t("td",null,":",-1),W={class:"badge bg-primary"},X=t("th",null,"Judul Ujian",-1),Y=t("td",null,":",-1),Z={key:0},$=t("th",null,"Durasi",-1),tt=t("td",null,":",-1),et=t("tr",null,[t("td",{colspan:"3"},"\xA0")],-1),st={colspan:"3"},at={key:0,class:"text-center"},nt=l("Mulai Kerjakan"),it={key:1,class:"text-center"},dt=l("Lanjut Mengerjakan"),ot={key:2,class:"text-center"},lt=l("Lihat Hasil"),ct=l("Ulangi Pengerjaan"),rt={key:3,class:"text-center"},_t=l("Lihat Hasil"),ht=t("button",{class:"btn btn-sm btn-danger m-1"},"Ujian Di Blokir Silakan Hubungi Admin",-1);function mt(c,ut,e,bt,gt,ft){const h=r("Head"),d=r("Link");return s(),a(g,null,[n(h,null,{default:i(()=>[t("title",null,o(c.$page.props.app_name)+" - Ujian",1)]),_:1}),t("div",p,[t("div",y,[t("div",k,[j,t("div",L,[n(d,{href:`/user/categories/${e.exam.category_id}/exams`,class:"btn btn-primary mt-2 mt-lg-0"},{default:i(()=>[H]),_:1},8,["href"])])]),t("div",w,[t("div",M,[c.$page.props.session.error?(s(),a("div",U,[t("div",{innerHTML:c.$page.props.session.error},null,8,N)])):_("",!0)]),t("div",D,[t("div",T,[V,t("div",B,[t("table",S,[t("tbody",null,[t("tr",null,[t("td",C,[t("div",{innerHTML:e.exam.description},null,8,K)])])])])])])]),t("div",A,[t("div",E,[F,t("div",O,[t("table",I,[t("tbody",null,[t("tr",null,[J,P,t("td",null,o(c.$page.props.auth.user.email),1)]),t("tr",null,[q,z,t("td",null,o(c.$page.props.auth.user.name),1)]),G,t("tr",null,[Q,R,t("td",null,[t("span",W,o(e.exam.category.name),1)])]),t("tr",null,[X,Y,t("td",null,o(e.exam.title),1)]),e.exam.duration_type==1?(s(),a("tr",Z,[$,tt,t("td",null,o(e.exam.duration)+" Menit",1)])):_("",!0),et,t("tr",null,[t("td",st,[e.grade?e.grade&&e.grade.is_finished==0?(s(),a("div",it,[n(d,{href:`/user/exams/${e.exam.id}/exam-start`,class:"btn btn-sm btn-warning"},{default:i(()=>[dt]),_:1},8,["href"])])):e.grade&&e.grade.is_finished==1&&e.grade.is_blocked==0?(s(),a("div",ot,[n(d,{href:`/user/grades/${e.grade.id}`,class:"btn btn-sm btn-success m-1"},{default:i(()=>[lt]),_:1},8,["href"]),n(d,{href:`/user/exams/${e.exam.id}/exam-start?repeat=1`,class:"btn btn-sm btn-primary m-1"},{default:i(()=>[ct]),_:1},8,["href"])])):(s(),a("div",rt,[n(d,{href:`/user/grades/${e.grade.id}`,class:"btn btn-sm btn-success m-1"},{default:i(()=>[_t]),_:1},8,["href"]),ht])):(s(),a("div",at,[n(d,{href:`/user/exams/${e.exam.id}/exam-start`,class:"btn btn-sm btn-primary"},{default:i(()=>[nt]),_:1},8,["href"])]))])])])])])])])])])])],64)}const yt=v(x,[["render",mt]]);export{yt as default};