//~Q1.
//~好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//~讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
//prompt-sync套件
import promptSync from "prompt-sync";
const userKeyIn = promptSync({ sigint: true });

//user輸入及檢查
function userInput() {
  const input = userKeyIn("隨便輸入東西好嗎");

  return input;
}
//主程式
function main() {
  const customerNumber = userInput();
  console.log("你好棒你成功了 你超級厲害的");
}
//執行
main();
