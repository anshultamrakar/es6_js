// ES6+ Practice Question Set 1

//1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).


// const isEligibleToVote = (age) => {
//    if(age >= 18){
//     return "you are elible to vote"
//    }
//    return "you are not eligible to vote"
// }

// console.log(isEligibleToVote(45))

// console.log(isEligibleToVote(17))

// console.log(isEligibleToVote(18))


// 2.Write a function that takes two numbers as input and determines which one is greater.

// const isGreater = (num1 , num2) => {
//   if( num1 > num2){
//     return `${num1} is the greater than ${num2}`
//   }
//   return `${num2} is the greater than ${num1}`
// }

// console.log(isGreater(2,5))
// console.log(isGreater(10,5))


// 3.Write a function that takes a number as input and determines if it is positive or negative.

// const checkNum = (num) => {
//     if(num > 0){
//         return `${num} is the positive number`
//     }
//     return `${num} is the negative number`
// }


// console.log(checkNum(2))
// console.log(checkNum(-5))

// 4.Write a function that takes a number as input and determines if it is even or odd.

// const isEvenOdd = (num) => {
//  if(num % 2 === 0){
//     return `${num} is a even number`
//  }
//  return `${num} is a odd number`
// }

// console.log(isEvenOdd(5)) 
// console.log(isEvenOdd(8))
// console.log(isEvenOdd(10))


// 5.Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

// const checkForAlphabetA = (str) => {
//     if (str.includes("a") || str.includes("A")){
//         return "Includes a or A"
//     }

//     return "Does not include A"
// }


// console.log(checkForAlphabetA("Tanay"))
// console.log(checkForAlphabetA("Jeep"))
// console.log(checkForAlphabetA("Dave"))


// 6.Write a function that takes a string as input and determines if it is longer than 5 characters.

// const checkLength = (str) => {
//   if(str.length > 5){
//     return `${str} contains more than 5 character`
//   }
//   return `${str} does not than 5 character`
// }

// console.log(checkLength("programming"))
// console.log(checkLength("Jeep"))



// 7.Write a function that takes a number as input and determines if it is between 1 and 10.

// const isBetweenOneAndTen = (num) => {
//   if(num >= 1 && num <= 10 ){
//     return true
//   }
//   return false
// }

// console.log(isBetweenOneAndTen(5))
// console.log(isBetweenOneAndTen(11))


// 8.Write a function that takes a string as input and determines if it contains the word "hello".

//   const isHelloPresent = (str) => {
//     if(str.includes("hello")){
//         return true;
//     }
//     return false;
//   }


//   console.log(isHelloPresent("hello world"))
//   console.log(isHelloPresent("World")) 


// 9.Write a function that takes a number as input and determines if it is a multiple of 3.

// const isMultipleOfThree = (num) => {
//   if(num % 3 === 0){
//     return true
//   }
//   return false
// }

// console.log(isMultipleOfThree(5))
// console.log(isMultipleOfThree(9))


// 10.Write a function which takes in a number as input and returns it after multiplying by 10.

// const multiplyByTen = (num) => {
//      return num * 10
// }

// console.log(multiplyByTen(20))
// console.log(multiplyByTen(40))


// 11. Console individual values of the product object using object destructuring.

// const product = {
//     title: "iPhone",
//     price: 5999,
//     description: "The iPhone is a smartphone developed by Apple"
//   }

//   const {title , price, description  } = product

//   console.log(title)
//   console.log(price)
//   console.log(description)

// 12.Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.


// const  book = {
//     title : "3 mistake of my life",
//     author : "chetan bhagat",
//     pages : 98
// }

// const getBookDetails = ({pages}) => {
//      if(pages > 100){
//         return true
//      }
//      return false
// }


// console.log(getBookDetails(book))

// 13.Create a function changeOccupation that takes an object person and a string newOccupation as parameters, 
// and changes the occupation property of the person object to the newOccupation. 
// Log the person object to the console before and after calling the function.


// const person = {
//     name : "Amit",
//     age : 25,
//     occupation : "Software engineer"
// }

// const changeOcuupation = ({occupation} , str ) => {
//   return occupation = str
// }

// console.log(changeOcuupation(person , "project manager"))





// 14.Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console

// const number = [1,2, 3]
// const [a, b ,c] = number

// console.log(a)
// console.log(b)
// console.log(c)



// 15.Convert the given function into ES6 with least amount of characters.
// function defaultParamsFunc(a, b, c) {
//     if (c === undefined) {
//         c = 4;
//     }
//     return a * b * c;
// 	};
// 	console.log(defaultParamsFunc(3, 1)); // 12
// 	console.log(defaultParamsFunc(3, 10)); // 120



// const defaultParameter = (a,b,c) => {
//     if (c === undefined){
//         c = 4;

//     }
//     return a * b * c
// }

// console.log(defaultParameter(3,1))
// console.log(defaultParameter(3,10))
