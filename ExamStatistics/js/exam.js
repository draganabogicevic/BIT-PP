

export default class Exam {
    constructor(subject, student, grade) {
        this.subject = subject,
        this.student = student,
        this.grade = grade
    }
    getExamInfo() {
        return `${this.getSubjectName()}${this.getStudentData()}`
    }
    hasPassed() {
        let hasPassed = true;
        if(this.grade <= 5) {
            hasPassed = false;
        }
        return hasPassed;
    }
}
