import {add, multiply, subtract, divide} from './calculator.js';

test('add a + b', () =>{
    expect(add(2,2)).toBe(4);
});

test('subtract a - b', () => {
    expect(subtract(10,5)).toBe(5);
});

test('multiply a * b', () => {
    expect(multiply(3, 5)).toBe(15);
});

test('divide a / b', () =>{
    expect(divide(20, 2)).toBe(10);
})