let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// 这只仓鼠找到了食物
speedy.eat("apple");
console.log(speedy.stomach); // apple

// 这只仓鼠也找到了食物，为什么？请修复它。
console.log(lazy.stomach); // apple
