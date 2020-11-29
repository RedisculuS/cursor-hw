//1
const getRandomArray = (length , min , max) => {
    const randomArrLength = +length;
    const minNumArr = Math.round(+min);
    const maxNumArr = Math.round(+max);
    let randomArr = [];
    for (let i = 0; i < randomArrLength; i++) {
        randomArr[i] = Math.floor(Math.random() * (maxNumArr - minNumArr + 1)) + minNumArr;
    }
    return randomArr;
};
// console.log(getRandomArray(15,1,100));

//2 
const getModa = (...numbers) => {
    const numbersArr = [...numbers].filter(number => { return Math.trunc(number) === number});;
    let modaArr ;
        let maxCount = 0;
        for (let i = 0; i < numbersArr.length; i++){
            let counter = 0;
            for(let k = i; k < numbersArr.length; k++){
                if (numbersArr[i] === numbersArr[k]) {
                    ++counter;
                }
            }
            if (counter > maxCount) {
                maxCount = counter;
                modaArr = (numbersArr[i]);
            }
        }
    return modaArr;
};
// console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(getModa(4, 1, 4, 2));

//3 
const getAverage = (...numbers) => {
    const averageArr = [...numbers].filter(number => { return Math.trunc(number) === number});;
    const total = averageArr.reduce((total, number) => {
        return total + number;
    }, 0);
    const average = total / averageArr.length;
    return average;
};
// console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//4 
const getMedian = (...numbers) => {
    const medianArr = [...numbers].filter(number => { return Math.trunc(number) === number});
    medianArr.sort((a, b) => a - b);
    console.log(medianArr);
    if ((medianArr.length) % 2 === 1) {
        return (medianArr[Math.floor(medianArr.length / 2)]);
    } else {
        return ((medianArr[medianArr.length / 2] + medianArr[(medianArr.length / 2) - 1]) / 2);
    }
};
// console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(getMedian(1, 3, 2.5, 4));
// console.log(getMedian(1, 3, 2, 4, 5));

//5
const filterEvenNumbers = (...numbers) => {
    const notYetEvenArr = [...numbers];
    const evenNumArr = notYetEvenArr.filter(evenNum => {return evenNum % 2 === 1});
    return evenNumArr;
};
// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7));

//6
const countPositiveNumbers = (...numbers) => {
    const allNum = [...numbers];
    const positiveNum = allNum.filter(plusNum => {return plusNum > 0});
    return positiveNum.length;
};
// console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

//7
const getDividedByFive = (...numbers) => {
    const notYetDivNum = [...numbers];
    const divNumArr = notYetDivNum.filter(fiveDivNum => {return fiveDivNum % 5 === 0});
    return divNumArr;
};
// console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//8 
const replaceBadWords = (string) => {
    let badWord = ['fuck' , 'shit'];
    let withBadWordsArr = string.split(" ");
    const onlyGoodWordArr = withBadWordsArr.map((word) => {
        let newWord = '';
        for (let wordBad of badWord) {
            if (word.includes(wordBad)) {
                newWord = '*'.repeat(wordBad.length) + word.slice(wordBad.length);
                break;
            } else {
                newWord = word;
            }
        }
        return newWord;
    });
    return onlyGoodWordArr.join(" ");
};
 console.log(replaceBadWords("Are you fucking kidding?"));

//9
const divideByThree = (word) => {
    let wordArr = word.toLowerCase().split('').filter(char => char !== " ");
    const divider = 3;
    let wordDivArr = [];
    while (wordArr.length >= divider) {
        let smallArr = [];
        for (let i = 0; i < divider; i++) {
            smallArr.push(wordArr.shift());
        }
        wordDivArr.push(smallArr.join(''));
    }
    if (wordArr.length > 0) {
        wordDivArr.push(wordArr.join(''));
    }
    return wordDivArr;
};
// console.log(divideByThree('commander'));

//10
// const generateCombinations = (word) => {

// };
// console.log(generateCombinations("man"));

document.writeln(`Функція 1 : ${getRandomArray(15,1,100)} <br>
                  Функція 2 : ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>
                  Функція 3 : ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>
                  Функція 4 : ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>
                  Функція 5 : ${filterEvenNumbers(1, 2, 3, 4, 5, 6, 7)} <br>
                  Функція 6 : ${countPositiveNumbers(1, -2, 3, -4, -5, 6)} <br>
                  Функція 7 : ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} <br>
                  Функція 8 : "${replaceBadWords("Are you fucking kidding?")}" and "${replaceBadWords("It's a bullshit!")}" <br>
                  Функція 9 : ${divideByThree('commander')} <br>
                  `);