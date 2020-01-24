import readlineSync from 'readline-sync';
import randomNumber from '../../../randomNumber';
import { cons } from '../../../trinity';

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

  const results = cons(result, answer, correctAnswer);
  return results;
};

export default evenNumbers;
