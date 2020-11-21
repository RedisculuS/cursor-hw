//1
function getMaxDigit (number) {
    let max = 0;
    do {
        if ((number % 10) > max) {
            max = number % 10;
        }
        number = (number - (number % 10)) / 10;
    } while(number > 0) {}
    return max;
}

//console.log(getMaxDigit(2083.45));

//2
function getPow (number , power) {
    let powerNumber = number;
    for (let i = 1; i < Math.abs(power); i++) {
        powerNumber *= number;
    }
    if (power < 0) {
        powerNumber = 1 / (powerNumber);
    }
    return powerNumber;
}
//console.log(getPow(-9,-5));
//console.log(Math.pow(-9,-5));

//3
const formatName = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();
//console.log(formatName("ВлаДюШка"));

//4
const cleanSalary = (salary) => salary *= 0.805;
// console.log(cleanSalary(1000));

//5
function getRandomNumber (beginNum, endNum) {
    const randomNum = Math.floor(Math.random() * (endNum - beginNum + 1)) + beginNum;
    return +randomNum;
}
//console.log(getRandomNumber(1, 10));

//6
function countLetter (letter , word) {
    word = word.toLowerCase();
    let count = 0;
    for (let i = 0; i < word.length; i ++) {
        if(word[i] === letter) {
            count ++;
        } 
    }
    return count;
}
//console.log(countLetter("а","Асталавіста"));

//7
function convertCurrency (moneyConvert) {
    moneyConvert = moneyConvert.toLowerCase();
    if (moneyConvert.includes("uan")) {
        moneyConvert = parseInt(moneyConvert);
        moneyConvert *= 0.035;
    } else if (moneyConvert.includes("$")){
        moneyConvert = parseInt(moneyConvert);
        moneyConvert *= 28.36;
    } else {
       return alert("Error, unsuitable currency");
    }
    return moneyConvert.toFixed(2);
}
//console.log(convertCurrency("100$"));

//8
function getRandomPassword (passwordLength = 8) {
    let password = "";
    if (passwordLength === 0 || passwordLength < 0 ) {
        passwordLength = 8;
    }
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomNumber(0,9);
    }
    return password;
}
//console.log(getRandomPassword(5));

//9
function deleteLetters (letter , word) {
    //word = word.toLowerCase();
    let newWord = "";
    for (let i = 0; i < word.length; i ++) {
        if(word[i] === letter) {
            newWord = word.split([letter]).join("");
        }
    }
    return newWord;
}
//console.log(deleteLetters("a", "Mariia"));

//10
const isPalyndrom = (word) => word === word.split('').reverse().join('');
//console.log(isPalyndrom('кокос'));
//console.log(isPalyndrom('мадам'));

//11
function deleteDuplicateLetter (sentense) {
    sentense = sentense.toLowerCase();
    let count = '';
    for (let i = 0; i < sentense.length; i ++) {
        if(sentense.lastIndexOf(sentense[i]) === sentense.indexOf(sentense[i])) {
            count += sentense[i];
        } 
    }
    return count;
}
//console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'));


document.writeln(`Функція №1: ${getMaxDigit(2083.45)} <br>`);
document.writeln(`Функція №2: ${getPow(9,-3)} <br>`);
document.writeln(`Функція №3: ${formatName("ИнноКЕНтиЙ")} <br>`);
document.writeln(`Функція №4: ${cleanSalary(1000)} <br>`);
document.writeln(`Функція №5: ${getRandomNumber(1, 10)} <br>`);
document.writeln(`Функція №6: ${countLetter("а","Асталавіста")} <br>`);
document.writeln(`Функція №7: ${convertCurrency("100$")} та ${convertCurrency("100UAN")} <br>`);
document.writeln(`Функція №8: ${getRandomPassword(5)} <br>`);
document.writeln(`Функція №9: ${deleteLetters("a", "Mariia")} <br>`);
document.writeln(`Функція №10: ${isPalyndrom('мадам')} та ${isPalyndrom('кокос')} <br>`);
document.writeln(`Функція №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}`);