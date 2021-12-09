/// so the user must enter his credentials and the task is to check whether he is authorized or not.

let form = document.querySelector(".form-admin")
let password = document.querySelector(".passwordCheck")
let passwordConfirm = document.querySelector(".confirmPasswordCheck")
let username = document.querySelector(".usernameCheck")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(username.value !== "" && password.value !== "" && passwordConfirm.value !== ""){
        console.log(username.value);
    }
})