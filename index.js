import { s } from "./s.js"

const tests = [
    {
        value: undefined,
        options: undefined
    }
].forEach((test, i) => {
    console.log(
        s(test.value, test.options) ? "passed" : "failed",
        "test:",
        i
    )
})