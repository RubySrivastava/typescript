function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log('Result is' + num);
}
var result = printResult(add(10, 5));
//let someValue:undefined; !! undefined type
var combineValues;
combineValues = add;
//combineValues=printResult  !!Error
console.log(combineValues(10, 6));
