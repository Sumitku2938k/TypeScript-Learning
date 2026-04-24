"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// Classes & Objects: Parameter Properties
class User {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let u1 = new User("Alice", 30, "Female");
let u2 = new User("Bob", 25);
console.log(u1);
console.log(u2);
//# sourceMappingURL=app.js.map