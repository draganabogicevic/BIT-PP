/*1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no*/

var e = 3;
var a = [5, -4.2, 18, 7];
var pronadjen = "No";

for(var i = 0; i<a.length; i++) {
    if(a[i] === e) {
        pronadjen = "yes";
        break;
    }
}

console.log(pronadjen);

/*2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

var a = [-3, 11, 5, 3.4, -8];

for(var i = 0; i<a.length; i++) {
    if(a[i] > 0) {
        a[i] *= 2;
    }
}

console.log(a)

/*3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var a = [4, 2, 2, -1, 6];
var min = a[0];
//var i = 0;
var position = 0;

for(var i = 0; i<a.length; i++) {
    if(a[i] < min) {
        min = a[i];
        position = i;
    }
}

console.log(min + ", " + position);



/*while(i<a.length) {
    if(a[i]<min) {
        min = a[i];
        position = i;
    }
    i++;
}

console.log(min + ", " + position);*/


//ili


/*4.	Write a program that finds the first element larger than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var firstLarger = Infinity;
for(var i = 0; i<a.length; i++) {
    if(a[i]<firstLarger && a[i]>min) {
        firstLarger = a[i];
    }
}

console.log(firstLarger);



/*var array = [4, 2, 2, -1, 6];

array.sort();

console.log(array[1]);*/

var array = [4, 2, 2, -1, 6];
var done = false; 

while (!done) { 
  done = true; 
  for (var i = 1; i < array.length; i += 1) { 
    if (array[i - 1] > array[i]) { 
      done = false; 
      var tmp = array[i - 1]; 
      array[i - 1] = array[i]; 
      array[i] = tmp; 
      console.log(array)
    } 
  } 
}



console.log(array[1]);



/*5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

var a = [3, 11, -5, -3, 2];
var sum = 0;

for(var i = 0; i<a.length; i++) {
    if(a[i] > 0) {
        sum += a[i];
    }
}

console.log(sum);

/*6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.*/

var a = [3, 4, 12, 8];
var symmetric = false;
var halfLength = a.length/2;


/*var i = 0, j = a.length-1;
while(i<halfLenght) {
    if(a[i] === a[j]) {
        symmetric = true;
    }
    i++;
    j--;
}*/

for(var i = 0; i < halfLength; i++) {
    if(a[i] === a[a.length-1-i]) {
        symmetric = true;
    }
}

if(symmetric) {
    console.log("The array is symmetric.");
} else {
    console.log("The array isn’t symmetric.");
}





/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var array3 = [];

for(var i = 0; i<array1.length; i++) {
    array3[array3.length] = array1[i];
    array3[array3.length] = array2[i];
}

console.log(array3);

/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];

for(var i = 0; i<array2.length; i++) {
    array1[array1.length] = array2[i];
}

console.log(array1);

/*9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

var array = [4, 6, 2, 8, 2, 2];
var e = 2;
var array1 = [];

for(var i = 0; i<array.length; i++) {
    if(array[i] === e) {
        continue;
    }
    array1[array1.length] = array[i];
}

console.log(array1);

/* 10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var e = 78;
var p = 3;
var array = [2, -2, 33, 12, 5, 8];
var array1 = [];

for(var i = 0; i<array.length; i++) {
    if(i === p) {
        array1[array1.length] = e;
        array1[array1.length] = array[i];
    } else {
    array1[array1.length] = array[i];
    }
}
if(p > array.length) {
    console.log("Possition is not valid");
    console.log(array1);
} else {
    console.log(array1);
}    


/*for(var i = 0; i < array.length; i++) {
    if(i === p) {
        array.splice(i, 0, e);
    }
}
if(p > array.length) {
    console.log("Possition is not valid");
} else {
    console.log(array);
}*/    