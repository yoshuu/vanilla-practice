//  宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母
import makeQuestion from "../nodeJs_modules/readline.js";

main();

async function main() {
  console.log("請分別輸入四個英文名字");

  let englishName = [];
  for (let n = 0; n < 4; n++) {
    let inputName = await makeQuestion("請輸入英文名字：");
    englishName.push(inputName);
  }

  var a = englishName[0];

  var b = a.split("");

  const oneResult = b.filter((apple, book) => (book & 1) === 0);

  var c = englishName[2];

  var d = c.split("");

  const twoResult = d.filter((apple, book) => (book & 1) === 0);

  console.log(`第一個名字的單個字母是：${oneResult}`);
  console.log(`第三個名字的單個字母是：${twoResult}`);
}
