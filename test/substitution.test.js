// Write your tests here!

const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe('substitution', () => {
    it('The alphabet parameter must be a string of exactly 26 characters', () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.equal(false);
    });

    it('Should maintain spacing throughout encoding and decoding', () => {
        const actual = substitution("See you later", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "dmm elp wxjmh";
       expect(actual).to.equal(expected);
    });

    it('Should ignore capital letters', () => {
       const testA = substitution("ThiNkFul", "xoyqmcgrukswaflnthdjpzibev");
       const testB = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
       expect(testA).to.equal(testB);
    });

    it('The alphabet should not contain duplicate letters ', () => {
        const actual =  substitution("thinkful", "abcabcabcabcabcabcabcabyyz");
        expect(actual).to.be.false;
    });


    it('Should encode this text correctly', () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev", true)
        expect(actual).to.equal(expected);
    });
  })
