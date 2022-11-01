new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 200);
})
  .then((result) => {
    console.log("result01: " + result);
    return result * 2;
  })
  .then((result) => {
    console.log("result02: " + result);
    return result * 2;
  })
  .then((result) => {
    console.log("result03: " + result);
    return result * 2;
  })
  .then((result) => {
    console.log("result04: " + result);
    return result * 2;
  });
