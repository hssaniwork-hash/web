
function showmsg(){
      const msg = document.querySelector(".msg");
        msg.classList.add("show");
        setTimeout(() => {
            msg.classList.remove("show");
        }, 5000);
}



setInterval(() => {
    document.querySelector("h1").innerHTML = window.innerWidth;
}, 1000);