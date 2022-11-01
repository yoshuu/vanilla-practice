var Person = function () {
  this.sayHello = function () {
    return "yo";
  };
};

Person.prototype.sayHello = function () {
  return "Hi";
};

var p = new Person();

console.log(p.sayHello());
