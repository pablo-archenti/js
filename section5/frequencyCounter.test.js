const sut = require('./frequencyCounter');

describe('frequencyCounter: same()', () => {
    it.each([
        [
            [2, 4],
            [25, 4, 16],
            false,
        ],
        [
            [2, 4, 3],
            [25, 4, 16],
            false,

        ],
        [
            [2, 4, 3],
            [16, 4, 16],
            false,
        ],
        [
            [2, 4, 5],
            [25, 4, 16],
            true,
        ],
        [
            [],
            [],
            true,
        ],

    ])('Given %p and %p should return "%p"', (arr1, arr2, result) => {
        expect(sut(arr1, arr2)).toBe(result);
    });
});
