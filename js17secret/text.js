class Dog {
  sayGG(name) {
    this.name = name;
  }
  sayHello() {
    console.log("hello");
  }
}

var apple = new Dog();

apple.sayGG("為什麼");
apple.sayHello();
