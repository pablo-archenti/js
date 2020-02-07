
require('../detectRunMode')(
    () => console.log(sumZero([-5, -2, 1, 2, 6])),
    () => console.log(),
);
// SECTION 5 STEP 30 - MULTIPLE COUNTERS

// O(n^2) time complexity
// O(1) space complexity
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }

//     return undefined;
// }

function sumZero(arr) {
    let first = 0;
    let last = arr.length && arr.length -1 || 0;

    while (first !== last) {
        const sum = arr[first] + arr[last];

        if (sum > 0) {
            last--;
        } else if (sum < 0) {
            first++;
        } else {
            return [arr[first], arr[last]];
        }
    }

    return undefined;
}

module.exports = sumZero;
