
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","/4432_final/php/get_product.php")
xmlhttp.send();

xmlhttp.onload = function() {
    //var ourData = JSON.parse(xmlhttp.responseText);
    if (this.readyState === 4 || this.status === 200){ 
    console.log(xmlhttp);
    var photo_data = JSON.parse(xmlhttp.responseText);
    console.log(typeof photo_data.image);
    document.getElementById('product_image').src="data:image/jpg;base64,"+photo_data.image;
    document.getElementById('product_name').innerHTML=photo_data.name;
    document.getElementById('product_price').innerHTML=photo_data.price;
  }
};


  xmlhttp.onerror = function() {
    alert("Request failed");
};




