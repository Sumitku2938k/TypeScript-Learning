// Classes & Objects: Parameter Properties
class User {
    constructor(public name: string, public age: number, public gender?: string) { // The "?" indicates that the "gender" parameter is optional

    }   
}

let u1 = new User("Alice", 30, "Female");
let u2 = new User("Bob", 25);

console.log(u1);
console.log(u2);
