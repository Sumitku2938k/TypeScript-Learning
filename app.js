//Type Guards -> Type Narrowing
function abcd(arg) {
    if (typeof arg === "number") {
        //Will show all the methods for number data type
        return "number";
    }
    else if (typeof arg === "string") {
        //Will show all the methods for string data type
        return "string";
    }
    else {
        throw new Error("Invalid argument type");
    }
}
console.log(abcd(12));
console.log(abcd("Hi!"));
//abcd(true); -> will show an error
class TvKaRemote {
    switch_Tv_Off() {
        console.log("Switching off TV");
    }
}
class CarKaRemote {
    switch_Car_Off() {
        console.log("Switching off Car");
    }
}
const tv = new TvKaRemote();
const car = new CarKaRemote();
function switchOffKaro(device) {
    if (device instanceof TvKaRemote) {
        device.switch_Tv_Off();
    }
    else if (device instanceof CarKaRemote) {
        device.switch_Car_Off();
    }
}
export {};
//# sourceMappingURL=app.js.map