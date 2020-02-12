const sut = require('./slidingWindow');

describe('SlidingWindow', () => {
    describe('maxSubarraySum(): Given an array of integers and a number it should return the maximum\
 sum of a subarray with the length of the number passed to the function', () => {
        it.each([

            [
                [],
                2,
                null,
            ],
            [
                [100, 200, 300, 400],
                2,
                700,
            ],
            [
                [1, 4, 2, 10, 23, 3, 1, 0, 20],
                4,
                39,
            ],
            [
                [3, -2, 7, -4, 1, -1, 4, -2, 1],
                2,
                5,
            ],
        ])('Given %p and %p it should return "%p"', (arr, num, result) => {
            expect(sut.maxSubarraySum(arr, num)).toEqual(result);
        });
    });
    describe('minSubarrayLen(): Given an array of positive numbers and a positive integer\
 it should return the minimal length of a contiguous subarray of which the sum is greater\
 than or equal to the integer passed to the function. If there isn\'t one, return 0 instead', () => {
        it.each([
            [
                [],
                2,
                0,
            ],
            [
                [1, 20, 29, 5, 10, 20, 40],
                50,
                2,
            ],
            [
                [1, 15, 5, 21],
                20,
                1,
            ],
            [
                [2, 3, 1, 2, 4, 3],
                7,
                2,
            ],
            [
                [2, 3, 1, 2, 4, 3],
                100,
                0,
            ],
        ])('Given %p and %p it should return "%p"', (arr, num, result) => {
            expect(sut.minSubarrayLen(arr, num)).toEqual(result);
        });
    });
    describe('findLongestSubstring(): Accepts a string and returns the length of the longest\
  substring with all distinct', () => {
        it.each([
            [
                '',
                0,
            ],
            [
                'rithmschool',
                7,
            ],
            [
                'thisisawesome',
                6,
            ],
            [
                'thecatinthehat',
                7,
            ],
            [
                'bbbbb',
                1,
            ],
            [
                'longestsubstring',
                8,
            ],
            [
                'thisishowwedoit',
                6,
            ],
        ])('Given %p it should return "%p"', (str, result) => {
            expect(sut.findLongestSubstring(str)).toEqual(result);
        });
    });
});
