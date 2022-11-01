function Ninja() {
  this.swung = true;
}

const ninja1 = new Ninja();

Ninja.prototype.swingSword = function () {
  return this.swung;
};
