const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

myPromise
  .then((data) => {
    console.log("成功");
  })
  .catch((err) => {
    console.log("錯了");
  });

// 體現出了，promise非同步的本質
