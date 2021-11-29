<?php
echo "Filename: " . $_FILES['file']['name']."<br>";
echo "Type : " . $_FILES['file']['type'] ."<br>";
echo "Size : " . $_FILES['file']['size'] ."<br>";
echo "Temp name: " . $_FILES['file']['tmp_name'] ."<br>";
echo "Error : " . $_FILES['file']['error'] . "<br>";

$tmp_name  = $_FILES['file']['tmp_name'];

$fp = fopen($tmp_name, 'rb');
echo $fp;

$file_content = file_get_contents($tmp_name);

echo '<img src="data:image/jpg;base64,' .  base64_encode($file_content)  . '" />'
?>