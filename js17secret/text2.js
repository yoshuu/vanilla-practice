//  11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，
// 並利用do while計算，印出總費用。

let apple = 0;
let i = 0;

let cost = 500;
let oneCost = 0.79 * cost;

function main(n) {
  do {
    if (n == 1) {
      apple = oneCost;
    }
    if (i > 1) apple = apple + cost;
    i++;
  } while (i < n);

  return apple - oneCost - fullFive(n);
}

// console.log(main(1));

function fullFive(n) {
  let i = Number(n);
  let j = i / 5;
  let num = Math.trunc(j) * 200;
  return num;
}

console.log(main(4));
