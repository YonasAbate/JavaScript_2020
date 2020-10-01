// JavaScript Event Listeners
      /*
      1. Get the HTML element / tag
      2. Attach an event to the element / tag
      3. Write a function for event handling 
      */
let wishMessage = (message, color , color2) => {
    let h1Tag = document.querySelector('#msg');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.textAlign = 'center';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px yellow';
};
// Good morning Button
let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click', function  () {
    wishMessage('Good Morning', 'limeGreen');
});
// Good Afternoon Button
let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click', function  () {
    wishMessage('Good Afternoon', 'orangeRed',);
});
// Good Evening Button
let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click', function  () {
    wishMessage('Good Evening', 'purple');
});
// Good Night Button
let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click', function  () {
    wishMessage('Good Night', 'black');
});
