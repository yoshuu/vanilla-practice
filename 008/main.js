class Food {
  constructor(fruit, color) {
    this.fruit = fruit;
    this.color = color;
  }

  saySell() {
    console.log("快來買蘋果！！！");
  }

  aaa() {
    console.log("aaa");
  }
}

const apple = new Food("apple", "red");

apple.saySell();

console.log(apple.__proto__ === Food.prototype);
