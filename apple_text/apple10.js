function Person(name) {
  this.name = name;
}

Person.prototype.greeting = function () {
  console.log("Hello! My name is " + this.name + ".");
};

new Person("vic").greeting();
