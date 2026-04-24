// Classes & Objects: Public & Private Access Modifier
class BottleMaker {
    constructor(public name: string, private material: string){ 

    }
    changing(){
        this.material = "Plastic";
    }

}
let b1 = new BottleMaker("Milton", "Metal");
b1.name = "hululu"; //public property ki chijo ko class ke andar ya bahar kahi bhi change kar sakte hai  
// b1.material = "Hul"; //private property ko change kar kar to sakte hai but ye error phir  bhi dikhayega
b1.changing();

//Private ka variable sirf class ke andar hi accessible hai iske bahar accessible nahi hai

// class LunchMaker {
//     constructor(public name: string){ }
// }

// class MetalLunchMaker extends LunchMaker {
//     constructor(name: string){
//         super(name);
//     }
//     getValue(){
//         console.log(this.name);
//     }
// }

// let l1 = new MetalLunchMaker("Milton");
// l1.getValue();

class LunchMaker {
    private halua: string = "halua";
    constructor(public name: string){ }
}

class MetalLunchMaker extends LunchMaker {
    constructor(name: string){ 
        super(name);
    }
    getValue(){
        console.log(this.name, this.halua); //halua is private so using it will show an error but will work
    }
}

let l1 = new MetalLunchMaker("Milton");
l1.getValue();