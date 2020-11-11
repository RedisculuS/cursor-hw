const chocolatePrice = 15.678;
const chedderPrice = 123.965;
const penPrice = 90.2345;

const maxPrice = Math.max(chocolatePrice , chedderPrice , penPrice);
console.log(maxPrice);

const minPrice = Math.min(chocolatePrice , chedderPrice , penPrice);
console.log(minPrice);

const sumOfProductsPrices = chedderPrice + chocolatePrice + penPrice;
console.log(sumOfProductsPrices);

const chocolatePriceNoCoins = Math.floor(chocolatePrice);
const chedderPriceNoCoins = Math.floor(chedderPrice);
const penPriceNoCoins = Math.floor(penPrice);
const sumOfProductsPricesNoCoins = chedderPriceNoCoins + chocolatePriceNoCoins + penPriceNoCoins;
console.log(sumOfProductsPricesNoCoins); 

const roundedSum = Math.round(sumOfProductsPrices / 100) * 100;
console.log(roundedSum);

const isEvenSum = sumOfProductsPricesNoCoins % 2 === 0;
console.log(isEvenSum);

const clientMoney = 500;
const clientChange = Number((clientMoney - sumOfProductsPrices).toFixed(2));
console.log(clientChange);

const averagePrice = Number((sumOfProductsPrices / 3).toFixed(2));
console.log(averagePrice);

const randomSale = Math.floor(Math.random() * 100) + 1;
console.log(randomSale);
const clientSaleToPay = Number((sumOfProductsPrices - (sumOfProductsPrices / 100 * randomSale)).toFixed(2));
console.log(clientSaleToPay);

const productsCostPrice = sumOfProductsPrices / 2;
const cleanIncome = Number((productsCostPrice - (sumOfProductsPrices / 100 * randomSale)).toFixed(2));
console.log(cleanIncome); 

document.write(`Максимальне число : ${maxPrice} <br>
                Мінімальне число : ${minPrice} <br>
                Сума вартості товарів : ${sumOfProductsPrices} <br>
                Округлена в меншу сторону вартість товарів : ${sumOfProductsPricesNoCoins} <br>
                Сума округлена до сотень : ${roundedSum} <br>
                Чи парною є сума? : ${isEvenSum} <br>
                Сума решти з ${clientMoney} грн : ${clientChange} <br>
                Середнє значення цін з копійками : ${averagePrice} <br>
                Сума із випадковою знижкою з копійками : ${clientSaleToPay} <br>
                Чистий прибуток : ${cleanIncome}`);