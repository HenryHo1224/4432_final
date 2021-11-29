
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","/4432_final/php/check_login_cookie.php")
xmlhttp.send();

xmlhttp.onload = function() {
    //var ourData = JSON.parse(xmlhttp.responseText);
    if (this.readyState === 4 || this.status === 200){ 
      console.log(xmlhttp.responseText); // get cookie
/*
      if(xmlhttp.responseText=="[]"){
        var html = `<a href=login_page.html id="login">log in</a>`
      }else{
        var html =`<p id='login'>${xmlhttp.responseText}</p>`
      }
      document.getElementById('login').replaceWith(html) ;
    */
    }
};

xmlhttp.onerror = function() {
    alert("Request failed");
};

