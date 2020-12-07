const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(salary) {
 return +((this?.tax * salary).toFixed(2));
}
// console.log(getMyTaxes.call(ukraine,1000));

//2
function getMiddleTaxes() {
    return +((this?.middleSalary * this?.tax).toFixed(2));
}
// console.log(getMiddleTaxes.call(litva));

//3
function getTotalTaxes() {
    return +((this?.tax * this?.middleSalary * this?.vacancies).toFixed(2));
}
// console.log(getTotalTaxes.call(latvia));

//4
const randomSalary = (min = 1500, max = 2000) => (Math.floor(Math.random() * (max - min + 1)) + min);

function getMySalary() {
    const salary = +randomSalary().toFixed(2);
    const taxes = +getMyTaxes.call(this, salary).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);
    return {
        salary, taxes, profit
    }
}
// function getMySalary() {
//     const salary = randomSalary();
//     const taxes = getMyTaxes.call(this, salary);
//     const profit = salary - taxes;
//     return {
//         salary : +salary.toFixed(2),
//         taxes : +taxes.toFixed(2),
//         profit : +profit.toFixed(2)
//     }
// }

setInterval(() => console.log(getMySalary.call(ukraine)), 10000);

document.writeln(`Функція №1: ${getMyTaxes.call(ukraine,1000)} <br>
                  Функція №2: ${getMiddleTaxes.call(litva)} <br>
                  Функція №3: ${getTotalTaxes.call(latvia)} <br>
                  Функція №4: Дивись консоль :) <br>`);