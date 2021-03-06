var a = 5;
var b = 10;

if (a > b) {
    console.log(a + " je veci od " + b);
} else if (b > a) {
    console.log(b + " je veci od " + a);
} else {
    console.log("Brojevi " + a + " i " + b + " su jednaki");
}


var a = 4;
var result = "";

if(a % 2 === 0 ) {
    result = "even";
} else {
    result = "add";
}


console.log(result);


var a = 25;

if(a % 3 !== 0 && a % 5 !== 0) {
    console.log("Broj nije deljiv ni sa 3 ni sa 5");
} else if (a % 3 === 0 && a % 5 === 0) {
    console.log("Broj je deljiv sa oba broja");
}  else if (a % 3 !== 0 && a % 5 === 0) {
    console.log("Broj je deljiv samo brojem 5")
} else {
    console.log("Broj je deljiv samo brojem tri")
}


