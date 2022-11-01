// 洛克人的武器是 buster 飛彈
var rock = { buster: true };

// 剪刀人的武器是剪刀
var cut = { cutter: true };

// 氣力人的武器就是超級手臂
var gut = { superArm: true };

// 指定 cut 為 rock 的原型
Object.setPrototypeOf(rock, cut);

// 指定 gut 為 cut 的原型

Object.setPrototypeOf(cut, gut);

// 這樣洛克人就可以取得各種武器了
console.log("buster", rock);
console.log("cutter", rock);
console.log("superArm", rock);
