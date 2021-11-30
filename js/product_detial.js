
var xmlhttp_get = new XMLHttpRequest();


xmlhttp_get.open("GET","/4432_final/php/pick_product.php")
xmlhttp_get.send();
xmlhttp_get.onload = function() {
    //var ourData = JSON.parse(xmlhttp.responseText);
    if (this.readyState === 4 || this.status === 200){ 
        var photo_data = JSON.parse(xmlhttp_get.responseText);
        console.log(photo_data)
       $("#detial_image").attr("src",`data:image/jpg;base64,${photo_data[0].image}`)
       $("#detial_name").text(photo_data[0].name)
       $("#detial_price").text(photo_data[0].price)
       $("#detial_stock").text(photo_data[0].stock)
    }
};

xmlhttp_get.onerror = function() {
    alert("Request failed");
};

function try_click(){
    console.log("hello")
}




