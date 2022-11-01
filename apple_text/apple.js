// function User(name) {
//   this.name = name;
// }
// let user1 = new User(name);

// User.prototype.getName = function () {
//   return this.name;
// };

class Human {
  constructor(race) {
    this.race = race;
  }
  getRace() {
    return this.race;
  }
}

class User extends Human {
  constructor(name, race) {
    super(race);
    this.name = name;
  }
}
