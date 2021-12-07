var user_now = getCookie("user")
var gender;


var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","/4432_final/php/get_user.php")
xmlhttp.send();

xmlhttp.onload = function() {
  //var ourData = JSON.parse(xmlhttp.responseText);
  if (this.readyState === 4 || this.status === 200){ 
  console.log(xmlhttp.responseText);
  var user_data = JSON.parse(xmlhttp.responseText);

  set_data()
  }
  function set_data(){
      $("#user_image").attr("src",`data:image/jpg;base64,${user_data[0].image}`)
      $("#user_name").text(user_data[0].login_id)
      $("#user_nickname").text(user_data[0].nickname)
      $("#user_email").text(user_data[0].email)
     
      $("#user_gender").text(user_data[0].gender)
     
      $("#user_birthday").text(user_data[0].birthday)
      
  }
  
}



  xmlhttp.onerror = function() {
    alert("Request failed");
};




