export function printResult(value) {
  let formula = "";
  let sum = 0;
  for (let i = 0; i <= value; i++) {
    if (i <= 1) {
      formula = i;
    } else if (i % 2 === 0) {
      formula += "+" + i;
    } else {
      formula += "-" + i;
    }
  }
  for (let j = 0; j <= value; j++) {
    if (j === 1) {
      sum = 1;
    } else if (j % 2 === 0) {
      sum += j;
    } else {
      sum -= j;
    }
  }
  const result = formula + "=" + sum;
  return result;
}

// export function printFormula(value) {
//   let formula = "";
//   for (let i = 0; i <= value; i++) {
//     if (i <= 1) {
//       formula = i;
//     } else if (i % 2 === 0) {
//       formula += "+" + i;
//     } else {
//       formula += "-" + i;
//     }
//   }
//   return formula;
// }

// export function printSum(value) {
//   let sum = 0;
//   for (let i = 0; i <= value; i++) {
//     if (i === 1) {
//       sum = 1;
//     } else if (i % 2 === 0) {
//       sum += i;
//     } else {
//       sum -= i;
//     }
//   }
//   return sum;
// }
