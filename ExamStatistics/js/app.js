import Subject from "./subject.js";
import Student from "./student.js";
import Exam from "./exam.js";
import { getDataFromForm, validateData, printErrorMessage, printResult } from "./form.js";
let exams = [];
let students =[];
let subjects = [];
const $noOfPassed = $("#noOfPassed");
const $noOfFailed = $("#noOfFailed");
const $failesPercentage = $("#failedStatistics");
const $add = $("button");

$add.click(function () {
    const dataFromInput = getDataFromForm();
     try {
         validateData(dataFromInput);
         printResult(dataFromInput);
         createExam(dataFromInput);
         displayInfo();
         
     } catch (error) {
         printErrorMessage(error.message);
     }
     
 })


function createExam (data) {
    const exam = new Exam(createSubject (data), createStudent(data), data.grade);
    exams.push(exam);
}

function createStudent (data) {
    const splitNameSurname = data.nameAndSurname.split(" ");
    const name = splitNameSurname[0];
    const surname = splitNameSurname[1];
    
    const student = new Student(name, surname);
    students.push(student);
    return student;
}

function createSubject (data) {
    const subject = new Subject(data.exam);
    subjects.push(subject);
    return subject;
}

function displayInfo() {
    let noOfPassed = 0;
    let noOfFailed = 0;

    exams.forEach(function(exam){
        if(exam.hasPassed()) {
            noOfPassed++;
        } else {
            noOfFailed++;
        }
    })

    const persentage = Math.round(noOfFailed*100/students.length);

    $noOfPassed.html(noOfPassed);
    $noOfFailed.html(noOfFailed);
    $failesPercentage.html(`${persentage}%`);
}

