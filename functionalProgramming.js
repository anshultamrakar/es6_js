// Functional Programming set 1 -------------------------------------------------------------------------------------------------

// 1.Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

// const arr = [1, 2, 3, 4, 5]

// const incrementArray = (arr) =>  arr.map(num => num + 3)

// console.log(incrementArray(arr))

// 2.Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

// const myArray = ['apple', 'banana', 'cherry'];

// const capitilizeArray = (myArray) =>  myArray.map(word => word.toUpperCase())

// console.log(capitilizeArray(myArray))


// 3.Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.
// const people = [
//     { name: 'Ankit', age: 25 },
//     { name: 'Vinit', age: 24 },
//     { name: 'Shashi', age: 29 }
//   ];

//   const getAges = (people) =>  people.map(person => person.age)

//   const ages = getAges(people)
//   console.log(ages)

// 4.  Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

// const products = [
//     { name: 'Lip Balm', stock: 100 },
//     { name: 'PERFUME', stock: 400 },
//     { name: 'Socks', stock: 200 }
//   ];


// const getProductNameInLowerCase = (products) => products.map(product => product.name.toLowerCase())

// console.log(getProductNameInLowerCase(products))

// 5.Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

// const cities = [
//     { name: 'New York', population: 8538000 },
//     { name: 'Los Angeles', population: 3976000 },
//     { name: 'Bangalore', population: 13608000 }
//   ];

//   const getCityNames = (cities) =>  cities.map(city => city.name)
//   console.log(getCityNames(cities))


// 6.Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

// const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
// const filterLongString = (fruits) =>  fruits.filter(fruit => fruit.length > 5)

// console.log(filterLongString(fruits))

// 7.Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.
//  const numbers = [1, 2, 30, 4, 15]

//  const isDivisibleBy3and5 = (numbers) =>  numbers.filter(num => num % 5 === 0  && num % 3 === 0)
//  console.log(isDivisibleBy3and5(numbers))

// 8.Write an ES6 function that takes an array of objects with the properties name and age, 
// and returns an array with only the objects that have an age greater than 30.

// const people = [
//     { name: 'Rahul', age: 25 },
//     { name: 'Raj', age: 35 },
//     { name: 'Vijay', age: 45 }
//   ];
  

//   const filterByAge = (people) =>  people.filter(person => person.age > 30)
// 
//   console.log(filterByAge(people))

// 9.Write an ES6 function that takes an array of objects with the properties 
// name and score, and returns an array with only the objects that have a score greater than 80.

// const students = [
//     { name: 'Aditya', score: 85 },
//     { name: 'Bob', score: 75 },
//     { name: 'Charlie', score: 90 }
//   ];

//   const filterByScore = (students) => students.filter(student => student.score > 80) 
//  

//   console.log(filterByScore(students))


// 10.Write an ES6 function that takes an array of objects with the properties name, age and city, and 
// returns an array with only the objects that have a city property of "Indore" and age greater than 70.

// const people = [
//     { name: 'Ridhima', age: 75, city: 'Indore' },
//     { name: 'Akshay', age: 60, city: 'Delhi' },
//     { name: 'Udit', age: 80, city: 'Indore' },
//       { name: 'Venki', age: 80, city: 'Bangalore' }
//   ];

//  const filterByCityAndAge = (people) => people.filter(person => person.city === "Indore" && person.age > 70)
//   

//   const filteredPeople =  filterByCityAndAge(people)
//   console.log(filteredPeople)


// 11.6. Write an ES6 function that takes an array of objects containing book 
// information (title, author, genre) and returns an array with only the books of "Science Fiction".

// const books = [
//     {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
//     {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
//     {title: "1984", author: "George Orwell", genre: "Science Fiction"},
//     {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
//   ];

//   const filterByGenre = (books) => books.filter(({genre}) => genre === "Science Fiction")

//   const filteredBooks = filterByGenre(books , "Science Fiction")
//   console.log(filteredBooks)


// 12.Write an ES6 function that takes an array of objects containing employee information (name, age, salary) 
// and returns an array with only the employees who earn a salary above 22000 and age is above 25.

// const employees = [
//     {name: "Abhay", age: 25, salary: 20000},
//     {name: "Joice", age: 30, salary: 35000},
//     {name: "Reena", age: 35, salary: 15000},
//     {name: "Jeena", age: 40, salary: 50000}
//   ];

//   const filterBySalary = (employees) => employees.filter(({age , salary}) => salary > 22000 && age > 25)


//   const filterEmployees = filterBySalary(employees , 22000 , 25 )
//   console.log(filterEmployees)




// 13.Write a function that takes an array and returns all the numbers in a new array increased by 10.

// const numArray = [1,2]
// const getNewArray = (numArray) => numArray.map(num => num + 10) 
// console.log(getNewArray(numArray))


// 14. Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.
// const myArray = [1,2]

// const evenOdd = myArray => myArray.map(arr => arr % 2 === 0 ? arr * 20 : arr * 30)

// console.log(evenOdd(myArray))

// 15.Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.
//   const array = [1,2,3,4,5,6]
//   const newArray = array => array.map((arr , index) => index % 2 === 0 ? arr - 2 : arr + 3)

//   console.log(newArray(array))

// 16. Write a function that takes the above object and returns a new array containing the company names.

// const obj = {
//     details: [{name: 'Ankit', company: 'Chalo'},
//           {name: 'Rohan', company: 'Razorpay'},
//         {name: 'Shivam', company: 'No Broker'}]
// }

// const getCompanyName = ({details}) => details.map(detail => detail.company)
// console.log(getCompanyName(obj))


// 17.Write a program using destructing to find a number in this object which is divisible both by 3 and 5
// const obj = {
//     a: 10,
//     b: 12,
//     arr : [10, 8, 15, 14]
  
// }

// const isDivisibleBy3And5 = ({a ,b ,arr}) => [a , b , ...arr].find(num => num % 3 === 0 && num % 5 === 0)
// console.log(isDivisibleBy3And5(obj))


// 18 . Write a function that takes the above object and returns a new array containing the company names for people having names starting with A.
// Output: ['Chalo']

// const obj = {
//     details: [{name: 'Ankit', company: 'Chalo'},
//                         {name: 'Rohan', company: 'Razorpay'},
//                         {name: 'Shivam', company: 'No Broker'}
//                          ]
// }
// const getCompanyName = ({details}) => {
//     const filterByName = details.filter(detail => detail.name[0] === "A")
//     const companyName = filterByName.map(name => name.company)
//     return companyName;
// }

// console.log(getCompanyName(obj))

// 19.Given an array of strings, write a program to return a new array containing only the strings that are palindromes.
// Input: ["racecar", "banana", "level", "apple"]
// Output: ["racecar", "level"]


//----------------------------------Functional Programming 2 ------------------------------------------------------------------------------//


// 1.Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

// const people = [
//     { name: 'Raj', age: 28 },
//     { name: 'Swapnil', age: 42 },
//     { name: 'Anushka', age: 35 }
//   ];


// const names = people.map(person => person.name)
// console.log(names)


// 2.Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.
// const numbers = [1, 2, 3, 4];

// const multiplyByFive = numbers.map(num => num * 5 ) 
// console.log(multiplyByFive)


// 3.Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.
// const employeeData = [
// 	{name: "ram", dept: "marketer"}, 
// 	{name: "Radha", dept: "SDE"},
// 	{name: "shyam", dept: "finance professional"},
// ]

// const greetEmployeeMessage = employeeData.map(employee => `Hi ${employee.name} we are glad to have you as a ${employee.dept}`)
// console.log(greetEmployeeMessage)



// 4.Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.

// const books = [
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
//     { title: '1984', author: 'George Orwell' },
//     { title: 'Pride and Prejudice', author: 'Jane Austen' },
//   ];


//   const getBooks = (books) => books.map(book => book.title)


//   const titles = getBooks(books)
//   console.log(titles)


// 5.Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

//  const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
//  const studentNames = studentName.filter(student => student[0] === "A")
//  console.log(studentNames)

// 6.Write an ES6 function which filters out the products which have a price greater than 40.

// const productData = [
//     {prodName: "Dairy Milk", price: 10},
//     {prodName: "Dairy Milk Silk", price: 70},
//     {prodName: "Five Star", price: 20},
//     {prodName: "Mars", price: 50}
// ]

// const getProducts = (productData ) =>  productData.filter(({price}) => price > 40)

// console.log(getProducts(productData))



// 7.Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.
// const numbers = [1, 2, 3, 21, 14, 7];

// const isDivisibleBy7 = numbers.find(num => num % 7 === 0)
// console.log(isDivisibleBy7)



// 8.Write an ES6 function that takes an array of strings and returns the first string that is longer than 8 characters.

// const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]

// const isGreaterThan8 = names => names.find(name => name.length > 8)
// console.log(isGreaterThan8(names))


// 9.Write an ES6 function that takes an array of objects representing students with properties name and grade. 
// Return the first student object that has a grade of "A".


// const students = [
//     { name: "John", grade: "B" },
//     { name: "Mary", grade: "A" },
//     { name: "Sam", grade: "C" },
//     { name: "Sarah", grade: "A" },
//   ];    

//   const studentWithGradeA = students => students.find(student => student.grade === "A")
//   console.log(studentWithGradeA(students))


// 10.Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. 
// Return the first student object that has a grade of "A" or they are a scholarship student.


// const students = [
//     { name: "John", grade: "B", scholarship: false },
//     { name: "Mary", grade: "B", scholarship: true },
//     { name: "Sam", grade: "A", scholarship: false },
//     { name: "Sarah", grade: "A", scholarship: true },
//   ];
// const firstStudent = (students) => students.find(student =>  student.grade === "A" || student.scholarship === true)

// console.log(firstStudent(students))




// 11.Write an ES6 function that takes an array of objects representing students with properties name and grade. 
// Return the first student object that has a grade of "B" and they are also a scholarship student.

// const students = [
//     { name: "John", grade: "B", scholarship: false },
//     { name: "Mary", grade: "A", scholarship: true },
//     { name: "Sam", grade: "A", scholarship: false },
//     { name: "Sarah", grade: "B", scholarship: true },
//   ];

  
// const firstStudent = (students) => students.find(student => student.grade === "B" && student.scholarship === true)
 

// console.log(firstStudent(students))



12.
