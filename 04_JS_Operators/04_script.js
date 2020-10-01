        // 1. Assignment operator =
let test = 10;
console.log(test);

        // 2. Arithmetic operators + - * /
let num1 = 12;
let num2 = 12;
let num = 2 * (num1 + num2);
console.log(num);

        // 3. find number is even or odd 
let number = 10;
if (number % 2 === 0){
    console.log(`${number} is an Even Number`);
}
else{
    console.log(`${number} is an odd Number`);
}

        // 4. Short hand math += , -= , *= , /=
let a = 20;
let b = 10;
add = 30;
// add = add + (a + b); or you can use ...
add += (a + b); 
console.log(add);

        // 5. Conditional operators < , > , <= , >= , !=
let marks = 50;
if( marks <= 35){
    console.log('You Failed the Exam');
}
else {
    console.log('You Cleared the Exam');  
}

        // 6. Unary Operator ++ , -- (pre , post)
let x = 10;
x = x - 1;
x += 1;
x++;
console.log(x);

    /* 7. Logical operators AND , OR 

          AND -> T  &&  T -> T
          OR  -> F  ||  F -> F
          XOR -> T  ^  T
                 F  ^  T -> T
                             */
let inRelation = true;
let parentsAgreed = true;
if (inRelation && parentsAgreed){
    console.log('Get Marry soon');
}
else{
    console.log('Wait until parents Agreed');
}

        // 8. String Concatenation Operator
        
        // 9. Ternary operator (? :)
// This is short line of code if else condition
// syntax : (condition) ? true : false;
yonas = 36;
let message = '';
(yonas <= 35) ? message = 'this is True !' : message = 'This is False !'
console.log(message);

       // 10. Type of operator
   // A. == operator
// Auto matic data type conversion
    a = 5;
    b = '5';
    if(a == b){  
        console.log('Both are equal');
    }
    else{
        console.log('Both are Not equal');
    }
    // B. === operator
    // Not conversion 
    a = 5;
    b = '5';
    if(a === b){  
        console.log('Both are equal');
    }
    else{
        console.log('Both are Not equal');
    }