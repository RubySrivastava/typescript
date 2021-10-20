//const person:{
//    name:string;
//    age:number;
//} = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name:"Ruby",
//     age: 37,
//     hobbies: ['Sports','Cooking'],
//     role: [2,'Author']
// }
// const ADMIN = 0; !!JS!!
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Ruby",
    age: 37,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
//person.role.push('admin')
//person.role[1]=10 !!Error!!
var favoriteActivity;
favoriteActivity = ['Sports'];
console.log(person.name);
console.log(favoriteActivity);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //    console.log(hobby.map()) !!Error!!
}
if (person.role === Role.ADMIN) {
    console.log("IS ADMIN");
}
