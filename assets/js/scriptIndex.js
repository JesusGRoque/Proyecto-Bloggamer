document.getElementById ("btn__registrarse").addEventListener("click" , register); 
document.getElementById ("btn__iniciar-sersion").addEventListener("click" , iniciarSesion); 
// DECLARANDO VARIABLES 
var formulario_login = document.querySelector(".formulario__login"); 
var formulario__register = document.querySelector(".formulario__register"); 



function register () {
    formulario__register.style.display = "flex";
    formulario_login.style.display = "none";
    formulario__register.style.opacity = "1"; 
    formulario_login.style.opacity = "0";
}

function iniciarSesion () { 
    formulario__register.style.display = "none";
    formulario_login.style.display = "flex";
    formulario__register.style.opacity = "0"; 
    formulario_login.style.opacity = "1"; 
}