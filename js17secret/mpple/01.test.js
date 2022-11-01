import {
  verifyRequiredInput,
  // verifyInputValueIsNumber,
  verifyIsInteger,
  verifyNotLessThan,
  verifyIsEvenNumber,
  excludeBitOctHexAndE,
} from "./validator.js";
//verifyRequiredInput
describe("檢查未輸入及空白", () => {
  test("未輸入", () => {
    const input = "";
    expect(() => {
      verifyRequiredInput(input);
    }).toThrow("未輸入");
  });
  test("排除空白字元", () => {
    const input = " ";
    expect(() => {
      verifyRequiredInput(input);
    }).toThrow("有空白字元");
  });
});
describe("驗證輸入值是數字", () => {
  test("five 排除非數字", () => {
    const input = "five";
    expect(() => {
      verifyRequiredInput(input);
    }).toThrow("有英文字元請輸入0-9正整數");
  });
});
//verifyIsInteger
describe("驗證是否為整數", () => {
  test("0.1 非整數。", () => {
    const input = 0.1;
    expect(() => {
      verifyIsInteger(input);
    }).toThrow("非整數，請輸入0-9阿拉伯數字");
  });
  test(".2 非整數。", () => {
    const input = 0.2;
    expect(() => {
      verifyIsInteger(input);
    }).toThrow("非整數，請輸入0-9阿拉伯數字");
  });
});
//verifyNotLessThan
describe("不小於零", () => {
  test("-1 小於零。", () => {
    const input = -1;
    expect(() => {
      verifyNotLessThan(input);
    }).toThrow("小於零，請輸入正整數");
  });
});
//verifyIsEvenNumber
describe("輸入值不小於 4", () => {
  test("輸入值不小於 4", () => {
    const input = 2;
    expect(() => {
      verifyIsEvenNumber(input);
    }).toThrow("請輸入大於4的偶數");
  });
});
//excludeBitOctHexAndE
describe("排除二,八,十六進位及科學符號e", () => {
  test("含有 0b 排除二進位。", () => {
    const input = "0b1";
    expect(() => {
      excludeBitOctHexAndE(input);
    }).toThrow("不支援二進位，請輸入0-9阿拉伯數字");
  });
  test("含有 0o 排除八進位。", () => {
    const input = "0o2";
    expect(() => {
      excludeBitOctHexAndE(input);
    }).toThrow("不支援八進位，請輸入0-9阿拉伯數字");
  });
  test("含有 0x 排除十六進位。", () => {
    const input = "0x1";
    expect(() => {
      excludeBitOctHexAndE(input);
    }).toThrow("不支援十六進位，請輸入0-9阿拉伯數字");
  });
  test("含有 e 排除科學符號", () => {
    const input = "1e7";
    expect(() => {
      excludeBitOctHexAndE(input);
    }).toThrow("不支援科學符號e，請輸入0-9阿拉伯數字");
  });
});

//verifyInputValueIsNumber
// describe("驗證輸入值是數字", () => {
//   test("five 排除非數字", () => {
//     const input = "five";
//     expect(() => {
//       verifyInputValueIsNumber(input);
//     }).toThrow("非數字，請輸入0-9阿拉伯數字");
//   });
// });
