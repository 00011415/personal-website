
const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");
const btn = document.querySelector(".submitBtn");
let input = document.querySelectorAll("input[required]")
let select = document.querySelector("select")


checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});


btn.addEventListener('click',()=>{
     input.forEach(item=>{
         if(item.innerHTML === ""){
             item.style.border = "1px solid red"
         }

         if(item.innerHTML !== " "){
            item.style.border = "1px solid red"
         }
     })

     if(select.value === "-- Please choose an option --"){
         select.style.border = "1px solid red"
     }
     console.log(select.value);
})