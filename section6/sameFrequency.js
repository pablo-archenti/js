

// Time complexity - O(N)
function sameFrequency(num1, num2) {
    const str1 = num1 + '';
    const str2 = num2 + '';
    const freq = {};

    if (str1.length !== str2.length) {
        return false;
    }

    for (const char of str1) {
        freq[char] = freq[char] ? freq[char] + 1 : 1;
    }

    for (const char of str2) {
        if (!freq[char]) {
            return false;
        }
        freq[char]--;
    }

    for (const char in freq) {
        if (freq[char] !== 0) {
            return false;
        }
    }

    return true;
}


sameFrequency(12, 21);

module.exports = sameFrequency;
