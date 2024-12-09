<?php
    session_start (); 
    if (isset($_SESSION ['usuario'])){
        header ("location:templates/Inicio.html"); 
    }   
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/Normalize.css">
    <link rel="stylesheet" href="assets/css/index.css">
    <title>Inicio de Sesion</title>
</head>
<body>

    <main>
        <div class="container"> 
            <div class="Contenedor_inicioDatos">   
                <div class="Contenedor_header_inicioDatos">
                    <h2>BLOGGAMER</h2>
                    <div class="Contenedor_Buttons_Datos">
                        <button id="btn__iniciar-sersion" class="btn_login">Inicio Sesión</button>
                        <button id="btn__registrarse" class="btn_Register">Registro</button>
                    </div>
                </div>

                <div class="contenedor_login-registro">
                    <!--Formulario de Inicio-->
                    <form action="config/iniciar_sesion_BD_Be.php" method="POST" class="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input type="email" placeholder="Correo Electronico" name = "correo" required > 
                        <input type="password" placeholder="Contraseña" name="contrasena" pattern=".{8,}" title="La contraseña debe tener al menos 8 caracteres" required > 
                        <button name="btn_inicio">Entrar</button>
                    </form>
    
                    <!--Formulario del Register-->
                    <form action="config/registrar_usuario_BD_Be.php" method="POST" class="formulario__register">
                        <h2>Registrarse</h2>
                        <input type="text" placeholder="Nombre completo" name="nombre_completo" required>
                        <input type="email" placeholder="Correo Electronico" name="correo" required>
                        <input type="text" placeholder="Usuario" name="usuario" required>
                        <input type="password" placeholder="Contraseña" name="contrasena" pattern=".{8,}" title="La contraseña debe tener al menos 8 caracteres" required>
                        <button name="btn_registro">Registrar</button>
                    </form>
                </div>

                <div class="advertencias" id="id_adevertencia">
                    <div class="advertencia_Usuario" id="id_adevertencia_Usuario">                    
                        <p>El Usuario ya existe, digite otra opción.</p>
                    </div>                    
                    <div class="advertencia_Correo" id="id_adevertencia_correo">                    
                        <p>El Correo ya existe, digite otra opción.</p>
                    </div>                        
                    <div class="advertencia_Usuario-Correo" id="id_adevertencia_correo_contrasena">                    
                        <p>Usuario y/o Contraseña incorrectos, digitelo de nuevo.</p>
                    </div>   
                    <div class="advertencia_Correcto" id="id_correcto_Usuario">                    
                        <p>¡Usuario registrado Exitosamente!</p>
                    </div>                      
                </div>
                <?php
                    echo'<script>var globalVariable;</script>'; 
                    if (isset($_SESSION['correoNo']) && $_SESSION['correoNo'] === true){       
                         echo '
                            <script> globalVariable = 12;</script>
                            <script src="assets/js/validacion.js"></script>
                        ';     
                    }
                    else if (isset($_SESSION['usuarioNo']) && $_SESSION['usuarioNo'] === true){  
                        echo '
                            <script> globalVariable = 11;</script>
                            <script src="assets/js/validacion.js"></script>
                        ';    
                    }
                    else if (isset($_SESSION['usuario_correoNo']) && $_SESSION['usuario_correoNo'] === true){  
                        echo '
                            <script> globalVariable = 1;</script>
                            <script src="assets/js/validacion.js"></script>
                        ';     
                    }
                    else if (isset($_SESSION['listaSesion']) && $_SESSION['listaSesion'] === true){  
                        echo '
                            <script> globalVariable = 2;</script>
                            <script src="assets/js/validacion.js"></script>
                        ';     
                    }
                    
                    else {
                        echo '
                            <script> globalVariable = 0;</script>
                            <script src="assets/js/validacion.js"></script>
                        '; 
                    }
                ?>

            </div>
        </div>
    </main>
    <script src="assets/js/scriptIndex.js"></script>
</body>
</html>

<?php
session_destroy(); 
?>