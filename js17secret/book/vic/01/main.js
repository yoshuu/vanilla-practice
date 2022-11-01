// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
/*
 *   01
 *     nodeJs_modules folder naming -> utils folder
 *     testing use wrong data
 *     validators -> utils, naming problem
 *     try catch use (playMovie should be inside, not outside)
 *   03
 *     隱藏實作細節
 *
 *
 * */

import makeQuestion from "../nodeJs_modules/readline.js";
import { useValidators } from "../verify.js";
import { playMovie } from "./playMovie.js";

main();

async function main() {
  const input = await makeQuestion("請問幾個人看電影？");

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

  playMovie(input)
    ? console.log("照常播放電影")
    : console.log("沒人看就不播電影囉");
}
