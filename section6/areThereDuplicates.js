// function areThereDuplicates(...args) {
//     return new Set(args).size !== args.length;
// }

/**
 * Time complexity - O(N)
 * Space complexity - O(N)
 */
// function areThereDuplicates(...args) {
//     const freq = {};

//     for (const arg of args) {
//         freq[arg] = ++freq[arg] || 1;
//         if (freq[arg] > 1) {
//             return true;
//         }
//     }

//     return false;
// }

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;

    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }

    return false;
}

module.exports = areThereDuplicates;
