function add(num1, num2) {
    return num1 + num2;
} //number function types(return value)
function printResult(num) {
    console.log('Result is' + num);
} //void function types(no return)
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
} // function types and callback
var result = printResult(add(10, 5));
//let someValue:undefined; !! undefined type
var combineValues; //as function type
combineValues = add;
//combineValues=printResult  !!Error
console.log(combineValues(10, 6));
addAndHandle(10, 6, function (result) {
    console.log(result);
});
