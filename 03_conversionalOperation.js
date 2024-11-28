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



////////////////////////////////////////// operation ///////////////////////////////////////////

console.log("1" + 2)
console.log(2+2+"3")
console.log(2+"1")


//comparison datatypes

console.log(2<1);
console.log(1>2);
console.log(2===3)
console.log(2===2)
console.log(2!=3)

console.log("2">1)
console.log("02">1);

console.log(null >= 0)
console.log(null==0)
console.log(undefined==0)

console.log("strct check", 2 === 2);

