// Classes & Objects: Abstract Classes
//Ped(tree) -> Absolute Concept
//Mango tree, Banana Tree -> implementation of the concept
class Payment {
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentValid(amount) {
        return this.amount > 0;
    }
}
class CokkingEssentials {
    constructor(gas, gasKaName) {
        this.gas = gas;
        this.gasKaName = gasKaName;
    }
}
class Sabji extends CokkingEssentials {
}
class Cake extends CokkingEssentials {
}
export {};
//# sourceMappingURL=app.js.map