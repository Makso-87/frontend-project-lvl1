import readlineSync from 'readline-sync';
import { farewell, greating, gamesCheck } from '../../engine';
import {
  get1, get2, get3, randomNumber, simpleNumber, consTrinity,
} from '../../modules';

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

  const results = consTrinity(result, answer, correctAnswer);

  return results;
};

const brainPrime = () => {
  const userName = greating('Является ли число простым?');
  const checkResults = gamesCheck(prime);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainPrime;
