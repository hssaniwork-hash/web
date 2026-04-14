
function showmsg(){
      const msg = document.querySelector(".msg");
        msg.classList.add("show");
        setTimeout(() => {
            msg.classList.remove("show");
        }, 5000);
}



