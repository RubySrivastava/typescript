function add(num1:number, num2:number){ //number functio types(return value)
    return num1 + num2
}
function printResult(num:number) {  //void function types(no return)
    console.log('Result is'+ num)
}
const result= printResult(add(10,5))

//let someValue:undefined; !! undefined type

let combineValues:(num1:number,num2:number) => number  //as function type
combineValues = add
//combineValues=printResult  !!Error
console.log(combineValues(10,6))