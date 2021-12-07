<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "final_report";
  
  $login_id = $_POST['login_id'];
  $login_password = $_POST['login_password'];
  $nickname = $_POST['nickname'];
  $email=$_POST['email'];

  $gender = $_POST['gender'];
  $birthday = $_POST['birthday'];

  $tmp_name=$_FILES['image']["tmp_name"];

  $file_content = addslashes(file_get_contents($tmp_name));


  $conn = new mysqli($servername, $username, $password, $database);

  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }


  $db_info=$conn->query("SELECT * FROM `people` WHERE `login_id` = '".$login_id."' or `email`= '".$email."'");

  if (mysqli_num_rows($db_info) != 0) {
    header("Location: http://localhost/4432_final/html/regester_fail.html");
    $conn -> close();
    exit;
  }else{
    $regester=$conn->query("INSERT INTO `people`(`login_id`, 
    `password`, `nickname`, `email`, `image`, `gender`, `birthday`, `role`) 
    VALUES ('$login_id','$login_password','$nickname','$email','$file_content','$gender','$birthday','customer')");
    $conn -> close();
    header("Location: http://localhost/4432_final/html/login_page.html");
    exit;
  }

  
?>