// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe('polybius() test continuation', () => {
    it('Translations for "(i/j)" should equal 42 when encoding.', () => {
        const input = "ij"
        const expected = "4242";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });

    it('Forty-two should translate into "(i/j)" when decoding', () => {
        const input = "42";
        const expected = '(i/j)';
        const actual = polybius(input, encode = false);
        expect(actual).to.eql(expected);
    });

    it('Capital letters should be ignored', () => {
        const input = "Steam";
        const expected = "3444511123";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });

    it('Spacing should be maintained along with special characters', () => {
        const input = "Steam Steam";
        const expected = "3444511123 3444511123";
        const actual = polybius(input, encode = true);
        expect(actual).to.eql(expected);
    });
})