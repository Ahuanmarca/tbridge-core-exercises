const decimalToRoman = require("../decimalToRoman");
const testCases = require("./testCases");

testCases.forEach(testCase => {
  test(`test decimalToRoman(${testCase[0]}) to return ${testCase[1]}`, () => {
    expect(decimalToRoman(testCase[0])).toBe(testCase[1]);
  });
})
