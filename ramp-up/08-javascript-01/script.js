// 1.Variables
// ● Crea un cuadro de diálogo (alert) que muestre lo siguiente
// “JavaScript funcionando correctamente”
// ● Comenta el código que muestra el cuadro de diálogo

// alert("JavaScript funcionando correctamente");

// ● Crear variable tipo let de nombre variableSinValor y declarala sin
// asignarle ningún valor
let variableSinValor;
console.log(variableSinValor);

// ● Crear 2 variables tipo let de nombres booleano1 y booleano2 con
// valores booleanos
let [booleano1, booleano2] = [true, false];
console.log(booleano1);
console.log(booleano2);

// ● Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.1416;
console.log(PI);

// ● Crear variable tipo const de nombre TAU declarada con valor 2
// veces PI
const TAU = 2 * PI;
console.log(TAU);

// ● Crear variable tipo const de nombre miNombre declarada con
// valor tu nombre
const miNombre = "Renzo";
console.log(miNombre);

// ● Crear variable tipo const de nombre miNumeroFav declarada con
// valor numérico
const miNumeroFav = 7;
console.log(miNumeroFav);

// ● Crea una variable de tipo booleano
const myBool = true;
console.log(myBool);

// ● Muestra por consola la longitud de la variable miNombre
console.log(miNombre.length);

// ● Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(typeof miNumeroFav);

// ● Muestra un console.log que diga ‘Mi nombre es Euralio y mi
// numero favorito es 7” concatenado variables declaradas más
// arriba.
console.log(`Mi nombre es ${miNombre} y mi número favorito es ${miNumeroFav}`);

// ● Muestra por consola “Seré un crack en JavaScript al terminar el
// bootcamp” en mayúsculas.
console.log(
  "Seré un crack en JavaScript al terminar el bootcamp".toUpperCase()
);

// ● Muestra por consola solo los primeros 5 caracteres de la siguiente
// variable = ‘Hola soy un crack”
console.log("Hola soy un crack".slice(0, 5));

// ● Convierte la variable miNumeroFav en una string y luego muestra
// por consola el tipo de dato que es dicha variable
const strMiNumeroFav = String(miNumeroFav);
console.log(typeof strMiNumeroFav);

// ● Crea una variable y asignale un valor. Después utilizando template
// literal haz uso de la variable que habías creado, guarda el
// template literal en otra variable y sacala por consola.
const saludo = "world";
const elSaludo = `hello, ${saludo}`;
console.log(elSaludo);

// ● Muestra por consola la variable PI hasta los 2 primeros decimales
console.log(Number(String(PI).slice(0, 4)));

// 2.Arrays
// ● Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = [];
console.log(arrayVacio);

// ● Crear variable de nombre arrayNumeros declarada con un array
// de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros);

// ● Crear variable de nombre arrayNumeros2 declarada con un array
// de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arrayNumeros2);

// ● Crear variable de nombre arrayNumerosPares declarada con un
// array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8];
console.log(arrayNumerosPares);

// ● Crear variable de nombre arrayNumerosNeg declarada con un
// array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log(arrayNumerosNeg);

// ● Crear variable de nombre holaMundo declarada con valor array
// con las palabras 'Hola' y 'Mundo'
const holaMundo = ["Hola", "Mundo"];
console.log(holaMundo);

// ● Crear variable de nombre loGuardoTodo declarada con valor array
// con valores 'hola', 'que', 23, 42.33 y 'tal'
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
console.log(loGuardoTodo);

// ● Crear variable de nombre arrayDeArrays declarada con valor
// array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];
console.log(arrayDeArrays);

// ● Muestra por consola la longitud del array “loGuardoTodo”
console.log(loGuardoTodo.length);

// ● Crea un nuevo elemento y añadelo al final del array
// “loGuardoTodo” y muestralo por consola
const nuevoElemento = "foo";
loGuardoTodo.push(nuevoElemento);
console.log(loGuardoTodo);

// ● Muestra por consola la propiedad ‘que’ de la variable
// loGuardoTodo
console.log(loGuardoTodo[1]);

// ● Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala
// por consola
loGuardoTodo.push("Euralio");
console.log(loGuardoTodo[loGuardoTodo.length - 1]);

// 3.Objetos

// ● Crea un objeto de nombre Coche que tenga las propiedades:
// marca, modelo y matrícula con sus respectivos valores
const Coche = {
  marca: "Renault",
  modelo: "Captur",
  matricula: "FOOBARBAZ",
};
console.log(Coche);

// ● Crea un objeto de nombre Casa que tenga las propiedades:
// codPostal, calle, portal y piso con sus respectivos valores
const Casa = {
  codPostal: 123456,
  calle: "La Marina",
  portal: 101,
  piso: 4,
};
console.log(Casa);

// ● Crea un objeto de nombre FullStackDeveloper que tenga las
// propiedades: array lenguajes(ej. ‘javascript’,’php’), array
// proyectos(ej. ‘mi página personal’,etc)
const FullStackDeveloper = {
  lenguajes: ["javascript", "php"],
  proyectos: ["mi página personal", "portafolio de fotos"],
};
console.log(FullStackDeveloper);

// ● Crea un objeto de nombre Perro que tenga las propiedades:
// nombre, raza, color y edad con sus respectivos valores
const Perro = {
  nombre: "Firulais",
  raza: "Chihuahua",
  color: "verde",
  edad: 10,
};
console.log(Perro);

// ● Crea un objeto de nombre Noticia que tenga las propiedades:
// titular y cuerpo con sus respectivos valores
const Noticia = {
  titular: "Clima de la semana",
  cuerpo: {
    lunes: "Sin lluvia.",
    martes: "Alta probabilidad de lluvia.",
    miercoles: "Soleado.",
    jueves: "Soleado.",
    viernes: "Parcialmente nublado.",
    sabado: "Vientos huracanados en toda la región.",
    domingi: "Soleado.",
  },
};
console.log(Noticia);

// ● Crea un objeto de nombre Persona que tenga las propiedades:
// nombre, apellidos y edad con sus respectivos valores
const Persona = {
  nombre: "Renzo",
  apellidos: "Belon Ortega",
  edad: 41,
};
console.log(Persona);

// ● Muestra por consola el nombre de la variable Persona
console.log(Persona.nombre);

// ● Muestra por consola el lenguaje javascript de la variable
// FullStackDeveloper
console.log(FullStackDeveloper.lenguajes[0]);

// ● Crea un objeto de nombre Portatil que tenga la propiedad marca,
// accede a esta propiedad con .marca y muestrala por consola
const Portatil = {
  marca: "Apple",
};
console.log(Portatil.marca);

// ● Obtén el valor de la propiedad marca del objeto anteriormente
// creado (Portatil) con ["marca"] y muestrala por consola
console.log(Portatil["marca"]);

// ● Crea un objeto de nombre Concierto con una propiedad llamada
// grupos que es un array, obtén el valor de la propiedad y muestrala
// por consola
const Concierto = {
  grupos: ["U2", "Shakira"],
};
console.log(Concierto.grupos);

// ● Crea un objeto de nombre Led, con las propiedades: lampara1
// con valor rojo, lampara2 con valor verde y lampara3 con valor
// azul, obtén el valor de las propiedades guardándolo en la variable
// array RGB[Rojo, Verde, Azul] y muestra este array por consola.
// La array por consola debería mostrarse así [‘rojo’,’verde’,’azul’]
const Led = {
  lampara1: "rojo",
  lampara2: "verde",
  lampara3: "azul",
};
const RGB = [Led.lampara1, Led.lampara2, Led.lampara3];
console.log(RGB);

// ● Crea un objeto de nombre O_Error con la propiedad código, obtén
// el valor de la propiedad y muestrala por consola
const _Error = {
  codigo: 12345,
};
console.log(_Error.codigo);

// ● Crea un objeto de nombre Grupo con la propiedad integrantes
// (array),obtén el valor de la propiedad guardándolo en la variable
// integrantes y muestra por consola a uno de los integrantes
const Grupo = {
  integrantes: ["Hugo", "Paco", "Luis"],
};
const integrantes = Grupo.integrantes;
console.log(integrantes[1]);

// ● Crea un objeto de nombre Impresora con la propiedad objeto
// tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo
// en la variable nivelesTinta y muestrala por consola
// TODO preguntar si está bien
const Impresora = {
  tinta: {
    rojo: "rojo",
    verde: "verde",
    azul: "azul",
  },
};
console.log(Impresora.tinta);

// ● Crea un objeto de nombre Movil con la propiedad especificaciones
// obtén el valor de la propiedad con ["especificaciones"]
// guardándolo en la variable especificaciones y muestrala por
// consola
const Movil = {
  especificationes: "obsoleto",
};
const especificaciones = Movil["especificaciones"];
console.log(especificaciones);

// ● Dado el objeto de nombre Portatil con la propiedad marca,
// modifica el valor de la propiedad marca por el valor “MSI”,
// consolea el resultado
Portatil.marca = "MSI";
console.log(Portatil);

// ● Dado el objeto de nombre Concierto añade el valor Guns N' Roses
// a la propiedad grupos, consolea el resultado
Concierto.grupos.push("Guns N' Roses");
console.log(Concierto.grupos);

// ● Dado el objeto de nombre Concierto, crea la propiedad fecha, dale
// un valor y después modifica el valor de la propiedad por el valor
// new Date() (fecha de hoy, investiga que es new Date y como
// usarlo), consolea el resultado
Concierto.fecha = "01-09-2023";
Concierto.fecha = new Date();
console.log(Concierto.fecha);

// ● Dado el objeto de nombre Grupo modifica el valor de la propiedad
// integrantes quitándole un integrante, consolea el número de
// integrantes actual (ojo! el número, no los nombres de los
// integrantes)
Grupo.integrantes.pop();
console.log(Grupo.integrantes.length);
