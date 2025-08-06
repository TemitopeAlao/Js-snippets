/*
Write a function that takes a message and a delay and returns a Promise. The function should log the message to the console after the specified delay.

Using this function, log the following messages in the given order, each after a specific delay:

"My name is Chris" – after 2 seconds
"Backend is sweet" – after 3 seconds
"I am a backend trainee" – after 4 seconds
"Festac hub" – after 5 seconds
"I love JavaScript" – after 7 seconds

Make sure each message appears only after the previous one finishes 

Use .catch() to handle any potential error 
*/

//MY WRONG ANSWER
// const myFunc = (msg, delay) => {
//  console.log(setTimeout)
// }
// myFunc(msg, delay)

// return setTimeout(() => {
// .then(myFunc)=>("My name is Channels", 2000);
// .then(myFunc)=>("Backend is sweet", 3000);
// .then(myFunc)=>("I am a backend trainee", 4000);
// .then(myFunc)=>("Coconut hub", 5000);
// .then(myFunc)=>("I love JavaScript", 7000);
// .catch(err)=> err.message
// });

//CORRECTION
//With setTimeout
// const myFunc = (msg, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(msg);
//       resolve();
//     }, delay);
//   });
// };

// myFunc("My name is Channels", 2000)
//   .then(() => myFunc("Backend is sweet", 3000))
//   .then(() => myFunc("I am a backend trainee", 4000))
//   .then(() => myFunc("Coconut hub", 5000))
//   .then(() => myFunc("I love JavaScript", 7000))
//   .catch((err) => console.log(err.message));

//Without setTimeout but with parameter. Using direct chaining method of promises
// const myFunc = (msg) => {
//   return new Promise((resolve, reject) => {
//     console.log(msg);
//     resolve();
//   });
// };

// myFunc("My name is Channels")
//   .then(() => myFunc("I am a backend trainee"))
//   .then(() => myFunc("I am learning at Curve Africa"))
//   .catch((err) => console.log(err.message));

// Without any parameter and setTimeout. Using chaining with return keyword. This is used in case you want to perform extra conditional logic.
// const myFunc = () => {
//   return new Promise((resolve) => {
//     console.log("Running steps ...");
//     resolve();
//   });
// };

// myFunc()
//   .then(() => {
//     console.log("My name is Channels");
//     return myFunc();
//   })
//   .then(() => {
//     console.log("Backend is sweet");
//     return myFunc();
//   })
//   .then(() => {
//     console.log("I am a backend trainee");
//   })
//   .catch((err) => console.log(err.message));

//If you only care about the .then messages and want to avoid the Running step that shows each time before our actual message.

// const myFunc = () => {
//   return Promise.resolve();
// };

// myFunc()
//   .then(() => console.log("My name is Channels"))
//   .then(() => console.log("Backend is sweet"))
//   .then(() => console.log("I am a backend trainee"))
//   .then(() => console.log("I love JavaScript"))
//   .catch((err) => console.error(err));

// Using promise.resolve as the shortest version that gets fulfilled immediately, although it does not create a function like the question required.
// Promise.resolve()
//   .then(() => console.log("My name is Channels"))
//   .then(() => console.log("Backend is sweet"))
//   .then(() => console.log("I am a backend trainee"))
//   .then(() => console.log("I love JavaScript"))
//   .catch((err) => console.error(err));

//Using both resolve and reject to handle both sucess and failure cases.
// const myFunc = (msg) => {
//   return new Promise((resolve, reject) => {
//     if (!msg || msg.trim === "") {
//       return reject(new Error("Message cannot be empty"));
//     }
//     console.log(msg);
//     resolve();
//   });
//   //Full if-else code
//   // if (!msg || msg.trim === ""){
//   //     console.log(msg);
//   //   resolve();
//   // } else {
//   //   reject (new Error("Message cannot be empty"));
//   // }
// };

// myFunc("My name is Channels")
//   .then(() => myFunc("Backend is sweet"))
//   .then(() => myFunc("I love JavaScript"))
//   .then(() => myFunc(""))
//   // .catch((err) => console.error("Error:", err.message));
//   .catch((err) => console.log("Error:", err.message));

//ASYNC/AWAIT
//////////////////////////////////
/* You are building a simple profile viewer app.

Create a function getProfile(name) that returns a Promise.

If the name is "Channels", it should resolve after 1 second with the message:
"Profile loaded: Channels - Backend Trainee"

If the name is anything else, it should reject after 1 second with the error:
"Profile not found".
*/
const getProfile = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name !== "Channels") {
        return reject(new Error("Profile not found"));
      }
      resolve("Profile loaded: Channels - Backend Trainee");
    }, 1000);
  });
};

const viewProfile = async (name) => {
  try {
    const data = await getProfile(name);
    console.log(data);
  } catch (err) {
    console.log("Error:", err.message);
  }
};

viewProfile("Channels");
