export function sumWithOddNum (minNum,maxNum,needOddNum) {
    let sum = 0;
    const max = maxNum;
    const min = minNum;
    const oddNum = needOddNum;
    for (let i = min; i <= max; i++) {
        if (oddNum && i % 2 === 0) {
            continue;
        }
        sum += i;
    }
    return sum;
}