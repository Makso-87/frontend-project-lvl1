import readlineSync from 'readline-sync';
import { farewell, greating, gamesCheck } from '../../engine';
import {
  get1, get2, get3, randomNumber, consTrinity, gcd,
} from '../../modules';

const greatestCommonDivider = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  let result = false;
  const correctAnswer = gcd(num1, num2);

  console.log(`Вопрос: ${num1} ${num2}`);
  const answer = Number(readlineSync.question('Ваш ответ: '));

  if (answer === correctAnswer) result = true;

  const results = consTrinity(result, answer, correctAnswer);
  return results;
};

const brainGcd = () => {
  const userName = greating('Вычислите "НОД" - наибольший общий делитель двух чисел.');
  const checkResults = gamesCheck(greatestCommonDivider);
  farewell(userName, get1(checkResults), get2(checkResults), get3(checkResults));
};

export default brainGcd;
