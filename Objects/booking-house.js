"use strict";
(function (){
    
    var CONTINENT = {
        EUROPA: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    }; 

    function Country (name, odds, continent) {
        this.name = name,
        this.odds = odds,
        this.continent = continent,
        this.getFormatedName = function () {
            var formated = this.name[0];
            for(var i = 1; i<this.name.lenght; i++) {
                var current = this.name[i];
                switch(current) {
                    case "a" :
                    case "e" : 
                    case "i" :
                    case "o" : 
                    case "u" :
                        continue;
                }    
                formated += current;
            
            }
            return formated;
        }
    }
        
    function Person (name, surname, dateOfBirth) {
        this.name = name,
        this.surname = surname,
        this.dateOfBirth = dateOfBirth,
        this.getPerson = function () {
            return this.name + " " + this.surname + ", " + (2021 - this.dateOfBirth.year);
        }
    }

    function Player (person, betAmount, country) {
        this.person = person,
        this.betAmount = betAmount,
        this.country = country,
        this.getBetInfo = function () {
            return this.country.getFormatedName() + ", " + (this.betAmount * this.country.odds) + "eur" + this.person.getPerson() + " years";
        }
        
    }

    function Address (country, city, postalCode, street, number) {
        this.country = country,
        this.city = city,
        this.postalCode = postalCode,
        this.street = street,
        this.number = number,
        this.getAddress = function() {
            return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country;
        }
    }



    var countryRs = new Country ("Serbia", 25, CONTINENT.EUROPA);
    console.log(countryRs);
    var person1 = new Person("Pera", "Peric", {day: 4, mounth: 7, year: 1983})
    console.log(person1.getPerson());
    var player1 = new Player(person1, 100, countryRs);
    console.log(player1)
})();