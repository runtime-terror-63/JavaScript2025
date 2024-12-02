const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@xmple.com" });
  }, 1000);
}).then((user) => {
  console.log(user);
});

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) resolve({ username: "sayan", email: "sayan@gmail.com" });
    else reject("ERROR: SOmething went wrong");
  }, 1000);
})
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is eithher resolve or rejected");
  });

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) resolve({ username: "Java", email: "javascript@gmail.com" });
    else reject("ERROR: Something went wrong");
  }, 1000);
});

async function consumePromiseEvent() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseEvent();
