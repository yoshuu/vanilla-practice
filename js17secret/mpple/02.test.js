import {
    checkStringTypeInput,
    checkNumberTypeInteger,
    checkPositiveInteger,
    checkAboveFourEvenNumber,
    checkIncludingZeroPositiveNumber,
} from '../checkinput.js';

//checkStringTypeInput
describe('檢查字串型別的input, 若為錯誤格式拋出對應訊息', () => {
    test('型別非string, 拋出錯誤訊息', () => {
        const input = 1;
        const expected = '輸入值非字串';
        expect(() => checkStringTypeInput(input)).toThrow(expected);
    });
    test('輸入空值為錯誤格式, 拋出錯誤訊息', () => {
        const input = '';
        const expected = '無輸入值結果, 請輸入數字';
        expect(() => checkStringTypeInput(input)).toThrow(expected);
    });
    test('十六進制輸入法為錯誤格式, 拋出錯誤訊息', () => {
        const input = '0x';
        const expected = '不接受十六進制輸入法';
        expect(() => checkStringTypeInput(input)).toThrow(expected);
    });
    test('八進制輸入法為錯誤格式, 拋出錯誤訊息', () => {
        const input = '0o';
        const expected = '不接受八進制輸入法';
        expect(() => checkStringTypeInput(input)).toThrow(expected);
    });
    test('二進制輸入法輸入法為錯誤格式, 拋出錯誤訊息', () => {
        const input = '0b';
        const expected = '不接受二進制輸入法';
        expect(() => checkStringTypeInput(input)).toThrow(expected);
    });
    test('0e輸入法輸入法為錯誤格式, 拋出錯誤訊息', () => {
        const input = '0e';
        const expected = 'e is bad format';
        expect(() => checkStringTypeInput(input)).toThrow(expected);
    });
    test('輸入英文字為正確字串格式, 不拋出錯誤訊息', () => {
        const input = 'abc';
        expect(() => checkStringTypeInput(input)).not.toThrow();
    });
});

//檢查checkNumberTypeInteger
describe('檢查數字型別的input 是否符合整數數字, 錯誤格式拋出對應訊息', () => {
    test('型別非number, 拋出錯誤訊息', () => {
        const input = '1';
        const expected = '輸入值非數字';
        expect(() => checkNumberTypeInteger(input)).toThrow(expected);
    });
    test('輸入NaN為錯誤格式, 拋出錯誤訊息', () => {
        const input = NaN;
        const expected = '輸入值無效, 請輸入整數數字';
        expect(() => checkNumberTypeInteger(input)).toThrow(expected);
    });
    test('輸入小數為錯誤格式, 拋出錯誤訊息', () => {
        const input = 1.2;
        const expected = '輸入值非整數, 請輸入整數數字';
        expect(() => checkNumberTypeInteger(input)).toThrow(expected);
    });
    test('輸入正整數為正確格式, 不拋出錯誤', () => {
        const input = 1;
        expect(() => checkNumberTypeInteger(input)).not.toThrow();
    });
    test('輸入負整數為正確格式, 不拋出錯誤', () => {
        const input = -1;
        expect(() => checkNumberTypeInteger(input)).not.toThrow();
    });
});

//檢查checkPositiveInteger
describe('檢查數字型別的input 是否符合正整數, 錯誤格式拋出對應訊息', () => {
    test('輸入值小於0, 拋出錯誤訊息', () => {
        const input = -1;
        const expected = '輸入值小於0, 請輸入正整數';
        expect(() => checkPositiveInteger(input)).toThrow(expected); //?這樣寫不行?
    });

    test('輸入值為0, 拋出錯誤訊息', () => {
        const input = 0;
        const expected = '輸入值為0, 請輸入正整數';
        expect(() => checkPositiveInteger(input)).toThrow(expected);
    });
    test('輸入正整數為正確格式, 不拋出錯誤', () => {
        const input = 1;
        expect(() => checkPositiveInteger(input)).not.toThrow();
    });
});

//檢查checkAboveFourEvenNumber,
describe('檢查數字型別的input 是否符合大於4的正偶數, 錯誤格式拋出對應訊息', () => {
    test('輸入奇數為錯誤格式, 拋出錯誤訊息', () => {
        const input = 5;
        const expected = '輸入值為奇數, 請輸入偶數';
        expect(() => checkAboveFourEvenNumber(input)).toThrow(expected); //?這樣寫不行?
    });

    test('輸入小於4為錯誤格式, 拋出錯誤訊息', () => {
        const input = 2;
        const expected = '輸入值小於4, 請輸入大於4的整數';
        expect(() => checkAboveFourEvenNumber(input)).toThrow(expected);
    });
    test('輸入4為正確格式, 不拋出錯誤', () => {
        const input = 4;
        expect(() => checkAboveFourEvenNumber(input)).not.toThrow();
    });
});

//checkIncludingZeroPositiveNumber
describe('檢查input 是否為大於等於0的數字, 錯誤格式拋出對應訊息', () => {
    test('input為0 符合正確格式', () => {
        const input = 0;
        expect(() => checkIncludingZeroPositiveNumber(input)).not.toThrow();
    });
    test('input小於0, 拋出錯誤訊息', () => {
        const input = -1;
        const expected = '輸入值小於0, 請輸入>=0的整數';
        expect(() => checkIncludingZeroPositiveNumber(input)).toThrow(expected);
    });
});

//3A
//arrange 準備的目標
//act 呼叫的方法
//assert 預期的結果
