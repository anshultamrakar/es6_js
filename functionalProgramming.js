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

//   console.log(filterByAge(people))

// 9.Write an ES6 function that takes an array of objects with the properties 
// name and score, and returns an array with only the objects that have a score greater than 80.

// const students = [
//     { name: 'Aditya', score: 85 },
//     { name: 'Bob', score: 75 },
//     { name: 'Charlie', score: 90 }
//   ];

//   const filterByScore = (students) => students.filter(student => student.score > 80) 
 

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


// ----------------------------------Functional Programming 2 ------------------------------------------------------------------------------//




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

// const isGreaterThan8 = names => names.find(({length}) => length > 8)
// console.log(isGreaterThan8(names))


// 9.Write an ES6 function that takes an array of objects representing students with properties name and grade. 
// Return the first student object that has a grade of "A".


// const students = [
//     { name: "John", grade: "B" },
//     { name: "Mary", grade: "A" },
//     { name: "Sam", grade: "C" },
//     { name: "Sarah", grade: "A" },
//   ];    

//   const studentWithGradeA = students => students.find(({grade}) => grade === "A")
//   console.log(studentWithGradeA(students))


// 10.Write an ES6 function that takes an array of objects representing students with properties name, grade and scholarship. 
// Return the first student object that has a grade of "A" or they are a scholarship student.


// const students = [
//     { name: "John", grade: "B", scholarship: false },
//     { name: "Mary", grade: "B", scholarship: true },
//     { name: "Sam", grade: "A", scholarship: false },
//     { name: "Sarah", grade: "A", scholarship: true },
//   ];
// const firstStudent = (students) => students.find(({grade , scholarship}) =>  grade === "A" || scholarship === true)

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


// 12.Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and 
// returns an array with only the movie titles that were made before 1990 and has a rating above 8.0. (Question Level: tough)


// const bollywoodMovies = [
//     { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
//     { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
//     { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
//     { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
//     { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
//     { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
//     { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
//   ];

//   const getMovies = (bollywoodMovies) =>{
//     const filterMovies =  bollywoodMovies.filter(({year , rating}) =>  year <1990 && rating > 8.0)
//     const movieTitle = filterMovies.map(({title}) => title)
//     return movieTitle;
//   }

//   console.log(getMovies(bollywoodMovies))


// Reduce Function -------------------------------------------------------------------------------------------------------------------------

// const array = [1,2,3,4,5,6,7,8]

// Given the Array of numbers return an object for each items

// Given the array of numbers calculate the sum
//  const sumOfArray = (array) => array.reduce((acc , value) => acc + value)
//  console.log(sumOfArray(array))

// const sumArray = array.reduce((acc , currValue) => acc + currValue)
// console.log(sumArray)

// const getSum = array.reduce((acc , currVal) => acc + currVal)
// console.log(getSum)


// write a function which can tell whether anumber is less than 10 or not. Supply this function to Array.filter() to get an array
// with no 10s in


// const arr = [2,3,4,5,12,15]

// const islessThan10 = num => num > 10 
// const newArray = arr => arr.filter(islessThan10)
// console.log(newArray(arr))

// Find the sum of all odd numbers 
//  const myArray = [2,3,4,5,6,7,8]


// const sumOfEven = myArray => myArray.reduce((acc , value) => value % 2 !== 0 ? acc + value : acc , 0)

// console.log(sumOfEven(myArray))

// Find the sum of all number at odd indices
//   const oddIndices = myArray => myArray.reduce((acc , value, currIndex) => acc[currIndex] % 2 !== 0 ? acc + value : acc , 0)
//   console.log(oddIndices(myArray))

// Find the biggest number in an array 

// const myArray = [2,4,5,6,7,8, 18,1]

// const getBiggestNum = myArray => myArray.reduce((acc , value) => acc < value ? value : acc , 0)
// console.log(getBiggestNum(myArray))
// Find the number divisible by 10

// Return a array of numbers where odd numbers are incremented by one and even numbers are decremented by one

// Return an object with sum of odd numbers and even numbers seperately



// Given the array of string

// Find the number of string with similar number of character

// output : {5 : 3 , 6 : 1}

// Return the array with string which have vowels
// Return an array of objects with key as an items and value as numbers of character in string 


// "----------------------------------------------------------------------------------------------------------------------------------------------"


// Practice Questions --- Neog questions
// Given an array of numbers, write a function that returns the sum of all the even numbers.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const isEven = (acc , value ) => value % 2 === 0 ? acc + value : acc
// const sumOfEvenNumbers = numbers => numbers.reduce(isEven,0)
// console.log(sumOfEvenNumbers(numbers))


// Given an array of strings, write a function that returns the total number of characters in all the strings that start with the letter "A".

// const strings = ['Apple', 'Aardvark', 'Banana', 'Cat'];
// Output: 13

// const getTotalNumCharacter = (strings) => strings.reduce((acc , val) => val[0] === "A" ? (acc + val).length : acc) 

// console.log(getTotalNumCharacter(strings))



// Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array.
// const numbers = [1, 2, 3, 4, 5];
// Output: 153

// const getCubesSum = (numbers) => numbers.reduce((acc , val) => val % 2 !== 0 ? acc + (val * val * val) : acc , 0)
// console.log(getCubesSum(numbers))


// Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
//  const arr = [2,4,5,7,9,17,34,65,90]
// Output = [2, 4]

// const getNewArr = (arr) => arr.filter(newArr => newArr < 8 && newArr % 2 === 0 )
// console.log(getNewArr(arr))





// Given an array of objects representing students, where each object has a name property and a grades property 
// (an array of numbers), write a function that returns an array of objects representing the students who have an average grade of at least 90.

// const students = [
//   { name: 'Alice', grades: [90, 95, 92] },
//   { name: 'Bob', grades: [80, 85, 87] },
//   { name: 'Charlie', grades: [92, 88, 94] },
//   { name: 'David', grades: [75, 80, 82] },
// ];


// Output: [{ name: 'Alice', averageGrade: 92.33333333333333 }, { name: 'Charlie', averageGrade: 91.33333333333333 }]


// const calculateAvg = grades => grades.reduce((acc , val) => acc + val , 0)/grades.length

// const findStudentAvg = students => students.map(({name , grades}) => ({name , averageGrade : calculateAvg(grades)}))
// .filter(({averageGrade}) => averageGrade > 90)

// console.log(findStudentAvg(students))       






// Functional Programming Set 3 --------------------------------------------------------------------------------------------------------

// 1. Write an ES6 function that takes an array of objects representing cars with properties make, model, and year.
// Return the first car object that is a Toyota and the year is after 2010.

// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Toyota", model: "Camry", year: 2015 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];

// const findToyotaCar = (cars) => cars.filter(({make , year}) => make === "Toyota" && year > 2010)
// console.log(findToyotaCar(cars))



// 2.Write an ES6 function that takes an array of objects containing car information (make, model, year) 
// and returns an array with only the cars that were made after the year 2012

// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Toyota", model: "Camry", year: 2015 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];

// const getCarDetails = cars => cars.filter(car => car.year > 2012)
// const getCars = getCarDetails(cars)
// console.log(getCars)

// 3.Write an ES6 function that takes an array of objects representing products with properties name, price, and category. 
// Return the first product object that is in the category "electronics".

// const products = [
//   { name: "Toothbrush", price: 29, category: "health" },
//   { name: "Coffee Maker", price: 99, category: "home" },
// 	{ name: "iPad", price: 799, category: "electronics" },
//   { name: "Smartwatch", price: 199, category: "electronics" },
// ];


// const findElectronicsProduct = products => products.find(product => product.category === "electronics")

// const electronicsProduct = findElectronicsProduct(products)

// console.log(electronicsProduct)


// 4 .Write an ES6 function that takes an array of objects representing products with properties name, price and category. 
// Return all the products object that are in the category "electronics".

// const products = [
//   { name: "Toothbrush", price: 29, category: "health" },
//   { name: "Coffee Maker", price: 99, category: "home" },
// 	 { name: "iPad", price: 799, category: "electronics" },
//   { name: "Smartwatch", price: 199, category: "electronics" },
// ];

// const getAllElectronicsProducts = products => products.filter(product => product.category === "electronics")
// const electronicProducts = getAllElectronicsProducts(products)
// console.log(electronicProducts)

// 5. Write an ES6 function that takes an array of objects containing student information (name, age, grade) and 
// returns an array with only the students who have a grade above a certain value.

// const students = [
//   { name: "Alice", age: 16, grade: 90 },
//   { name: "Bob", age: 17, grade: 80 },
//   { name: "Charlie", age: 15, grade: 95 },
//   { name: "David", age: 16, grade: 85 },
// ];


// const filterStudentByGrade = (students, grade) =>  students.filter(student => student.grade >  grade)

// const highGradeStudents = filterStudentByGrade(students , 85)
// console.log(highGradeStudents)


// 6.Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount.
//  Return the first book object that has more than 500 pages.

// const books = [
//   { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
//   { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
//   { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
// ];

// const findBookWithMoreThan500Pages = books => books.find(book => book.pageCount > 500)

// const bookWithMoreThan500Pages  = findBookWithMoreThan500Pages(books)
// console.log(bookWithMoreThan500Pages)


// 7.Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and 
// returns an array with only the customers who are of gender Male.

// const customers = [
//   { name: 'John', age: 25, gender: 'Male' },
//   { name: 'Jane', age: 30, gender: 'Female' },
//   { name: 'Bob', age: 40, gender: 'Male' },
//   { name: 'Alice', age: 35, gender: 'Female' },
// ];

// const getMaleCustomer = (customers) => customers.filter(customer => customer.gender === "Male")
// const maleCustomers = getMaleCustomer(customers)
// console.log(maleCustomers)


// 8.Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and 
// returns an array with all the games of a certain genre.

// const games = [
//   {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
//   {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
//   {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
//   {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
// ];

// const filterByGenre = (games, genre)  => games.filter(game => game.genre === genre)
// const filteredGames = filterByGenre(games, "RPG");
// console.log(filteredGames)

// 9.Write an ES6 function that takes an array of objects containing car information (make, model, year) and 
// returns an array with only the car model that were made after the year 2012.


// const cars = [
//   { make: "Toyota", model: "Corolla", year: 2010 },
//   { make: "Honda", model: "Civic", year: 2012 },
//   { make: "Toyota", model: "Camry", year: 2015 },
//   { make: "Ford", model: "Mustang", year: 2018 },
// ];

// const getCarModal = cars => cars.filter(car => car.year > 2012).map(car => car.model)

// const carModals = getCarModal(cars)

// console.log(carModals)


// 10.Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. 
// Return the all book titles that have more than 700 pages.

// const books = [
//   { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
//   { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
//   { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
// ];


// const getTitlesWithMoreThan500Pages = (books) => books.filter(book => book.pageCount > 700).map(book => book.title)
// const booksWithMoreThan500Pages = getTitlesWithMoreThan500Pages(books)
// console.log(booksWithMoreThan500Pages)


// 11.Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using 
// the reduce function.

// const numbers = [12, 23, 4, 2, 11, 21] 

// const sumOfEvenNumbers = numbers => numbers.reduce((acc , value) => value % 2 === 0 ? acc + value : acc)

// console.log(sumOfEvenNumbers(numbers))


// 12.Write an ES6 function that takes an array of objects representing students with properties name and score, and 
// returns the average score of all the students using the reduce function.

// const students = [
//   { name: 'John', score: 80 },
//   { name: 'Jane', score: 90 },
//   { name: 'Bob', score: 75 },
//   { name: 'Alice', score: 85 },
// ];

// const getAverageScore = students => students.map(student => student.score).reduce((acc , value) => acc + value)
// console.log(getAverageScore(students))

// const getAverageScore = students => students.reduce((acc  , value) => value.score ? acc + value.score : acc , 0)
// console.log(getAverageScore(students))


// 13. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and 
// returns the total cost of all the products using the reduce function.

// const products = [
//     { name: 'Shirt', price: 20, quantity: 2 },
//     { name: 'Pants', price: 30, quantity: 1 },
//     { name: 'Shoes', price: 50, quantity: 1 },
//     { name: 'Hat', price: 10, quantity: 3 },
//   ];

// const getTotalCost = products => products.reduce((acc , {price , quantity}) =>  (price * quantity) ? acc + (price * quantity) : acc ,0 )

// console.log(getTotalCost(products))



// 14.Write an ES6 function that takes an array of strings and returns a single string 
// that is the concatenation of all the strings using the reduce function.

// const strings = ['Hello', ' ', 'world', '!'];


// const concatenateString = strings => strings.reduce((acc , value) => acc + value)
// console.log(concatenateString(strings))


// 15.Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.

//  const numbers = [10, 5, 8, 3, 6 , 1 ];

// const getMinimumNumber = numbers => numbers.reduce((acc , value) => value < acc ? value : acc )
// console.log(getMinimumNumber(numbers))



// ---------------------Functional programming set 4 -------------------------------------------------------------------


// 1.Given an array, write an ES6 function that returns the total length of all the strings in an array.

// const strings = ["apple", "banana", "cherry", "date", "blueberry"];

// const totalStrings = strings => strings.reduce((acc  , value) => acc + value.length , 0 )
// console.log(totalStrings(strings))


// 2.Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
// const numbers = [1, 2, 3, 4, 5];
// const sumSquares = numbers => numbers.reduce((acc , value) =>  acc + value * value,0)
// console.log(sumSquares(numbers))

// 3.Write an ES6 function that calculates and returns the total value of all items in an array of objects.

// const items = [
//     { name: "Item 1", price: 10 },
//     { name: "Item 2", price: 20 },
//     { name: "Item 3", price: 30 }
//   ];

//   const totalValue = (items) => items.reduce((acc , value) => acc + value.price , 0)
//   console.log(totalValue(items))



// 4.Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// const strings = ['this', 'is', 'fun']

// const concatinateString = strings => strings.reduce((acc , value) => acc + value)
// console.log(concatinateString(strings))


// 5.Write an ES6 function to multiply and return all the elements of a given array.

//  const numbers = [1, 2, 3, 4, 5];

// const products = numbers => numbers.reduce((acc , value) => acc * value)
// console.log(products(numbers))



// 6.Write an ES6 function that takes an array of strings and returns the longest string.

// const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome" ];


// const concatenateString = (strings) =>  strings.reduce((acc , value) => acc.length < value.length ? value : acc )
// console.log(concatenateString(strings))


// 7.Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.


// const people = [
//     {name: 'Jeena', age: 25}, 
//     {name: 'Priya', age: 30}, 
//     {name: 'Naina', age: 45}
// ]

// const oldestPersonName = people => people.reduce((acc , value) => acc > value.age ?  acc : value.name )
// console.log(oldestPersonName(people))


// 8.Write an ES6 function that takes an array of objects representing people with 
// properties name and age, and returns an object with the average age of all the people

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
//   ];



// 9.Write an ES6 function that takes an array of objects representing products with 
// properties name, price, and quantity, and returns an object with the most expensive product.

// const products = [
//     { name: "Bread", price: 10, quantity: 2 },
//     { name: "Clips", price: 20, quantity: 5 },
//     { name: "Knife", price: 30, quantity: 1 },
//     { name: "Slipper", price: 40, quantity: 3 }
//   ];

// const findMostExpensiveProduct = (products) => products.reduce((acc , value) => acc < value.price ? acc : value)
// console.log(findMostExpensiveProduct(products))



// 10. Write an ES6 function that takes an array of strings and returns an object with the count of each string.

// const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// output {'apple' : '3 , banana : '2' , cherry : '1' }
// const input = ["apple", "banana", "mango", "papaya"]
// {5 : 3 , 6 : 1}


// const countStrings = fruits => fruits.reduce((acc , value) => (acc[value] = acc[value]+1 || 1 , acc), {})
// const countStrings = fruits => fruits.reduce((acc , value) => (acc[value] = acc[value] + 1 || 1 , acc),{})

// console.log(countStrings(fruits))




// More questions on reduce method //

// const books = [
//     { title: 'The Alchemist', author: 'Paulo Coelho', pages: 197 },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
//   ]
//  const totalPage = (acc , value) =>  acc + value.pages
 
//  const getTotalPages = books => books.reduce(totalPage , 0)
//  console.log(getTotalPages(books))


// const friends = [
//     { name: "Joey", books: ["Bible", "Harry Potter"], age: 18 },
//     { name: "Monica", books: ["War and peace", "Romeo and Juliet"], age: 19 },
//     { name: "Ross", books: ["The Lord of the Rings", "The Shining"], age: 20 }
//   ];

// const getBooksArray = friends => friends.reduce((acc , value) =>  [...acc ,  ...value.books], [])
// console.log(getBooksArray(friends))


// Write a function that uses `reduce` to find the user who has the most number of friends.
// const users = [
//   { id: 1, name: 'Alice', friends: ["Bob", "Charlie", "David"] },
//   { id: 2, name: 'Bob', friends: ["Alice", "Charlie", "Eve"] },
//   { id: 3, name: 'Charlie', friends: ["Alice", "Bob", "David", "Eve"] },
//   { id: 4, name: 'David', friends: ["Alice", "Charlie"] },
//   { id: 5, name: 'Eve', friends: ["Bob", "Charlie"] },
// ];


// const getMostFriends = users => users.reduce((acc , value) =>  acc.friends.length <  value.friends.length ? value : acc).name
// console.log(getMostFriends(users))


// Write a function that uses reduce to calculate the total revenue generated by the store from all the orders. 
// Assume that the revenue from each order is the sum of the prices of all the items in the order.

const orders = [
  { id: 1, items: [{ name: 'book', price: 10 }, { name: 'pen', price: 2 }] },
  { id: 2, items: [{ name: 'shirt', price: 20 }, { name: 'pants', price: 30 }] },
  { id: 3, items: [{ name: 'hat', price: 15 }, { name: 'socks', price: 5 }] },
];

const calculateRevenue = orders => orders.reduce((acc , value) => value.items.price)
console.log(calculateRevenue(orders))
















