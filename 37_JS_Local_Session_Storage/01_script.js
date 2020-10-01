// Local Storage
let empName = 'John';

// Set
localStorage.setItem('name',empName);

// Get
console.log(localStorage.getItem('name'));

// Delete Key
localStorage.removeItem('name');

// Clear
localStorage.clear();

// Local Storage with an array
let colors = [{id:1, name:  'white'},
              {id: 2, name: 'black'},
              {id: 3, name: 'yellow'},
              {id: 4, name: 'gray'},];
localStorage.setItem('colors',JSON.stringify(colors));
console.log(localStorage.getItem('colors'));

// Convert
let theColors = JSON.parse(localStorage.getItem('colors'));
console.log(theColors);
