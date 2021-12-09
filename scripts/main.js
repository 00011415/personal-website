let progress = document.getElementById("progressbar");
let header = document.querySelector("#mainHeader")
let myselfMainBg = document.querySelector("#myselft-section-1-bg")
let menuIcon = document.querySelector(".menuIcon")
let headerListItems = document.querySelector("#headerListItems")
let listItems = document.querySelectorAll(".listItems")
let preloader = document.querySelector(".preloader")

let totalHeight = document.body.scrollHeight-window.innerHeight;


window.addEventListener("load",()=>{
    setTimeout(()=>{
      preloader.style.opacity = "0"
      preloader.style.zIndex = "0"
    },500)
    setTimeout(()=>{
      preloader.style.display = "none"
    },900)
})

window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY>0)
    
    let progressHeight = (window.pageYOffset/totalHeight)*100;
    progress.style.height = progressHeight + "%";

})




menuIcon.addEventListener('click', ()=>headerListItems.classList.toggle('activeNav'))

listItems.forEach(item=>item.addEventListener('click', ()=>headerListItems.classList.remove('activeNav')))









