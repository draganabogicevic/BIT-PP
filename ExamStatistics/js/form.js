const $examSelect = $("select");
const $name = $("#name"); 
const $grade = $("#grade");
const $errorInInputField = $("#error");
const $forPassed = $("#forPassed");
const $forFailed = $("#forFailed");
let alreadyAdded = [];


export function getDataFromForm () {
    return {
        exam : $examSelect.val(),
        nameAndSurname : $name.val(),
        grade : parseInt($grade.val())
    }
}

export function validateData (data) {
    const regFullName = /^[A-ZČĆŽĐŠ][a-zčćžđš]+ [A-ZČĆŽĐŠ][a-zčćžđš]+$/;

    Object.keys(data).forEach(function(key){
        if(!data[key]) {
            let requiredData = `${key.charAt(0).toUpperCase()}${key.substr(1, key.length-1)}`;
            throw new Error (`${requiredData} must be enterd or chosen.`);
        } else if(!regFullName.test(data.nameAndSurname)) {
            throw new Error ("Please enter valid name and surname.")
        } else if (data.grade < 0 || data.grade > 10) {
            throw new Error ("Please enter valid grade (1 to 10).")
        }
        alreadyAdded.forEach(function(el) {
            if(el.student === data.nameAndSurname && el.exam === data.exam) {
                throw new Error ("This student is already added to the list for this subject.")
            }
        })
    })

    
}

export function printErrorMessage (message) {
    resetError();
    $errorInInputField.html(message);
}

function resetError () {
    $errorInInputField.empty();
}

export function printResult (data) {
    resetError();
    clearInput();
    if(data.grade > 5) {
        $forPassed.append(`<div class="col-sm-9 text-dark"><li>${data.exam}-${data.nameAndSurname}</li></div>`);
        $forPassed.append(`<div class="col-sm-1 offset-md-1 text-info">${data.grade}</div>`);
    } else {
        $forFailed.append(`<div class="col-sm-9 text-dark"><li>${data.exam}-${data.nameAndSurname}</li></div>`);
        $forFailed.append(`<div class="col-sm-1 offset-md-1 text-danger">${data.grade}</div>`);
    }
    let addedInfo = {
        exam: data.exam,
        student: data.nameAndSurname
    }

    alreadyAdded.push(addedInfo);
}

function clearInput () {
    resetError();
    $name.val("");
    $grade.val("");
}
