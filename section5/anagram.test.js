const sut = require('./anagram');

describe('frequencyCounter: validAnagram()', () => {
    it.each([
        [
            '',
            '',
            true,
        ],
        [
            'aaz',
            'zza',
            false,

        ],
        [
            'anagram',
            'nagaram',
            true,
        ],
        [
            'rat',
            'car',
            false,
        ],
        [
            'awesome',
            'awesom',
            false,
        ],
        [
            'amanaplanacanalpanama',
            'acanalmanplanpamana',
            false,
        ],
        [
            'qwerty',
            'qeywrt',
            true,
        ],
        [
            'texttwisttime',
            'timetwisttext',
            true,
        ],
    ])('Given %p and %p should return "%p"', (str1, str2, result) => {
        expect(sut(str1, str2)).toBe(result);
    });
});