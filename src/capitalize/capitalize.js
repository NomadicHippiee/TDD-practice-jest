

export default function capitalize(string) {
    const firstLetter = string.charAt(0).toUpperCase();
    const remainingLetters = string.slice(1).toLowerCase();
    return firstLetter + remainingLetters;
}

