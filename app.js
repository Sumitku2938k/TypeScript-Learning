//Generics
//Hame ek function banani hai jo kisi bhi type ke data ko accept kar sake aur usko return kar sake. Iske liye hum generics ka use karenge.
function logger(a) {
    console.log(a);
}
logger("Hello World"); //String
logger(123); //Number
logger(true); //Booleans
logger({ name: "John", age: 30 }); //Object
function abcd(a) { } //Generic Function. Yaha T ek placeholder hai jo kisi bhi type ko represent kar sakta hai. Jab hum is function ko call karenge to hum T ki jagah us type ko specify karenge jo hum use karna chahte hai.
abcd("Hello!");
abcd(123);
abcd(true);
abcd({ name: "John", age: 30 });
function xyz(a, b, c) { }
xyz("Hello!", "World", 123);
xyz(123, "World", 456);
xyz(true, "World", 789);
function log(val) {
    console.log(val);
}
log("Goutam Kumar");
log(123); //TypeScript can infer the type of the argument, so we don't need to specify it explicitly.123 is a number, so TypeScript infers that T is of type number.
log(true);
function userDetails(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.key);
}
userDetails({ name: "Goutam Kumar", age: 30, key: "Hello!" }); //Yaha humne key property ko string value di hai kyunki humne User interface ko string type ke saath use kiya hai.
//Generic Class
class BottleMaker {
    constructor(key) {
        this.key = key;
    } //Yaha humne key property ko generic type T banaya hai, isliye key property kisi bhi type ka data accept kar sakta hai.
}
let b1 = new BottleMaker("Hii!"); //Yaha humne BottleMaker class ko string type ke saath use kiya hai, isliye key property ka type string hoga.
console.log(b1);
console.log(b1.key);
//Important Generic Edge Case
function pqr(a, b) {
    return "Hey!"; //Kind of Type Assertion. Yaha humne "Hey!" ko T type ke saath specify kiya hai, isliye TypeScript error nahi dega. Lekin agar hum "Hey!" ko string type ke saath specify karenge to TypeScript error dega kyunki function ka return type T hai, na ki string. Isliye humne "Hey!" ko T type ke saath specify kiya hai taki TypeScript error na de.
}
//Hum yaha pe string return kar rahe hai, lekin function ka return type T hai, isliye TypeScript error dega. 
//BCZ "Hey!" is a string lateral not a string type. Agar hum "Hey!" ko string type ke saath specify karenge to TypeScript error nahi dega.
pqr("Hello!", "World"); //Yaha humne a aur b dono ko string banaya hai, isliye TypeScript error nahi dega.
export {};
//# sourceMappingURL=app.js.map