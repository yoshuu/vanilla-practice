var Person = function () {};

// 函式也是一種物件，所以可以透過prototype來擴充每一個透過這個函式所建立的物件

Person.prototype.sayHello = function () {
  return "Hi!";
};

var p1 = Person();

var p2 = new Person();

console.log(p2.sayHello());

Person.sayHello;
