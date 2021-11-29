<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "final_report";
  

  $button_path=$_POST['login_id'];
  $login_id = $_POST['login_password'];
  $login_password = $_POST['nickname'];
  $email=$_POST['email'];

  $gender = $_POST['gender'];
  $birthday = $_POST['birthday'];

  $tmp_name=$_FILES['image']["tmp_name"];

  $file_content = addslashes(file_get_contents($tmp_name));


  $conn = new mysqli($servername, $username, $password, $database);

  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
  
  $db_info=$conn->query("INSERT INTO `people`(`login_id`, 
  `password`, `nickname`, `email`, `image`, `gender`, `birthday`, `role`) 
  VALUES ('$login_id','$login_password','  $login_password','$email','$file_content','$gender','$birthday','customer')");
  
  $conn -> close();
  exit;

  
?>