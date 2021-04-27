//1.Write a program that calculates the maximum of two given numbers.

function max(a, b) {
    if(a > b) {
        return a;
    } else if (b > a){
        return b;
    } else {
        return "the numbers are e"
    }
}

var maximum = max(15, 15);
console.log(maximum)

//2.Write a program that checks if a given number is odd.

function odd(a) {
    //var odd = "";
    if(a%2 === 0) {
        return "no";
    } else {
        return "yes";
    }
    //return odd;
}

var oddNum = odd(10);
console.log(oddNum);

//3.Write a program that checks if a given number is a three digit long number.

function threeDig(a) {
    if(a > 99 && a < 1000) {
        return "yes";
    } else {
        return "no";
    }
    
}

var result = threeDig(55);
console.log(result);  

//4.Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean (a, b, c, d) {
    var aritmMean = (a + b + c + d)/4;
    return aritmMean;
}

var aritmeticMeanOfFourNo = arithmeticMean(7,2,3,4);
console.log(aritmeticMeanOfFourNo); 

// for n param.



function arithmeticMean () {
    var sum = 0;
    for(var i = 0; i<arguments.length; i++) {
        sum += arguments[i]; 
    }
    
    var numOfParameters = arguments.length;
    var midVal = sum/numOfParameters;
    return midVal;
}

var aritmeticMeanOfFourNo = arithmeticMean(7,2,3,4,5,8,9);
console.log(aritmeticMeanOfFourNo); 



//7. Write a program that calculates a number of digits of a given number.

function noOfDig (a) {
    var counter = 0;
    while(a!=0) {
        a = Math.floor(a/10);
        counter++;
   
    }
    return counter;
}

var numberOfDigits = noOfDig(6525.49211);
console.log(numberOfDigits);

//8. Write a program that calculates a number of appearances of a given number in a given array.

function appear(a, n) {
    var counter = 0;
    for(var i = 0; i < a.length; i++) {
        if(a[i] === n ) {
            counter++;
        }
    }

    return counter;
}

var result = appear([1, -2, 5, -2, 8, -2, 6, -2, -2], 2);
console.log(result);

//9. Write a program that calculates the sum of odd elements of a given array.

function sumOfEl(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        if(a[i]%2 !== 0) {
            sum += a[i];
        }
    }
    return sum;
}

var result = sumOfEl([1,2,3,4,5]);
console.log(result);

/*10.Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

function appOfa (str) {
    var counter = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] === "a"  || str[i] === "A") {
            counter++;
        }
    }
    return counter;
}

var noOfapp = appOfa("pAraaoAba");
console.log(noOfapp);

/*11.Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.*/

function concatStr (str, n) {
    var finStr = "";
    while(n > 0) {
        finStr += str;
        n--;
    }
    return finStr;
}

var nStr = concatStr ("abc", 4);
console.log(nStr);

/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****
*/

function drawSquare (n) {
    var square = "";
    for(var row = 0; row < n; row++) {
        for(var col = 0; col < n; col++) {
            if((row === 0 || row === n-1) || (col === 0 || col === n-1)) {
                square += "* ";
            } else {
                square += " ";
            }
        }
        square += "\n";
    }
    return square;
}

var draw = drawSquare(5);
console.log(draw)












function drawSquare (n) {
    var square = "";
    var fline = "";
    var midle = "";
    var lline = "";
    var str = "*";

        for(var i = 1; i <= n; i++){
            if(i === 1){
                var temp = n;
                while(temp > 0) {
                    fline += str;
                    temp--;
                }
                square += fline + "\n";
                //console.log("i=1: "+ square);
            }
            else if(i === n){
                var temp = n;
                while(temp > 0) {
                    lline += str; 
                    temp--;
                }
                square += lline;
                //console.log("i=n:" + square);
            }
            else{
               midle = "";
               for(var i = 1; i <= n; i++){
                   if(i === 1){
                    midle += "*";
                   }
                   else if(i === n){
                    midle += "*\n"
                   }
                   else{
                    midle += " ";
                   }
               }
               //console.log("midle:" + midle);
               square += midle;
               //console.log("square after midle:"+ square);
            }
        }
    //var sqare = fline + '\n' + midle + lline
    return square;
}

var sqare = drawSquare(4);
console.log(sqare);

/*Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *   */
function drawing (a, b, c) {
    var fline = "";
    var sline = "";
    var tline = "";
    var str = "*";
    while(a > 0) {
        fline += str;
        a--;
    }
    while(b > 0) {
        sline += str;
        b--;
    }
    while(c > 0) {
        tline += str;
        c--;
    }

    var result = fline + '\n' 
                 + sline + '\n'  
                 + tline + '\n' 

    return result;

}    

var draw = drawing(5, 2, 7);
console.log(draw);
