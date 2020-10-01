/** Arrow Function
        1) Normal function
        2) Function Expression
        3) Arrow Function
*/
let result = '';
function printNameNF() {
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
}
result = printNameNF();
console.log(result);

// Function Expression
let printNameNE = function(){
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
};
result = printNameNE();
console.log(result);

// Arrow Function
let printNameAF = ()  => {
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
};
result = printNameAF();
console.log(result);

// Usage of Arrow Function
