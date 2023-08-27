import{L as b}from"./Layout.8b2cfc3f.js";import{L as g,H as f,r as x,o as a,c as i,a as k,w as y,b as e,d as o,t as s,F as m,e as w,m as v,f as h,g as d,j as V}from"./app.31d51b21.js";import{S as P}from"./sweetalert2.all.1bc12e73.js";import{_ as T}from"./_plugin-vue_export-helper.cdc0426e.js";const B={layout:b,components:{Link:g,Head:f},props:{vouchers:Object},setup(){return{buyVoucher:(l,n)=>{P.fire({title:"Apakah Anda yakin akan membeli paket ini ?",text:"jika membeli paket ini, silakan lakukan konfirmasi",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya",cancelButtonText:"Tidak"}).then(_=>{_.isConfirmed&&v.Inertia.get(`/user/vouchers/${l}/buy?category_id=${n}`)})}}},data(){return{colors:["danger","primary","warning","success"]}},methods:{formatPrice(r){return(r/1).toFixed().replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},C={class:"page-wrapper"},L={class:"page-content"},S=h('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Voucher</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Pembelian Voucher</li></ol></nav></div></div><h4 class="mb-0 text-uppercase text-center">Pilih Voucher Sesuai Targetmu....</h4><br><h6 class="text-center">Scroll kebawah untuk melihat lebih banyak voucher</h6><hr>',5),H={key:0},N=h('<div class="row row-cols-12 row-cols-md-12 row-cols-lg-12 row-cols-xl-12"><div class="col"><div class="card border-bottom border-3 border-0"><div class="card-body"><h5 class="card-title text-center">Voucher Belum Tersedia.</h5></div></div></div></div>',1),j=[N],F={class:"pricing-table"},R={key:0,class:"alert alert-danger border-0"},A={class:"row row-cols-1 row-cols-lg-3"},E={class:"card mb-5 mb-lg-0"},I={key:0,class:"card-header bg-primary py-3"},M={class:"card-title text-white text-center"},O=e("br",null,null,-1),D={class:"text-white text-center"},Y=d(),$={class:"badge bg-warning text-dark"},q={class:"card-price text-white text-center"},z={class:"term"},G={key:1,class:"card-header bg-danger py-3"},J={class:"card-title text-white text-center"},K=e("br",null,null,-1),Q={class:"text-white text-center"},U=d(),W={class:"badge bg-warning text-dark"},X={class:"card-price text-white text-center"},Z={class:"term"},ee={class:"card-body"},te={class:"text-center"},se=e("hr",null,null,-1),ae=["innerHTML"],ie=e("hr",null,null,-1),re={key:0},ce={class:"text-center"},oe=e("hr",null,null,-1),ne={class:"d-grid"},de=["onClick"],le=e("br",null,null,-1);function _e(r,l,n,_,me,c){const p=x("Head");return a(),i(m,null,[k(p,null,{default:y(()=>[e("title",null,s(r.$page.props.app_name)+" - Data Voucher",1)]),_:1}),e("div",C,[e("div",L,[S,n.vouchers.length?o("",!0):(a(),i("div",H,j)),e("div",F,[r.$page.props.session.error?(a(),i("div",R,s(r.$page.props.session.error),1)):o("",!0),e("div",A,[(a(!0),i(m,null,w(n.vouchers,(t,u)=>(a(),i("div",{class:"col",key:u},[e("div",E,[t.category.name=="TOEFL"?(a(),i("div",I,[e("h5",M,s(t.code),1),O,e("h5",D,[e("s",null,"Rp."+s(c.formatPrice(t.price_before_discount)),1),Y,e("span",$,s(c.formatPrice((t.price_before_discount-t.price_after_discount)/t.price_before_discount*100))+"%",1)]),e("h6",q,[d("Rp."+s(c.formatPrice(t.price_after_discount)),1),e("span",z,"/"+s(t.active_period)+" "+s(t.type),1)])])):o("",!0),t.category.name=="TOEIC"?(a(),i("div",G,[e("h5",J,s(t.code),1),K,e("h5",Q,[e("s",null,"Rp."+s(c.formatPrice(t.price_before_discount)),1),U,e("span",W,s(c.formatPrice((t.price_before_discount-t.price_after_discount)/t.price_before_discount*100))+"%",1)]),e("h6",X,[d("Rp."+s(c.formatPrice(t.price_after_discount)),1),e("span",Z,"/"+s(t.active_period)+" "+s(t.type),1)])])):o("",!0),e("div",ee,[e("h6",te,s(t.name),1),se,e("div",{innerHTML:t.description,style:{"min-height":"175px"}},null,8,ae),ie,t.user_limit&&t.user_limit>t.voucher_selected_transacation_count?(a(),i("div",re,[e("h6",ce,"Tersisa "+s(t.user_limit-t.voucher_selected_transacation_count)+" kuota dari "+s(t.user_limit),1),oe])):o("",!0),e("div",ne,[e("a",{href:"#",onClick:V(he=>_.buyVoucher(t.id,t.category_id),["prevent"]),class:"btn btn-outline-primary px-5 radius-30"},"Pilih Paket",8,de)])])]),le]))),128))])])])])],64)}const fe=T(B,[["render",_e]]);export{fe as default};
