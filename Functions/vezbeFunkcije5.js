/* 1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ] */

function minMax(a) {
    var min, max, minPos, maxPos;

    min = a[0];
    max = a[0];
    minPos = 0;
    maxPos = 0;

    for(var i = 0; i<a.length; i++) {
        if(a[i] < min) {
            min = a[i];
            minPos = i;
        } 
        if(a[i] > max) {
            max = a[i];
            maxPos = i;
        }
    }

    a[minPos] = max;
    a[maxPos] = min;

    return a;
   
}

console.log(minMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/* 2.	Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ] */

function devidArr(a) {
    var newArr;
    
    newArr = [];
    for(var i = 0; i<a.length; i++) {
        var current = a[i]/2 + 5;
            if(current === 0) {
                newArr[newArr.length] = 20;
            } else {
                newArr[newArr.length] = current;
            }

        }   
    return newArr;
}

console.log(devidArr([ 3, 500, -10, 149, 53, 414, 1, 19 ]));


/* 3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam. */

function studentGrade(arr1, arr2) {
    var result = "";
    var student;
    var points;
    var grade;
    var strWithResults = "";


    for(var i = 0; i<arr1.length; i++) {
        student = arr1[i];
        points = arr2[i];
   

        if(points <= 50) {
            grade = 0;
        } else if (points <= 60) {
            grade = 6;
        } else if (points <= 70) {
            grade = 7;
        } else if (points <= 80) {
            grade = 8;
        } else if (points <= 90) {
            grade = 9;
        } else if (points > 90) {
            grade = 10;
        } 


        if (grade === 0) {
            result = student + " acquired " + points + " points and failed to complete the exam.";
        } else {
            result = student + " acquired " + points + " and earned " + grade + "."
        }

        strWithResults += result + "\n";

    } 

    return strWithResults;
   
}

console.log(studentGrade([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));

/*   4.	(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ] */

function sortAndDup(a) {
    var done = false;
    var newArr = [];

    while(!done) {
        done = true;
        for(var i = 1; i<a.length; i+=1) {
            if(a[i-1]>a[i]) {
                done = false;
                var temp = a[i-1];
                a[i-1] = a[i]
                a[i] = temp;
            }
        }
    }

    for(var i = 0; i<a.length; i++) {
        newArr[newArr.length] = a[i] *2;
    }

    return newArr;
}


console.log(sortAndDup([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

/* 5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ] */

function reverseArr(a) {
    var done = false;

    while(!done) {
        done = true;
        for(var i = 1; i<a.length; i+=1) {
            if(a[i-1] < a[i]) {
                done = false;
                var temp = a[i-1];
                a[i-1] = a[i];
                a[i] = temp; 
            }
        }
    }
    return a;
}

console.log(reverseArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

/* 6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000 */

function sumOfEvenNo(n) {
    var sum = 0;
    var substract = 0; 
    for(var i = 0; i<=n; i++) {
        if(i%2 === 0) {
            sum += i;
        } 
    }

    for(var j = 0; j<=n/2; j++) {
        if(j%2 !== 0) {
            substract +=j;
        }
    }
    return (sum-substract)*12.5;
}

console.log(sumOfEvenNo(1000));

/* 7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa */

function firstTwoLetters(a) {
    var stringOfFirstLetters = "";
    for(var i=0; i<a.length; i++) {
        if(typeof a[i] === "string" && a[i].length > 1) {
            for(j=0; j<2; j++) {
                stringOfFirstLetters += a[i][j];
            }
        }
    }
    return stringOfFirstLetters;
}

console.log(firstTwoLetters([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

/* 8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB */

function reverseString(str) {
    var reversedStr = "";
    for(var i = str.length-1; i>=0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString("Belgrade Institute of Technology"));

/* 9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */

function twoDiffNo(n, x) {
    var counter = 0;
    var result = "";
    var arrOfRes = [];
    for(var i = n; i<=x; i++) {
        for(var j = x; j>=n; j--) {
            if(i !== j) {
                result = i + ", " + j;
                counter++;
                arrOfRes[arrOfRes.length] = result;
            }
        }
    }
    return [arrOfRes, counter];
}

console.log(twoDiffNo(1, 7));

/* 10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false */

function isPrime(x) {
    var primes = [2, 3, 5, 7];
    var isPrime = false;
    if(x>7) {
        if(x%2 !== 0 && x%3 !== 0 && x%5 !== 0 && x%7 !== 0) {
            isPrime = true;
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

console.log(isPrime(10));

/*Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true */

function isPalindrom(str) {
    var isPalindrom = false;
    var strWithoutSpace = "";
    for(var i = 0; i<str.length; i++) {
        if(str[i] === " ") {
            continue;
        } else {
            strWithoutSpace += str[i];
        }
    }

    return isPalindrom;
}

console.log(isPalindrom("a nut for a jar of tuna"));