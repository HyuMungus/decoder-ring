const { substitution } = require("../src/substitution")
const expect = require("chai").expect

describe("substitution tests", () => {
    it("should return ykrrpik when given (message)", () => {
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq")
        const expected = "ykrrpik"
        expect(actual).to.equal(expected)
    })

    it("should return ysii.rs. when given (message) and properly handle symbols", () => {
        const actual = substitution("message", ".waeszrdxtfcygvuhbijnokmpl")
        const expected = "ysii.rs"
        expect(actual).to.equal(expected)
    })

    it("should return . ysii.rs when given (a message) and properly include spaces", () => {
        const actual = substitution("a message", ".waeszrdxtfcygvuhbijnokmpl")
        const expected = ". ysii.rs"
        expect(actual).to.equal(expected)
    })

    it("should return message when given (ykrrpik) while decoding", () => {
        const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false)
        const expected = "message"
        expect(actual).to.equal(expected)
    })

    it("should return message when given (ysii.rs) while decoding", () => {
        const actual = substitution("ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false)
        const expected = "message"
        expect(actual).to.equal(expected)
    })

    it("should return my message when given (yp ysii.rs) while decoding", () => {
        const actual = substitution("yp ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", false)
        const expected = "my message"
        expect(actual).to.equal(expected)
    })
})
