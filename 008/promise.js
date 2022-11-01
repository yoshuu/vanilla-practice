function event(resolve, reject) {
  // resolve跟reject都是一個function，代表著你想要讓你的promise回傳什麼
  resolve("蔡佳憲");
}

const myPromise = new Promise(event); // 裡面會需要傳一個function

myPromise.then((a) => {
  console.log(a + 1);
});
