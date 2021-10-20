function combine(number1, number2) {
    var result;
    if (typeof number1 == 'number' && typeof number2 == 'number') {
        result = number1 + number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    return result;
}
var combinedAge = combine(10, 5);
console.log(combinedAge);
var combinedName = combine("Max", "Life");
console.log(combinedName);
