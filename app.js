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
let tuple = [1, "Hello"]; // A tuple is a fixed-length array where each element can have a different type. In this case, the first element is a number and the second element is a string.
//# sourceMappingURL=app.js.map