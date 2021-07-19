(function(){
    var CONTINENT = {
        EUROPA : "EU",
        ASIA : "AS",
        AFRICA : "AF",
        NORTHAMERICA : "NA",
        SOUTHAMERICA : "SA",
        AUSTRALIA : "AU"
    }

    function DateOfBirth (date, mounth, year) {
        this.date = date;
        this.mounth = mounth;
        this.year = year;
        this.getYears = function() {
            var years = 2021 - this.year;
            return years + " years";
        }
    }
    function Country (name, odds, continent) {
        this.name = name,
        this.odds = odds,
        this.continent = continent,
        this.getFormatedCountry = function () {
            var formated = this.name[0];
            for(var i = 1; i<this.name.length; i++) {
                var current = this.name[i];
                switch(current) {
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
                        continue;       
                }
                formated += current;
                break; 
            }
            return formated;
        }
    }

    function Person (name, surname, dateOfBirth) {
        this.name = name,
        this.surname = surname,
        this.dateOfBirth = dateOfBirth,
        this.getPerson = function() {
            return this.name + " " + this.surname + ", " + this.dateOfBirth;
        }
    }

    function Player (person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getbettMultOdds = function () {
            return (this.betAmount * this.country.odds);  
        }
        this.getBetInfo = function() {
            return (this.country.getFormatedCountry() + ", "
            + this.country.odds * this.betAmount + " eur, "
            + this.person.name + " " + this.person.surname + ", " 
            + this.person.dateOfBirth.getYears())
        }
    }

    function Address (country, city, postalCode, street, number) {
        this.country = country,
        this.city = city,
        this.postalCode = postalCode,
        this.street = street,
        this.number = number,
        this.getAddress = function() {
            return this.street + this.number + ", " + this.postalCode + this.city + ", " + this.country.getFormatedCountry();
        }
    }

    function BettingPlace (address) {
        this.address = address;
        this.players = [];

        this.addPlayers = function(player) {
            this.players.push(player);
        }
        
            
        this.sumOfBetts = function () {
               var sum = 0;
              for(var i = 0; i<this.players.length; i++) {
                   var player = this.players[i];
                   sum += player.betAmount;
            }
            return sum;
        } 

        this.getBettingPlaceInfo = function() {
            return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.sumOfBetts();
        }
       
    }

    function BettingHouse(competition) {
        this.listOfBettingPlace = [];
        this.competition = competition;

        this.addBettingPlace = function(bettingPlace) {
            this.listOfBettingPlace[this.listOfBettingPlace.length] = bettingPlace;
        }
        this.getNoOfBettingPlace = function() {
            return this.listOfBettingPlace.length;
        }
        this.getNumberOfBetts = function () {
            var sum = 0;
            for(var i = 0; i<this.listOfBettingPlace.length; i++) {
                var currentBP = this.listOfBettingPlace[i];
                sum += currentBP.players.length;
            }
            return sum;
        }
        this.getBettPlaceInfo = function () {
            var bettPlInfo = "";
            for(var i = 0; i<this.listOfBettingPlace.length; i++) {
                var currentBP = this.listOfBettingPlace[i];
                bettPlInfo += currentBP.getBettingPlaceInfo() + "\n";
                for(var j = 0; j<currentBP.players.length; j++) {
                    var currettPl = currentBP.players[j];
                    bettPlInfo += "  " + currettPl.getBetInfo() + "\n";
                }
            }
            return bettPlInfo;
        }
        this.winnBettsCount = function(winningCountry) {
            var counter = 0;
            for(var i = 0; i<this.listOfBettingPlace.length; i ++) {
                var currentBP = this.listOfBettingPlace[i];
                
                for(var j = 0; j<currentBP.players.length; j++) {
                    var currentPl = currentBP.players[j];
                    if(currentPl.country.name === winningCountry) {
                        counter++;
                    }; 
                }
            }
            return counter;
        }
        this.getBettingHouseInfo = function () {
            return this.competition + ", " + this.getNoOfBettingPlace() + " betting places, " + this.getNumberOfBetts() +  " bets" + "\n" + this.getBettPlaceInfo() + "\n" + "There are " + this.winnBettsCount("Serbia") + " bets on Serbia.";
        }
    } 

 


    var dateOfBirthDragana = new DateOfBirth(4, 7, 1983);
    var dateOfBirthBranislav = new DateOfBirth(14, 9, 1982);
    var dateOfBirthNenad = new DateOfBirth(19, 4, 1985);
    var dateOfBirthMarija = new DateOfBirth(16, 1, 1983);
    var dateOfBirthLjiljana = new DateOfBirth(1, 7, 1961);
    var dateOfBirthMPredrag = new DateOfBirth(10, 12, 1961);
    var person1 = new Person("Dragana", "Bogicevic", dateOfBirthDragana);
    var person2 = new Person("Branislav", "Bogicevic", dateOfBirthBranislav);
    var person3 = new Person("Nenad", "Mitrovic", dateOfBirthNenad);
    var person4 = new Person("Marija", "Pavlovic", dateOfBirthMarija);
    var person5 = new Person("Ljiljana", "Mitrovic", dateOfBirthLjiljana);
    var person6 = new Person("Predrag", "Mitrovic", dateOfBirthMPredrag);
    var countrySr = new Country("Serbia", 25, CONTINENT.EUROPA);
    var countryGr = new Country("Greece", 5, CONTINENT.EUROPA);
    var addressOfBettingPlace1 = new Address (countrySr, "Belgrade", 11000, "Nemanjina", 4);
    var addressOfBettingPlace2 = new Address (countrySr, "Stara Pazova", 22300, "Cirila i Metodija", 10);
    var addressOfBettingPlace3 = new Address (countryGr, "Atina", 13427145, "Some Street", 134);
    var bettingPlace1 = new BettingPlace(addressOfBettingPlace1);
    var bettingPlace2 = new BettingPlace(addressOfBettingPlace2);
    var bettingPlace3 = new BettingPlace(addressOfBettingPlace3);
    var pleyerDragana = new Player(person1, 100, countrySr);
    var pleyerBranislav = new Player(person2, 150, countrySr);
    var pleyerNenad = new Player(person3, 170, countryGr);
    var pleyerMarija = new Player(person4, 150, countryGr);
    var pleyerLjiljana = new Player(person5, 100, countrySr);
    var pleyerPredrag = new Player(person6, 100, countrySr);
    

    bettingPlace2.addPlayers(pleyerDragana);
    bettingPlace2.addPlayers(pleyerBranislav);
    bettingPlace3.addPlayers(pleyerMarija);
    bettingPlace3.addPlayers(pleyerNenad);
    bettingPlace1.addPlayers(pleyerLjiljana);
    bettingPlace1.addPlayers(pleyerPredrag);

    var bettingHouse1 = new BettingHouse ("Football World Cup Winner");
    bettingHouse1.addBettingPlace(bettingPlace1);
    bettingHouse1.addBettingPlace(bettingPlace2);
    bettingHouse1.addBettingPlace(bettingPlace3);

    console.log(bettingHouse1.getBettingHouseInfo());
    
})();

