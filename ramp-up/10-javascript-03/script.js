console.log("EJERCICIOS DE JAVASCRIPT 3");
console.log("##########################")

// Imprimir los números del 21 al 34 en la consola.
console.log("Imprimir los números del 21 al 34 en la consola.");
for (let i = 21; i < 35; i++) {
  console.log(i);
}


// Imprimir los números del 1 al 10 en la consola,
// pero solo los pares.
console.log(
  "Imprimir los números del 1 al 10 en la consola, pero solo los pares."
);
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

// Imprimir los números del 1 al 10 en la consola,
// pero solo los impares.
console.log(
  "Imprimir los números del 1 al 10 en la consola, pero solo los impares."
);
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) console.log(i);
}

// Dado un array de números, imprimir en la consola
// solo los números pares.
console.log(
  "Dado un array de números, imprimir en la consola solo los números pares."
);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numbers) {
  if (num % 2 === 0) console.log(num);
}

// Dado un array de números, imprimir en la consola
// solo los números mayores a 5.
console.log(
  "Dado un array de números, imprimir en la consola solo los números mayores a 5."
);
for (const num of numbers) {
  if (num > 5) console.log(num);
}

// Dada un array de nombres, imprimir solo los nombres
// que empiezan con la letra "A".
console.log(
  `Dada un array de nombres, imprimir solo los nombres que empiezan con la letra "A".`
);
const names = [
  "Alejandro",
  "Beatriz",
  "Carlos",
  "Arturo",
  "Bárbara",
  "Cecilia",
];
for (const name of names) {
  if (name[0] === "A") console.log(name);
}

// Dada un array de números, encontrar el número
// más grande y el número más pequeño.
console.log(
  "Dada un array de números, encontrar el número más grande y el número más pequeño."
);
let min = Infinity;
let max = -Infinity;
for (num of numbers) {
  if (num < min) min = num;
  if (num > max) max = num;
}
console.log(min);
console.log(max);

// Haz un bucle que muestre por consola los números
//  del 4 al 9 inclusive. Utilizad el bucle for.
console.log(
  "Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for."
);
for (let i = 4; i <= 9; i++) {
  console.log(i);
}

// Haz un bucle que muestre por consola los impares del
// 3 al 17 inclusive. Utilizad el bucle for.
console.log(
  "Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for."
);
for (let i = 3; i <= 17; i++) {
  if (i % 2 === 1) console.log(i);
}

// Crear variable contarHasta10 con valor 0 e incrementar su
// valor con un bucle hasta que se verifique que contarHasta10 === 10
console.log(
  "Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10"
);
let contarHasta10 = 0;
console.log("Antes del bucle:");
console.log(contarHasta10);
while (contarHasta10 < 10) {
  contarHasta10++;
}
console.log("Después del bucle:");
console.log(contarHasta10);

// Crea una variable arrayBucle tipo array vacía, rellénala
// con números del 4 al 18 utilizando un bucle
console.log(
  "Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle"
);
const arrayBucle = [];
for (let i = 4; i <= 18; i++) {
  arrayBucle.push(i);
}
console.log(arrayBucle);

// Recorre la variable creada anteriormente arrayBucle ,suma
// todos sus elementos y guárdalos en una variable de nombre resultado
console.log(
  "Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado"
);
let resultado = 0;
for (num of arrayBucle) {
  resultado += num;
}
console.log(resultado);

// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’,
// ‘bucles’], recorrelo utilizando el bucle “for of” y muestra
// por consola todos sus elementos, después recórrelo utilizando
//  el bucle “for in” mostrando también por consola todos sus elementos
console.log(
  `Dado el siguiente array, ["Con", "Sofia", "aprendiendo",  "bucles"], recorrelo utilizando el bucle “for of” y muestra  por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos`
);

console.log("#### Recorrido con for-of ####");
const myArray = ["Con", "Sofia", "aprendiendo", "bucles"];
for (const val of myArray) {
  console.log(val);
}
console.log("#### Recorrido con for-in ####");
for (let val in myArray) {
  console.log(myArray[val]);
}

// Crea un bucle utilizando “while” que itere 20 veces y muestre por
// consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
console.log(
  `Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3`
);
let iteracion = 1;
while (true) {
  // console.log(iteracion);
  if (iteracion % 3 === 0) {
    console.log(`Patata! ${iteracion}`);
  }
  if (iteracion === 20) {
    break;
  }
  iteracion++;
}

// Sumar los números del 1 al 10 y mostrar el resultado en la consola.
console.log(
  `Sumar los números del 1 al 10 y mostrar el resultado en la consola.`
);
let suma1a20 = 0;
for (let i = 1; i <= 10; i++) {
  suma1a20 += i;
}
console.log(suma1a20);

// Dado un array de números, imprimir en la consola la suma de todos los números.
console.log(
  `Dado un array de números, imprimir en la consola la suma de todos los números.`
);
for (const num of numbers) {
  console.log(num);
}

// Imprimir los números del 1 al 20 en la consola, pero para los múltiplos
// de 3 imprimir "Fizz", para los múltiplos de 5 imprimir "Buzz" y para los
// múltiplos de ambos imprimir "FizzBuzz".
console.log(
  `Imprimir los números del 1 al 20 en la consola, pero para los múltiplos de 3 imprimir "Fizz", para los múltiplos de 5 imprimir "Buzz" y para los múltiplos de ambos imprimir "FizzBuzz".`
);
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log(' ');

// Utilizar el siguiente array para los própximos ejercicios
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

console.log("Utilizar el siguiente array para los própximos ejercicios");
console.log(`
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];
`);

// Crea una array con la gente que su nombre tiene 4 letras, 
// sin utilizar el método filter de los arrays y muéstralo 
// por consola.
console.log(`Crea una array con la gente que su nombre tiene 4 letras, sin utilizar el método filter de los arrays y muéstralo por consola.`);
const fourLetterNames = [];
for (persona of gente) {
  const name = persona.nombre;
  if (name.length === 4) {
    fourLetterNames.push(persona);
  }
}
console.log(fourLetterNames);

// Crea una array con la gente que su nombre empieza por 
// J y sean menores de 40 años, sin utilizar el método 
// filter de los arrays y muéstralo por consola.
console.log(`Crea una array con la gente que su nombre empieza por J y sean menores de 40 años, sin utilizar el método filter de los arrays y muéstralo por consola.`);
const jMenoresDe40 = [];
for (persona of gente) {
  const name = persona.nombre;
  const age = persona.edad;
  if (name[0] === "J" && age < 40) {
    jMenoresDe40.push(persona);
  }
}
console.log(jMenoresDe40);