// 宣告一整數陣列 array = [3,50,0,13,2,4,11] 試寫一程式，印出陣列中所包含的質數以及其索引值。

//普遍方法判斷質數

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return true;
    }
  }
  return false;
}

function main() {
  let apple = [3, 50, 0, 13, 2, 4, 11];

  for (var gg = 0; gg < 6; gg++)
    if (isPrime(apple[gg]) == false) console.log(apple[gg]);

  let x = apple.length;

  let index = apple.findIndex((apple) => apple < 1);
  console.log(index);
}

main();
