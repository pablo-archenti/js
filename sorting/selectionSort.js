// Time complexity O(n ^  2)
// Can be good if we want to minimize the number of swaps
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([10, 3, 1, 100, 90]));