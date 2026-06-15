//Generics

//Hame ek function banani hai jo kisi bhi type ke data ko accept kar sake aur usko return kar sake. Iske liye hum generics ka use karenge.

function logger(a: any){ //As hamne yaha argument ko any banaya hai to hum koi bhi us particular argument ki property ka use nahi kar sakte hai. Jaise ki agar humne yaha a ko string banaya hota to hum a.length ka use kar sakte the. Isliye hum generics ka use karenge taki hum kisi bhi type ke data ko accept kar sake aur usko return kar sake.
    console.log(a);
}

logger("Hello World"); //String
logger(123); //Number
logger(true); //Booleans
logger({name: "John", age: 30}); //Object

function abcd<T>(a: T){ } //Generic Function. Yaha T ek placeholder hai jo kisi bhi type ko represent kar sakta hai. Jab hum is function ko call karenge to hum T ki jagah us type ko specify karenge jo hum use karna chahte hai.

abcd<string>("Hello!");
abcd<number>(123);
abcd<boolean>(true);
abcd<object>({name: "John", age: 30});

function xyz<T>(a: T, b: string, c: number) { }

xyz<string>("Hello!", "World", 123);
xyz<number>(123, "World", 456);
xyz<boolean>(true, "World", 789);

function log<T>(val: T){
    console.log(val);
}

log<string>("Goutam Kumar");
log(123); //TypeScript can infer the type of the argument, so we don't need to specify it explicitly.123 is a number, so TypeScript infers that T is of type number.
log(true);

//Generic Interface

interface User<T> {
    name: string;
    age: number;
    key: T;
}

function userDetails(obj: User<string>){ //Yaha humne User interface ko string type ke saath use kiya hai, isliye key property ka type string hoga.
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.key);
}

userDetails({name: "Goutam Kumar", age: 30, key: "Hello!"}); //Yaha humne key property ko string value di hai kyunki humne User interface ko string type ke saath use kiya hai.

//Generic Class
class BottleMaker<T> {
    constructor(public key: T) { } //Yaha humne key property ko generic type T banaya hai, isliye key property kisi bhi type ka data accept kar sakta hai.
}

let b1 = new BottleMaker<string>("Hii!"); //Yaha humne BottleMaker class ko string type ke saath use kiya hai, isliye key property ka type string hoga.
console.log(b1);
console.log(b1.key);

//Important Generic Edge Case
function pqr<T>(a: T, b: T): T{ //Yaha humne function pqr ko generic type T banaya hai, isliye a aur b dono ka type same hona chahiye. Agar hum a ko string aur b ko number banayenge to TypeScript error dega.
    return "Hey!" as T;  //Kind of Type Assertion. Yaha humne "Hey!" ko T type ke saath specify kiya hai, isliye TypeScript error nahi dega. Lekin agar hum "Hey!" ko string type ke saath specify karenge to TypeScript error dega kyunki function ka return type T hai, na ki string. Isliye humne "Hey!" ko T type ke saath specify kiya hai taki TypeScript error na de.
}
//Hum yaha pe string return kar rahe hai, lekin function ka return type T hai, isliye TypeScript error dega. 
//BCZ "Hey!" is a string lateral not a string type. Agar hum "Hey!" ko string type ke saath specify karenge to TypeScript error nahi dega.

pqr<string>("Hello!", "World"); //Yaha humne a aur b dono ko string banaya hai, isliye TypeScript error nahi dega.

