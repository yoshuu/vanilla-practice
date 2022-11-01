//將字串轉二維陣列

export function turnArray(input) {
  return input
    .split("\n")
    .filter((item) => item.length !== 0)
    .map((item) => item.split(""));
}
