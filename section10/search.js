function linearSearch(arr, elem) { // eslint-disable-line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i;
        }
    }

    return -1;
};

// time complexity O(log n)
function binarySearch(arr, elem) {
    if (!Array.isArray(arr)) {
        return -1;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((right + left) / 2);

        if (elem === arr[middle]) {
            return middle;
        } else if (elem > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}


function naiveSearchString(str, elem) {
    let count = 0;
    let i = 0;

    if (typeof elem !== 'string' || elem.length < 1) {
        throw new TypeError('"elem" arg should be a string greater than 1');
    }

    while (i < str.length) {
        if (elem === (str.slice(i, i + elem.length))) {
            count++;

            i += elem.length - 1;
        }

        i++;
    }

    return count;
}

console.log(naiveSearchString('shslasagsadasdppag', 'ag'));

