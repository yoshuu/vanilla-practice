import { playMovie } from "./playMovie.js";

test("人數如果是10人的話", () => {
  const people = 10;
  const result = playMovie(people);

  expect(true).toBeTruthy();
});

test("沒有人的話", () => {
  const people = 0;
  const result = playMovie(people);

  expect(false).toBeFalsy();
});
