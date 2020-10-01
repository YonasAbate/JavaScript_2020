/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */
// Math PI

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`Sqrt of 144 is : ${sqrt} `);

// find the 'min' of 4 numbers
let v = Math.min(12,20,25,34,42,18,22,5,50,55,110);
console.log(`Min is : ${v}` );

// find the 'Max' of 4 numbers
let w = Math.max(12,20,25,34,42,18,22,5,50,55,110);
console.log(`Max is : ${w} `);

// 'pow' find the 'x' to the power of 'y' value, ex: 2^4
let x = Math.pow(2, 5);
console.log(`2 ^ of 5 is : ${x} `);

// generate the 'random' numbers from 0 to 100
let y = Math.random();
console.log(y);
// random round
z = Math.round(Math.random() * 1000);
console.log(z);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */
// get today's date
let date = new Date();
console.log(date);

// Get proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// get full day of the week using switch statement
let day = new Date().getDate();
let today = '';
day = 0;
switch(day) {
    case 0:
        today = 'Sunday';
        break;
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Tuesday';
        break;
    case 3:
        today = 'Wednesday';
        break;
    case 4:
        today = 'Friday';
        break;
    case 5:
        today = 'Saturday';
        break;
    case 6:
        today = 'Tuesday';
        break;
    default:
        today = 'Enter Proper Day';
        break;
}
console.log(`Today is : ${today}`);

// Display a Digital Clock on the web page
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// Get Month
let currentMonth = new Date().getMonth();
console.log(currentMonth);

// Custom Date
let c_date = new Date().getDate();
let c_month = new Date().getMonth();
let c_year = new Date().getFullYear();
console.log(`${c_date}-${c_month}-${c_year}`);

/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
