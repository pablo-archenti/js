
// SECTION 5 STEP 33 - SLIDING WINDOW

// Time complexity - O(n^2)
// function maxSubarraySum(arr, num) {
//     if (arr.length < num) {
//         return null;
//     }

//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let sum = 0;
//         for (let j = 0; j < num; j++) {
//             sum += arr[i + j];
//         }
//         if (sum > max) {
//             max = sum;
//         }
//     }

//     return max;
// }

// Time complexity - O(n)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}


module.exports = maxSubarraySum;
