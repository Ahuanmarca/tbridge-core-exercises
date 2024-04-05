console.log(`
Ejercicios Condiciones y Objetos/Arrays

Crea un objeto en lavariable usuario de tal modo que
el siguiente código no muestre por consola 'suspendes'
`)

const usuario = {
  nombre: "María",
  direccion: {
    ciudad: "Madrid",
  },
  intereses: ["cocinar"],
  trabajos: [
    {
      empresa: "barrioBEAT",
      rol: "video editor",
    },
    {
      empresa: "Google",
      rol: "full-stack developer",
    },
  ],
};

// TEST 1
if (typeof usuario === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 2
if (usuario.nombre === "María") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3
if (usuario.direccion.ciudad === "Madrid") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 4
if (usuario.intereses.includes("cocinar")) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 5
if (usuario.trabajos.length === 2) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (usuario.trabajos[1].empresa === "Google") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

console.log(`
Ejercicios Bucles

Dado un array de números, imprimir en la consola 
solo los números impares.
`)
const numbersArray = [...Array(20).keys()];
numbersArray.forEach((number) => {
  if (number % 2 === 1) {
    console.log(number);
  }
});

console.log(`
Dado un array de objetos con propiedades "nombre" 
y "edad", imprimir en la consola solo los nombres 
de las personas mayores de 18 años.
`)
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 15 },
  { nombre: "Luisa", edad: 20 },
  { nombre: "Carlos", edad: 18 },
];

personas.forEach((persona) => {
  if (persona.edad > 18) {
    console.log(persona.nombre);
  }
});

console.log(`
Utiliza la siguiente array para resolver 
los próximos ejercicios:

let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

- Crea un array con los animales que son felinos y 
  mayores de 4 años. No utilices el método filter de 
  las arrays y muéstralo por consola.
- Crea un array con los animales que son herbívoros y 
  tienen una edad par. No utilices el método filter de 
  las arrays y muéstralo por consola.
- Crea un array con los animales que son omnívoros o 
  aves y menores de 3 años. No utilices el método 
  filter de las arrays y muéstralo por consola.
- Crea un array con los animales que su especie 
  empieza por "H". No utilices el método filter de 
  las arrays y muéstralo por consola.
- Crea un array con los animales cuyo nombre tenga más 
  de 4 letras y su especie sea felino o herbívoro. No 
  utilices el método filter de las arrays y muéstralo 
  por consola.
`)

let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

const felinosMayoresQue4 = [];
const herviborosEdadPar = [];
const omnivorosOAvesMenoresDe3 = [];
const empiezanConH = [];
const masDe4Letras = [];

for (const animal of animales) {
  const { nombre, especie, edad } = animal;
  if (especie === "Felino" && edad > 4) felinosMayoresQue4.push(animal);
  if (especie === "Herbívoro" && edad % 2 === 0) herviborosEdadPar.push(animal);
  if ((especie === "Omnívoro" || especie === "Ave") && edad < 3)
    omnivorosOAvesMenoresDe3.push(animal);
  if (especie[0] === "H") empiezanConH.push(animal);
  if (nombre.length > 4 && (especie === "Felino" || especie === "Herbívoro"))
    masDe4Letras.push(animal);
}

console.log(felinosMayoresQue4);
console.log(herviborosEdadPar);
console.log(omnivorosOAvesMenoresDe3);
console.log(empiezanConH);
console.log(masDe4Letras);

console.log(`
Ejercicios Funciones

Crea una función en contarCaracteres(array) que 
reciba como parámetro un array de cadenas de 
caracteres y devuelva la cantidad total de 
caracteres que hay en todas las cadenas juntas. 
Puedes utilizar un ciclo for...of para recorrer 
el array y contar los caracteres.
`)

function contarCaracteres(array) {
  let total = 0;
  for (const word of array) {
    total += word.length;
  }
  return total;
}
console.log(contarCaracteres(["Hola", "Mundo"])); // Devuelve 9
console.log(contarCaracteres(["JavaScript", "es", "genial"])); // Devuelve 18


console.log(`
Crea una función llamada cadenaMasLarga(array) 
que reciba como parámetro un array de cadenas de 
caracteres y devuelva la cadena más larga de ese 
array. Puedes utilizar un ciclo for...of para 
recorrer el array y condicionales para 
encontrar la cadena más larga.
`);

function cadenaMasLarga(array) {
  let output = "";
  for (const word of array) {
    output = word.length > output.length ? word : output; 
  }
  return output;
}

console.log(cadenaMasLarga(["Hola", "Mundo"])); // Devuelve "Mundo"
console.log(cadenaMasLarga(["JavaScript", "es", "genial"])); // Devuelve "JavaScript"