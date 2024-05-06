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

// Animales
let Miguel = new Animal(1, "Gato", "Miguel", ["Simpático", "Amigable"], false, "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg");

let Pepe = new Animal(2, "Gato", "Pepe", ["Simpático", "Amigable"], false, "https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png");

let Patán = new Animal(3, "Perro", "Patán", ["Simpático", "Amigable"], false, "https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg");

let Huesos = new Animal(4, "Perro", "Huesos", ["Simpático", "Amigable"], false, "https://i.ibb.co/sWw7f0Y/perro-huesos.png");

let Akira = new Animal(5, "Perra", "Akira", ["Simpática", "Amigable"], false, "https://pampermut.com/blog/wp-content/uploads/2020/05/Como-es-el-caracter-de-tu-perro-segun-su-horoscopo-scaled.jpg");

let Laika = new Animal(6, "Perra", "Laika", ["Simpática", "Amigable"], false, "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg");

let Pluto = new Animal(7, "Lemur", "Pluto", ["Simpático", "Amigable"], false, "https://www.akronzoo.org/sites/default/files/styles/uncropped_xl/public/2022-05/Ring-tailed-lemur-main.png?itok=T7g7bQt6");

let Marley = new Animal(8, "Ratón", "Marley", ["Simpático", "Amigable"], false, "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/05/09/5fa5334e4f8da.jpeg");

let Paco = new Animal(9, "Ñandú", "Paco", ["Simpático", "Amigable"], false, "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/183424031/1800");

let Pinky = new Animal(10, "Ratón", "Pinky", ["Simpático", "Amigable"], false, "https://img.freepik.com/foto-gratis/primer-plano-sobre-rata-blanca_23-2150760628.jpg");

let NieblaDiabla = new Animal(11, "Hamster", "Niebla Diabla", ["Simpático", "Amigable"], false, "https://www.zooplus.es/magazine/wp-content/uploads/2019/04/hamster-rasseportrait.jpg");

let Anónima = new Animal(12, "Serpiente", "Anónima", ["Simpática", "Amigable"], false, "https://d2r8r0qhs4bt8m.cloudfront.net/wp-content/uploads/2019/10/18163743/desktop-1425399420.jpg");

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