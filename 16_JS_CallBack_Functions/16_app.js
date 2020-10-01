//  // Callback function
// let sum = (a, b) => {
//     return a + b;
// };

// let mul = (a, b) => {
//     return a * b;
// };

// let calculate = (a, b, callback) => {
//     let result = '';
//     return callback(a, b);  // sam(a, b)
// };
// let output = calculate(10, 20, sum);
// console.log(output);

// output = calculate(10, 20, mul);
// console.log(output);

// output = calculate(10, 20, (a, b) => {
//     return a - b;
// });
// console.log(output);

// Callback
let employees = [{id : 1, name : 'Yoni', age : 26},
                 {id : 2, name : 'Tsion', age : 21}];

let createEmployee = (employee, callback) => {
    setTimeout(() => {
        employees.push(employee);
        callback();
    }, 2000);
};

let getEmployees = () => {
    setTimeout(() => {
      let employeeRows = '';
      employees.forEach((employee) => {
          employeeRows += `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                          </tr>`;
      });
      document.querySelector('#table-body').innerHTML = employeeRows;
    }, 1000);
};

createEmployee({id : 3, name : 'Wonde', age : 28}, getEmployees);
