
var xmlhttp = new XMLHttpRequest();
var photo_data;
xmlhttp.open("GET","/4432_final/php/check_product.php")
xmlhttp.send();

xmlhttp.onload = function() {
    //var ourData = JSON.parse(xmlhttp.responseText);
    if (this.readyState === 4 || this.status === 200){ 
        console.log(xmlhttp);
        photo_data = JSON.parse(xmlhttp.responseText);
        console.log(photo_data[0].image)

        for(i=0;i<photo_data.length;i++){
            var html = `
        
            <div id="product_block" class=${i} onclick="redirect_to_product_page(this)" >
                <img id="product_image" src="data:image/jpg;base64,${photo_data[i].image}">
                <h2 id ='product_name' class=product_${i}>${photo_data[i].name}</h2>
                <h2 id="border_line_box"></h2>
                <h2 id ='product_price'>${photo_data[i].stock}</h2>
            </div>

            `
            document.getElementById('product_area').innerHTML += html ;
        }
    }

    
};

    xmlhttp.onerror = function() {
    alert("Request failed");
};

function redirect_to_product_page(item){
    var number = $(item).attr("class")
    setCookie("updated_picked" ,$(`h2.product_${number}`).text())
    window.location.replace("/4432_final/html/updated_product.html");
    console.log(getCookie("updated_picked"))
}


function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 1000*30);
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
