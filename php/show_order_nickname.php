<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "final_report";
    $conn = new mysqli($servername, $username, $password, $database);

   
    $result=$conn->query("SELECT * FROM `order` ORDER by `nick_name` LIMIT 30");
    while($row = $result -> fetch_assoc()){
        
        $data_array[] = $row;
    }

    $conn -> close();
    echo json_encode($data_array);
    exit;
?>