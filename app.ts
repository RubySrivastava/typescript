//const person:{
//    name:string;
//    age:number;
//} = {
const person = {
    name:"Ruby",
    age: 37,
    hobbies: ['Sports','Cooking']
}
let favoriteActivity:string[]
favoriteActivity = ['Sports']
console.log(person.name)
console.log(favoriteActivity)
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
//    console.log(hobby.map()) !!Error!!
}