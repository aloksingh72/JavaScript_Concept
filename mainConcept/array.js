// array
// new array concept 
const myArr = [0,3,7,7,4]
const myHeors = ["capatinAmerica","IronMan","Hulk"];
console.log(myHeors);
const myArr2 = new Array (1,2,3,4);
console.log(myArr2[1])

//Array Methods
myArr.push (9)
myArr.push(10);
console.log(myArr)
myArr.pop();
console.log(myArr);

myArr.unshift(2);// zero index pe insert kar denge
console.log(myArr)
myArr.shift()// remove kar denge
console.log(myArr);


// join ka use karne se array ko string  me convert kar denge
const newArr = myArr.join();
// console.log(myArr)
console.log(typeof newArr);

// slice and splice in Array
console.log("A ",myArr);

const myn1 = myArr.slice(0,3);
// console.log(myn1);

console.log("B",myArr);

// major difference yahi hai ki splice me array manipulate ho jata hai
// splice orignal array ko manipulate karta hai 
//while slice doesnot do that
const myn2 = myArr.splice(0,3);
console.log("C",myArr);
console.log(myn2);
