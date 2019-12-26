class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    // static method
    static entrollStudents(...students) {
        // code here
    }

}

let firstStudent = new Student('Colt', 'Steele');
let secondStudent = new Student('Blue', 'Steele');

