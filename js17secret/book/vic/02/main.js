/*
使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」
*/
import makeQuestion from "../nodeJs_modules/readline.js";
import { useValidators } from "../verify.js";
import { getTakeRemainder } from "../02/getTakeRemainder.js";

main();

async function main() {
  const validators = [
    "CheckInteger",
    "CheckBlank",
    "CheckNegative",
    "CheckNumber",
  ];

  const firstInput = await makeQuestion("請您輸入第一個整數:");

  try {
    useValidators(validators, firstInput);
  } catch (error) {
    console.log(error.message);
    return main();
  }

  const secondInput = await makeQuestion("請您輸入第二個整數:");

  try {
    useValidators(validators, secondInput);
  } catch (error) {
    console.log(error.message);
    return main();
  }

  const isEqual = getTakeRemainder(firstInput, secondInput);

  console.log(isEqual);
}
