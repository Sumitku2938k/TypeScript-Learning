"use strict";
// Classes & Objects: Optional Properties
Object.defineProperty(exports, "__esModule", { value: true });
//readonly properties can only be assigned during initialization or in the constructor. Once assigned, they cannot be changed.
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "John"; // Error: Cannot assign to 'name' because it is a read-only property.
    }
}
let u1 = new User("Alice");
console.log(u1.name); // Output: Alice
u1.changeName(); // Name change ho to jayega but error dikhayega because name is readonly.
//# sourceMappingURL=app.js.map