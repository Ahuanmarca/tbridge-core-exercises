// // 1. Booleanos
// // 	Dados 2 variables booleanas:
const booleano1 = true;
const booleano2 = false;

// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2
const booleanoAnd = booleano1 && booleano2;

// Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2
const booleanoOr = booleano1 || booleano2;

// Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
const booleanoNot = !booleano1;

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana
// (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
const booleanoMix0 = (booleano1 || booleano2) && !booleano1 && !booleano2;

// 2.Operadores
// Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo
// muestre 2 decimales en el resultado
const valorDivision = Number(String(17 / 3).slice(0, 4));

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7
const valorResto = 17 % 7;

// 3.Lógica de programación
// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo
// valor sea un string con el número 9, desarrolla la lógica para que cuando A == B
// muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B,
// comprobamos que A === B?
const A = 9;
const B = "9";
if (A === B) {
  console.log("Son estrictamente iguales");
} else {
  console.log("No son estrictamente iguales");
}

// Crea una variable mochila que sea un array de elementos, desarrolla la lógica
// para que sí mochila tiene más de 10 elementos muestre por consola el mensaje
// “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos
// se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola
// “Creo q no necesito una mochila”
const mochila = ["manzana", "pera", "banana", "naranja", "uva", "sandía"];
if (mochila.length > 10) {
  console.log("No puedo cargar tantas cosas");
} else if (mochila.length > 1) {
  console.log("Que bien voy con mi mochila");
} else {
  console.log("“Creo q no necesito una mochila”");
}

// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si
// diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false
// ‘Hoy trabajo’
const diaFestivo = true;
diaFestivo ? console.log("Hoy no trabajo") : console.log("Hoy trabajo");

// Extras
// Crea un objeto en la variable ordenador de tal
//  modo que el siguiente código no muestre por 
// consola 'suspendes'

const ordenador = {
  marca: 'La pava',
  tipo: "portátil",
  perifericos: [ 'mouse', 'touchPad' ],
  almacenamiento: {
    discos: [
      "SSD",
      "HDD",
    ],
    maestro: 0,
  }
}

// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crea un array en la variable llamada arr de tal 
// modo que el siguiente código no muestre por consola
//  'suspendes'

const arr = [
  {
    name: 'pepito',
    age: 25,
  },
  {
    name: 'pepito',
    age: 25,
  },
  {
    name: 'Jepito',
    age: 25,
  },
]

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 8
if (arr[0].age === 25) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Entregables

// Subir el ejercicio a un repositorio en github
// Dejar el enlace del repositorio adjuntado en Classroom
