import {Person} from '../Persons/person.js';

export class Customer extends Person {
    constructor(firstName, lastName, age, location) {
        super(firstName, lastName);
        this.age = age;
        this.location = location;
    }
    getAge() {
        return this.age;
    }
    getLocation() {
        return this.location;
    }
    greet() {
        let msg = `FIRST NAME :  ${this.getFirstName()} 
                   LAST NAME :  ${this.getLastName()}
                   AGE :         ${this.getAge()} 
                   LOCATION : ${this.getLocation()}`;
        console.log(msg);
    }
}