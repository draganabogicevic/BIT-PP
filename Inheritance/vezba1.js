(function(){
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    function Employee(name, surname, job, salary) {
        Person.call(this, name, surname);
        this.job = job;
        this.salary = salary;
    }
    function Developer(name, surname, job, salary, specialization) {
        Employee.call(this, name, surname, job, salary);
        this.specialization = specialization;
    }
    function Manager(name, surname, job, salary, department) {
        Employee.call(this, name, surname, job, salary);
        this.department = department;
    }
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    Developer.prototype = Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;

    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Developer;

    Developer.prototype.getSpecialization = function () {
        return this.specialization;
    }

    Manager.prototype.getDepartment = function() {
        return this.department;
    }
    Manager.prototype.changeDepartment = function(department) {
        this.department = department;
        return this.department;
    }
    Employee.prototype.getData = function() {
        return this.name + " " + this.surname + ", " + this.salary;
    }
    Employee.prototype.getSalary = function() {
        return this.salary + " EUR";
    }
    Employee.prototype.increaseSalary = function() {
        return this.salary + this.salary*10/100;
    }

    var developerPerica = new Developer("Perica", "Peric", "Web developer", 1700, "JavaScript");
    var managerDjura = new Manager("Djura", "Djuric", "Manager", 1950, "Sales");

    console.log(developerPerica.getData());
    console.log(managerDjura.increaseSalary());
    
})();