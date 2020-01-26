import readlineSync from 'readline-sync';
import simpleNumber from '../../../modules/simpleNumber';
import randomNumber from '../../../modules/randomNumber';
import { cons } from '../../../modules/trinity';

const prime = () => {
  const topLimitOfNumber = 1000;
  const number = randomNumber(topLimitOfNumber);
  console.log(`Вопрос: ${number}`);
  const answer = readlineSync.question('Ваш ответ: ');
  let correctAnswer = 'Нет';
  let result = false;

  if (simpleNumber(number)) {
    correctAnswer = 'Да';
  }

  if (answer.toUpperCase() === correctAnswer.toUpperCase()) result = true;

  const results = cons(result, answer, correctAnswer);

  return results;
};

export default prime;
