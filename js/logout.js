

function logout(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get","/4432_final/php/logout.php");
    xmlhttp.send();
    console.log(xmlhttp);
}
