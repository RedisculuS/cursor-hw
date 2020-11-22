//1
function getMaxDigit (number) {
    let numberFunc = number;
    let max = 0;
    do {
        if ((numberFunc % 10) > max) {
            max = numberFunc % 10;
        }
        numberFunc = (numberFunc - (numberFunc % 10)) / 10;
    } while(numberFunc > 0) {}
    return max;
}

//console.log(getMaxDigit(2083.45));

//2
function getPow (number , power) {
    let numFunc = number;
    let powerFunc = power;
    for (let i = 1; i < Math.abs(powerFunc); i++) {
        numFunc *= numFunc;
    }
    if (powerFunc < 0) {
        numFunc = 1 / (numFunc);
    } else if (powerFunc === 0){
        numFunc = 1;
    }
    return numFunc;
}
// console.log(getPow(9,0));
//console.log(Math.pow(-9,-5));

//3
const formatName = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();
//console.log(formatName("ВлаДюШка"));

//4
//const cleanSalary = (salary) => salary *= 0.805;
const cleanSalary = (salary , tax = 19.5) => salary - (salary * (tax / 100));
// console.log(cleanSalary(1000));

//5
function getRandomNumber (beginNum, endNum) {
    const randomNum = Math.floor(Math.random() * (endNum - beginNum + 1)) + beginNum;
    return +randomNum;
}
//console.log(getRandomNumber(1, 10));

//6
function countLetter (letter , word) {
    let wordFunc = word;
    let letterFunc = letter;
    wordFunc = wordFunc.toLowerCase();
    let count = 0;
    for (let i = 0; i < wordFunc.length; i ++) {
        if(wordFunc[i] === letterFunc) {
            count ++;
        } 
    }
    return count;
}
//console.log(countLetter("а","Асталавіста"));

//7
function convertCurrency (moneyToConvert) {
    let converMoneytInFunc = moneyToConvert;
    const dollarBuy = 0.035;
    const dollarSell = 28.36
    converMoneytInFunc = converMoneytInFunc.toLowerCase();
    if (converMoneytInFunc.includes("uah")) {
        converMoneytInFunc = parseInt(converMoneytInFunc);
        converMoneytInFunc *= dollarBuy;
    } else if (converMoneytInFunc.includes("$")){
        converMoneytInFunc = parseInt(converMoneytInFunc);
        converMoneytInFunc *= dollarSell;
    } else {
       return alert("Error, unsuitable currency");
    }
    return +converMoneytInFunc.toFixed(2);
}
// console.log(convertCurrency("100$"));

//8
function getRandomPassword (passwordLength = 8) {
    let passLenFunc = passwordLength;
    let password = "";
    if (passLenFunc <= 0 ) {
        passLenFunc = 8;
    }
    for (let i = 0; i < passLenFunc; i++) {
        password += getRandomNumber(0,9);
    }
    return password;
}
//console.log(getRandomPassword(5));

//9
function deleteLetters (letter , word) {
    let wordDelete = word;
    let letterDelete = letter;
    wordDelete = wordDelete.toLowerCase();
    let newWord = "";
    for (let i = 0; i < wordDelete.length; i ++) {
        if(wordDelete[i] === letterDelete) {
            newWord = wordDelete.split([letterDelete]).join("");
        }
    }
    return newWord;
}
//console.log(deleteLetters("a", "Mariia"));

//10
const isPalyndrom = (word) => word.replaceAll(" ","") === word.replaceAll(" ","").split('').reverse().join('');
//console.log(isPalyndrom('кокос'));
//console.log(isPalyndrom('мадам'));

//11
function deleteDuplicateLetter (sentense) {
    let sentenceFunc = sentense;
    sentenceFunc = sentenceFunc.toLowerCase();
    let count = '';
    for (let i = 0; i < sentenceFunc.length; i ++) {
        if(sentenceFunc.lastIndexOf(sentenceFunc[i]) === sentenceFunc.indexOf(sentenceFunc[i])) {
            count += sentenceFunc[i];
        } 
    }
    return count;
}
//console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'));


document.writeln(`Функція №1: ${getMaxDigit(2083.45)} <br>`);
document.writeln(`Функція №2: ${getPow(9,-3)} <br>`);
document.writeln(`Функція №3: ${formatName("ИнноКЕНтиЙ")} <br>`);
document.writeln(`Функція №4: ${cleanSalary(1000, 25)} <br>`);
document.writeln(`Функція №5: ${getRandomNumber(1, 10)} <br>`);
document.writeln(`Функція №6: ${countLetter("а","Асталавіста")} <br>`);
document.writeln(`Функція №7: ${convertCurrency("100$")} та ${convertCurrency("100UAH")} <br>`);
document.writeln(`Функція №8: ${getRandomPassword(5)} <br>`);
document.writeln(`Функція №9: ${deleteLetters("a", "Mariia")} <br>`);
document.writeln(`Функція №10: ${isPalyndrom('мадам мадам')} та ${isPalyndrom('кокос')} <br>`);
document.writeln(`Функція №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`);