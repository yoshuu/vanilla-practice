import * as readline from "node:readline/promises";

const _readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default _readline;
