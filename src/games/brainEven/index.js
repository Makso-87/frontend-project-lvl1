import readlineSync from 'readline-sync';
import { randomNumber, consTrinity } from '../../modules';
import engine from '../../engine';

const evenNumbers = () => {
  const num = randomNumber();
  console.log(`Вопрос: ${num}`);
  const answer = readlineSync.question('Ваш ответ: ');
  let result = false;
  let correctAnswer = '';

  if (num % 2 === 0 || num === 0) {
    if (answer.toUpperCase() === 'ДА') {
      result = true;
      correctAnswer = '"Да"';
    } else {
      result = false;
      correctAnswer = '"Да"';
    }
  }

  if (num % 2 !== 0) {
    if (answer.toUpperCase() === 'НЕТ') {
      result = true;
      correctAnswer = '"Нет"';
    } else {
      result = false;
      correctAnswer = '"Нет"';
    }
  }

  const results = consTrinity(result, answer, correctAnswer);
  return results;
};

const greating = 'Введите "Да", если число четное, в противном случае введите "Нет".';

const brainEven = () => {
  engine(evenNumbers, greating);
};

export default brainEven;
