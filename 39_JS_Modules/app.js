import { Employee } from './Employees/employee.js';
import { Customer } from './Customers/customer.js';

let employee = new Employee('Yonas', 'Abate', 27, 'Sr Manger');
    employee.greet();

let customer = new Customer('Tsion', 'Hailu', 21, 'Manager');
    customer.greet();
