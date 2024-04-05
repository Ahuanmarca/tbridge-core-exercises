// EJERCICIO 1
const ciudad = "Lima";
if (ciudad.length > 10) {
  console.log("El nombre de la ciudad es largo");
} else {
  console.log("El nombre de la ciudad es corto");
}

// EJERCICIO 2
const temperatura = 36; // Celsius
if (temperatura >= 25) {
  console.log("Hace calor");
} else {
  console.log("Hace frío");
}

// EJERCICIO 3
const nombreCompleto = "Renzo Belon Ortega";
function tienePalabras(string) {
  const strArr = Array.from(string.trim());
  if (strArr.some((n) => n === " ")) {
    return "El nombre completo tiene más de una palabra";
  } else {
    return "El nombre es una sola palabra";
  }
}
console.log(tienePalabras(nombreCompleto));

// EJERCICIO 4
function longestWord(array) {
  let output = 0;
  for (const word of array) {
    if (output < word.length) {
      output = word.length;
    }
  }
  return output;
}

const wordsArray = ["manzana", "banana", "fresa", "uva"];
console.log(longestWord(wordsArray));

// EJERCICIO 5
function returnOdds(arr) {
  const output = [];
  for (const num of arr) {
    if (num % 2 === 1) {
      output.push(num);
    }
  }
  return output;
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(returnOdds(numArr));
