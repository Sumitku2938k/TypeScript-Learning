//Type Assertion

//Iska mtlb batana TS ko ki particular cheej ka type kya hai, ye aap tab karte ho jab aap TS se jayada us value ka type jaante ho

//Syntax: <type>value or value as type

let a: any = 12;
(<number>a) //You will get all methods that should be in a number type

let b: any = "Hello World";
(b as string) //You will get all methods that should be in a string type

//Type Casting 
let c = Number("12"); // Here converting the type of c which is string to a number
console.log(typeof c);

// Non-null assertion operator
let d: null | undefined | string;
d = "Hi!";

d! // ! guarantees that this value can never be null or undefined for sure