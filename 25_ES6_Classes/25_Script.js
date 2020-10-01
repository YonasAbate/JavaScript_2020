// OOP 
// Class based Object
// Class is a blue print  or Design
// let mobile = {
//     brand: 'Apple',
//     price: 3500,
//     color:'Silver'
// };
// console.log(mobile);

class Mobile {
    constructor(brand, price, color) {
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getPrice() {
        return this.price;
    }
    // Change Price
    setPrice(price) {
        this.price = price;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    printSpecification() {
        let spec = `BRAND : ${this.getBrand()}
                   PRICE : ${this.getPrice()}
                   COLOR : ${this.getColor()}`;
        console.log(spec);
    }
}
let mobile = new Mobile('Apple', 3500, 'Silver');
mobile.printSpecification();
//change price
mobile.setPrice(45000);
mobile.printSpecification();

// Sub class and Method over write, of javascript 
// Parent Class
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    greet() {
        let msg = `Welcome Mr: ${this.getFirstName()} ${this.getLastName()}`;
        console.log(msg);
    }
}
// Child Class
console.log('------Method Over write Concept-------');
class Employee extends Person {
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
                   LAST NAME :  ${this.getLastName()}
                   AGE :         ${this.getAge()} 
                   DESIGNATION : ${this.getDesignation()}`;
        console.log(msg);
    }
}
let employee = new Employee('yonas', 'Abate', 27, 'Manager');
employee.greet();


console.log('----------Adding Object--------');
class Customer extends Person {
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
let customer = new Customer('Tsion', 'Hailu', 21, 'Maryland');
customer.greet();