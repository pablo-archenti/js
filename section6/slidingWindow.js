
// ([1,3,10,5,7,6], 3) => 22

exports.maxSubarraySum = (arr, num) => {
    if (arr.length < num) {
        return null;
    }

    let max = 0;
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    let temp = max;
    for (let j = num; j < arr.length; j++) {
        temp = temp + arr[j] - arr[j - num];
        if (temp > max) {
            max = temp;
        }
    }

    return max;
};

exports.minSubarrayLen = (nums, sum) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        } else if (total >= sum) { // if current window adds up to at least the sum given then we can shrink the window
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        } else { // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};

exports.findLongestSubstring = (str) => {
    const length = 0;
    let start = 0;
    let end = 0;
    let tempStr = '';

    while (start < str.length) {
        if (set.has(str[end])) {
            start = start + 1;
        }


    }

    return tempStr.length;
};

