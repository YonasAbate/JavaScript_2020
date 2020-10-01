// Math Table

let numberEl = document.querySelector("#req-number");
numberEl.addEventListener("keyup", () => {
    let myNumber = Number(numberEl.value);
    document.querySelector("#number").innerText = myNumber; 
    calculate();
});

let rangeEl = document.querySelector("#multiplier");
rangeEl.addEventListener("input", function () {
   let selectedMultiplier = Number(rangeEl.value);
   document.querySelector("#multi").innerText = selectedMultiplier;
   calculate();
});

// calculate
let calculate = () => {
    let theNumber = Number(document.querySelector('#number').innerText);
    let multiplier = Number(document.querySelector('#multi').innerText);
    let mathResult = theNumber * multiplier;
    document.querySelector('#result').innerText = mathResult;
};