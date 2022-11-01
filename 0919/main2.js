class Food {
  constructor(fruit, color) {
    this.fruit = fruit;
    this.color = color;
  }

  saySell() {
    console.log("快來買蘋果！！！");
  }
}

const apple = new Food("apple", "red");

apple.saySell();
