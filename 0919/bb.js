let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 500);
});

promise.then(function (result) {
  console.log(result);
  return result * 3;
});

promise.then(function (result) {
  console.log(result);
  return result * 5;
});

promise.then(function (result) {
  console.log(result);
  return result * 10;
});
