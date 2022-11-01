//  龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
// 請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽 ?

let rabbit = 20;
let turtle = 0.28;

function rabbitRun(n) {
  let rabbit = 20;
  let num = n;
  let result = num * rabbit - n;
  return result;
}

function turtleRun(n) {
  let turtle = 10;
  let num = n;
  let result = turtle * num;
  console.log(result);
}

// 算出兔子在偷懶的狀態下可以偷懶多久還能贏得比賽

// 做不出來 先加上限制前提： 兔子每秒都跑20公尺  烏龜每秒跑10公尺 20 20 20 20 20 10 10 10 10 10 10 10 10 10 10
function ifRun(s) {
  let S = Number(s);
}

// 也想不出來 試著用先把兔子跟烏龜1000公尺能跑幾秒弄出來

function rabbitSpend(n) {
  let rabbit = n / 20;
  let totalS = Math.trunc(rabbit);
  // 這邊的值是兔子跑了幾秒

  // for (let i = 1; i < totalS; i++) {
  //   let meter = rabbitRun(i);

  //   console.log(meter);
  // }
  let meter = rabbitRun(totalS);
  console.log(meter);
}

rabbitSpend(1000);

// console.log(rabbitRun(53));
