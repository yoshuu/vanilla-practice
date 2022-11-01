function Food(fruit, color) {
  this.fruit = fruit;
  this.color = color;
}

Food.prototype.saySell = function () {
  console.log("快來買蘋果！！！");
};

const apple = new Food("apple", "red");

apple.saySell();
