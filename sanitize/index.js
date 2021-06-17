const expect = {
    "undefined": (v) => v === undefined,
    "null": (v) => v === null,

    "string": (v, {length, min, max}) => (
        typeof v === "string"
            && (v.length === length || (v.length >= min && v.length <= max))
    ),

    "number": (v, {finite, integer, even, min, max}) => (
        isNaN(v) 
            ? false
            : finite ? isFinite(v) : v
                && (even >= min && even <= max)
                && even ? v % 2 == 0 : v
                && integer ? v % 1 !== 0 : v
    ),

    "boolean": (v) => (
        typeof v === "boolean"
    ),
    
    "array": (v, {length, min, max, format}) => (
        isArray(v)
            ? v.length == length
                && (v.length >= min && v.length <= max)
                && format ? v.filter((f, i) => format[i] === f).length === 0 : v
            : false
    ),

    "function": (v) => (
        typeof v === "function"
    ),

    "object": (v) => typeof v === "object" && v !== null
}

const s = (original, format) => {
    const method = typeof format

    if(expect.hasOwnProperty(method)) {

    } else {

    }
}

// "object": (v, {format}) => {
//     for(const [key, value] of Object.entries(v)) {
//         // if(format[key] == key && expected[typeof value])
//     }
// }