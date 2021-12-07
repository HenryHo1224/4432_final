<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "final_report";

$button_input= $_POST['submit'];
$name=$_COOKIE['updated_picked'];
$new_name=$_POST['product_name'];
$price = $_POST['price'];
$stock=$_POST['stock'];


$tmp_name=$_FILES['image']["tmp_name"];
if($tmp_name!=null){
    $new_image = addslashes(file_get_contents($tmp_name));
}



$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if(strcmp($button_input, "update") == 0){
    
    if($price!=null){
        $conn->query("UPDATE `product`
        SET `price`=price + $price
        WHERE `name`='$name'; ");
    }
    if($stock!=""){
        $conn->query("UPDATE `product`
        SET `stock`=stock + $stock
        WHERE `name`='$name'; ");
    }
    if($tmp_name!=null){
        $conn->query("UPDATE `product`
        SET `image`='$new_image'
        WHERE `name`='$name'; ");
    }if ($new_name!=null) {
        $conn->query("UPDATE `product`
        SET `name`='$new_name'
        WHERE `name`='$name'; ");
    }
    
}else if(strcmp($button_input, "delete") == 0){
    $conn->query("DELETE FROM `product`
     WHERE `name`='$name';");
}


$conn -> close();
header("Location: http://localhost/4432_final/html/admin_interface.html");
  
exit;



?>
