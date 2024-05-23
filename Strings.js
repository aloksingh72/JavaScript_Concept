// Strings concept 

const name = "aloksingh";
const repoCount = 150;
// for string concatenation we use this way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('alpha-dot-com');
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('h'));
// console.log(gameName.charAt(4));
// there are mant methods we can study through prototype in browser console.log finction
// go through these prototypes help to clear the concept of string

const newString = gameName.substring(0, 3);// higher limit include nhi hoti hai 
console.log(newString);

// slice me hi negative numbers enter kar sakte hai  peeche se slice kam karta hai
const anotherString = gameName.slice(-4, 4);
console.log(anotherString);


// trim aur replace ke concept 
// trim  starting and ending blank space ko remove kar dega
const newStringOne = "   alok singh    "
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace
// kisi particular value ko search karke replace kar dega
const url = "https://aloksingh/github%720singh.com"
console.log(url.replace('%720', '-'));
//----------------------^replaceby^^

// spliting on basis of something
console.log(gameName.split('-'));// kisi bhi cheez ke basis pe split kar sakte hai

