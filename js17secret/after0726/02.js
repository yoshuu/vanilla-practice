// 宣告一整數陣列 array = [3,50,0,13,2,4,11] 試寫一程式，印出陣列中所包含的質數以及其索引值。

import { isPrime } from "./isPrime.js";

main.call("最後結果：");

function main() {
  let arr = [3, 50, 0, 13, 2, 4, 11];
  console.log(testPrimes(arr).join(""));
}

function testPrimes(arr) {
  let output = [];

  arr.forEach((item, index) => {
    if (isPrime(item)) {
      output.push(`${this}質數 ${item} 的索引值為 ${index}`);
    }
  });
  return output;
}
