// 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 function  divi(n)
// 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

//輸入值檢查,正確才拋出
function userInput() {}

//主程式
function main() {
  const positiveInteger = userInput();
  const countFromOne = (n) => runFormulaDiviN(n, 1);
  const result = countFromOne(positiveInteger);
  console.log(`${positiveInteger}除以3 除${result}次後, 小數點後第2位會等於0`);
}

//start
main();

function divi(n, i) {
  let value = n / 3;
  let time = i;
  if (value.toFixed(2) === "0.00") {
    return time;
  } else {
    return divi(value, time + 1);
  }
}

console.log(divi(3, 0));
