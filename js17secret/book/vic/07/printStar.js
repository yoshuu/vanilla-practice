export function printStar(n) {
  let printRotateStar = "";
  n.forEach((item) => {
    item.forEach((el) => {
      printRotateStar += el;
    });
    printRotateStar += "\n";
  });
  return printRotateStar;
}
