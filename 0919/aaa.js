function whiteWork() {
  console.log("被小白叫，來去工作");
}

function yellowWork(call) {
  console.log("先工作，叫小白");
  call();
}

yellowWork(whiteWork);
