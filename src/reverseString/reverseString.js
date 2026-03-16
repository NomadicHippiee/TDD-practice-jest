
export default function reverseString(string) {
    const newString = string.toLowerCase();

  return newString.split('').reverse().join('');
}