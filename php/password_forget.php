<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "final_report";

    $email=$_POST['email'];
    $birthday=$_POST['birthday'];
    
    $conn = new mysqli($servername, $username, $password, $database);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    $db_info=$conn->query("SELECT * FROM `people` WHERE `email` = '".$email."' AND `birthday` = '".$birthday."'");
    print(mysqli_num_rows($db_info));
    if (mysqli_num_rows($db_info) == 1) {
        $content = $db_info -> fetch_assoc();
        setcookie("forget_user",$content['login_id'],time()+(3600),"/");
        $conn -> close();
        header("Location: /4432_final/html/reset_password.html");
       
    exit;
    } 
    else {
    $conn -> close();
    header("Location: /4432_final/html/can't_find_ur_data.html");
    exit;
    }

  

?>