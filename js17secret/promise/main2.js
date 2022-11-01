import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  return new Promise((resolve) => {
    rl.question("測試", (input) => resolve(input));
  });
}

ask()
  .then((result) => {
    console.log(result);
    return ask();
  })
  .then((result) => {
    console.log(result);
    return ask();
  })
  .then((result) => {
    console.log(result);
    rl.close();
  });
