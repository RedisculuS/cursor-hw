class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.mark = [5, 4, 4, 5];
    }
    get getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }
    get getMarks() {
        return this.mark;
    }
    set setMark(markStud) {
        return this.mark.push(markStud);
    }
    get getAverageMark() {
        return this.mark.reduce((total, number) => total + number,0) / this.mark.length;
    }
    dismiss() {
        this.mark = null;
    }
    recover() {
        this.mark = [];
    }
}


const jura = new Student ('КПІ', 1,'Бондаренко Юрій Остапович');
// console.log(jura.getInfo);
// jura.setMark = 5;
// // console.log(jura);
// console.log(jura.getMarks);
// console.log(jura.getAverageMark);
// jura.dismiss();
// console.log(jura.mark);
// jura.recover();
// console.log(jura.mark);

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        this.getSholarship
    }
    get getSholarship() {
            this.interval = setInterval(() => {
                if (this.getAverageMark >= 4 && this.mark){
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
valia.recover();
valia.setMark = 4;
console.log(valia.mark);
console.log(valia.getAverageMark);
