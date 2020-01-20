import readlineSync from 'readline-sync';
import randoNumber from './random-number';

const userNameQuestion = () => {
  const answer = readlineSync.question('Могу я спросить Ваше имя, товарищ?');
  console.log(`Привет, ${answer}!`);
};

const brainEven = () => {
  const userName = readlineSync.question('Могу я спросить Ваше имя, товарищ? ');
  console.log(`Привет, ${userName}!`);
  let answersNumber = 0;

  while (answersNumber < 3) {
    const num = randoNumber();
    const answer = readlineSync.question('Ваш ответ: ');

    if (num % 2 === 0 || num === 0) {
      if (answer.toUpperCase() === 'ДА') {
        console.log('Правильно!');
      } else {
        console.log(`"${answer}" - ответ неправильный :( Правильный ответ "Да".\n Попробуйте еще раз, ${userName}`);
        break;
      }
    }

    if (num % 2 !== 0) {
      if (answer.toUpperCase() === 'НЕТ') {
        console.log('Правильно!');
      } else {
        console.log(`"${answer}" - ответ неправильный :( Правильный ответ "Нет".\n Попробуйте еще раз, ${userName}`);
        break;
      }
    }

    answersNumber += 1;
  }

  if (answersNumber === 3) {
    console.log(`Поздравляем, ${userName}, Вы очень умный!`);
  }
};

export { userNameQuestion, brainEven };
