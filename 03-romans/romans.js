// * Converts decimal to roman or roman to decimal, up to 199 (no more!)

const numberMap = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  0: "",
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
};

function decimalToRoman(number) {
  return String(number)
    .split("")
    .reverse()
    .map((n, index) => {
      const multiplier = index === 0 ? 1 : 10 ** index;
      return n * multiplier;
    })
    .reverse()
    .map((n) => numberMap[n])
    .join("");
}

function romanToDecimal(romanNum) {
  const numArr = romanNum.split("").map((n) => numberMap[n]);
  return numArr.reduce((acc, curr, index) => {
    if (numArr[index + 1] === undefined || numArr[index] >= numArr[index + 1]) {
      return acc + curr;
    } else {
      return acc - curr;
    }
  }, 0);
}

function romans(input) {
  if (typeof input === "number" && input < 200) {
    return `Decimal ${input} => Roman ${decimalToRoman(input)}`;
  } else if (
    typeof input === "string" &&
    input.split("").every((n) => n.toUpperCase() in numberMap)
  ) {
    return `Roman ${input} => Decimal ${romanToDecimal(input)}`;
  }
}

console.log(romans(199));
console.log(romans("XCIV"));
