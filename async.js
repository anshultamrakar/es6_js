// There are 3 state of promises 
// pending , fulfilled , rejected


// const fakePromises = new Promise((resolve, reject) => {
//     const error = false;
//     if(!error){
//         resolve("yes resolve the promises")
//     }else{
//         reject("reject the promises")
//     }
// })


// console.log(fakePromises);



// const myPromise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("yes resolve the promise")
//     }, 3000)
// })

// fakePromises.then(value => {
//    console.log(value)
// })

// myPromise.then(value => {
//     console.log(value)
// })

// fetch web API return its own web API

// const user =  fetch("https://jsonplaceholder.typicode.com/users")

// // console.log(user)    // state will be pending here
// console.log(user)


// fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//     console.log(response)
//     return response.json()
// }).then(data => {
//     console.log(data)
// })

// Async await 

