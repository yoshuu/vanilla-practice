import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

async function makeQuestion(value) {
  rl.resume();

  const input = await rl.question(value);

  rl.pause();

  return input;
}

export default makeQuestion;
