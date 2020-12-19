async function getRandomChinese (length) {
    let outputChar = '';
    const delay = 50;

    const makeChineseChar = () => String.fromCharCode(String(Date.now()).slice(-5));

	let getRandomChar = () => new Promise((resolve) => setTimeout(() => {return resolve(makeChineseChar())},delay));

	while (length > 0) {
		outputChar += await getRandomChar();		
		length--;
    };
    
	return outputChar;
}

getRandomChinese(4).then((result) => console.log(result));