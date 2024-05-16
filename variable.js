 //const let and var ki kahani

 const accountId = 125456
 let accountEmail = "aloksingh@gmail.com"
 var accountPassword ="12345"
 accountCity= "Ayodhya"
 let accountState;

//  javascipt me bina aage kuch ligke memory reversed kar sakte hai but is  not a good practise we dont do that
 //here accountId = 542153 is not allowed because it is defined in the const 

 accountEmail ="singhalok@gmail.com"
 accountPassword ="54321"
 accountCity ="Bengaluru"

 /*
 We not to prefer to use var variables
 because of issue in block scope and functional scope
 */
console.log(accountEmail);
console.log(accountId);
console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])