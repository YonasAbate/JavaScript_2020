// Child Class
import { Person } from '../Persons/person.js';

export class Employee extends Person {
    constructor(firstName, lastName, age, designation) {
        super(firstName, lastName);
        this.age = age;
        this.designation = designation;
    }
    getAge() {
        return this.age;
    }
    getDesignation() {
        return this.designation;
    }
    greet() {
        let msg = `FIRST NAME :  ${this.getFirstName()} 
                   LAST NAME :   ${this.getLastName()}
                   AGE :         ${this.getAge()} 
                   DESIGNATION : ${this.getDesignation()}`;
        console.log(msg);
    }
}
