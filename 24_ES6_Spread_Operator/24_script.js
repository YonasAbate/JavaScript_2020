// ... dot is Spread Operator ES^
let numbers = [10,11,34,29,33.67,30,56.43,1];
let min = Math.min(...numbers);
console.log(min);

// Marge 2 array
let array1 = ['white','red','yellow','silver'];
let array2 = ['green','orange','white','gray','blue'];
let colors = [...array1, ...array2];
console.log(colors);

