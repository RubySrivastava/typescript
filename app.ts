function combine (number1: number | string, number2: number | string) {
    let result;
    if (typeof number1 == 'number' && typeof number2 == 'number') {
        result = number1 + number2;
    } else {
        result = number1.toString() + number2.toString()
    }
    return result;
}

const combinedAge = combine(10,5)
console.log(combinedAge)
const combinedName = combine("Max","Life")
console.log(combinedName)
