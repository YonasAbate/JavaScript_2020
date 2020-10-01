// For loop Example to display from 1 - 10 values

// for ( initialization;Condition;increment/decrement){
//     // Statements
// }
// 1. Print values for 0 - 3 diff by 1      
for (let i = 0; i <= 3; i++) {
    console.log(i);
}

// 2. all values one line
        let respond = '';
        for (let i = 0; i <= 3; i++) {
            // result = result + i;
            respond += `${i} ,`
        }
        console.log(respond);
// 3. Remove coma after 3 
let result = '';
for (let i = 0; i <= 3; i++) {
    if (i <= 2) {
        result += `${i} ,`
    }
    else {
        result += `${i} `
    }
}
console.log(result);
// 4 .Print stars 
/*
        *
        * *
        * * *
        * * * *
        * * * * *
*/
let num1 = 5;
result = '';
for (let i=1; i<=num1; i++){
    for (let j=1; j<=i; j++){
        result += `* `;
    }
    result += `\n`;
}
console.log(result);
// 5. print numbers
/**
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
 */
let num2 = 5;
result = '';
for (let i=1; i<=5; i++){
    for (let j=1; j<=i; j++){
        result += `${j} `;
    }
    result += `\n`;
}
console.log(result);
  
     // While Loop Example

/* initialization;
while(condition){
    statement
    increment / decrement (always last line)
}
*/
//  Print the value from 0 - 4 diff 1
let whi = '';
let i = 0;
while(i <= 4){
   if(i <= 3){
    whi += `${i} ,`;
   }
   else {
    whi += `${i} `;
   }
    i++;
}
console.log(whi);

// Do Loop Example
/*
initialization;
do{
    Statement
    increment / decrement (always last line )
}
while(condition);
*/
let res = '';
let f = 1;
do{
    res += `${f} ,`;
    f++;
}
while(f <= 5);
console.log(res);


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

// for-in loop ES5 you get index
result = '';
for( let index in employees){
    let employee = employees[index];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// for-of loop ES6  you get value
result = '';
for( let employee of employees){
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// For each Function ES5
result = '';
employee.array.forEach(function(employee) {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

// For each Function with arrow ES6
result = '';
employee.array.forEach(employee => {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);
