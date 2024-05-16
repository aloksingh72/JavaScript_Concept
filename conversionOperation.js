let someNumber =33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **************************** Operation ****************************

let value =3
let negValue = -value;
console.log(negValue);

// // some more operations
// console.log(2+2);
// console.log(2*4);
// console.log(2**2);// use for power of 2
// console.log(2%3);
// console.log(4/2);

//note---------> agar phele String aati hai then usko string sbko string ke tarah treat kiya jaayega
// concatination of string ho jayega
console.log("1" +2+2);

// but is if number is come first then phele addition hoga then string concatinate hoga
console.log(1+2 +"3");


//prefix and postfix conversion
// more on mdn prefix and postfix conversion 
let gameCounter = 100;
++gameCounter;
console.log(gameCounter);