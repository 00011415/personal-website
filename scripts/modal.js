let getMoreInfo1 = document.querySelector(".getMoreInfo1")
let hiddenInfo1 = document.querySelector(".hiddenInfo1")
let hiddenIcon1 = document.querySelector(".hiddenIcon1")
let portfolioImages = document.querySelectorAll(".portfolio-image-wrapper")
let modal = document.getElementById("modalImageWrapper");
let modalImg = document.getElementById("img01");
let closeBtn = document.querySelector(".closeBtn");

portfolioImages.forEach(div=>{
    div.addEventListener('click', ()=>{
      modal.style.display = "block";
      modalImg.src = div.firstElementChild.firstElementChild.src;
    })
  })

hiddenIcon1.addEventListener('click', ()=>{
    hiddenInfo1.style.top = "-200%"
    header.style.borderBottomColor = "transparent"
  })

getMoreInfo1.addEventListener('click', ()=>{
    hiddenInfo1.style.top = "0"
    header.style.borderBottomColor = "gray"
  })


closeBtn.addEventListener('click', ()=>modal.style.display = "none")
