//Introduction to Functions
function abcd() {
    return "Hey!";
}
function xyz() {
}
function abcdef(name, age, cb) {
    cb("hey");
}
abcdef("goutam", 20, (arg) => {
    console.log("Goutam");
    console.log(arg);
});
function details(name, age, gender) {
}
details("Goutam", 20, "Male");
details("Lagbataq", 19); //Without Gender parameter
function details1(name, age, gender = "Not to be disclosed") {
    console.log(name, age, gender);
}
details1("harsh", 20);
export {};
//# sourceMappingURL=app.js.map