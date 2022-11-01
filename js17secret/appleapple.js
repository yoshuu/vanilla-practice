function lover(name) {
  this.name = name;
  this.sayName = function () {
    console.log("我的老婆是" + this.name);
  };
}
var name = "美美";
var xiaoHong = new lover("小紅");
xiaoHong.sayName();
