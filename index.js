import { s } from "./s.js"

const expect = true
const failed = []
const tests = [
    {args: [undefined, undefined], expect},
    {args: [null, null], expect},
    
    {args: ["state-box", String], expect},
    {args: ["state-box", String, {length: 9}], expect},
    {args: ["state-box", String, {min: 0, max:5}]},

    {args: [5, Number], expect},
    {args: [5.3, Number, {integer: true}]},
    {args: [5, Number, {finite: true}], expect},
    {args: [6, Number, {even: true}], expect},
    {args: [6, Number, {min: 0, max: 10}], expect},
    
    {args: [true, Boolean], expect},
    {args: [false, Boolean], expect},

    {args: [[1, 2, 3], Array], expect}

    // {args: [], expect},
    // {args: [], expect},

].forEach(({args, expect}, testID) => {
    console.log("test:", testID)
    console.log("args:", args)

    const result = s(...args) == !!expect ? "passed" : "failed"
    console.log(result, "test:", testID, "\n")

    if(result == "failed") {
        failed.push(testID)
    }
})

console.log("failed:", failed.join(', '))