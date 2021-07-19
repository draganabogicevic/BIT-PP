/*1. Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']*/

const arr = ['hello', 'there', 'ES', 6];

const newArr = arr.filter(element => typeof element === "string");
const elCapLet = newArr.map(element => `${element.charAt(0).toUpperCase()}${element.substr(1, element.length-1)}`)

console.log(elCapLet)

/*2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only*/

const tax = 20;

const arr = [{ name: "Banana", price: 120 }, 
            {name: "Orange",  price: 100}];

const taxOnly = arr.map(element => element.price*tax/100);
console.log(taxOnly)


arr.forEach(element => element.price += element.price*tax/100)
console.log(arr)

/*3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]*/

const arr = [4, 6, 11, -9, 2.1]

function arrWithIncreasedValue (value = 1) {
    const newArr = arr.map(element => element+value);
    return newArr
}

console.log(arrWithIncreasedValue())

/*4. Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]*/

const arr = [6, 11, 9, 0, 3];
const arrWithEvenEl = arr.filter(element => element%2 === 0)
console.log(arrWithEvenEl)

/*5.Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard'] */

const arr = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];
const arrWithoutJs = arr.filter(element => (element.includes("js") || element.includes("JS")))
console.log(arrWithoutJs);

/*6. Write a function that filters all integer numbers from the given array. 
    Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]*/

const arr = [1.6, 11.34, 9.23, 7, 3.11, 8];
let intgOnly = [];
arr.map(function(element) { 
    if(Number.isInteger(element)){
        intgOnly.push(element);
    }});
console.log(intgOnly)

console.log(arr)

/*7. Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]*/
 

function dig5eleement () {
    let arrWithDig5 = [];
    const arr = Object.values(arguments)
    arr.map(function(element) {
        if(Number.isInteger(element)){
            let el4Check = element.toString();
            if(el4Check.includes("5")) {
                arrWithDig5.push(element);
            }
        }
    })
    return arrWithDig5;
   
}

console.log(dig5eleement(23, 11.5, 9, 'abc', 45, 28, 553))

/* 9. Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
Write a function that prints out the names of persons older than 25. 
Write a function that check if there is a person older than 40.
Write a function that checks if all persons are older than 20.  */


const arrOfPersons = [  { name: "Dragana", age: 38 }, 
                        { name: "Branislav", age: 39 }, 
                        { name: "Tadija", age: 10 }, 
                        { name: "Jana", age: 2 }, 
                        { name: "Nenad", age: 36 }, 
                        { name: "Marija", age: 38 }, 
                        { name: "Djurdja", age: 1 }, 
                        { name: "Ljiljana", age: 60 }, 
                        { name: "Predrag", age: 60 }, 
                    ];

function olderThan25 (a) {
    let nameOfOlderThan25 = [];
    a.forEach(function(element){
        if(element.age > 25) {
            nameOfOlderThan25.push(element.name);
        }
    })
    return nameOfOlderThan25
}


function olderThan40 (a) {
    let olderThan40 = false;
    a.forEach(function(element){
        if(element.age > 40) {
            olderThan40 = true;
        }
    })
    return olderThan40;
}

function allOlderThan20 (a) {
    let allOlderThan20 = true;
    a.forEach(function(element){
        if(element.age < 20) {
            allOlderThan20 = false;
        }
    })
    return allOlderThan20;
}

function consoleAll () {
    console.log(`Persons older tnan 25 are: ${olderThan25(arrOfPersons)}`);
    if(olderThan40 (arrOfPersons)) {
        console.log("There are persons older than 40.")
    } else {
        console.log("All persons are yonger than 40.")
    }
    if(allOlderThan20 (arrOfPersons)) {
        console.log("All persons are older than 20.")
    } else {
        console.log("There are some persons yonger than 20.")
    }
}

console.log(consoleAll()) 

/* 10.Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no */

    function isPositivInt(a) {
        let isPositivInteger = true;
        a.forEach(function(element) {
            if(!(element > 0) || !Number.isInteger(element)) {
                isPositivInteger = false;
                return;
            }
        })
        if(isPositivInteger) {
            return "Yes";
        } else {
            return "No";
        }
    }

    console.log(isPositivInt([3, 12.5, 4, 11]))
/*11. Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48 */

function prodOfEl (a) {
    let prod = 1;
    a.forEach(element => prod *= element);
    return prod;
}

console.log(prodOfEl([2, 8, 3]))

/*12. Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
Output: 8 */

function maxEl (a) {
    return Math.max(...a)
}

console.log(maxEl([2, 7, 3, 8, 5.4] ))
