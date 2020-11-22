const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1
function studentsPairs (studentsArr) {
    const newStudents = [...studentsArr];
    return pairResult = [
        [newStudents[0], newStudents[3]],
        [newStudents[1], newStudents[5]],
        [newStudents[2], newStudents[4]]
    ];
}
const pairs = studentsPairs(students);
console.log(pairs);

//2
function pairsAndThemes (pairResultFromPrevious, themesArr) {
    const resultArr = [];
    const pairResultNormal = [...pairResultFromPrevious];
    const themesArrNormal = [...themesArr];
    for (let i = 0; i < pairResultNormal.length; i++) {
        resultArr.push([pairResultNormal[i].join(" і ") , themesArrNormal[i]]);
    }
    return resultArr;
}
const themesPair = pairsAndThemes(pairs, themes);
console.log(themesPair);

//3
function marksForStudents (studentsArr , marksArr) {
    const studentsWithMarks = [];
    for (let i = 0; i < studentsArr.length; i++) {
        studentsWithMarks.push([studentsArr[i], marksArr[i]]);
    }
    return studentsWithMarks;
}
const marksStudents = marksForStudents(students, marks);
console.log(marksStudents);

//4
function markForProject (pairsArr , themesArr) {
    const pairsArrNew = [...pairsArr]; 
    const themesArrNew = [...themesArr]; 
    const randomMarkForProj = [];
    const maxNum = 5;
    const minNum = 1;
    for (let i = 0; i < pairsArrNew.length; i++) {
        randomMarkForProj.push([pairsArrNew[i].join(" і ") , themesArrNew[i] , Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum])
    }
    return randomMarkForProj;
}
const marksAndProject = markForProject(pairs, themes);
console.log(marksAndProject);