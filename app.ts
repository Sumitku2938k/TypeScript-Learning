// Classes & Objects: Getters & Setters

// Getter -> Class ke aandar se ek essa method jo value nikal ke de
// Setter -> EK essa method jo hamse value le aur class ke andar ki value ko change kar de

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
    constructor(public _name: string, public age: number){ }

    get name(){
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
}
let u1 = new User("Goutam", 21);

console.log(u1.name)