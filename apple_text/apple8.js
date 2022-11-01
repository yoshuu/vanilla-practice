var Person = function (name) {
  this.name = name;
};

var p = new Person("vic");

// 在 Person.prototype 新增 sayHello方法
Person.prototype.sayHello = function () {
  return "Hi, I'm" + this.name;
};

// 所以p也可以呼叫sayHello方法
console.log(p.sayHello());
