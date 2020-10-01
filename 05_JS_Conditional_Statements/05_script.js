// 1. If Else condition Example
// Condition check line by line your answer is the last statement. 
let time = 10;
let wishMessage = '';
if (time <= 12){
    wishMessage = 'Good Morning';
}
else if (time > 12 && time <= 17) {
    wishMessage = ('Good Afternoon');
}
else if (time > 17 && time <= 23){
    wishMessage = ('Good Evening');
}
else {
    wishMessage = 'Enter a proper Time';
}
console.log(wishMessage);

// 2. For loop Example to display from 1 - 10 values

// 3. While loop Example to display from 1 - 10 values


// 4. Do while loop Example to display from 1 - 10 values


// 5. Switch Statement Example
      // It will not execute false statement
      // It will not execute one after the other
      // It will Directly Jup actual case the correct one.
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

