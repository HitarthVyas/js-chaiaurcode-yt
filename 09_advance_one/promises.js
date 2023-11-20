// const promiseOne  = new Promise(function(resolve, reject) {
//   // do an async task
//   // db calls, cryptography, network

//   setTimeout(() => {
//     console.log('async task is complete');
//     resolve();
//   }, 1000);
// });

// // resolve connect promise to .then

// promiseOne.then(function() {
//   console.log('Promise consumed');
// })

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log('async task 2');
//     resolve()
//   }, 1000);

// }).then(() => {
//   console.log('aysnc 2 resolved');
// })

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({username: "Chai", email: "hv@hvdas.com"})
//   }, 1000);
// })

// promiseThree.then(function(user) {
//   console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     let error = true
//     // let error = false
//     if(!error) {
//       resolve({username: 'hvdas', password: '1234'})
//     } else {
//       reject('something went wrong')
//     }
//   }, 1000);
// })

// const username = promiseFour
// .then((user) => {
//   console.log(user);
//   return user.username;
// })
// .then((username) => {
//   console.log(username);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   console.log('the promise is either resolved or rejected');
// })

// const promiseFive = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     let error = true
//     // let error = false
//     if(!error) {
//       resolve({username: 'js', password: '1234'})
//     } else {
//       reject('js went wrong')
//     }
//   }, 1000)
// })

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive
//     console.log(response);
//   } catch(error) {
//     console.log(error);
//   }
// }

// consumePromiseFive()


