//stack (primitive), heap (non_premitive)
let myYoutubename = "sayanduttadotcom";

let anothername = myYoutubename;

anothername = "chaiorcode";

console.log(myYoutubename); //sayanduttadotcom
console.log(anothername); //chaiorcode

let user = {
  //non_primitive
  email: "sayandutta84314@gmail.com",
  upi: "user@bl",
};

let userTwo = user;
userTwo.email = "hitest@google.com";

console.log(user.email);
console.log(userTwo.email);
