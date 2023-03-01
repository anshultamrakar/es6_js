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

// const isBetweenOneAndTen = num =>  num >= 1 && num <= 10

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


// const changeOccupation = (person , newOcuupation) => {
//   return {...person , occupation : newOcuupation}
// }

// console.log(changeOccupation(person , "Programe Manager"))





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



// "-----------------------------------------------------------------------------------------------------------------------------"
// ES6 part -2

// 1.Write a function that takes a string as input and returns the string in all uppercase letters.

// const stringToUpperCase = str =>  str.toUpperCase()

// console.log(stringToUpperCase("hello"))


// 2.Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.
  
// const person = {
//     name : "Dave",
//     age : 30
// }

// person.age = 35

// console.log(person.age)


// 3.Write a function that takes an object car and returns true if the car is a sports car 
// (i.e. has a horsepower property greater than or equal to 300)


// const car1 = {
//     make: 'Porsche', 
//     model: '911', 
//     horsepower: 450
// }

// const car2 = {
//     make: 'Toyota',
//     model: 'Camry', 
//     horsepower: 200
// }

// const isSportCar = ({horsepower}) => {
//    if(horsepower >= 300){
//     return true;
//    }
//    return false;
// }

// console.log(isSportCar(car1))
// console.log(isSportCar(car2))



// 4.Write a function that takes an object blog and returns true if the blog has more than 1000 views 
// (i.e. has a views property greater than 1000)

// const blog1 = {
//     title: 'How to Learn JavaScript', 
//     author: 'John Doe', 
//     views: 1430
// }

// const blog2 = {
//     title: '10 Reasons to Start a Blog', 
//     author: 'Jane Smith', 
//     views: 500
// }


// const getViews = ({views}) => {
//    if(views > 1000){
//     return true;
//    }
//    return false;
// }


// console.log(getViews(blog1))
// console.log(getViews(blog2))


// 5.Swap the values of two variables using array destructuring.

// let a = 1 ;
// let b = 2;

// [a,b] = [b,a]

// console.log(a)
// console.log(b)


// 6.Convert this function into ES6 with least amount of characters
    // function add(a = 30, b = 0) {
    //     return a + b;
    //   }

    // console.log(add(2, 3));


    // const add = (a = 30 , b = 0) => a + b ;
    // console.log(add(2,3))



//  7. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.




// 8.Write a function that takes two strings as input and concatenates them together.


// const concatenateString = (str1 , str2) => {
//   return str1 + " " +  str2;
// }  

// console.log(concatenateString("hello", "world"))



// 9. Write a function that takes an array and returns the last element in the array.

// const lastElement = (arr)  => {
//     return arr[arr.length - 1];
// }


// console.log(lastElement([1,2,3,4,5,6]))


// 10.Write a function that takes an array and returns the first element of the array.


// const firstElement = (arr) => {
//   return arr[0];
// }

// console.log(firstElement([1,2,3,4,5,6]))


// 11.Write a function that takes an array and a number and returns the sum of first element and the number.
  

// const sumFirstElement = (arr) => {
//   let sum = 0 ;
//   for(let i = 0 ; i< arr.length ; i++){
//     sum += arr[i]
//   }
//   return sum; 
// }

// console.log(sumFirstElement([1,2,3]))
  

// 12.Write a function that takes an array and returns the sum of first and last element.


// const sumFirstAndLast = (arr) => {
//   return arr[0] + arr[arr.length - 1]
// }

// console.log(sumFirstAndLast([1, 2, 3, 4, 8]))



// 13.Write a function that takes an object representing a person's information (name, age, occupation) and 
// returns a template literal that includes the person's name and age in a sentence.

// const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
// const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }

// const personInfo = ({name , age}) => {
//   return `${name} is ${age} year old`
// }

// console.log(personInfo(person1))

// console.log(personInfo(person2))


// 14.Convert the function getData, into an ES6 function with last amount of characters. 
        // function getData(person) {
        //     const name = person.name;
        // 		const address = person.address.city
        //     console.log(name); // John Doe
        //     console.log(address); // New York
        // }

        // const person = {
        //   name: 'John Doe',
        //   address: {
        //     city: 'New York',
        //     state: 'NY',
        //   },
        // };
        // getData(person);

//  const person = {
//     name : "John Doe",
//     address : {
//         city : "New york",
//         state : "NY"
//     }
//  }

//  const getData = ({ name , address  }) => {
//   console.log(name)
//   console.log(address.city)
//  }

//  getData(person)



// 15. Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};

// const combinedObj = (obj1 , obj2 ) => {
//     return {...obj1 , ...obj2}
// }

// console.log(combinedObj(obj1, obj2 ))


"--------------------------------------------------------------------------------------------------------------------------------------------"

// ES6+ Practice Question Set 3

// 1.Create a function that takes an array of strings as an argument and 
// returns a string that includes the number of items in the array and the first and last items.


// const items = ["apple" , "banana" , "cupcake"]


// const formatArray = (items) => {
//   return `The array has ${items.length} items , and the first element is ${items[0]} and the last element is ${items[items.length - 1]}`
// }

// const message = formatArray(items)
// console.log(message)



// 2.Create a function that takes a product object as an argument and returns a string that includes 
// the product name, price, and a message based on whether it is in stock or not.


// const product = {
//     name: 'Socks',
//     price: 249,
//     inStock: true,
//   };

//   const formatProduct = ({name , price , inStock}) => {
//     if(inStock){
//         return `${name} costs INR ${price} and is in stock`
//     }
//   }

//  const message = formatProduct(product)
//  console.log(message)
  

// 3.Write a function findPerson that takes an array of person objects and a name as 
// parameters and returns the object with the matching name, or null if not found.


// const person = [
//     {name : "Amay" , age : 25 },
//     {name : "Akhil", age : 25}
// ]

// const findPerson = (person , name) => {
//  return person.find(person => person.name === name) || null 
// }

// console.log(findPerson(person , "Amay"))



// 4.Write a function that uses destructuring to extract the first two elements from an array, 
// and returns them in an object with keys 'first' and 'second'.

// const fruits = ["orange" , "banana", "apple"]
// const color = ["red", "blue", "green"]

// const pickFirstAndSecond = ([a , b]) => {
//   return {first :  a , second : b }
// }

// console.log(pickFirstAndSecond(fruits))
// console.log(pickFirstAndSecond(color))


// 5.Convert the following code to ES6+ syntax with minimum number of characters.
// function startsWithA(str) {
//     if(str.charAt(0) === 'A') {
//           return true;
//       } else {
//           return false
//       }
//   }

// const startwithA = str => str.charAt(0) === "A" ? true : false

// console.log(startwithA("Akshita"))
// console.log(startwithA("Jeena"))

// 6.Write an ES6 function to return only the first character of the given array.


// const array = [1,2,3,4,5,6]
// const printFirstCharacter = (array) => {
//  return array[0]
// }

// console.log(printFirstCharacter(array))


// 7.Write a function to return the last 5 characters as an array from the given array.

// const myArray  = [0, 1, 1, 2, 3, 5, 8]
// const printLastFive = (myArray) => {
//   return 
// }


// 8.Write an ES6 function to return the second element of the given array by multiplying 20 to it.

// const myArray = [1,2,3,5,8]


// const printSecondCharacter = ([a , b , ... rest]) =>  b * 20;


// console.log(printSecondCharacter(myArray))


// 9 .Write an ES6 function to return the second element of the given array by adding “Hello” before it.
// const myName = ["Akshay", "Sweta", "Prerana", "Vinay"]
// const myFriends = ["Kanika", "Rakesh", "Prerana", "Puja"]

// const sayHello = ([a,  b  , ...rest]) =>  "Hello" + " " + b



// console.log(sayHello(myName))
// console.log(sayHello(myFriends))



// 10.Write an ES6 function to return sum of all numbers at even indices of the given array
 

// const myArray = [2,4,3,7,1,5]

// const sumOfEvenIndices = (myArray) => {
//   const evenArray = myArray.filter(num => num % 2 === 0)
//   let sum = 0 ;
//   for(let i = 0 ; i < evenArray.length ; i++){
//      sum += evenArray[i]
//   }
//   return sum;
// }


//  console.log(sumOfEvenIndices(myArray))
//  console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) 


 

// console.log(sumOfEvenIndices(myArray))

// 11.Write an ES6 function to return the sum of only first 2 elements of the array 
 
//  const myArray = [10, 4, 3, 7, 1, 5]
//  const myArray2 = [12, 14, 3, 27, 15]


//  const sumFirstTwoElement = ([a, b , ...rest]) =>  a + b

//  console.log(sumFirstTwoElement(myArray))
//  console.log(sumFirstTwoElement(myArray2))


// 12.Write an ES6 function to return the first element which is a multiple of 5 in the given array.

// const myArray = [7, 4, 10, 7, 5, 3]

// const printMultipleOfFive = (myArray) => {
//     return myArray.find((num) => num % 5 === 0)
// }
//     console.log(printMultipleOfFive(myArray))
//     console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) 


// 13. Create a function which takes in the given object and returns another object only with
//  the properties postalCode and city in it.
// const user = {
//     name : "Jane Doy",
//     postalCode : "12134",
//     city : "Germany"
// }

// const getAddress = ({postalCode , city}) => {
//  return { postalCode , city}
// }


// console.log(getAddress(user))

// 14.Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives


//  const userData1 = {
//     name: 'Gaurav',
//     postalCode: '12134',
//     country: 'Japan',
//   }

//   const userData2 = {
//     name: 'Pritam',
//     postalCode: '560223',
//     country: 'India',
//   }

//   const printData = ({name , country}) => {
//    return `${name} lives in ${country}`
//   }

//   console.log(printData(userData1))
//   console.log(printData(userData2))


// 15.Create a function which takes a product object and returns a sentence about the product using ES6 features.

// const product = {
//     name: "Apple MacBook Air 2020",
//       specification: {
//           capacity: "256GB",
//         size: "13.3 Inch"
//       },
//     price: 82900
//   }

//   const printProductDetails = ({name , specification : {capacity , size}}) => {
//    return `${name} which is of  ${size} has a capacity of ${capacity}`
//   }


//   console.log(printProductDetails(product))


// -------------------Es6 Practice set 4 -------------------------------------------------------------------------

// 1.Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.
// let array = [4,78,8,3,6,0,12,34, 99]

// const getMaxElement = (array) => {
//   let max = array[0]
//   for(let i = 0 ; i < array.length ; i++){
//      if(array[i] > max){
//         max = array[i]
//      }
//   }
//   return max
// }

//  console.log(getMaxElement(array))



// 2.Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.
// let array = [1,2,3,4,5]

// const calculateAvg = (array) => {
//  let sum = 0 ;
//  for(let i = 0 ; i < array.length ; i++){
//     sum += array[i]
//  }
//  return sum/array.length;
// }

// console.log(calculateAvg(array))


// 3.write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const convertEvenToOdd = (numArr) => {
//    let newArray = []
//    for(let i = 0 ; i < numArr.length ; i++){
//      if(numArr[i] % 2 === 0){
//         newArray.push(numArr[i] + 1)
//      }else{
//         newArray.push(numArr[i])
//      }
//    }
//   return newArray
// }

// console.log(convertEvenToOdd(numArr))


// 4.write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

// var words = ["eat", "sleep", "code", "repeat", "neog", "community"]

// const filterWords = (words) => {
//   let newArray = []
//   for(let i = 0 ; i < words.length ; i++){
//    if(words[i].length > 5){
//     newArray.push(words[i])
//    }
//   }
//   return newArray;
// }

// console.log(filterWords(words))

// 5.Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

// const arrayStr = ["eat", "sleep", "code", "repeat"]

// const capitalizeWords = (arrayStr) => { 
//   let newArray = []
//   for(let i = 0 ; i < arrayStr.length ; i++){
//      newArray.push(arrayStr[i].toUpperCase())
//   }
//   return newArray;
// }

// 6.Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.


// const myArray = [
//     { name: "John", age: 21 },
//     { name: "Mary", age: 22 },
//     { name: "Peter", age: 23 },
//   ]


// const getValue = (myArray) => {
//     let newArray = []
//     for(let i = 0 ; i < myArray.length ; i++){
//         newArray.push(myArray[i].name)
//     }
//     return newArray
// }
// console.log(getValue(myArray))


// 7.Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

// const userData = { firstName : "John", lastName: "Dee" }


// const podAndTeamAllocation = userData => ({...userData , teamId : 667543}) 


// console.log(podAndTeamAllocation(userData))


// 8.Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and
//  return the same object. Avoid using in-built methods.


    // const checkForTeam = (myObj) => {
    //     if(myObj.team){
    //         return myObj
    //     }else{
    //         return {...myObj , team : "A"}
    //     }
    // }

    // console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
    // console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: "B"}))
    // console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))


// 9.Destructure the following code to get the desired outputs. Avoid using in-built methods.


// const book = { 
//     title: 'JavaScript: The Definitive Guide',  
//     authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
//     publisher: {name: 'O\'Reilly Media', location: 'CA'}
// };

// const {title , authors : [{name : author1} , {name : author2}] , publisher : {name : publisherName} } = book


// console.log(title)
// console.log(author1); // David Flanagan 
// console.log(author2); // Yukihiro Matsumoto
// console.log(publisherName); // O'Reilly Media


// 10.Write an ES6 function that takes an array of objects and returns the sum of all ages.

// var array = [
// 	{
// 		name: "Jay",
// 		age: 60
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36
// 	},
// 	{
// 		name: "Manny",
// 		age: 16
// 	},
// 	{
// 		name: "Joe",
// 		age: 9
// 	}
// ];


// const sumOfAllAges = (array) => { 
//  let ageArray = []
//  let sum = 0 ;
//  for(let i = 0 ; i < array.length ; i++){
//     ageArray.push(array[i].age)
//  }
//   for(let i = 0 ; i < ageArray.length ; i++){
//     sum += ageArray[i]
//   }
//   return sum ;
// }

// console.log(sumOfAllAges(array))



