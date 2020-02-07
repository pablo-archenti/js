

// SECTION 5 STEP 25 - FREQUENCY COUNTER

// O(n^2) time complexity
// O(n) space complexity
// BASIC SOLUTION
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         const indexOfSquare = arr2.indexOf(arr1[i] ** 2);
//         if (indexOfSquare === -1) {
//             return false;
//         }
//         arr2.splice(indexOfSquare, 1);
//     }

//     return true;
// }

// FREQUENCY COUNTER ALGORITHM
// O(n) time complexity
// O(n) space complexity
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const freq1 = {};
    const freq2 = {};

    for (const val1 of arr1) {
        freq1[val1] = ++freq1[val1] || 1;
    }
    for (const val2 of arr2) {
        freq2[val2] = ++freq2[val2] || 1;
    }

    if ((Object.keys(freq1)).length !== (Object.keys(freq2)).length) {
        return false;
    }

    for (const key1 in freq1) { // eslint-disable-line
        if (!(key1**2 in freq2)) {
            return false;
        }

        if (freq1[key1] !== freq2[key1**2]) {
            return false;
        }
    }

    return true;
}

module.exports = same;
