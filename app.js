"use strict";
// Basic Types
// Primitives: number, string, boolean, null, undefined, symbol, bigint
// Arrays
// Tuples
// Enums
// Any, Unknown, Never, Void, Null, Undefined
Object.defineProperty(exports, "__esModule", { value: true });
let num = 42;
let str = "Hello, TypeScript!";
// Primitives and Reference Types
let a = [1, 2, 3, 4, 5];
let b = a;
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
let arr2 = [1, 2, 3, 4, 5, { name: "Goutam" }, { name: 12 }]; // TypeScript infers the type as (number | {name: string} | {name: number}[]
let arr3 = [1, 2, 3, 4, 5, "Goutam"]; // Explicitly specifying the type as number[] so will give an error because "Goutam" is a string and cannot be assigned to a number type array.
let arr4 = [1, 2, 3, 4, 5, "Goutam"]; // Explicitly specifying the type as (number | string)[]
// Tuples
let tuple = [1, "Hello"]; // A tuple is a fixed-length array where each element can have a different type. In this case, the first element is a number and the second element is a string.
// Enums - enumirations
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "ADMIN";
    UserRoles["User"] = "USER";
    UserRoles["Guest"] = "GUEST";
    UserRoles["SuperAdmin"] = "SUPER_ADMIN";
})(UserRoles || (UserRoles = {}));
UserRoles.Admin; // "ADMIN"
UserRoles.User; // "USER"
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Error"] = 400] = "Error";
    StatusCodes[StatusCodes["Pending"] = 500] = "Pending";
})(StatusCodes || (StatusCodes = {}));
//Any -> kam try karna chahiye, kyunki isse type safety khatam ho jati hai. Any type ka use tab karna chahiye jab aapko pata nahi hai ki variable kis type ka hoga, lekin aapko us variable ke saath kuch operations perform karne hain.
let anyVar; // The 'any' type allows you to assign any value to the variable, and it can be reassigned to a different type without any type checking. This can lead to potential runtime errors if not used carefully.
anyVar = 42; // No error, anyVar is now a number
anyVar = "Now I'm a string"; // No error, but can lead to issues later on if you try to perform operations that are not valid for the new type.
//Unknown -> unknown type is a safer alternative to any. It represents any value but requires type checking before performing operations on it. This helps maintain type safety while still allowing flexibility.
let unknownVar;
unknownVar = 42; // No error, unknownVar is now a number
unknownVar = "Now I'm a string"; // No error, but you cannot perform operations on unknownVar without first checking its type.
if (typeof unknownVar === "string") { //Unknown type ke saath operations perform karne se pehle hume uski type check karni hoti hai. Is case me hum check kar rahe hai ki unknownVar ki type string hai ya nahi. Agar hai to hum uske upar string operations perform kar sakte hai.
    console.log(unknownVar.toUpperCase()); // Now we can safely perform string operations on unknownVar after checking its type.
}
//Void -> void type is used to indicate that a function does not return any value. It is often used for functions that perform side effects, such as logging or modifying state, without returning a result.
function logMessage() {
    console.log("Hello, TypeScript!"); // This function logs a message to the console and does not return any value, hence the return type is void.
}
//Null -> null type represents the intentional absence of any object value. It is often used to indicate that a variable should not have a value or to reset a variable to an empty state.
let nullableVar;
nullableVar = "Hello"; // No error, nullableVar is now a string
nullableVar = null; // No error, nullableVar is now null
nullableVar = 12; // Error: Type 'number' is not assignable to type 'string | null'. This is because nullableVar can only be a string or null, and assigning a number violates this constraint.
//Undefined -> undefined type represents the intentional absence of any value. It is often used to indicate that a variable has not been initialized or to reset a variable to an uninitialized state.
let undefinedVar;
undefinedVar = "Hello"; // No error, undefinedVar is now a string
undefinedVar = undefined; // No error, undefinedVar is now undefined
undefinedVar = 12; // Error: Type 'number' is not assignable to type 'string | undefined'. This is because undefinedVar can only be a string or undefined, and assigning a number violates this constraint.
//Never -> never type represents values that never occur. It is often used to indicate that a function will never return or that a variable will never have a value. For example, a function that always throws an error or an infinite loop can be typed with never to indicate that it will never successfully complete.
function throwError(message) {
    throw new Error(message); // This function always throws an error and never returns a value, hence the return type is never.
}
function infiniteLoop() {
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
let d = "Hello, TypeScript!"; // Here we are explicitly annotating the type of 'd' as string.
let e;
e = 42; // No error, 'e' can be a number
e = true; // No error, 'e' can be a boolean
e = "Hello"; // No error, 'e' can be a string
// Type Annotations
let f;
function isEven(num) {
    return num % 2 === 0;
}
//user object mei shakal uski User model ki tarah honi chahiye
function getUserInfo(user) {
    return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}
getUserInfo({ name: "Goutam", age: 25, email: "goutam@gmail.com" }); // Name: Goutam, Age: 25, Email: goutam@gmail.com
function getAdminInfo(obj) {
    return `Name: ${obj.name}, Age: ${obj.age}, Email: ${obj.email}, Is Admin: ${obj.isAdmin}`;
}
getAdminInfo({ name: "Goutam", age: 25, email: "goutam@gmail.com", isAdmin: true }); // Name: Goutam, Age: 25, Email: goutam@gmail.com, Is Admin: true
//Two interfaces with the same name will be merged together by TypeScript. This means that the Abcd interface will have both the email and name properties, and any object of type Abcd must have both of these properties with their respective types.
function getAbcdInfo(obj) {
    return `Name: ${obj.name}, Email: ${obj.email}`;
}
getAbcdInfo({ name: "Goutam", email: "goutam@gmail.com" });
let g;
let h;
function abcd(obj) {
}
abcd("Hello"); // No error, 'obj' can be a string
//Intersection Types
let i; // Union type, yani ki 'i' variable me string ya number dono me se koi bhi type ka value assign ho sakta hai.
let j; // Intersection type, yani ki 'j' variable me aise type ka value assign ho sakta hai jo string bhi ho aur number bhi ho, lekin aise koi type exist nahi karta isliye 'j' variable me koi value assign nahi ho sakti.
function abcd1(a) {
    console.log(`Name: ${a.name}, Email: ${a.email}`);
    a.getDetails(a.name);
}
//2nd difference is that type ka kam hai type create karna like number, string, boolean, etc. jabki interface ka kam hai object ke structure ko define karna, yani ki object ke properties aur unke types ko specify karna. 
//# sourceMappingURL=app.js.map