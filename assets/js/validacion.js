var ventana_advertencia = document.getElementById("id_adevertencia"); 
var formulario_login = document.querySelector(".formulario__login"); 
var formulario__register = document.querySelector(".formulario__register"); 
var ventana_Correo = document.getElementById("id_adevertencia_correo");  
var ventana_Usuario = document.getElementById("id_adevertencia_Usuario");    
var ventana_Usuario_contrasena = document.getElementById("id_adevertencia_correo_contrasena");   
var ventana_correcto = document.getElementById ("id_correcto_Usuario");                       


if (globalVariable != 0) {

    ventana_advertencia.style.display = "flex"; 
    ventana_advertencia.style.opacity = "1"; 

    if (globalVariable > 2) {
        formulario__register.style.display = "flex";
        formulario_login.style.display = "none";
        formulario__register.style.opacity = "1"; 
        formulario_login.style.opacity = "0";
        if (globalVariable == 11) {
            ventana_Usuario.style.display = "flex"; 
            ventana_Usuario.style.opacity = "1";
        } else if (globalVariable == 12){
            ventana_Correo.style.display = "flex"; 
            ventana_Correo.style.opacity = "1";
        }     
    }
    else if (globalVariable == 1) {
        ventana_Usuario_contrasena.style.display = "flex"; 
        ventana_Usuario_contrasena.style.opacity = "1";
    }
    else if (globalVariable == 2) {
        ventana_correcto.style.display = "flex"; 
        ventana_correcto.style.opacity = "1";
    }


} else {
    ventana_advertencia.style.display = "none"; 
    ventana_advertencia.style.opacity = "0";
}
