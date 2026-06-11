//Function Overloading

//Function Overloading ka mtlb hai ki function ka name same rakh sakte ho 

// TS fnc signature
function abcd(a: string): void;
function abcd(a: string, b:number): number;

function abcd(a: any, b?: any) {
    if (typeof a === "string" && b === undefined) {
        console.log("Hey!");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else throw new Error("Something is wrong");
}

abcd("Hello"); // Hey!
console.log(abcd("Hello", 123)); // 123