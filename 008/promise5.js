//promise.then裡面可以回傳另外一個promise

const myPromise = new Promise((resolve, reject) => {
  resolve(123);
});

const p2 = new Promise((resolve) => {
  resolve(456);
});

myPromise
  .then((data) => {
    console.log(data);
    return p2;
  })
  .then((data) => {
    console.log(data);
  });
