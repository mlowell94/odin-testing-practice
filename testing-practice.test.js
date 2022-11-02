import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './testing-practice';

test('Capitalizes first character in string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('Reverses string', () => {
    expect(reverseString('hello how are you')).toBe('uoy era woh olleh')
});

test('Adds two numbers', () => {
    expect(calculator.add(12, 6)).toBe(18);
});

test('Subtracts two numbers', () => {
    expect(calculator.subtract(12, 6)).toBe(6);
});

test('Divides first number from second number', () => {
    expect(calculator.divide(12, 6)).toBe(2);
});

test('Multiplies two numbers together', () => {
    expect(calculator.multiply(12, 6)).toBe(72);
});

test('Encrypts string', () => {
    expect(caesarCipher('freeze')).toBe('gsffaf')
})

test('Capitalization respected', () => {
    expect(caesarCipher('FrEeZe')).toBe('GsFfAf')
})

test('Punctuation ignored', () => {
    expect(caesarCipher('freeze!')).toBe('gsffaf!')
})

test('Object contains average, min, max, and length', () => {
    const object = {
        average : 4,
        min : 1,
        max : 8,
        length : 6
    };
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject(object)
})