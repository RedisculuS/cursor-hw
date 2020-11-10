const chocolateBar = 15.678;
const chedderCheese = 123.965;
const feltTipPenPack = 90.2345;
/*
//max value
console.log(Math.max(chocolateBar , chedderCheese , feltTipPenPack));

//min value
console.log(Math.min(chedderCheese , chocolateBar , feltTipPenPack));
*/
const sumOfProducts = chedderCheese + chocolateBar + feltTipPenPack;
console.log(sumOfProducts);

const chocolateBarWithoutCoins = Math.floor(chocolateBar);
const chedderCheeseWithoutCoins = Math.floor(chedderCheese);
const feltTipPenPackWithoutCoins = Math.floor(feltTipPenPack);
const sumOfProductsWithoutCoins = chedderCheeseWithoutCoins + chocolateBarWithoutCoins + feltTipPenPackWithoutCoins;
console.log(sumOfProductsWithoutCoins); 

console.log(Math.round(sumOfProducts/100)*100);
