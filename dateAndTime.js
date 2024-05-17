//Dates
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

console.log(typeof myDate);//date ka type object hai

let myCreatedDate = new Date(2024,4,17);// javascript me date ka index 0zero se start hota hai
console.log(myCreatedDate.toDateString());

// date ko second me convert karna 
let myTimeStamp = Date.now();
console.log(Math.floor(Date.now()/1000));
// date me se paricular cheez nikalni ho then
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() +1);// kyuki indexing zero se start hoti hai 



// note ---> string interpolation means backtick ke andar $dollar laga kar likna
//`${}`