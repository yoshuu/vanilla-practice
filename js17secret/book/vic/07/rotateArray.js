export function rotateArray(input) {
  const reverseInput = input.reverse();

  const inputTurn90Deg = [];
  for (let j = 0; j < reverseInput[0].length; j++) {
    inputTurn90Deg[j] = Array(reverseInput);
  }

  for (let i = 0; i <= reverseInput.length - 1; i++) {
    for (let j = 0; j <= reverseInput[i].length - 1; j++) {
      inputTurn90Deg[j][i] = reverseInput[i][j];
    }
  }

  return inputTurn90Deg;
}

const matrix = [
  [" ", " ", " ", " ", "*", "*", " ", " "],
  [" ", " ", " ", "*", "*", "*", "*", " "],
  [" ", " ", "*", "*", "*", "*", "*", "*"],
  [" ", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", " "],
  [" ", "*", "*", "*", "*", "*", "*", "*"],
  [" ", " ", "*", "*", "*", "*", "*", "*"],
  [" ", " ", " ", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", "*", "*", " ", " "],
];

console.log(rotateArray(matrix));
