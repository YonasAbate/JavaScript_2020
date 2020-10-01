// find the number of ')' in the given string?
let msg = 'Good Morning';
let findZeros = (str) => {
    let count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        let x = str.charAt(i);
        if (x === 'o' || x === 'O') {
            count++;
        }
    }
    return count;
};
console.log(`The Zeros in strings is : ${findZeros(msg)}`);

// find the revers string of the given string
msg = 'Good Morning'; // gninroM dooG
let reverseString = (str) => {
    let tempString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        let y = str.charAt(i);
        tempString += y;
    }
    return tempString;
};
console.log(`${msg} -> ${reverseString(msg)}`);

// check the given string is palindrome or not
msg ='ABA';
let isPalindrome = (str) => {
    return (str === reverseString(msg));
};
console.log(`${msg} is Palindrome ? ${isPalindrome(msg)}`);