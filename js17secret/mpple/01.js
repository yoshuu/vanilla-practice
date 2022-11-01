// 檢查輸入的值, 若符合以下條件則回傳錯誤訊息
// 未輸入, 空白字元
function verifyRequiredInput(value) {
  if (value === "") {
    throw new Error("未輸入喔");
  }
  if (value === "null") {
    throw new Error("不要玩 null 啦！");
  }
  if (value === "undefined") {
    throw new Error("不要玩 undefined 啦！");
  }
}
// function verifySpaceCharacters(value) {}
// function verifyNoEnCharacters(params) {}
function verifyIsNumber(value) {
  if (/\s/.test(value)) {
    throw new Error("不能有空白字元喔");
  }
  if (/[a-z]/gi.test(value)) {
    throw new Error("不能有英文字元喔");
  }
  if (!/[0-9]/g.test(value)) {
    throw new Error("請輸入 0-9 正整數");
  }
}
// 輸入值是整數
function verifyIsInteger(value) {
  if (!Number.isInteger(value)) {
    throw new Error("請輸入整數喔");
  }
}
// 輸入值不小於某數
function verifyNotLessThan(x, y) {
  if (+x < y) {
    throw new Error(`要大於 ${y} 喔`);
  }
}
// 輸入值為數字
// function verifyInputValueIsNumber(value) {
//   if (!Number(value)) {
//     throw new Error("非數字，請輸入0-9阿拉伯數字");
//   }
//
// }
// 排除二、八、十六進位以及e科學符號
function excludeBitOctHexAndE(value) {
  if (/0b/gi.test(value)) {
    throw new Error("不支援二進位，請輸入 0-9 阿拉伯數字");
  }
  if (/0o/gi.test(value)) {
    throw new Error("不支援八進位，請輸入 0-9 阿拉伯數字");
  }
  if (/0x/gi.test(value)) {
    throw new Error("不支援十六進位，請輸入 0-9 阿拉伯數字");
  }
  if (/\d(?=e)|e(?=\d)/gi.test(value)) {
    throw new Error("不支援科學符號 e，請輸入 0-9 阿拉伯數字");
  }
}
// 判斷是否為偶數
function verifyIsEvenNumber(value) {
  if (!(value % 2 === 0)) {
    throw new Error("請輸入偶數");
  }
}
// 判斷英文名
function verifyEnName(value) {
  if (/[^a-z|\.|\s|\-]/gi.test(value)) {
    throw new Error("請輸入英文字元");
  }
}

export {
  verifyRequiredInput,
  verifyIsInteger,
  verifyIsNumber,
  verifyNotLessThan,
  verifyIsEvenNumber,
  // verifyInputValueIsNumber,
  excludeBitOctHexAndE,
  verifyEnName,
};
