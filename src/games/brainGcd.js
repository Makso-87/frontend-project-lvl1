import engine from '../engine';
import { randomNumber, consTrinity } from '../modules';

const gcd = (num1, num2) => {
  let divider = 0;
  let minNumber = false;
  if (num1 > num2) {
    divider = num1 % num2;
    minNumber = num2;
  } else {
    divider = num2 % num1;
    minNumber = num1;
  }
  if (divider === 0) return minNumber;

  return gcd(divider, minNumber);
};

const greatestCommonDivider = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const correctAnswer = gcd(num1, num2);
  const question = `${num1} ${num2}`;

  const results = consTrinity(question, String(correctAnswer));
  return results;
};

const greating = 'Calculate "GSD" - the greatest common divisor of two numbers.';

const brainGcd = () => {
  engine(greatestCommonDivider, greating);
};

export default brainGcd;
