// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let object = {};
    max = 0;
    maxChar = '';
    for (let char of str) {
        if (object[char]) {
            object[char]++
        } else {
            object[char] = 1;
        }
    }
    for (let char in object) {
        if (object[char] > max) {
            max = object[char]
            maxChar = char;
        }
    }
}

module.exports = maxChar;
