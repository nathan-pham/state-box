import { s } from "./s.js"

const expect = true

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

    // {args: [], expect},
    // {args: [], expect},

].forEach(({args, expect}, i) => {
    const testID = String(i + 1)
    console.log("test:", testID)
    console.log("args:", args)
    console.log(s(...args) == !!expect ? "passed" : "failed", "test:", testID, "\n")
})