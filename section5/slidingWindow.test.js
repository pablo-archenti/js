const sut = require('./slidingWindow');

describe('slidingWindow: maxSubarraySum()', () => {
    it.each([
        [
            [],
            2,
            null,
        ],
        [
            [2, 4, 3],
            2,
            7,

        ],
        [
            [2, 4, 3, 6, 1, 0, 10],
            3,
            13,
        ],
        [
            [1, 2, 5, 2, 8, 1, 5],
            2,
            10,
        ],
        [
            [1, 2, 5, 2, 8, 1, 5],
            4,
            17,
        ],
        [
            [4, 2, 1, 6],
            1,
            6,
        ],
    ])('Given %p and %p should return "%p"', (arr, n, result) => {
        expect(sut(arr, n)).toBe(result);
    });
});
