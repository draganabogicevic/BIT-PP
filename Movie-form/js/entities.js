function Movie (title, lengthMin , genre) {
    this.id = this.generateMovieId();
    this.title = title;
    this.lengthMin = lengthMin;
    this.genre = genre;
}
function Program(year, month, date) {
    this.id = this.generateProgramId();
    this.date = new Date(year, month, date);
    this.movieList = [];
}

Movie.prototype.generateMovieId = function() {
    return Math.floor(Math.random()*100);
}
Movie.prototype.getGenre =  function () {
    var firstLetter = this.genre.charAt(0).toUpperCase();
    var lastLetter = this.genre.charAt(this.genre.length-1).toUpperCase();
    return  firstLetter + lastLetter; 
}
Movie.prototype.getData = function() {
    return this.title + ", " + this.lengthMin + "min, " + this.getGenre();
}
Program.prototype.generateProgramId = function() {
    return Math.floor(Math.random()*100);
}
Program.prototype.formatedDate = function() {
    return this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear();
}
Program.prototype.addMovie = function(movie) {
    this.movieList.push(movie);
}
Program.prototype.getData = function() {
    var totalProgramDuration = 0;
    for(var i = 0; i < this.movieList.length; i++) {
        var current = this.movieList[i];
        totalProgramDuration += current.lengthMin;
    }
    return this.formatedDate() + ", " + this.movieList.length + " movies, duration " + totalProgramDuration + "min"; 
}

// var newMovie = new Movie("Supermen", 123, "Action");
// var newMovie2 = new Movie("Hobbit", 180, "Fantasy")
// var newProgram = new Program(2021, 7, 15);
// newProgram.addMovie(newMovie)
// newProgram.addMovie(newMovie2)

// console.log(newProgram.getData())





