const name = "sayan";
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`hey boys its my name ${name} and my repoCount is ${repoCount}`);

const gameName = new String("Alchohol");
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.repeat(3));
console.log(gameName.indexOf("l"));
console.log(gameName);

//slice
let str = "JavaScript";
console.log(str.slice(0, 4)); //"java"
console.log(str.slice(-6)); //last index negetive sign  "script"

//use of saubstring similar type
console.log(str.substring(0, 4));
console.log(str.substring(-8, 2)); //does not accept negetive indices

console.log(str.substr(4, 6)); //from : number to length

//searching
console.log(str.indexOf("J"));
console.log(str.lastIndexOf("a"));
console.log(str.includes("Java"));

//trim
//replace

let spaced = "     Hello    ";
console.log(spaced.trim());
console.log(spaced.replace("Hello", "Sayan").trim());
let url = "https://sayan.com/sayan%20choudhury";
console.log(url.replace("%20", "-"));

//splitting and joining

let data = "apple, banana, cherry";
console.log(data.split(",")); //[ 'apple', ' banana', ' cherry' ]
console.log(data); // apple, banana, cherry

let fruit = ["apple", "Cat", "Dog"];
console.log(fruit.join(","));
console.log(fruit);

const str1 = "The quick brown fox jumps over the lazy dog.";
console.table(str1.split(" "));
const word = str1.split(" ");
console.log(word[3]);
const chars = str1.split("");
console.log(chars);
console.log(chars[3]);
