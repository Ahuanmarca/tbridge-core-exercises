// isPalindrome(str, caseSens, spaceSens, tildeSens);
// By default ignores case, spaces and tildes (params are false by default)
// "Dábale arroz a la zorra el abad" should return true by default

function isPalindrome(
  str,
  caseSens = false,
  spaceSens = false,
  tildeSens = false
) {

  let strArr = str.split("");

  const tildeMap = {
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
  };

  if (!tildeSens) {
    strArr = strArr.map((char) => {
      return Object.prototype.hasOwnProperty.call(tildeMap, char) ? tildeMap[char] : char;
    });
  }
  if (!caseSens) strArr = strArr.map((char) => char.toLowerCase());
  if (!spaceSens) strArr = strArr.filter((char) => char !== " ");

  return strArr.join("") === strArr.reverse().join(""); // normal === reversed
}

const str = "Dábale arroz a la zorra el abad";

//  TEST
console.log(isPalindrome(str)); // => true (ignores case, space and tildes)
console.log(isPalindrome(str, true)); // => false (case sensitive)
console.log(isPalindrome(str, false, true)); // => false (space sensitive)
console.log(isPalindrome(str, false, false, true)); // returns false (tilde sensitive)
console.log(isPalindrome(str, false, false, false)); // => true (same as default)
