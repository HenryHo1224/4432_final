
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
        
            <div id="product_block" class=${i} onclick="redirect_to_product_page(this)" >
                <img id="product_image" src="data:image/jpg;base64,${photo_data[i].image}">
                <h2 id ='product_name' class=product_${i}>${photo_data[i].name}</h2>
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

function redirect_to_product_page(item){
    var number = $(item).attr("class")
    setCookie("product_picked" ,$(`h2.product_${number}`).text())
    window.location.replace("/4432_final/html/product_detial.html");
    console.log(getCookie("product_picked"))
}


function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 1000*30);
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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