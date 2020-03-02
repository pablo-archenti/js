function merge(arr1, arr2) {
    const newArr = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
        if (arr1[pointer1] < arr2[pointer2]) {
            newArr.push(arr1[pointer1]);
            pointer1++;
        } else {
            newArr.push(arr2[pointer2]);
            pointer2++;
        }
    }

    while (pointer1 < arr1.length) {
        newArr.push(arr1[pointer1]);
        pointer1++;
    }

    while (pointer2 < arr2.length) {
        newArr.push(arr2[pointer2]);
        pointer2++;
    }

    return newArr;
}

// Time complexity O(NlogN)
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log('merge(): ', merge([1, 10, 50, 99, 300], [2, 14, 99, 99, 200]));
console.log('mergeSort(): ', mergeSort([1, 10, 50, 99, 300, 2, 14, 99, 99, 200]));
