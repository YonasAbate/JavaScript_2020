/** javascript Function 
 -> its a block of statement which taken in a set parameters and 
    does some process and return the result.
 -> Re-usability
*/
// 1) Simple Functions
// 2) args functions,
// 3) return values,
// 4) function expressions,
// 5) functions as arguments,
// 6) functions inside an object,
// 7) Nested Objects with functions ,
// 8) default args,

function printNumber() {
  let result = '';
  for (let i = 0; i <= 5; i++) {
    result += `${i} `;
  }
  console.log(result);
}
printNumber(); // Function call / execution
printNumber();

// 
function printName(startNumber, endNumber, increment) {
  let result = '';
  for (let i = startNumber; i <= endNumber; i += increment) {
    result += `${i} `;
  }
  console.log(result);
}
printName(10, 30, 5); // Function call / execution

// Function with out parameters
function greet() {
  console.log('Good Morning');
}
greet();          // OR

// Function Expression 
let greedMe = function () {
  console.log('Good Morning');
}
greedMe();

// Function with Parameter
let wishMe = function (name, age) {
  let message = `Hello ${name} You are ${age} Years old`;
  console.log(message);
}
wishMe('Yoni', 26);

// Function with return Type || Cache value
let sum = function (a, b) {
  let result = 2 * (a + b);
  return result;
};
let outPut = sum(10, 25);
console.log(outPut);

// Function with an object as parameter
let printObject = function (obj) {
  console.log(obj);
}
printObject(obj = { name: 'Yoyo', age: 20 });

// Declare Function out side
let mobile = {
  brand: 'Apple',
  color: 'silver',
  price: 1200
};
printObject(mobile);

// Function with an array as parameter
let printArray = function (array) {
  let result = '';
  for (index in array) {
    result += `INDEX : ${index} -- VALUE : ${array[index]} \n`;
  }
  console.log(result);
};
printArray([10, 20, 30, 40]);

// Out side 
let colors = ['Red', 'Yellow', 'Green', 'Pink']
printArray(colors);

// Function inside an object
let student = {
  firstName: 'Tsion',
  lastName: 'Hailu',
  fullName: function () {
    return 'Tsion Hailu';
  }
};
console.log(student);
console.log(student.fullName());

// Nested Function   | Function inside function
let outerFn = function(){
  console.log('I am Outer Function');
  let innerFn = function(){
    console.log('I am inner Function');
  }
  innerFn();
};
outerFn();

// Twisted Function
let twistedFn =function(){
  let name = 'Yonas';
  let printStudent = function(){
    let student = {
      name : 'Admassie',
      age : 45,
      job : 'Teacher'
    };
    return student;
  };
  return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj);

// Prepare chicken curry with Function
let glassBowl = function(rawChicken, masala) {
    // Marinating the Chicken
    let marinatedChicken = `MIXING : ${rawChicken}`;
    return marinatedChicken;
};

let cookingBowl = function(marinatedChicken, water) {
    // cooking Logic
    let cookingChicken = `COOKING : (${marinatedChicken} + ${water}`;
    return cookingChicken;
};

let eatingPlate = function(cookedChicken, rice){
    // Eating Logic
    let eating = `EATING : ${cookedChicken} + ${rice})`;
    console.log(eating);
};

let rawChicken = '3Kg Chicken';
let masala = 'Garlic, Pepper, Salt';
let marinatedChicken = glassBowl(rawChicken, masala);
let water = '1L water';
let cookedChicken = cookingBowl(marinatedChicken, water);
let rice = '1Kg Rice';
eatingPlate(cookedChicken, rice);

    // You Should Know exactly 
// How to diff a function
// How to call a function
// How a function dependant other
// How to cate one function other function

// 