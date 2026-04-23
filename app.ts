//Classes and Objects: this.keyword
class Abcd {
    name = "Goutam";

    changeSomeStuff(){ //Function inside a class -> Method
        console.log(this.name);
        this.changeSomeMoreStuff(); //kisi bhi function ya variable jo bhi class ke andar hoga usse use/access karne ke liye this.keyword ka use karte hai
    }
    changeSomeMoreStuff(){
        console.log("Hey");
    }
}

class BottleMaker {
    constructor(public name: string){ 
        this.name = name; //this.name is variable of class and name is parameter of constructor
    }
}
let b1 = new BottleMaker("Milton"); //Milton gya hai name parameter mei