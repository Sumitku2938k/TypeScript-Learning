// Basic Types
// Primitives: number, string, boolean, null, undefined, symbol, bigint
// Arrays
// Tuples
// Enums
// Any, Unknown, Never, Void, Null, Undefined

// let num: number = 42;
// let str: string = "Hello, TypeScript!";

// Primitives and Reference Types
// let a: number[] = [1,2,3,4,5];
// let b: number[] = a;
// b.pop();
// console.log(a);
// b ke aakhiri se no hata do i.e. b = [1,2,3,4]
// so a ki value ye honi chahiye thi [1,2,3,4,5] but wo bhi change ho jayegi i.e. a = [1,2,3,4] 
// because a and b dono same reference point kar rahe hai memory me. isliye jab b me change karenge to a me bhi change hoga. isliye reference types ko samajhna bahut jaruri hai. 

// Reference Types -> {}, [], () etc.


//Primitive Types
// let a = 12;
// a = 'Hello'; // Error: Type 'string' is not assignable to type 'number'.

// let abcd = false; //boolean type -> true or false

// Arrays
// let arr = [1, 2, 3, 4, 5, "Goutam"]; // TypeScript infers the type as (number | string)[]
// let arr2 = [1, 2, 3, 4, 5, {name: "Goutam"}, {name: 12}]; // TypeScript infers the type as (number | {name: string} | {name: number}[]

// let arr3: number[] = [1, 2, 3, 4, 5, "Goutam"]; // Explicitly specifying the type as number[] so will give an error because "Goutam" is a string and cannot be assigned to a number type array.
// let arr4: (number | string)[] = [1, 2, 3, 4, 5, "Goutam"]; // Explicitly specifying the type as (number | string)[]

// Tuples
// let tuple: [number, string] = [1, "Hello"]; // A tuple is a fixed-length array where each element can have a different type. In this case, the first element is a number and the second element is a string.

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