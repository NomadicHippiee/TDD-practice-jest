function shiftCharacter(char, shift) {
  if (char >= "a" && char <= "z") {
    const code = char.charCodeAt(0) - "a".charCodeAt(0);
    const shifted = (code + shift) % 26;

    return String.fromCharCode(shifted + "a".charCodeAt(0));
  }

  if (char >= "A" && char <= "Z") {
    const code = char.charCodeAt(0) - "A".charCodeAt(0);
    const shifted = (code + shift) % 26;
    return String.fromCharCode(shifted + "A".charCodeAt(0));
  }

  return char;
}

export default function caesarCipher(string, shift) {
  return string
    .split('')
    .map(char => shiftCharacter(char, shift))
    .join('');
}
