const input = require('readline-sync');

require('../detectRunMode')(
    () => console.log(charCount('Running in debug mode!!')),
    () => console.log(charCount(input.question('Enter string: '))),
);

// SECTION 4 STEP 3
// O(n) time complexity
// O(n) space complexity
function charCount(str) {
    if (typeof str !== 'string') {
        throw new Error('charCount() only accepts a string');
    }

    const result = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

// Solution 1: Better performance
function isAlphaNumeric(char) {
    const charCode = char.charCodeAt(0);
    if (((charCode > 47 && charCode < 58)) ||
         ((charCode > 64) && (charCode < 91)) ||
         ((charCode > 96) && (charCode < 123))) {
        return true;
    }

    return false;
}

// Solution 2
// function isAlphaNumeric(char) {
//     return /[a-z0-9]/i.test(char);
// }

module.exports = charCount;
