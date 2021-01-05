import {randomSale} from "./hw-1";
import {sumWithOddNum} from "./hw-2";
import {getPow} from "./hw-3";
import {studentsPairs} from "./hw-4";
import {getMedian} from "./hw-5";
import {getAverageMark} from "./hw-6";
import {getMiddleTaxes} from "./hw-7";
import {Student} from "./hw-8";
import {generateBlocks} from "./hw-9";
import "/style-hw-9.css";


// import "./style.css";
import screen from "./image.jpg";

console.log(randomSale());
console.log(sumWithOddNum(1,10,true));
console.log(getPow(2,4));
console.log(studentsPairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]));
console.log(getMedian(1, 3, 2, 4, 5));

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

console.log(getAverageMark(students[2]));

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
console.log(getMiddleTaxes.call(ukraine));

const valia = new Student('КНТЕУ', 3, 'Самойлова Валентина Михайлівна');
console.log(valia.getInfo());

console.log(generateBlocks(25));

