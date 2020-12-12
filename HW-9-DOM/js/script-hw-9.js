const cubsArea = document.querySelector('.cubArea');

function generateBlocks (blockCount) {
    for (let i = 0; i < blockCount; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = getRandomColor();
        cubsArea.append(block);
    }
}

const getRandomNumber = (minNum = 0, maxNum = 256) => (Math.random() * ((maxNum - minNum)).toFixed(2));

const getRandomColor = () => `rgba(${getRandomNumber()} , ${getRandomNumber()} , ${getRandomNumber()})`;

generateBlocks(25);
const blocks = document.querySelectorAll('.block');

const delay = 1000;
let intID = setInterval(() => blocks.forEach((block) => block.style.backgroundColor = getRandomColor()),1000);