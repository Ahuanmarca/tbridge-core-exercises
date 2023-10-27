export function checkGuess(guess, secretNumbers, secretMap) {
  const yellow = "#C5B565";
  const green = "#79A86B";
  const gray = "#797C7E";

  const secretCopy = {...secretMap}
  const output = [];
  for (let i = 0; i < guess.length; i++) {
    if (Number(guess[i]) === secretNumbers[i]) {
      output.push(green);
      secretCopy[guess[i]]--;
    } else if (guess[i] in secretCopy && secretCopy[guess[i]] > 0) {
      output.push(yellow);
      secretCopy[guess[i]]--;
    } else {
      output.push(gray);
    }
  }
  return output;
}