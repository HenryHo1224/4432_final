<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "final_report";
    
    $new_nickname = $_POST['nickname'];
    $new_email=$_POST['email'];
    $login_id=$_COOKIE["user"];

    
    $tmp_name=$_FILES['image']["tmp_name"];
    if($tmp_name!=null){
        $new_image = addslashes(file_get_contents($tmp_name));
    }


    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($new_nickname!=null) {
        $conn->query("UPDATE `people`
        SET `nickname`='$new_nickname'
        WHERE `login_id`='$login_id'; ");
    }
    if($new_email!=null){
        $conn->query("UPDATE `people`
        SET `email`='$new_email'
        WHERE `login_id`='$login_id'; ");
    }
    if($new_image!=null){
        $conn->query("UPDATE `people`
        SET `image`='$new_image'
        WHERE `login_id`='$login_id'; ");
    }
    

    $conn -> close();
    header("Location: http://localhost/4432_final/html/user_interface.html");
    exit;
    

  
?>