
function showmsg(ms){
      const msg = document.querySelector(".msg");
        msg.classList.add("show");
        msg.innerHTML=ms;
        setTimeout(() => {
            msg.classList.remove("show");
        }, 5000);
}

const re = document.querySelector(".h1");

()=>{
    re.innerHTML = window.innerWidth;
}
const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const a4 = document.querySelector(".a4");
const a5 = document.querySelector(".a5");
const a6 = document.querySelector(".a6");
const a7 = document.querySelector(".a7");
const a8 = document.querySelector(".a8");

function levelinsert(){
fetch("card.php", {
  method: "POST",
  body: JSON.stringify({
  name_em: a1.value,
  ad_em: a2.value,
  admain_name: a3.value,
  level_1: a4.value,
  level_2: a5.value,
  count_errors: a6.value,
  statues: a7.value,
  notes: a8.value
})
});
window.localStorage.setItem("اسم الموظف",a1.value)
window.localStorage.setItem("المسى  الوظيفي",a2.value)
window.localStorage.setItem("اسم المشرف",a3.value)
window.localStorage.setItem("التقييم السلوكي ",a4.value)
window.localStorage.setItem("التقييم التشغيلي ",a5.value)
window.localStorage.setItem("عدد الاخطاء ",a6.value)
window.localStorage.setItem("حالة الدوام ",a7.value)
window.localStorage.setItem("ملاحظات ",a8.value)
a1.value="";
a2.value="";
a3.value="";
a4.value="";
a5.value="";
a6.value="";
a7.value="";
a8.value="";

showmsg("تمت العملية بنجاح")
}
