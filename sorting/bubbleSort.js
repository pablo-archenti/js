// Time complexity
// NO SWAP CHECKING => O(n^2)
// WITH SWAP CHECKING => O(n), so quite quick if array is almost sorted
function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let swap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }

    return arr;
}

console.log(bubbleSort([10, 3, 1, 100, 90]));
