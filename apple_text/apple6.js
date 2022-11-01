const Person = function (name) {
  this.name = name;
};

// 在Person.prototype 新增 sayHello 方法

Person.prototype.sayHello = function () {
  return "Hi, I'm " + this.name;
};

var p = new Person("vic");

console.log(p.sayHello());
