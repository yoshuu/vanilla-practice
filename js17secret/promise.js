let isPregnant = false;

const promise = new Promise((resolve, reject) => {
  if (isPregnant) {
    resolve("孩子他爸");
  } else {
    reject("老公");
  }
});

promise
  .then((name) => {
    console.log(`小藍成為了${name}!`);
  })
  .catch((name) => {
    console.log(`小藍成為了${name}!`);
  })
  .finally(() => {
    console.log(`小藍跟小紅結婚了！！`);
  });
