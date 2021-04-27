/* 1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no */

var isFind = function (a, e) {
    var result = "";
    for(var i = 0; i<a.length; i++) {
        if(a[i] === e) {
            result = "yes";
            break;
        } else {
            result = "no";
        }
    }
    return result;
}

console.log(isFind([5, -4.2, 18, 7], 3));

/* 2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

var multiplyEl = function (a) {
    for(var i = 0; i<a.length; i++) {
        if(a[i]>0) {
            a[i]*=2;
        }
    }
    return a;
}

console.log(multiplyEl([-3, 11, 5, 3.4, -8]));

/*3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var minEl = function (a) {
    var min = a[0];
    var position = 0;
 
    for(var i = 0; i<a.length; i++) {
        if(a[i] < min) {
            min = a[i];
            position = i;
        }
    }

    var result = "Min element of given array is " + min + " and it is on position " + position + ".";
    return result;
}

console.log(minEl([4, 2, 2, -1, 6]));

/*4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var secMin = function (a) {
    var done = false;

    while(!done) {
        done = true;
        for(var i = 1; i<a.length; i+=1) {
            if(a[i-1]>a[i]) {
                done = false;
                var temp = a[i-1];
                a[i-1] = a[i];
                a[i] = temp;
            }
        }
    }

    return a[1];
}

console.log(secMin([4, 2, 2, -1, 6]));

/* 5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

var sumOfPositivEl = function (a) {
    var sum = 0;
    for(var i = 0; i<a.length; i++) {
        if(a[i]>0) {
            sum += a[i];
        }
    }
    return sum;
}

console.log(sumOfPositivEl([3, 11, -5, -3, 2]));


/*6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

var isSymetric = function (a) {
    var symetric = false;
    var result = "";
    for(var i = 0; i<a.length/2; i++) {
        if(a[i] === a[a.length-1-i]) {
            symetric = true;
        }
    }
    if(symetric) {
        result = "The array is symmetric."
    } else {
        result = "The array is not symmetric."
    }

    return result;
}

console.log(isSymetric([3, 4, 12, 8]));


/* 7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

var joinArr = function (arr1, arr2) {
    var newArr = [];
    for(var i = 0; i<arr1.length; i++) {
        newArr[newArr.length] = arr1[i];
        newArr[newArr.length] = arr2[i];
    }
    return newArr;
}

console.log(joinArr([4, 5, 6, 2], [3, 8, 11, 9]));

/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var joinArr = function (arr1, arr2) {
    for(var i = 0; i<arr2.length; i++) {
        arr1[arr1.length] = arr2[i];
    }
    return arr1;
}

console.log(joinArr([4, 5, 6, 2], [3, 8, 11, 9]));

/* 9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

var delEl = function (a, e) {
    var newArr = [];
    for(var i = 0; i<a.length; i++) {
        if(a[i] === e) {
            continue;
        } else {
            newArr[newArr.length] = a[i];
        }
    }
    return newArr;
}

console.log(delEl([4, 6, 2, 8, 2, 2], 2));

/* 10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

var insertEl = function (a, p, e) {
    var newArr = [];
    var result;

    for(var i = 0; i<a.length; i++) {
        if(i === p) {
            newArr[newArr.length] = e;
            newArr[newArr.length] = a[i];
        } else {
            newArr[newArr.length] = a[i];
        }
    }
    
    if(p > a.length) {
        console.log("Possition is not valid");
    } else {
    }    

    return newArr;
}

console.log(insertEl([2, -2, 33, 12, 5, 8], 3, 78));




