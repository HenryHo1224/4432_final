<?php

$db = new mysqli("localhost", "root", "","final_report");

if(!$db)
{
    die("Connection failed: " . mysqli_connect_error());
}

?>