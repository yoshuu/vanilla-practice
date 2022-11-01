/*
好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「比較運算子」寫一程式，
讓使用者自行輸入年齡，並判斷門票價錢
*/
import makeQuestion from "../nodeJs_modules/readline.js";
import { useValidators } from "../verify.js";
import { judgePrice } from "./judgePrice.js";

main();

async function main() {
  const input = await makeQuestion("若要買票，請您輸入您的年齡:");

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

  const ticketPrice = judgePrice(input);
  console.log(`您的門票價格是${ticketPrice}元`);
}
