// EDICION COMENTADA.
// SI TIENES DUDAS PREGUNTA AL WSP
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
    elemento.remove(); // Elimina el elemento HTML
    //elemento.style.display = "none"; // Cambia su display a nulo. No elimina el elemento.

    // Método 1
    let contadorHTML = document.querySelector("#contadorAnimales");
    contadorAdoptados++;
    contadorHTML.textContent = contadorAdoptados;
    // Método 2
    /*
    let contadorNumero = Number(contadorHTML.textContent);
    contadorNumero++
    contadorHTML.textContent = contadorNumero;
     */

    /* Diferencia entre métodos:
        El primero suma usando una variable global,
            la cuál podemos utilizar en otras funciones.
        La segunda usa el valor que está escrito en el html y le suma uno.
    */
}