
var xmlhttp = new XMLHttpRequest();
var photo_data;
xmlhttp.open("GET","/4432_final/php/get_children_product.php")
xmlhttp.send();

xmlhttp.onload = function() {
    //var ourData = JSON.parse(xmlhttp.responseText);
    if (this.readyState === 4 || this.status === 200){ 
    console.log(xmlhttp);
    photo_data = JSON.parse(xmlhttp.responseText);
    console.log(photo_data[0].image)

    for(i=0;i<photo_data.length;i++){
        var html = `
        <div id="product_block">
            <img id="product_image" src="data:image/jpg;base64,${photo_data[i].image}">
            <h2 id ='product_name'>${photo_data[i].name}</h2>
            <h2 id="border_line_box"></h2>
            <h2 id ='product_price'>$${photo_data[i].price}</h2>
        </div>
        `
        document.getElementById('product_area').innerHTML += html ;
    }
    
    
    }
};

    xmlhttp.onerror = function() {
    alert("Request failed");
};






