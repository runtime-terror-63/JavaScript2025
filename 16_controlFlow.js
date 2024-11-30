//conditional statements
/*
let score = 85;

//if else
if (score > 90) console.log("Grade:A");
else if (score > 80) console.log("Grade: B");
else console.log("Grade is: C");

//switch case

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Monday");
    break;
  default:
    console.log("Invalid day");
}

//forloop
for (let i = 0; i < 5; i++) console.log(i);

//whileloop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

let k = 1;
do {
  console.log(k);
  k++;
} while (k < 6);  */

//fo...of loop
let arr = [10, 20, 30];
for (let num of arr) console.log(num);

let fruit = ["apple", "bnanana", "mango"];
for (let f of fruit) console.log(f);

// for...in loop
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let key in obj) {
  console.log(key, obj[key]);
}

const obj1 = { a: 1, b: 2, c: 3 };

for (const prop in obj1) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

//exception handling

try {
  let x = 10 / 200;
  throw new console.error("Custom error");
} catch (err) {
  console.log("Caught an error: ", err.message);
} finally {
  console.log("This will always execute");
}

//break continue

for (let i = 0; i < 7; i++) {
  if (i === 6) break;

  if (i === 1) continue;
  console.log(i);
}

let age = 19;

let canVote = age > 15 ? "Yes" : "No";
console.log(canVote);

let animal = ["dog", "parrot", "swarrow", "pickok"];

for (let ele of animal) console.log(ele);

let user = {
  userName: "sayan",
  password: "gfiuyfk@",
  gmail: "sayandutta84314@gmail.com",
};

for (let newU in user) {
  console.log(newU, user[newU]);
}

let details = {
  personName: "sayan",
  age: 18,
  maturity: "single",
};

if (details.age >= 7 && details.age <= 19) console.log("Yah we got the player");
else console.log("hey u need to upgrade");
