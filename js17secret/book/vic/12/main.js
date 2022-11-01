// 找出10~20的質數，並列出前述各質數在1~100的倍數

function isPrime(input) {
  if (input === 0) return false;
  if (input === 1) return false;
  for (let i = 2; i < input; i++) {
    if (input % i === 0) return false;
  }
  return true;
}

function findPrime(x, y) {
  let arr = [];
  for (let i = x; i <= y; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function findMultiple(input) {
  let arr = [];
  for (let i = 1; i < 100; i++) {
    if (i % input == 0) arr.push(i);
  }
  return arr;
}

function main() {
  let prime = findPrime(10, 20);

  for (let i = 0; i < prime.length; i++) {
    console.log(`質數：${prime[i]}的所有倍數為` + findMultiple(prime[i]));
  }
}

main();
