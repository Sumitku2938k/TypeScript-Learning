// Classes & Objects: Abstract Classes

//Ped(tree) -> Absolute Concept
//Mango tree, Banana Tree -> implementation of the concept

class Payment { //Essentials/must for every payment  
    constructor(protected amount: number, protected account: number) {}
    isPaymentValid(amount: number){
        return this.amount > 0;
    }
}

class CokkingEssentials {
    constructor(protected gas: number, public gasKaName: string) {}
}

class Sabji extends CokkingEssentials{

}

class Cake extends CokkingEssentials{
    
}