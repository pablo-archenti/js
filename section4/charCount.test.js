const sut = require('./charCount');

describe('charCount()', () => {
    it('Invalid argument', () => {
        expect(() => {
            sut(1);
        }).toThrow();
    });

    it('Valid argument', () => {
        const result = sut('Ho*la a!$');
        const expected = {
            a: 2,
            h: 1,
            l: 1,
            o: 1,
        };
        expect(result).toStrictEqual(expected);
    });
});
