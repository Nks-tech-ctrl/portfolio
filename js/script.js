const menubtn = document.getElementById("menu-btn");
const mobilemenu=document.getElementById("mobile-menu");
menubtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden");
})