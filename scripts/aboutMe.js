let clipImage = document.querySelector(".clipImage")


window.addEventListener("scroll",function() {
    let pixel = window.scrollY
    clipImage.style.clipPath = "circle("+pixel+"px at center)"
    clipImage.style.opacity = 0.2 - +window.pageYOffset/7150+''
    clipImage.style.top = +window.pageYOffset/550+''
})