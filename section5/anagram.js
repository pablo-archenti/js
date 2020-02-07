require('../detectRunMode')(
    () => console.log(validAnagram('anagram', 'nagaram')),
    () => console.log(validAnagram(input.question('Enter string: '))),
);

// function validAnagram(str1, str2) {
//     const freq1 = {};
//     const freq2 = {};

//     if (str1.length !== str2.length) {
//         return false;
//     }

//     for (const c1 of str1) {
//         freq1[c1] = (freq1[c1] || 0) + 1;
//     }

//     for (const c2 of str2) {
//         freq2[c2]= (freq2[c2] || 0) + 1;
//     }

//     for (const c3 in freq1) { // eslint-disable-line
//         if (!(c3 in freq2)) {
//             return false;
//         }

//         if (freq1[c3] !== freq2[c3]) {
//             return false;
//         }
//     }

//     return true;
// }


function validAnagram(str1, str2) {
    const freq1 = {};

    if (str1.length !== str2.length) {
        return false;
    }

    for (const c1 of str1) {
        freq1[c1] = (freq1[c1] || 0) + 1;
    }

    for (const char2 of str2) { // eslint-disable-line
        if (!freq1[char2]) {
            return false;
        } else {
            freq1[char2] -= 1;
        }
    }

    return true;
}

module.exports = validAnagram;
