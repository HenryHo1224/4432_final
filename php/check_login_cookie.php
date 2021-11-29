<?php
    

    if(isset($_COOKIE["user"])){
        echo $_COOKIE["user"];
    }else{
        echo "no one have logined";
    }
?>