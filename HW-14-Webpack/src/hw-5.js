export const getMedian = (...numbers) => {
    const medianArr = [...numbers].filter(number => { return Math.trunc(number) === number}).sort((a, b) => a - b);
    return (medianArr.length) % 2 === 1 ? medianArr[Math.floor(medianArr.length / 2)] : (medianArr[medianArr.length / 2] + medianArr[(medianArr.length / 2) - 1]) / 2;
};