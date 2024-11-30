function calculateCartPrice(val1, val2, ...num1) {
  let sum = 0;
  num1.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(calculateCartPrice(200, 400, 500));

//create a object

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject({
  username: "Samm",
  price: 199,
});

const arr = [100, 200, 300, 400, 500];

function myfun(newarr) {
  return newarr[2];
}

console.log(myfun(arr));
