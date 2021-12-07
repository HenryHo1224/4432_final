function by_nickname(){
    var xmlhttp = new XMLHttpRequest();
    var shop_data;
    xmlhttp.open("GET","/4432_final/php/show_order_nickname.php")
    xmlhttp.send();
    
    xmlhttp.onload = function() {
         document.getElementById("table").innerHTML="";
        if (this.readyState === 4 || this.status === 200){
            var table = document.getElementById("table");
           

            console.log(xmlhttp);
            shop_data = JSON.parse(xmlhttp.responseText);
            
            console.log(shop_data)
            for(i=0;i<shop_data.length;i++){
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = shop_data[i].nick_name;
                cell2.innerHTML = shop_data[i].product_name;
                cell3.innerHTML = shop_data[i].customer_id;
                cell4.innerHTML = shop_data[i].number_product;
            }
            
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = "nick_name";
            cell2.innerHTML = "product_name";
            cell3.innerHTML = "customer_id";
            cell4.innerHTML = "number_product";
            
           
        }
        
    };
    
        xmlhttp.onerror = function() {
        alert("Request failed");
    };
    
}

function by_id(){
    var xmlhttp = new XMLHttpRequest();
    var shop_data;
    xmlhttp.open("GET","/4432_final/php/show_order_id.php")
    xmlhttp.send();
    
    xmlhttp.onload = function() {
        //var ourData = JSON.parse(xmlhttp.responseText);
        document.getElementById("table").innerHTML="";
        if (this.readyState === 4 || this.status === 200){ 
            var table = document.getElementById("table");
           

            console.log(xmlhttp);
            shop_data = JSON.parse(xmlhttp.responseText);
            
            console.log(shop_data)
            for(i=0;i<shop_data.length;i++){
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = shop_data[i].customer_id;
                cell2.innerHTML = shop_data[i].product_name;
                cell3.innerHTML =  shop_data[i].nick_name;
                cell4.innerHTML = shop_data[i].number_product;
            }
            
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = "customer_id";
            cell2.innerHTML = "product_name";
            cell3.innerHTML = "nick_name";
            cell4.innerHTML = "number_product";
        }
        
    };
    
        xmlhttp.onerror = function() {
        alert("Request failed");
    };
    
}





