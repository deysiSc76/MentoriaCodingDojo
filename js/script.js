
window.onload= function(){
    // Variable Global
    let contadorAdoptados = 0;
    
    // Al tocar la imagen, desplega un alerta.
    function ladrar() {
        alert("Guau guau!"); // Manda un alerta
    };
    
    // Al tocar una ficha, elimina la ficha y suma al contador.
    function adoptar(elemento) {
        elemento.remove(); 
        //elemento.style.display = "none"; 
        let contadorHTML = document.querySelector("#contadorAnimales");
        contadorAdoptados++;
        contadorHTML.textContent = contadorAdoptados;
    }
    
    /*
    let logoImagen = document.querySelector(".logo");
    
    logoImagen.addEventListener("click", function (elemento) {
        elemento.remove();
        //elemento.style.display = "none"; 
        contadorAdoptados++;
        let contadorHTML = document.querySelector("#contadorAnimales");
        contadorHTML.textContent = contadorAdoptados;
    })
    */
   let iconosPatitas= document.querySelector(".logo");
   console.log(iconosPatitas);
}