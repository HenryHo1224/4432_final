
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

