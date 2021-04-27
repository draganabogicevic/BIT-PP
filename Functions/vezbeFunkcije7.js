/* 1.	Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
●	takes 4 arguments: number of children, partner's name, geographic location, job title.
●	outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(partnerName, noOfChildren, place, job) {
    
    var fortune = "You will be a " + job + " in " + place + ", and married to " + partnerName + " with " + noOfChildren + " kids."

    return fortune;
}

console.log(tellFortune("Branislav", 2, "Stara Pazova", "programmer"));

/* 2.	You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
●	takes 1 argument: your puppy's age.
●	calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
●	outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppysAge) {
    var puppysAgeInDogsAge = puppysAge * 7;
    var result = "Your doggie is " + puppysAgeInDogsAge + " years old in dog years!"
    return result;
}

console.log(calculateDogAge(6));
console.log(calculateDogAge(2));
console.log(calculateDogAge(12));

//Bonus
function calculateDogAge(puppysAge, conversationRate) {
    var puppysAgeInDogsAge = puppysAge / conversationRate;
    var dogsAge = Math.floor(puppysAgeInDogsAge/1);
    var result = "Your doggie is " + dogsAge + " years old in dog years!"
    return result;
}

console.log(calculateDogAge(6, 0.14));
console.log(calculateDogAge(2, 0.14));
console.log(calculateDogAge(12, 0.14));

/* 3.	Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
●	takes 2 arguments: age, amount per day.
●	calculates the amount consumed for rest of the life (based on a constant max age).
●	outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(age, amountPerDay) {
    var maxAge = 95;
    var toTheRestOfLifeNeeded = (amountPerDay * 365) * (maxAge - age);
    var result = "You will need " + toTheRestOfLifeNeeded + " to last you until the ripe old age of " + maxAge;
    return result;
}

console.log(calculateSupply(57, 3));
console.log(calculateSupply(42, 2));
console.log(calculateSupply(18, 1));

//Bonus 
function calculateSupply(age, amountPerDay) {
    var maxAge = 95;
    var toTheRestOfLifeNeeded = (amountPerDay * 365) * (maxAge - age);
    var roundToTheRestOfLife = Math.round(toTheRestOfLifeNeeded);
    var result = "You will need " + roundToTheRestOfLife + " to last you until the ripe old age of " + maxAge;
    return result;
}

console.log(calculateSupply(57, 3.78));
console.log(calculateSupply(42, 2.3));
console.log(calculateSupply(18, 1.67));

/* 4.	It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
●	Store a celsius temperature into a variable.
●	Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
●	Now store a fahrenheit temperature into a variable.
●	Convert it to celsius and output "NN°F is NN°C."
*/

function celsiusToFahrenheit(celsiusT) {
    var tempInFahrenheit = celsiusT*1.8 + 32;
    return Math.round(tempInFahrenheit);
}

console.log(celsiusToFahrenheit(32));

function fahrenheitToCelsius(fahrenheitT) {
    var tempInCelsius = (fahrenheitT-32)*0.5556;
    return Math.round(tempInCelsius);
}

console.log(fahrenheitToCelsius(100));

    



