const accountId = 144553;
let accountEmail = "sayandutta84314@gmail.com";
var accountPassword = "1234";

//also we can use varible without using
accountCity = "Nadia";
let useState;

//const keyword not changable or not re-writained
//accountId = 2;

/*
let var are chngable
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "hcf@gmail.com";
accountPassword = "2341";
accountCity = "Islampur";
console.log(accountId);

//make all the values in a table with index
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  useState,
]);
