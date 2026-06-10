//Rest Functions

// ... rest/spread

//Function ke parameter mein agar ... lagaya to aap waha par saare diye gaye arguments ko ek hi variable mein as an array rakh rahe ho 
function sum(...arr: number[]) {
    console.log(arr);
}
sum(1,2,3,4,5,6,7,8,9,10); //sabke liye arguments banane ki jagha unko ek array mei kar diya jayega (Lots of parameters in one)

function friends(...args: string[]){
    console.log(args);
    console.log(args[2]);
}

friends("aman","abhay","sumit")

var arr = [1,2,3,4,5];
var arr2 = [...arr]; // ... here is spread (Make copy of the array)

