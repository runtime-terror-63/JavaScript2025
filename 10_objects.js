//singleton
/*
const tinderuser = new Object();
const tinder = {};

tinderuser.id = "123abc";
tinderuser.name = "Sammy";
tinderuser.isloggedIn = false;
console.log(tinderuser);
console.log(tinder);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sayan",
      lastname: "dutta",
    },
  },
};

console.log(regularUser.fullname?.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 2: "g", 4: "b" };

//const obj3 = { obj1, obj2 };
const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

const obj4 = { 1: "a", 2: "b", 3: "c" };
const obj5 = { 4: "a", 5: "b", 6: "c" };
const obj6 = { 7: "a", 8: "b", 9: "c" };

const objA = Object.assign(obj4, obj5, obj6);
console.log(objA);
console.log(objA === obj4);

const a = { 1: "a", 2: "b", 3: "c" };
const b = { 4: "f", 5: "g" };

const objAB = { ...obj1, ...{ 4: "f", 5: "g" } };
console.log(objAB);

const users = [
  {
    id: 1,
    email: "sayan@gmail.com",
  },
  {
    id: 2,
    email: "duttaswapan@gmail.com",
  },
  {
    id: 3,
    email: "ananya@gmail.com",
  },
  {
    id: 4,
    email: "swapan@gmail.com",
  },
];

console.log(users[1].email);
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
*/

//distructor

const course  ={
  courseInstructor: "Sayan",
  courseName: "js in Hindi",
  price: "999",
}

const {courseInstructor : intructor} = course
const {courseName : Name} = course

console.log(intructor)
console.log(Name)
