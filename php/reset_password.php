<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "final_report";
    
    $new_login_password = $_POST['login_password'];
    $login_id =$_COOKIE["forget_user"];

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

   
    $conn->query("UPDATE `people`
    SET `password`='$new_login_password'
    WHERE `login_id`='$login_id'; ");
    $past = time() - 3600;
    foreach ( $_COOKIE as $key => $value )
    {
        setcookie( $key, $value, $past, '/' );
    }
    setcookie("user",$login_id,time()+(3600),"/");
    $conn -> close();
    header("Location: http://localhost/4432_final/html/user_interface.html");
    exit;
    

  
?>