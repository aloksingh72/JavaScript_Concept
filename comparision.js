// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1)
// console.log(2!=1);

// console.log(null > 0); /// false 
// console.log(null == 0);//false
// console.log(null >= 0);// true  
/*
Because the reason is that an equality check  == and comparison > < >= ,>= works differently
comparision convert kar deta hai null to munber treating it as 0 .
that's why false and true are comming at the result
*/


//=== triple equal is strict checking 
// means value ke saath daatatypes bhi check hoga
console.log("2"==2);//---> true

console.log("2"===2);//--->false because datatypes is not similar