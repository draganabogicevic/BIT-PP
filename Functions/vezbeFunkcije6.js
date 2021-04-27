/*1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */

function vowelsNo(str) {
    var counter = 0;
    for(var i = 0; i<str.length; i++) {
        switch(str[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                counter ++;
                break;                        
        }
    }
    return counter;
}

console.log(vowelsNo("VoooowElsaaaAUue"));

/* 2.	Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */

function concatArr(arr1, arr2) {
    var newArr = [];
    
    function longerArrey(a1, a2) {
        var longerArr;
        if(a1.length > a2.length) {
            longerArr = a1;
        } else if(a2.length > a1.length) {
            longerArr = a2;
        } else {
            longerArr = a1;
        }
        return longerArr;
    }

    var longer = longerArrey(arr1, arr2);

    console.log(longer.length);

    for(var i = 0; i<longer.length; i++) {
        if(arr1[i] !== undefined && arr2[i] !== undefined) {
            newArr[newArr.length] = arr1[i];
            newArr[newArr.length] = arr2[i];
        } else if(arr1[i] === undefined) {
            newArr[newArr.length] = arr2[i];
        } else if(arr2[i] === undefined){
            newArr[newArr.length] = arr1[i];
        }
    }
    return newArr;
}

console.log(concatArr(["a","b","c","d","e"], [1,2,3]));

/* 3.	Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function rotateArr(a, n) {
    var rotatedArr = [];
    var hellperArr = [];
    for(var i = 0; i<a.length; i++) {
        if(i<n) {
            hellperArr[hellperArr.length] = a[i];
        } else {
        rotatedArr[rotatedArr.length] = a[i];
        }
    }

    for(var j = 0; j<hellperArr.length; j++) {
        rotatedArr[rotatedArr.length] = hellperArr[j];
    } 

    return rotatedArr;
}

console.log(rotateArr([1,2,3,4,5,6], 2));

/* 4.	Write a function that takes a number and returns array of its digits. */

function arrOfDigits(a) {
    var finArr = [];
    function digits(x) {
        var arrOfDig = [];
        var znak;
        if(x < 0) {
            znak = -1;
        } else {
            znak = 1;
        }
        var absX = x * znak;
        while(absX > 0) {
            var digit = absX % 10;
            arrOfDig[arrOfDig.length] = digit;
            absX = Math.floor(absX/10);
        }
        arrOfDig[arrOfDig.length-1] = arrOfDig[arrOfDig.length-1]*znak;
        return arrOfDig;
    }
    var arrOfDig = digits(a);

    function placeTheElements(arr) {
        var arrInOrder = []
        for(var i = arr.length-1; i >= 0; i--) {
            arrInOrder[arrInOrder.length] = arr[i];
        }
        return arrInOrder;
    }

    finArr = placeTheElements(arrOfDig);
    return finArr;
}

console.log(arrOfDigits(-89634213));

/* 5.	Write a program that prints a multiplication table for numbers up to 12. */

function multiplicationTable(n) {
    var result = "";
    var space = " ";
    
    for(var i = 1; i<=n; i++) {
        for(var j = 1; j<=n; j++) {
            if(i*j < 10) {
                result += i*j + space + space + space;
            } else if (i*j < 100) {
                result += i*j + space + space; 
            } else {
                result += i*j + space;
            }
        }
        
        result += "\n"; 
    }  

    
    return result;
}

console.log(multiplicationTable(12));

/* 6.	Write a function to input temperature in Centigrade and convert to Fahrenheit. */

function CentiGToFaren(x) {
    return (x/5)*9 + 32;
}

console.log(CentiGToFaren(180));

/* 7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements. */

function maxEl(a) {
    function filterNonNumber(arr) {
        var arrWithNumbers = [];
        for(var i = 0; i<arr.length; i++) {
            var current = arr[i];
            var parsed = parseInt(current);
            if(isNaN(parsed)) {
                continue;
            } else {
                arrWithNumbers[arrWithNumbers.length] = a[i];
            }
        }
        return arrWithNumbers;
    }
   
    function findMax(array) {
        var max = array[0];
        for(var i = 0; i<array.length; i++) {
            if(array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
    var arrForSearch = filterNonNumber(a);
    var maximumEl = findMax(arrForSearch);
    return maximumEl;

}

console.log(maxEl([undefined, 6, 9, 83, 9824, Infinity, null, 876542, -124, false]));

/* 8.	Write a function to find the maximum and minimum elements. Function returns an array. */

function maxAndMinEl(a) {
    function maxEl(array) {
        var max = array[0];
        for(var i = 0; i<array.length; i++) {
            if(array[i] > max) {
                max = a[i];
            }
        }
        return max;
    }
    function minEl(array) {
        var min = array[0];
        for (var i = 0; i < array.length; i++) {
            if(array[i]<min) {
                min = a[i];
            }
        }
        return min;
    }

    var maxOfA = maxEl(a);
    var minOfA = minEl(a);

    return [maxOfA, minOfA];
}


console.log(maxAndMinEl([1, 5, 34, 9846, 0, 873, -67, 1092]));

/* 9.	Write a function to find the median element of array. */ 

function medianEl(a) {
    var medianEl;
    function sortArr(array) {
        var done = false;
        while(!done) {
            done = true;
            for(var i = 0; i<array.length; i++) {
                if(array[i]>array[i+1]) {
                    done = false;
                    var temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                }
            }
        }
        return array;
    }
    sortArr(a);

    function median(arr) {
        var median;
        for(var i = 0; i<arr.length; i++) {
            if(arr.length%2 === 0) {
                median = (arr[arr.length/2] + arr[arr.length/2-1])/2;
            } else {
                median = arr[Math.floor(arr.length/2)];
            }
        }
        return median;
    }
    medianEl = median(a);
    return medianEl;
}

console.log(medianEl([1, 5, 34, 9846, 0, 873, -67, 1092]));

/* 10.	Write a function to find the element that occurs most frequently. */

function mostFreqEl(a) {
    var counter = 0;
    var counterOfmostOcc = 0;
    var mostFreq;
    
    for(var i = 0; i<a.length; i++) {
    var elToCompare = a[i];
        for(var j = i+1; j<a.length; j++) {
            var elToCompareWith = a[j];
            if(elToCompare === elToCompareWith) {
                counter++;
                if(counter > counterOfmostOcc) {
                    counterOfmostOcc = counter;
                    mostFreq = a[i];
                    counter = 0;
                }
            }
        }
    }

    return [mostFreq, counterOfmostOcc];
}

console.log(mostFreqEl([1, 2, 3, 3, 7, 3, 3, 3, 2, 8, 8, 9, 3, 3, 7, 8, 4, 8, 3, 9, 0 ]));


/* 11.	Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned. */

function threeElOfArr(a) {
    if(a.length === 0) {
        return a;
    } else if(a.length%2 !== 0) {
        var midEl = Math.floor(a.length/2);
        return [a[0], a[midEl], a[a.length-1]];
    } else {
        return [a[0], a[a.length-1]];
    }
}

console.log(threeElOfArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 12.	Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters. */

function avgOfParam() {
    var sum = 0;
    var avg;

    for(var i = 0; i<arguments.length; i++) {
        sum += arguments[i];
    }

    var avg = sum/arguments.length;

    return avg;
}

console.log(avgOfParam(2, 3, 4, 5, 6, 7, 8, 9));

/* 13.	Write a function to find all the numbers greater than the average. */

function elGreaterThanAvg(a) {
    var sum = 0;
    var avg;
    var arrWithElGreaterThanAvg = [];
    function fForSum(arr) {
        for(var i = 0; i<arr.length; i++) {
            sum += arr[i]; 
        }
        return sum;
    }

    function fForAvg(arr) {
        avg = sum/arr.length;
        return avg;
    }

    sum = fForSum(a);
    avg = fForAvg(a);

    for(var i = 0; i<a.length; i++) {
        if(a[i] > avg) {
            arrWithElGreaterThanAvg[arrWithElGreaterThanAvg.length] = a[i];
        }
    }    

    return arrWithElGreaterThanAvg;
}

console.log(elGreaterThanAvg([2, 3, 4, 5, 6, 7, 8, 9]));

/* 14.	The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
●	Starvation: less than 15
●	Anorexic: less than 17.5
●	Underweight: less than 18.5
●	Ideal: greater than or equal to 18.5 but less than 25
●	Overweight: greater than or equal to 25 but less than 30
●	Obese: greater than or equal to 30 but less than 40
●	Morbidly obese: greater than or equal to 40 */

function bmi(w, h) {
    var bmi = w/(h*h);
    console.log(bmi);
    var feedback = "";
    if (bmi < 15) {
        feedback = "Starvation!";
    } else if (bmi < 17.5) {
        feedback = "Anorexic!";
    } else if (bmi < 18.5) {
        feedback = "Underweight!";
    } else if (bmi === 18.5 || bmi < 25) {
        feedback = "Ideal";
    } else if (bmi === 25 || bmi < 30) {
        feedback = "Overweight";
    } else if(bmi === 30 || bmi < 40) {
        feedback = "Obese";
    } else {
        feedback = "Morbidly obese";
    }

    return feedback;
}

console.log(bmi(68, 1.65));

/* 15.	Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function stringsInAFrame(a) {
    var result = "";
    var star = " * ";
    var fLineLLine = "";
    var finRes = "";

    function longestStr(arr) {
        var lgstStr = arr[0]; 
        for(var i = 0; i<arr.length; i++) {
            if(arr[i].length > lgstStr.length) {
                lgstStr = arr[i];
            }
        }
        return lgstStr;
    }
    var longestLenght = longestStr(a).length;
    var noOfSpaces = longestStr(a).length + 4;
    
    function fAndLLine(x) {
        var startAndEnd = "";
        while(x>0) {
            startAndEnd += "*";
            x--; 
        }
        startAndEnd = " " + startAndEnd; 
        
        return startAndEnd;
    }

    fLineLLine = fAndLLine(noOfSpaces);

    for(var i = 0; i<a.length; i++) {
        if(a[i].length < longestLenght) {
            var needSpace = longestLenght-a[i].length
            while(needSpace > 0) {
                a[i] += " ";
                needSpace --;
            }
        }

        result += star + a[i] + star + "\n"; 
        
        
    }
    finRes = fLineLLine + "\n" + result + fLineLLine; 
    return finRes;

}

console.log(stringsInAFrame(["Hello", "World", "in", "a", "frame", "checked"]));