export function getPow (number , power) {
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