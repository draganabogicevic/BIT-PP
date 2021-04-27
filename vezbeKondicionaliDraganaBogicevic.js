//Task 1

var a = 3;
var b = -7;
var c = 2;
var product = a*b*c;

if(product >= 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
}



//Task 2

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
var max;

if(a>b && a>c && a>d && a>e) {
    max = a;
} else if (b>a && b>c && b>d && b>e){
    max = b;
}  else if (c>a && c>b && c>d && c>e){
    max = c;
}  else if (d>a && d>b && d>c && d>e){
    max = d;
} else {
    max = e;
}

console.log(max);

//Task 3

var num1 = 10;
var num2 = -19;
var num3 = 460;

if(num1>num2 && num1>num3) {
    if(num2>num3) {
        console.log(num1, num2, num3);
    } 
    else {
        console.log(num1, num3, num2);
    }
} 
else if (num2>num1 && num2>num3) {
    if(num1>num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
} 
else if (num3>num1 && num3>num2) {
    if (num1>num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
    }
}

//Task 4

var promenljiva = "e";
var rezultat;

if(typeof promenljiva === "number") {
    if (promenljiva % 2 === 0) {
        rezultat = promenljiva/2;
        console.log(rezultat);
    } else {
        console.log("X");
    }
} else {
    console.log("X");
}

//Task 5

var a = 87;
var b = 88;
var rezultat;

if(a>b) {
    rezultat = a;
} else if (b>a) {
    rezultat = b;
} else {
    rezultat = "Brojevi su jednaki";
}

console.log(rezultat);

//Task 6   
var celsius = 60;
var fahrenheit = (9*celsius/5) + 32;

console.log(celsius + "°C is " + fahrenheit + "°F");

//Task 7

var num13 = 13;
var given = 11;
var result;
var helper;

if(given > num13) {
    helper = num13-given;
    result = (helper*2)*-1;
} 
else {
    result = num13 - given;
}

console.log(result);

//Task 8

var a = 8;
var b = 8;
var rezultat;

if(a !== b) {
    rezultat = a + b;
} else {
    rezultat = (a + b)*3;
}

console.log(rezultat);

//Task 9
var x = 45;
var y = 6;
var output;

if(x === 50 || y === 50 || (x + y === 50)) {
    output = true;
} else {
    output = "-";
}

console.log(output);

//Task 10

var broj = 256;

if(broj >= 20 && broj <= 100) {
    console.log("20 ⇔ 100");
} else if(broj >= 100 && broj <= 400) {
    console.log("100 ⇔ 400");
} else {
    console.log("-");
}