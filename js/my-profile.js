//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    
});
function imagenMostrar() {
    let preview = document.getElementById("imagenpreview");
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
      preview.src = reader.result;
    
    };
    if (file) {
        reader.readAsDataURL(file);   
    } else {
      preview.src = "";
    }
  }

  function guardar() {
  
    let perfil = {};

    perfil.nombre = document.getElementById('nombre').value 
    perfil.apellido=document.getElementById('apellido').value
    perfil.edad = document.getElementById('edad').value 
    perfil.telefono=document.getElementById('telefono').value
    perfil.email=document.getElementById("email").value
   

    localStorage.setItem('usuario', JSON.stringify(perfil));
    alert ( "Perfil guardado")
  }

  document.addEventListener('DOMContentLoaded',()=>{
    
    let perfil = JSON.parse(localStorage.getItem('usuario'));
   
    if (perfil != null){
        

      document.getElementById('nombre').value = perfil.nombre;
      document.getElementById('apellido').value = perfil.apellido;
      document.getElementById('edad').value= perfil.edad;
      document.getElementById('telefono').value = perfil.telefono;
      document.getElementById('email').value = perfil.email;
    

    }
      
    
   

  })
