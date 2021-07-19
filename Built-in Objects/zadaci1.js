/*1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1] */

(function (){
    function duplicate(a) {
        for(var i = a.length-1; i>=0; i--) {
            a.splice(i, 0, a[i]);
        }
        return a;  
    }
    var arr = [2, 4, 7, 11, -2, 1];
    var duplicateArray = duplicate(arr);
    console.log(duplicateArray);
})();




/*2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/

(function(){
function sort(a) {
    a.sort((a, b) => a-b);
    return a;
}
function withoutDuplicate (a) {
    sort(a);
    var b = [];
    for(var i = 0; i<a.length; i++) {
        if(a[i] !== a[i+1]) {
            b.push(a[i]);
        }
    }
    return b;
}

var arrWithoutDuplicatedEl = withoutDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);
console.log(arrWithoutDuplicatedEl);
})();

/*3. 
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */
//a.
(function (){
    function length(a) {
        return a.length;
    }
    function oddNoEl (arr) {
        var result = "";
        if(length(arr) % 2 == 0) {
            result = false;
        } else {
            result = true;
        }
        return result;
    }

    var array = [1, 2, 9, 2];
    console.log(oddNoEl(array));
})();

//b.
(function(){
    function evenNoOfEl (a) {
        var result = true;
        if(a.length % 2 == 0) {
            result = false;
            console.log("Error - this array has even number of elements!");
        } 
        return result;
    }
    function middEl(a) {
        if(evenNoOfEl(a)) {
            var middleEllement = a.slice(a.length/2, a.length/2+1);
            return middleEllement;
        }
    }

    function arrayWithElLessThanMid (a) {
        var counter = 0;
        /*a.forEach(element => {
            if(element<middEl(a)) {
                counter++;
            }
            return counter;
        });*/
        for(var i = 0; i<a.length; i++) {
            if(a[i] < middEl(a)) {
                counter++;
            }
        }
        return counter;
    }
    var numberOfElLessThanMid = arrayWithElLessThanMid([-1, 8.1, 3, 6, 2.3, 44, 2.11, -55, -8, -60, -92]);
    console.log(numberOfElLessThanMid);
})()

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }*/

(function() {
    function minEl(a) {
        var min = a[0];
        var lastPositionOfMin = 0;
        for(var i = 1; i<a.length; i++) {
            if(a[i] < min) {
                min = a[i];
                lastPositionOfMin = a.lastIndexOf(a[i]);
            }
        }
        return { minValue: min, minLastIndex: lastPositionOfMin};
    }

    var minElAndPosition = minEl([1, 4, -2, -150, 11, 8, 1, -2, 3, -150]);
    console.log(minElAndPosition);
})()

/*5. a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]

b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]

c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it. */
//a.
(function (){
    function arrWithElLessThanN (a, n) {
        var elLessThanN = [];
        for(var i = 0; i<a.length; i++) {
            if(a[i] < n) {
                elLessThanN.push(a[i]);
            }
        }
        return elLessThanN;
    }
    console.log(arrWithElLessThanN([2, 3, 8, -2, 11, 4], 6));
})();

//b.
(function (){
    function toFindPro (a) {
        var arrWithProWords = [];
        for(var i = 0; i<a.length; i++) {
            var current = a[i].toLowerCase();
            if(current.slice(0, 3) === "pro") {
                arrWithProWords.push(a[i]);
            }
        }
        return arrWithProWords;
    }
    console.log(toFindPro(["JavaScript", "Programming", "fun", "product"]));
})();

//c.


function toFindPro (a) {
    var arrWithProWords = [];
    for(var i = 0; i<a.length; i++) {
        var current = a[i].toLowerCase();
        if(current.slice(0, 3) === "pro") {
            arrWithProWords.push(a[i]);
        }
    }
    return arrWithProWords;
}

function arrWithElLessThanN (a, n) {
    var elLessThanN = [];
    for(var i = 0; i<a.length; i++) {
        if(a[i] < n) {
            elLessThanN.push(a[i]);
        }
    }
    return elLessThanN;
}


function taskC (a, n, callback) {
    return callback(a, n);
}

console.log(taskC([2, 3, 8, -2, 11, 4], 6, arrWithElLessThanN));


/* 6.a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.*/

(function () {
    function Product (productName, productPrice) {
        this.productName = productName;
        this.productPrice = productPrice;
    }
    function ShoppingList () {
        this.list = [];
        this.addProducts = function (product) {
            this.list.push(product);
        }
        this.getTotalAmount = function() {
            var totalAmountOfList = 0;
            for(var i = 0; i<this.list.length; i++) {
                var current = this.list[i];
                totalAmountOfList += current.productPrice;
            }
            return totalAmountOfList;
        }
        this.getAvgPrice = function () {
            var avgPrice = this.getTotalAmount()/this.list.length;
            return avgPrice.toFixed(3);
        }
        this.getTheMostExpensiveProduct = function() {
            var higestPrice = 0;
            var mostEx = "";
            for(var i = 0; i<this.list.length; i++) {
                var current = this.list[i];
                if(current.productPrice > higestPrice) {
                    higestPrice = current.productPrice;
                    mostEx = current.productName;                
                }
            
            }
            return mostEx.toUpperCase();
        }

    }
    var grckiJogurt = new Product ("Grcki Jogurt", 105.55);
    var krastavac = new Product ("Krastavac", 125.99);
    var mojaKravicaMleko = new Product("Mleko Moja Kravica", 85.23);
    var shoppingList1 = new ShoppingList();
    shoppingList1.addProducts(grckiJogurt);
    shoppingList1.addProducts(krastavac);
    shoppingList1.addProducts(mojaKravicaMleko);


    console.log(shoppingList1.getTheMostExpensiveProduct());

})();

/* 7. a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).*/

//a.
(function (){
    function stringValidator (str) {
       var message = ""; 
       if(/\d/.test(str)) {
            message = "You need to write name with letters only!";
       } else {
           message = "Written name is OK."
       };
       return message;
    } 

    console.log(stringValidator("Dragana"));
})()



