// 洛克人的武器是 buster 飛彈
var rock = { buster: true };

// 剪刀人的武器是剪刀
var cut = { cutter: true };

// console.log("buster" in rock);
// console.log("cutter" in rock);

// 指定 cut 為 rock的原型
Object.setPrototypeOf(rock, cut);

// console.log("buster" in rock);

// // 現在洛克人也可以使用剪刀人的武器
// console.log("cutter" in rock);

// 同一個物件沒辦法指定兩種原型物件，新的會覆蓋掉舊的

// 氣力人的武器是超級手臂
var guts = { superArm: true };

// 指定guts為rock的原型

Object.setPrototypeOf(rock, guts);

console.log("cutter" in rock);
console.log("superArm" in rock);

// 要同時擁有剪刀跟超級手臂就會需要用到原型鏈
// 下次揭曉
