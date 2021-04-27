/*1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/

var a = ["1", "21", undefined, "42", "1e+3", Infinity];

function arrayOfNumbers (a) {
    var transfArray = [];
    for(var i = 0; i<a.length; i++) {
        var currentVal = a[i];
        var isValid = isFinite(currentVal);
        if (isValid) {
            var number = parseFloat(currentVal);
            transfArray[transfArray.length] = number;
        }
    }
    return transfArray;
}


console.log(arrayOfNumbers(a));

/*2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false-2247”*/

var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function arrayValToString (a) {
    var stringOfArrEl = "";
    for(var i = 0; i<a.length; i++) {
        var currentVal = a[i];
        if(!isNaN(currentVal)) {
            stringOfArrEl += currentVal 
        }
    }
    return stringOfArrEl;

}

console.log(arrayValToString(a));

/* 3.	Write a program to filter out falsy values from the array.

Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]*/

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function arrOfTruuthyVal (a) {
    var arrWithTrVal = [];
    for(var i = 0; i< a.length; i++) {
        if(!!a[i]){
            arrWithTrVal[arrWithTrVal.length] = a[i];
        }
    }
    return arrWithTrVal;
}

console.log(arrOfTruuthyVal(a));


//sa pre-def f

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function arrOfTruuthyVal (a) {
    var arrWithTrVal = [];
    for(var i = 0; i<a.length; i++) {
        var currentVal = a[i];
        var num = parseInt(currentVal);
        if(!isNaN(num) && num !== 0) {
            arrWithTrVal[arrWithTrVal.length] = num;
        }
    }
    return arrWithTrVal;
}

console.log(arrOfTruuthyVal(a));

/* 4.	Write a program that calculates a number of integer values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3 */

var a =  [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function numOfInt (a) {
    var counter = 0;
    for(var i = 0; i<a.length; i++) {
        var currentVal = a[i];
        var num = parseFloat(currentVal); 
            if (!isNaN(num) && num % 1 === 0) {
                counter ++;
        }
    }
    return counter;
}

console.log(numOfInt(a));

// ili 

var a =  [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function numOfInt (a) {
    var counter = 0;
    for(var i = 0; i<a.length; i++) {
        var currentVal = a[i];
        if(Number.isInteger(currentVal)) {
            counter++;
        }
        
    }
    return counter;
}

console.log(numOfInt(a));

/*5.Write a program that calculates a number of float values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2 */

var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null, 11.3];

function floatNum (a) {
    var counter = 0;
    for(var i = 0; i<a.length; i++) {
        var num = parseFloat (a[i]);
        if(!isNaN(num) && num % 1 !== 0) {
            counter ++;
        }
    }
    return counter;
}

console.log(floatNum(a));


