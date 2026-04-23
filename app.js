"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classes and Objects: this.keyword
class Abcd {
    name = "Goutam";
    changeSomeStuff() {
        console.log(this.name);
        this.changeSomeMoreStuff(); //kisi bhi function ya variable jo bhi class ke andar hoga usse use/access karne ke liye this.keyword ka use karte hai
    }
    changeSomeMoreStuff() {
        console.log("Hey");
    }
}
class BottleMaker {
    name;
    constructor(name) {
        this.name = name;
        this.name = name; //this.name is variable of class and name is parameter of constructor
    }
}
let b1 = new BottleMaker("Milton"); //Milton gya hai name parameter mei
//# sourceMappingURL=app.js.map