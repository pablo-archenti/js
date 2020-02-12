const sut = require('./areThereDuplicates');

describe('areThereDuplicates()', () => {
    it.each([
        [
            [],
            false,
        ],
        [
            [1, 2, 3],
            false,
        ],
        [
            [1, 2, 2],
            true,
        ],
        [
            ['a', 'b', 'c', 'a'],
            true,
        ],
    ])('Given %p arguments it should return "%p"', (args, result) => {
        expect(sut(...args)).toEqual(result);
    });
});
