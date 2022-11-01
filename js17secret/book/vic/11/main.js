//  11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，
// 並利用do while計算，印出總費用。

// var i = 1;
// do {
//   i++;
//   console.log("i++", i);
// } while (i < 100);

// console.log("i++", i);

var cost = 500;
var oneCost = 0.79 * cost;

function money(n) {
  let i = Number(n);
  let num = fullFive(n);
  if (i === 1) {
    console.log(`你總共要付${oneCost}`);
  } else {
    console.log(`你總共要付${oneCost + i * cost - cost - num}`);
  }
}

function fullFive(n) {
  let i = Number(n);
  let j = i / 5;
  let num = Math.trunc(j) * 200;
  return num;
}

fullFive(10);
