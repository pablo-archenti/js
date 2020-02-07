const sut = require('./multiplePointers');

describe('MultiplePointers: sumZero()', () => {
    it.each([
        [
            [-2, 2],
            [-2, 2],
        ],
        [
            [-3, -1, 0, 1, 2],
            [-1, 1],

        ],
        [
            [],
            undefined,
        ],

    ])('Given %p should return "%p"', (arr, result) => {
        expect(sut(arr)).toEqual(result);
    });
});
