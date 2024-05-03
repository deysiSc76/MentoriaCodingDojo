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
  unaFicha.addEventListener("click", function () {
    adoptar(unaFicha);
  })
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
    unaPatita.addEventListener("click", () => saludar("Miau"))
  } else {//Si la patita es impar
    unaPatita.addEventListener("click", () => saludar("Guau"))
  }
}
//Fin maullar ladrar
}

//Clase Animal
class Animal {
  constructor(id, tipo, nombre, virtudes, adoptado, imagen) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.virtudes = virtudes;
    this.adoptado = adoptado;
    this.imagen = imagen;
  }
}

//Terminar de agregar todos los animales
let Miguel = new Animal(1, "Gato", "Miguel", ["Simpático", "Amigable"], false, "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg");

function crearAnimal(unAnimal) {  //Falta imagen y adoptado
  let nuevaFicha = document.createElement("div");
  nuevaFicha.classList.add("ficha");
  nuevaFicha.id = unAnimal.id;
  nuevaFicha.innerHTML = `
    <div class="imagenMascota">
      <div class="nombreMascota">${unAnimal.nombre}</div>
    </div>
    <ul class="virtudes">
      <li>${unAnimal.virtudes[0]}</li>
      <li>${unAnimal.virtudes[1]}</li>
    </ul>
    <button class="botonAdoptar">Adoptar</button>
  `;
  document.querySelector("#grilla").appendChild(nuevaFicha);
}