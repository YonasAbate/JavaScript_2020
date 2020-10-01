let employees = [{id : 1, name : 'Johan', age : 34},
                 {id : 2, name : 'Molesses', age : 50}];

    // Create Employee
let createEmployee = (employee) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            employees.push(employee);
            let isDone = true;
            if(isDone){
                resolve();
            }
            else {
                reject('Employee Cration is Failed');
            }
        }, 2000);
    });
};

// Get Employee
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
// getEmployee();
createEmployee({id: 3, name: 'Bini', age: 30}).then(() => {
    getEmployees();
}).catch((err) => {
   console.error(err);
});