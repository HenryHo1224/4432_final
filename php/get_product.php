<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "final_report";
    

    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $result=$conn->query("SELECT * FROM `product` ORDER BY `product_no` DESC LIMIT 1");
    $product_data= $result->fetch_assoc();
    
    $product_data['image']=base64_encode($product_data['image']);
    $conn -> close();
    
    echo json_encode($product_data);
    exit;
?>