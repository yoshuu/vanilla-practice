export function recursive(n) {
  if (Number(n) === 4) {
    return 8;
  } else {
    return (n - 2) * n + recursive(n - 2);
  }
}
