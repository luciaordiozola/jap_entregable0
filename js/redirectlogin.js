document.addEventListener("DOMContentLoaded",function (e){
    var redireccion = "../jap_entregable0/index.html"
    if(localStorage.getItem("usuarioName")===null){
       window.location.href= redireccion;
    }else{
       document.getElementById("bienvenido").innerHTML ="Bievenido" + ":" +  " " + localStorage.getItem("usuarioName")
    }
 });
  
function logout (){
    localStorage.clear()
}

   