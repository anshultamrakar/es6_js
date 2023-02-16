// Es6 by neogcamp
// function declaration

// function sum(num1, num2){
//      if(num2 === undefined){
//         return num1 + num1 
//      }
//     return num1 + num2
// }

// console.log(sum(2,4))



// Arrow functions

// const getUserName = email => email.slice(0, email.indexOf('@'))
// console.log(getUserName("anshultamrakar487@gmail.com"))

// const toProperCase = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(toProperCase("ansHul"))



// cont , let , var   & scope 

// let x = 2 
//  x = 5 
// console.log(x)

// Means with var and let we have allowed reasignment

// const x = 33
// x = 44
// console.log(x)

// cont does not allow to reassignment

// global scope
//  var x = 2 
//  let y = 3 
//  const z = 5


//  localscope
// function myFunc(){
//     const z = 5
//     console.log(z)
//     {
//         let y = 4  
//         console.log(y)
//     }
// }

// myFunc()


// var x = 1
// let y = 2
// const z = 3

// console.log(`gobal : ${x}`)
// console.log(`gobal : ${y}`)
// console.log(`gobal : ${z}`)

// function myFunc(){
//     var x = 10
//     const z = 55
//     {
//         var x = 12 
//         const z = 66
//         console.log(`block : ${x}`)
//         console.log(`block : ${y}`)
//         console.log(`block : ${z}`)
//       }

//   console.log(`function : ${x}`)
//   console.log(`function : ${y}`)
//   console.log(`function : ${z}`)
// }

// myFunc()


// Key Takeaways

// 1. Always use const unless required otherwise
// 2. use let when you want to change the value
// 3. Define all variables at the top of the scope
// 4. Name your variables differently.
// 5. Stop using var from now on.


// "----------------------------------------------------------------------"
// Modules in javascript - Organise your code into reusable code , should be at the top
// import jubinNautiyal from "./module.js"
// import {edSherran as chotu , arijitSingh as motu} from "./module.js"

// console.log(jubinNautiyal())
// console.log(chotu())
// console.log(motu())

// "----------------------------------------------------------------------"
//  Optional chaiining and nullish coalescing

// const user = {
//     myName : null,
//     age : null,
//     email : "anshultamrakar@gmail.com"

// }


// function getUser(user){
//     const name = user.myName ?? 'unknown'
//     const age = user.age ?? "age is not defined"
//     const email = user.email ?? "hola"
//     return {name , age , email}
// }

// console.log(getUser(user))

// let myArray = [{id : 1}]

// console.log(myArray?.[0]?.id ??  "Dude we have an update")




// "----------------------------------------------------------------------"
// Template literals

// const evenODD = (num) => {
//   if(num % 2 === 0){
//    return `${num} is the even number`
//   }else{
//     return `${num} is the odd number`
//   }
// }

// console.log(evenODD(10))



// "----------------------------------------------------------------------"
// destructuring an object
// const actor = {
//     salman : "wanted",
//     shahrukh : "pathaan",
//     aamir : "3idiots",
//     ranbir : "bramhastra"
// }

//  const {salman , aamir } = actor
//  console.log(salman)
//  console.log(aamir)

//  const myHero = ({ranbir}) => {
//   return `${ranbir} is the one` 
//  }

//  console.log(myHero(actor))

// "----------------------------------------------------------------------"

// rest and spread

// const printArray = (a, b , ...rest) => {
//     return a , b  , rest
// }


// console.log(printArray(1,2,3,4,5,6))

// "----------------------------------------------------------------------"





