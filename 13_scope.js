/*let a = 4;
var b = 4;
const c = 56;

if (true) {
  let a = 300;
  var b = 200;
  const c = 400;
  console.log("INNER: ", a);
}

let arr = [1, 2, 4, 5, 6, 7, 8, 8];
for (let i = 0; i < arr.length; i++) {
  const ele = arr[i];
  console.log(ele);
}

console.log(a);
console.log(b);
console.log(c);


*/

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

one();

console.log(5);
function addone(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
