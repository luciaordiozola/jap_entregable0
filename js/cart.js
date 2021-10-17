//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

let htmlContentToAppend = "";
const CARRITO_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
function mostrarProducto (array){
    for (let i = 0; i < array.length; i++){
        let carrito=array[i]
        if (carrito.currency === "USD"){
            carrito.unitCost= carrito.unitCost* 40;
        }

       
        htmlContentToAppend+=`
        <div class="container-fluid">
        <div class="row">
            <aside class="col-lg-9">
                <div class="card">
                    <div class="table-responsive">
                        <table class="table table-borderless table-shopping-cart">
                            <thead class="text-muted">
                                <tr class="small text-uppercase">
                                    <th scope="col">Producto</th>
                                    <th scope="col" width="120">Precio</th>
                                    <th scope="col" width="120">Cantidad</th>
                                    <th scope="col" width="120">Subtotal</th>
                                    <th scope="col" class="text-right d-none d-md-block" width="200"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <figure class="itemside align-items-center">
                                            <div class="aside"><img src="${carrito.src}"  alt= "${carrito.name}"class="img-sm"></div>
                                            <figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">${carrito.name}</a>
                                            </figcaption>
                                        </figure>
                                    </td>
                                    <td class="precio">${carrito.unitCost}</td></div>
                                  
                                 <th><input type="number" min="0"  onchange="sumar()" style= width:55px></th>
                                 
                                        <td class="s"> <span id="subTotal${i}"</span></td>
                                   
                                    <td class="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist" title="</a> <a href="" class="btn btn-light" data-abc="true">Borrar</a> </td>
                                </tr>
                            
                            </tbody>
                        </table>
                        </div>
                        </div>
                        </aside>
                        



       
    `
    document.getElementById("primerProducto").innerHTML=htmlContentToAppend;
    
    }
}

document.addEventListener("DOMContentLoaded", function(e){
getJSONData(CARRITO_INFO_URL).then(function(resultObj){
    productoArray=resultObj.data;
    let datos = productoArray.articles;
    mostrarProducto(datos);
});

});

function sumar(){
    let precios = document.getElementsByClassName("precio");
    let cantidades= document.getElementsByTagName("input");
    let subTotal= 0;
    

    for (let i=0;i < precios.length; i++){
        let sumar= 0;
        sumar=parseFloat(precios[i].innerHTML) * parseFloat(cantidades[i].value);
        subTotal+=sumar
        document.getElementById("subTotal"+i).innerHTML=(sumar).toFixed(2); 
      
    }
    

    document.getElementById("total").innerHTML=(subTotal).toFixed(2); 
}