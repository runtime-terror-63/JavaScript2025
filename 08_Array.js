//array
/*
let fruit = ["apple", "banana", "cherry"];
console.log(fruit);
console.log(fruit[0]);
fruit.push("Mango");
console.log(fruit);
let num = new Array(10);
let mixedArray = ["text", 42, true];
console.log(mixedArray);
mixedArray.pop();
console.log(mixedArray);
mixedArray.unshift("Choklate");
console.log(mixedArray);
mixedArray.shift();

//splicing slicing
let animal = ["dog", "cat", "elephant", "tiger"];
let sliced = animal.slice(1, 3);
console.log(sliced);

//indexoff
console.log(animal.indexOf("dog"));
console.log(animal.includes("cat"));

//find        0  1   2   3   4
let number = [5, 10, 15, 20, 25];
let res = number.find((num1) => num1 > 10);
console.log(res);
console.log(number.findIndex((num2) => num2 > 10));
*/
//sorting
let number = [5, 10, 15, 20, 25];
let a = number.sort((a, b) => a - b);
//console.log(a);
//console.log(a.reverse());
let allNum = number.concat([29, 30, 55]);
console.log(allNum);

let allNumber = [...allNum, ...[987, 567, 899]];
console.log(allNumber);

let rollNum = [4, 5, 7, 9, 2, 4];
let addNum = [...rollNum, ...[65, 78, 33, 234]];
let moreNum = rollNum.concat([345, 234, 567]);
console.log(addNum, moreNum);

let c = [4, 5, 67, 9, 7];
console.log(c.find((ab) => ab > 5));
console.log(c.findIndex((ab) => ab > 5));

let flower = ["daliya", "rose", "mehegani"];
flower[5] = "dog";

console.log(Object.keys(flower));
console.log(flower.length);

const color = ["red", "orange", "blue", "black"];
color[6] = "purple";


//loops
color.forEach((item, index) => {
  console.log(`${index}, ${item}`);
});

color.forEach((element) => {
  console.log(`${element}`);
});

const i = color.keys();
for (const key of i) {
  console.log(`${key} ${color[key]}`);
}
