<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "final_report";

  $login_id=$_POST['login_id'];
  $login_password=$_POST['login_password'];
  $button_path=$_POST['submit_b'];
  
  $conn = new mysqli($servername, $username, $password, $database);
  
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  if (strcmp($button_path,"login")==0){

  $db_info=$conn->query("SELECT * FROM `people` WHERE login_id = '".$login_id."' AND password = '".$login_password."'");
    print(mysqli_num_rows($db_info));
    if (mysqli_num_rows($db_info) == 1) {
      $content = $db_info -> fetch_assoc();
      setcookie("user",$content['login_id'],time()+(3600),"/");
      $conn -> close();
      header("Location: /4432_final/html/login_successful.html");
      
      exit;
    } 
    else {
      $conn -> close();
      header("Location: /4432_final/html/login_fail.html");
      exit;
    }
  }else{
    $conn -> close();   
    header("Location: /4432_final/html/regester.html");
    exit;
    }
  

?>