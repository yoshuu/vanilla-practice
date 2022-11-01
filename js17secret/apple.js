const numList = [3, 50, 0, 13, 2, 4, 11];
function main2(arr) {
  let temp = arr.map((value, index) => {
    if (isPrime(value)) {
      return { value, index };
    }
  });
  let filteredTemp = temp.filter((el) => el !== undefined);
  let result = filteredTemp
    .map((el) => `${el.value} 為質數索引值為 ${el.index}`)
    .join("\n");
  console.log(result);
}
main2(numList);

export default function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  } else {
    let sqrtInteger = Math.ceil(Math.sqrt(num));
    for (let index = 2; index <= sqrtInteger; index++) {
      if (num % index === 0) {
        return false;
      }
    }
    return true;
  }
}
