let score = "123abc";

console.log(score);
console.log(typeof score);
let verScore = Number(score); //number conversion
console.log(typeof verScore);
console.log(verScore); //its print Nan  => not a number

let islogin = 1;
let booleanLogin = Boolean(islogin);
console.log(booleanLogin); //true

let gap = "";
let boolGap = Boolean(gap);
console.log(boolGap); //false

let someNumber = 34;

let stringNumber = String(someNumber);

console.log(typeof stringNumber); //string
console.log(stringNumber);

let floatNum = parseFloat(someNumber);
console.log(floatNum);
console.log(typeof floatNum); //number
