// Basic Types
// Primitives: number, string, boolean, null, undefined, symbol, bigint
// Arrays
// Tuples
// Enums
// Any, Unknown, Never, Void, Null, Undefined

let num: number = 42;
let str: string = "Hello, TypeScript!";

// Primitives and Reference Types
let a: number[] = [1,2,3,4,5];
let b: number[] = a;
b.pop();
console.log(a);
// b ke aakhiri se no hata do i.e. b = [1,2,3,4]
// so a ki value ye honi chahiye thi [1,2,3,4,5] but wo bhi change ho jayegi i.e. a = [1,2,3,4] 
// because a and b dono same reference point kar rahe hai memory me. isliye jab b me change karenge to a me bhi change hoga. isliye reference types ko samajhna bahut jaruri hai. 

// Reference Types -> {}, [], () etc.


//Primitive Types
let a = 12;
a = 'Hello'; // Error: Type 'string' is not assignable to type 'number'.

// let abcd = false; //boolean type -> true or false

// Arrays
let arr = [1, 2, 3, 4, 5, "Goutam"]; // TypeScript infers the type as (number | string)[]
let arr2 = [1, 2, 3, 4, 5, {name: "Goutam"}, {name: 12}]; // TypeScript infers the type as (number | {name: string} | {name: number}[]

let arr3: number[] = [1, 2, 3, 4, 5, "Goutam"]; // Explicitly specifying the type as number[] so will give an error because "Goutam" is a string and cannot be assigned to a number type array.
let arr4: (number | string)[] = [1, 2, 3, 4, 5, "Goutam"]; // Explicitly specifying the type as (number | string)[]

// Tuples
let tuple: [number, string] = [1, "Hello"]; // A tuple is a fixed-length array where each element can have a different type. In this case, the first element is a number and the second element is a string.

// Enums - enumirations
enum UserRoles { // Enums are a way to define a set of named constants. They can be numeric or string-based. In this case, we are defining a string-based enum for user roles.
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
    SuperAdmin = "SUPER_ADMIN"
}

UserRoles.Admin; // "ADMIN"
UserRoles.User; // "USER"

enum StatusCodes { // Numeric enum where the values are auto-incremented starting from 0. So, StatusCodes.Success will be 0, StatusCodes.Error will be 1, and StatusCodes.Pending will be 2.
    Success = 200,
    Error = 400,
    Pending = 500
}

//Any -> kam try karna chahiye, kyunki isse type safety khatam ho jati hai. Any type ka use tab karna chahiye jab aapko pata nahi hai ki variable kis type ka hoga, lekin aapko us variable ke saath kuch operations perform karne hain.
let anyVar: any; // The 'any' type allows you to assign any value to the variable, and it can be reassigned to a different type without any type checking. This can lead to potential runtime errors if not used carefully.
anyVar = 42; // No error, anyVar is now a number
anyVar = "Now I'm a string"; // No error, but can lead to issues later on if you try to perform operations that are not valid for the new type.

//Unknown -> unknown type is a safer alternative to any. It represents any value but requires type checking before performing operations on it. This helps maintain type safety while still allowing flexibility.
let unknownVar: unknown;
unknownVar = 42; // No error, unknownVar is now a number
unknownVar = "Now I'm a string"; // No error, but you cannot perform operations on unknownVar without first checking its type.

if (typeof unknownVar === "string") { //Unknown type ke saath operations perform karne se pehle hume uski type check karni hoti hai. Is case me hum check kar rahe hai ki unknownVar ki type string hai ya nahi. Agar hai to hum uske upar string operations perform kar sakte hai.
    console.log(unknownVar.toUpperCase()); // Now we can safely perform string operations on unknownVar after checking its type.
}

//Void -> void type is used to indicate that a function does not return any value. It is often used for functions that perform side effects, such as logging or modifying state, without returning a result.
function logMessage(): void {
    console.log("Hello, TypeScript!"); // This function logs a message to the console and does not return any value, hence the return type is void.
}

//Null -> null type represents the intentional absence of any object value. It is often used to indicate that a variable should not have a value or to reset a variable to an empty state.
let nullableVar: string | null;
nullableVar = "Hello"; // No error, nullableVar is now a string
nullableVar = null; // No error, nullableVar is now null
nullableVar = 12; // Error: Type 'number' is not assignable to type 'string | null'. This is because nullableVar can only be a string or null, and assigning a number violates this constraint.

//Undefined -> undefined type represents the intentional absence of any value. It is often used to indicate that a variable has not been initialized or to reset a variable to an uninitialized state.
let undefinedVar: string | undefined; 
undefinedVar = "Hello"; // No error, undefinedVar is now a string
undefinedVar = undefined; // No error, undefinedVar is now undefined
undefinedVar = 12; // Error: Type 'number' is not assignable to type 'string | undefined'. This is because undefinedVar can only be a string or undefined, and assigning a number violates this constraint.

//Never -> never type represents values that never occur. It is often used to indicate that a function will never return or that a variable will never have a value. For example, a function that always throws an error or an infinite loop can be typed with never to indicate that it will never successfully complete.
function throwError(message: string): never {
    throw new Error(message); // This function always throws an error and never returns a value, hence the return type is never.
}   

function infiniteLoop(): never {
    while (true) {
        // This function runs an infinite loop and never returns a value, hence the return type is never.
    }
}   
// infiniteLoop(); // Calling this function will result in an infinite loop, and it will never return a value.
console.log("This line will never be reached."); // This line will never be executed because the infiniteLoop function never returns.

// Intro to Type Inference & Type Annotations

// Inference -> TypeScript can automatically infer the type of a variable based on its initial value. For example, if you declare a variable and assign it a number, TypeScript will infer that the variable is of type number.
let c = 42; // TypeScript infers the type of 'c' as number based on the assigned value.

// Annotations -> Type annotations allow you to explicitly specify the type of a variable, function parameter, or return value. This can be useful for providing additional information to the compiler and for improving code readability.
let d: string = "Hello, TypeScript!"; // Here we are explicitly annotating the type of 'd' as string.
let e: number | boolean | string;
e = 42; // No error, 'e' can be a number
e = true; // No error, 'e' can be a boolean
e = "Hello"; // No error, 'e' can be a string

// Type Annotations
let f: boolean;
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Introduction to Interfaces and Type Aliases
// Interface ka kam hota hai object ka structure define karna, yani ki object ke properties aur unke types ko specify karna. 
// Type alias bhi similar kaam karta hai, lekin wo kisi bhi type ko represent kar sakta hai, na ki sirf object structure ko. i.e. Khud ke type create karna.

interface User { //basically function mei object pass karne kke liye us object ke structure ko define karna, yani ki us object me kaun kaun se properties honi chahiye aur unka type kya hona chahiye, iske liye hum interface ka use karte hai.
    name: string;
    age: number;
    email: string;
    gender?: string; // Optional property, yani ki user object me gender property ho bhi sakti hai aur nahi bhi, lekin agar ho to uska type string hona chahiye.
}
//user object mei shakal uski User model ki tarah honi chahiye
function getUserInfo(user: User): string { // user parameter ka type User interface ke according hona chahiye, yani ki user object me name, age, aur email properties honi chahiye aur unka type bhi User interface ke according hona chahiye.
    return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`; 
}   
getUserInfo({name: "Goutam", age: 25, email: "goutam@gmail.com"}); // Name: Goutam, Age: 25, Email: goutam@gmail.com

//Extended Interface
interface Admin extends User { // Admin interface User interface ko extend kar raha hai, yani ki Admin interface me User interface ke saare properties honge plus kuch additional properties bhi ho sakti hai.
    isAdmin: boolean;
}

function getAdminInfo(obj: Admin): string { // obj parameter ka type Admin interface ke according hona chahiye, yani ki admin object me User interface ke saare properties honi chahiye plus isAdmin property bhi honi chahiye aur unka type bhi Admin interface ke according hona chahiye.
    return `Name: ${obj.name}, Age: ${obj.age}, Email: ${obj.email}, Is Admin: ${obj.isAdmin}`;
}   
getAdminInfo({name: "Goutam", age: 25, email: "goutam@gmail.com", isAdmin: true}); // Name: Goutam, Age: 25, Email: goutam@gmail.com, Is Admin: true

interface Abcd {
    email: string;
}
interface Abcd {
    name: string;
}
//Two interfaces with the same name will be merged together by TypeScript. This means that the Abcd interface will have both the email and name properties, and any object of type Abcd must have both of these properties with their respective types.
function getAbcdInfo(obj: Abcd): string { // obj parameter ka type Abcd interface ke according hona chahiye
    return `Name: ${obj.name}, Email: ${obj.email}`;
}   
getAbcdInfo({name: "Goutam", email: "goutam@gmail.com"});

//Fundamentals of Type Alias
type sankhya = number; //Khud ka type banana
let g: sankhya;

type value = string | number | null;
let h: value;

type arg = string | null;
function abcd(obj: arg){

}

abcd("Hello"); // No error, 'obj' can be a string

//Intersection Types
let i: string | number; // Union type, yani ki 'i' variable me string ya number dono me se koi bhi type ka value assign ho sakta hai.
let j: string & number; // Intersection type, yani ki 'j' variable me aise type ka value assign ho sakta hai jo string bhi ho aur number bhi ho, lekin aise koi type exist nahi karta isliye 'j' variable me koi value assign nahi ho sakti.

type User1 = {
    name: string;
    email: string;
}
type Admin1 = User1 & {
    getDetails(user1: string): void;
}
function abcd1(a: Admin1): void {
    console.log(`Name: ${a.name}, Email: ${a.email}`);
    a.getDetails(a.name);
}

type abcd = number; //1st difference in intersection and type alias is that type alias cannot be re-declared with the same name, while interfaces can be merged together if they have the same name. In this case, we are trying to declare a type alias named 'abcd' again, which will result in an error because it creates a duplicate identifier. Each type alias must have a unique name to avoid conflicts in the type system.    
type abcd = string; // Error: Duplicate identifier 'abcd'. This is because we cannot declare two type aliases with the same name, as it creates a conflict in the type system. Each type alias must have a unique name to avoid ambiguity and ensure that the correct type is used when referenced.

//2nd difference is that type ka kam hai type create karna like number, string, boolean, etc. jabki interface ka kam hai object ke structure ko define karna, yani ki object ke properties aur unke types ko specify karna. 
