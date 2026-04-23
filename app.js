"use strict";
// Classes and Objects: Constructor
// Object.defineProperty(exports, "__esModule", { value: true });
// ek esi machine jo ki produce kr rhi hai final consumable product -> Constructor
// class BottleMaker {
//     constructor (public name: string, public price: number) {}
// }
// let b1 = new BottleMaker("Milton",1200);
class HumanMaker {
    name;
    gender;
    age = 0; // default value i.e. Jo baat hum pehle se jante hai ki har human ki age 0 se start hoti hai, toh hum usko yaha pe define kr sakte hai. Aur isko constructor ke andar define krne ki zarurat nahi hai.
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
new HumanMaker("Goutam", "Male"); //Constructor sirf wo mang raha hai joo hame set karna hai
class Music {
    name;
    artist;
    thumbnail;
    length;
    available;
    constructor(name, artist, thumbnail = "somethumbnail.jpg", length, available) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.available = available;
        if (!thumbnail) {
            this.thumbnail = "somethumbnail.jpg";
        }
    }
}
let m1 = new Music("Chal Chaiya chhaiya", "Goutam", "", 1200, false);
let m2 = new Music("Dekh Dekh Dekh Yaha Waha Na Fekh, Dekh Failegi Beemari Hoga Sabka Bura Haal", "Nagar Paalika", "Kachra.png", 2000, true);
//Same kam kar raha hai but lines of code bohot jayada hai as compared to pehle wale tarike mei
// class Music {
//     public name;
//     public artist;
//     public thumbnail;
//     public length;
//     public available;
//     constructor ( name: string, artist: string, thumbnail: string = "somethumbnail.jpg", length: number, available: boolean){
//         this.name = name;
//         this.artist = artist;
//         this.thumbnail = thumbnail;
//         this.length = length;
//         this.available = available;
//     }
// }
//# sourceMappingURL=app.js.map