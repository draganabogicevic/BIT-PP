/* 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string" */

function randomStr (str1,str2, x) {
    var currentStr = "";
    var finStr = "";
    if(x === undefined) {
        finStr = str2 + " " + str1;
    } else {
            for(var i = 0; i<str1.length; i++) {
                var currentCharacter = str1[i];
                if(i === x) {
                    currentCharacter = " " + str2 + " " + currentCharacter;
                    currentStr += currentCharacter; 
                } else {
                    currentStr += currentCharacter; 
                    finStr = currentStr;
                }
            }
    }

    return finStr;
   
}


console.log(randomStr("My random string", "JS", 5));


/* 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null] */

function arrToStr (a) {
    var finStr = "";
    for(var i = 0; i<a.length; i++) {
        var num = parseInt(a[i]);
        if(!isNaN(num)){
            finStr +=num;
        }
    }
    return finStr;
} 


console.log(arrToStr([NaN, 0, 15, false, -22, '', undefined, 47, null] ));


/*3.	Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */

function arrWithoutFalsyEl (a) {
    var truthyArr = [];
    for(var i = 0; i<a.length; i++) {
        if(!!a[i]) {
            truthyArr[truthyArr.length] = a[i];
        }
    }
    return truthyArr;
}

console.log(arrWithoutFalsyEl([NaN, 0, 15, false, -22, '', undefined, 47, null] ));

//ili 

function arrayWithTrueEl (a) {
    var truthyArr = [];
    for(var i = 0; i<a.length; i++) {
        var num = parseInt(a[i]);
        if(!isNaN(num) && num !== 0) {
            truthyArr[truthyArr.length] = num;
        }
    }
    return truthyArr;
}

console.log(arrayWithTrueEl([NaN, 0, 15, false, -22, '', undefined, 47, null] ));

/* 4.	Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number */



function convertNo (x) {
    var reverseNo = 0;
    var znak = x < 0 ? -1 : 1;
    x = znak * x;
    
    while (x>0) {
        var rest = x%10;
        reverseNo = reverseNo*10 + rest;
        x = Math.floor(x/10) ;
    }

    return reverseNo*znak;
}


console.log(convertNo(-12345));

/* 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  */

function lastElOfArr (a, n) {
    var result = [];
    if(n === undefined) {
        result = a[a.length-1];
    } else { 
        for(var i = a.length-n; i<a.length; i++) {
                result[result.length] = a[i];
        }
    }
    return result;
} 

console.log(lastElOfArr([7, 9, 0, -2, 9, 8, 5], 3));

/* 6.	Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function arrOfSpecEl (n, x) {
    var newArr = [];
   
    for(var i = 0; i< n; i ++) {
        if(x === undefined) {
            x = null;
            newArr[newArr.length] = x;
        } else {
            newArr[newArr.length] = x;
        }
    }
    return newArr;
}


console.log(arrOfSpecEl(8));

/* 7.	Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

function perfectNo (x) {
    var result = "";
    var sum = 0;
    for(var i = 0; i<= x/2; i++) {
        if(x%i === 0) {
            sum += i; 
        }
    }
    if(sum === x) {
        result = "The number is perfect";
    } else {
        result = "The number is NOT perfect";
    }

    return result;
}

console.log(perfectNo(57));

/* 8.	Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times" */

function findWord (str1, str2) {
    var counter = 0;
    var result = "";
    var currentStr = "";
    for(var i = 0; i<str1.length; i++) {
        if(str1[i] !== " ") {
            currentStr += str1[i];

            if(i == str1.length - 1 && currentStr === str2) {
                counter++;
            }
        }
        else {
            if(currentStr === str2) {
                counter++;
            }

            currentStr = "";
        }
    }
    result = str2 + " was found " + counter + " times";

    return result;

}
console.log(findWord('aa aabb cc dd aa', 'aa'));


function findAWord(str1, str2) {
    var result = "";
    var currentStr = "";
    var counter = 0;
    

    for(var i = 0; i<str1.length - str2.length; i++) {
        if(str1[i] === str2[0]) {
            for(var j = i; j < str2.length + i; j++) {
                var currentCharacter = str1[j];
                currentStr += currentCharacter;
                
            }
            if(currentStr === str2) {
                console.log(currentStr)
                counter++;
            }
            currentStr = '';
        }
    }

    result = str2 + " was found " + counter + " times";
    
    return result;

}

console.log(findAWord('The quifox,ck brfoxown fox,fox', 'fox'));
console.log(findAWord('aa aabb cc dd aa', 'aa'));

/*9.	Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"*/

function hideMail (email) {
    var hiddenMail = "";
    var firstThree = "";
    var lastcharacters = "";
    for(var i = 0; i<3; i++) {
        firstThree += email[i];
    } 
    for(var i = 0; i<email.length; i++) {
        if(email[i] === "@") {
            var pos = i;
            for(var i = pos; i<email.length; i++) {
                lastcharacters += email[i]; 
            }
        }
    }
    hiddenMail = firstThree + "..." + lastcharacters;
    return hiddenMail;
}

console.log(hideMail("nesto@gmail.com"));

/*10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] */

function mostFreq(a) {
    var character = "";
    var numOfApp = 0;
    for(var i = 0; i<a.length; i++) {
        var tempChar = a[i];
        var tempNumOfApp = 1;
        for(var j = 1; j<a.length; j++) {
            if(tempChar === a[j]) {
                tempNumOfApp++;
            }
        }

        if(numOfApp < tempNumOfApp) {
            numOfApp = tempNumOfApp;
            character = tempChar;
        }
    } 
    return character + " " + numOfApp;
}

console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] ));
