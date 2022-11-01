//確認有收到輸入值
function verifyInput(input) {
    if (input.trim() === '') throw '無輸入值結果, 請輸入內容';
}

//檢查符合英文輸入
function checkEnglishString(alphabet) {
    if (!/^[A-Za-z]*$/.test(alphabet)) throw '輸入值含非英文字母, 請輸入英文';
}

//檢查符合數字input
function numberValidation(numInput) {
    if (numInput.startsWith('0x')) throw '不接受十六進制輸入法表達數字';
    if (numInput.startsWith('0o')) throw '不接受八進制輸入法表達數字';
    if (numInput.startsWith('0b')) throw '不接受二進制輸入法表達數字';
    if (numInput.includes('e')) throw '不接受e進位表達數字';
    if (typeof +numInput !== 'number') throw '輸入值非數字'; //增加判斷型別
    if (Number.isNaN(+numInput)) throw '輸入值無效, 請輸入阿拉伯數字';
}

//檢查符合整數
function checkInteger(number) {
    if (!Number.isInteger(+number)) throw '輸入值非整數, 請輸入整數數字';
}

//檢查符合正整數
function checkPositiveInteger(number) {
    if (+number < 0) throw '輸入值小於0, 請輸入大於0的整數數';
    if (+number === 0) throw '輸入值為0, 請輸入大於0的整數';
}

//檢查大於4的偶數
function checkAboveFourEvenNumber(number) {
    if (+number % 2 !== 0) throw '輸入值為奇數, 請輸入偶數';
    if (+number < 4) throw '輸入值小於4, 請輸入大於4的整數';
}

//檢查大於等於0整數
function checkIncludingZeroPositiveNumber(number) {
    if (+number < 0) throw '輸入值小於0, 請輸入>=0的整數';
}

//export
export {
    verifyInput,
    numberValidation,
    checkInteger,
    checkPositiveInteger,
    checkAboveFourEvenNumber,
    checkIncludingZeroPositiveNumber,
    checkEnglishString,
};
