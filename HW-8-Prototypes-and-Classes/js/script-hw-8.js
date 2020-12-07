class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
    }
    get getInfo() {
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


const jura = new Student ('КПІ', 1,'Бондаренко Юрій Остапович');
// console.log(jura.getInfo);
// jura.setMark = 5;
// // console.log(jura);
// console.log(jura.getMarks);
// console.log(jura.getAverageMark);
// jura.dismiss();
// console.log(jura.marks);
// jura.recover();
// console.log(jura.marks);

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        this.getSholarship
    }
    get getSholarship() {
            this.interval = setInterval(() => {
                if (this.marks && this.getAverageMark >= 4){
                    console.log(`Ви отримали 1400 грн. стипендії`);
                }
            },30000);
    }
    dismiss() {
        super.dismiss();
        clearInterval(this.interval);
        console.log("Перевірте списки на відрахування, нам шкода :(");
    }
    recover() {
        super.recover();
        this.getSholarship;
    }
}
const valia = new BudgetStudent('КНТЕУ', 3, 'Самойлова Валентина Михайлівна');
console.log(valia.getAverageMark);
valia.dismiss();
valia.getMarks;
valia.recover();
valia.setMark = 4;
console.log(valia.marks);
console.log(valia.getAverageMark);
