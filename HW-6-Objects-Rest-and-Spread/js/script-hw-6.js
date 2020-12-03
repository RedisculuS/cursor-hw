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
    let subjectArr = Object.keys(student?.subjects);
    subjectArr = subjectArr.map((subjName) => {
        return (subjName[0].toUpperCase() + subjName.slice(1).toLowerCase()).replaceAll("_"," ");
    }) 
    return subjectArr;
};
// console.log(getSubjects(students[0]));

//2 
const getAverageMark = (student) => {
    const averageArr = Object.values(student?.subjects).flat(Infinity);
    // console.log(averageArr);
    return parseFloat((averageArr.reduce((total, mark) => total + mark,0) / averageArr.length).toFixed(2));
};
// console.log(getAverageMark(students[2]));

//3
const getStudentInfo = (student) => {
  const {course, name} = student;
  return {
    course,
    name,
    averageMark: getAverageMark(student)
  }
};
// console.log(getStudentInfo(students[1]));

//4
// const getStudendsNames = (student) => {
//   const studNames = student.map((stud) => stud?.name,0).sort();
//   return studNames
// };
const getStudendsNames = (student) => student.map((stud) => stud?.name,0).sort();
// console.log(getStudendsNames(students));

//5
const getBestStudent = (student) => {
  let bestMark = 0;
  const sortMark = student.reduce((bestStud, simpleStud) => {
    const averageMarkStud = getAverageMark(simpleStud);
    if (bestMark < averageMarkStud) {
      bestMark = averageMarkStud;
      return bestStud = simpleStud?.name;
    } else if (bestMark === averageMarkStud) {
      return bestStud += simpleStud?.name;
    }
  },'');
  return sortMark;
};
// console.log(getBestStudent(students));

//6
const calculateWordLetters = (string) => {
  const stringArr = string.split('');
  let resultLetters = {};
  stringArr.forEach(letter => {
    resultLetters[letter] ? (resultLetters[letter]++) : (resultLetters[letter] = 1);
  });
  return resultLetters;
};
// console.log(calculateWordLetters("Аккомодация"));

document.writeln(`Функція 1: ${getSubjects(students[0])} <br>
                  Функція 2: ${getAverageMark(students[2])} <br>
                  Функція 3: ${Object.entries(getStudentInfo(students[1]))} <br>
                  Функція 4: ${getStudendsNames(students)} <br>
                  Функція 5: ${getBestStudent(students)} <br>
                  Функція 6: ${Object.entries(calculateWordLetters("Аккомодация"))} 
                  `);