let isPregnant = false;

function promise() {
  return new Promise((resolve, reject) => {
    if (isPregnant) {
      resolve("孩子他爸");
    } else {
      resolve("老公");
    }
  });
}

// const promise = new Promise((resolve, reject) => {
//   if (isPregnant) {
//     resolve("孩子他爸");
//   } else {
//     reject("老公");
//   }
// });

async function test() {
  let apple = await promise();

  console.log(`小藍成為了${apple}!`);
}

test();

// test().catch((name) => {
//   console.log(`小藍成為了${name}!`);
// });

// test().finally((name) => {
//   console.log(`小藍跟小紅結婚了！！`);
// });

// promise
//   .then((name) => {
//     console.log(`小藍成為了${name}!`);
//   })
//   .catch((name) => {
//     console.log(`小藍成為了${name}!`);
//   })
//   ≈
