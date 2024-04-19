/*
- Al tocar el boton de la patita, que aparezca un alerta que diga guau guau
- Cuando el usuario haga click en el boton adoptar, se adopte inmediatamente y desaparezca la ficha.
*/

// Variable Global
let contadorAdoptados = 0;

// Al tocar la imagen, desplega un alerta.
function ladrar() {
    alert("Guau guau!"); // Manda un alerta
};

// Al tocar una ficha, elimina la ficha y suma al contador.
function adoptado(elemento) {
    elemento.remove(); 
    //elemento.style.display = "none"; 
    let contadorHTML = document.querySelector("#contadorAnimales");
    contadorAdoptados++;
    contadorHTML.textContent = contadorAdoptados;
}