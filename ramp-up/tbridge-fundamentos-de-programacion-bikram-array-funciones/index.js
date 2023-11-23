// ## Iteraciones :crossed_swords: Pair Programming :crossed_swords: ##

// ### Arrays ###

// - [ ] 1.- Crear variable de nombre **arrayVacio** cuyo valor
// sea **un array vacío**
const arrayVacio = [];

// - [ ] 2.- Crear variable de nombre **arrayNumeros** declarada
// con un **array de números del 0 al 9 (0, 1, 2...)**
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// - [ ] 3.- Crear variable de nombre **arrayNumerosPares**
// declarada con un **array con los números pares del 0 al 9**
// (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8];

// - [ ] 4.- Crear variable de nombre **arrayBidimensional**
// declarada con valor **array [[0, 1, 2], ['a', 'b', 'c']]**
const arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

// ### Funciones ###

// - [ ] 5.- Crea la función **suma** que acepte como argumento
// **dos números** y devuelva **el resultado de su suma**
const suma = (x, y) => x + y;

// - [ ] 6.- Crea la función **potenciacion** que acepte como
// argumento **dos números** y devuelva **el resultado de elevar
// el primero(a) al segundo(b) (a^b)**
const potenciacion = (x, y) => x ** y;

// - [ ] 7.- Crea la función **separarPalabras** que acepte como
// argumento **un string** y devuelva **un array de palabras
// 'hola mundo' => [hola, mundo]**
const separarPalabras = (str) => str.split(" ");

// - [ ] 8.- Crea la función **repetirString** que acepte como
// argumento **un string y un número** y devuelva **un string
// que sea el resultado de concatenar el primer string el
// número dado de veces**
const repetirString = (str, num) => str.repeat(num);

// - [ ] 9.- Crea la función **esPrimo** que acepte como
// argumento **un número** y devuelva ****true si es primo y
// false si no lo es****
const esPrimo = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// ### Mezclando arrays y funciones ###

// - [ ] 10.-  Crear la función **ordenarArray** que acepta
// como argumento **un array de números** y devuelva un **array
// ordenado de menor a mayor**
const ordenarArray = (arr) => arr.sort((a, b) => a < b);

// - [ ] 11.- Crear la función **obtenerPares** que acepta
// como argumento **un array de números** y devuelva un **array
// con los elementos pares**
const obtenerPares = (arr) => arr.filter((n) => n % 2 === 0);

// - [ ] 12.- Crear la función **pintarArray** que acepte
// como argumento **un array** y devuelva **una cadena de texto
// Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**
const pintarArray = (arr) => `[${arr.join(", ")}]`;

// - [ ] 13.- Crear la función **arrayMapi** que acepte
// como argumento **un Array y una función** y devuelva **un
// array en el que se haya aplicado la función a cada
// elemento del array**
const arrayMapi = (arr, func) => {
  return arr.map((element) => func(element));
};

// - [ ] 14.- Crear la función **eliminarDuplicados** que
// acepte como argumento **un array** y devuelva **un array en
// el que se hayan eliminado los duplicados**
const eliminarDuplicados = (arr) => Array.from(new Set(arr));

// ## Iteraciones :european_castle: proyecto :european_castle: ##

// ### Arrays ###

// - [ ] 15.- Crear variable de nombre **arrayNumerosNeg**
// declarada con un **array de números del 0 al -9
// (0, -1, -2...)**
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// - [ ] 16.- Crear variable de nombre **holaMundo**
// declarada con valor **array con las palabras
// 'Hola' y 'Mundo'**
const holaMundo = ["Hola", "Mundo"];

// - [ ] 17.- Crear variable de nombre **loGuardoTodo**
// declarada con valor **array con valores 'hola',
// 'que', 23, 42.33 y 'tal'**
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

// - [ ] 18.- Crear variable de nombre **arrayDeArrays**
// declarada con valor **array: [[756, 'nombre'],
// [225, 'apellido'], [298, 'direccion']]**
const arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

// ### Funciones ###

// - [ ] 19.- Crea la función **multiplicacion** que acepte
// como argumento **dos números** y devuelva **el resultado
// de su multiplicación**
const multiplicacion = (a, b) => a * b;

// - [ ] 20.- Crea la función **division** que acepte como
// argumento **dos números** y devuelva **el resultado de
// su division**
const division = (a, b) => a / b;

// - [ ] 21.- Crea la función **esPar** que acepte como
// argumento **un número** y devuelva **true si es par y
// false si es impar**
const esPar = (num) => num % 2 === 0;

// - [ ] 22.- Crea el array **arrayFunciones** que tenga
// como valor **las funciones: suma, resta y multiplicación
// (todas aceptan 2 números como argumento y devuelve el
// resultado de su operación)**
// const resta = (a, b) => a - b;
const arrayFunciones = [suma, (a,b) => a-b, multiplicacion];

// ### Mezclando arrays y funciones ###

// - [ ] 23.-  Crear la función **ordenarArray2** que acepta
// como argumento **un array de números** y devuelva un
// **array ordenado de mayor a menor**
const ordenarArray2 = (arr) => arr.sort((a, b) => a > b);

// - [ ] 24.- Crear la función **obtenerImpares** que acepta
// como argumento **un array de números** y devuelva un **array
// con los elementos impares**
const obtenerImpares = (arr) => arr.filter((num) => num % 2 !== 0);

// - [ ] 25.- Crear la función **sumarArray** que acepte como
// argumento **un array numérico** y devuelva **la suma de los
// números en el array Array: [1, 2, 3] resultado: 6**
const sumarArray = (arr) => arr.reduce((acc, curr) => acc + curr);

// - [ ] 26.- Crear la función **multiplicarArray** que acepte
// como argumento **un array numérico** y devuelva
// **la multiplicación de los números en el array Array:
// [2, 3, 4] resultado: 24**
const multiplicarArray = (arr) => arr.reduce((acc, curr) => acc * curr);
