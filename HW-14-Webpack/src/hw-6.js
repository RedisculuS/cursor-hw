export const getAverageMark = (student) => {
    const averageArr = Object.values(student?.subjects).flat(Infinity);
    // console.log(averageArr);
    return parseFloat((averageArr.reduce((total, mark) => total + mark,0) / averageArr.length).toFixed(2));
};