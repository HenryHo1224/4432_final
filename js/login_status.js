function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function logout(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("get","/4432_final/php/logout.php");
  xmlhttp.send();
  window.location.href = '/4432_final/html/login_page.html'
  window.localStorage.clear()
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

