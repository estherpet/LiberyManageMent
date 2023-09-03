
function register(){
    event.preventDefault()
    window.location.href ="http://127.0.0.1:5501/library/frontend/dashboard.html"

    const fullname =document.querySelector("#full_name").value;
    const email =document.querySelector("#email").value;
    const pass =document.querySelector("#password").value;
    const verify_pass = document.querySelector("#verify_password").value;
    window.localStorage.setItem("name", fullname)
    window.localStorage.setItem("email", email)
    window.localStorage.setItem("password", pass)
    window.localStorage.setItem("verify_password", verify_pass)
    console.log(localStorage.getItem("name"))

}

function login(){
    event.preventDefault()
    window.location.href = "http://127.0.0.1:5501/library/frontend/dashboard.html"
    const login_email =document.querySelector("#login_email").value;
    const login_pass = document.querySelector("#login_password").value;
    
}
