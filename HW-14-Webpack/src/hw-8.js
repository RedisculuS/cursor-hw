export class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }
    get getMarks() {
        if (this.marks === null){
            console.log('На жаль Ви відраховані');
        }else {
            return this.marks;
        }
    }
    set setMark(markStud) {
        if (this.marks === null){
            console.log('На жаль Ви відраховані');
        }else {
            return this.marks.push(markStud);
        }
    }
    get getAverageMark() {
        if (this.marks === null){
            console.log('На жаль Ви відраховані');
        }else {
            return this.marks.reduce((total, number) => total + number,0) / this.marks.length;
        }
    }
    dismiss() {
        this.marks = null;
    }
    recover() {
        this.marks = [];
    }
}

