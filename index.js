import { s } from "./s.js"

const expect = true

const tests = [
    {args: [undefined, undefined], expect},
    {args: [null, null], expect},
    
    {args: ["state-box"], expect},
    {args: ["state-box", {length: 9}], expect},
    {args: ["state-box", {min: 0, max:5}]},

    {args: [5, Number], expect}
].forEach(({args, expect}, i) => {
    const testID = String(i + 1)
    console.log("test:", testID)
    console.log("args:", args)
    console.log(s(...args) == !!expect ? "passed" : "failed", "test:", testID, "\n")
})