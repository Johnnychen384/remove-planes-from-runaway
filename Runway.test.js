const { run } = require("jest")
const Runway = require("./Runway")


describe("Testing Runway Class", () => {

    // tests for the max number of planes allowed
    test("Max number of planes on runway", () => {
        expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100)
    })

    // checks if Runway can initialize a new instance
    test("Create new instance of Runway", () => {
        const runway = new Runway("gg")
        expect(runway.name).toBe("gg")
    })

    // test add method
    test("Add plane to runway", () => {
        const runway = new Runway("gg")
        runway.add("plane1")
        expect(Runway.planes.length).toBe(1)
    })

    // test if error will be recieved if runway at max cap
    test("Maxed runway error", () => {
        const runway = new Runway("gg")
        

        expect(() => {
            for(let i = 0; i < 101; i++){
                runway.add("plane"+ i)
            }
        }).toThrowError("runways at full capacity!")
    })

    // test to check if remove method works
    test("Remove plane from runway", () => {
        const runway1 = new Runway("gg")
        runway1.remove()
        expect(Runway.planes.length).toBe(100)
    })

    // test if error will be recieve if there are no planes on runway
    test("Check if error message will be recieved when no planes on runway", () => {
        Runway.planes = []
        const runway = new Runway("gg")
        expect(() => runway.remove()).toThrowError("no planes on runway.")
    })

})