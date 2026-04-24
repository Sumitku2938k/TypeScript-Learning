// Classes & Objects: Protected Access Modifier

// Protected access modifier allows a class member to be accessible within the class and its subclasses, but not from outside the class hierarchy. 
// In this example, we have a base class `BottleMaker` with a protected property `name`. The subclass `MetalBottleMaker` can access and modify the `name` property through the `changeName` method, but it cannot be accessed directly from an instance of `MetalBottleMaker`.
class BottleMaker {
    protected name = "Milton";
}
class MetalBottleMaker extends BottleMaker {
    public material = "metal";

    changeName() {
        this.name = "some other name";
    }
}

let b1 = new MetalBottleMaker();
b1.changeName();
// b1.name = "another name"; // Error: Property 'name' is protected and only accessible within class 'BottleMaker' and its subclasses.