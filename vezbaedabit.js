//Create a function which returns the number of true values there are in an array.

var array = [];

function countTrue (a) {
    var counter = 0;
    for(var i = 0; i<a.length; i++) {
        if(a[i]) {
            counter ++;
        }
    }
    return counter;
}

console.log(countTrue(array));

//Write a function redundant that takes in a string str and returns a function that returns str.

var a = [1, 5, 98, -8, 96, -563]
var done = false;


    
    while(!done) {
        done = true;
    for(var i = 1; i<a.length; i+=1) {
        if(a[i-1]> a[i]) {
            done = false;
            var temp = a[i-1];
            a[i-1] = a[i];
            a[i] = temp;
        }
    }
    }

console.log(a);
