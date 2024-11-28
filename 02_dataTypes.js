//2types datatypes are there primitive and non-primitive

//primitive
let age = 23; //integer
let price = 99.23; //float

let bigInt = 123859686984795695085050696970796859n; //bigintger

//string
let name = "Sayan";
let getname = `Helloo, ${name}!`;

//boolean yes or no
let isLoggedIn = true;
let hasAccessed = false;

//undefied and null
let data;
console.log(data); //undefied
let user = null; //empty

//non-primitive
//object
let person = {
  name: "Bob",
  age: 30,
};
console.log(person);

//array
let num = [1, 2, 3];
console.log(num);

//function
function greet() {
  console.log("Hello!");
}
console.log(greet());

console.table([
  typeof 42,
  typeof "Hello",
  typeof true,
  typeof undefined, //undefined
  typeof null, //object
  typeof {}, //object
]);
