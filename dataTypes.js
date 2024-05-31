//-----------------Data Types ke types --------------------------------

// Primitive
/*
prmitive dataTypes callByValue hote hai 
means data copy kar ke diya jata hai exact memory ka refernce nhi diya jata hai
*/
// 7 types --> String , Number , Boolean, null ,undefined,Symbol,BigInt

// Non-Primitive 
// Array,Objects,Functions


// *********note -> javascript is dynamically typed language **************** 
const score =100;
const scoreValue = 10.5;
const isLoggesIn = false;
//

// here symbols is used for unique random values 
const id = Symbol('123');
const anotherId = Symbol('123');
//console.log(id === anotherId);//-->false

//representation ka tareeka 
// Array
const heros = ["IronMan","Hulk","CaptainAmerica","Hawkeye"];
// objects 
let myInfo={
    name:"Alok singh",
    age: 21,
    mobileNo:8880000000,
}
//Functions
const myFunctions = function(){
    console.log("Hello World");
}
// **********************************************************************
// memory  in javascript
// Stack (Primitive ) ,Heap(Non- Primitive)

