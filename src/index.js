import readlineSync from 'readline-sync';

const userNameQuestion = () => {
	const answer = readlineSync.question('Могу я спросить Ваше имя? ');
	console.log(`Привет, ${answer}!`);
}

export { userNameQuestion };