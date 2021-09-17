//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var category = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}


function productosRelacionados (array){
    let htmlContentToAppend = "";

    for(let i = 0; i < category.relatedProducts.length; i++){
        let product = array[category.relatedProducts[i]];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + product.imgSrc + `" alt=""> 
                <p class "mb-1> ` + product.description + ` </p>
           
                </div>
        </div>
        `

        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend;
    }
}
 var comments = {};
function showComments(array){
let htmlContentToAppend = "";
    
for(let i = 0; i < array.length; i++){
        let commentsProducts = array[i];

        htmlContentToAppend += `
        <div class="d-flex w-100 justify-content-between">
        <h4 class = "mb-1"> ${commentsProducts.user}</h4>
        <p  class "mb-1">${newRating (commentsProducts.score)}</p>
            </div>
            
                <p  class "mb-1">${commentsProducts.description}</p>
                
        `
        document.getElementById("commentsProducts").innerHTML = htmlContentToAppend;   
}}
        
    
       function newRating (rating){
        let htmlContentToAppend = "";
       
        for(i=0;i<5;i++){  
        if(i<rating){htmlContentToAppend +=`<span class="fa fa-star checked"></span>`}
         else{htmlContentToAppend += `<span class="fa fa-star"></span>`
  }} return htmlContentToAppend}
  


   



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let soldCountHTML = document.getElementById("soldCount");
            let productHTML = document.getElementById("product");
            /*let categoryCostHTML = document.getElementById("cost");
            let productCriteriaHTML = document.getElementById("productCriteria");*/
        

            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            soldCountHTML.innerHTML = category.soldCount;
            productHTML.innerHTML = category.category;
            /*categoryCostHTML.innerHTML= category.currency + category.cost;
            productCriteriaHTML.innerHTML= category.productCriteria;*/
           

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);

    
        }
    });

    

    getJSONData(PRODUCTS_URL).then(function(dataProductos){
        productsArray=dataProductos.data;
        productosRelacionados(productsArray);
  

});
});

getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(dataComments){
    commentsArray= dataComments.data;
    showComments(commentsArray);
       

   });


    
 
