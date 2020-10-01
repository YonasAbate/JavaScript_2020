/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/
// Javascript Object
let camera = {
  brand : 'Canon',
  price : 3500,
  color : 'Green',
  mgf : 2020
}
console.log(camera);

// Access the properties of object
console.log(camera.brand);

// Access the non-existing property  
console.log(camera.megaPixel); // undefined

// Access property using dot . , [] notation
console.log(camera.color); // OR
console.log(camera['color']);

// For dynamic properties dot , [] notation
// Dynamic property can only be access [] notation
let prop = 'mfg';
console.log(camera.prop);

// Nested Object
let student = {
  name : 'Yonas',
  age : 26,
  address : {
    street :'123 street',
    city : 'silver spring',
    state : 'Maryland'
  }
};
// Access Nested object
console.log(student.address);
// Access the properties of an object
console.log(student.address.street);
// CRUD Operations with an object

// Create Operation
let mobile = {};
mobile.brand = 'Apple';
mobile.color = 'Silver';
mobile.price = 3500
mobile.isInsured = false;
console.log(mobile);

// READ Operation
console.log(mobile.brand); // Apple

// Update Operation
console.log(mobile.price); // 3500
mobile.Price = 45000; // Capital 'P' is add new property
mobile.price = 24000; // Small 'P' is update property
console.log(mobile);

// Delete Operation
delete mobile.isInsured;
console.log(mobile);