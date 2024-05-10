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

/* Animales */
let miListaDeAnimales = [];

let Miguel = new Animal(
  1,
  "Gato",
  "Miguel",
  ["Simpático", "Amigable"],
  false,
  "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
);
miListaDeAnimales.push(Miguel);

let Pepe = new Animal(
  2,
  "Gato",
  "Pepe",
  ["Simpático", "Amigable"],
  false,
  "https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png"
);
miListaDeAnimales.push(Pepe);

let Patán = new Animal(
  3,
  "Perro",
  "Patán",
  ["Simpático", "Amigable"],
  false,
  "https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg"
);
miListaDeAnimales.push(Patán);

let Huesos = new Animal(
  4,
  "Perro",
  "Huesos",
  ["Simpático", "Amigable"],
  false,
  "https://i.ibb.co/sWw7f0Y/perro-huesos.png"
);
miListaDeAnimales.push(Huesos);

let Akira = new Animal(
  5,
  "Perra",
  "Akira",
  ["Simpática", "Amigable"],
  false,
  "https://pampermut.com/blog/wp-content/uploads/2020/05/Como-es-el-caracter-de-tu-perro-segun-su-horoscopo-scaled.jpg"
);
miListaDeAnimales.push(Akira);

let Laika = new Animal(
  6,
  "Perra",
  "Laika",
  ["Simpática", "Amigable"],
  false,
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
);
miListaDeAnimales.push(Laika);

let Pluto = new Animal(
  7,
  "Lemur",
  "Pluto",
  ["Simpático", "Amigable"],
  false,
  "https://www.akronzoo.org/sites/default/files/styles/uncropped_xl/public/2022-05/Ring-tailed-lemur-main.png?itok=T7g7bQt6"
);
miListaDeAnimales.push(Pluto);

let Marley = new Animal(
  8,
  "Ratón",
  "Marley",
  ["Simpático", "Amigable"],
  false,
  "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/05/09/5fa5334e4f8da.jpeg"
);
miListaDeAnimales.push(Marley);

let Paco = new Animal(
  9,
  "Ñandú",
  "Paco",
  ["Simpático", "Amigable"],
  false,
  "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/183424031/1800"
);
miListaDeAnimales.push(Paco);

let Pinky = new Animal(
  10,
  "Ratón",
  "Pinky",
  ["Simpático", "Amigable"],
  false,
  "https://img.freepik.com/foto-gratis/primer-plano-sobre-rata-blanca_23-2150760628.jpg"
);
miListaDeAnimales.push(Pinky);

let NieblaDiabla = new Animal(
  11,
  "Hamster",
  "Niebla Diabla",
  ["Simpático", "Amigable"],
  false,
  "https://www.zooplus.es/magazine/wp-content/uploads/2019/04/hamster-rasseportrait.jpg"
);
miListaDeAnimales.push(NieblaDiabla);

let Anónima = new Animal(
  12,
  "Serpiente",
  "Anónima",
  ["Simpática", "Amigable"],
  false,
  "https://d2r8r0qhs4bt8m.cloudfront.net/wp-content/uploads/2019/10/18163743/desktop-1425399420.jpg"
);
miListaDeAnimales.push(Anónima);
/* Fin animales */

//Resolver evento click
//Resolver estado  adoptado cuando se hace click
//Crear los animales
//Armar una estructura de animales mas compacta

window.onload = function () {
  // Variable Global
  let contadorAdoptados = 0;

  //Funciones maullar y ladrar de patitas

  // Al tocar la imagen, desplega un alerta.
  function saludar(unSaludo) {
    alert(unSaludo); // Manda un alerta
  }

  let coleccionPatitas = document.querySelectorAll(".logo");

  for (
    let patitaNumero = 0;
    patitaNumero < coleccionPatitas.length;
    patitaNumero++
  ) {
    const unaPatita = coleccionPatitas[patitaNumero];
    if (patitaNumero % 2 === 0) {
      //Si la patita es par
      unaPatita.addEventListener("click", () => saludar("Miau"));
    } else {
      //Si la patita es impar
      unaPatita.addEventListener("click", () => saludar("Guau"));
    }
  } //Fin maullar ladrar

  // Función adoptar suma al contador y canmbia estado.
  function adoptar(elemento) {
    elemento.remove();
    //elemento.style.display = "none";
    let contadorHTML = document.querySelector("#contadorAnimales");
    contadorAdoptados++;
    contadorHTML.textContent = contadorAdoptados;
  }

  function crearAnimal(unAnimal) {
    //
    let nuevaFicha = document.createElement("div");
    nuevaFicha.classList.add("ficha");
    nuevaFicha.id = "animal" + unAnimal.id;
    nuevaFicha.innerHTML = `
    <div id="imagen${unAnimal.id}" class="imagenMascota">
      <div class="nombreMascota">${unAnimal.nombre}</div>
    </div>
    <ul class="virtudes">
      <li>${unAnimal.virtudes[0]}</li>
      <li>${unAnimal.virtudes[1]}</li>
    </ul>
    <button class="botonAdoptar" id="adoptar${unAnimal.id}">Adoptar</button>
  `;
    document.querySelector("#grilla").appendChild(nuevaFicha);
    nuevaFicha.addEventListener("click", function () {
      adoptar(nuevaFicha);
    });
    let miImagen = document.querySelector(`#imagen${unAnimal.id}`);
    miImagen.style = `background-image: linear-gradient(to bottom, #ffffff00 0%, #000000 100%), url(${unAnimal.imagen})`;
  }

  //Crear animales y asocia el evento click adoptar
  for (let i = 0; i < miListaDeAnimales.length; i++) {
    crearAnimal(miListaDeAnimales[i]);
  }
};