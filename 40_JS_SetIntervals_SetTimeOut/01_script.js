// SetInterval, setTimeout,  clearInterval
let count = 0;
let interval = 0;
let greet = () => {
    count++;
    console.log(`Hello Welcome to JS : ${count}`);
    console.log(new Date().toLocaleDateString());
};
interval = setInterval(greet, 1000);

console.log(new Date().toLocaleDateString());
setTimeout(() => {
    clearInterval(interval);
}, 5000);

