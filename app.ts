function combine (
    number1: number | string,
    number2: number | string,
    resultConversion:'as-number' | 'as-text') // string but used union types in literal types 
    {
    let result;
    if (typeof number1 === 'number' && typeof number2 === 'number' || resultConversion === 'as-number') {
        result = +number1 + +number2;
    } else {
        result = number1.toString() + number2.toString()
    }
    return result;
}

const combinedAge = combine(10,5,'as-number')
console.log(combinedAge)
const combinedStringAges = combine(10,5,'as-number')
console.log(combinedStringAges)
const combinedName = combine("Max","Life",'as-text')
console.log(combinedName)
