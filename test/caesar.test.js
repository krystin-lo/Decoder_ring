// // Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe('caesar', () => {
    it('Should return false if the shift value is not present', () => {
        const actual = caesar("treasure");
        expect(actual).to.be.false;
    })

    it('Should return false if the shift value is equal to 0', () => {
        const actual = caesar('treasure', 0)
        expect(actual).to.be.false;
    })

    it('Should return false if the shift value is less than -25', () => {
        const actual = caesar('treasure', -26);
        expect(actual).to.be.false;
    })

    it('Should return false if the shift value is  greater than 25', () => {
        const actual = caesar('treasure', 99);
        expect(actual).to.be.false;
    })


    it('Should shift left when wrapping around the alphabet', () => {
        const expected = 'abc';
        const actual = caesar("xyz", 3);
        expect(actual).to.equal(expected);
    })

    it('Should shift right when wrapping around the alphabet', () => {
        const expected = 'abc';
        const actual = caesar("xyz", 3);
        expect(actual).to.equal(expected);
    })
    it('Should ignore all capital letters', () => {
        let test1 = caesar("thinkful", 12);
        let test2 = caesar("ThInKfUL", 12);
        expect(test1).to.equal(test2)
    })
       
    
})






