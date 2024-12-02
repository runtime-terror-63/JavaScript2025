const person = {
  firstName: "John",
  lastName: "Doe",

  //Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  //setter
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person.fullName);

person.fullName = "Sayan Dutta";
console.log(person.firstName);
console.log(person.lastName);

const user = {
  _age: 0,

  get age() {
    return this._age;
  },

  set age(value) {
    if (value < 0) console.log("Age cannot be negetive");
    else this._age = value;
  },
};

user.age = 45;

console.log(user.age);
