var createdMovieList = [];
var createdProgramsList = [];
var $movieTitle = $("#title");
var $movieLenght = $("#lenght");
var $movieGenre = $("#selectGenre");
var $movieList = $("#movieList");
var $dateOfProgram = $("#date"); 
var $movieSelectList = $("#selectMovie");
var $programList = $("#programList")
var $programSelectList = $("#selectProgram");
var $errorDisplay = $("#paragrafForError");
var $error2Display = $("#paragraf2ForError");


$("#createMovieBtn").on("click", function(){
    var titleValue = $movieTitle.val();
    var lenghtValue = $movieLenght.val();
    var genreValue = $movieGenre.val();
    var regex = /^[1-9]\d*$/;
    
    if(!titleValue) {
        $errorDisplay.html("You need to add movie title in Title input field.");
        return;
    } 
    if(!lenghtValue) {
        $errorDisplay.html("You need to add movie lenght in Lenght input field.");
        return;
    }
    if(!lenghtValue.match(regex)) {
        $errorDisplay.html("Lenght must be a number, and it has to be positiv.");
        return;
    }
    
    else {
        $errorDisplay.empty();
    }

    var lenghtMin = parseInt(lenghtValue);
    var newMovie = new Movie(titleValue, lenghtMin, genreValue);
    createdMovieList.push(newMovie);
    $movieList.append("<li>" + newMovie.getData() + "</li>");
    $movieSelectList.append("<option class='movieOptions' data-id=" + newMovie.id + ">" + newMovie.getData() + "</option>");
    
    $movieTitle.val(""); 
    $movieLenght.val("");

})

$("#createProgramBtn").on("click", function() {
    var dateValue = $dateOfProgram.val();
    var date = dateValue.split("-");
    var year = parseInt(date[0]);
    var month = parseInt(date[1]);
    var day = parseInt(date[2]);
   

    var dateToday = new Date(); 
    
    
    if(!dateValue) {
        $error2Display.html("You need to choose date of program.");
        return;
    } 
    else {
        $error2Display.empty();
    }
    
    var newProgram = new Program(year, month, day);
    createdProgramsList.push(newProgram);
    $programSelectList.append("<option class='programOptions' data-id=" + newProgram.id +">" + newProgram.formatedDate() + "</option>");
   
    
})
$("#addMovieBtn").on("click", function() {
    var selectedMovie = $( "select option.movieOptions:selected" );
    var selectedProgram = $( "select option.programOptions:selected" );

    var selectedMovieId = parseInt($(selectedMovie).attr("data-id"));
    var selectedProgramId = parseInt($(selectedProgram).attr("data-id"));
    var movieToAdd;
    var programForAdding;

    for(var i = 0; i<createdMovieList.length; i++) {
        var currentMovie = createdMovieList[i];
        var idOfCurrentMovie = currentMovie.id;
        if(idOfCurrentMovie === selectedMovieId) {
            movieToAdd = currentMovie;
        }
    }
    for(var i = 0; i<createdProgramsList.length; i++) {
        var currentProgram = createdProgramsList[i];
        var idOfCurrentProgram = currentProgram.id;
        if(idOfCurrentProgram === selectedProgramId) {
            programForAdding = currentProgram;
        }
    }

    programForAdding.addMovie(movieToAdd);
    var listOfProgramsWithMovies = $(".listOfFinPrograms");
    var existingInListProgId = false;
    for(var i = 0; i<listOfProgramsWithMovies.length; i++) {
        var currentLi = $(listOfProgramsWithMovies[i]);
        if(parseInt(currentLi.attr("data-id")) === programForAdding.id) {
            existingInListProgId = true;
            currentLi.remove();
        } 
        
    }

    if(existingInListProgId){
        
        $programList.append("<li class= 'listOfFinPrograms' data-id ='" + programForAdding.id + "'>" + programForAdding.getData() + "</li>");
    } else {
    $programList.append("<li class= 'listOfFinPrograms' data-id ='" + programForAdding.id + "'>" + programForAdding.getData() + "</li>");
    }
    

})


