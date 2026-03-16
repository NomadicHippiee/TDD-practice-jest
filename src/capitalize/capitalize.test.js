import capitalize from "./capitalize.js";

test('Capitalize first letter', () => {
    expect(capitalize("hello")).toBe("Hello");
});