<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "final_report";
    

    
    $product_name=$_POST['product_name'];
    $product_price = $_POST['product_price'];
    $product_stock=$_POST['product_stock'];
    $product_category=$_POST['product_category'];
    

    $tmp_name=$_FILES['product_image']["tmp_name"];
    $file_content = addslashes(file_get_contents($tmp_name));
  
    
    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $db_info =$conn->query("INSERT INTO `product`(`name`, `price`, `image`,`category`,`stock`) 
    VALUES ('$product_name','$product_price','$file_content','$product_category','$product_stock')");
    
    $conn -> close();
    header("location: /4432_final/html/product_preview.html");
    exit;

  
?>