// Basic Types
// Primitives: number, string, boolean, null, undefined, symbol, bigint
// Arrays
// Tuples
// Enums
// Any, Unknown, Never, Void, Null, Undefined

let num: number = 42;
let str: string = "Hello, TypeScript!";

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
let a = 12;
a = 'Hello'; // Error: Type 'string' is not assignable to type 'number'.

let abcd = false; //boolean type -> true or false