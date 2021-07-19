"use strict";

(function() {
    function Genre (name) {
        this.name = name;
        this.getData = function () {
            return this.name.charAt(0).toUpperCase() + this.name.charAt(name.length-1).toUpperCase();
        }
    }

    function Movie (title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function() {
            return this.title + ", " + this.length + ", " + this.genre.getData();
        }
        
    }

    function Program (date) {
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = this.listOfMovies.length;
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
        }
        this.getFormatedDate = function() {
            return this.date.getDate() + "." + (this.date.getMonth()+1) + "." + this.date.getFullYear(); 
        } 
        this.getData = function() {
            return "\t" + this.getFormatedDate() + ", program lenght: " + this.getFulllength() + " min" + "\n\t" + this.getFullMovieData();  
        }
        this.getFulllength = function() {
            var fullLenght = 0;
            for(var i = 0; i<this.listOfMovies.length; i++) {
                var currentMovie = this.listOfMovies[i];
                fullLenght += parseInt(currentMovie.length);
            }
            return fullLenght;
        }
        this.getFullMovieData = function() {
            var fullData = "";
            for(var i = 0; i<this.listOfMovies.length; i++) {
                var currentMovie = this.listOfMovies[i];
                fullData += "\t" + currentMovie.getData() + "\n\t";
            }
            return fullData;
        }
    }

    function createMovie (movitTitle, genre, movieLenght) {
        var movie = new Movie(movitTitle, new Genre(genre), movieLenght);
        return movie;
    }

    function createProgram (date) {
        var program = new Program (new Date(date));
        return program;
    }

    function Festival (name) {
        this.name = name;
        this.listOfPrograms = [];
        this.addProgram = function(program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function() {
            if (this.listOfPrograms.length === 0) {
                return this.name + "\n" + "\t" + "Program to be announced";
            } else {
            return this.name + " ima " + this.getNumberOfAllMovies() + " movie titles" + "\n" + this.getFullProgramData();
            } 
        }
        this.getNumberOfAllMovies = function() {
            var numberOfAllMovies = 0;
            var maxNumberOfMovies = 15;
            for(var i = 0; i<this.listOfPrograms.length; i++) {
                var currentProgram = this.listOfPrograms[i];
                numberOfAllMovies+= currentProgram.listOfMovies.length;
            }
            if(numberOfAllMovies>maxNumberOfMovies) {
                var err = new Error("Maximum number of movies is 15, pleace reduce your programs");
                console.log(err);
            }
            return numberOfAllMovies;
        }
        this.getFullProgramData = function () {
            var fullProgramData = "";
            for(var i = 0; i<this.listOfPrograms.length; i++) {
                var curretProgram = this.listOfPrograms[i];
                fullProgramData += curretProgram.getData() + "\n";
            }
            return fullProgramData;
        }

    }




 
    var film1 = createMovie("The Shawshank Redemption",'action', "130min" );
    var film2 = createMovie("Spider-Man: Homecoming", "action", "133min");
    var film3 = createMovie("War for the Planet of the Apes","drama","140min");
    var film4 = createMovie("The Dark Tower", "western", "95min");
    var film5 = createMovie("Deadpool", "comedy", "108min");
    
    var program1 = createProgram("2021, 6, 13");
    var program2 = createProgram("2021, 6, 14");

    program1.addMovie(film1);
    program1.addMovie(film2);
    program1.addMovie(film3);
    program1.addMovie(film4);
    program2.addMovie(film5);
    var festival = new Festival("Suboticki letnji filmski festival");
    // festival.addProgram(program1);
    // festival.addProgram(program2);
    console.log(festival.getData());
})()