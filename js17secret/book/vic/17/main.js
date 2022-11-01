// 運用 Borda Count。算出下面的候選人分數。
// (第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)

const votes = [51, 5, 23, 21];
const ranking = [
  ["c1", "c3", "c2", "c4"],
  ["c3", "c2", "c4", "c1"],
  ["c2", "c3", "c4", "c1"],
  ["c4", "c3", "c2", "c1"],
];

// main();

// function main() {
//   console.log("第一名候選人票數:"+ );
// }

function calulate(votes, ranking, order) {
  ranking = [
    ["c1", "c3", "c2", "c4"],
    ["c3", "c2", "c4", "c1"],
    ["c2", "c3", "c4", "c1"],
    ["c4", "c3", "c2", "c1"],
  ];
  return ranking
    .map((input, index) => votes[index] * (4 - input.indexOf(order)))
    .reduce((a, b) => a + b, 0);
}
console.log(calulate(votes, ranking, "c1"));
console.log(calulate(votes, ranking, "c2"));
console.log(calulate(votes, ranking, "c3"));
console.log(calulate(votes, ranking, "c4"));
