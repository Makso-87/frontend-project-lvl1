import readlineSync from 'readline-sync';
import engine from '../../engine';
import { randomNumber, consTrinity, gcd } from '../../modules';

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

const greating = 'Вычислите "НОД" - наибольший общий делитель двух чисел.';

const brainGcd = () => {
  engine(greatestCommonDivider, greating);
};

export default brainGcd;
