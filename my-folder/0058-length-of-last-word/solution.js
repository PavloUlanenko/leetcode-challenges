/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWordLength = 0;
    const trimmedString = s.trim();
    for (let i = trimmedString.length - 1; i >= 0; i--) {
        if (trimmedString[i] === ' ') break;
        lastWordLength++;
    }

    return lastWordLength;
};
