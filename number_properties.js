function whatNumberIsIt(n) {
    if (isNaN(n)) {
        return "Input number is Number.NaN"
    } else {
        switch (n) {
            case 1.7976931348623157e+308:
                return "Input number is Number.MAX_VALUE"
            case 5e-324:
                return "Input number is Number.MIN_VALUE"

            case Number.NEGATIVE_INFINITY:
                return "Input number is Number.NEGATIVE_INFINITY"
            case Number.POSITIVE_INFINITY:
                return "Input number is Number.POSITIVE_INFINITY"
            default:
                return `Input number is ${Number(n)}`
        }
    }
}

console.log(whatNumberIsIt(78))