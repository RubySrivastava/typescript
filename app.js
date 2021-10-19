//const person:{
//    name:string;
//    age:number;
//} = {
var person = {
    name: "Ruby",
    age: 37,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivity;
favoriteActivity = ['Sports'];
console.log(person.name);
console.log(favoriteActivity);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
