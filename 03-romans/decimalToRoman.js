function decimalToRoman(number) {
  const numberMap = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let roman = [];
  while (number > 0) {
    // key === largest key on numberMap that is <= than number
    const key = Math.max(...Object.keys(numberMap).filter((k) => k <= number));
    roman.push(numberMap[key]);
    number -= key;
  }
  return roman.join("");
}

module.exports = decimalToRoman;

// function test(cb, times = 10) {
//   for (let i = 0; i < times; i++) {
//     const number = Math.ceil(Math.random() * 3999);
//     console.log(String(number).padStart(4, " "), cb(number));
//   }
// }
// test(decimalToRoman);
