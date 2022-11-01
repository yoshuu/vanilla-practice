function CheckInteger(value) {
  if (!Number.isInteger(Number(value))) {
    throw new Error("請您輸入整數");
  }
}

function CheckBlank(value) {
  if (value === "") {
    throw new Error("請輸入後再送出！");
  }
  if (/\s/.test(value)) {
    throw new Error("請不要輸入空白！");
  }
}

function CheckNegative(value) {
  if (value < 0) {
    throw new Error("不要輸入負數！");
  }
}

function CheckNumber(value) {
  if (value.startsWith("0x")) throw new Error("請別輸入16進位");
  if (value.startsWith("0o")) throw new Error("請別輸入8進位");
  if (value.startsWith("0b")) throw new Error("請別輸入2進位");
  if (value.includes("e")) throw new Error("請別輸入e進位");
}

function Checkeven(value) {
  if (value % 2 !== 0) {
    throw new Error("只能輸入偶數!");
  }
}

function CheckDownlimit(value, x) {
  console.log("value,x", value, x);
  if ((value, x)) {
    throw new Error(`不要輸入${x}以下的數字`);
  }
}

function CheckEnglish(value) {
  if (!/^[A-Za-z]*$/.test(value)) throw new Error("請輸入英文");
}

const defalutValidators = {
  CheckInteger,
  CheckBlank,
  CheckNegative,
  CheckNumber,
  Checkeven,
  CheckDownlimit,
  CheckEnglish,
};

function useValidators(validators, value) {
  validators.forEach((validator) => {
    defalutValidators[validator](value);
  });
}

export { useValidators };
