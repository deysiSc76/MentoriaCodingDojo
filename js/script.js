window.onload= function(){
// Variable Global
let contadorAdoptados = 0;

// Al tocar una ficha, elimina la ficha y suma al contador.
function adoptar(elemento) {
  elemento.remove();
  //elemento.style.display = "none";
  let contadorHTML = document.querySelector("#contadorAnimales");
  contadorAdoptados++;
  contadorHTML.textContent = contadorAdoptados;
}

const coleccionFichas = document.querySelectorAll(".ficha");

for (let indiceFicha = 0; indiceFicha < coleccionFichas.length; indiceFicha++) {
  const unaFicha = coleccionFichas[indiceFicha];
  unaFicha.addEventListener("click",adoptar(unaFicha))
}


//Funciones maullar y ladrar de patitas

// Al tocar la imagen, desplega un alerta.
function saludar(unSaludo) {
  alert(unSaludo); // Manda un alerta
}

let coleccionPatitas = document.querySelectorAll(".logo");

for (let patitaNumero = 0;patitaNumero < coleccionPatitas.length;patitaNumero++) {
  const unaPatita = coleccionPatitas[patitaNumero];
  if (patitaNumero%2===0) {//Si la patita es par
    unaPatita.addEventListener("click",saludar("Miau"))
  } else {//Si la patita es impar
    unaPatita.addEventListener("click",saludar("Guau"))
  }
}
//Fin maullar ladrar


}
