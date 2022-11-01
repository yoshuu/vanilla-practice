//  細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，試寫一遞迴函數function twofold(b, m) 。
// 讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。

// function twofold(b, m) {
//   let apple = b;
//   let time = m;
//   if (time === b) {
//     return apple;
//   }
//   return b * b + (time - 20);
// }

// console.log(twofold(1, 50));

function twofold(b, m) {
  const initial = Math.pow(2, 1);
  if (m > 0) {
    b = b * initial;
    return twofold(b, m - 20);
  }
  return Math.floor(b);
}

console.log(twofold(2, 60));
