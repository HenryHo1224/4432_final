<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "final_report";
    $user = $_COOKIE["user"];

    $data = json_decode($_COOKIE["shopping_cart"]);
    $conn = new mysqli($servername, $username, $password, $database);

    $result = $conn->query("SELECT `nickname` FROM `people` WHERE `login_id` = '$user'");
    $after_fathassoc = $result -> fetch_assoc();
    $nickname = $after_fathassoc["nickname"];


    foreach($data as $data){

        list($product_name, $number_to_buy) = explode(":", $data);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        $db_info =$conn->query("INSERT INTO `order`( `product_name`, `customer_id`, `number_product`, `nick_name`) 
        VALUES ('$product_name','$user','$number_to_buy','$nickname')");
        

        $conn->query("UPDATE `product` SET
        `stock`=`stock`-$number_to_buy WHERE `name`='$product_name'");
        print $data;
    }

    $conn -> close();
    setcookie("shopping_cart","",time() - 3600,'/');
    header("Location: http://localhost/4432_final/html/thank_you.html");
    exit;
?>