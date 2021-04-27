//Zadatak 1.

var input = 5;


switch (input) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
        break;
}



//Zadatak 2

var input = 1;


switch (input) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Input must be a number between 1 and 7");
        break;
}

//Zadatak 3

var input = 56;


switch (input) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It is a weekday");
        break;
    case 6:
    case 7:
        console.log("It is a weekend");
        break;
    default:
        console.log("Input must be a number between 1 and 7");
        break;
}

//Zadatak 4

var input = 55;

switch (input) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Input must be a number between 1 and 12");
        break;
}


//Zadatak 5

var input = 5;

switch (input) {
    case 1:     
    case 2:
    case 3:  
        console.log("Winter")
    case 4:
    case 5:
    case 6:
        console.log("Spring");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Summer");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Autumn");
        break;
    default:
        console.log("Input must be a number between 1 and 12");
        break;
}

//Zadatak 6

var grade = "C";

switch(grade) {
    case "A":
        console.log("Good job");
        break;
    case "B":
        console.log("Pretty good");
        break;
    case "C":
        console.log("Passed");
        break;
    case "D":
        console.log("Not so good");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Unknown grade");
        break;                     
}

//Zadatak 7

var city = "Linz";

switch (city) {
    case "Lisbon":
    case "Porto":
        console.log("Portugal");
        break;
    case "Madrid":
    case "Valencia":
    case "Malaga":
    case "Barcelona":
        console.log("Spain");
        break;
    case "Paris":
    case "Lion":
    case "Nice":
    case "Nantes":
    case "Grenoble":
        console.log("France");
        break;
    case "Berlin":
    case "Munich":
    case "Frankfurt":
    case "Stutgart":
    case "Hamburg":
    case "Dusseldorf":
        console.log("Germany");
        break;
    case "Wien":
    case "Linz":
    case "Graz":
        console.log("Austria");
        break;
    default:
        console.log("Please choose a diffrent city");
        break;            
}

//Zadatak 8

var a = 5;
var b = 0;
var operator = "j";
var result = 0;

switch (operator) {
    case "+":
        result = a + b;
        console.log(result);
        break;
    case "-":
        result = a - b;
        console.log(result);
        break;
    case "*":
        result = a * b;
        console.log(result);
        break;
    case "/":
        switch(b) {
            case 0:
                console.log("Divide with 0 is not allowed");
                break;
            default:
                result = a / b;
                console.log(result);
                break;
        }
        break;
    default:
        console.log("Please enter valid operator: +, -, *, /");
        break;    
}


