const { caesar } = require("../src/caesar")
const expect = require("chai").expect

describe("caesar tests", () => {
    it("should return phvvdjh when given (message) with a shift of 3", () => {
        const actual = caesar("message", 3)
        const expected = "phvvdjh"
        expect(actual).to.equal(expected)
    })

    it("should return d phvvdjh. when given (a message) with a shift of 3", () => {
        const actual = caesar("a message.", 3)
        const expected = "d phvvdjh."
        expect(actual).to.equal(expected)
    })

    it("should return cheud pdjdclqh when given (zebra magazine) and properly handle letters at end of alphabet with a shift of 3", () => {
        const actual = caesar("zebra magazine", 3)
        const expected = "cheud pdjdclqh"
        expect(actual).to.equal(expected)
    })

    it("allow for negative shifts", () => {
        const actual = caesar("zebra magazine", -3)
        const expected = "wbyox jxdxwfkb"
        expect(actual).to.equal(expected)
    })

    it("should return message when given (phvvdjh) with a shift of 3 while decoding", () => {
        const actual = caesar("phvvdjh", 3, false)
        const expected = "message"
        expect(actual).to.equal(expected)
    })

    it("should return a message when given (d phvvdjh.) with a shift of 3 while decoding", () => {
        const actual = caesar("d phvvdjh.", 3, false)
        const expected = "a message."
        expect(actual).to.equal(expected)
    })

    it("should return cheud pdjdclqh when given (zebra magazine) and properly handle letters at end of alphabet with a shift of 3 while decoding", () => {
        const actual = caesar("cheud pdjdclqh", 3, false)
        const expected = "zebra magazine"
        expect(actual).to.equal(expected)
    })

})