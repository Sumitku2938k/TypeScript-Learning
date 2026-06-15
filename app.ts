//Modules

import { addPayment, getDetails } from './payment.js';
addPayment(100);
getDetails();

import bottleMaker from './bottleMaker.js';
const bottle1 = new bottleMaker('Coca Cola');
console.log(bottle1.name);