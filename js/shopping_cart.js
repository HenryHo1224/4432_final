
photo_data=JSON.parse(window.localStorage.getItem('shopping_cart'))
console.log(photo_data)
var cart_product =[];
var total_money = 0;
window.onload = function() {
  if (getCookie("user")==""){
    document.getElementById("login_area").innerHTML=`<a href=login_page.html id="login">log in</a>`;
  }else if(getCookie("user")=="admin"){
    document.getElementById("login_area").innerHTML=`<a href=admin_interface.html id="login">admin</a>`;
  }else {
    document.getElementById("login_area").innerHTML=`<a href=user_interface.html id="login">${getCookie("user")}</a>`;
  }

    for(i=0;i<photo_data.length;i++){
        var html = `
        <div id="product_block" class=${i}  >
            <img id="product_image" src="${photo_data[i].img}">
            <h2 id ='product_name' class=product_${i}>${photo_data[i].productId}</h2>
            <h2 id="border_line_box"></h2>
            <h2 id ='product_price'>${photo_data[i].number_to_buy}</h2>
            <input type="button" value="delete" onclick="delete_product(${i})">
        </div>
        `
        let name = photo_data[i].productId
        cart_product[i]=name +":"+photo_data[i].number_to_buy
        
        total_money+=parseInt(photo_data[i].number_to_buy)*parseInt(photo_data[i].price)
        console.log(total_money)
        document.getElementById('product_area').innerHTML += html ;
        
    }

    if (getCookie("user")==""){
        document.getElementById("login_area").innerHTML=`<a href=login_page.html id="login">log in</a>`;
      }else if(getCookie("user")=="admin"){
        document.getElementById("login_area").innerHTML=`<a href=admin_interface.html id="login">admin</a>`;
      }else {
        document.getElementById("login_area").innerHTML=`<a href=user_interface.html id="login">${getCookie("user")}</a>`;
      }
      document.getElementById('total_money').innerHTML = "total pay: \n$"+total_money ;

    console.log(cart_product)
    setCookie("shopping_cart",JSON.stringify(cart_product),300)

}

function delete_product(i){
    photo_data.splice(i,1);
    window.localStorage.setItem("shopping_cart",JSON.stringify(photo_data))
    location.reload();
}



