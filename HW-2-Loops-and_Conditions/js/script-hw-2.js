let minNum;
let maxNum;

do {
    minNum = Number(prompt("Введіть число з якого будемо починати розрахунок"));
} while (!Number.isInteger(minNum));

do {
    maxNum = Number(prompt("Введіть число до якого будемо складати"));
} while (!Number.isInteger(maxNum));

let needOddNum;
needOddNum = confirm("Потрібно пропускати парні числа при обчисленні суми?");

let sum = 0;

if (needOddNum == 0) {
    for (minNum; minNum <= maxNum; minNum++) {
        sum += minNum;
    }
    console.log(`Сумма чисел з ${minNum} до ${maxNum} дорівнює : ${sum}`);
} else { 
    for (minNum; minNum <= maxNum; minNum++) {
        if (minNum % 2 === 0) {
            continue;
        }else{
            sum += minNum;
        }
    }
    console.log(`Сумма чисел з ${minNum} до ${maxNum} без підрахунку пірних чисел дорівнює : ${sum}`);
}