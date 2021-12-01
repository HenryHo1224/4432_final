
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function logout(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("get","/4432_final/php/logout.php");
  xmlhttp.send();
  location.reload();
}

window.onload = function() {
  if (getCookie("user")==""){
    document.getElementById("login_area").innerHTML=`<a href=login_page.html id="login">log in</a>`;
  }else if(getCookie("user")=="admin"){
    document.getElementById("login_area").innerHTML=`<a href=admin_interface.html id="login">admin</a>`;
  }else {
    document.getElementById("login_area").innerHTML=`<a href=user_interface.html id="login">${getCookie("user")}</a>`;
  }
}

