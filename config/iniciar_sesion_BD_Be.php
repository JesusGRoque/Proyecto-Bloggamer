<?php
    session_start (); 
    include 'conexion_BD_Be.php'; 
    
    $correo = $_POST ['correo']; 
    $contrasena = $_POST ['contrasena']; 
    $contrasena = hash ('sha512', $contrasena); 

    $validar_login = mysqli_query ($conexion, "SELECT * FROM usuarios WHERE correo = '$correo' and contrasena = '$contrasena'"); 

    if (mysqli_num_rows ($validar_login) > 0) {
        $_SESSION ['usuario'] = $correo; 
        header ("location: ../templates/Inicio.html"); 
        exit ();
        // header ("location: ../bienvenida.php");
        exit ();
        
    } else {
        $_SESSION ['usuario_correoNo'] = true;    
        header ("location:../index.php"); 
        exit (); 
    }

    ?>