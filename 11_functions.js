function square(num) {
  return num * num;
}

console.log(square(2));

function myFunc(theObjet) {
  theObjet.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);

function myArr(theArray) {
  return (theArray[0] = 3);
}
const arr = [45];
myArr(arr);
console.log(arr[0]);

function myname(name) {
  return `Hello ${name}`;
}

console.log(myname("sayna"));

function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

const multiPlay = (a, b) => a * b;
console.log(multiPlay(2, 5));

function addTwoNum(a, b) {
  c = a + b;
  console.log("Hey");
  return c;
}

const res = addTwoNum(2, 4);
console.log(res);

//==========================================

function loginUserMessage(username) {
  if (`${username}` === "hitesh") console.log("You are correct");
  else console.log("are u understand");
}
loginUserMessage("hitesh");
