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
//# sourceMappingURL=app.js.map