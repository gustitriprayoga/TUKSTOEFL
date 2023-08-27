import{L as f}from"./Layout.8b2cfc3f.js";import{P as k}from"./Pagination.0bd8784d.js";import{L as v,H as x,r,o as e,c as s,a as o,w as c,b as a,d as i,F as p,e as y,f as P,t as n}from"./app.31d51b21.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:f,components:{Link:v,Head:x,Pagination:k},props:{transactions:Object},methods:{formatPrice(d){let u=(d/1).toFixed(2).replace(".",",");return"Rp."+u.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},D={class:"page-wrapper"},N={class:"page-content"},B=P('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Transaksi</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Transaksi</li></ol></nav></div></div>',1),w={class:"card"},F={class:"card-body"},H=a("div",{class:"d-flex align-items-center"},[a("div",null,[a("h6",{class:"mb-3"},"Data Transaksi")])],-1),S={class:"table-responsive"},V={class:"table mb-0"},j=a("thead",{class:"table-light"},[a("tr",null,[a("th",null,"No"),a("th",null,"Kode Transaksi"),a("th",null,"Kategori"),a("th",null,"Judul Ujian"),a("th",null,"Nama User"),a("th",null,"Maksimal Bayar"),a("th",null,"Total"),a("th",null,"Status"),a("th",null,"Actions")])],-1),C={key:0,align:"center",colspan:"9"},A={key:0,class:"badge bg-warning"},K={key:1,class:"badge bg-primary"},U={key:2,class:"badge bg-danger"},E={key:3,class:"badge bg-success"},I={class:"d-flex order-actions"},J=a("i",{class:"bx bx-grid-alt"},null,-1),M=a("i",{class:"bx bx-credit-card-front"},null,-1);function O(d,u,l,R,$,h){const b=r("Head"),_=r("Link"),g=r("Pagination");return e(),s(p,null,[o(b,null,{default:c(()=>[a("title",null,n(d.$page.props.app_name)+" - Data Transaksi",1)]),_:1}),a("div",D,[a("div",N,[B,a("div",w,[a("div",F,[H,a("div",S,[a("table",V,[j,a("tbody",null,[a("tr",null,[l.transactions.data.length?i("",!0):(e(),s("td",C,"Data Transaksi kosong"))]),(e(!0),s(p,null,y(l.transactions.data,(t,m)=>(e(),s("tr",{key:m},[a("td",null,n(++m+(l.transactions.current_page-1)*l.transactions.per_page),1),a("td",null,n(t.code),1),a("td",null,n(t.exam.category.name),1),a("td",null,n(t.exam.title),1),a("td",null,n(t.user.name),1),a("td",null,n(t.maximum_payment_time),1),a("td",null,n(h.formatPrice(t.total_purchases)),1),a("td",null,[t.transaction_status=="pending"?(e(),s("span",A,"Pending")):i("",!0),t.transaction_status=="paid"?(e(),s("span",K,"Paid")):i("",!0),t.transaction_status=="failed"?(e(),s("span",U,"Failed")):i("",!0),t.transaction_status=="done"?(e(),s("span",E,"Done")):i("",!0)]),a("td",null,[a("div",I,[o(_,{href:`/admin/transactions/${t.id}`,style:{margin:"5px"}},{default:c(()=>[J]),_:2},1032,["href"]),o(_,{href:`/admin/transactions/${t.id}/invoice`,style:{margin:"5px"}},{default:c(()=>[M]),_:2},1032,["href"])])])]))),128))])])]),o(g,{links:l.transactions.links,align:"end"},null,8,["links"])])])])])],64)}const W=L(T,[["render",O]]);export{W as default};
