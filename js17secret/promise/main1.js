import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const q0 = "第一個問題隨便回答";
const q1 = "第二個問題隨便回答";
const q2 = "第三個問題隨便回答";
const q3 = "第四個問題隨便回答";
const q4 = "第五個問題隨便回答";
const q5 = "第六個問題隨便回答";

const arr = [q0, q1, q2, q3, q4, q5];
let res = "";
const askQ = (i) => {
  if (i < arr.length) {
    rl.question(arr[i], (answer) => {
      res += "\n" + answer;
      askQ(i + 1);
    });
  } else {
    console.log("錯了好嗎");
    rl.close();
  }
};
askQ(0);
