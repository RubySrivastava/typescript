function add(num1:number, num2:number){ 
    return num1 + num2
} //number function types(return value)

function printResult(num:number) {  
    console.log('Result is'+ num)
}  //void function types(no return)

function addAndHandle(num1:number, num2:number, cb:(num:number) => void) {
    const result = num1+num2;
    cb(result)
}  // function types and callback

const result= printResult(add(10,5))

//let someValue:undefined; !! undefined type

let combineValues:(num1:number,num2:number) => number  //as function type
combineValues = add
//combineValues=printResult  !!Error
console.log(combineValues(10,6))

addAndHandle(10,6,result => {
    console.log(result);
})