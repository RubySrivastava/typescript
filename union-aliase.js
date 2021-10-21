"use strict";
//type Combinable = number | string  !!Type Alias
//type Conversion = 'as-number' | 'as-text'
function combine(
//number1: Combinable, !!Type alias
number1, number2, 
//resultConversion: Conversion, !!Type alias
resultConversion) {
    var result;
    if (typeof number1 === 'number' && typeof number2 === 'number' || resultConversion === 'as-number') {
        result = +number1 + +number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    return result;
}
var combinedAge = combine(10, 5, 'as-number');
console.log(combinedAge);
var combinedStringAges = combine(10, 5, 'as-number');
console.log(combinedStringAges);
var combinedName = combine("Max", "Life", 'as-text');
console.log(combinedName);
