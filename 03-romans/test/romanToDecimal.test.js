const romanToDecimal = require("../romanToDecimal");
const testCases = require("./testCases");

for (const testCase of testCases) {
  test(`test romanToDecimal(${testCase[1]}) to return ${testCase[0]}`, () => {
    expect(romanToDecimal(testCase[1])).toBe(testCase[0]);
  });
}
