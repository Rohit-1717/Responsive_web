var menu = document.querySelector(".menu")

var menu_cont = document.querySelector(".menu-cont")

var flag = 0

menu.addEventListener("click",function(){
    if(flag == 0){
        menu.innerHTML = '<i class="ri-menu-line"></i>'
        menu_cont.style.display = "none"
        flag = 1
    }
    else{
        menu.innerHTML = '<i class="ri-close-circle-line"></i>'
        menu_cont.style.display = "flex"
        flag = 0
    }
    
})