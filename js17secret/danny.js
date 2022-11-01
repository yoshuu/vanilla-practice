const array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const afterArray = [
  [5, 3, 1],
  [6, 4, 2],
];
const answerArray = [];
let arrayRowLength = array[0].length;
let arrayColLength = array.length;

for (let row = 0; row < arrayRowLength; row++) {
  const tempArray = [];
  for (let col = 0; col < arrayColLength; col++) {
    tempArray.push(array[col][row]);
  }
  tempArray.reverse();
  answerArray.push(tempArray);
}

console.log(answerArray);
