import caesarCipher from './caesarCipher.js';

test('xyz should return abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('HeLLo should be KhOOr', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');

});

test('Hello, World! should be Khoor, Zruog!', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})