let num = [1, 2, 3, 4];
//for each
num.forEach((num, index) => {
  console.log(`${index}, ${num}`);
});

//map
const number = [1, 2, 3, 5];
const squre = number.map((num) => num ** 2);
console.log(`map are: ${squre}`);

const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of america");
map.set("Fz", "france");
console.log(map);

for (let [key, value] of map) {
  console.log(key, ":- ", value);
}

//filter --  find

const arr = [1, 2, 4, 5, 6, 7, 8, 9];

const events = arr.filter((num) => num % 2 == 0);
console.log(events);

const findable = arr.find((num) => num % 2 == 0);
console.log(findable);

//findIndex
const isLarge = arr.findIndex((num) => num > 6);
console.log(isLarge);

//every

const evenNum = [2, 4, 6, 8, 10];
const allEven = evenNum.every((num) => num % 2 == 0);
console.log(allEven);

const arroi = ["a", "b", "c"];
arroi.forEach((arroi, index) => {
  console.log(index, arroi);
});

console.log("=================================");
//entrities keys values

const arr_path = ["a", "b", "c", "d"];
for (let [index, value] of arr_path.entries()) console.log(index, value);

const number1 = [4, 2, 10, 1, 2, 8];
number1.sort((a, b) => a - b);
console.log(number1);

const oddOne = [1, 2, 4, 5, 2, 1];

const hasOdd = oddOne.some((num) => num & 1);
console.log(hasOdd);

let Myarr = ["falsh", "batman", "superman"];

let ar = 0;

while (ar < Myarr.length) {
  console.log(`value are ${Myarr[ar]}`);
  ar++;
}

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "c++",
    languageFileName: "cpp",
  },
  {
    languageName: "python",
    languageName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
