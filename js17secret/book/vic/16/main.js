// 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。
// 讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果

function caesarcipher(n, s) {
  let code = s.charCodeAt(0) - 97;
  let newCode = (code + n) % 26;

  return String.fromCharCode(newCode + 97);
}

let apple = ["b", "o", "o", "k", "a"];

var a = [];
for (let i = 0; i < input.length; i++) {
  let result = caesarcipher(3, input[i]);
  a.push(result);
}
console.log(a);

// 使用者先輸入五個字串
// 核心弄出來了,剩下的就不難
