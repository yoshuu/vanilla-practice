// 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
// 讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

import makeQuestion from "../nodeJs_modules/readline.js";

main();

async function main() {
  const input = await makeQuestion("請輸入五個英文字母");

  var a = [];
  for (let i = 0; i < input.length; i++) {
    let result = caesarcipher(3, input[i]);
    a.push(result);
  }

  let end = a.join("");
  console.log(end);

  try {
  } catch (error) {
    console.log(error.message);
    return main();
  }
}

function caesarcipher(n, s) {
  let code = s.charCodeAt(0) - 97;
  let newCode = (code + n) % 26;

  return String.fromCharCode(newCode + 97);
}
