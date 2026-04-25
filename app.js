"use strict";
// Classes & Objects: Getters & Setters
Object.defineProperty(exports, "__esModule", { value: true });
//Getter -> Class ke aandar se ek essa method jo value nikal ke de
//Setter -> EK essa method jo hamse value le aur class ke andar ki value ko change kar de
// class User {
//     constructor(public name: string, public age: number){ }
//     getName(){
//         return this.name;
//     }
//     setName(value: string){
//         this.name = value;
//     }
// }
class User {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let u1 = new User("Goutam", 21);
console.log(u1.name);
//# sourceMappingURL=app.js.map