import { get1, get2, get3 } from '../../modules/trinity';
import evenNummbers from './evenNumbers';
import gamesCheck from '../../modules/engine/gamesCheck';
import greating from '../../modules/engine/greating';
import farewell from '../../modules/engine/farewell';

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

const brainEven = () => {
  const userName = greating('Введите "Да", если число четное, в противном случае введите "Нет".');
  const checkResults = gamesCheck(evenNummbers);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainEven;
