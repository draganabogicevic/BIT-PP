//Write a program that will iterate from 0 to 10 and display squares of numbers.
for(var x = 0; x < 10; x++) {
    console.log(x*x);
}


/*Zadatak 1 Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.*/
for(var x = 0; x < 15; x++) {
    if(x%2 === 0) {
        console.log("Tha number " + x + " is even");
    } else {
        console.log("Tha number " + x + " is odd");
    }
}


//Zadatak 2 Write a program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
var a = 3;
var b = 5;

while(sum < (1000 - a*b)){
    sum += a*b;
}

console.log(sum);

var sum = 0;

for(var x = 1; x < 1000; x++) {
    if(x%3 === 0 && x%5 === 0) {
        sum += x; 
    }
}

console.log(sum);

//Zadatak 3 Write a program to compute the sum and product of an array of integers.
var a = [1, 2, 3, 4, 5];

var sum = 0;
var prod = 1;

for(var i = 0; i < a.length; i++) {
    sum += a[i];
    prod *= a[i];

    console.log("After " + i + " iterations, sum is " + sum + " and product is " + prod);

}


//Zadatak 4 Write a program which prints the elements of the following array as a single string.
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var string = "";

for(var i = 0; i<x.length; i++) {
    string += x[i];
}

console.log(string);


//Zadatak 5  Write a program that prints the elements of the following array.
var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ];
var string = "";

for(var i = 0; i < a.length; i++){
    for(var j = 0; j< a[i].length; j++){
        string = string + a[i][j] + "\t";
    }
    string = string + "\n";
}

console.log(string);

//Zadatak 6 Write a program that outputs the sum of squares of the first 20 numbers.
var sum = 0;

for(var x = 1; x<=20; x++) {
    sum += x*x;
}

console.log(sum);


/*Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.*/

var array = [["David", 80],  ["Marko", 77],  ["Dany", 88], ["John", 95], ["Thomas", 68]];
var sumOfPoints = 0;
var numStd = array.length; 

for(var i = 0; i<numStd; i++) { 
    var currentStudentPoint = array[i][1];
    sumOfPoints += currentStudentPoint;
}

var avg = sumOfPoints/numStd;
//avg grade class
if(avg < 60) {
    console.log("AVG grade is F");
} else if(avg < 70) {
    console.log("AVG grade is D");
} else if(avg < 80) {
    console.log("AVG grade is C");
} else if(avg < 90) {
    console.log("AVG grade is B");
} else if (avg < 100) {
    console.log("AVG grade is A");
}



//student grade
for(var i = 0; i<numStd; i++) { 
    var currentStudentPoint = array[i][1];
    var currentStudentName = array[i][0];

    if(currentStudentPoint < 60) {
        console.log(currentStudentName + "'s grade is F");
    } else if(currentStudentPoint < 70) {
        console.log(currentStudentName + "'s grade is D");
    } else if(currentStudentPoint < 80) {
        console.log(currentStudentName + "'s grade is C");
    } else if(currentStudentPoint < 90) {
        console.log(currentStudentName + "'s grade is B");
    } else if (currentStudentPoint < 100) {
        console.log(currentStudentName + "'s grade is A");
    }
}





/*Zadatak 8 Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).*/
for(var x = 1; x<=100; x++) {
    if(x%3 === 0) {
        if(x%5 === 0){
            console.log("FizzBuzz");
        } 
        else {
            console.log("Fizz");
        }
    } 
    else if(x%5 === 0) {
        console.log("Buzz");
    }  
    else {
        console.log(x);
    }
}
