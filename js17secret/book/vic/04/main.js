// 輸入 n 印出 1+2-3+4-5+6...n 的算式與總和
import makeQuestion from "../nodeJs_modules/readline.js";
import { printResult } from "./calculate.js";
import { useValidators } from "../verify.js";

main();

async function main() {
  const input = await makeQuestion("請您輸入值：");

  try {
    const validators = [
      "CheckInteger",
      "CheckBlank",
      "CheckNegative",
      "CheckNumber",
    ];

    useValidators(validators, input);
  } catch (error) {
    console.log(error.message);
    return main();
  }

  console.log(printResult(input));
}
