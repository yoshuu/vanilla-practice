//~Q5. 寫一個遞迴函數 `function umleven(n)` 來求算 `2*4 + 4*6 + 6*8...+(n-2)*n`
//~(n最小為 4, 只會出現偶數)

import makeQuestion from "../nodeJs_modules/readline.js";
import { recursive } from "./calculate.js";
import { useValidators } from "../verify.js";

main();

async function main() {
  const input = await makeQuestion("請輸入一個最小為4,然後是整數的數字:");

  try {
    const validators = [
      "CheckInteger",
      "CheckBlank",
      "CheckNegative",
      "CheckNumber",
      "Checkeven",
      "CheckDownlimit",
    ];

    useValidators(validators, input, 9);
  } catch (error) {
    console.log(error.message);
    return main();
  }

  console.log(recursive(input));
}
