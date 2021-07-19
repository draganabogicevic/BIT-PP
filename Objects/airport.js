"use strict";

(function () {
    function Person (name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function() {
            return "Name: " + this.name + ", " + "surname: " + this.surname;
        };
    };


    function Seat (number, category) {
        this.number = number;
        this.category = category;

        if(this.category === undefined) {
            this.category = "e"
        }; 
        if(this.number === undefined) {
            this.number = randomInteger(1, 100);
        };
        this.getData = function() {
            return "seat number: " + this.number + "category: " + this.category.toUpperCase();
        };
        
    };

    function randomInteger (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function Passenger (person, seat){
        this.person = person;
        this.seat = seat;
        
        this.getFullCategory = function(){
            if(this.seat.category === "e") {
                this.seat.category = "economy";
            } else if(this.seat.category === "b") {
                this.seat.category = "business";
            }
            return this.seat.category;
        } 
        this.getData = function () {
            return this.seat.number + ", " + this.getFullCategory() + ", " + this.person.name + " " + this.person.surname;
        }
    }

    function Flight (relation, date) {
        this.relation = relation;
        this.date = date;
        this.passangerList = [];
        this.addPassanger = function(passanger) {
            var newSeatNo = passanger.seat.number;
            var fullName = passanger.person.getData();
            var sameSeatNo = false;
            var sameFullName = false;
            var problematicSeat;
            var problematicFullName;
            for(var i = 0; i<this.passangerList.length; i++) {
                var current = this.passangerList[i];
                var existingSeatNo = current.seat.number;
                var existingFullName = current.person.getData();
                if(existingSeatNo === newSeatNo) {
                    sameSeatNo = true;
                    problematicSeat = existingSeatNo;
                }
                if(existingFullName === fullName) {
                    sameFullName = true;
                    problematicFullName = existingFullName;
                }
            }
            
            if(this.passangerList.length>99) {
                console.log("The flight has reached max number of passangers.");
                console.log("Current number of passangers on this flight is: " + this.passangerList.length)
            } 
            if(sameSeatNo) {
                console.log("Two or more passangers have same number of seat! Please check seat number: " + problematicSeat);
            }
            if(sameFullName) {
                console.log("This passanger is already on this flight! Please change passanger: " + problematicFullName);
            }
            else {
                this.passangerList.push(passanger);
            }
           
        }


        
        this.getFormatedDate = function () {
            return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear();
        }
        this.getData = function() {
            return this.getFormatedDate() + " " + this.relationFormatedData() + "\n" + this.getPassangerFullData();
        }
        this.relationFormatedData = function() {
            
            var relation = this.relation.split("-");
            var formatedRel = "";
            for(var i = 0; i<relation.length; i++) {
                var current = relation[i].trim();
                formatedRel += current[0];
               
                switch(current.charAt(current.length-1)) {
                    case "a":
                    case "A":
                    case "e":
                    case "E":
                    case "i":
                    case "I":
                    case "o":
                    case "O":
                    case "u":
                    case "U":
                        formatedRel += current.charAt(current.length-2);
                        break;
                    default :
                        formatedRel += current.charAt(current.length-1);
                        break;
                
                }

            }
            var destination = formatedRel.substring(formatedRel.length/2, formatedRel.length);
            var departure = formatedRel.substring(0, formatedRel.length/2);
            
            return departure.toUpperCase() + " - " + destination.toUpperCase();
            
           
        }


        this.getPassangerFullData = function() {
            var finalList = "";
            for(var i = 0; i<this.passangerList.length; i++) {
                var current = this.passangerList[i];
                finalList += "\t" + current.getData() + "\n"
            }
            
            
            return finalList;
        }
    }

    function Airport () {
        this.name = "Nikola Tesla";
        this.flights = [];
        this.addFlights = function(flight) {
            this.flights.push(flight);
        }
       
        this.getData = function () {
            return "Airport: " + this.name + ", total passangers: " +  this.getNumberOfPassengers() + "\n" + this.getFlightData();
        }
        this.getNumberOfPassengers = function () {
            var counter = 0;
            for(var i = 0; i<this.flights.length; i++) {
                var currentFlight = this.flights[i];
                counter += currentFlight.passangerList.length;  
            }
            return counter;
        }
        this.getNumberOfBClass = function () {
            var counterB = 0;
            for(var i = 0; i<this.flights.length; i++) {
                var currentFlight = this.flights[i];
                console.log(currentFlight)
                for(var j = 0; j<currentFlight.passangerList.length; j++) {
                    var currentPassanger = currentFlight.passangerList[i];
                    console.log(currentPassanger.seat.category)
                    if(currentPassanger.seat.category === "business") {
                        counterB++;
                    }
                }
            }
            return counterB;
        }
        this.getFlightData = function () {
            var fligtsData = "";
            for(var i = 0; i<this.flights.length; i++) {
                var currentFlight = this.flights[i];
                fligtsData += currentFlight.getData() + "\n";
            }
            return fligtsData;
        }

    }
    var airportNT = new Airport();

    function createFlight (relation, date) {  
        return new Flight(relation, date);
    }

    function createPassenger (firstName, lastName, seatNumber, category) {
        var passanger = new Passenger(new Person(firstName, lastName), new Seat(seatNumber, category));
        return passanger;
    }


    var passanger1 = createPassenger ("Dragana", "Bogicevic", 55, "e");
    var passanger2 = createPassenger ("Branislav", "Bogicevic", 56, "e");
    var passanger3 = createPassenger ("Tadija", "Bogicevic", 15, "e");
    var passanger4 = createPassenger ("Jana", "Bogicevic", 10, "e");
    var passanger5 = createPassenger ("Nenad", "Mitrovic", 9, "e");
    var passanger6 = createPassenger ("Marija", "Pavlovic", 10, "e");
    var passanger7 = createPassenger ("Djurdja", "Mitrovic");
    var passanger8 = createPassenger ("Ljiljana", "Mitrovoc", 18, "b");
    var passanger9 = createPassenger ("Predrag", "Mitrovic", 19, "b");
    var passanger10 = createPassenger("Dragana", "Bogicevic", 10, "e")

  
    var flight1 = createFlight ("Belgrade - New York", new Date (2021, 6, 15));
    flight1.addPassanger(passanger1);
    flight1.addPassanger(passanger2);
    flight1.addPassanger(passanger3);
    flight1.addPassanger(passanger4);

    var flight2 = createFlight ("Belgrade - London", new Date (2021, 7, 25));
    flight2.addPassanger(passanger5);
    flight2.addPassanger(passanger6);
    flight2.addPassanger(passanger7);

    var flight3 = createFlight ("Belgrade - Split", new Date (2021, 5, 18));
    flight3.addPassanger(passanger8);
    flight3.addPassanger(passanger9);

    airportNT.addFlights(flight1);
    airportNT.addFlights(flight2);
    airportNT.addFlights(flight3);

    

    console.log(airportNT.getNumberOfBClass());

 
  
})();