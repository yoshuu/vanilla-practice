let money = null;
function slower() {
  setTimeout(function () {
    money = 30;
  }, 200);
}
function faster() {
  setTimeout(function () {
    console.log("I have " + money);
  }, 100);
}
slower();
faster();
