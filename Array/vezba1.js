//Zadatak 1 Write an array of months in a year. Using console.log display June, October and January from the array.

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];

console.log(months[5]);
console.log(months[9]);
console.log(months[0]);

//Zadatak 2 Write an arrays of days in a week. Using console.log display Sunday from the array.

var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(weekdays[weekdays.length-1]);

//Zadatak 3 Print all negative elements from the array [2, -4, 5, -2, -11].

var a = [2, -4, 5, -2, -11];

if(a[0] < 0) {
    console.log(a[0]);
} if (a[1] < 0) {
    console.log(a[1]);
} if (a[2] < 0) {
    console.log(a[2]);
} if (a[3] < 0) {
    console.log(a[3]);
} if (a[4] < 0) {
    console.log(a[4]);
} 

//Zadatak 4 Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9].

var a = [5, 15, -5, -20, -12, 18, 74, 14, 9];

console.log(a[0], a[3], a[6]);




/*Zadatak 5 What is the index of number 24 in the following array?
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element.*/

var a =[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(a[0][3]);

console.log(a[2]);

console.log(a[2][1]);