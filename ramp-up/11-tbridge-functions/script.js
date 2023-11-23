console.log(`
Crea una función resta que espere dos parámetros
a y b, y que devuelva la resta de los mismos.
`);

function resta(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Input must be of type 'number'";
  }
  return a - b;
}
console.log(resta(10, 5));

// ######################################################
// ######################################################

console.log(`
Crea una función la cual te pregunte por una nota 
del 0 al 10 y, dependiendo del número, te devuelva 
la siguiente clasificación.

Nota: Debes de usar el Switch.
0 - 4: Insuficiente.
5 - 6: Suficiente.
7 - 8: Notable.
9 - 10: Sobresaliente.
`);
function calificacion(nota) {
  if (typeof nota !== "number" || nota < 0 || nota > 10) {
    return "Invalid Input!";
  }
  switch (true) {
    case nota >= 9:
      return "Sobresaliente";
    case nota >= 7:
      return "Notable";
    case nota >= 5:
      return "Suficiente";
    default:
      return "Insuficiente";
  }
}
const nota = Math.floor(Math.random() * 10);
console.log(`La nota ${nota} es ${calificacion(nota)}`);

// ######################################################
// ######################################################

console.log(`
Crea la función duplicaNumero debe recibir un tipo 
number y devolver el doble del valor recibido. Si 
la función no recibe un dato tipo number debe 
devolver el string "Debo ser ejecutada con un número".
`);
function duplicaNumero(num) {
  if (typeof num !== "number") {
    return "Debo ser ejecutada con un número";
  }
  return num * 2;
}
const randomNumber = Math.floor(Math.random() * 20);
console.log(duplicaNumero(randomNumber));

// ######################################################
// ######################################################

console.log(`
Crea la función caracterInicial. Debe recibir un tipo 
string y devolver un string con el primer carácter. 
Si la función no recibe un dato tipo string debe devolver 
el string 'Debo ser ejecutada con un string'. 
Si recibe un string vacío debe devolver 'Debo ser 
ejecutada con un string no vacío'.
`);

function caracterInicial(string) {
  if (typeof string !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (string.length === 0) {
    return "Debo ser ejecutada con un string no vacío";
  }
  return string[0];
}
console.log(caracterInicial("Lorem Ipsum"));
console.log(caracterInicial(""));
console.log(caracterInicial(false));

// ######################################################
// ######################################################

console.log(`
Crea la función ultimoCaracter. Debe recibir un tipo 
string y devolver un string con el último carácter.
Si la función no recibe un dato tipo string debe 
devolver el string 'Debo ser ejecutada con un string'.
Si recibe un string vacío debe devolver 'Debo ser 
ejecutada con un string no vacío'.
`);

function ultimoCaracter(string) {
  if (typeof string !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (string.length === 0) {
    return "Debo ser ejecutada con un string no vacío";
  }
  return string[string.length - 1];
}
console.log(ultimoCaracter("Lorem Ipsum"));
console.log(ultimoCaracter(""));
console.log(ultimoCaracter(false));

// ######################################################
// ######################################################

console.log(`
Crea la función cuentaCaracteres. Debe recibir un tipo 
string y devolver un number con el número de carácteres.
Si la función no recibe un dato tipo string debe devolver 
el string 'Debo ser ejecutada con un string'.
`);

function cuentaCaracteres(string) {
  if (typeof string !== "string") {
    return "Debo ser ejecutada con un string";
  }
  return string.length;
}
console.log(cuentaCaracteres("hello, world"));
console.log(cuentaCaracteres("foo, bar, baz"));

// ######################################################
// ######################################################

console.log(`
Un palíndromo es una palabra que se escribe igual del 
derecho que del revés, por ejemplo: orejero, rallar o 
somos.  
Crea la función esPalindromo que recibirá una cadena 
de texto y deberá devolver si es un palíndromo o no.
Si la función no recibe una cadena de texto o está 
vacía 'no es un formato correcto'.
`);

function esPalindromo(string) {
  if (typeof string !== "string") {
    return "no es un formato correcto";
  }
  const reversed = Array.from(string).reverse().join("");
  return string === reversed;
}
console.log(esPalindromo("orejero"));
console.log(esPalindromo("rallar"));
console.log(esPalindromo(true));
console.log(esPalindromo(10));

// ######################################################
// ######################################################

console.log(`
Crea la función getPrecioMostrar para que devuelva 
una cadena de texto con formato precio con dos 
decimales. Para 2 debería devolver 2.00 €. 
Si la función no recibe un número debería devolver 
devolver 'no es un formato correcto'.
`);

function getPrecioMostrar(num) {
  if (typeof num !== "number") {
    return "no es un formato correcto";
  }
  const output = `${num.toFixed(2)} €`;
  return output;
}
console.log(getPrecioMostrar(10));
console.log(getPrecioMostrar(0.5));
console.log(getPrecioMostrar("100"));
console.log(getPrecioMostrar("hello, world"));

// ######################################################
// ######################################################

console.log(`
Crea la función division que acepte como argumento 
dos números y devuelva el resultado de su división.
`);

function division(a, b) {
  return a / b;
}

// ######################################################
// ######################################################

console.log(`
Crea una función que, dada una array de números, 
devuelva una nueva array que tenga solo los números 
que son 5 o más. Ejemplo entrada [3, 6, 8, 2] 
salida [6, 8].
`);

function cincoOMas(numbers) {
  if (Array.isArray(numbers) === false) {
    return "Input must be an array!";
  }
  return numbers.filter((n) => n > 5);
}
console.log(cincoOMas([3, 6, 8, 2]));
console.log(cincoOMas('hello, world'));

// ######################################################
// ######################################################

console.log(`
Crea una aplicación que nos pida un número por 
prompt y, con un método, se lo pasemos por parámetro 
para que nos indique si es o no un número primo. 
Debe devolver true si es primo, sino false. 

Un número primo es aquel que solo puede dividirse 
entre 1 y sí mismo. Por ejemplo: 25 no es primo, 
ya que 25 es divisible entre 5, sin embargo, 
17 si es primo.
`);

function esPrimo() {
  let userInput = prompt("¿Es un número primo?");
  userInput = Number(userInput);

  if (Number.isNaN(userInput)) {
    alert("Invalid Input!");
    return;
  }

  for (let i = 2; i < userInput; i++) {
    if (userInput % i === 0) {
      alert(`${userInput} is not a Prime Number!`);
      return;
    }
  }
  alert(`${userInput} is a Prime Number!!`);
}

esPrimo();
// ######################################################
// ######################################################

console.log(`
Crear la función obtenerImpares que acepte como 
argumento un array de números y devuelva un array 
con los elementos impares.
`);

function obtenerImpares(numbers) {
  return numbers.filter((n) => n % 2 === 0);
}
console.log(obtenerImpares([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ######################################################
// ######################################################

console.log(`
Crear la función sumarArray que acepte como 
argumento un array numérico y devuelva la suma 
de los números en el array Array: [1, 2, 3] 
resultado: 6.
`);

function sumarArray(numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sumarArray([1, 2, 3]));

// ######################################################
// ######################################################

console.log(`
Crear la función multiplicarArray que acepte 
como argumento un array numérico y devuelva 
la multiplicación de los números en el array 
Array: [2, 3, 4] resultado: 24.
`);

function multiplicarArray(numArr) {
  return numArr.reduce((acc, curr) => acc * curr);
}
console.log(multiplicarArray([2, 3, 4]));

// ######################################################
// ######################################################

console.log(`
Crea una función checkPassword con una variable 
tipo string que contenga una contraseña cualquiera. 
Después, se te pedirá que introduzcas la contraseña 
(usando prompt), con 3 intentos. Cuando aciertes, 
ya no pedirá más la contraseña y mostrará un 
mensaje diciendo “Enhorabuena” (ej. un alert). 
Piensa bien en la condición de salida (3 intentos 
  y, si acierta, sale aunque le queden intentos).
`);

function checkPassword() {
  const somePassword = "abc123";
  for (let i = 0; i < 3; i++) {
    const userInput = prompt("Your password: (Hint: abc123)");
    if (userInput === somePassword) {
      alert("Enhorabuena");
      break;
    }
  }
}
checkPassword();
