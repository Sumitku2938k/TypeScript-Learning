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
infiniteLoop(); // Calling this function will result in an infinite loop, and it will never return a value.
console.log("This line will never be reached."); // This line will never be executed because the infiniteLoop function never returns.