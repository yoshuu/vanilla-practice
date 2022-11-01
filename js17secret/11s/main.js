//  11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，
// 並利用do while計算，印出總費用。

import * as readline from "node:readline";
import { totalFee } from "./calculate.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  return new Promise((resolve) => {
    rl.question("請問您要買幾期健身房會員？", (input) => resolve(input));
  });
}

main();

function main() {
  ask().then((period) => {
    try {
      const spent = totalFee(period);

      console.log(`您所購買的期數為${period}期,總費用是${spent}元`);
    } catch (error) {
      console.log(error.message);
      return main();
    }
    rl.close();
  });
}
