const getApple = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
    reject();
  }, 3000);
});

getApple
  .then((data) => {
    console.log(`獲得${data}顆蘋果`);
  })
  .catch((err) => {
    console.log(`獲得${data}顆蘋果`);
  });
