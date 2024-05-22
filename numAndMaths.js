//----------------------------NUMBERS----------------------------

// by default number ko javascript  number ki tarah treat karegi But
const score =400;
console.log(score);


// for good practise we use Number with number
const balance = new Number(100);
console.log(balance);

// toString  is used to find the no of elemnets in the value like here there are 3 element in 1 0 0
console.log(balance.toString().length);
// to fixed  is used ki  decimal ke baad kitni value leni hai value mostly used in making e-commerce website 
console.log(balance.toFixed(2));

// toPrecision is used ki kitne digit taak value precisily leni hai
// mostly used in trading and calculation enrich website
const otherNumber =123.48509345
console.log(otherNumber.toPrecision(4));


// comma separater is used for bigger value number
const myMoney =1000000;
console.log(myMoney.toLocaleString('en-IN'));// en-IN is ued for indian standard format


//-------------------MATHS-------------------
// some common math functions
console.log(Math);
console.log(Math.round(4.78));
console.log(Math.abs(-5));//absolute value -ve ko postive number
console.log(Math.ceil(4.3));//celling value
console.log(Math.floor(4.3));
console.log(Math.sqrt(36));

console.log(Math.random());// random value generate karega between 0 and 1

console.log((Math.random()*10 )+1);
console.log(Math.floor(Math.random()*10)+1);

const min =10;
const max=20;
// when you need to get the number in particular range
console.log(Math.floor(Math.random() * (max-min +1)) + min);
