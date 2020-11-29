const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  
//1
const getSubjects = (student) => {
    let subjectArr = Object.keys(student.subjects);
    subjectArr = subjectArr.map((subjName) => {
        return (subjName[0].toUpperCase() + subjName.slice(1).toLowerCase()).replaceAll("_"," ");
    }) 
    return subjectArr;
};
// console.log(getSubjects(students[0]));

//2 ?
const getAverageMark = (student) => {
    const averageArr = Object.values(student.subjects);
    let averageArrEverySubj = [];
    for (i = 0; i < averageArr.length; i++) {
        const total = averageArr[i].reduce((total, number) => {
            return total + number;
        }, 0);
        const average = (total / averageArr[i].length).toFixed(2);
        averageArrEverySubj.push(average);
    }
    return averageArrEverySubj;
};
console.log(getAverageMark(students[0]));

//3
const getStudentInfo = () => {};
// console.log(getStudentInfo());

//4
const getStudendsNames = () => {};
// console.log(getStudendsNames());

//5
const getBestStudent = () => {};
// console.log(getBestStudent());

//6
const calculateWordLetters = () => {};
// console.log(calculateWordLetters());