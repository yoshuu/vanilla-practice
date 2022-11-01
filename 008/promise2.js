const apple = new Promise((resolve, reject) => {
  console.log(resolve(1));
}); // 這就是怎麼樣自己把它包成一個promise

apple.then((a) => {
  console.log(a + 1);
});
