//Introduction to Functions

function abcd(): string { // O/P -> String Type 
    return "Hey!";
}

function xyz(): void {

}

function abcdef(name: string, age: number, cb: (arg: string) => void){ // Here cb is Call Back Function and is returning nothing when function call
    cb("hey");
}

abcdef("goutam", 20, (arg: string) => {
    console.log("Goutam");
    console.log(arg);
})

function details(name: string, age: number, gender?: string){ //Gender becomes optional parameter due to ?

}

details("Goutam", 20, "Male");
details("Lagbataq", 19); //Without Gender parameter

function details1(name: string, age: number, gender: string = "Not to be disclosed"){ //Gender becomes default parameter 
    console.log(name, age, gender);
}

details1("harsh", 20);
