const sut = require('./sameFrequency');

describe('sameFrequency()', () => {
    it.each([
        [
            0,
            0,
            true,
        ],
        [
            182,
            281,
            true,
        ],
        [
            34,
            14,
            false,
        ],
        [
            3589578,
            5879385,
            true,
        ],
        [
            22,
            222,
            false,
        ],
    ])('Given %p and %p should return "%p"', (str1, str2, result) => {
        expect(sut(str1, str2)).toEqual(result);
    });
});
