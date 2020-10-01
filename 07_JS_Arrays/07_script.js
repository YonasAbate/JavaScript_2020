    // 1. creation of arrays
// Every array is in object
let number = [10,20,30];
console.log(number);
     // Access the elements of an array
console.log(number[2]);
     // Access non-existing 
console.log(number[3]);
     // Iteration of array element
let colors = ['white','black', 'silver', 'blue', 'yellow'];

     // 2. A. Normal for-loop
for ( let i=0; i<= colors.length-1; i++){
    console.log(colors[i]);
}

    // B. for-in loop up to ES5
         // 'in ' You will get index
result = '';
for (let index in colors){
    result += `${[index]} ,`;
}
console.log(result);

   // 3.for-of loop from ES6
      // 'of'  you will get value
res = '';
for (let color of colors){
   res += `${color} 1 `;
} 
console.log(res);
     
   // 4.forEach function up to ES5
result = '';
colors.forEach(function(color){
    result += `${color} 2 `;
})
console.log(result);
 
   // 5. forEach with Arrow function from ES6
result = '';
colors.forEach(color => result += `${color} 3 `);
console.log(result);

// Array of Objects
let employees = [
    {
        id: 1,
        name: 'Tsion',
        age: 20,
        designation: 'Sin Manager',
        isActive: false
    },
    {
        id: 2,
        name: 'Yonas',
        age: 30,
        designation: 'Software Engineer',
        isActive: false
    },
    {
        id: 3,
        name: 'Wondwossen',
        age: 40,
        designation: 'Sr.Manager',
        isActive: true
    },
    {
        id: 4,
        name: 'Helene',
        age: 50,
        designation: 'Software Engineer',
        isActive: true
    }
];
       // Access all employees
console.log(employees);
       // Access employees of object
console.log(employees[1]);
       // Access employees name
console.log(employees[2].name);

       // Iterate employee
result = '';
for (let employee of employees){
     result += `${employee.name} `;
}
console.log(result);

      // Filter the junior Employees : age <= 30
      console.log('---------------push--------------');
let juniorEmployees = [];
for (let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees); 

       // OR
console.log('--------OR------Filter--------------');
let jrEmployees = employees.filter(function(employee) {
    return employee.age <= 30;
});
console.log(jrEmployees);

       // Filter active  : isActive : true
let activeEmployees = [];
for (let employee of employees){
    if(employee.isActive){
    activeEmployees.push(employee);  
    }
}
console.log(activeEmployees);
         // OR
    console.log('-------OR------isActive : true--------------'); 
    let actEmployees = employees.filter(function(employee){
        return employee.isActive;
    });
    console.log(actEmployees);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Function of Arrays
// Shift(), Remove the first element from array
console.log('-------------shift() ---------------');
let technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.shift();
// console.log(technologies);

// unShift(), Add the first element from array
console.log('-------------unshift() ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.unshift('node.js');
// console.log(technologies);

// push(), Add the last element to array
console.log('-------------Push() ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.push('node.js');
console.log(technologies);

// pop(), remove the last element from array
console.log('-------------pop() ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// sort(), to sort the array in ascending order
console.log('-------------sort() ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

// reverse(), reverse the array elements
console.log('-------------reverse() ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.reverse();
// technologies.sort().reverse;
console.log(technologies);

// Splice(index)  it remove all the element from the giving index 
console.log('-------------splice(2) ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

// Splice(index, no-of element) it remove the given no of element from the given element
console.log('-------------splice(1,2) ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(1,2);
console.log(technologies);

// Splice(index, 1 replace Element) it replace the given element at the given at a given index
console.log('-------------splice(2, 1, "value") ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
technologies.splice(1, 3, 'node.js');
console.log(technologies);

// join() to join the array elements to starting
console.log('-------------join() ---------------');
technologies = ['html', 'css', 'javascript', 'jquery', 'bootstrap'];
console.log(technologies);
let techString = technologies.join(' - ');
console.log(techString);

// split() to split string to an array
console.log('-------------split() ---------------');
console.log(techString);
let newTechs = techString.split(' - ');
console.log(newTechs);

// 
