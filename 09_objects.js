//singleton

//object literals
const mySum = Symbol("Key1");
const jsUser = {
  name: "Sayan",
  "full name": "Sayan Dutta",
  mySum: "myKey1",
  age: 18,
  location: "Jaipur",
  email: "sayan@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "saturday"],
};

console.log(jsUser.mySum);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);

jsUser.email = "sayan@chatgpt.com";
//Object.freeze(jsUser);
jsUser.email = "sayan@microsoft.com";
console.log(jsUser);

jsUser.greetings = function () {
  console.log(`hello Js user, ${this.name}`);
};

console.log(jsUser.greetings());
