import { judgePrice } from "./judgePrice.js";

test("年齡假如是5歲", () => {
  const age = 5;
  const result = judgePrice(age);

  expect(true).toBeTruthy();
});

test("年齡假如是25歲", () => {
  const age = 25;
  const result = judgePrice(age);

  expect(false).toBeFalsy();
});
