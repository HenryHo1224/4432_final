<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "final_report";


$product_picked = $_COOKIE["product_picked"];
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result=$conn->query("SELECT * FROM `product` WHERE `name` = '$product_picked' ");
while($row = $result -> fetch_assoc()){
    $row['image']=base64_encode($row['image']);
    $data_array[] = $row;
}


$json_data = json_encode($data_array);


echo $json_data;
$conn -> close();
exit;



    
?>