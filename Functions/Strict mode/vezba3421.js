/* 1.	Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false */

var input = "";

function inputIsString (x) {
    var string = false;
    if (typeof x === "string") {
        string = true;
    }
    return string;
}

console.log(inputIsString(input));

/* 2.	Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false */

var str = " ";


function blankString(str) {
    var blankStr = false;
    if(str === " ") {
        blankStr = true;
    }
    return blankStr;
}

console.log(blankString(str));

/* 3.	Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa" */

var str = "Ha";

function concatStr (str, n) {
    var newStr = "";
    if(n === 1) {
        newStr = str;
    } else if (n>1) {
        while(n>1) {
            newStr += str;
            n--;
        }   
    }
    
    return newStr;
}

console.log(concatStr(str, 1));

/* 4.	Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

var str = "Myg ragndom string";

function letterOccurences (str, n) {
    var counter = 0;
    for(var i = 0; i<str.length; i++) {
        if(str[i] === n) {
            counter ++;
        }
    }
    return counter;
}

console.log(letterOccurences(str, "g"));

/* 5.	Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1. */


var str = "proaba";

function occOfCharacter (str, a) {
    var position = -1;
    for(var i = 0; i<str.length; i++) {
        if(str[i] === a) {
            position = i;
            break;
        } 
    }
    return position;
}

console.log(occOfCharacter(str, "x"));

/* 6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */

var str = "proaba";

function occOfCharacter (str, a) {
    var position = -1;
    for(var i = 0; i<str.length; i++) {
        if(str[i] === a) {
            if (i + 1 === 1) {
                var addition = "st";
            } else if (i + 1 === 2) {
                addition = "nd";
            } else if (i + 1 === 3) {
                additionn = "rd";
            } else {
                addition = "th"
            }

            position = i + 1 + addition;
        } 
    }
    return position;
}

console.log(occOfCharacter(str, "a"));


/* 7.	Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"] */

var str = "My random string";

function arrayOfStrEl (str) {
    var array = [];
    for(var i = 0; i<str.length; i++) {
        var currentVal = str[i];
            if(currentVal === " ") {
                currentVal = null;
                array[array.length] = currentVal;
            } else {
            array[array.length] = currentVal;
            }
    }


    return array;
}


console.log(arrayOfStrEl(str));

/*8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */



function primeNo (x) {
    var primes = [2,3,5,7];
    var isPrime = false;
    if(x>1) {
        if(x>7) {
            if(x%2 !== 0 && x%3 !== 0 && x%5 !== 0 && x%7 !== 0) {
                isPrime = true;
            }
        } else {
            for(var i = 0; i<primes.length; i++) {
                if(primes[i] === x) {
                    isPrime = true;
                    break;
                }
            }
        }
    }
    return isPrime;
}

console.log(primeNo(17))



/* 9.	 Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string" */

    function replaceSpace (str, sign) {
        var newstr = "";
        for(var i = 0; i<str.length; i++) {
            var currentVal = str[i];   
            if(currentVal === " ") {
                switch(sign) {
                    case "_" : 
                        currentVal = "_";
                        break;
                    case "+" :
                        currentVal = "+";
                        break;
                    default: 
                        currentVal = "-";    
                        break;
                }
            } 
        newstr += currentVal; 
        }
        return newstr;
    }

console.log(replaceSpace("My random string", "+"));


/* 10.	 Write a function to get the first n characters and add “...” at the end of newly created string. */

function dottedString (str, n) {
    var dottedStr = "";
    for(var i = 0; i<n; i++) {
        dottedStr += str[i];
    }
    return dottedStr + "...";
} 

console.log(dottedString("Dragana", 5));


/* 11.	 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */

function arrOfNum (a) {
    var newArr = [];
    for(var i = 0; i<a.length; i++) {
        var currentVal = a[i];
        var num = parseFloat(currentVal);
        if(isNaN(num) || !isFinite(num)) {
            continue;
        } else {
            newArr[newArr.length] = num;
        }
    }
    return newArr;
}


console.log(arrOfNum(["1", "21", undefined, "42", "1e+3", Infinity]));

/* 12.	 Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed. */

function retirement (currentYear, age, fmn) {
    var result;
    var yearsOfPerson = currentYear - age;
    if(fmn === "man") {
        if(yearsOfPerson > 65) {
            result = "This person is already in retirement."
        } else {
            result = 65 - yearsOfPerson;
        }
    } else if (fmn === "women") {
        if(yearsOfPerson > 60) {
            result = "This person is already in retirement."
        } else {
            result = 60 - yearsOfPerson;
        }
    }
    return result;
}

console.log(retirement(2021, 1983, "women"));

/* 13.	Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th */


function humNum(x) {
    var humNum = "";
    if(x>0) {
        switch(x) {
            case 1:
                humNum = x + "st";
                break;
            case 2: 
                humNum = x + "nd";
                break;
            case 3:
                humNum = x + "rd";
                break;
            default :
                humNum = x + "th";        
        }
    } else {
        humNum = "Please enter number that is greater than 0";
    }    
    return humNum;
}

console.log(humNum(5));

/*
"Find a litle brown fox and one black fox" "fox"
*/
function findString(value, find){
    var current = "";
    var counter = 0;
    for(var i = 0; i < value.length; i++){
        if(value[i] !== " "){
            current += value[i];

            if(i === value.length - 1 && current === find){
                counter++;
            }
        }
        else {
            if(current === find){
                counter++;
            }
            current = "";
        }
    }

    return "In string '" + value + "' [" + find + "] appear(s) " + counter + " time(s)";
}

console.log(findString("Find a litle brown fox and one black fox", "black"));


