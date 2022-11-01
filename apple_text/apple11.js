class Person {
  constructor(name) {
    this.name = name;
  }
  greeting() {
    return "hello! My name is " + this.name + ".";
  }
}

const vic = new Person("vic");

console.log(vic);
