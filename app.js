//Function Overloading
function abcd(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("Hey!");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("Something is wrong");
}
abcd("Hello"); // Hey!
console.log(abcd("Hello", 123)); // 123
export {};
//# sourceMappingURL=app.js.map