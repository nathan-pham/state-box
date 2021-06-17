const expect = {
    "undefined": (v) => v == undefined,
    "null": (v) => v == null && v !== undefined,

    "string": (v, {length, min=0, max=Infinity}) => (
        typeof v == "string"
            && (length ? v.length == length : v)
            && (v.length >= min && v.length <= max)
    ),

    "number": (v, {finite, integer, even, min=0, max=Infinity}) => (
        isNaN(v) 
            ? false
            : (finite ? isFinite(v) : v)
                && (integer ? parseInt(v) == v : v)
                && (even ? v % 2 == 0 : v)
                && (v >= min && v <= max)
    ),

    "boolean": (v) => (
        typeof v == "boolean"
    ),
    
    "array": (v, {length, min=0, max=Infinity, format}) => (
        Array.isArray(v)
            ? (length ? v.length == length : v)
                && (v.length >= min && v.length <= max)
                && (format ? v.filter((f, i) => format[i] == f).length == 0 : v)
            : false
    ),

    "function": (v) => (
        typeof v == "function"
    ),

    "object": (v, options) => {
        const passed = typeof v == "object" && v !== null

        if(passed) {
            for(const [key, value] of Object.entries(v)) {
                if(options.hasOwnProperty(key)) {
                    return s(value, options[key])
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }
}

const type = (check) => {
    const str = String(check.prototype ? check.prototype.constructor : check.constructor).toLowerCase()
    const cname = str.match(/function\s(\w*)/)[1]
    const aliases = ['', 'anonymous']

    return aliases.includes(cname) ? "function" : cname
}

export const s = (v, template, options={}) => {
    const method = template 
        ? type(template) 
        : typeof template == "object" && template == null
            ? "null"
            : typeof template


    console.log("method:", method)

    if(expect.hasOwnProperty(method)) {
        return expect[method](v, options || template)
    } else {
        console.log("unknown method")
        return false 
    }
}