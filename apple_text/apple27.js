const rest = new Map();

rest
  .set("open", 10)
  .set("close", 22)
  .set(true, "已經開喔")
  .set(false, "已經關囉");

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// 已經關囉
