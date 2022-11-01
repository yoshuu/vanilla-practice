//  11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，
// 並利用do while計算，印出總費用。

function main(n) {
  let cost = 500;
  let oneCost = 0.79 * cost;

  const result = calculate(n, cost, oneCost);

  console.log(`您所購買的期數為${n}期,總費用是${result}元`);
}

function calculate(n, cost, oneCost) {
  let moeny = 0;
  let i = 0;
  do {
    if (n == 1) {
      moeny = oneCost;
    }
    if (i > 1) moeny = moeny + cost;
    i++;
  } while (i < n);

  return moeny - oneCost - fullFive(n);
}

function fullFive(n) {
  let i = Number(n);
  let j = i / 5;
  let num = Math.trunc(j) * 200;
  return num;
}

console.log(main(4));
