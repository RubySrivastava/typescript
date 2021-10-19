//const person:{
//    name:string;
//    age:number;
//} = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name:"Ruby",
    age: 37,
    hobbies: ['Sports','Cooking'],
    role: [2,'Author']
}

//person.role.push('admin')
//person.role[1]=10 !!Error!!

let favoriteActivity:string[]
favoriteActivity = ['Sports']
console.log(person.name)
console.log(favoriteActivity)
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
//    console.log(hobby.map()) !!Error!!
}