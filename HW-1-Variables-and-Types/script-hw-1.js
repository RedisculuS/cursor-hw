const chocolatePrice = 15.678;
const chedderPrice = 123.965;
const penPrice = 90.2345;

console.log(Math.max(chocolatePrice , chedderPrice , penPrice));

console.log(Math.min(chedderPrice , chocolatePrice , penPrice));

const sumOfProductsPrices = chedderPrice + chocolatePrice + penPrice;
console.log(sumOfProductsPrices);

const chocolatePriceNoCoins = Math.floor(chocolatePrice);
const chedderPriceNoCoins = Math.floor(chedderPrice);
const penPriceNoCoins = Math.floor(penPrice);
const sumOfProductsPricesNoCoins = chedderPriceNoCoins + chocolatePriceNoCoins + penPriceNoCoins;
console.log(sumOfProductsPricesNoCoins); 

console.log(Math.round(sumOfProductsPrices / 100) * 100);

const isEven = sumOfProductsPricesNoCoins % 2 === 0;
console.log(isEven);

const clientMoney = 500;
const clientChange = clientMoney - sumOfProductsPrices;
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