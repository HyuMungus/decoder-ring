const { polybius } = require("../src/polybius")
const expect = require("chai").expect

describe("polybius tests", () => {   
    it("should return 4432423352125413 when given thinkful", () => {
        const actual = polybius("thinkful")
        const expected = "4432423352125413"
        expect(actual).to.equal(expected)
    })

    it("should return 3251131343 2543241341 when given hello world", () => {
        const actual = polybius("Hello world")
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })

    it("when decoding, 3251131343 2543241341 should return hello world", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })

    it("when decoding, 4432423352125413 should return th(i/j)nkful", () => {
        const actual = polybius("4432423352125413", false)
        const expected = "th(i/j)nkful"
        expect(actual).to.equal(expected)
    })
})
