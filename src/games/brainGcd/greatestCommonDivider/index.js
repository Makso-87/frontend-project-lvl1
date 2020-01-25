import readlineSync from 'readline-sync';
import randomNumber from '../../../modules/randomNumber';
import { cons } from '../../../modules/trinity';
import gcd from '../../../modules/gcd';

const greatestCommonDivider = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  let result = false;
  const correctAnswer = gcd(num1, num2);

  console.log(`Вопрос: ${num1} ${num2}`);
  const answer = Number(readlineSync.question('Ваш ответ: '));

  if (answer === correctAnswer) result = true;

  const results = cons(result, answer, correctAnswer);
  return results;
};

export default greatestCommonDivider;
