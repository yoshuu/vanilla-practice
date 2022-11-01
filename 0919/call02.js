let money = null;
function slower(callbackWorker) {
  setTimeout(function () {
    money = 30;
    callbackWorker();
  }, 200);
}
function faster() {
  setTimeout(function () {
    console.log("I have " + money);
  }, 100);
}
slower(faster);
