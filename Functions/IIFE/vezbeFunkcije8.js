//IIFE = Immediately Invoked Function Expressions

/* 1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4] */

    var replaceEl = (function (a) {
        var temp = a[0];
        a[0] = a[a.length-1];
        a[a.length-1] = temp;
        return a;
    })([4, 5, 11, 9]);

    console.log(replaceEl);

/* 2.	Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 */

var surfaceArea = (function (a, b) {
    return a*b;    
})(4, 5);

console.log(surfaceArea);

/* 3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
Input: prograMming
Output: progra**ing, 2 */

var replaceM = (function (str) {
    var strWithoutM = "";
    var counter = 0;
    for(var i = 0; i<str.length; i++) {
        var currentChar = str[i];
        if(currentChar === "m" || currentChar === "M") {
            currentChar = "*";
            counter++;
            strWithoutM += currentChar; 
        } else {
            strWithoutM += currentChar;
        }
    }
    return [strWithoutM, counter];
})("prograMming");

console.log(replaceM);

/* 4.	Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
Output: pera.peric@gmail.com */

var suggestOfEmail = (function (name, surname) {
    return name + "." + surname + "@gmail.com";
})("pera", "peric");

console.log(suggestOfEmail);

/* 5.	Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28 */

var decOfOctal = (function (x) {
    var decOfOctal = parseInt(x, 10);
    return decOfOctal;    
})(034);

console.log(decOfOctal);

/* 6.	Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

Input: JSGuru123
Output: Your password is cool! */


function successCallback () {
    console.log("Your password is cool!");
}

function errorCallback() {
    console.log("Your password is invalid!");
}

function validation(password, error, confirmation) {
    var dig = 0;
    for(var i = 0; i<password.length; i++) {
        var parseCharacter = parseInt(password[i]);
        if(!isNaN(parseCharacter)) {
            dig = password[i];
        }
       
    }
    if(password.length > 6 && dig > 0) {
        confirmation();
    } else {
        error();
    }
 
}

console.log(validation("JSGuru123", errorCallback, successCallback));

/* 7.	Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/

function oddNumber(x) {
    var odd = false;
    if(x%2 !== 0) {
        odd = true;
    }
   
    return odd;
}

function oddEl(a, oddF) {
    var arrOfOddEl = [];
    for(var i = 0; i<a.length; i++) {
        if(oddF(a[i])) {
            arrOfOddEl[arrOfOddEl.length] = a[i];
        }
    }
    return arrOfOddEl;
}

console.log(oddEl([2, 8, 11, 4, 9, 3, 13, 88, 97, 90], oddNumber));

