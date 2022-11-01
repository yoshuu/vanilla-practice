import { recursive } from "./calculate.js";

test("輸入是4,結果應為8", () => {
  const n = 4;
  const result = recursive(4);
  expect(result).toBe(8);
});

test("輸入是6,結果應為32", () => {
  const n = 6;
  const result = recursive(6);
  expect(result).toBe(32);
});
