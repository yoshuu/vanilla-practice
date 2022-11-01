function promise(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a) {
        resolve(`成功`);
      } else {
        reject("你失敗了謝謝");
      }
    }, 0);
  });
}

promise(1) // 第一次成功，因為是true
  .then((r) => {
    console.log(r);
    return promise(1); // 第二次成功，因為是true
  })
  .then((r) => {
    console.log(r);
    return promise(0); // 失敗，下面的就不會去看，會直接跳catch
  })
  .then((r) => {
    console.log(r);
    return promise(1);
  })
  .catch((r) => {
    console.log(r);
  });
