const Person = function (name) {
  this.name = name;
};

var p = new Person("vic");

Person.prototype.sayHelloWorld = function () {
  return "hello,world!";
};

console.log(p.sayHelloWorld());
