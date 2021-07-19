export default class Student {
    constructor(studentName, surname) {
        this.studentName = studentName,
        this.surname = surname
    }
    getStudentData () {
        return `${this.studentName} ${this.surname}`
    }
}



