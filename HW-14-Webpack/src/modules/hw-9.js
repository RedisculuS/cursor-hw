export function generateBlocks (blockCount) {
    const cubsArea = document.querySelector('cubArea');
    const getRandomNumber = (minNum = 0, maxNum = 256) => (Math.random() * ((maxNum - minNum)).toFixed(2));
    const getRandomColor = () => `rgba(${getRandomNumber()} , ${getRandomNumber()} , ${getRandomNumber()})`;
    const blocks = document.querySelectorAll('.block');

    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = getRandomColor();
        cubsArea.append(block);
    }

    let intID = setInterval(() => blocks.forEach((block) => block.style.backgroundColor = getRandomColor()),1000);

}
