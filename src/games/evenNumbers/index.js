import readlineSync from 'readline-sync';
import randomNmber from './randomNmber';
import { cons } from '../../pairs';

const evenNummbers = () => {
  const num = randomNmber();
  console.log(`Вопрос: ${num}`);
  const answer = readlineSync.question('Ваш ответ: ');
  let result = false;
  let correctAnswer = '';

  if (num % 2 === 0 || num === 0) {
    if (answer.toUpperCase() === 'ДА') {
      result = true;
    } else {
      result = false;
      correctAnswer = '"Да"';
    }
  }

  if (num % 2 !== 0) {
    if (answer.toUpperCase() === 'НЕТ') {
      result = true;
    } else {
      result = false;
      correctAnswer = '"Нет"';
    }
  }

  const results = cons(result, correctAnswer);
  return results;
};

export default evenNummbers;