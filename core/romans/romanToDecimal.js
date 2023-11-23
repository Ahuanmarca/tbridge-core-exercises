// * 'XIV' -> split -> ['X', 'I', 'V']
// * -> map -> [10, 1, 5]
// * -> reduce -> 14

function romanToDecimal(roman) {
  const numberMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return roman
    .split("")
    .map((char) => numberMap[char])
    .reduce((acc, curr, index, arrRef) => {
      return curr < arrRef[index + 1] ? acc - curr : acc + curr;
    }, 0); // without the 0 we get a bug
}

module.exports = romanToDecimal;
