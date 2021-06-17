import { s } from "./s.js"

const tests = [
    {
        value: undefined,
        options: undefined
    },
    {
        value: null,
        options: null
    },
    {
        value: "state-box"
    },
    {
        value: "state-box",
        length: 9
    }
].forEach(({value, options}, i) => {
    const testID = String(i + 1)
    console.log("test:", testID)
    console.log("value:", value, "options:", options)
    console.log(s(value, options) ? "passed" : "failed", "test:", testID, "\n")
})