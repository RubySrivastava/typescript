"use strict";
function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 10;
var number2 = 7.5;
var printResult = true;
var resultPhrase = 'Result is:';
var result = add(number1, number2, printResult, resultPhrase);
