const materials = ["Hydrogen", "Helium", "Lithium", "Berylium"];
const res = materials.map((material) => material.length);

console.log(res);

const user = {
  username: "Sayan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Samm";
user.welcomeMessage();

function chai() {
  let userone = "chaiorcode";
  console.log(this.userone);
}

chai();

const chaki = () => {
  let username = "hitesh";
  console.log(username);
};

chaki();

const addTwo = (n1, n2) => n1 + n2;

console.log(addTwo(1, 2));

const addBy = (n1, n2) => ({ username: "hitesh" });
console.log(addBy(1, 3));

const myArr = [2, 4, 5, 3, 1];
myArr.forEach((ele) => {
  console.log(ele);
});
