<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "final_report";
    
    $customer_name


    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $db_info=$conn->query("INSERT INTO `people`(`login_id`, 
    `password`, `nickname`, `email`, `image`, `gender`, `birthday`, `role`) 
    VALUES ('$login_id','$login_password','  $login_password','$email','$image','$gender','$birthday','customer')");
    
    $conn -> close();
    header("Location: login_fail.html");
    exit;

  
?>