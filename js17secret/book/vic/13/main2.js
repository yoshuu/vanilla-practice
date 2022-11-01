//  龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，
// 請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽 ?

// 假如是使用輸入秒數可以得知跑了幾公尺

main();

function main() {
  let turtle = 0.28;
  let rabbit = 20 - 0.2;
  let distance = 1000;

  let rabbitback = ((1 / rabbit) * distance) / (distance / rabbit);

  const result = rabbitCanLazy(turtle, rabbit, distance);
  console.log("這隻兔子可以偷懶" + (result - rabbitback) + "秒");
}

function rabbitCanLazy(turtle, rabbit, distance) {
  return Math.floor(distance / turtle - distance / rabbit);
}
