import { s } from "./s.js"

const expect = true

const tests = [
    {args: [undefined, undefined], expect},
    {args: [null, null], expect},
    {args: ["state-box"], expect},
    {args: ["state-box", {length: 9}], expect},
    // {
    //     value: "state-box",
    //     options: {
    //         min: 0,
    //         max: 2
    //     }
    // }
].forEach(({args, expect}, i) => {
    const testID = String(i + 1)
    console.log("test:", testID)
    console.log("args:", args)
    console.log(s(...args) == expect ? "passed" : "failed", "test:", testID, "\n")
})