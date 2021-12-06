let products = [];
var xmlhttp_get = new XMLHttpRequest();


xmlhttp_get.open("GET","/4432_final/php/pick_product.php")
xmlhttp_get.send();
xmlhttp_get.onload = function() {
    //var ourData = JSON.parse(xmlhttp.responseText);
    if (this.readyState === 4 || this.status === 200){ 
        var  photo_data=JSON.parse(xmlhttp_get.responseText);
        set_data()
        if(photo_data[0].stock<=0){
            $(':input[type="button"]').prop('disabled', true);
        }
    }
    function set_data(){
        $("#detial_image").attr("src",`data:image/jpg;base64,${photo_data[0].image}`)
        $("#detial_name").text(photo_data[0].name)
        $("#detial_price").text("$" +photo_data[0].price)
        $("#detial_stock").text(photo_data[0].stock)
    }
};

xmlhttp_get.onerror = function() {
    alert("Request failed");
};


function add_to_cart(){
    
    if($("#number_to_buy").val() < 0){
        alert ('invalid input');
    }else if($("#number_to_buy").val()>parseInt($('#detial_stock').text())){
        alert ('invalid input');
    }else if ($("#number_to_buy").val()==""){
        alert ('invalid input');
    }else{
        products.push({'productId' : $("#detial_name").text() + 1,"number_to_buy"  : $("#number_to_buy").val()});
    }
    
    if(window.localStorage.getItem("shopping_cart")===null){
        window.localStorage.setItem("shopping_cart",JSON.stringify(products))
    }else{
        var shopping_cart_data = JSON.parse(window.localStorage.getItem("shopping_cart"))
        shopping_cart_data.push(products);
        window.localStorage.setItem("shopping_cart",JSON.stringify(shopping_cart_data))
    }
    window.location.href="/4432_final/html/shop_interface_male.html"
    console.log(window.localStorage.getItem("shopping_cart"))
}





