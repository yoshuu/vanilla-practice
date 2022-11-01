// Person 物件

var Person = {
  name: "Default_Name",
  sayHello: function () {
    return "Hi I'm " + this.name;
  },
};

// 透過 Object.create() 將Person作為原型物件來建立一個新的物件
var p = Object.create(Person);

console.log(p.sayHello());

p.name = "vic";

console.log(p.sayHello());
